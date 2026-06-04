# Map Required Data Transformations

> For a given source-to-destination data flow, map every field transformation needed including mappings, type conversions, lookups, conditional logic, and default values.

## Prompt Template

```
<map_required_data_transformations>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_specification: If available, use it to identify the source system, destination system, and the steps where data transformation occurs. If not: "What workflow is this transformation for? What system is the data coming from and where is it going?"
- api_documentation or data_dictionaries: If available, use them to identify the exact field names, types, and constraints in both source and destination systems. If not: "Do you have documentation for the source and destination system APIs or data models? Can you share sample payloads or field lists for both?"
- sample_data: If available, use it to identify real field values, edge cases, and data quality patterns. If not: "Can you provide a sample record from the source system — either a JSON payload, a CSV row, or a screenshot of the form/record?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the source system and what data structure does it produce? (e.g., a CommCare form submission as JSON, a DHIS2 tracked entity, a Kobo submission, a CSV export from an MIS)
2. What is the destination system and what data structure does it expect? (e.g., a DHIS2 event, an OpenMRS patient record, a FHIR Bundle, rows in a PostgreSQL table)
3. Are there existing field mappings or a mapping spreadsheet from a previous phase? If so, share it as the starting point.
4. Are there lookup tables or reference data that must be used during transformation? (e.g., facility name to orgUnit ID, community health worker name to provider ID, service code to programme code)
5. Are there conditional rules — cases where the mapping changes depending on the data values? (e.g., different destination fields for adults vs. children, different mappings per region)
6. What are the known data quality issues in the source system? (e.g., inconsistent date formats, free-text fields where codes are expected, missing required fields, duplicate records)
7. What are the mandatory fields in the destination system? What happens if they are missing from the source?
</inputs>

<framework>
You are a data transformation specialist working on integration projects for development and humanitarian programmes using OpenFn. You translate the gap between how data exists in a source system and how it must arrive in a destination system into precise, implementable transformation rules. You know that in practice, the mapping is rarely one-to-one — source data is messy, destination schemas are rigid, and the transformation layer must bridge that gap reliably.

PHASE 1: SOURCE SCHEMA ANALYSIS

Document the complete structure of the source data:

- List every field in the source payload with its path notation (e.g., `state.data.form.case.patient.first_name`), data type, and example values.
- For nested structures (common in CommCare, ODK, and Kobo form submissions), flatten the hierarchy and note the nesting path.
- For repeating groups (e.g., a list of household members within a registration form), document the array structure and how individual items are accessed (e.g., `state.data.form.household_members[*].name`).
- Identify fields that are system-generated (submission ID, timestamp, form version) versus user-entered.
- Note any fields that are inconsistently populated — sometimes present, sometimes missing, sometimes in different formats depending on form version or user behaviour.

PHASE 2: DESTINATION SCHEMA ANALYSIS

Document the complete structure the destination system expects:

- List every field the destination API or data model accepts, with path notation, expected data type, and constraints (required/optional, max length, allowed values, format patterns).
- Identify which fields are required for a successful create or update operation. For example, a DHIS2 tracked entity instance requires `orgUnit`, `trackedEntityType`, and specific `attributes`; an OpenMRS patient requires identifiers and person attributes.
- Note any auto-generated fields in the destination (record IDs, timestamps) that should not be mapped from the source.
- Document any validation rules the destination enforces (e.g., date must be in ISO 8601, phone number must match a regex, age must be between 0 and 150).
- If the destination uses coded values (option sets, concept dictionaries), list the valid codes and their meanings.

PHASE 3: FIELD-BY-FIELD MAPPING TABLE

Produce a comprehensive mapping table:

| # | Source Field Path | Source Type | Destination Field Path | Destination Type | Transformation Rule | Notes |
|---|---|---|---|---|---|---|
| 1 | `state.data.form.patient.first_name` | string | `attributes.firstName` | string | Direct map, trim whitespace | Required in destination |
| 2 | `state.data.form.patient.dob` | string (YYYY-MM-DD) | `attributes.birthDate` | date (ISO 8601) | Append `T00:00:00.000` | If missing, use default `1900-01-01` |
| ... | ... | ... | ... | ... | ... | ... |

For each row, classify the transformation type:
- DIRECT: Source value maps directly with no change
- FORMAT: Same data, different format (date conversion, string padding, case change)
- LOOKUP: Source value must be translated via a reference table (facility name to ID, code to code)
- COMPUTED: Destination value is calculated from one or more source fields (concatenation, arithmetic, conditional)
- CONSTANT: Destination value is always the same regardless of source data
- CONDITIONAL: Mapping rule changes based on data values (if-then-else logic)
- DEFAULT: Value to use when the source field is null, empty, or missing

PHASE 4: COMPLEX TRANSFORMATION RULES

For transformations that cannot be captured in a single table row, document them in detail:

LOOKUPS:
- For each lookup, specify: the source value being looked up, the reference table (hardcoded in the expression, fetched from an API in a prior step, or stored in state), the lookup key, and the return value.
- Define what happens when a lookup fails (value not found): skip the record, use a default, log a warning and continue, or halt the workflow.
- Example: "Look up `state.data.form.facility_name` against the facility mapping object in `state.references.facilities` to get the DHIS2 `orgUnit` ID. If not found, log a warning with the facility name and skip this record."

CONDITIONAL LOGIC:
- For each conditional, write it as a clear if-then-else rule with specific field paths and values.
- Example: "If `state.data.form.patient.age` < 5, set `attributes.programme` to `UNDER5_NUTRITION`. If age >= 5 and < 18, set to `CHILD_HEALTH`. Otherwise, set to `ADULT_HEALTH`."
- Identify all branches and ensure every possible input value is handled (no undefined cases).

REPEATING GROUPS:
- For source data that contains arrays (e.g., multiple family members, multiple diagnoses), specify how each item should be transformed.
- Should each item become a separate record in the destination? Or should they be nested within a single parent record?
- How should the transformation use `each()` or `map()` in the OpenFn expression to iterate over the array?

CONCATENATIONS AND COMPUTED FIELDS:
- Specify the exact formula or concatenation pattern.
- Example: "`displayName` = `state.data.form.patient.first_name` + ' ' + `state.data.form.patient.last_name`"
- Handle edge cases: what if one component is null?

PHASE 5: DATA QUALITY AND EDGE CASE HANDLING

For each mapped field, define how to handle problematic data:

- Null or missing values: Use a default? Skip the field? Skip the entire record? Fail the step?
- Invalid format: If a date field contains `"not available"` instead of a date, what should happen?
- Out-of-range values: If age is negative or above 150, what should happen?
- Encoding issues: Special characters, Unicode, diacritics — does the destination system handle them?
- Truncation: If the source allows 500 characters but the destination only accepts 100, how should the value be handled?

Produce a data quality rules table:

| Field | Issue | Rule | Action |
|---|---|---|---|
| `dob` | Missing | Required for destination | Use `1900-01-01` and flag for manual review |
| `phone` | Invalid format | Does not match `^\+?[0-9]{7,15}$` | Strip non-numeric characters; if still invalid, set to null |
| `name` | Contains special characters | Destination allows UTF-8 | Pass through unchanged |
</framework>

<output_format>
Deliver:
1. A source schema inventory listing every field with path, type, and example values
2. A destination schema inventory listing every field with path, type, constraints, and whether it is required
3. A complete field-by-field mapping table with transformation type and rule for every mapped field
4. Detailed specifications for complex transformations: lookups (with fallback behaviour), conditional logic (with all branches), repeating group handling, and computed fields
5. A data quality and edge case handling table specifying what happens for null, invalid, or out-of-range values in each critical field
</output_format>

</map_required_data_transformations>
```
