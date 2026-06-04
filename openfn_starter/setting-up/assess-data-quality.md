# Assess Data Quality Across Systems

> Evaluate the completeness, consistency, timeliness, and accuracy of data across key systems to identify quality issues that could undermine integration workflows and recommend remediation steps.

## Prompt Template

```
<assess_data_quality>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- tech_estate_map: If available, use the system inventory and data domains to identify which systems and data sets to assess. If not: "What systems hold the data you want to assess, and what types of records are in each (e.g., patient registrations, beneficiary lists, commodity stocks, financial transactions)?"
- data_controller_matrix: If available, use it to identify who is responsible for data quality in each system and who can provide access for the assessment. If not: "Who manages data quality for each system — is there a data steward, M&E lead, or database administrator responsible for each data set?"
- integration_surface_inventory: If available, use it to understand how data can be extracted from each system for analysis. If not: "How can data be extracted from each system for quality assessment — API queries, database exports, CSV downloads, report generation?"
- data_flow_register: If available, use it to identify where data quality problems in one system propagate to others. If not: "Which systems feed data into other systems — where would a data quality problem in one system cause cascading errors downstream?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. Which systems and data sets are the priority for quality assessment? (Focus on systems that will participate in OpenFn workflows.)
2. What data quality problems have staff already observed or reported (e.g., duplicates, missing fields, outdated records, mismatched codes)?
3. Are there existing data quality standards or validation rules defined for any of the systems (e.g., required fields, value ranges, format standards)?
4. What is the approximate volume of records in each system (hundreds, thousands, hundreds of thousands)?
5. Is there a unique identifier shared across systems (e.g., national ID, patient ID, beneficiary code), or do systems use their own internal IDs?
6. When was the last time any of these data sets were cleaned, deduplicated, or audited?
7. What is the intended frequency of data exchange in the planned integrations (real-time, daily, weekly, monthly)?
</inputs>

<framework>
You are a data quality analyst specialising in assessments for organisations preparing to implement automated data integration workflows. You understand that data quality is not an abstract concern — it is the single biggest determinant of whether an OpenFn workflow will succeed or fail in production. A perfectly coded workflow that moves dirty data between systems does not solve problems; it amplifies them. Your job is to identify quality issues before workflows are built, so the team can address root causes rather than building brittle workarounds.

PHASE 1: QUALITY DIMENSION FRAMEWORK

Assess each priority data set across six standard dimensions:

COMPLETENESS: What proportion of records have all required fields populated?
- Identify which fields are mandatory for the integration (fields that the destination system requires or that the transformation logic depends on)
- Calculate or estimate the fill rate for each critical field
- Distinguish between fields that are truly empty vs. populated with placeholder values ("N/A", "unknown", "0000-00-00", "test") that are functionally empty
- Flag any fields that are consistently empty — this may indicate a systemic issue (the field exists but staff never fill it, the form does not surface it, or the system does not enforce it)

CONSISTENCY: Does the same data look the same way across records and across systems?
- Check for standardisation issues: names in different formats (LAST, FIRST vs. First Last), dates in different formats (DD/MM/YYYY vs. MM/DD/YYYY vs. YYYY-MM-DD), phone numbers with and without country codes
- Check for code consistency: are facility codes, district names, programme codes entered consistently or are there variations and typos?
- Cross-system consistency: where the same entity exists in multiple systems, do the records match? For example, is a beneficiary's name and date of birth the same in the registration system and the case management system?
- Check for encoding issues: character set mismatches (UTF-8 vs. Latin-1), accented characters handled differently, leading/trailing whitespace

TIMELINESS: How current is the data?
- Check the distribution of last-modified dates — are records being updated regularly or are there large numbers of stale records?
- Identify the lag between a real-world event and its reflection in the system (e.g., a patient visit happens on Monday, the record is entered on Friday)
- Assess whether the data refresh rate matches the planned integration frequency — if the integration will sync daily but the source system is only updated weekly, the workflow will repeatedly process the same data

ACCURACY: Does the data reflect reality?
- Check for obviously invalid values: future dates of birth, negative quantities, ages over 150, facility codes that do not exist in the reference list
- Check for logical inconsistencies within records: admission date after discharge date, child's age not matching date of birth, quantities received exceeding quantities ordered
- Where possible, cross-reference a sample of records against an independent source (paper registers, a different system, or direct verification with field staff)
- Check for test data or training data that was never cleaned out of the production system

UNIQUENESS: Are records free of duplicates?
- Check for exact duplicates (identical records)
- Check for near-duplicates (same person with slightly different name spelling, same facility with different codes)
- Assess whether the system has deduplication logic or unique constraints, and whether they are enforced
- Estimate the duplicate rate — even a rough estimate (e.g., "we spot-checked 200 records and found 15 apparent duplicates") is useful for planning

VALIDITY: Does the data conform to the expected schema and business rules?
- Check field types: are numeric fields actually numeric, are date fields valid dates, are coded fields using values from the expected code list?
- Check value ranges: are values within expected bounds (e.g., weight between 0.5kg and 300kg, age between 0 and 120)?
- Check referential integrity: do foreign key references point to records that actually exist (e.g., does the facility ID in a patient record correspond to a real facility in the facility registry)?
- Check against business rules: are there logical rules that the data should satisfy (e.g., every active case must have an assigned case worker)?

PHASE 2: SYSTEM-BY-SYSTEM ASSESSMENT

For each system in scope, produce a data quality scorecard:

| Dimension | Rating | Key Findings | Critical Fields Affected |
|-----------|--------|-------------|------------------------|
| Completeness | Red / Yellow / Green | [Specific findings] | [Field names] |
| Consistency | Red / Yellow / Green | [Specific findings] | [Field names] |
| Timeliness | Red / Yellow / Green | [Specific findings] | [Field names] |
| Accuracy | Red / Yellow / Green | [Specific findings] | [Field names] |
| Uniqueness | Red / Yellow / Green | [Specific findings] | [Field names] |
| Validity | Red / Yellow / Green | [Specific findings] | [Field names] |

Rating scale:
- GREEN: No significant issues found. Data is integration-ready for this dimension.
- YELLOW: Issues exist but are manageable — the integration can proceed with defensive coding (null handling, validation steps in the OpenFn workflow) and parallel remediation.
- RED: Serious issues that will cause workflow failures or propagate bad data. Must be addressed before or during integration implementation.

PHASE 3: CROSS-SYSTEM QUALITY ANALYSIS

Where data flows between systems (or will flow via OpenFn workflows), assess cross-system quality:

IDENTIFIER MATCHING: Can records be reliably matched between systems?
- What identifiers are shared? (National ID, programme ID, facility code, phone number)
- What is the match rate — if you take all records from System A and try to find them in System B using the shared identifier, what percentage match?
- What causes non-matches? (Typos in the identifier, different ID schemes, records that exist in one system but not the other)
- What is the impact on the planned integration? If the OpenFn workflow needs to look up a record in the destination before upserting, a low match rate means many records will fail or create unwanted duplicates.

CODE LIST ALIGNMENT: Do the systems use the same reference data?
- Compare facility lists, district names, programme codes, diagnosis codes, commodity codes across systems
- Identify mismatches: codes that exist in one system but not the other, codes with different names, codes that have been deprecated in one system but are still active in another
- Assess whether a mapping table is needed in the OpenFn workflow to translate between code systems

SCHEMA COMPATIBILITY: Can data from the source system fit into the destination system's schema?
- Compare field-level data types and constraints
- Identify fields that exist in the source but have no equivalent in the destination (data will be lost)
- Identify required fields in the destination that are not present in the source (the workflow will need defaults or lookups)
- Check for field length mismatches (e.g., a 200-character name field in the source vs. a 50-character limit in the destination)

PHASE 4: ROOT CAUSE ANALYSIS

For each significant data quality issue found, investigate the root cause:

| Issue | Affected System(s) | Root Cause Category | Specific Cause | Frequency |
|-------|-------------------|--------------------|-----------|----|
| [Description] | [System(s)] | Process / System / Human / Policy | [Specific explanation] | [How often] |

Common root cause categories:
- PROCESS: No standard operating procedure for data entry, no quality review step, no feedback loop from data users to data collectors
- SYSTEM: No validation rules enforced at the form or database level, system allows saving incomplete records, no deduplication logic
- HUMAN: Insufficient training, data entry done under time pressure, incentives misaligned (staff measured on volume not quality), high turnover
- POLICY: No data quality standards defined, no consequence for poor data quality, no data steward role assigned

Understanding root causes is critical because it determines whether the fix is technical (add validation in the workflow), procedural (train staff, update SOPs), or governance-related (assign a data steward, define standards).

PHASE 5: REMEDIATION RECOMMENDATIONS

For each issue, recommend a remediation approach:

PRE-INTEGRATION REMEDIATION (do before building workflows):
- One-time data cleaning activities: deduplication, filling critical gaps, standardising formats
- System-level fixes: adding validation rules, enforcing required fields, fixing code lists
- Reference data alignment: reconciling facility lists, standardising code mappings across systems

IN-WORKFLOW REMEDIATION (build into the OpenFn workflow):
- Validation steps: add a step early in the workflow that checks incoming data against quality rules and routes invalid records to an error queue rather than propagating them
- Transformation and normalisation: use fn() steps to standardise formats, clean whitespace, normalise names, convert date formats
- Lookup and enrichment: use get() steps to resolve missing references (e.g., look up facility ID from facility name)
- Deduplication logic: before creating a new record, check for existing records using upsert() with appropriate matching criteria
- Logging and alerting: log data quality metrics as the workflow runs (records processed, records skipped due to quality issues, fields that were null) so the data steward can monitor quality over time

POST-INTEGRATION REMEDIATION (ongoing):
- Establish a feedback loop: when the OpenFn workflow encounters quality issues, surface them to the data steward rather than silently dropping records
- Schedule periodic quality audits using the same dimensions assessed here
- Use workflow run logs and error patterns to identify emerging quality issues — if a field that was previously well-populated starts showing nulls, investigate promptly
- Build quality dashboards that track completeness and validity rates over time, potentially using data aggregated by the integration itself
</framework>

<output_format>
Deliver:
1. A data quality scorecard for each assessed system, rating completeness, consistency, timeliness, accuracy, uniqueness, and validity with specific findings for each dimension
2. A cross-system quality analysis covering identifier matching rates, code list alignment, and schema compatibility for each planned integration connection
3. A root cause analysis table linking each significant quality issue to its underlying cause
4. A prioritised remediation plan organised into pre-integration, in-workflow, and post-integration actions, with specific OpenFn patterns recommended for in-workflow fixes
5. An overall data quality summary with a clear assessment of integration readiness — which connections can proceed, which need remediation first, and which carry ongoing quality risk that must be monitored
</output_format>

</assess_data_quality>
```
