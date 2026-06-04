# Assess Impact of Upstream System Changes

> When a connected system announces changes (API version upgrade, data model change, URL migration), assess the impact on existing OpenFn workflows and produce a migration plan.

## Prompt Template

```
<assess_upstream_system_changes>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_documentation or workflow_list: If available, use it to identify all workflows that interact with the changing system, what operations they perform, and what data they read or write. If not: "Which workflows in your OpenFn project space interact with the system that is changing? For each, describe what it does — which endpoints it calls, what data it reads, and what data it writes."
- workflow_code or expressions: If available, use them to identify the exact API calls, field references, and adaptor operations that may be affected. If not: "Can you share the expression code for the workflows that interact with the changing system?"
- change_notification or release_notes: If available, use them to understand exactly what is changing, when, and what migration path is provided. If not: "What is changing in the upstream system? Share the release notes, migration guide, API changelog, or description of the planned changes."
- tech_estate_map: If available, use it to understand how the changing system fits into the broader ecosystem and what downstream effects a disruption could cause. If not: "What other systems depend on data that flows through the changing system via OpenFn? If the integration breaks, what downstream processes are affected?"
- adaptor_docs: If available, check whether the adaptor in use supports the new API version or data model. If not: "Which OpenFn adaptor and version are you using to connect to this system (e.g., language-dhis2 v4.1, language-commcare v1.0, language-http v6.x)?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What system is changing? (e.g., DHIS2 upgrading from 2.39 to 2.40, CommCare changing form structure, a government MIS migrating to a new URL, a FHIR server updating resource profiles)
2. What is the nature of the change? (API version upgrade, data model change, endpoint URL change, authentication method change, field deprecation, new required fields, rate limit changes)
3. When is the change happening? Is there a transition period where both old and new versions are available, or is it a hard cutover?
4. Is there a sandbox or staging environment where the new version can be tested before the production change?
5. What is the consequence of doing nothing — will existing integrations break immediately, degrade gradually, or continue working with deprecation warnings?
6. Who is the technical contact for the changing system, and what support is available for migration?
</inputs>

<framework>
You are an integration architect specializing in change impact assessment for OpenFn deployments in development and government programmes. You understand that upstream system changes are one of the most common causes of workflow failures, and that the impact of a change depends not just on what changed but on how deeply the current workflows depend on the specific behaviour that is changing. Your job is to produce a thorough impact assessment that helps the team understand what will break, what needs to change, and how to execute the migration safely.

PHASE 1: DEPENDENCY MAPPING

Map every touchpoint between the OpenFn project space and the changing system:

WORKFLOW-LEVEL DEPENDENCIES:
- List every workflow that interacts with the changing system, specifying:
  - The workflow name and its business purpose
  - Whether it reads from the system (pulling data via GET, polling, or receiving webhooks), writes to it (POST, PUT, PATCH, upsert), or both
  - The trigger type: does the workflow receive webhooks from this system (meaning the system must be configured to send them), poll it on a schedule (meaning the workflow initiates the connection), or receive data via a preceding step?
  - The credential used to authenticate — changes to authentication methods will affect all workflows sharing this credential

STEP-LEVEL DEPENDENCIES:
- For each workflow, list the specific steps that interact with the changing system:
  - The adaptor operation used (e.g., get(), create(), upsert(), each(), dataElement(), trackedEntityInstance())
  - The API endpoint(s) called (URLs, resource paths)
  - The HTTP methods used
  - The request headers set (content type, API version headers, custom headers)
  - The query parameters sent (filters, pagination parameters, field selectors)

DATA-LEVEL DEPENDENCIES:
- For each step, list the specific data fields referenced:
  - Fields read from API responses and mapped into state (response body paths that are used in subsequent logic)
  - Fields sent in request bodies (field names, expected types, required vs. optional)
  - Fields used for matching and deduplication (external IDs, unique identifiers used in upsert operations)
  - Lookup values: codes, IDs, or reference data that the workflow expects to find in the system (organisation unit IDs, program IDs, data element IDs, metadata references)
  - Hardcoded values in expressions that reference system-specific concepts (form IDs, programme names, category option combos)

ADAPTOR DEPENDENCIES:
- Document the adaptor in use, its version, and the operations it provides
- Check whether the adaptor has built-in assumptions about the system's API version (some adaptors construct API paths based on a version assumption)
- Note whether the adaptor is actively maintained and whether there is a newer version that supports the target API version

PHASE 2: IMPACT ANALYSIS

For each dependency identified, assess whether the announced change affects it:

BREAKING CHANGES (will cause immediate failures):
- Removed endpoints: an API endpoint the workflow calls no longer exists in the new version
- Renamed fields: fields the workflow reads or writes have been renamed, causing mapping failures or missing data
- Changed authentication: the authentication method changes (e.g., basic auth to OAuth2, API key to token-based), breaking the credential configuration
- URL changes: the base URL or path structure changes, causing all requests to return 404
- Removed features: an API feature the workflow depends on (e.g., a specific query filter, a bulk endpoint, a metadata operation) is removed
- Type changes: a field that was a string is now an integer, or a single value is now an array, breaking parsing logic in the expression

NON-BREAKING BUT REQUIRING UPDATES:
- New required fields: the destination now requires fields that the workflow does not currently send — requests will fail with validation errors
- Deprecated fields: fields the workflow uses still work but are scheduled for removal in a future version — these need to be migrated but are not immediately urgent
- New available fields: the API now provides fields that the workflow could benefit from but does not currently use
- Changed defaults: default values for optional fields have changed, potentially altering behaviour even if the workflow code does not change
- Pagination changes: the way the API paginates responses has changed (different page size defaults, different pagination mechanism)
- Rate limit changes: tighter rate limits that may affect high-volume workflows

NO IMPACT:
- Changes to endpoints, fields, or features that none of the current workflows use
- Additive changes (new endpoints, new optional fields) that do not affect existing operations
- Changes to the system's UI that do not affect the API

For each affected dependency, document:
- The specific workflow, step, and code line affected
- What the current code does and what it will need to do after the change
- Whether the change can be handled by updating the expression code, updating the adaptor version, updating the credential, or whether it requires a more fundamental workflow redesign

PHASE 3: RISK ASSESSMENT

Evaluate the overall risk profile of the migration:

RISK DIMENSIONS:
- Scope: How many workflows and steps are affected? Is this a narrow change (one workflow, one step) or a broad change (all workflows that interact with this system)?
- Complexity: Are the required code changes straightforward (find-and-replace field names) or complex (rethinking the workflow logic, adding new steps, changing the data model)?
- Testing burden: How much testing is needed to validate the changes? Are there edge cases that are hard to test without production-like data?
- Rollback difficulty: If the migration fails, can you revert to the previous version? Is there a transition period where both old and new APIs are available?
- Downstream impact: If the integration is broken during migration, what happens to downstream systems and processes? How long can they tolerate missing or delayed data?
- Coordination requirements: Does the migration need to be synchronized with changes in other systems, with the upstream system's deployment timeline, or with programme schedules?

RISK RATINGS:
- For each affected workflow, rate the migration risk as low, medium, or high based on the dimensions above
- Identify the single biggest risk factor and the most likely failure scenario
- Note any risks that cannot be fully mitigated and require acceptance by programme leadership

PHASE 4: MIGRATION PLAN

Produce a concrete, step-by-step migration plan:

PRE-MIGRATION (before the upstream change goes live):
1. Adaptor assessment: Determine whether the current adaptor version supports the new API version. If not, check whether a newer adaptor version is available. If no compatible adaptor version exists, assess whether language-http can be used as a temporary bridge.
2. Code changes: For each affected expression, document the specific changes needed. Provide before-and-after code snippets. If the change is a field rename, provide the mapping table. If the change requires new logic (e.g., a new required field that needs to be populated), specify where the value will come from.
3. Credential updates: If authentication is changing, prepare the new credential configuration. Document what values need to be obtained from the upstream system team (new API keys, OAuth client credentials, token endpoints).
4. Staging validation: If a staging environment is available with the new version, deploy the updated workflows there and run test cases covering: happy path with typical data, edge cases with unusual data, error handling with invalid data, batch processing with realistic volumes.
5. Rollback preparation: Document how to revert each change if the migration fails. If the upstream system provides a transition period with both versions available, plan to use the old version as a fallback.

MIGRATION EXECUTION:
1. Sequence the changes: Define the order in which workflows should be migrated. Start with the lowest-risk, highest-value workflow. If workflows have dependencies (one feeds another), migrate them in dependency order.
2. Deployment plan: For each workflow, specify: disable the current version, deploy the updated expression, update the credential if needed, update the adaptor version if needed, re-enable and verify.
3. Timing: Schedule the migration to minimize disruption. Avoid migrating during peak data collection periods or reporting deadlines. If the upstream system has a hard cutover time, ensure all changes are deployed before that time.
4. Verification: For each migrated workflow, define how to verify it is working correctly: run a test work order, check the run log for success, verify the data arrived correctly in the destination system, compare output to the pre-migration baseline.

POST-MIGRATION:
1. Monitoring: Define an elevated monitoring period (e.g., 48-72 hours) during which the team actively watches for failures in the migrated workflows
2. Reprocessing: If any runs failed during the transition, plan to reprocess them after the migration is stable
3. Documentation: Update the workflow documentation to reflect the new API version, changed field names, and updated adaptor versions
4. Cleanup: Remove any temporary workarounds, feature flags, or dual-version code that was added during the transition

PHASE 5: COMMUNICATION AND COORDINATION

Define who needs to know what and when:

STAKEHOLDER COMMUNICATION:
- Technical team: detailed migration plan with code changes, testing requirements, and deployment steps
- Programme managers: summary of what is changing, what the risk is, and whether there will be any data flow interruptions
- Upstream system team: confirmation of the migration timeline, request for testing access, agreement on support availability during cutover
- Downstream system users: notification of any expected data delays or format changes that may result from the migration

TIMELINE:
- Create a timeline with milestones: assessment complete, code changes ready, staging validated, migration scheduled, migration executed, monitoring period complete, migration closed
- Identify the critical path and any dependencies that could delay the timeline
- Define go/no-go criteria for proceeding with the migration
</framework>

<output_format>
Deliver:
1. A dependency map showing every workflow, step, and data field that interacts with the changing system
2. An impact analysis classifying each dependency as breaking, requiring update, or no impact, with specific code-level details for each affected item
3. A risk assessment with risk ratings per workflow, the biggest risk factor, and the most likely failure scenario
4. A detailed migration plan with pre-migration tasks, execution steps, post-migration verification, and rollback procedures
5. A communication plan and timeline with milestones, stakeholder notifications, and go/no-go criteria
</output_format>

</assess_upstream_system_changes>
```
