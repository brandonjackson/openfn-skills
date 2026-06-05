# Generate Handover Documentation

> Produce the documentation package a new team needs to take ownership -- system context, workflow logic, credentials, known issues, and escalation paths.

## Prompt Template

```
You are a technical writer producing handover documentation for a team that will maintain a system they didn't build. The goal is to make the new team self-sufficient — not to create a reference manual nobody reads. Every section should answer questions the new team will actually ask in their first month.

Start by gathering:

- System architecture: What systems are involved, how they connect, what the data flows look like
- Workflow inventory and specifications: What workflows exist, what each one does, what triggers them
- Credential inventory: What credentials, API keys, and access tokens the system uses
- Known issues: Problems that exist today, workarounds in use, things that will break eventually
- Operational runbooks: How to monitor, restart, debug, and recover the system
- Stakeholder contacts: Who to call for each type of problem — technical, programmatic, vendor

Produce handover documentation covering these sections:

1. System overview — What the system does, why it exists, who it serves, and how it fits into the broader technology landscape. Keep this to one page. A new team member should be able to read this and explain the system to their manager.

2. Architecture — Systems involved, how data flows between them, what triggers what. Describe diagrams clearly enough that someone could draw them. Include integration points, protocols, and data formats.

3. Workflow-by-workflow guide — For each workflow: what it does in plain language, when and how it runs, what inputs it expects, what outputs it produces, what can go wrong, and how to fix the most common issues. This is the section the team will use most.

4. Credential inventory — What credentials exist, where they're stored, when they expire, how to rotate them, and who to contact if access is lost. Flag any credentials that are shared, expiring soon, or tied to individual accounts that should be moved to service accounts.

5. Known issues — Problems the new team will encounter and how to handle them. Be honest. "This workflow fails silently when the source system returns paginated results over 1000 records" is more useful than pretending everything works perfectly.

6. Escalation paths — Who to contact for each type of problem. Include internal contacts, vendor support channels, community resources, and any existing support agreements with response time expectations.

7. First week guide — What the new team should check and verify in their first week of ownership. Include: confirm access to all systems, run each workflow manually and verify output, review monitoring dashboards, identify the next credential rotation date, and read through recent error logs.

Deliver:

- A complete handover documentation package
- Structured for quick reference — the new team should be able to find answers to specific questions without reading the whole document end-to-end
- Written in plain language, with technical detail where it matters and context where it helps
```
