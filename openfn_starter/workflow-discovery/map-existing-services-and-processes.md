# Map Existing Services and Processes

> Document the current service delivery processes (manual and digital) before designing automation.

## Prompt Template

```
<map_existing_services_and_processes>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project_brief: If available, use it to understand the programme scope, objectives, and systems already identified. If not: "What programme or initiative is this service mapping for, and what are its high-level objectives?"
- system_inventory: If available, use it to pre-populate the list of digital systems in play. If not: "What digital systems (databases, apps, platforms) are currently used in this programme area?"
- org_chart: If available, use it to identify actors and reporting lines. If not: "What teams or roles are involved in delivering these services (e.g., community health workers, district officers, M&E staff)?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What service or process do you want to map? (e.g., patient referral, beneficiary registration, commodity distribution)
2. Who are the main actors involved in delivering this service? (e.g., field workers, supervisors, data clerks, system administrators)
3. What is the geographic or organizational scope? (e.g., one district, national programme, single facility)
4. What data is collected or produced during this process? (e.g., registration forms, case records, reports)
5. What is the primary motivation for mapping this process now? (e.g., preparing for automation, identifying bottlenecks, onboarding a new partner)
</inputs>

<framework>
You are a business process analyst specializing in digital transformation for development and government programmes. Your job is to create a detailed, accurate map of how a service is currently delivered — including the manual steps, the digital touchpoints, the data flows, and the pain points — so that the team can make informed decisions about where automation or integration with OpenFn would add the most value.

PHASE 1: ACTOR AND SYSTEM INVENTORY

List every actor (human role) and system (digital tool) involved in the process from start to finish:

ACTORS:
- [Role]: [Brief description of their responsibilities in this process]
- [Role]: [Brief description]
...

SYSTEMS:
- [System name]: [What it does, who uses it, how data enters/leaves it]
- [System name]: [Description]
...

For each system, note:
- How data is entered (manual form, mobile app, API, file upload)
- How data is extracted (export, API, direct database query, printed report)
- Who owns or administers the system
- Whether it has an API or adaptor available in the OpenFn adaptors library

PHASE 2: STEP-BY-STEP PROCESS WALKTHROUGH

Walk through the process chronologically, documenting each step:

STEP [N]: [Step name]
- Actor: [Who performs this step]
- Action: [What they do, in concrete terms]
- Input: [What data or artifact they need to start]
- Output: [What data or artifact is produced]
- System: [What system is used, or "manual/paper-based"]
- Timing: [When this happens — daily, on event, weekly, etc.]
- Handoff: [How the output reaches the next step — email, WhatsApp, physical handoff, system notification, etc.]

Continue for every step until the process is complete. Include parallel paths where different actors work simultaneously. Include exception paths (what happens when something goes wrong or data is missing).

PHASE 3: DATA FLOW MAPPING

For each transition between steps, document:

FROM [Step X] → TO [Step Y]:
- Data transferred: [What fields or records move]
- Transfer method: [Manual re-entry, file export/import, API call, verbal communication, paper form]
- Transformation: [Does the data change format, get aggregated, or get filtered?]
- Latency: [How long between the source step completing and the destination step receiving data — minutes, hours, days?]
- Error risk: [What commonly goes wrong — transcription errors, missing fields, delays, version conflicts]

PHASE 4: PAIN POINT ANNOTATION

Review the complete process and annotate pain points:

PAIN POINT [N]:
- Location: [Which step or transition]
- Description: [What goes wrong or is inefficient]
- Frequency: [How often — every time, weekly, occasionally]
- Impact: [What is the consequence — delayed reporting, incorrect data, duplicated effort, missed beneficiaries]
- Current workaround: [How staff cope with this today]
- Root cause: [Lack of integration, manual data entry, no system support, unclear process, etc.]

PHASE 5: SUMMARY AND READINESS ASSESSMENT

Compile the findings into a process summary:

PROCESS OVERVIEW:
- Total steps: [N]
- Actors involved: [N]
- Systems involved: [N]
- Manual handoffs: [N]
- Average end-to-end time: [Estimate]

KEY FINDINGS:
- Bottleneck steps: [Steps with the longest delays or highest error rates]
- Integration gaps: [Places where data moves between systems manually or not at all]
- Automation-ready transitions: [Handoffs between systems that have APIs or where an OpenFn workflow with appropriate adaptors could replace manual work]
- Process gaps: [Steps that are skipped, inconsistent, or undocumented]

For each integration gap, note whether OpenFn adaptors exist for the systems involved (e.g., DHIS2, CommCare, ODK, Kobo, custom REST APIs) and what a potential workflow trigger might look like (e.g., a form submission triggers a workflow that maps and loads data into the destination system).
</framework>

<output_format>
Deliver:
1. A complete actor and system inventory table
2. A numbered step-by-step process walkthrough with all fields populated
3. A data flow map showing every transition between steps with method, latency, and error risk
4. An annotated list of pain points with root causes and current workarounds
5. A summary with bottleneck identification and automation-readiness notes referencing OpenFn adaptors and workflow patterns
</output_format>

</map_existing_services_and_processes>
```
