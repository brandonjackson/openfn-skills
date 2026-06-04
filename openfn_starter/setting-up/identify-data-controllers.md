# Identify Who Controls What Data

> Map data ownership and stewardship across systems and teams to clarify who has authority to grant access, who maintains data quality, and who approves changes.

## Prompt Template

```
<identify_data_controllers>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- tech_estate_map: If available, use the system inventory and data domains to pre-populate the list of data assets and systems to assess. If not: "What systems and databases are in scope, and what types of data does each one hold (e.g., beneficiary records, health data, financial transactions, commodity stocks)?"
- data_flow_register: If available, use it to identify where data moves between systems and who initiates those transfers. If not: "How does data currently move between systems — who exports, who imports, who decides what gets shared?"
- organisation_profile: If available, use it to understand the organisational structure, reporting lines, and governance culture. If not: "What is the organisational structure — is this a single agency, a consortium of partners, a government ministry with regional offices, or a mixed model?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What are the key data domains in scope (e.g., beneficiary identity, health records, case management data, financial disbursements, supply chain, programme indicators, geospatial data)?
2. For each data domain, which system is considered the primary source of truth — and is that designation formal or informal?
3. Who currently has the authority to grant access to each system's data — is it an IT administrator, a programme manager, a government counterpart, a vendor, or unclear?
4. Are there existing data sharing agreements, MOUs, or data protection policies that govern how data can be accessed or exchanged?
5. What data protection or privacy regulations apply (e.g., national data protection act, GDPR, HIPAA, sector-specific rules)?
6. Have there been any disputes or confusion about who owns data, who can modify it, or who can share it with external parties?
7. Are there any donor or government reporting requirements that mandate specific data flows or access arrangements?
</inputs>

<framework>
You are a data governance specialist working with organisations in the development and humanitarian sector. You understand that data ownership in these contexts is often ambiguous — systems may be funded by one organisation, operated by another, and used by a third. Government data may be hosted on donor-funded platforms. Beneficiary data collected by an NGO may be subject to government data protection requirements. Your job is to cut through this ambiguity and produce a clear map of who controls what data, so that when the integration team needs access to build OpenFn workflows, they know exactly who to ask and what agreements are needed.

PHASE 1: DATA ASSET INVENTORY

For each data domain identified, create a structured record:

| Field | Detail |
|-------|--------|
| Data domain | E.g., beneficiary registration, patient health records, commodity stock levels |
| Primary system | The system that holds the authoritative version of this data |
| Data types | Specific record types — individual records, aggregate indicators, transaction logs, reference data |
| Sensitivity level | Public, internal, confidential, restricted (contains PII, health data, or financial data) |
| Volume | Approximate number of records and growth rate |
| Retention requirements | How long must this data be kept, and are there deletion obligations? |

Group data assets by business process so that the ownership picture aligns with how the organisation actually works, not just how IT is structured.

PHASE 2: CONTROLLER AND STEWARD MAPPING

For each data asset, identify the key roles using a RACI-style framework adapted for data governance:

DATA OWNER: The person or body with ultimate authority over this data — they decide who can access it, how it can be used, and what happens when there is a dispute. In government contexts, this is often a ministry or department head. In NGO contexts, it may be the programme director or country director.

DATA STEWARD: The person or team responsible for day-to-day data quality — they define data standards, resolve data quality issues, approve changes to data structures, and manage the master data. Often an M&E lead, a data manager, or a registry administrator.

DATA CUSTODIAN: The technical team or individual responsible for the system that holds the data — they manage access controls, backups, system availability, and technical operations. Often the IT team, a hosting provider, or a SaaS vendor.

DATA USERS: The roles and teams that consume this data — for reporting, case management, service delivery, or decision-making. Understanding who depends on this data clarifies who is affected when data quality degrades or access is disrupted.

ACCESS AUTHORISER: The specific person who can grant API access, issue credentials, or approve data sharing agreements for integration purposes. This is the person the OpenFn implementation team needs to engage directly. In some organisations this is the data owner; in others it is the data custodian; often it is unclear, which is exactly why this mapping matters.

Present this as a matrix:

| Data Domain | Primary System | Data Owner | Data Steward | Data Custodian | Access Authoriser | Key Data Users |
|------------|---------------|------------|-------------|----------------|-------------------|----------------|
| [Domain] | [System] | [Name/Role] | [Name/Role] | [Name/Role] | [Name/Role] | [Roles] |

PHASE 3: GOVERNANCE GAP ANALYSIS

Review the controller matrix for common problems:

- Orphaned data: Data assets with no clearly identified owner or steward. This is common when a project ends but the system persists, or when a donor transitions a system to government without formalising handover.
- Conflicting authority: Multiple people or teams claiming ownership of the same data domain. Common when parallel programmes collect similar data (e.g., two health programmes both registering patients in different systems).
- Missing custodians: Systems with no technical support — the original developer left, the vendor contract expired, or the government IT team is under-resourced.
- Unclear access paths: Data assets where nobody can clearly say who authorises API access for integration. This is the most common blocker for OpenFn workflow implementation.
- Sensitivity mismatches: Data being shared or moved in ways that do not match its sensitivity level — e.g., PII being exported via unencrypted CSV and emailed between offices.
- Cross-boundary complexity: Data that crosses organisational, jurisdictional, or national boundaries, requiring formal data sharing agreements that may not exist.

For each gap, assess the risk it poses to the integration project and recommend a resolution path.

PHASE 4: DATA SHARING AND ACCESS REQUIREMENTS FOR INTEGRATION

For each planned OpenFn workflow or integration connection, document what data access is needed and who must approve it:

| Integration | Source System | Data Accessed | Sensitivity | Access Authoriser | Agreement Needed | Status |
|------------|-------------|---------------|-------------|-------------------|-----------------|--------|
| [Workflow name] | [System] | [Data types] | [Level] | [Name/Role] | [MOU/DPA/API agreement/None] | [Not started/In progress/Approved] |

For each entry, note:
- Whether the access is read-only (pulling data for reporting or transformation) or read-write (creating or updating records in the source system)
- Whether the integration will handle PII or sensitive data, and what safeguards are needed (encryption in transit, credential management in the OpenFn project space, audit logging)
- Whether existing data sharing agreements cover this use case or whether new agreements are needed
- The estimated timeline to secure access, flagging any that are likely to take more than two weeks

PHASE 5: DATA CONTROLLER SUMMARY AND RECOMMENDATIONS

Synthesise the findings:

- A narrative summary of the data governance landscape — is ownership generally clear or generally contested? Is there a culture of data sharing or a culture of data siloes?
- A list of critical actions the integration team must take before building workflows — agreements to secure, people to engage, policies to review
- A risk register of governance-related risks to the integration project, ordered by likelihood and impact
- Recommendations for strengthening data governance as part of the integration project — not as a separate initiative, but as practical steps embedded in the workflow design process. For example: "When building the patient referral workflow in OpenFn, include a step that logs every data access event so the data steward has an audit trail."
</framework>

<output_format>
Deliver:
1. A data asset inventory table covering all in-scope data domains with system, sensitivity, and volume details
2. A RACI-style data controller matrix mapping owner, steward, custodian, access authoriser, and key users for each data domain
3. A governance gap analysis identifying orphaned data, conflicting authority, unclear access paths, and sensitivity mismatches
4. A data access requirements register for each planned integration, showing what approvals and agreements are needed
5. A summary with critical actions, a governance risk register, and practical recommendations for the integration team
</output_format>

</identify_data_controllers>
```
