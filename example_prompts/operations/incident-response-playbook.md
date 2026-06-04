# Incident Response Playbook

**Source:** [https://www.productboard.com/product-management-prompts-library/incident-response-playbook/](https://www.productboard.com/product-management-prompts-library/incident-response-playbook/)

> Build a product incident response playbook so your team responds to production incidents consistently and quickly.

## Prompt Template

```
<incident_response_playbook>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- product: if available, use this to determine the type of product

- okrs: If available, use them to connect operational improvements to measurable business goals. If not: "What is the primary business outcome this operational change needs to support?"



Collect any missing answers before proceeding to the <framework> section.

</context_integration>



<inputs>

YOUR CONTEXT:

1. What type of product do you have? (consumer app, B2B SaaS, API platform)

2. What's your customer-facing SLA? (if any)

3. How many customers would be affected by a major outage?

4. What monitoring and alerting do you have?

5. What's your on-call rotation? (who gets paged)

6. What's the current incident response process? (formal / informal / none)

7. What's the worst incident you've had and how did the response go?

</inputs>



<incident_playbook_framework>



You are an SRE-adjacent product operations specialist who builds incident response playbooks. You know that when production goes down, the worst time to design your response process is in the moment. This playbook is the preparation that makes incidents faster to resolve and less damaging to customer trust.



---



# INCIDENT RESPONSE PLAYBOOK



**Version:** 1.0 | **Owner:** [PM + EM] | **Last updated:** [Date]



---



## INCIDENT SEVERITY DEFINITIONS



### P0 — CRITICAL

Definition: Total service unavailability, data loss, security breach, or severe degradation affecting >50% of users

Response time target: <15 minutes (engineering), <30 minutes (PM)

Communication target: Customer notification within 1 hour

Examples: All users cannot log in, database corruption, payment processing down



### P1 — HIGH

Definition: Significant functionality broken for a meaningful segment, no workaround available

Response time target: <1 hour (engineering), <2 hours (PM)

Communication target: Customer notification within 2 hours (if customer-visible)

Examples: Exports not working, specific feature down for a user tier, significant performance degradation



### P2 — MEDIUM

Definition: Feature degraded but workaround exists, or small % of users affected

Response time target: Same business day (engineering)

Communication target: Status page update, no individual customer notification

Examples: Non-critical feature intermittently failing, edge case affecting <5% of users



---



## THE INCIDENT ROLES



INCIDENT COMMANDER (IC): Takes overall ownership of the response. Usually the on-call engineer.

Responsibilities: Coordinates response, makes escalation decisions, ensures communication happens



COMMUNICATIONS LEAD: Handles customer and internal communications during the incident.

Usually: PM on call or CS lead



TECHNICAL LEAD: Leads the investigation and resolution effort.

Usually: On-call engineer or senior engineer



SUBJECT MATTER EXPERT (SME): Called in as needed based on affected system.

Usually: Engineer who built the affected component



---



## THE INCIDENT RESPONSE PROTOCOL



### STEP 1: DETECTION AND DECLARATION (0-15 min)

1. Alert fires or issue is reported

2. On-call engineer acknowledges the alert within 15 minutes

3. On-call engineer does initial assessment:

- What is affected?

- How many users?

- Severity classification?

4. If P0 or P1: Declare the incident, create incident channel, notify IC, PM, CS lead



### STEP 2: COMMUNICATION (15-30 min for P0/P1)

INTERNAL: Post in #incidents: "P[X] incident declared. Affected: [what]. Impact: [users/features]. IC: [Name]. Bridge: [Link]"

CUSTOMER: Update status page within 30 min for P0/P1

EXTERNAL: If needed, prepare customer email draft (PM owns this)



### STEP 3: INVESTIGATION AND MITIGATION (ongoing)

IC updates #incidents every 30 minutes: "Status update: [What we know, what we're doing, ETA if known]"

Focus on MITIGATION first (restore service), then ROOT CAUSE (understand why)

If mitigation is a rollback: PM + EM joint decision, execute within target time



### STEP 4: RESOLUTION

When service is restored: Confirm all monitoring shows green

Notify customers: "The issue has been resolved. [What happened, impact, what we're doing to prevent recurrence]"

Close incident channel, begin post-mortem scheduling



### STEP 5: POST-MORTEM (within 48 hours for P0, within 1 week for P1)

Schedule within 24 hours of resolution

Format: [Link to post-mortem template]



---



## CUSTOMER COMMUNICATION TEMPLATES



STATUS PAGE INITIAL UPDATE:

"We are investigating an issue affecting [feature/service]. Our team is actively working on a resolution. We will provide updates every 30 minutes."



STATUS PAGE UPDATE:

"Investigation update: We have identified [nature of issue] as the cause. Estimated resolution: [time or 'we will update in X minutes']. Affected users: [description]."



STATUS PAGE RESOLUTION:

"This incident has been resolved. [Feature] is now operating normally. Impact summary: [duration, users affected]. A full incident review will be posted within [timeframe]."



CUSTOMER EMAIL (P0 requiring direct notification):

Subject: "Service Disruption Notification — [Date]"

Body: [What happened, when, who was affected, resolution, what we're doing to prevent recurrence, contact for questions]



---



## ESCALATION MATRIX



| Severity | Who to notify | How | By when |

|----------|-------------|-----|---------|

| P0 | CTO + CPO + CEO | Phone call + Slack | <30 min |

| P1 | CTO + CPO | Slack | <1 hour |

| P2 | EM + PM | Slack | <4 hours |



---



## THE RUNBOOK LIBRARY



For common incident types, link to specific runbooks:

- [Database connection failures]: [Runbook link]

- [Authentication service down]: [Runbook link]

- [Third-party API failure]: [Runbook link]

[Add as runbooks are created]



</incident_playbook_framework>

</incident_response_playbook>
```
