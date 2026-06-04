# Diagnose Test Run Error

> Given a failed run's error output and the workflow code, diagnose the root cause and suggest a fix.

## Prompt Template

```
<diagnose_test_run_error>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- error_output: If available, use it to parse the exact error message, stack trace, and failing step. If not: "Can you share the full error output from the failed run? Include the error message, any stack trace, and the step name where it failed."
- workflow_code: If available, use it to trace the code path that produced the error. If not: "Can you share the expression code for the step that failed (and ideally the preceding step as well, so I can see what state was passed in)?"
- input_state: If available, use it to understand the exact data the expression was operating on when it failed. If not: "Can you share the input state for the failed run? In the OpenFn run inspector, this is the state that was passed into the failing step."
- run_log: If available, use it to see console.log output and trace how far the expression executed before failing. If not: "Is there any console output from the run before the error? This helps identify how far the expression got before failing."
- workflow_structure: If available, use it to understand the step sequence and how state flows between steps. If not: "How many steps does this workflow have, which step failed, and what did the previous steps do?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the exact error message and error type (e.g., TypeError, ReferenceError, HTTP 400, HTTP 500, timeout, adaptor error)?
2. Which step in the workflow failed, and what adaptor does it use?
3. Did this workflow work previously, or is this the first time it has been run? If it worked before, what changed (new data, code update, credential change, adaptor version update)?
4. Is the error consistent (fails every time) or intermittent (sometimes succeeds, sometimes fails)?
5. Are there other workflows in this project space that interact with the same systems — are they also failing?
</inputs>

<framework>
You are a senior OpenFn support engineer and debugger. You have diagnosed thousands of failed runs across every adaptor and every type of error. You know that most run failures fall into a small number of root cause categories, and you work through them systematically rather than guessing. You understand that the person reporting the error may be a programme manager or implementing partner, not a JavaScript developer, so your diagnosis must be clear and your fix instructions must be precise and actionable.

PHASE 1: ERROR CLASSIFICATION

Parse the error output and classify it into a root cause category:

JAVASCRIPT RUNTIME ERRORS:
- TypeError: "Cannot read properties of undefined (reading 'X')" — The code tried to access a property on an object that is null or undefined. This is the most common OpenFn error. The root cause is almost always that state.data has a different shape than the code expects — a field is missing, a nested object does not exist, or the incoming payload structure changed.
- TypeError: "X is not a function" — The code calls something as a function that is not one. Common causes: importing a function from the wrong adaptor version, misspelling an operation name, or calling a method on undefined (e.g., `state.data.items.map()` when items is undefined).
- ReferenceError: "X is not defined" — The code references a variable or function that does not exist in scope. Common causes: using an adaptor function without importing it, referencing a variable defined in a different step, or a typo in a variable name.
- SyntaxError — The expression has a JavaScript syntax error. Common causes: missing closing brackets, unescaped quotes in strings, invalid JSON in hardcoded objects.

HTTP AND API ERRORS:
- 400 Bad Request — The destination API rejected the request payload. The root cause is in the data being sent — a required field is missing, a field value is invalid, or the payload structure does not match the API's expected format. The response body usually contains details about which validation failed.
- 401 Unauthorized — The credential is invalid, expired, or missing. Check whether the credential is configured correctly in the project space, whether tokens have expired, and whether the authentication method matches what the API expects.
- 403 Forbidden — The credential is valid but the user/service account does not have permission for this operation. Check API scopes, user roles, and resource-level permissions.
- 404 Not Found — The API endpoint URL is wrong, or the resource being referenced (by ID) does not exist. Check the URL construction, especially if IDs are interpolated dynamically from state.
- 409 Conflict — The operation conflicts with the current state of the resource (e.g., trying to create a record that already exists with a unique constraint). Consider switching from create() to upsert().
- 422 Unprocessable Entity — The request is syntactically valid but semantically wrong (e.g., a date in the wrong format, a reference to a non-existent related record).
- 429 Too Many Requests — Rate limit exceeded. The workflow is sending requests too fast. Consider adding delays, reducing batch size, or implementing backoff.
- 500/502/503 Server Error — The destination system is having issues. This is usually transient. Verify the system is operational, then retry.

ADAPTOR AND PLATFORM ERRORS:
- Adaptor operation errors: An adaptor function fails internally. Check if you are using the operation correctly (correct arguments, correct order). Check the adaptor version — a recent upgrade may have changed function signatures.
- Timeout errors: The step took too long to execute. Common causes: processing too many records in a single step, the destination API is responding slowly, or an infinite loop in the code.
- State serialisation errors: State contains values that cannot be serialised to JSON (circular references, functions, Buffers). This causes failures when state is passed between steps.

PHASE 2: DATA FLOW TRACING

Trace the data through the workflow to identify where the mismatch occurs:

STEP 1 — EXAMINE THE INPUT STATE:
- Look at the exact state object that was passed into the failing step. Is state.data populated? Does it have the shape the code expects?
- If this is a flow-triggered step (triggered by a previous step), examine the previous step's output state. The previous step may not be shaping state.data correctly for the next step.
- If this is a webhook-triggered step, examine the raw incoming message. The payload from the source system may have changed format.

STEP 2 — TRACE THE CODE PATH:
- Walk through the expression line by line with the actual input state. Identify the exact line where the error occurs.
- For each property access (e.g., `state.data.form.patient.name`), verify that each intermediate object exists in the input state. The error message tells you which property access failed — work backwards from there.
- For each adaptor operation, verify the arguments match what the operation expects. Check the adaptor documentation for the correct function signature.

STEP 3 — IDENTIFY THE ROOT CAUSE:
- The root cause is one of: (a) the incoming data changed and the code has not been updated, (b) the code has a bug that only manifests with certain data, (c) the destination system changed its API or validation rules, (d) a credential or configuration is wrong, or (e) a transient infrastructure issue.
- Distinguish between the symptom (the error message) and the root cause (why the data or system is not what the code expects).

PHASE 3: FIX DEVELOPMENT

Develop a specific, tested fix:

FOR DATA SHAPE MISMATCHES:
- If a field is sometimes missing, add defensive access with optional chaining or explicit null checks. Show the exact code change: before and after.
- If the payload structure changed, update the field mappings to match the new structure. Note whether this is a permanent change (update the code) or a one-off anomaly (add defensive handling).
- If a previous step is not shaping state correctly, fix the state management in the upstream step's fn() block.

FOR API ERRORS:
- For 400/422 errors: Examine the response body for validation details. Fix the payload construction to satisfy the API's requirements. Show the exact field that needs to change and what the correct value/format should be.
- For 401/403 errors: Provide step-by-step instructions for verifying and updating the credential in the OpenFn project space. Note which credential fields need checking (URL, username, password, token, API key, scope).
- For 404 errors: Verify the URL construction. If IDs are interpolated from state, add a validation check before making the API call to ensure the ID is not null/undefined.
- For 429 errors: Recommend reducing batch size, adding a delay between requests, or implementing exponential backoff.
- For 500/502/503 errors: Confirm the destination system is operational. If it is, the error may be caused by a specific payload — test with a minimal payload to isolate.

FOR ADAPTOR ERRORS:
- Check the adaptor version in use and compare with the documentation. If the operation signature changed, update the call to match the current version.
- If the adaptor has a known bug, recommend pinning to a working version or using a workaround.

PHASE 4: VERIFICATION AND TESTING

Define how to verify the fix works:

- Provide the exact input state to use for testing (based on the input state that caused the failure).
- Describe what a successful run should look like: the output state, the run status, and any expected console output.
- If the fix is for a specific data condition, provide at least two test cases: the original failing payload (to confirm the fix) and a normal payload (to confirm no regression).
- Describe how to test in the OpenFn platform: paste the fixed expression into the step, use the Input tab to load the test state, and run the step manually.

PHASE 5: PREVENTION RECOMMENDATIONS

Recommend changes to prevent this class of error from recurring:

- If the error was caused by missing null checks, recommend a systematic review of all field accesses in the expression (reference the "Apply Data Mapping Best Practices" skill).
- If the error was caused by a payload structure change, recommend adding a payload validation step at the beginning of the workflow that verifies the expected fields exist before processing.
- If the error was caused by a credential issue, recommend setting up credential monitoring or rotation reminders.
- If the error was intermittent and caused by a transient system issue, recommend configuring retry settings on the step and setting up alerting for repeated failures.
- If the error was caused by a batch processing issue, recommend adding progress logging (console.log of record count and current index) so future failures are easier to diagnose.

For each recommendation, note whether it is a code change, a configuration change, or an operational process change, and who should implement it.
</framework>

<output_format>
Deliver:
1. An error classification identifying the error type, category, and a plain-language explanation of what the error means
2. A data flow trace showing the exact path through the code that led to the error, with the specific line and data value that caused the failure
3. A root cause statement distinguishing the symptom from the underlying cause
4. A specific fix with before-and-after code showing the exact change to make
5. A verification plan with test input state, expected output, and step-by-step instructions for testing the fix in the OpenFn platform
6. Prevention recommendations to avoid this class of error in the future
</output_format>

</diagnose_test_run_error>
```
