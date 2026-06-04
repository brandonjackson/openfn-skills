# Map Tech Estate

> Map all systems, databases, and tools in the organization's technology landscape to understand what exists, who owns it, and how data moves between systems.

## Prompt Template

```
<map_tech_estate>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- organisation_profile: If available, use it to understand the organisation's sector, size, and operating context. If not: "What type of organisation is this (NGO, government ministry, multilateral), and what sector do they work in (health, agriculture, social protection, education)?"
- programme_description: If available, use it to scope which systems are relevant to the integration project. If not: "Which programme or business process is the focus of this integration effort?"
- existing_architecture_docs: If available, use them as a starting point and validate/update rather than building from scratch. If not: "Is there any existing documentation of the organisation's systems — even a diagram on a whiteboard or a spreadsheet list?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What are the core business processes this organisation runs (e.g., beneficiary registration, case management, supply chain tracking, payroll, reporting)?
2. For each core process, what systems or tools do staff use day-to-day? Include formal systems (DHIS2, CommCare, SAP) and informal ones (Excel, WhatsApp, paper forms).
3. Are there any databases or data warehouses that aggregate data from multiple sources?
4. What reporting or analytics tools are in use (Power BI, Tableau, DHIS2 dashboards, custom dashboards)?
5. Are there any systems that are planned, being piloted, or recently decommissioned?
6. Who are the key IT/technical staff or vendors responsible for maintaining these systems?
7. Are any systems hosted externally (SaaS) vs. on-premise or in a government data centre?
</inputs>

<framework>
You are a solutions architect specialising in technology landscape assessments for organisations running development and humanitarian programmes. You understand that most organisations have a mix of purpose-built platforms, off-the-shelf tools, and informal workarounds — and that the real data flows often differ significantly from what is documented. Your job is to produce a clear, honest map of what exists today.

PHASE 1: SYSTEM INVENTORY

For each system identified, capture the following in a structured table:

| Field | Detail |
|-------|--------|
| System name | Formal name and common name if different |
| Category | Registry, case management, logistics, HMIS, HR/payroll, finance, reporting, communication |
| Vendor / platform | E.g., DHIS2, CommCare, OpenMRS, Salesforce, custom-built |
| Hosting model | SaaS, on-premise, government cloud, donor-hosted |
| Primary users | Roles and approximate number of users |
| Data domains | What types of records live here (patients, beneficiaries, commodities, transactions) |
| System owner | The team or individual responsible for administration |
| Technical contact | Who to talk to for API access or data exports |
| Status | Active, pilot, legacy, planned |

Organise the inventory by business process, not alphabetically. Group systems that serve the same process together so gaps and overlaps become visible.

PHASE 2: DATA FLOW MAPPING

For each pair of connected systems, document how data currently moves:

- Source system and destination system
- What data moves (e.g., patient registrations, commodity receipts, aggregate indicators)
- Transfer mechanism (manual re-entry, CSV export/import, API integration, database replication, OpenFn workflow, other middleware)
- Frequency (real-time, daily batch, weekly, monthly, ad-hoc)
- Direction (one-way or bidirectional)
- Who initiates the transfer (automated, IT staff, programme staff)

Also identify where data does NOT flow but should — places where staff manually look up information in one system to enter it in another, or where reports require pulling data from multiple systems and combining in Excel.

PHASE 3: DEPENDENCY AND CRITICALITY ASSESSMENT

For each system in the inventory, assess:

- Criticality: What happens if this system goes down for 24 hours? 1 week? (High / Medium / Low)
- Data volume: Approximate number of records and growth rate
- Upstream dependencies: What feeds data into this system?
- Downstream dependencies: What systems or processes depend on data from this system?
- Single points of failure: Is there one person who knows how to administer it? One server with no backup?

Flag any systems where a failure would cascade across multiple business processes — these are integration priorities and also risk factors.

PHASE 4: GAP AND OVERLAP ANALYSIS

Review the inventory for:

- Gaps: Business processes with no dedicated system (usually handled in Excel or paper)
- Overlaps: Multiple systems storing the same data (e.g., beneficiary lists in both a registration system and a case management tool), creating reconciliation headaches
- Shadow IT: Tools staff have adopted outside of official channels (Google Sheets, Airtable, personal databases)
- Legacy systems: Platforms still running but no longer actively maintained or supported

For each finding, note whether it represents a risk, an integration opportunity, or both. In OpenFn terms, overlaps and manual data re-entry are strong candidates for automated workflows.

PHASE 5: TECHNOLOGY ESTATE MAP

Synthesise everything into a visual-ready format:

- A system-of-record table showing which system is the authoritative source for each data domain
- A connection matrix showing all data flows between systems (existing and needed)
- A summary diagram description that could be turned into an architecture diagram, showing systems as nodes and data flows as edges, with annotations for transfer method and frequency

Label each connection with its current state:
- Automated (via OpenFn, API, or other middleware)
- Semi-automated (scheduled exports, scripted transfers)
- Manual (human-mediated data transfer)
- Missing (needed but not in place)
</framework>

<output_format>
Deliver:
1. A system inventory table covering all identified systems with the fields from Phase 1
2. A data flow register documenting every current and needed data movement between systems
3. A criticality and dependency assessment for each system
4. A gap/overlap analysis highlighting integration opportunities and risks
5. A technology estate summary suitable for sharing with both technical and non-technical stakeholders, including a connection matrix and system-of-record designations
</output_format>

</map_tech_estate>
```
