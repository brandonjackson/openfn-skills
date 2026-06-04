# Generate Citizen Insights Report

> Analyze workflow run data and integrated system data to generate insights about service delivery to citizens and beneficiaries.

## Prompt Template

```
<generate_citizen_insights_report>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_brief or programme_description: If available, use it to understand the programme objectives, target populations, and service delivery model. If not: "What programme does this report cover, and what services are being delivered to citizens or beneficiaries?"
- system_inventory or tech_estate_map: If available, use it to understand which systems are integrated and what data domains each holds. If not: "What systems are connected through your OpenFn workflows (e.g., CommCare, DHIS2, OpenMRS, Kobo, a custom MIS), and what type of data does each hold?"
- workflow_documentation or workflow_list: If available, use it to understand which workflows are running, what data they move, and what triggers them. If not: "Can you describe the key workflows in your project space — what data they move, between which systems, and how often they run?"
- previous_reports or baseline_data: If available, use them to compare current data against prior periods and track trends over time. If not: "Is there a previous reporting period or baseline we should compare against, and if so, what were the key metrics?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the reporting period? (e.g., last 30 days, Q2 2025, January-March 2026)
2. What are the key service delivery outcomes the programme tracks? (e.g., registrations completed, referrals made, treatments administered, cash transfers disbursed)
3. What geographic or administrative levels should the analysis cover? (e.g., national, regional, district, facility)
4. What demographic dimensions matter for equity analysis? (e.g., age, gender, disability status, urban/rural)
5. Who is the primary audience for this report? (e.g., programme managers, donors, government counterparts, policy makers)
6. Are there specific questions or concerns the audience wants answered? (e.g., "Why did registrations drop in the Northern region?", "Are women accessing services at the same rate as men?")
</inputs>

<framework>
You are a programme analytics specialist with expertise in using workflow automation data to generate actionable insights about service delivery in development and government programmes. You understand that OpenFn workflow run data — when combined with knowledge of what each workflow does and what systems it connects — can reveal patterns about how services are reaching citizens. A successful registration workflow run is not just a technical event; it represents a beneficiary who was enrolled. A failed run may mean someone was denied a service they needed.

PHASE 1: DATA SOURCE IDENTIFICATION AND ALIGNMENT

Identify what data is available from the OpenFn project space and connected systems:

WORKFLOW RUN DATA:
- For each workflow in the project space, document what service delivery event it represents (e.g., "the CommCare-to-DHIS2 registration workflow fires each time a community health worker registers a new beneficiary")
- Map workflow triggers to service touchpoints: a webhook trigger from CommCare represents a field-level event; a cron-triggered workflow pulling from DHIS2 represents a periodic data sync
- Note the data payload each workflow processes — the fields in the state object that carry citizen/beneficiary information (demographics, location, service type, timestamps)

CONNECTED SYSTEM DATA:
- Identify which integrated systems hold the authoritative records for each data domain (registrations, service encounters, outcomes)
- Note any data that passes through OpenFn workflows but is not fully captured in run logs (e.g., aggregate counts, computed fields)
- Flag data gaps: services that happen outside the integrated systems (paper-based processes, parallel systems not yet connected)

Produce a data source matrix showing what can be measured, from where, and with what confidence level.

PHASE 2: SERVICE VOLUME AND TREND ANALYSIS

Analyze workflow run volumes as a proxy for service delivery volumes:

VOLUME METRICS:
- Total successful runs per workflow per time period (daily, weekly, monthly)
- Run volume trends: increasing, stable, declining, seasonal patterns
- Comparison to prior reporting periods and to programme targets
- Breakdown by geographic unit (extracted from workflow state data or inferred from trigger source)

TREND IDENTIFICATION:
- Calculate week-over-week and month-over-month growth rates
- Identify inflection points: when did volumes change significantly, and correlate with known events (new facility onboarded, training conducted, system outage, policy change)
- Detect seasonal or cyclical patterns (e.g., agricultural cycles affecting registration, school terms affecting child health visits)
- Flag any geographic units or facilities that are outliers — significantly above or below expected volumes

Present volumes as both absolute numbers and rates (per capita, per facility, per health worker) where denominators are available.

PHASE 3: SERVICE COMPLETION AND QUALITY ANALYSIS

Examine whether services are being completed end-to-end:

COMPLETION METRICS:
- For multi-step service pathways (registration then referral then treatment), track conversion rates between steps by linking related workflows
- Identify drop-off points: where in the service chain do beneficiaries fall out of the system?
- Analyze workflow failure rates as indicators of service delivery problems — a failed run in a referral workflow means a referral did not reach its destination
- Distinguish between technical failures (API errors, timeouts, authentication failures) and data quality failures (validation errors, missing required fields, malformed records)

QUALITY INDICATORS:
- Data completeness: what percentage of records processed by workflows have all required fields populated?
- Timeliness: what is the lag between the service event (form submission timestamp) and the workflow processing it (run timestamp)? Are there bottlenecks where data sits in queues?
- Duplicate detection: are workflows processing the same records multiple times, and what does this suggest about field-level data collection practices?

PHASE 4: EQUITY AND COVERAGE ANALYSIS

Analyze service delivery through an equity lens:

GEOGRAPHIC COVERAGE:
- Map service volumes by administrative unit — which areas are well-served and which are underserved?
- Calculate coverage rates where target population denominators are available
- Identify geographic blind spots: areas with no workflow activity that should have activity based on population data

DEMOGRAPHIC ANALYSIS:
- Break down service volumes by available demographic dimensions (age, gender, disability, household type)
- Calculate ratios and identify disparities: are certain groups receiving fewer services relative to their share of the target population?
- Track demographic patterns over time: is equity improving, stable, or worsening?

GAP IDENTIFICATION:
- Cross-reference workflow activity with programme targeting criteria to identify populations that should be reached but are not appearing in the data
- Note the difference between "not reached" and "not visible" — some gaps may reflect missing integrations rather than missing services

PHASE 5: INSIGHTS SYNTHESIS AND RECOMMENDATIONS

Compile findings into an actionable insights report:

KEY FINDINGS:
- Top 3-5 headline insights, each supported by specific data points from the analysis
- Distinguish between confirmed findings (strong data support) and hypotheses (suggestive patterns that need further investigation)

RISK FLAGS:
- Service delivery risks: declining volumes, widening equity gaps, increasing failure rates
- Data quality risks: patterns suggesting data collection problems that undermine the reliability of the analysis
- System risks: workflow patterns suggesting integration issues that affect service continuity

RECOMMENDATIONS:
- For programme managers: operational actions to improve service delivery (deploy more workers to underserved areas, investigate drop-off at referral step, retrain staff on data entry)
- For technical teams: workflow and integration improvements (add error handling for common failure patterns, create new workflows to close data gaps, adjust trigger timing to reduce processing delays)
- For policy makers: strategic insights about programme reach, equity, and effectiveness
</framework>

<output_format>
Deliver:
1. A data source matrix showing which workflows and systems provide data for each metric, with confidence levels
2. A service volume dashboard with trend analysis across time periods, geographies, and facilities, including comparison to targets
3. A service completion analysis showing conversion rates across multi-step pathways and failure impact assessment
4. An equity and coverage analysis with geographic and demographic breakdowns highlighting gaps and disparities
5. An executive summary with 3-5 headline insights, risk flags, and prioritized recommendations tailored to programme managers, technical teams, and policy makers
</output_format>

</generate_citizen_insights_report>
```
