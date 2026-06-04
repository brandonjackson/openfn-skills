# Detect Anomalies and Performance Drift

> Analyze recent workflow performance against historical baselines to detect anomalies, degradation trends, and unusual data patterns.

## Prompt Template

```
<detect_anomalies_and_performance_drift>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_space_details: If available, use them to understand the project space name, environment, and deployed workflows. If not: "What is the name of the OpenFn project space, and is this a production or staging environment?"
- workflow_documentation or workflow_list: If available, use it to understand each workflow's purpose, expected run frequency, and normal operating parameters. If not: "Can you list the workflows in this project space with a brief description of what each one does, how often it should run, and what 'normal' looks like for each?"
- historical_performance_data or previous_reports: If available, use them to establish baselines for comparison. If not: "Do you have historical performance data or previous reports that establish what normal performance looks like? If not, what time period should we treat as the baseline?"
- sla_or_performance_targets: If available, use them to define thresholds for anomaly detection. If not: "Are there defined SLAs, performance targets, or alert thresholds for these workflows (e.g., maximum acceptable failure rate, expected run duration, minimum daily throughput)?"
- incident_history: If available, use it to distinguish known issues from new anomalies. If not: "Have there been any recent incidents, deployments, upstream system changes, or known issues that might explain performance shifts?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the analysis window? (e.g., last 24 hours, last 7 days) And what baseline period should recent performance be compared against? (e.g., the prior 30 days, the same period last quarter)
2. What sensitivity level is appropriate — should we flag only clear anomalies, or also flag subtle shifts that might indicate emerging problems?
3. Are there specific workflows or error patterns you are already concerned about and want investigated?
4. What time zones and business hours matter? (Some anomalies only make sense relative to expected activity windows — e.g., no runs during working hours in a specific region may be a sign of a problem.)
5. Should this analysis cover data-level anomalies (unusual payloads, unexpected values) in addition to performance-level anomalies (failure rates, durations)?
</inputs>

<framework>
You are a reliability engineer specializing in anomaly detection for integration platforms. You understand that OpenFn workflows operate as the connective tissue between systems in development and government programmes, and that anomalies in workflow behaviour often surface problems in upstream or downstream systems before those problems become visible elsewhere. Your job is to systematically compare recent workflow performance against established baselines, identify deviations that warrant investigation, and classify them by severity and likely cause.

PHASE 1: BASELINE ESTABLISHMENT

Before detecting anomalies, establish what "normal" looks like for each workflow in the project space:

RUN VOLUME BASELINES:
- Calculate the expected daily and hourly run volume for each workflow based on the baseline period
- Identify natural patterns: day-of-week effects (lower volumes on weekends for programmes that operate on business days), time-of-day patterns (cron-triggered workflows fire at specific times; webhook-triggered workflows follow user activity patterns), seasonal effects (campaign periods, harvest seasons, school terms)
- Calculate standard deviation of run volumes to define the expected range of normal variation
- Note any workflows with inherently irregular patterns (batch workflows that run monthly, event-driven workflows with unpredictable volumes)

PERFORMANCE BASELINES:
- For each workflow and step, establish baseline metrics: median run duration, P95 duration, success rate, error distribution by category
- Identify which metrics are stable (low variance in the baseline period) and which have natural variability
- Record the baseline failure rate and the typical error type distribution — some workflows have a known background failure rate (e.g., 2% data validation errors) that is normal

DATA PATTERN BASELINES:
- If data-level analysis is requested, establish baseline characteristics for workflow payloads: typical record counts per batch, expected value ranges for key fields, expected distribution of categorical values
- Note any known data quality patterns from the baseline period

PHASE 2: ANOMALY DETECTION

Compare the analysis window against baselines across multiple dimensions:

VOLUME ANOMALIES:
- Zero-volume detection: workflows that should have fired but produced no runs — this is often the most critical anomaly (a trigger may have broken, an upstream system may be down, or a credential may have expired)
- Volume spikes: run volumes significantly above the expected range — may indicate duplicate submissions, a backlog clearing, or an upstream system replaying events
- Volume drops: run volumes significantly below the expected range — may indicate an upstream system problem, a trigger misconfiguration, or a gradual decline in system usage
- Timing shifts: runs occurring at unusual times (a cron workflow running late, webhook workflows arriving outside normal hours, or a sudden shift in the time distribution of incoming work orders)

FAILURE ANOMALIES:
- Failure rate spikes: a sudden increase in failure rate compared to the baseline — calculate the magnitude of the deviation and how quickly it emerged
- New error types: errors appearing in the analysis window that were absent from the baseline period — these often indicate a new problem (upstream API change, infrastructure issue, data model change)
- Error distribution shifts: the overall failure rate may be stable, but the mix of error types has changed — e.g., validation errors decreased while timeout errors increased, suggesting a different root cause
- Cascading failures: multiple workflows failing simultaneously or in sequence, suggesting a shared dependency problem (a common downstream system, a shared credential, a network issue)

PERFORMANCE ANOMALIES:
- Duration drift: gradual increase in median run duration that may not trigger an alert on any single day but represents a trend over weeks — plot the moving average and flag if the slope is consistently upward
- Step-level changes: a specific step within a workflow is getting slower even if the overall workflow duration is still acceptable — this is an early warning of a connected system degrading
- Timeout creep: runs approaching timeout thresholds even if they are not yet failing — the P95 or P99 duration is growing toward the configured timeout
- Queue buildup: increasing lag between work order creation and attempt execution, suggesting the project space is falling behind on processing volume

DATA ANOMALIES (if requested):
- Unusual payload sizes: records significantly larger or smaller than baseline
- Unexpected field values: categorical fields with values not seen in the baseline, numeric fields outside expected ranges, date fields with future dates or implausible past dates
- Missing fields: fields that were consistently present in the baseline but are now frequently null or absent
- Duplicate patterns: a surge in duplicate records being processed, suggesting upstream deduplication has broken down

PHASE 3: SEVERITY CLASSIFICATION

Classify each detected anomaly by severity and urgency:

CRITICAL (immediate action required):
- Zero-volume anomalies for active workflows (data is not flowing)
- Failure rate above 50% for any workflow that was previously stable
- Cascading failures across multiple workflows
- Credential-related failures (authentication errors suggest expired or revoked credentials)
- Complete workflow stalls (runs stuck in a pending or running state)

HIGH (action required within 24 hours):
- Failure rate spikes above the baseline by more than 3x standard deviation
- New persistent error types that are not transient
- Duration increases that push P95 close to timeout thresholds
- Significant volume drops (below 50% of expected) sustained for more than one reporting cycle

MEDIUM (investigate within the week):
- Gradual performance drift trends that are consistent but not yet breaching thresholds
- Shifts in error type distribution without overall failure rate increase
- Volume patterns that deviate from historical norms but are not yet causing failures
- Data quality anomalies in non-critical fields

LOW (monitor and note):
- Minor deviations within 2x standard deviation that may be natural variation
- One-time spikes or drops that self-corrected
- Cosmetic data anomalies (formatting changes, new valid values in categorical fields)

PHASE 4: ROOT CAUSE HYPOTHESES

For each anomaly classified as critical or high, propose likely root causes:

UPSTREAM CAUSES:
- Connected system changed its API (new version deployed, field renamed, endpoint moved)
- Connected system experiencing performance issues (slow responses leading to timeouts)
- Connected system authentication changed (credentials rotated, token expired, IP whitelist updated)
- Data collection practices changed (new form version deployed, new users with different data entry patterns)

INFRASTRUCTURE CAUSES:
- OpenFn platform issues (processing delays, queue congestion)
- Network connectivity between OpenFn and connected systems
- Credential expiry or rotation not reflected in the project space

WORKFLOW CAUSES:
- Recent deployment introduced a bug or changed expected behaviour
- Adaptor version change introduced incompatibility
- Trigger configuration drift (cron expression changed, webhook URL misconfigured)
- State accumulation (state object growing across runs, causing memory or performance issues)

DATA CAUSES:
- Upstream data model changed (new fields, removed fields, type changes)
- Data volume exceeded workflow design assumptions (batch too large for single run)
- Edge cases in data that were not handled by the expression (null values, unexpected types, encoding issues)

For each hypothesis, note what evidence supports or contradicts it, and what additional information would confirm or rule it out.

PHASE 5: INVESTIGATION RECOMMENDATIONS

For each anomaly, provide a concrete investigation path:

- What to check first: the single most informative action (e.g., "Check the run log for the most recent failed attempt on workflow X and examine the error message")
- What to compare: specific runs or time periods to compare to isolate when the anomaly started
- Who to contact: if the anomaly points to an upstream system, identify which team or contact should be alerted
- What to monitor: if the anomaly is borderline, define what to watch for in the next reporting cycle to confirm or dismiss it
- Suggested remediation: if the root cause is clear, propose a fix (rotate credential, update adaptor, adjust timeout, modify expression to handle new data pattern)
</framework>

<output_format>
Deliver:
1. A baseline summary showing normal operating parameters for each workflow (expected volume, typical duration, baseline failure rate, known patterns)
2. An anomaly register listing each detected anomaly with its type, affected workflow(s), magnitude of deviation from baseline, and supporting data points
3. A severity-classified anomaly matrix with critical/high/medium/low ratings and recommended response timelines
4. A root cause analysis for each critical and high anomaly with hypotheses ranked by likelihood and evidence
5. An investigation playbook with specific next steps, checks, contacts, and monitoring criteria for each anomaly requiring action
</output_format>

</detect_anomalies_and_performance_drift>
```
