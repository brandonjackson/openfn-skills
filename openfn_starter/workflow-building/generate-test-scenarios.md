# Generate Test Scenarios and Test Data

> Generate comprehensive test scenarios for a workflow including happy path, error cases, edge cases, and boundary conditions, along with realistic test data for each.

## Prompt Template

```
<generate_test_scenarios>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_code: If available, use it to trace every code path, conditional branch, and error handler to ensure complete test coverage. If not: "Can you share the workflow code (expressions for each step) so I can identify all code paths that need test coverage?"
- workflow_spec: If available, use it to derive test scenarios from the intended behaviour and acceptance criteria. If not: "What does this workflow do — what triggers it, what systems does it connect, what data does it transform, and what are the expected outcomes?"
- sample_payload: If available, use it as the basis for generating realistic test data variations. If not: "Can you provide a sample of the incoming data payload so I can create realistic test data based on the actual field structure?"
- data_dictionary: If available, use it to identify field constraints, valid value ranges, and required fields for boundary testing. If not: "What are the key fields in the data, which ones are required, and are there validation rules or value constraints (e.g., date ranges, enum values, max lengths)?"
- edge_case_inventory: If available, use it to ensure test scenarios cover all identified edge cases. If not: "Are there any known edge cases, failure modes, or tricky scenarios that this workflow needs to handle?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the workflow's trigger type (webhook, cron, flow trigger) and what does the incoming data look like?
2. How many steps does the workflow have, and what does each step do?
3. Are there conditional branches in the workflow — does it behave differently based on field values, record types, or other conditions?
4. What destination system does the workflow write to, and what constitutes a successful write (e.g., HTTP 200, a created record ID, a specific response body)?
5. Are there batch operations — does the workflow process multiple records in a single run?
6. What error handling exists in the code — try/catch blocks, validation checks, fallback defaults?
</inputs>

<framework>
You are a senior QA engineer specialising in integration testing for OpenFn workflows. You understand that workflow testing is different from unit testing — you are testing data flows across system boundaries, where the biggest risks are data transformation errors, API contract violations, and state management bugs. You design test scenarios that are practical to execute in an OpenFn project space: each test consists of crafting input state, running the workflow (or individual steps), and verifying the output state and destination system state.

PHASE 1: HAPPY PATH SCENARIOS

Design test scenarios that verify the workflow works correctly under normal conditions:

BASIC HAPPY PATH:
- Single record, all fields present, all values valid, all lookups resolve successfully. This is the baseline — if this does not pass, nothing else matters.
- Design the test input: a complete state.data object with realistic field values. Use plausible data for the domain (real-looking patient names, valid facility codes, dates within expected ranges) rather than placeholder text like "test123".
- Define the expected output: what should state look like after each step completes? What should be created or updated in the destination system?

VARIATION HAPPY PATHS:
- Different record types: If the workflow handles multiple record types (e.g., registration vs. follow-up visit), create a test for each type.
- Different conditional branches: If the workflow routes data differently based on field values (e.g., age-based programme enrollment, region-based facility mapping), create a test for each branch.
- Batch scenarios: If the workflow processes multiple records, test with a small batch (3-5 records) where all records are valid. Verify that all records are processed and the state accumulates results correctly.
- Optional fields: Test with all optional fields present, then with optional fields absent. Verify that omitting optional fields does not cause errors.

For each happy path scenario, document:
- Scenario name and purpose
- Input state (complete JSON payload)
- Steps to execute
- Expected output state after each step
- Expected side effects in the destination system
- Verification method (how to confirm the test passed)

PHASE 2: ERROR AND FAILURE SCENARIOS

Design test scenarios that verify the workflow handles errors gracefully:

VALIDATION FAILURES:
- Missing required fields: Remove a required field from the payload and verify the workflow produces a clear error message rather than an obscure TypeError or a silent failure in the destination system.
- Invalid field values: Send a string where a number is expected, an invalid date format, a value that is not in the allowed set. Verify the error is caught and reported clearly.
- Empty payload: Send an empty state.data or a payload with an unexpected structure. Verify the workflow fails fast with a meaningful error rather than processing garbage data.

DESTINATION SYSTEM ERRORS:
- Authentication failure: Test with invalid or expired credentials (if possible in a staging environment). Verify the run fails with a clear credential error, not a generic connection error.
- Record not found: For update operations, send a reference to a record that does not exist in the destination. Verify the error is handled — either by creating the record (upsert) or by logging a clear error.
- Duplicate rejection: For create operations, send a record that already exists (if the destination enforces uniqueness). Verify the workflow handles the conflict appropriately.
- Validation rejection by destination: Send data that passes the workflow's own validation but is rejected by the destination system's validation rules (e.g., a required field that the workflow did not know about). Verify the error response is captured in the run log.

LOOKUP FAILURES:
- Unmapped value: Send a record with a lookup value that does not exist in the mapping table. Verify the workflow handles this explicitly rather than mapping to undefined.
- Empty lookup result: If the workflow fetches reference data via get(), test the case where the API returns an empty result set. Verify the workflow does not proceed with stale or missing reference data.

For each error scenario, document:
- Scenario name and the specific error condition
- Input state that triggers the error
- Expected behaviour (error message, which step fails, whether subsequent steps run)
- Expected run status (fail, success with warnings)

PHASE 3: EDGE CASE SCENARIOS

Design test scenarios for boundary conditions and unusual-but-realistic situations:

DATA BOUNDARY TESTS:
- Maximum and minimum values: Dates at epoch (1970-01-01), extremely old birth dates (1900-01-01), future dates, zero and negative numbers, maximum-length strings, single-character strings.
- Unicode and special characters: Names with accented characters (e.g., "Jose"), Arabic or Devanagari script, apostrophes in names (O'Brien), hyphens, and special characters that might break JSON or URL encoding.
- Numeric edge cases: The value `0` (which is falsy in JavaScript and will be replaced by `||` defaults), negative numbers, extremely large numbers, decimal precision issues.

TEMPORAL EDGE CASES:
- Timezone boundaries: A timestamp at 23:59 local time that might shift to the next day in UTC. A timestamp during daylight saving time transition.
- Stale data: A record with a timestamp several days in the past (simulating offline sync delay). Verify the workflow processes it correctly and the cursor logic does not skip it.

DUPLICATE AND IDEMPOTENCY TESTS:
- Exact duplicate: Send the same payload twice. Verify the workflow either deduplicates (if using upsert with an external ID) or creates two records (if that is the expected behaviour). Document which behaviour is correct.
- Near duplicate: Send two records with the same business key but slightly different data (e.g., same patient ID but updated phone number). Verify the upsert updates rather than creates a duplicate.

BATCH EDGE CASES:
- Empty batch: A trigger fires but the data contains zero records to process. Verify the workflow completes successfully without errors rather than failing on an empty array.
- Single-item batch: A batch of exactly one record. Verify the iteration logic handles this correctly (some code patterns break when the "array" is a single object).
- Large batch: If feasible in the test environment, test with a batch large enough to approach timeout or rate limit thresholds.

For each edge case scenario, document:
- Scenario name and the specific edge condition
- Input state that creates the edge condition
- Expected behaviour
- Why this edge case matters (what would go wrong if it is not handled)

PHASE 4: TEST DATA GENERATION

Create the actual test data payloads for all scenarios:

REALISTIC DATA PRINCIPLES:
- Use domain-appropriate data. For health workflows, use realistic (but fictional) patient demographics, facility names, and clinical values. For social protection, use realistic beneficiary profiles and programme details. Avoid generic "test" and "foo" values that do not exercise real-world conditions.
- Ensure referential integrity: If the payload references a facility ID, that facility should exist in the test destination system. Document any reference data that must be pre-loaded.
- Vary the data: Do not use the same name, date, and values across all test payloads. Vary gender, age ranges, locations, and optional field presence to exercise different code paths.

TEST DATA FORMAT:
- Provide each test payload as a complete state object that can be pasted into the OpenFn Input tab for manual testing or used as input in a test harness.
- Format: `{ "data": { ... }, "configuration": { ... } }` where configuration includes any non-sensitive test values (use placeholder values for actual credentials and note that real credentials must be configured in the project space).
- For batch tests, provide the full array of records.
- Annotate each payload with comments (outside the JSON) explaining which scenario it covers and what makes it different from the baseline.

DATA VARIATION MATRIX:
- Create a matrix showing which fields are varied across which scenarios:

| Scenario | Field A | Field B | Field C | Purpose |
|----------|---------|---------|---------|---------|
| Happy path | Valid | Valid | Valid | Baseline |
| Missing required | Valid | MISSING | Valid | Test validation |
| Invalid type | Valid | Valid | String instead of number | Test type handling |

PHASE 5: TEST EXECUTION PLAN

Organise all scenarios into a practical test execution plan:

TEST SEQUENCE:
- Order tests logically: happy path first (to confirm baseline functionality), then error scenarios (to confirm error handling), then edge cases (to confirm robustness).
- Group tests by step when testing a multi-step workflow — test each step in isolation first, then test the end-to-end flow.
- Identify which tests can be run against a live test environment and which need mocked responses (e.g., if simulating a destination system outage).

PASS/FAIL CRITERIA:
- For each scenario, define explicit pass/fail criteria: what must be true in the output state, what must exist in the destination system, what must appear in the run log.
- For error scenarios, the pass criteria is that the workflow fails gracefully — not that it succeeds. A run that silently swallows an error is a test failure even though the run status shows success.

COVERAGE CHECKLIST:
- Every conditional branch in the code has at least one test
- Every adaptor operation (get, post, upsert, create, each, cursor) is exercised
- Every lookup table is tested with a valid value, an invalid value, and a missing value
- Every required field is tested with presence and absence
- The empty payload case is covered
- The duplicate submission case is covered
- At least one batch test covers zero, one, and multiple records
</framework>

<output_format>
Deliver:
1. A happy path test suite with 3-5 scenarios, each with complete input state, expected output, and verification criteria
2. An error and failure test suite with 4-6 scenarios covering missing fields, invalid data, destination errors, and lookup failures
3. An edge case test suite with 4-6 scenarios covering data boundaries, temporal issues, duplicates, and batch edge cases
4. Complete test data payloads for every scenario, formatted as pasteable state objects with annotations
5. A test data variation matrix showing which fields are varied across scenarios and why
6. A test execution plan with ordering, pass/fail criteria, and a coverage checklist
</output_format>

</generate_test_scenarios>
```
