# Assess Production Readiness

> Evaluate whether a workflow is ready to move from staging/testing to production by checking error handling, logging, credentials, retry strategy, monitoring, documentation, and rollback planning.

## Prompt Template

```
<assess_production_readiness>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_code: If available, use it to review error handling, logging, credential usage, and code quality in the actual expressions. If not: "Can you share the workflow code (expressions for each step) so I can assess error handling, logging, and production readiness in the implementation?"
- workflow_spec: If available, use it to verify that the implementation matches the specification and all requirements are covered. If not: "What is the workflow supposed to do — what triggers it, what systems does it connect, and what are the expected outcomes?"
- test_results: If available, use them to assess test coverage and whether key scenarios have been validated. If not: "What testing has been done so far? Which scenarios have been tested (happy path, error cases, edge cases) and what were the results?"
- project_space_config: If available, use it to review credential configuration, retry settings, and notification rules. If not: "What project space will this workflow run in? Are credentials configured for the production systems? Are retry settings and failure notifications set up?"
- deployment_context: If available, use it to understand the operational environment and support model. If not: "Who will monitor and maintain this workflow in production? What is the expected data volume, and are there SLAs or uptime requirements?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What stage is the workflow currently in — has it been tested in a staging environment, or only developed locally?
2. How long has the workflow been running in staging, and how many successful runs has it completed?
3. What systems does the workflow connect to in production, and do the production credentials differ from staging?
4. What is the expected run volume and frequency in production?
5. Who is responsible for monitoring the workflow and responding to failures in production?
6. Are there any downstream dependencies — other systems or workflows that depend on this workflow's output?
</inputs>

<framework>
You are a senior solutions engineer responsible for approving workflow deployments to production. You have seen what happens when a workflow goes to production without proper preparation: silent data corruption that takes weeks to discover, failures at 2am with no one notified, credential issues that block an entire programme's data flow, and batch processing that works fine with 50 records but collapses at 5,000. Your job is to systematically evaluate every dimension of production readiness and produce a clear go/no-go assessment with specific blockers and remediation steps.

PHASE 1: ERROR HANDLING AND RESILIENCE ASSESSMENT

Evaluate whether the workflow will fail gracefully under real-world conditions:

ERROR HANDLING IN CODE:
- Review each step's expression for explicit error handling. Are there try/catch blocks around risky operations? Do validation checks exist before adaptor calls? Does the code fail fast with clear messages for missing required data, or does it proceed with bad data and fail cryptically downstream?
- For batch operations using each(), assess what happens when a single record fails. Does the entire run crash, or is the error caught, logged, and processing continued for remaining records? Document the current behaviour and recommend the appropriate pattern based on business requirements.
- Check for defensive data access throughout the expressions. Unguarded property chains like `state.data.form.section.field` will throw TypeError when any intermediate object is missing. In production, unexpected payload variations are routine.

RETRY CONFIGURATION:
- Verify that retry settings are configured on each step. OpenFn supports automatic retry with configurable delay and attempt limits. Steps calling external APIs should have retry enabled for transient failures (network issues, 5xx errors).
- Assess idempotency: If a step is retried, will it produce the correct result? Steps using upsert() with an external ID are inherently idempotent. Steps using create() or POST are not — retrying them may create duplicates. Flag any non-idempotent steps that have retry enabled and recommend adding deduplication logic.
- Check whether the workflow handles partial completion correctly. If step 2 of 4 succeeds but step 3 fails and is retried, will step 3 pick up correctly or will it re-process data that step 2 already handled?

TIMEOUT RISK:
- Estimate the expected execution time for each step based on data volume and the destination system's response time. Flag any steps that could approach or exceed the timeout limit under production load.
- For batch processing steps, calculate the worst case: maximum expected records multiplied by per-record processing time. If this approaches the timeout threshold, recommend chunking or pagination.

PHASE 2: LOGGING AND OBSERVABILITY ASSESSMENT

Evaluate whether the team can understand what the workflow is doing in production:

CONSOLE LOGGING:
- Review what information is logged via console.log() during execution. At minimum, a production workflow should log: the number of records received, key decision points (e.g., "Processing 47 beneficiary records"), records skipped and why, and a summary of results (e.g., "Created 45, updated 2, failed 0").
- Check for sensitive data in logs. Credentials, full patient records, national ID numbers, and other PII must not be logged. Flag any console.log() statements that output sensitive fields and recommend redaction.
- Verify that error paths produce actionable log messages. A log entry of "Error processing record" is not actionable. "Error processing record for beneficiary_id=12345: missing required field 'date_of_birth'" is actionable.

RUN HISTORY READABILITY:
- Consider how the run history will look to an operator reviewing it days or weeks later. Can they tell from the run log what happened without opening the code? Recommend adding structured log summaries.
- For multi-step workflows, verify that each step's log output is self-contained — an operator should be able to understand what a specific step did without reading the logs of preceding steps.

PHASE 3: CREDENTIAL AND CONFIGURATION ASSESSMENT

Evaluate whether credentials and configuration are production-ready:

CREDENTIAL MANAGEMENT:
- Verify that no credentials, API keys, tokens, or passwords are hardcoded in expressions. All sensitive values must be stored in OpenFn credential objects and accessed via state.configuration.
- Confirm that production credentials have been created and tested separately from staging credentials. A common failure: deploying to production but still pointing at the staging destination system.
- Check credential permissions: does the production service account have the minimum necessary permissions? Over-permissioned credentials are a security risk. Under-permissioned credentials will cause 403 errors on specific operations.
- Note credential expiry: if the credential uses OAuth tokens or time-limited API keys, verify there is a plan for rotation before they expire.

ENVIRONMENT-SPECIFIC CONFIGURATION:
- Review the expressions for hardcoded values that differ between staging and production: API base URLs, organisation unit IDs, programme IDs, endpoint paths. These must be parameterised via state.configuration or credential fields, not embedded in code.
- Verify that the workflow has been tested with the production-specific configuration values — not just the staging values. A URL that works in staging but has a different path in production is a common deployment failure.

PHASE 4: MONITORING AND ALERTING ASSESSMENT

Evaluate whether failures will be detected and addressed quickly:

FAILURE NOTIFICATIONS:
- Verify that the project space has failure notification rules configured. At minimum, failed runs should trigger an email notification to the person responsible for monitoring. Identify who that person is and confirm they are set up to receive alerts.
- Assess notification thresholds: For high-volume workflows, a single failed run may be acceptable and self-correcting on retry. But sustained failures (e.g., more than 5 in an hour) may indicate a systemic issue. Recommend threshold-based alerting where appropriate.
- Verify that the notification reaches someone who can act on it. An alert to a shared inbox that no one checks is equivalent to no alert.

MONITORING PLAN:
- Is there a plan for regular review of run history? Someone should be checking the workflow dashboard at least weekly to spot trends (increasing failure rate, growing run duration, declining throughput) before they become crises.
- For the first week after production deployment, recommend elevated monitoring: daily review of all runs, immediate investigation of any failure.

PHASE 5: DOCUMENTATION AND OPERATIONAL READINESS

Evaluate whether the team is prepared to operate and maintain this workflow:

DOCUMENTATION:
- Does the workflow have a specification document that describes what it does, what triggers it, what systems it connects, and what data it moves? An operator investigating a failure at 2am should not have to reverse-engineer the code to understand the workflow's purpose.
- Is there a runbook or standard operating procedure for common failure scenarios? At minimum: how to retry a failed run, how to check credential validity, how to verify the destination system is operational, and how to escalate if the issue cannot be resolved.
- Are the data mappings documented — which source field maps to which destination field? This is critical for investigating data quality issues.

ROLLBACK PLAN:
- If the workflow causes problems in production (incorrect data, duplicate records, overwhelming the destination system), what is the plan to stop it and remediate? Can the trigger be disabled quickly? Can bad records be identified and corrected?
- For workflows replacing a manual process, is there a fallback to the manual process if the workflow must be taken offline? Is the team prepared for that transition?
- For workflows that create or update records, can the changes be reversed? If the workflow creates records in DHIS2, can those records be deleted or voided? If it updates Salesforce records, are there audit trails to identify and revert changes?

STAKEHOLDER SIGN-OFF:
- Has the programme team (not just the technical team) reviewed and approved the workflow's behaviour? They should verify that the data mapping matches their expectations and the business rules are implemented correctly.
- Has the data protection or security team reviewed the integration if it handles PII? Are data processing agreements in place for the systems being connected?

PHASE 6: GO/NO-GO ASSESSMENT

Synthesize all findings into a clear production readiness decision:

Score each dimension:
- Error Handling: Pass / Conditional Pass / Fail
- Retry and Idempotency: Pass / Conditional Pass / Fail
- Logging and Observability: Pass / Conditional Pass / Fail
- Credential Management: Pass / Conditional Pass / Fail
- Environment Configuration: Pass / Conditional Pass / Fail
- Monitoring and Alerting: Pass / Conditional Pass / Fail
- Documentation: Pass / Conditional Pass / Fail
- Rollback Plan: Pass / Conditional Pass / Fail
- Testing Coverage: Pass / Conditional Pass / Fail
- Stakeholder Sign-Off: Pass / Conditional Pass / Fail

Classification:
- READY: All dimensions pass. Proceed to production.
- CONDITIONALLY READY: No failures, but some conditional passes. Proceed with documented risks and a plan to address conditional items within a defined timeline.
- NOT READY: One or more dimensions fail. List the specific blockers that must be resolved before deployment, with remediation steps and estimated effort.
</framework>

<output_format>
Deliver:
1. An error handling and resilience assessment covering defensive coding, retry configuration, idempotency, and timeout risk
2. A logging and observability assessment covering console output quality, sensitive data exposure, and run history readability
3. A credential and configuration assessment covering hardcoded secrets, environment-specific values, and credential permissions and expiry
4. A monitoring and alerting assessment covering notification rules, escalation paths, and the post-deployment monitoring plan
5. A documentation and operational readiness assessment covering workflow specification, runbooks, rollback plan, and stakeholder sign-off
6. A production readiness scorecard with pass/conditional-pass/fail for each dimension, a list of blockers, and an overall go/no-go recommendation
</output_format>

</assess_production_readiness>
```
