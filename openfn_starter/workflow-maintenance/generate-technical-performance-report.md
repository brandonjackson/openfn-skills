# Generate Technical Performance Report

> Analyze workflow run history to produce a technical performance summary covering success rates, run durations, error categories, and volume trends.

## Prompt Template

```
<generate_technical_performance_report>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_space_details: If available, use them to understand the project space name, environment (production vs. staging), and which workflows are deployed. If not: "What is the name of the OpenFn project space, and is this a production or staging environment?"
- workflow_documentation or workflow_list: If available, use it to understand each workflow's purpose, the systems it connects, and its expected run frequency. If not: "Can you list the workflows in this project space with a brief description of what each one does and how often it should run?"
- previous_performance_reports: If available, use them as a baseline for trend comparison. If not: "Is there a previous performance report or known baseline we should compare against?"
- sla_or_performance_targets: If available, use them to assess whether current performance meets expectations. If not: "Are there any defined SLAs or performance targets for these workflows (e.g., maximum acceptable failure rate, maximum run duration, minimum throughput)?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What reporting period should this cover? (e.g., last 7 days, last 30 days, last quarter)
2. Should the report cover all workflows in the project space, or a specific subset?
3. What is the expected run volume for each workflow during this period? (so we can assess whether actual volume matches expectations)
4. Have there been any known incidents, deployments, or changes during this period that should be annotated in the report?
5. Who is the audience — technical operations team, project leadership, or both?
</inputs>

<framework>
You are an integration operations engineer specializing in OpenFn workflow monitoring and performance analysis. You understand that OpenFn workflows are the backbone of data exchange between systems in development and government programmes, and that performance degradation can have real consequences — delayed data, missed records, broken reporting chains. Your job is to produce a clear, data-driven performance report that helps the operations team understand how their workflows are performing and where attention is needed.

PHASE 1: RUN VOLUME AND THROUGHPUT ANALYSIS

Analyze the total volume of work processed:

VOLUME METRICS (per workflow, per time period):
- Total work orders received (triggers fired)
- Total attempts executed
- Total runs completed (across all steps in each workflow)
- Successful runs vs. failed runs vs. crashed runs
- Runs pending or in queue at the time of report generation

THROUGHPUT TRENDS:
- Daily and weekly run volume plotted over the reporting period
- Comparison to expected volumes: is the workflow processing the volume it should be?
- Identification of volume spikes or drops, correlated with known events (batch submissions, system outages, new facility onboarding)
- Queue depth over time: is the system keeping up, or is a backlog building?

Present a summary table:

| Workflow | Total Work Orders | Attempts | Successful | Failed | Crashed | Success Rate | Pending |
|----------|-------------------|----------|------------|--------|---------|-------------|---------|

PHASE 2: SUCCESS AND FAILURE RATE ANALYSIS

Drill into the reliability of each workflow:

SUCCESS RATES:
- Overall success rate per workflow (successful runs / total runs)
- Success rate trend over time: improving, stable, or degrading
- Step-level success rates within multi-step workflows — which step fails most often?
- Comparison to SLA targets or historical baselines

FAILURE CLASSIFICATION:
- Group all failed runs by error category:
  - Authentication/credential errors (401, 403, token expired)
  - Upstream system errors (500, 502, 503 from connected systems)
  - Timeout errors (request timeouts, connection timeouts)
  - Data validation errors (missing required fields, type mismatches, constraint violations)
  - Mapping/transformation errors (unexpected data structures, null references)
  - Rate limiting errors (429, throttling by destination system)
  - Adaptor errors (bugs or limitations in the adaptor code)
  - Configuration errors (incorrect URLs, wrong field mappings, missing credentials)

- For each error category, report:
  - Count and percentage of total failures
  - Affected workflows and steps
  - Whether the error is transient (likely to succeed on retry) or persistent (requires code or configuration change)
  - Trend: increasing, stable, or decreasing

PHASE 3: RUN DURATION AND PERFORMANCE ANALYSIS

Analyze how long workflows take to execute:

DURATION METRICS (per workflow, per step):
- Median run duration
- 95th percentile run duration (P95)
- Maximum run duration
- Comparison to historical baselines: are runs getting slower?

PERFORMANCE PATTERNS:
- Duration distribution: are most runs fast with occasional slow outliers, or is there a bimodal pattern?
- Correlation between duration and time of day (peak hours vs. off-peak)
- Correlation between duration and payload size (large batches taking longer)
- Identification of steps that dominate total workflow duration — where is time being spent?
- Detection of gradual performance degradation: plot median duration over weeks or months

Flag any workflows where duration is approaching timeout thresholds or where P95 duration is more than 3x the median.

PHASE 4: ADAPTOR AND SYSTEM PERFORMANCE

Analyze performance at the adaptor and connected-system level:

ADAPTOR PERFORMANCE:
- For each adaptor in use (e.g., language-dhis2, language-commcare, language-http), report:
  - Total runs using this adaptor
  - Success rate
  - Average and P95 duration
  - Most common error types
  - Adaptor version in use and whether a newer version is available

CONNECTED SYSTEM RESPONSIVENESS:
- For each external system that workflows interact with, infer responsiveness from run data:
  - Response time patterns (derived from step duration for steps that make API calls)
  - Error rates attributable to the external system (5xx errors, timeouts)
  - Availability patterns: were there periods when the external system was unresponsive?

PHASE 5: TREND ANALYSIS AND SUMMARY

Synthesize all findings into an executive-ready performance summary:

DASHBOARD SUMMARY:
- Overall project space health: green (all metrics within targets), yellow (some metrics approaching thresholds), red (SLA breaches or critical failures)
- Key metrics at a glance: total runs, overall success rate, average duration, active workflows

TREND ASSESSMENT:
- Which metrics are improving and which are degrading?
- What changed during the reporting period that correlates with observed shifts?
- Forecast: if current trends continue, when will thresholds be breached?

ACTION ITEMS:
- Critical: issues requiring immediate attention (persistent failures, credential expiry, growing backlog)
- Important: issues to address in the next sprint (performance degradation, error pattern investigation, adaptor upgrades)
- Monitoring: items to watch in the next reporting period (emerging patterns, borderline metrics)
</framework>

<output_format>
Deliver:
1. A run volume and throughput summary table for all workflows with trend indicators
2. A failure analysis with errors grouped by category, affected workflows, and transient vs. persistent classification
3. A performance analysis showing run duration metrics per workflow and step, with degradation flags
4. An adaptor and connected-system performance summary with version and responsiveness notes
5. An executive dashboard summary with overall health status, key metrics, trend assessment, and prioritized action items
</output_format>

</generate_technical_performance_report>
```
