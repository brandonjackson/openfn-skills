# Identify APIs and Integration Surfaces

> For each system in the technology estate, identify available APIs, data export methods, webhook support, and file-based interfaces to determine how each system can participate in automated workflows.

## Prompt Template

```
<identify_apis_and_integration_surfaces>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- tech_estate_map: If available, use the system inventory as the starting list of systems to assess. If not: "List every system, database, and tool that is part of this project's technology landscape — include name, vendor/platform, and hosting model for each."
- data_flow_register: If available, use existing data flows to focus API assessment on the connections that matter most. If not: "Which system-to-system data movements are most critical or most painful today?"
- technical_contacts: If available, use them to identify who to ask about API access. If not: "Who are the technical contacts or system administrators for each system?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. For each system, do you know whether it has an API? If yes, what type (REST, SOAP, GraphQL, FHIR, proprietary)?
2. Are there existing API credentials, tokens, or service accounts already provisioned for any systems?
3. Do any systems support webhooks or event notifications (e.g., "notify when a new record is created")?
4. What file-based data exchange is currently happening (CSV exports, Excel reports, flat files, HL7 messages)?
5. Are there any known API limitations, rate limits, or access restrictions (e.g., government systems requiring VPN, IP whitelisting, or formal MOU for API access)?
6. Has the organisation used any integration middleware before (OpenFn, Zapier, MuleSoft, custom scripts)?
7. Are there any systems where the vendor controls API access and must grant permission?
</inputs>

<framework>
You are an integration engineer assessing the integration surface area of a technology estate. Your goal is to produce a practical inventory that tells a workflow builder exactly how to connect to each system — what is possible today, what requires setup, and what is blocked. You understand the OpenFn ecosystem of adaptors and know that having a well-documented integration surface is the foundation for designing workflows.

PHASE 1: API DISCOVERY

For each system in the estate, investigate and document:

| Field | Detail |
|-------|--------|
| System name | As listed in the tech estate map |
| API type | REST, SOAP, GraphQL, FHIR, ODATA, proprietary, none |
| API documentation | URL to docs, or note if undocumented |
| Authentication method | OAuth2, API key, basic auth, certificate-based, session token |
| Available operations | CRUD capabilities — which resources can be read, created, updated, deleted via API? |
| Pagination support | How does the API handle large result sets? |
| Rate limits | Requests per minute/hour, concurrent connection limits |
| Webhook/event support | Can the system push notifications on data changes? What events are available? |
| Bulk operations | Does the API support batch/bulk requests for high-volume data movement? |
| Sandbox/test environment | Is there a non-production environment available for development and testing? |

Where an OpenFn adaptor already exists for the system (e.g., language-dhis2, language-commcare, language-salesforce, language-fhir), note this — it significantly reduces implementation effort. Check the OpenFn adaptors registry for matches.

PHASE 2: NON-API INTEGRATION SURFACES

Many systems in development contexts lack mature APIs. For each system, also assess alternative integration methods:

- File-based interfaces: Does the system support scheduled CSV/Excel/JSON exports? Can files be imported? What is the file format and schema?
- Database access: Is direct database access available (read-only views, reporting databases)? What DBMS (PostgreSQL, MySQL, SQL Server, MongoDB)?
- Email/SMTP interfaces: Can the system send or receive data via email (e.g., emailed reports, inbox processing)?
- SMS/USSD interfaces: For mobile-first systems, is there an SMS gateway or USSD integration point?
- Screen scraping: As a last resort, is the system web-based with consistent enough HTML to scrape? (Flag this as fragile and high-maintenance.)
- Manual export workflows: Document the exact steps a user must take to export data, including any filters, format options, and where the file lands.

For each alternative method, rate its reliability (high/medium/low) and automation potential (fully automatable, partially automatable, manual only).

PHASE 3: ADAPTOR AND CONNECTOR ASSESSMENT

For each system, determine the best integration approach in an OpenFn context:

- Existing OpenFn adaptor available: Note the adaptor name, version, and which operations it supports. Check if the adaptor version covers the API version the organisation is running.
- Generic HTTP adaptor applicable: If no specific adaptor exists but the system has a REST/SOAP API, the OpenFn HTTP adaptor can be used. Note any complexity (custom auth flows, non-standard pagination).
- Database adaptor applicable: If direct DB access is the best path, note the database type and whether the OpenFn PostgreSQL or ODBC adaptor would work.
- File-based adaptor applicable: For CSV/Excel/JSON file processing, note whether OpenFn's file handling capabilities fit.
- Custom adaptor needed: If none of the above apply, flag this system as requiring custom adaptor development — estimate the complexity (simple wrapper vs. complex protocol handling).
- No integration surface: If a system is truly closed with no API, no database access, no file exports, and vendor cooperation is unlikely, flag it clearly. This is a hard constraint that shapes project scope.

PHASE 4: ACCESS AND GOVERNANCE ASSESSMENT

For each integration surface, document the practical steps to gain access:

- Who authorises API access? (IT admin, vendor, government ministry, donor)
- What is the process? (Self-service portal, formal request, MOU required, procurement process)
- Estimated timeline to get access (days, weeks, months)
- Are there data sharing agreements or legal requirements (data protection laws, cross-border data transfer restrictions)?
- Network requirements (VPN, IP whitelisting, specific hosting requirements for the integration layer)
- Credential management (who holds the credentials, how are they rotated, where should they be stored in the OpenFn project space?)

Flag any access paths that are likely to be slow or politically complex — these are schedule risks for the integration project.

PHASE 5: INTEGRATION SURFACE SUMMARY

Produce a consolidated view:

For each system, assign an integration readiness score:
- GREEN: API available, documentation exists, credentials obtainable, OpenFn adaptor available or generic HTTP works. Ready to build workflows.
- YELLOW: API exists but access requires approvals, documentation is incomplete, or a custom adaptor may be needed. Feasible but requires setup work.
- RED: No API, limited export options, vendor cooperation needed, or legal/governance blockers. Significant effort or risk.
- BLACK: No viable integration surface identified. Must be worked around (manual processes or system replacement).

Summarise the overall integration posture: What percentage of priority connections are green/yellow/red/black? What are the critical path blockers?
</framework>

<output_format>
Deliver:
1. An API and integration surface inventory table for every system in the estate, covering API type, authentication, operations, and limitations
2. A non-API integration methods assessment for systems without mature APIs
3. An OpenFn adaptor mapping showing which adaptor (existing, generic, or custom) applies to each system
4. An access and governance register documenting what is required to gain integration access to each system
5. An integration readiness scorecard (green/yellow/red/black) for each system with a narrative summary of the overall integration posture
</output_format>

</identify_apis_and_integration_surfaces>
```
