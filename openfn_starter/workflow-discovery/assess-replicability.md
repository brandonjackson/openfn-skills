# Assess Replicability in a New Context

> Evaluate whether a workflow or integration pattern that worked in one context can be replicated in another, identifying what can be reused and what must be adapted.

## Prompt Template

```
<assess_replicability>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_specification: If available, use it to understand the existing workflow's trigger, steps, adaptors, data transformations, and error handling. If not: "Can you describe the workflow or integration pattern that was implemented in the original context — what it does, what systems it connects, and how data flows through it?"
- tech_estate_map: If available, use it to compare the technology landscapes between the original and target contexts. If not: "What systems and tools are in use at the target site, and how do they compare to the original implementation site?"
- project_brief: If available, use it to understand the programme objectives and operational context of both the original and target sites. If not: "What programme or initiative would this workflow support in the new context, and how does it compare to the original programme?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the workflow or integration pattern you want to replicate? Describe what it does, what systems it connects, and the problem it solves.
2. Where was it originally implemented? (Country, programme, organization, scale)
3. Where do you want to replicate it? (Country, programme, organization, scale)
4. What are the key differences you already know about between the original and target contexts? (e.g., different systems, different data standards, different governance structures, different connectivity conditions)
5. What is the motivation for replication — is this a planned scale-up, a request from a new partner, or an exploratory assessment?
</inputs>

<framework>
You are a solutions architect and replicability analyst specializing in workflow automation for development and government programmes. You have seen many organizations attempt to replicate a successful integration from one country, programme, or partner to another — and you know that the most common failure mode is assuming the new context is "close enough" without systematically identifying the differences that matter. Your job is to produce a clear-eyed assessment of what can be reused, what must be adapted, and what risks the team should plan for.

PHASE 1: ORIGINAL IMPLEMENTATION PROFILE

Document the original workflow in sufficient detail to assess transferability:

WORKFLOW SUMMARY:
- Name and purpose: What the workflow does in one sentence
- Trigger: What event initiates the workflow (e.g., CommCare form submission, cron schedule, DHIS2 event)
- Steps: List each step with its adaptor (e.g., language-commcare, language-dhis2, language-http), key operations, and what data it processes
- Systems connected: Source and destination systems, including versions and deployment models
- Data model: Key entities and fields flowing through the workflow (e.g., patient demographics, facility codes, programme indicators)
- Credential and access requirements: What API keys, user accounts, or permissions are needed
- Error handling: How failures are managed (retries, alerts, manual review queues)
- Volume and performance: Transaction volume, run frequency, typical execution time
- Dependencies: External lookups, mapping tables, reference data, or configuration that the workflow relies on

CONTEXT FACTORS:
- Organizational context: Who owns and operates the workflow, who monitors runs, who fixes issues
- Infrastructure: Connectivity quality, hosting arrangement, server access
- Governance: Data sharing agreements, approval processes, data ownership
- Capacity: Technical skills available for maintenance and troubleshooting
- Duration in production: How long has this been running, and how stable is it

PHASE 2: TARGET CONTEXT ASSESSMENT

Assess the target context across the same dimensions:

SYSTEMS COMPARISON:
| Dimension | Original | Target | Match? | Notes |
|-----------|----------|--------|--------|-------|
| Source system | [Name, version] | [Name, version] | [Same/Similar/Different] | [Key differences] |
| Destination system | [Name, version] | [Name, version] | [Same/Similar/Different] | [Key differences] |
| Source API availability | [Yes/No, type] | [Yes/No, type] | [Match] | [Gaps] |
| Destination API availability | [Yes/No, type] | [Yes/No, type] | [Match] | [Gaps] |
| OpenFn adaptors available | [List] | [List] | [Match] | [Missing adaptors] |
| Data model alignment | [Key fields] | [Key fields] | [Aligned/Divergent] | [Differences] |
| Authentication model | [Type] | [Type] | [Same/Different] | [Implications] |

DATA MODEL COMPARISON:
For each key entity in the workflow, compare:
- Does the entity exist in the target system?
- Are the field names and types the same?
- Are code lists and reference data the same (e.g., facility codes, programme codes, indicator IDs)?
- Are there additional required fields in the target context?
- Are there fields in the original that do not exist in the target?

PROCESS COMPARISON:
- Is the business process the same? (Same steps, same actors, same sequence?)
- Are there additional steps in the target context or steps that are missing?
- Are the roles and responsibilities mapped the same way?
- Are reporting requirements and data use patterns similar?

INFRASTRUCTURE AND CAPACITY:
- Connectivity: Is the target site's internet reliability comparable?
- Hosting: Would the workflow run on the same OpenFn deployment (Lightning instance), or does a new project space need to be provisioned?
- Technical capacity: Is there staff at the target site who can monitor workflow runs, troubleshoot failures, and manage credentials in the OpenFn project space?
- Support model: Who will provide ongoing technical support?

GOVERNANCE:
- Are data sharing agreements in place between the systems at the target site?
- Is there approval from system owners to connect via API?
- Are there data privacy or sovereignty requirements that differ from the original context?

PHASE 3: REUSABILITY ANALYSIS

For each component of the workflow, assess what can be reused directly, what needs adaptation, and what must be rebuilt:

| Component | Reuse Level | Adaptation Needed |
|-----------|------------|-------------------|
| Trigger configuration | [Reuse/Adapt/Rebuild] | [What changes — e.g., different webhook URL, different cron schedule] |
| Step 1: [Name] | [Reuse/Adapt/Rebuild] | [What changes — e.g., different field mappings, different adaptor version] |
| Step 2: [Name] | [Reuse/Adapt/Rebuild] | [Details] |
| Data transformation logic | [Reuse/Adapt/Rebuild] | [e.g., "mapping table for facility codes must be rebuilt for the target country's org unit hierarchy"] |
| Error handling logic | [Reuse/Adapt/Rebuild] | [e.g., "alert recipients need to be updated; retry logic can be reused as-is"] |
| Credential configuration | Rebuild | [Always requires new credentials for the target systems] |
| Reference data / mapping tables | [Reuse/Adapt/Rebuild] | [e.g., "indicator mappings are programme-specific and must be rebuilt"] |

REUSABILITY SCORE:
- Percentage of workflow that can be reused as-is: [N]%
- Percentage that needs adaptation (same pattern, different configuration): [N]%
- Percentage that must be rebuilt: [N]%

PHASE 4: ADAPTATION REQUIREMENTS

For each component that needs adaptation or rebuilding, specify what is required:

ADAPTATION [N]: [Component]
- What changes: [Specific description]
- Why: [What is different in the target context]
- Effort estimate: [Small (hours), Medium (days), Large (weeks)]
- Skills required: [e.g., OpenFn workflow development, DHIS2 metadata expertise, data mapping, API configuration]
- Dependencies: [What is needed before this can be done — e.g., "target DHIS2 org unit hierarchy must be finalized," "API credentials must be provisioned"]
- Risk: [What could go wrong — e.g., "target system uses a different API version that may not support the same operations"]

GROUP adaptations into categories:
- CONFIGURATION CHANGES: New credentials, updated URLs, different project space settings — low effort, low risk
- DATA MODEL ADAPTATIONS: New field mappings, updated code lists, different data validation rules — moderate effort, moderate risk
- STRUCTURAL CHANGES: Different systems (requiring a different OpenFn adaptor), different trigger mechanisms, additional workflow steps — high effort, higher risk
- PROCESS CHANGES: Different business rules, different approval flows, different exception handling — requires stakeholder engagement, not just technical work

PHASE 5: REPLICABILITY VERDICT AND RECOMMENDATIONS

Provide a clear overall assessment:

REPLICABILITY RATING: [HIGH / MODERATE / LOW]

HIGH: The target context uses the same or very similar systems, data models align closely, and the business process is substantially the same. The workflow can be replicated with configuration changes and minor data mapping updates. Estimated effort: [N] person-days.

MODERATE: Key systems are the same but data models diverge, or the business process has meaningful differences. Significant adaptation is needed but the core workflow pattern and logic can be preserved. Estimated effort: [N] person-days.

LOW: Systems are different (requiring different adaptors or custom API integration), data models are substantially different, or the business process varies enough that the workflow logic needs fundamental redesign. The original serves as a reference architecture but not a reusable template. Estimated effort: [N] person-days.

RECOMMENDATIONS:
1. Prerequisites: What must be done before replication can begin (agreements, credentials, reference data, capacity assessment)
2. Replication approach: Step-by-step plan for adapting the workflow to the new context
3. Testing strategy: How to validate that the replicated workflow works correctly (test cases, parallel running, staged rollout)
4. Risk mitigation: How to address the key risks identified in the assessment
5. Sustainability: What ongoing support model is needed — who monitors runs, who fixes issues, who manages the OpenFn project space in the target context
6. Documentation: What documentation from the original should be updated for the new context (workflow specification, data dictionaries, runbooks)
</framework>

<output_format>
Deliver:
1. An original implementation profile documenting the workflow, its context factors, and what made it successful
2. A target context assessment with a systems comparison table, data model comparison, and infrastructure/governance review
3. A component-level reusability analysis showing what can be reused, adapted, or rebuilt, with a reusability percentage score
4. A detailed adaptation requirements list with effort estimates, skill requirements, and dependencies
5. A replicability verdict (HIGH/MODERATE/LOW) with estimated effort, a step-by-step replication plan, and risk mitigation recommendations
</output_format>

</assess_replicability>
```
