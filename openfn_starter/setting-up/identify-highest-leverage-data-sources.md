# Identify Highest-Leverage Data Sources to Connect

> Given the technology estate and operational pain points, prioritize which system connections will deliver the most value by considering frequency, user impact, data freshness needs, and implementation complexity.

## Prompt Template

```
<identify_highest_leverage_data_sources>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- tech_estate_map: If available, use the system inventory, data flow register, and criticality assessment to identify candidate connections. If not: "List all the systems in your technology landscape, what data each holds, and how data currently moves between them (automated, manual, not at all)."
- integration_surface_inventory: If available, use the API readiness scores and adaptor mappings to assess implementation feasibility for each candidate connection. If not: "For the key systems, do you know which have APIs, which have OpenFn adaptors available, and which are difficult to connect to?"
- data_controller_matrix: If available, use it to understand access requirements and governance constraints for each data source. If not: "Who controls access to each system's data, and are there any data sharing agreements or legal restrictions that affect what can be connected?"
- pain_point_list: If available, use documented pain points to identify where disconnected data causes the most operational harm. If not: "What are the biggest frustrations staff face because data does not flow between systems — where are people re-entering data, waiting for reports, or making decisions with stale information?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What are the organisation's top 3-5 strategic priorities or programme objectives that data integration should support?
2. Which data movements are currently the most painful — consuming the most staff time, causing the most errors, or creating the longest delays?
3. Are there any upcoming deadlines, reporting cycles, or programme milestones that create urgency for specific connections?
4. What is the available technical capacity for implementation — how many people can work on building workflows, and what is their experience level with OpenFn?
5. Are there any political or relationship factors that affect which systems can be connected first (e.g., a government ministry that is eager to collaborate vs. one that is resistant)?
6. What is the budget and timeline envelope for the integration project?
</inputs>

<framework>
You are a solutions architect and programme strategist who helps organisations identify where data integration will deliver the greatest return on investment. You understand that not all integrations are equally valuable — connecting the right two systems can transform a programme, while connecting the wrong two wastes months of effort. You think in terms of leverage: which single connection, if built, would unlock the most value for the most people?

PHASE 1: CANDIDATE CONNECTION IDENTIFICATION

From the tech estate map and pain point analysis, enumerate every potential system-to-system connection:

For each candidate connection, capture:

| Field | Detail |
|-------|--------|
| Source system | The system where data originates |
| Destination system | The system where data needs to arrive |
| Data type | What moves — registrations, case updates, indicators, transactions, reference data |
| Current method | How this data moves today — manual re-entry, CSV export, not at all |
| Frequency | How often this data needs to move — real-time, daily, weekly, monthly |
| Volume | Approximate records per transfer cycle |
| Direction | One-way or bidirectional |

Include connections that do not exist today but should — these are often the highest-leverage opportunities because staff have been working around the gap for so long that they have normalised the pain.

PHASE 2: VALUE ASSESSMENT

For each candidate connection, assess value across five dimensions:

TIME SAVINGS (1-5):
- 1: Saves minutes per week for a small team
- 3: Saves hours per week across multiple teams or eliminates a recurring manual process
- 5: Eliminates a major bottleneck that consumes days of staff time per cycle (e.g., monthly reporting that currently takes a week of manual data compilation)

DATA QUALITY IMPROVEMENT (1-5):
- 1: Marginal reduction in errors
- 3: Eliminates a known source of data quality problems (duplicate records, transcription errors, stale data)
- 5: Transforms data reliability — enables decisions that were previously impossible because the data could not be trusted

USER IMPACT (1-5):
- 1: Affects a handful of technical staff
- 3: Affects a team or department, or significantly improves the experience of field-level staff
- 5: Affects frontline service delivery — health workers, social workers, or beneficiaries directly experience the improvement

STRATEGIC ALIGNMENT (1-5):
- 1: Tangentially related to programme goals
- 3: Supports a stated objective
- 5: Directly enables a top-priority goal, fulfils a donor commitment, or satisfies a government mandate

DATA FRESHNESS GAIN (1-5):
- 1: Data is already reasonably current; automation would be convenient but not critical
- 3: Significant reduction in data latency — moving from weekly to daily, or daily to near-real-time — that enables better operational decisions
- 5: Enables real-time or near-real-time data availability where the current gap causes missed interventions, delayed responses, or blind spots in monitoring

PHASE 3: FEASIBILITY AND EFFORT ASSESSMENT

For each candidate connection, assess implementation complexity:

INTEGRATION READINESS:
- Does an OpenFn adaptor exist for both the source and destination systems? (If yes, name the adaptors.)
- Are APIs available and documented for both systems?
- Is API access already authorised, or does it require approvals, MOUs, or credential provisioning?
- Is a sandbox or test environment available for both systems?

TECHNICAL COMPLEXITY (1-5):
- 1: Simple point-to-point mapping with an existing OpenFn adaptor. Minimal transformation. Clear trigger event. Could be built in 1-2 days.
- 2: Straightforward mapping but requires some lookups, conditional logic, or data transformation. Existing adaptors cover both systems. 3-5 days to build and test.
- 3: Moderate complexity — multiple steps in the workflow, some custom transformation logic, pagination handling, or partial adaptor coverage. 1-2 weeks to build and test.
- 4: Significant complexity — custom adaptor development needed for at least one system, complex data transformation, bidirectional sync requirements, or large data volumes requiring batch processing. 2-4 weeks.
- 5: Major undertaking — no API on one side, complex governance requirements, multi-system orchestration, or data model mismatches that require extensive mapping and negotiation. 1-3 months.

DEPENDENCY ASSESSMENT:
- Does this connection depend on another connection being built first? (e.g., a reporting workflow that requires the registration sync to be in place)
- Does it require system changes (new API endpoints, webhook configuration, user account provisioning)?
- Does it require organisational changes (data sharing agreements, role definitions, process redesign)?

PHASE 4: LEVERAGE SCORING AND RANKING

Calculate a leverage score that balances value against effort:

VALUE SCORE = (Time Savings x 0.25) + (Data Quality x 0.25) + (User Impact x 0.20) + (Strategic Alignment x 0.15) + (Data Freshness x 0.15)

LEVERAGE SCORE = VALUE SCORE / (Technical Complexity x 0.6 + Dependency Factor x 0.4)

Where Dependency Factor is:
- 1: No dependencies — can be built independently
- 2: Depends on one other connection or one external approval
- 3: Multiple dependencies — requires several prerequisites to be in place

Present the ranked list:

| Rank | Connection | Value Score | Complexity | Dependencies | Leverage Score | Category |
|------|-----------|-------------|------------|-------------|----------------|----------|
| 1 | [Source] -> [Dest] | [X.XX] | [1-5] | [1-3] | [X.XX] | [Quick Win / High Value / Strategic] |

Categorise each connection:
- QUICK WIN: High leverage score, low complexity (1-2), no dependencies. Build first to demonstrate value and build team confidence.
- HIGH VALUE: High value score, moderate complexity (3). Worth the investment — schedule for the main implementation phase.
- STRATEGIC: High strategic alignment, higher complexity or dependencies. Plan for but do not let these delay early wins.
- DEFER: Low leverage score relative to effort. Revisit after higher-leverage connections are in place.

PHASE 5: IMPLEMENTATION ROADMAP

Sequence the top connections into a phased plan:

PHASE A — FOUNDATION (Weeks 1-4):
- List the 1-3 quick-win connections to build first
- For each, describe the OpenFn workflow at a high level: trigger type, adaptor(s), key transformation logic, expected outcome
- Identify what needs to happen before building starts (credential provisioning, sandbox setup, data sharing approval)

PHASE B — CORE INTEGRATIONS (Weeks 5-12):
- List the high-value connections to build next
- For each, note dependencies on Phase A and any additional setup required
- Identify which connections can be built in parallel vs. which must be sequential

PHASE C — EXPANSION (Weeks 13+):
- List the strategic connections to plan for
- Identify prerequisites that should be initiated during Phases A and B (e.g., beginning the MOU process, requesting API access, piloting a custom adaptor)
- Note any connections that should be re-evaluated after Phase B — the priority may shift based on what is learned during implementation

For each phase, estimate the team capacity required (person-days) and flag any external dependencies that could cause delays.
</framework>

<output_format>
Deliver:
1. A candidate connection inventory listing every potential system-to-system data movement with current method, frequency, and volume
2. A value assessment matrix scoring each connection on time savings, data quality, user impact, strategic alignment, and data freshness
3. A feasibility assessment covering integration readiness, technical complexity, and dependencies for each connection
4. A ranked leverage scorecard with categorisation (quick win, high value, strategic, defer) for every candidate connection
5. A phased implementation roadmap with specific OpenFn workflow descriptions, prerequisites, capacity estimates, and timeline for each phase
</output_format>

</identify_highest_leverage_data_sources>
```
