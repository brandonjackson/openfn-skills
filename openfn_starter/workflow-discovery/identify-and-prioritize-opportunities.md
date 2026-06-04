# Identify and Prioritize Opportunities from Service Catalog

> Given a catalog of services or processes, identify which ones are candidates for automation or integration and prioritize them by impact, feasibility, urgency, and alignment.

## Prompt Template

```
<identify_and_prioritize_opportunities>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- service_process_map: If available, use it as the primary input for identifying automation candidates. If not: "Can you list the services or processes currently delivered by this programme, including which systems and actors are involved in each?"
- project_brief: If available, use it to understand strategic priorities and constraints. If not: "What are the top 3 organizational or programme goals this work should align with?"
- pain_point_list: If available, use it to inform urgency and impact scores. If not: "What are the most frequently cited operational frustrations from staff delivering these services?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the full list of services or processes you want to evaluate? (Provide names and brief descriptions)
2. What are the organizational or programme goals that automation should support? (e.g., improve timeliness of reporting, reduce data entry burden, increase coverage)
3. What systems are currently in use across these services? (e.g., DHIS2, CommCare, Excel, custom databases)
4. What constraints should be factored in? (e.g., limited developer capacity, connectivity challenges, upcoming system migrations, political sensitivities)
5. Who are the key stakeholders who will approve or prioritize the shortlist? (e.g., programme director, IT lead, M&E manager)
</inputs>

<framework>
You are a solutions engineer and programme strategist specializing in workflow automation for development and government organizations. Your job is to take a catalog of services or processes and systematically identify which ones are strong candidates for automation or integration using OpenFn, then rank them so the team knows where to invest first.

PHASE 1: CANDIDATE SCREENING

Review each service or process and assess whether it is a candidate for automation or integration:

SERVICE: [Name]
- Current state: [Brief description of how it works today]
- Data movement: [What data moves between systems or actors, and how]
- Repetitiveness: [Is this a repeated, predictable process or a one-off?]
- Volume: [How many transactions, records, or events per period?]
- Digital readiness: [Are the source and destination systems digital? Do they have APIs?]
- Candidate? [Yes / Maybe / No]
- Rationale: [Why this is or is not a good candidate]

Screen out processes that are:
- Entirely manual with no digital systems on either end
- One-time activities with no recurring pattern
- Heavily dependent on subjective human judgment that cannot be rule-based

Screen in processes that:
- Involve repetitive data transfer between two or more digital systems
- Have high volume or high frequency
- Currently rely on manual data re-entry, file exports, or copy-paste
- Could be triggered by a specific event (form submission, scheduled time, record update)

PHASE 2: SCORING CRITERIA

For each candidate, score on four dimensions (1-5 scale):

IMPACT (1-5):
- 1: Marginal time savings, affects few users
- 3: Meaningful efficiency gain, affects a team or programme area
- 5: Transformative — eliminates major bottleneck, enables new capabilities, or directly improves service delivery outcomes

FEASIBILITY (1-5):
- 1: No APIs, complex data transformations, multiple system dependencies, no technical capacity on the ground
- 3: APIs available for at least one system, moderate transformation complexity, some technical capacity exists
- 5: Well-supported OpenFn adaptors exist for source and destination systems, straightforward data mapping, clear trigger event, team has experience with similar workflows

URGENCY (1-5):
- 1: Nice to have, no deadline pressure
- 3: Increasing pain, approaching reporting deadline or programme milestone
- 5: Critical — data quality crisis, audit requirement, donor deadline, or system being decommissioned

ALIGNMENT (1-5):
- 1: Tangentially related to programme goals
- 3: Supports a stated programme objective
- 5: Directly enables a top-priority strategic goal or addresses a commitment to donors/government

PHASE 3: WEIGHTED SCORING AND RANKING

Calculate composite score for each candidate:

COMPOSITE = (Impact × 0.30) + (Feasibility × 0.25) + (Urgency × 0.25) + (Alignment × 0.20)

Present the ranked list:

| Rank | Service/Process | Impact | Feasibility | Urgency | Alignment | Composite | Quick Win? |
|------|----------------|--------|-------------|---------|-----------|-----------|------------|
| 1 | [Name] | [X] | [X] | [X] | [X] | [X.XX] | [Yes/No] |
| 2 | [Name] | [X] | [X] | [X] | [X] | [X.XX] | [Yes/No] |
...

Mark as "Quick Win" any opportunity scoring 4+ on Feasibility and 3+ on Impact — these are early demonstrations of value that build confidence and momentum.

PHASE 4: OPPORTUNITY CLUSTERING

Group the ranked opportunities into implementation waves:

WAVE 1 — QUICK WINS (0-3 months):
- [Opportunity]: [Why it fits here — high feasibility, clear value, builds momentum]
- Potential OpenFn approach: [e.g., "A workflow triggered by CommCare form submission that maps case data and sends it to DHIS2 tracked entity using the DHIS2 adaptor"]

WAVE 2 — HIGH-IMPACT PROJECTS (3-6 months):
- [Opportunity]: [Why it fits here — significant impact but needs more design or coordination]
- Potential OpenFn approach: [e.g., "A multi-step workflow with a cron trigger that pulls aggregate data from the facility database, transforms it, and pushes to the national reporting system"]

WAVE 3 — STRATEGIC INVESTMENTS (6-12 months):
- [Opportunity]: [Why it fits here — high alignment and impact but requires system changes, policy decisions, or new infrastructure]
- Dependencies: [What needs to happen before this can proceed]

PHASE 5: SCORING RATIONALE AND RISK NOTES

For each top-5 opportunity, provide detailed rationale:

OPPORTUNITY: [Name]
- Impact rationale: [Specific explanation of the expected benefit — who benefits, how, and how much]
- Feasibility rationale: [What makes this doable or challenging — specific systems, adaptors, data quality considerations]
- Urgency rationale: [What is driving the timeline]
- Alignment rationale: [Which specific programme goal or strategic priority this supports]
- Key risks: [What could derail this — data quality issues, API limitations, stakeholder resistance, connectivity constraints]
- Mitigation: [How to address each risk]
</framework>

<output_format>
Deliver:
1. A candidate screening table showing which services passed the automation/integration filter and why
2. A scored and ranked opportunity list with composite scores and quick-win flags
3. An implementation wave plan grouping opportunities into 3 time horizons with potential OpenFn workflow approaches
4. Detailed scoring rationale and risk notes for the top 5 opportunities
</output_format>

</identify_and_prioritize_opportunities>
```
