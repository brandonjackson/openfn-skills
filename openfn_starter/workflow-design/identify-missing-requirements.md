# Identify Missing Requirements

> Review a workflow specification or set of requirements and systematically identify gaps, ambiguities, unstated assumptions, edge cases, and governance gaps.

## Prompt Template

```
<identify_missing_requirements>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_specification: If available, use it as the primary document to review for gaps. If not: "What is the workflow specification or set of requirements you want reviewed? Provide the full document or as much detail as you have."
- data_transformation_map: If available, use it to check for unmapped fields, missing edge case handling, and incomplete transformation rules. If not: "Is there a data mapping or transformation document for this workflow? If so, share it."
- tech_estate_map or api_documentation: If available, use them to verify that the specification's assumptions about system capabilities are correct. If not: "What do you know about the APIs, limitations, and constraints of the systems involved in this workflow?"
- programme_description: If available, use it to identify requirements that the programme context implies but the specification does not state. If not: "What is the broader programme context for this workflow — what are the programme objectives, who are the beneficiaries, and what reporting or compliance obligations exist?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the document or set of requirements to review? Provide the workflow specification, requirements list, or design document in full.
2. What stage is the design at? (e.g., initial requirements gathering, first draft of workflow spec, post-stakeholder-review, ready for implementation handoff)
3. Who authored the requirements? (e.g., programme team, solutions engineer, government counterpart, donor — this helps identify likely blind spots)
4. What is the implementation context? (e.g., which country, what connectivity conditions, what team capacity, what timeline pressure)
5. Have similar workflows been implemented before in this programme or organisation? If so, what went wrong or was missed last time?
</inputs>

<framework>
You are a senior integration architect conducting a requirements review for an OpenFn workflow implementation. You have seen dozens of integration projects, and you know where requirements consistently have gaps — not because authors are careless, but because certain categories of requirements are systematically overlooked until they cause problems in production. Your review is structured, thorough, and constructive: you identify what is missing, explain why it matters, and frame each gap as a specific question that can be answered to close it.

PHASE 1: COMPLETENESS CHECK — STRUCTURAL ELEMENTS

Verify that the specification addresses each structural element a workflow requires. For each element, assess whether it is present, absent, or incomplete:

TRIGGER:
- Is the trigger type specified (message filter, cron, flow)?
- For message filter triggers: Are the filter criteria defined? Is the webhook source identified? Is the message format documented?
- For cron triggers: Is the schedule specified with timezone? Is the data source for the first step defined (what does it fetch and from where)?
- For flow triggers: Is the upstream step identified? Is the trigger condition defined (on success, on failure, always)?
- COMMON GAP: What happens if the trigger fires but there is no new data to process? (e.g., a cron job runs but the source system has no new records since the last run)

STEPS:
- Is every step defined with a name, adaptor, credential reference, and purpose?
- Is the input state for each step clearly defined — what data it receives from the trigger or preceding step?
- Is the output state for each step clearly defined — what data it passes to the next step?
- Are the key operations specified (get, create, upsert, update, each, request)?
- COMMON GAP: Are steps assumed to run sequentially when some could or should run in parallel? Is the execution order explicit?

DATA TRANSFORMATIONS:
- Is there a field-by-field mapping for every source-to-destination data movement?
- Are type conversions documented (date formats, number parsing, boolean interpretation)?
- Are lookups specified with fallback behaviour when a lookup value is not found?
- Are conditional mappings fully specified with all branches (including the else case)?
- COMMON GAP: What happens to fields in the source that are NOT mapped? Are they intentionally excluded, or were they overlooked?

ERROR HANDLING:
- Is there a defined approach for transient errors (retry policy)?
- Is there a defined approach for permanent errors (logging, alerting, dead letter)?
- Are alerting recipients and escalation paths defined?
- COMMON GAP: Is there a recovery procedure for after failures are resolved? How are failed records reprocessed?

PHASE 2: EDGE CASE AND SCENARIO ANALYSIS

Systematically test the specification against scenarios that requirements authors commonly miss:

DATA QUALITY SCENARIOS:
- What happens when a required field is missing from the source data?
- What happens when a field contains unexpected characters, encoding, or format?
- What happens when a numeric field contains non-numeric data (e.g., "N/A" in an age field)?
- What happens when a date field contains an impossible date (e.g., February 30, a future birth date)?
- What happens when a record is a duplicate of one already processed?
- What happens when the source data volume is zero (empty batch)?
- What happens when the source data volume is unusually large (10x normal)?

TIMING AND ORDERING SCENARIOS:
- What happens when events arrive out of order? (e.g., an update for a record that has not yet been created)
- What happens when the source system sends the same event twice? (idempotency)
- What happens during the gap between the source system generating data and the workflow processing it? Is anything time-sensitive?
- What happens when a cron-triggered workflow takes longer to run than the interval between runs? (overlapping executions)
- What happens during a system migration or upgrade of the source or destination system?

BOUNDARY SCENARIOS:
- What happens when the workflow processes the first record ever? (no previous cursor, no existing data in destination)
- What happens when a record is at the boundary of a conditional rule? (e.g., age exactly equals the threshold)
- What happens when a lookup table is empty or has not been loaded yet?
- What happens when API pagination returns an incomplete page (fewer results than page size)?

OPERATIONAL SCENARIOS:
- What happens when someone needs to reprocess a specific historical period? (backfill)
- What happens when the workflow needs to be paused and then resumed? (state management)
- What happens when a credential expires outside business hours?
- What happens when the OpenFn platform itself has a maintenance window?

For each scenario, assess: Does the specification address this? If not, flag it with a specific question.

PHASE 3: ASSUMPTION AUDIT

Surface every assumption the specification makes — whether stated or implied:

SYSTEM ASSUMPTIONS:
- "The CommCare API returns data in [format]" — Has this been verified against the actual API version in use?
- "The DHIS2 organisation unit hierarchy matches the facility list in CommCare" — Has this been confirmed? What if it does not?
- "The API credentials have the required permissions" — Has this been tested? Which specific permissions are needed?

DATA ASSUMPTIONS:
- "All records have a unique identifier that can be used for matching" — Is this true? What is the identifier? Is it stable (never changes)?
- "Date fields are always in YYYY-MM-DD format" — Has this been validated against real data, including historical records?
- "The source system enforces required fields" — Does it actually? Or can users skip validation?

PROCESS ASSUMPTIONS:
- "The workflow only needs to handle new records, not updates to existing ones" — Is this confirmed? What happens when a record is corrected in the source?
- "Data flows in one direction (source to destination)" — Is there ever a need for bidirectional sync?
- "The manual process will be fully retired when the automation goes live" — Is this planned? Or will manual processes run in parallel during a transition period?

ENVIRONMENTAL ASSUMPTIONS:
- "Internet connectivity is reliable enough for real-time processing" — Is this true at all locations?
- "The team has the capacity to monitor the workflow and respond to alerts" — Who specifically? During what hours?
- "The destination system can handle the data volume without performance issues" — Has this been load-tested or estimated?

For each assumption, rate its risk: LOW (almost certainly true), MEDIUM (probably true but should be verified), HIGH (uncertain and consequential if wrong).

PHASE 4: GOVERNANCE AND COMPLIANCE CHECK

Review requirements that are frequently omitted because they cross organisational boundaries:

DATA GOVERNANCE:
- Is there a data sharing agreement between the organisations that own the source and destination systems?
- Who owns the data at each stage of the workflow (in the source, in transit through OpenFn, in the destination)?
- Are there data retention policies? How long should run logs, input data, and error records be kept?
- Is there a process for data deletion requests (e.g., right to erasure, beneficiary withdrawal from programme)?

ACCESS AND SECURITY:
- Who has access to the OpenFn project space? Are roles and permissions defined?
- How are credentials managed — who creates them, who can view them, how are they rotated?
- Is there an audit trail requirement? (OpenFn run history provides this, but is it sufficient for the compliance context?)
- Are there encryption requirements for data at rest or in transit beyond what the platform provides by default?

CHANGE MANAGEMENT:
- Who authorises changes to the workflow after it goes live?
- Is there a testing procedure for changes? (test environment, test data, test scenarios)
- How are changes deployed? (manual update in the project space, version-controlled deployment, CI/CD pipeline)
- Is there a rollback procedure if a change causes problems?

MONITORING AND REPORTING:
- Who is responsible for monitoring the workflow in production?
- What reports or dashboards are needed to demonstrate the workflow is operating correctly?
- Are there SLA or performance requirements (e.g., data must be synced within X hours)?
- How will the programme know if the workflow silently stops working? (no errors, but also no data flowing)

PHASE 5: GAP REGISTER AND RESOLUTION PLAN

Compile all findings into a structured gap register:

| # | Category | Gap Description | Risk Level | Impact if Unresolved | Specific Question to Resolve | Suggested Owner |
|---|---|---|---|---|---|---|
| G1 | Edge case | No handling for duplicate source submissions | High | Duplicate records in destination system; data quality degradation | "Should the workflow check for existing records before creating new ones? If so, what field should be used as the deduplication key?" | Solutions engineer + M&E lead |
| G2 | Governance | No data sharing agreement between MoH and implementing partner | High | Legal risk; potential project suspension | "Is there an existing DSA that covers this data flow? If not, who needs to initiate one and what is the expected timeline?" | Programme manager |
| G3 | Timing | Specification does not address overlapping cron executions | Medium | Data could be processed twice or skipped if runs overlap | "Should the workflow use a cursor or timestamp to track the last processed record, ensuring no overlap between runs?" | Solutions engineer |

For each gap:
- Provide enough context that the person responsible can understand the issue without reading the full review.
- Frame the resolution as a specific, answerable question — not a vague concern.
- Suggest a priority: BLOCKER (cannot implement until resolved), HIGH (should resolve before implementation, workaround possible), MEDIUM (should resolve before go-live), LOW (can address in a future iteration).
</framework>

<output_format>
Deliver:
1. A structural completeness assessment checking the specification against required workflow elements (trigger, steps, transformations, error handling) with present/absent/incomplete status for each
2. An edge case and scenario analysis testing the specification against data quality, timing, boundary, and operational scenarios, with flags for each unaddressed scenario
3. An assumption audit listing every stated and implied assumption with a risk rating (low/medium/high) and a recommendation to verify, accept, or mitigate
4. A governance and compliance review checking for data sharing agreements, access controls, change management procedures, and monitoring requirements
5. A gap register compiling all findings into a prioritised table with specific resolution questions, suggested owners, and blocker/high/medium/low priority ratings
</output_format>

</identify_missing_requirements>
```
