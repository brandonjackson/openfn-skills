# Generate Periodic Health Check

> Produce a comprehensive health check report for all workflows in a project space, covering run success rates, credential status, queue health, error trends, and upcoming risks.

## Prompt Template

```
<generate_periodic_health_check>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_space_details: If available, use them to understand the project space name, environment, deployed workflows, and configuration. If not: "What is the name of the OpenFn project space, is this production or staging, and how many workflows are deployed?"
- workflow_documentation or workflow_list: If available, use it to understand each workflow's purpose, expected behaviour, and criticality to the programme. If not: "Can you list the workflows with a brief description of each, including which are mission-critical versus nice-to-have?"
- previous_health_check: If available, use it as a comparison baseline and to track whether previously identified issues have been resolved. If not: "Is there a previous health check report? If so, were there any open action items from it?"
- sla_or_performance_targets: If available, use them to assess compliance. If not: "Are there defined SLAs or expectations for these workflows — e.g., maximum acceptable downtime, minimum success rate, maximum data latency?"
- credential_inventory: If available, use it to check credential ages and expiry dates. If not: "How many credentials are configured in this project space, and do you know when they were last rotated or when they expire?"
- incident_log: If available, use it to note recent incidents and their resolution status. If not: "Have there been any incidents or significant issues in the current period that should be noted in this health check?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What period does this health check cover? (e.g., last 7 days, last 30 days, last quarter)
2. What is the cadence of these health checks? (e.g., weekly, monthly, quarterly — this affects what trends to emphasize)
3. Who is the primary audience — technical operations team, programme leadership, or both?
4. Are there any specific concerns or areas the audience wants highlighted in this health check?
5. Should this health check include recommendations for the next period, or is it purely a status report?
</inputs>

<framework>
You are an integration operations lead producing a periodic health check for an OpenFn project space. This report is the primary mechanism for the team to understand whether their automated data flows are operating reliably and to identify issues before they become critical. You understand that in development and government programmes, healthy integrations mean data reaches the right systems on time — and unhealthy integrations can mean beneficiaries are not registered, reports are incomplete, or services are disrupted. A good health check is honest, specific, and actionable.

PHASE 1: OVERALL PROJECT SPACE STATUS

Provide a top-level health assessment:

EXECUTIVE SUMMARY:
- Overall health status: assign a status indicator for the project space as a whole
  - GREEN: all workflows operating within expected parameters, no critical issues, no SLA breaches
  - YELLOW: some workflows showing degraded performance or elevated failure rates, but no critical service disruption; or there are risks that need attention before the next health check
  - AMBER: one or more workflows experiencing significant issues that are affecting data flows, requiring active intervention
  - RED: critical failures affecting service delivery, data not flowing for one or more key workflows, immediate action required
- One-paragraph narrative summarizing the state of the project space in plain language suitable for programme leadership
- Count of active workflows, total runs in the period, overall success rate, and comparison to the previous period

KEY CHANGES SINCE LAST HEALTH CHECK:
- New workflows deployed
- Workflows modified or updated
- Workflows disabled or removed
- Credential changes
- Adaptor version updates
- Any incidents that occurred and their resolution status

PHASE 2: WORKFLOW-BY-WORKFLOW HEALTH ASSESSMENT

For each workflow in the project space, produce a health card:

WORKFLOW HEALTH CARD:
- Workflow name and purpose
- Status indicator (green/yellow/amber/red) based on the criteria below
- Trigger type and schedule
- Adaptor(s) and version(s)
- Connected systems

RUN METRICS:
- Total work orders received in the period
- Total attempts executed
- Total runs across all steps
- Success rate (percentage of successful runs)
- Comparison to previous period (improving, stable, or degrading)
- Comparison to SLA target if defined

FAILURE SUMMARY:
- Count of failed runs
- Top error categories with counts (e.g., 12 validation errors, 5 timeouts, 2 auth failures)
- Whether failures are transient (resolved by retry) or persistent (same error on retry)
- Any new error types that appeared for the first time in this period

PERFORMANCE METRICS:
- Median run duration
- P95 run duration
- Comparison to previous period (faster, stable, or slower)
- Any runs that approached or exceeded timeout thresholds

QUEUE HEALTH:
- Current queue depth (work orders or attempts waiting to be processed)
- Maximum queue depth during the period
- Average time from work order creation to attempt execution (processing lag)
- Whether the queue is draining normally or building up

Assign the status indicator based on:
- GREEN: success rate above 98%, no persistent errors, duration within baseline, queue draining normally
- YELLOW: success rate 90-98%, some persistent errors but not increasing, duration slightly elevated, minor queue delays
- AMBER: success rate 70-90%, persistent errors increasing, duration significantly above baseline, queue building
- RED: success rate below 70%, critical persistent errors, timeout breaches, queue not draining

PHASE 3: CREDENTIAL AND SECURITY HEALTH

Assess the health of authentication and access:

CREDENTIAL STATUS:
- For each credential in the project space:
  - Credential name and the system it authenticates against
  - Which workflows use this credential
  - Last time the credential was updated
  - Known expiry date (if applicable) and days until expiry
  - Whether the credential has been tested recently (successful recent runs using it indicate it is working)
  - Status: active and working, expiring soon (within 30 days), expired, or unknown

CREDENTIAL RISKS:
- Flag any credentials expiring within the next reporting period
- Flag any credentials that have not been rotated in more than 90 days (even if they have no set expiry, rotation is a best practice)
- Flag any credentials that are shared across many workflows — if this credential fails, what is the blast radius?
- Note whether the project space has a documented credential rotation process

ACCESS REVIEW:
- Note how many users have access to the project space and at what permission level
- Flag any access that may need review (former team members, overly broad permissions)

PHASE 4: ERROR TREND ANALYSIS

Look beyond individual workflow health to identify systemic patterns:

ERROR TRENDS OVER TIME:
- Plot total errors per day or per week across the entire project space
- Identify whether the overall error rate is trending up, down, or stable
- Flag any sudden spikes and note whether they were resolved

ERROR CATEGORY DISTRIBUTION:
- Across all workflows, what is the breakdown of errors by category?
  - Authentication errors (credential-related)
  - Upstream system errors (connected systems returning errors)
  - Data validation errors (bad data being rejected)
  - Timeout errors (performance-related)
  - Mapping errors (code or data structure issues)
  - Rate limiting errors (throughput-related)
- Compare this distribution to the previous period — has the mix shifted?

SYSTEMIC PATTERNS:
- Are multiple workflows failing with the same error type at the same time? This suggests a shared dependency issue (common credential, common connected system, infrastructure problem)
- Are errors correlated with specific times of day or days of the week? This may indicate scheduled maintenance, peak load periods, or batch processing conflicts
- Are there workflows that consistently contribute the majority of errors? These are candidates for focused improvement

CHRONIC ISSUES:
- List any issues that have appeared in multiple consecutive health checks without resolution
- For each chronic issue, note how long it has been present, its current impact, and what (if anything) has been attempted to resolve it

PHASE 5: FORWARD-LOOKING RISK ASSESSMENT

Identify risks and issues that may affect the project space before the next health check:

UPCOMING RISKS:
- Credential expiry: credentials that will expire before the next health check
- Known system changes: any connected system upgrades, migrations, or maintenance windows scheduled in the upcoming period
- Volume changes: anticipated changes in data volume (new facilities coming online, campaign periods, reporting deadlines) that may stress current workflows
- Adaptor deprecations: adaptor versions approaching end of support or known to have issues that are fixed in newer versions
- Seasonal patterns: historical patterns suggesting increased load or different usage patterns in the upcoming period

TECHNICAL DEBT:
- Workflows running on outdated adaptor versions
- Expressions with known workarounds or TODO items
- Monitoring or alerting gaps identified but not yet addressed
- Documentation that is outdated relative to current workflow behaviour

CAPACITY ASSESSMENT:
- Based on current run volumes and growth trends, are any workflows approaching capacity limits?
- Are queue depths trending upward, suggesting the project space may need attention before volume increases further?
- Is the team's operational capacity (people available to respond to alerts, investigate failures, make fixes) adequate for the current workload?

ACTION ITEMS:
- Carry forward any unresolved action items from the previous health check, noting their status
- Add new action items identified in this health check
- Assign priority (critical, high, medium, low) and a target resolution date for each
- Assign an owner if possible

Compile everything into a structured report that can be reviewed in a 30-minute team meeting, with an executive summary for leadership and detailed sections for the operations team.
</framework>

<output_format>
Deliver:
1. An executive summary with overall project space health status (green/yellow/amber/red), a plain-language narrative, key metrics, and changes since the last health check
2. A workflow-by-workflow health card table with status indicators, run metrics, failure summaries, performance metrics, and queue health for each workflow
3. A credential and security health section with credential status, expiry warnings, rotation recommendations, and access review notes
4. An error trend analysis covering trends over time, category distribution, systemic patterns, and chronic issues carried from previous health checks
5. A forward-looking risk assessment with upcoming risks, technical debt inventory, capacity assessment, and a prioritized action item list with owners and target dates
</output_format>

</generate_periodic_health_check>
```
