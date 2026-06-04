# Identify Technical Edge Cases

> For a given workflow, systematically identify edge cases that could cause failures or unexpected behavior.

## Prompt Template

```
<identify_technical_edge_cases>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_code: If available, use it to trace the actual logic paths, field accesses, and adaptor operations to identify concrete failure points. If not: "Can you share the workflow code (expressions for each step) so I can identify specific edge cases in the implementation?"
- workflow_spec: If available, use it to understand the intended behaviour and identify gaps between spec and likely real-world conditions. If not: "What does this workflow do end-to-end — what triggers it, what systems does it connect, and what data does it move or transform?"
- sample_payload: If available, use it to understand the baseline data shape and identify deviations that could occur. If not: "Can you provide a sample of the incoming data payload so I can identify what variations or anomalies might arrive?"
- production_error_history: If available, use it to focus on edge cases that have already manifested. If not: "Has this workflow been running in production? If so, what errors or unexpected behaviours have you seen?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What triggers this workflow (webhook, cron, flow trigger) and what system sends the triggering data?
2. What are the source and destination systems, and what adaptors are used?
3. What is the expected data volume and frequency — how many records per run, how often does the workflow fire?
4. Is this a single-record workflow (one event triggers one record) or a batch workflow (one run processes many records)?
5. Are there lookup or reference data dependencies — does the workflow need to fetch data from another system before processing?
6. What is the deployment context — is this running in a low-connectivity environment, connecting to government systems with maintenance windows, or integrating with rate-limited APIs?
</inputs>

<framework>
You are a senior quality engineer specialising in integration reliability for OpenFn workflows deployed in development and humanitarian contexts. You know that edge cases are not theoretical — in field deployments connecting health systems, social protection databases, and mobile data collection tools, unusual data arrives routinely. A community health worker submits a form offline and it syncs three days later. A government system goes down for maintenance without notice. A programme officer accidentally re-submits a batch. Your job is to systematically catalogue what can go wrong so the team can decide what to handle before going to production.

PHASE 1: INPUT DATA EDGE CASES

Systematically examine what variations in the incoming data could cause failures:

EMPTY AND MISSING DATA:
- Empty payload: The trigger fires but state.data is empty, null, or has an unexpected shape. This happens when webhooks fire health checks, when source systems send malformed messages, or when a cron trigger runs but the source has no new data.
- Missing required fields: A record arrives without a field the mapping depends on. In mobile data collection (CommCare, ODK, KoboToolbox), fields that are conditionally shown on the form may be absent entirely — not null, but missing from the JSON.
- Empty strings vs. null vs. undefined: The source sends `""` where the code expects null, or vice versa. Different serialisation libraries handle absent values differently.
- Empty arrays: A repeating group (e.g., household members, visit diagnoses) has zero entries. The code iterates over it expecting at least one item.

DUPLICATE AND REPEATED DATA:
- Duplicate submissions: The same record is sent twice — identical webhook payloads arriving seconds apart due to network retries, user double-clicks, or offline sync replay. If the workflow uses create() instead of upsert(), this creates duplicate records in the destination.
- Reprocessed batches: An operator re-runs a workflow manually, processing records that were already successfully synced. Without idempotency checks, this creates duplicates or overwrites with stale data.
- Out-of-order delivery: In asynchronous systems, an update may arrive before the initial create. The workflow tries to update a record that does not yet exist.

DATA FORMAT ANOMALIES:
- Encoding issues: Non-ASCII characters in names, addresses, or notes — accented characters, Arabic/Devanagari script, emoji. If the destination API or database does not support the encoding, the write fails silently or corrupts the data.
- Unexpected data types: A field expected to be a number arrives as a string (e.g., `"42"` instead of `42`), or a date field contains free text. JSON payloads from form builders are especially prone to this.
- Extremely long values: A text field contains thousands of characters, exceeding the destination column length or API field limit.
- Special characters in identifiers: Slashes, ampersands, or spaces in ID fields that are used in URL construction for API calls.

PHASE 2: TEMPORAL AND TIMING EDGE CASES

Identify time-related issues:

TIMEZONE MISMATCHES:
- The source system records timestamps in local time without timezone offset. The workflow or destination interprets them as UTC, shifting dates by hours — potentially changing the date entirely for submissions near midnight.
- Daylight saving time transitions cause the same local time to occur twice or a local time to be skipped, creating ambiguous or invalid timestamps.

STALE AND DELAYED DATA:
- Offline sync delay: Mobile data collected offline syncs hours or days later. The timestamp on the record is in the past, but it arrives as "new" data. If the workflow uses cursor()-based polling (fetching records since the last sync), the cursor may have already advanced past this record's timestamp.
- Clock skew: The source system's clock is wrong. Records have future timestamps or timestamps that do not match the expected sequence.

SCHEDULING AND CONCURRENCY:
- Overlapping cron runs: A cron-triggered workflow takes longer than the cron interval. The next run starts before the previous one finishes, potentially processing the same records twice or creating race conditions on shared state.
- Maintenance windows: The destination system is down for scheduled maintenance during a cron run. The workflow fails, and depending on retry configuration, may or may not recover.
- Rate limit timing: A batch run hits API rate limits partway through. The first N records succeed, then subsequent requests are throttled or rejected.

PHASE 3: SYSTEM AND API EDGE CASES

Identify failures at the system integration boundary:

API RESPONSE ANOMALIES:
- Unexpected response shapes: The API returns a 200 OK but with an empty body, a different JSON structure than expected, or an HTML error page instead of JSON (common when hitting a load balancer error page).
- Partial success in bulk operations: The destination API accepts a batch but returns mixed results — some records created, some rejected. The workflow must parse the response to identify which records failed.
- Pagination changes: An API that previously returned all results now paginates. The workflow only processes the first page without realising there are more.
- API versioning: The destination system is upgraded and the API response format changes subtly — a field is renamed, a nested object is flattened, or a new required field is added.

AUTHENTICATION AND AUTHORISATION:
- Token expiry mid-run: An OAuth token expires during a long-running batch. The first API calls succeed, then subsequent calls fail with 401. The workflow may not distinguish between "invalid credentials" and "expired token that needs refresh."
- Permission changes: The service account used by the credential loses access to specific resources. The workflow can authenticate but fails on certain operations.
- Credential rotation: Credentials are updated in the OpenFn project space but the new credentials have a typo or incorrect scope.

INFRASTRUCTURE:
- Network interruptions: A transient network failure causes a connection reset mid-request. The request may have been received by the server (and processed) even though the client sees a failure. Retrying could create a duplicate.
- DNS resolution failure: A transient DNS issue prevents the workflow from reaching the destination API. This looks like a connection error but resolves on its own.
- Response timeout vs. processing timeout: The destination system accepts the request and processes it, but takes too long to respond. The workflow times out, assumes failure, and retries — but the original request actually succeeded.

PHASE 4: BUSINESS LOGIC EDGE CASES

Identify edge cases in the transformation and business rules:

BOUNDARY CONDITIONS:
- Numeric boundaries: Ages of 0 or negative values, quantities of zero, amounts at exact threshold boundaries (e.g., eligibility cutoff at exactly 18 years old — is it inclusive or exclusive?).
- Date boundaries: Records submitted on the first or last day of a reporting period, records with dates in the far past (e.g., a birth date of 1900-01-01 used as a placeholder), records with dates in the future.
- String boundaries: Empty strings that should be treated as null, single-character values, values at maximum length.

LOOKUP AND REFERENCE FAILURES:
- Unmapped values: A source record contains a value that does not exist in the lookup table (e.g., a new facility was added to the source system but not yet to the mapping table).
- Multiple matches: A lookup that should return one result returns multiple (e.g., two facilities with the same name in different districts).
- Circular or self-referencing data: A record that references itself as its own parent, or a hierarchy with a cycle.

CONDITIONAL LOGIC GAPS:
- Unhandled branches: An if-else chain that does not cover all possible values. When none of the conditions match, the code falls through with undefined behaviour.
- Assumption violations: The code assumes a field will always have one of three values, but a fourth value appears in production.
- Order-dependent logic: Processing logic that produces different results depending on the order records are processed, which may not be guaranteed.

PHASE 5: EDGE CASE INVENTORY AND SEVERITY ASSESSMENT

Compile all identified edge cases into a structured inventory:

For each edge case, document:
- ID and title: A short identifier and descriptive name
- Category: Input data, temporal, system/API, or business logic
- Description: What specifically happens
- Trigger condition: What causes this edge case to occur
- Likelihood: High (will happen regularly), Medium (will happen occasionally), Low (rare but possible)
- Severity: Critical (data loss, silent corruption, or workflow halt with no recovery), High (run failure requiring manual intervention), Medium (incorrect data that is detectable and correctable), Low (cosmetic or logging issue)
- Current handling: How the workflow currently handles it (if at all)
- Recommended handling: What should be done — code change, configuration change, operational procedure, or accept the risk

Prioritise the inventory by a risk score (likelihood x severity) and group recommendations into:
- Must fix before production: Critical and high-severity items with medium or high likelihood
- Should fix soon: Medium-severity items or high-severity items with low likelihood
- Monitor and address if observed: Low-severity items or items with very low likelihood
</framework>

<output_format>
Deliver:
1. An input data edge case inventory covering empty payloads, missing fields, duplicates, encoding issues, and data type anomalies
2. A temporal edge case inventory covering timezone mismatches, stale data, offline sync, scheduling overlaps, and rate limit timing
3. A system and API edge case inventory covering response anomalies, authentication failures, pagination, and network issues
4. A business logic edge case inventory covering boundary conditions, lookup failures, and conditional logic gaps
5. A consolidated edge case register as a table with ID, category, description, likelihood, severity, risk score, and recommended handling
6. A prioritised action plan grouping edge cases into must-fix-before-production, should-fix-soon, and monitor categories
</output_format>

</identify_technical_edge_cases>
```
