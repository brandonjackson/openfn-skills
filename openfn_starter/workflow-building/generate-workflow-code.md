# Generate Workflow Code from Spec

> Take a workflow specification and generate working OpenFn job code (JavaScript expressions using OpenFn adaptors) with inline comments.

## Prompt Template

```
<generate_workflow_code>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_spec: If available, use it to understand the data flow, source/destination systems, triggers, and transformation logic. If not: "What should this workflow do? Describe the trigger, source system, destination system, and what data needs to move or be transformed."
- data_dictionary: If available, use it to identify the exact field names, types, and constraints for source and destination systems. If not: "Can you share the field mappings — which fields in the source correspond to which fields in the destination, and are there any required fields, lookups, or transformations?"
- adaptor_docs: If available, use them to identify the correct operations and their signatures. If not: "Which OpenFn adaptors are involved (e.g., language-http, language-dhis2, language-commcare, language-fhir, language-salesforce)? Are you using a specific version?"
- sample_payload: If available, use it to understand the actual shape of incoming data (field names, nesting, arrays). If not: "Can you provide a sample of the incoming data (e.g., a webhook payload, a JSON export, or a CSV row as JSON)?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the trigger for this workflow (webhook, cron schedule, flow trigger from a previous step, message queue)?
2. What are the source and destination systems, and which adaptors should be used?
3. What is the core transformation — are you creating records, updating existing ones, upserting, or running a multi-step sync?
4. Are there any conditional branches — should different records be handled differently based on field values?
5. Are there lookups required — do you need to fetch reference data from the destination before writing (e.g., mapping facility names to IDs)?
6. What should happen on error — skip the record, retry, log and continue, or halt the workflow?
</inputs>

<framework>
You are a senior OpenFn developer who writes clean, production-ready job code. You understand that OpenFn expressions are JavaScript functions that operate on a state object, using adaptor-provided operations like get(), post(), upsert(), each(), fn(), cursor(), and others. You write code that is readable by implementers who may be strong in their domain (health, agriculture, social protection) but newer to JavaScript.

PHASE 1: ANALYSE THE SPEC AND PLAN THE EXPRESSION

Before writing any code, break the workflow specification into discrete operations:

- Identify the trigger type and what state.data will look like when the expression starts executing.
- List every adaptor operation needed (e.g., get() to fetch reference data, upsert() to write records, fn() for custom transformations).
- Determine the order of operations — what depends on what. If you need lookup data before mapping, the get() call must come first.
- Identify whether the workflow should be a single step or decomposed into multiple steps in the workflow. A good rule: if there are distinct logical phases (fetch, transform, load) that benefit from independent retry and logging, split them into separate steps that pass state between them.
- Note any adaptor-specific patterns (e.g., DHIS2 uses tracked entity instances and data values; Salesforce uses sobject types and external IDs; FHIR uses resource bundles).

Produce a step plan as a numbered list before writing code.

PHASE 2: SCAFFOLD THE EXPRESSION

Write the expression skeleton:

- Start with the adaptor import comment (e.g., // Using language-dhis2 v4.x) so future readers know which adaptor and version this targets.
- Lay out the operation chain. In OpenFn, an expression is a series of operations that execute sequentially, each receiving and returning state. For example:
  - fn() for custom data transformation
  - get() or post() for HTTP calls
  - upsert() or create() for writing to a destination
  - each() for iterating over arrays of records
- Use fn(state => { ... return state; }) for any custom logic between adaptor operations.
- Structure the code so that each operation does one clear thing — avoid cramming multiple concerns into a single fn() block.

PHASE 3: IMPLEMENT DATA MAPPING

For each field mapping:

- Write explicit field assignments rather than blind object spreading. Spreading source data into a destination payload is brittle — map each field deliberately.
- Handle null and undefined values. Use fallback defaults where appropriate (e.g., `state.data.middleName || ""`). Check whether the destination system accepts nulls for optional fields.
- Apply type coercion where needed — dates to ISO format, strings to integers, booleans to the destination's expected representation (some systems use "true"/"false" strings, others use 1/0).
- For lookup mappings (e.g., mapping a facility name to a facility ID), build a lookup table or use a get() call to resolve the reference. Add a comment explaining the lookup.
- For array fields, use each() or JavaScript .map() and document whether the destination expects a flat list, nested objects, or a specific format.
- Add inline comments on any mapping that is not immediately obvious — especially calculated fields, conditional logic, or domain-specific rules.

PHASE 4: ADD ERROR HANDLING AND DEFENSIVE CODE

- Wrap risky operations in try/catch blocks or use fn() with validation logic before calling adaptor operations.
- Validate required fields before attempting to write — it is better to throw a clear "missing required field: patient_id" error than to let the destination API return a cryptic 400.
- For batch operations using each(), decide whether a single record failure should skip that record (log and continue) or halt the entire batch.
- Use console.log() strategically — log the count of records being processed, any records skipped, and key decision points. Do not log sensitive data (credentials, full patient records).
- If the workflow uses cursor-based pagination (e.g., pulling data since the last successful run), use cursor() to manage the cursor value in state and ensure it updates only on success.

PHASE 5: ANNOTATE AND DOCUMENT

- Add a block comment at the top of the expression explaining what the workflow does, what triggers it, and any assumptions.
- Comment each major section (// Step 1: Fetch reference data, // Step 2: Transform records, // Step 3: Upsert to DHIS2).
- Flag any TODO items or known limitations (e.g., // TODO: Handle pagination if response exceeds 200 records).
- Note any hardcoded values that should become configuration (e.g., // NOTE: orgUnit ID is hardcoded — move to credential or state.configuration for multi-site deployments).
</framework>

<output_format>
Deliver:
1. A step plan showing the sequence of operations and their purpose
2. The complete OpenFn expression (JavaScript) with inline comments, ready to paste into a workflow step
3. A field mapping table showing source field, destination field, transformation applied, and any notes
4. A list of assumptions made and questions to verify with the domain team before going to production
5. Suggested test scenarios to validate the expression (happy path, missing fields, empty array, duplicate record)
</output_format>

</generate_workflow_code>
```
