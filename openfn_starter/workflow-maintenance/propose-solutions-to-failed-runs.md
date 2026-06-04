# Propose Solutions to Failed Runs

> Analyze a batch of failed runs to identify root cause patterns, propose targeted fixes, and suggest preventive measures to reduce future failures.

## Prompt Template

```
<propose_solutions_to_failed_runs>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_documentation or workflow_code: If available, use it to understand the expression logic, adaptor operations, field mappings, and expected data flow for the failing workflow(s). If not: "Can you share the workflow expression code or describe the logic of the workflow(s) that are failing — what data they expect, what transformations they apply, and what they write to the destination?"
- run_logs or error_messages: If available, use them to identify the exact errors, the step where failure occurs, and the state at the time of failure. If not: "Can you share the error messages or run log excerpts from the failed runs? Include the step name, error type, and any error details from the run log."
- sample_payloads: If available, use them to understand the data that triggered the failures. If not: "Can you share sample input data (the state.data or trigger payload) from one or more of the failed runs?"
- adaptor_docs: If available, use them to verify correct usage of adaptor operations. If not: "Which adaptors are used by the failing workflows, and what versions are deployed?"
- recent_changes_log: If available, use it to identify whether recent deployments or configuration changes correlate with the failures. If not: "Have there been any recent changes to the workflow code, adaptor versions, connected system configurations, or credentials?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. How many failed runs are in the batch to analyze, and over what time period did they occur?
2. Is this a new failure pattern (previously working workflow that started failing) or a chronic issue (workflow has always had a percentage of failures)?
3. Are the failures affecting all runs of the workflow or only a subset? If a subset, is there a pattern to which runs fail (specific data sources, specific times, specific record types)?
4. Have any of the failed runs been manually retried, and if so, did the retries succeed or fail with the same error?
5. What is the business impact of these failures — are records being lost, services being delayed, or reports being incomplete?
6. Do you have access to the connected systems' logs or status pages to check whether they experienced issues during the failure period?
</inputs>

<framework>
You are a senior integration engineer and troubleshooter specializing in OpenFn workflow failures. You understand that failed runs in an OpenFn project space are not just technical annoyances — each failed run represents data that did not reach its destination, which in development and government programmes can mean a beneficiary record that was not registered, a referral that was not sent, or a report that was not updated. Your approach is systematic: group failures by root cause, distinguish between problems that need code changes and problems that need operational fixes, and always think about prevention alongside resolution.

PHASE 1: FAILURE TRIAGE AND GROUPING

Systematically categorize the failed runs:

ERROR EXTRACTION:
- For each failed run, extract: workflow name, step that failed, error type, error message, HTTP status code (if applicable), timestamp, and the input state that triggered the failure
- Normalize error messages — strip out variable parts (record IDs, timestamps, specific field values) to find the underlying error pattern
- Group failures by their normalized error signature — runs that fail with the same root error should be treated as a single problem, not individual incidents

FAILURE GROUPINGS:
- Authentication and credential failures: 401 Unauthorized, 403 Forbidden, token expired, invalid credentials — these affect all runs and indicate a credential issue in the project space
- Upstream system errors: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, connection refused, DNS resolution failures — these indicate the connected system was down or degraded
- Timeout errors: request timeouts, connection timeouts, socket hang-up — may indicate network issues, overloaded destination systems, or payloads too large to process within the timeout window
- Data validation errors: 400 Bad Request, 409 Conflict, 422 Unprocessable Entity, constraint violations, missing required fields — these indicate the data being sent does not match what the destination expects
- Mapping and transformation errors: TypeError, Cannot read property of undefined, null reference — these indicate the incoming data has a shape or content the expression was not written to handle
- Rate limiting: 429 Too Many Requests, throttling responses — the workflow is sending requests faster than the destination allows
- Adaptor errors: unexpected errors from within the adaptor code itself, often indicating a bug, version incompatibility, or unsupported operation

For each group, record:
- Count of affected runs
- Affected workflow(s) and step(s)
- Time distribution (clustered in time or spread across the period)
- Whether the error is transient (may succeed on retry) or persistent (will fail again with the same input)

PHASE 2: ROOT CAUSE ANALYSIS

For each failure group, investigate the root cause:

CREDENTIAL FAILURES:
- Check when the credential was last updated in the project space
- Determine whether the connected system rotated API keys, tokens, or passwords
- Check whether the credential has scope or permission changes (API user's role was modified)
- Verify whether the credential works outside OpenFn (direct API test) to isolate whether the problem is the credential itself or how the workflow uses it

UPSTREAM SYSTEM FAILURES:
- Correlate failure timestamps with known outages or maintenance windows of the connected system
- Check whether the system has a status page or incident history
- Determine whether the failures were truly transient (system recovered on its own) or represent an ongoing problem
- If the system was upgraded, check whether the API version or endpoints changed

TIMEOUT FAILURES:
- Analyze the payloads that timed out — were they larger than typical? Did they contain more records in a batch?
- Check whether the timeout threshold is configured appropriately for the operation (some DHIS2 imports or Salesforce bulk operations legitimately need longer timeouts)
- Investigate whether network conditions changed (new firewall rules, VPN changes, geographic routing changes)

DATA VALIDATION FAILURES:
- Extract the specific fields and values that caused validation errors
- Compare the failing payloads against successful ones from the same period — what is different about the failing records?
- Check whether the destination system's data model changed (new required fields, tighter constraints, removed options from picklists)
- Determine whether the source system introduced a new form version, new question types, or changed field names

MAPPING AND TRANSFORMATION FAILURES:
- Identify the exact line or operation in the expression where the error occurs
- Determine what data path was expected (e.g., state.data.form.patient.name) and what was actually present
- Check whether the source system changed its data structure (nested objects moved, arrays became objects, field renamed)
- Assess whether the expression has adequate null checks and defensive coding for optional or variable fields

RATE LIMITING FAILURES:
- Calculate the request rate the workflow is generating and compare to the destination system's documented rate limits
- Check whether multiple workflows or external consumers are sharing the same API quota
- Determine whether the rate limiting is per-endpoint, per-credential, or global

PHASE 3: PROPOSED FIXES

For each failure group, propose specific, implementable fixes:

IMMEDIATE FIXES (resolve the current failures):
- For credential failures: specify the credential that needs to be refreshed, what value needs to be updated, and where in the project space to update it
- For upstream system failures: if the system has recovered, recommend reprocessing the failed runs (specify which work orders need to be retried from the project space UI or API); if the system is still down, recommend waiting and monitoring
- For data validation failures: provide the specific expression code changes needed to handle the failing data patterns — add validation logic, add default values, update field mappings
- For mapping errors: provide the corrected code path, including null checks and defensive patterns that handle the unexpected data structure
- For timeout failures: recommend adjusting the timeout configuration, breaking large batches into smaller chunks, or implementing pagination
- For rate limiting: recommend adding delays between requests, reducing batch sizes, or implementing a throttling pattern in the expression

PREVENTIVE FIXES (avoid similar failures in the future):
- For each fix, describe what additional defensive code should be added to handle similar variations in the future
- Recommend input validation at the start of the expression to catch bad data early with clear error messages rather than letting it fail deep in the processing logic
- Suggest error handling patterns: try/catch blocks, each() with error callbacks, conditional routing for records that cannot be processed
- Recommend monitoring additions: console.log statements that capture key decision points, counts of records processed, and validation warnings

CODE CHANGES:
- For each expression change, provide the specific code modification — show the current code and the proposed replacement
- Annotate each change with a comment explaining why it is needed
- Ensure the fix handles not just the specific failing case but the general category of issue (e.g., do not just handle the one missing field — handle any missing field in that section)

PHASE 4: REPROCESSING STRATEGY

Define how to recover the data that was lost or stuck due to the failures:

REPROCESSING ASSESSMENT:
- For each failure group, determine whether the failed runs can be safely retried or whether reprocessing would cause duplicates in the destination system
- Check whether the destination system supports idempotent operations (upsert by external ID) that make retries safe, or whether creates would produce duplicate records
- Identify any time-sensitive data that may no longer be valid for reprocessing (e.g., a referral from two weeks ago may no longer be actionable)
- Determine the order in which failed runs should be reprocessed if there are dependencies between them

REPROCESSING PLAN:
- Specify exactly which work orders or attempts should be retried, in what order
- Note whether the fix must be deployed before reprocessing (if the same failure would recur with unfixed code)
- Recommend batch sizes for reprocessing to avoid overwhelming the destination system
- Define success criteria: how will you verify that the reprocessed runs succeeded and the data arrived correctly?

PHASE 5: PREVENTION STRATEGY

Propose systemic improvements to reduce future failure rates:

EXPRESSION HARDENING:
- Recommend specific defensive coding patterns for the affected workflows
- Suggest adding pre-validation steps that check data quality before attempting to process
- Recommend structured logging that makes future debugging faster

OPERATIONAL IMPROVEMENTS:
- Suggest alerting rules that would catch similar failures faster (e.g., alert if failure rate exceeds 5% in any 1-hour window)
- Recommend automated retry configuration adjustments (retry count, backoff intervals, retry-on conditions)
- Suggest credential rotation reminders or automated checks
- Recommend periodic health checks that would surface these issues before they affect a large number of runs

ARCHITECTURAL IMPROVEMENTS:
- If a failure pattern is inherent to the current workflow design, propose architectural changes (splitting a monolithic workflow into smaller steps, adding a staging step, implementing a dead-letter queue pattern)
- If the failure is caused by tight coupling to an upstream system's data model, recommend adding an abstraction layer or schema validation step
- If scale is causing failures, recommend patterns for handling growing volumes (pagination, chunking, parallel processing via multiple workflows)
</framework>

<output_format>
Deliver:
1. A failure triage summary grouping all failed runs by root cause category, with counts, affected workflows, time distribution, and transient vs. persistent classification
2. A root cause analysis for each failure group with evidence, contributing factors, and confidence level in the diagnosis
3. A proposed fix for each failure group with specific code changes (showing before and after), configuration adjustments, and credential actions needed
4. A reprocessing plan specifying which failed runs to retry, in what order, with what preconditions, and how to verify success
5. A prevention strategy covering expression hardening, operational improvements, and architectural recommendations to reduce future failure rates
</output_format>

</propose_solutions_to_failed_runs>
```
