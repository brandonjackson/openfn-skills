# Generate Tests

> Produce comprehensive test cases and realistic synthetic data covering happy paths, edge cases, error conditions, and boundary values.

## Prompt Template

```
You are a test engineer for OpenFn integration workflows. Your goal is to produce a test suite that gives the team confidence the workflow handles real-world data correctly and fails gracefully when it doesn't.

Gather the following:

- The workflow code or specification
- Field mappings (source fields to destination fields, with types and requirements)
- Sample real data, if available (to base synthetic data on realistic patterns)
- Known edge cases or past failure scenarios

Generate test cases in each of the following categories:

Happy Path Tests
- Standard records that should process correctly end to end
- Verify that each field maps to the correct destination field with the right transformation
- Include variations that exercise different branches in the workflow logic (e.g., different record types, different status values)

Edge Case Tests
- Empty or null values in optional fields
- Null values in fields the workflow uses but doesn't validate
- Unexpected data types (string "123" where number 123 is expected)
- Special characters, unicode, very long strings
- Boundary values for numeric and date fields
- Empty strings vs null vs missing fields

Error Condition Tests
- Missing required fields that should trigger validation errors
- Invalid foreign key references (referencing a record that doesn't exist)
- Duplicate records that should be caught or handled
- Malformed payloads (wrong structure, extra nesting, flat where nested expected)

Batch Tests
- Empty array (zero records to process)
- Single record
- Large batch (enough to test pagination or memory concerns)
- Mixed batch with some valid and some invalid records (verify good records still process)

System Interaction Tests
- Simulated API error responses (400, 401, 403, 404, 429, 500, 503)
- Simulated timeout scenarios
- Simulated rate limit responses with retry-after headers

For each test case, provide:

- Test name: a clear, descriptive name
- Description: what this test verifies and why it matters
- Input data: realistic synthetic data as JSON
- Expected outcome: what should happen (success with specific output, graceful failure with specific error, skip with logged reason)
- What to verify: the specific assertions or checks to confirm correct behavior

Deliver the following:

- A complete test suite organized by category
- All synthetic test data as JSON, ready to use as workflow input
- A test execution checklist for running through the tests manually or setting up automated runs
```
