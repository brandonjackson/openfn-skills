# Identify Areas for Improvement

> Review running workflows and operational data to identify optimization opportunities, process gaps, and areas where automation can be expanded or refined.

## Prompt Template

```
<identify_areas_for_improvement>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_space_details: If available, use them to understand the project space structure, deployed workflows, and environment configuration. If not: "What is the name of the OpenFn project space, and can you describe the workflows currently deployed — how many, what they do, and how long they have been running?"
- tech_estate_map or system_inventory: If available, use it to understand all connected systems and their roles. If not: "What systems are connected through OpenFn (e.g., CommCare, DHIS2, OpenMRS, Kobo, Salesforce, custom APIs), and are there any systems in the estate that are not yet integrated?"
- workflow_documentation: If available, use it to understand the design intent, data flows, and transformation logic of each workflow. If not: "For each workflow, can you describe the original design intent — what problem it solves, what data it moves, and what the expected behaviour is?"
- performance_reports or run_history_summary: If available, use them to identify current performance levels and known issues. If not: "What do you know about current workflow performance — are there workflows that fail frequently, run slowly, or require manual intervention?"
- programme_roadmap or upcoming_requirements: If available, use them to understand where the programme is heading and what new automation needs are anticipated. If not: "Are there upcoming programme changes, new data flows, or new system integrations planned that the current workflow setup should be preparing for?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the overall goal of this review — routine optimization, preparation for scale, response to known problems, or a periodic architecture review?
2. How long have the current workflows been running, and when were they last significantly updated?
3. Are there any manual processes that currently supplement the automated workflows? (e.g., someone manually exporting data, fixing records, re-running failed batches)
4. What are the most common support requests or complaints from users related to these integrations?
5. Are there budget or capacity constraints that should inform the prioritization of improvements? (e.g., limited developer time, no budget for new adaptors)
6. What does success look like — are you optimizing for reliability, speed, coverage, cost, or a combination?
</inputs>

<framework>
You are a solutions architect conducting an operational review of an OpenFn integration deployment. You understand that workflows accumulate technical debt over time — what was fit for purpose at launch may no longer be optimal as data volumes grow, connected systems evolve, programme requirements shift, and the team gains operational experience. Your job is to systematically identify where improvements will have the greatest impact and produce a prioritized set of recommendations that balance effort against value.

PHASE 1: CURRENT STATE ASSESSMENT

Build a complete picture of the current deployment:

WORKFLOW INVENTORY:
- List every workflow in the project space with its trigger type (cron, webhook, flow), adaptor(s), connected systems, and run frequency
- For each workflow, note its age (when deployed), last modification date, and adaptor version — workflows running on outdated adaptor versions may be missing performance improvements, bug fixes, or new features
- Identify any workflows that are disabled, paused, or effectively dormant (enabled but receiving no triggers)
- Map the dependencies between workflows — which workflows feed into others via flow triggers, and which share credentials or connected systems

OPERATIONAL PROFILE:
- Summarize the recent run history: total runs per workflow, success rates, average duration, failure patterns
- Identify workflows with high manual intervention rates — runs that frequently need to be reprocessed, manually edited, or investigated
- Note any workflows where the operations team has implemented workarounds (manual retries, scheduled restarts, pre-processing scripts outside OpenFn)
- Document the current monitoring and alerting setup: who gets notified of failures, how quickly are issues detected, what is the typical response time

DATA FLOW MAP:
- Trace the end-to-end data journey across all workflows: where data enters the OpenFn project space, how it is transformed, where it exits, and what happens at each stage
- Identify data that passes through multiple workflows in sequence and assess whether the handoffs between them are clean (state is trimmed, only necessary data is passed forward) or leaky (large state objects accumulating unnecessary data)
- Note any circular data flows (system A sends to B via OpenFn, then B sends back to A) and assess whether these are intentional or indicate a design issue

PHASE 2: PERFORMANCE BOTTLENECK IDENTIFICATION

Analyze where workflows are underperforming:

SLOW WORKFLOWS:
- Identify workflows or steps where run duration is significantly higher than necessary — particularly steps that make multiple sequential API calls that could be parallelized or batched
- Look for steps that fetch large datasets on every run when they could use cursor-based pagination or incremental syncs to process only new or changed records
- Check for state bloat: workflows where the state object grows over successive runs because intermediate data is not being cleaned up, leading to increasing memory usage and slower serialization

HIGH-FAILURE WORKFLOWS:
- Identify workflows with chronically high failure rates that have been accepted as normal but could be improved
- Distinguish between inherent complexity (the data is messy and some failures are unavoidable) and fixable issues (better validation, error handling, or retry logic would reduce failures)
- Analyze whether failed runs are being retried effectively — are automatic retries configured appropriately, or are transient failures consuming manual effort?

RESOURCE-INTENSIVE WORKFLOWS:
- Identify workflows that consume disproportionate resources relative to their business value — long-running batch jobs that could be optimized, high-frequency polls that could be replaced with webhooks, workflows that process data that nobody uses downstream
- Check for redundant processing: are multiple workflows fetching the same data from the same source system independently when they could share a single fetch step?

PHASE 3: GAP ANALYSIS

Identify what is missing from the current setup:

MISSING AUTOMATIONS:
- Based on the programme goals and the tech estate, identify data flows or processes that should be automated but are not — these might be manual CSV exports, email-based reporting, or paper-to-digital processes that could be integrated
- Look for "last mile" gaps: workflows that move data most of the way but leave the final step manual (e.g., data arrives in a staging table but is not automatically pushed to the reporting system)
- Identify notification gaps: scenarios where stakeholders should be informed of events (successful batch completion, threshold breaches, registration milestones) but no automated notification exists

MISSING ERROR HANDLING:
- Review whether workflows have adequate error handling — are there steps that can fail silently, leaving data in an inconsistent state between systems?
- Check for missing dead-letter handling: when a record fails to process, is it captured somewhere for review and reprocessing, or is it simply lost?
- Assess whether error messages in run logs are actionable — do they contain enough context for someone to diagnose and fix the problem, or are they generic and unhelpful?

MISSING MONITORING:
- Evaluate whether the team has adequate visibility into workflow operations — can they tell at a glance whether all workflows are healthy?
- Check for missing alerts: are there failure scenarios that would go undetected until a downstream user notices missing data?
- Assess whether there are SLAs or expectations about data freshness that are not being actively monitored

PHASE 4: REDUNDANCY AND SIMPLIFICATION OPPORTUNITIES

Identify where the workflow architecture can be streamlined:

REDUNDANT WORKFLOWS:
- Look for workflows that do similar things to different systems and could be consolidated using parameterized expressions or shared transformation logic
- Identify workflows that were created for a specific one-time need (data migration, backfill) but are still enabled and consuming resources
- Check for test or development workflows that were accidentally left in the production project space

OVER-ENGINEERED SOLUTIONS:
- Identify workflows with unnecessary complexity — excessive conditional branching, over-normalized data transformations, or multi-step chains that could be a single step
- Look for custom code in fn() blocks that duplicates functionality already available in the adaptor (e.g., manually constructing HTTP requests instead of using adaptor operations)
- Check for hardcoded values that should be configuration — magic numbers, hardcoded IDs, environment-specific URLs embedded in expressions rather than stored in credentials or state.configuration

ADAPTOR OPPORTUNITIES:
- Identify workflows using language-http for generic HTTP calls to systems that have dedicated adaptors (e.g., making raw HTTP calls to DHIS2 instead of using language-dhis2)
- Check adaptor versions — newer versions may offer simpler syntax, better error messages, or built-in support for patterns currently implemented as custom code
- Note any systems in the tech estate that have community-contributed adaptors available but not yet in use

PHASE 5: PRIORITIZED RECOMMENDATIONS

Compile all identified improvements into a prioritized action plan:

IMPACT-EFFORT MATRIX:
- For each recommendation, assess:
  - Impact: How much will this improve reliability, performance, coverage, or operational burden? Rate as high, medium, or low.
  - Effort: How much work is required to implement? Rate as small (hours), medium (days), or large (weeks).
  - Risk: What is the risk of the change introducing regressions? Rate as low, medium, or high.
  - Dependencies: Does this change require coordination with upstream system teams, credential rotations, or programme approvals?

PRIORITIZATION:
- Quick wins: high impact, small effort, low risk — implement these first
- Strategic improvements: high impact, medium-to-large effort — schedule these into the next development cycle
- Technical debt reduction: medium impact, medium effort — batch these into a maintenance sprint
- Nice-to-haves: low impact relative to effort — document but deprioritize
- Investigate first: recommendations where the benefit is unclear and further analysis is needed before committing effort

For each recommendation, provide:
- A clear description of the current state and the proposed improvement
- The specific workflows, steps, or systems affected
- The expected benefit (quantified where possible: "reduce failure rate from 8% to under 2%", "cut average run duration by 40%", "eliminate 4 hours per week of manual reprocessing")
- Implementation guidance: what needs to change in the expression, trigger, adaptor, credential, or project space configuration
</framework>

<output_format>
Deliver:
1. A current state summary covering the workflow inventory, operational profile, data flow map, and key health metrics
2. A bottleneck analysis identifying slow, high-failure, and resource-intensive workflows with root cause assessment
3. A gap analysis covering missing automations, missing error handling, and missing monitoring capabilities
4. A redundancy and simplification review identifying consolidation opportunities, over-engineering, and adaptor upgrade paths
5. A prioritized recommendation matrix organized by quick wins, strategic improvements, technical debt reduction, and items requiring further investigation, with impact/effort/risk ratings and implementation guidance for each
</output_format>

</identify_areas_for_improvement>
```
