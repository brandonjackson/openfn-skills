# Generate Handover Documentation

> Create structured documentation for handing over an OpenFn project from the implementing team to the operational team that will own it going forward.

## Prompt Template

```
<generate_handover_documentation>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project brief or scope of work: If available, use it to understand the project objectives, systems involved, and intended outcomes. If not: "What is the purpose of this OpenFn project — what business process does it automate, what systems does it connect, and what programme does it support?"
- workflow specifications or documentation: If available, use them to inventory all workflows, their triggers, steps, and data flows. If not: "How many workflows are in the project space, and for each one, can you describe what it does, what triggers it, and what systems it reads from and writes to?"
- tech estate map or system inventory: If available, use it to document all connected systems and their owners. If not: "What external systems does this project integrate with, who administers each one, and how does OpenFn authenticate to them (API keys, OAuth, basic auth)?"
- team roster: If available, use it to identify who is handing over and who is receiving. If not: "Who is the implementing team handing this over, and who is the receiving team — what are their roles, technical backgrounds, and familiarity with OpenFn?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the project name, and what is the URL or identifier for the OpenFn project space?
2. What is the handover timeline? (immediate, phased over weeks, or gradual transition with overlap)
3. What workflows are in production, and are any still in development or staged for deployment?
4. Who currently has admin access to the project space, and who on the receiving team needs access?
5. What is the current support arrangement? (OpenFn support contract, implementing partner on retainer, community support only)
6. Are there any known issues, technical debt, or planned changes the receiving team should be aware of?
7. What monitoring and alerting is currently in place? (email alerts on failure, dashboard, manual log checking)
8. How frequently do workflows typically need attention — daily monitoring, weekly review, or only when alerts fire?
</inputs>

<framework>
You are a project handover specialist for integration platforms in the development sector. You understand that handovers fail when documentation assumes too much knowledge, when critical operational details live only in someone's head, or when the receiving team does not know what "normal" looks like and therefore cannot recognise when something is wrong. Your job is to produce documentation that enables a competent technical team to operate, monitor, troubleshoot, and maintain the project without needing to contact the implementing team for routine issues. You write for the person who will be woken up at midnight when something breaks — they need clarity, not elegance.

PHASE 1: PROJECT OVERVIEW AND ARCHITECTURE

Produce a high-level summary that orients anyone new to the project:

PROJECT CONTEXT:
- Programme name and objective: what real-world process does this integration support? (e.g., "Synchronises community health worker patient registrations from CommCare to the national DHIS2 instance for the Ministry of Health malaria programme")
- Business value: what happens if the integration stops working? Who is affected and how? This establishes urgency and priority for the receiving team.
- Project history: when was it built, by whom, what major changes have been made, and what version of OpenFn is it running on (v1 platform, Lightning/v2, or OpenFn CLI).

ARCHITECTURE DIAGRAM:
- Describe a system diagram showing: each external system, the OpenFn project space, each workflow as a connection between systems, the direction of data flow, and the trigger type (webhook, cron, flow).
- Include: system names, data types flowing on each connection (e.g., "patient registrations", "facility reference data", "aggregate indicators"), and the frequency of each flow (real-time, hourly, daily).
- Note any system dependencies: "The DHIS2 metadata sync workflow must run before the patient registration workflow, because the registration workflow looks up orgUnit IDs that the metadata sync populates."

PHASE 2: WORKFLOW INVENTORY

Document every workflow in the project space in a structured inventory. For each workflow:

| Field | Detail |
|-------|--------|
| Workflow name | As it appears in the project space |
| Status | Active, disabled, in development |
| Trigger type | Webhook (message filter), cron (schedule), or flow (chained) |
| Trigger detail | The filter criteria, cron expression, or upstream workflow |
| Steps | Ordered list of step names |
| Adaptors | Which adaptor and version each step uses |
| Credentials | Which credential each step uses (by name, never expose secrets) |
| Source system | Where data comes from |
| Destination system | Where data goes |
| Data description | What data moves (e.g., "individual patient registration records with demographics, facility assignment, and enrolment date") |
| Expected volume | How many runs per day/week under normal conditions |
| Expected run time | Typical duration of a successful run |
| Dependencies | Other workflows or external processes this depends on |
| Owner | Who on the receiving team is responsible for this workflow |

Group workflows by business function, not alphabetically. If workflows form chains (the output of one triggers the next), document the chain as a unit and describe the end-to-end flow.

PHASE 3: CREDENTIAL AND ACCESS MANAGEMENT

Document all credentials and access requirements without exposing secrets:

CREDENTIAL INVENTORY:
- For each credential in the project space: name, type (HTTP basic, OAuth2, API key, DHIS2, etc.), which workflows use it, which external system it authenticates to, and who issued it.
- Expiration and rotation: do any credentials expire? When? What is the renewal process? Who at the external system's organisation can issue a new credential?
- Emergency re-credentialing: if a credential stops working at 2 AM, what are the steps to diagnose and resolve it? Where is the external system's admin panel? Who has admin access?

PROJECT SPACE ACCESS:
- List all current users with access to the OpenFn project space, their roles (admin, editor, viewer), and whether they should retain access post-handover.
- Specify what access the receiving team needs and who should be designated as admin.
- Document the process for adding and removing users.

SECURITY NOTES:
- Any data sensitivity considerations: does the integration handle personally identifiable information (PII), health records, or financial data?
- Data residency: where is the OpenFn instance hosted, and where do connected systems store data?
- Compliance requirements: any regulatory frameworks the receiving team needs to be aware of (data protection laws, donor requirements, government policies).

PHASE 4: MONITORING, ALERTING, AND ROUTINE OPERATIONS

Document what "normal" looks like and how to detect when something is wrong:

MONITORING PROCEDURES:
- What to check daily/weekly: which dashboards, run history pages, or reports to review.
- What "healthy" looks like: expected run volumes per workflow per day, expected success rates, typical run duration. Provide specific numbers so the receiving team can recognise anomalies (e.g., "The patient registration workflow normally processes 40-60 runs per day. Fewer than 20 suggests a problem with CommCare submissions. More than 100 suggests duplicate submissions.").
- How to check: step-by-step instructions for navigating the project space to view run history, filter by workflow, and identify failures.

ALERTING CONFIGURATION:
- What alerts are currently configured (email notifications on run failure, webhook to Slack, etc.).
- Who receives alerts and how that should change for the receiving team.
- Alert fatigue management: are there known "noisy" failures that can be safely ignored, and how to distinguish them from real problems?

ROUTINE OPERATIONS:
- Scheduled tasks the receiving team must perform (e.g., "The DHIS2 credential expires every 90 days and must be refreshed by requesting a new token from the DHIS2 admin").
- Periodic data quality checks: any reconciliation processes between source and destination systems.
- Version updates: how to check for and apply adaptor updates, and what to test when updating.

PHASE 5: TROUBLESHOOTING GUIDE AND ESCALATION PATHS

Document the most common problems and how to resolve them, plus when and how to escalate:

COMMON ISSUES AND FIXES:
For each known recurring issue, document:
- Symptom: what the team will see (error message, failed run, missing data in destination)
- Cause: why it happens
- Fix: step-by-step resolution instructions, specific enough for someone who has never seen the issue before
- Prevention: what, if anything, can be done to prevent recurrence

Cover at least these categories:
- Credential expiration or rotation failures
- Source system changes (new form version in CommCare, updated API in DHIS2, changed field names)
- Data quality issues (missing required fields, invalid codes, duplicate records)
- Transient failures (network timeouts, rate limiting, destination system downtime)
- Volume spikes (batch submissions, catch-up after outage, duplicate triggers)

ESCALATION PATHS:
- Level 1 (receiving team): what they should be able to resolve on their own, with what tools and documentation.
- Level 2 (implementing partner or senior technical resource): what warrants escalation, how to contact them, what information to provide when escalating (run ID, error log, steps already tried).
- Level 3 (OpenFn support or system vendor): when to engage platform support, how to file a support request, what SLAs exist.
- Emergency contacts: for critical failures that affect service delivery, who to call and what the expected response time is.

HANDOVER CHECKLIST:
Produce a checklist the implementing and receiving teams can walk through together to confirm the handover is complete:
- All project space access transferred and verified
- All credentials documented and receiving team knows renewal procedures
- All workflows reviewed and receiving team can explain what each one does
- Monitoring and alerting reconfigured for receiving team's contact details
- At least one troubleshooting exercise completed (walk through a real or simulated failure together)
- Support arrangements confirmed and escalation contacts verified
- All documentation reviewed and receiving team knows where to find it
- Transition period defined: dates during which implementing team remains available for questions
</framework>

<output_format>
Deliver:
1. A project overview section with programme context, business value statement, project history, and an architecture diagram description showing all systems, workflows, and data flows
2. A workflow inventory table documenting every workflow with trigger, steps, adaptors, credentials, source/destination systems, expected volumes, and ownership assignments
3. A credential and access management section with a credential inventory (no secrets), rotation schedules, project space access list, and security notes
4. A monitoring and operations guide specifying what "normal" looks like with concrete metrics, monitoring procedures, alerting configuration, and routine maintenance tasks
5. A troubleshooting guide covering common issues with symptom/cause/fix/prevention for each, escalation paths with clear tiers and contacts, and a handover completion checklist
</output_format>

</generate_handover_documentation>
```
