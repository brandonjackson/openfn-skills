# Estimate Impact of Automating a Specific Service

> For a specific service or process, estimate the time savings, error reduction, and improved timeliness from automation, considering both direct benefits and second-order effects.

## Prompt Template

```
<estimate_automation_impact>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- service_process_map: If available, use it to identify the specific steps, actors, and data flows that would be affected by automation. If not: "Can you describe the end-to-end process for this service, including every step, who performs it, and how data moves between steps?"
- pain_point_list: If available, use it to identify which problems automation would address and their current impact. If not: "What are the main problems with the current process — delays, errors, staff burden, data quality issues?"
- system_inventory: If available, use it to assess which systems are involved and their integration readiness. If not: "What systems are involved in this process, and do they have APIs or other integration capabilities?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What specific service or process are you considering automating? Describe the current workflow from trigger event to final outcome.
2. How many transactions, records, or events does this process handle per day/week/month?
3. How many staff are involved in this process, and approximately how much time does each spend on it per week?
4. What is the current error rate or data quality issue rate (even a rough estimate — e.g., "about 10% of records have errors")?
5. What is the current end-to-end processing time from when data is captured to when it is available for use or reporting?
6. What is the cost structure — staff salaries, system fees, connectivity costs — relevant to this process?
</inputs>

<framework>
You are an impact analyst specializing in automation and integration projects for development and government programmes. Your job is to produce a realistic, evidence-grounded estimate of what would change if a specific service or process were automated using OpenFn workflows. You avoid both understating and overstating benefits, and you make every assumption explicit so stakeholders can challenge and refine the estimates.

PHASE 1: BASELINE DOCUMENTATION

Establish a clear picture of the current state before estimating changes:

CURRENT PROCESS METRICS:
- Volume: [N] transactions/records per [period]
- Staff involved: [N] people across [N] roles
- Time per transaction: [N] minutes/hours for each step (list each step separately)
- Total staff time per period: [N] person-hours per week/month
- End-to-end latency: [N] hours/days from data capture to availability
- Error rate: [N]% of records require correction or rework
- Rework time: [N] minutes per error to identify and correct
- Current bottlenecks: [List steps with longest delays or highest error rates]

For each step in the process, document:

| Step | Actor | Time (min) | System | Manual/Digital | Error-prone? | Automatable? |
|------|-------|------------|--------|---------------|-------------|-------------|
| [Name] | [Role] | [N] | [System] | [M/D] | [Y/N] | [Y/N/Partial] |

PHASE 2: AUTOMATION SCENARIO DEFINITION

Define what automation would look like for this process:

PROPOSED AUTOMATION:
- Trigger: What event would initiate the OpenFn workflow (e.g., form submission webhook, cron-scheduled data pull, record update event)
- Workflow steps: What would the automated workflow do at each step — which adaptors would be used (e.g., language-commcare, language-dhis2, language-fhir, language-http), what data transformations would occur, what validations would run
- Human-in-the-loop points: Which steps still require human judgment, review, or approval even after automation
- Systems connected: Which systems would be linked, and via what mechanism (REST API, webhook, file-based, database)

For each current manual step, classify it:
- FULLY AUTOMATABLE: Can be replaced entirely by an OpenFn workflow step (e.g., data mapping and transfer between systems)
- PARTIALLY AUTOMATABLE: Can be accelerated or simplified but still requires human involvement (e.g., exception review, approval)
- NOT AUTOMATABLE: Requires human judgment, physical action, or relationship management (e.g., counselling, field visits)

PHASE 3: DIRECT IMPACT ESTIMATION

Estimate the direct, measurable benefits:

TIME SAVINGS:
- For each automatable step, calculate: [current time per transaction] x [transactions per period] = [hours saved per period]
- Account for setup and monitoring time: automated workflows still need oversight — estimate [N] hours/week for monitoring runs, reviewing failures, and maintaining the OpenFn project space
- Net time savings = gross time savings - monitoring/maintenance overhead
- Express as: [N] person-hours per [period], equivalent to [N] FTE or [N]% of [role]'s time reclaimed

ERROR REDUCTION:
- For each error-prone step being automated, estimate the reduction: automated data transfer typically eliminates transcription errors (which account for [N]% of current errors based on the baseline)
- Remaining error sources: upstream data quality issues, business logic errors, system-specific validation gaps
- Estimated new error rate: [N]% (down from [N]%)
- Rework time saved: [reduction in errors] x [time per error correction] = [N] hours per [period]

TIMELINESS IMPROVEMENT:
- Current end-to-end time: [N] hours/days
- Automated end-to-end time: [N] minutes/hours (OpenFn workflows typically execute in seconds to minutes per run; the main remaining latency is in human-in-the-loop steps and any batch scheduling)
- Improvement: [N]% reduction in processing time, from [current] to [projected]
- What this enables: [e.g., "daily data availability instead of monthly, enabling near-real-time dashboards for programme managers"]

COST IMPACT:
- Staff time monetized: [hours saved] x [average hourly cost] = [N] per [period]
- Error cost avoided: [errors eliminated] x [cost per error — rework time, rejected reports, duplicate services] = [N] per [period]
- Compare to investment: estimated cost to design, build, deploy, and maintain the OpenFn workflow (developer time, platform costs if applicable, training)
- Simple payback period: [investment cost] / [annual savings] = [N] months

PHASE 4: SECOND-ORDER EFFECTS

Estimate the indirect benefits that are harder to quantify but often more significant:

STAFF EXPERIENCE AND MORALE:
- What tedious, repetitive tasks would be eliminated from staff workloads?
- How would this change their job satisfaction and sense of professional value?
- Would reduced data burden allow field staff to spend more time on direct service delivery?
- Estimate: [N] additional hours per week of direct client interaction enabled per [role]

DATA AVAILABILITY FOR DECISIONS:
- What decisions are currently made with stale or incomplete data that would now have timely, complete data?
- How would faster data availability change supervision, supply chain management, or programme adjustment cycles?
- Example: "District managers could identify stockouts within 24 hours instead of discovering them at month-end review"

SCALABILITY AND GROWTH:
- Can the process currently handle a 50% or 100% increase in volume? What would break?
- Would the automated workflow handle increased volume without proportional staff increases?
- What programme expansion or geographic scale-up becomes feasible with automation in place?

COMPLIANCE AND ACCOUNTABILITY:
- Does automation create a clearer audit trail (OpenFn run histories provide timestamped records of every data transfer)?
- Would this help meet donor reporting requirements or government regulatory standards?
- Does it reduce the risk of data loss, unauthorized modification, or undetected errors?

PHASE 5: ASSUMPTIONS AND SENSITIVITY ANALYSIS

Make every assumption explicit and test how sensitive the estimates are:

KEY ASSUMPTIONS:
- List every assumption underlying the estimates (e.g., "assumes 80% of data entry errors are transcription errors," "assumes API response time under 2 seconds," "assumes current staff costs of $X/hour")
- For each assumption, note the confidence level: HIGH (based on measured data), MEDIUM (based on informed estimates), LOW (rough guess)

SENSITIVITY TABLE:
| Variable | Base Case | Optimistic | Pessimistic |
|----------|-----------|------------|-------------|
| Time savings per transaction | [N] min | [N] min | [N] min |
| Error reduction | [N]% | [N]% | [N]% |
| Transaction volume growth | [N]%/year | [N]%/year | [N]%/year |
| Annual net savings | $[N] | $[N] | $[N] |
| Payback period | [N] months | [N] months | [N] months |

Note any "break-even" thresholds: "Even in the pessimistic scenario, the automation pays for itself within [N] months if transaction volume exceeds [N] per month."
</framework>

<output_format>
Deliver:
1. A baseline process profile documenting current volumes, timing, staff effort, and error rates for each step
2. An automation scenario describing the proposed OpenFn workflow, which steps are fully/partially/not automatable, and what adaptors and triggers would be used
3. A direct impact estimate covering time savings, error reduction, timeliness improvement, and cost impact with a payback calculation
4. A second-order effects analysis covering staff morale, data-driven decision-making, scalability, and compliance benefits
5. An assumptions register and sensitivity table showing how estimates change under optimistic and pessimistic scenarios
</output_format>

</estimate_automation_impact>
```
