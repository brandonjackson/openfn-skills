# Bug Triage Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/bug-triage-framework/](https://www.productboard.com/product-management-prompts-library/bug-triage-framework/)

> Triage incoming bugs systematically — assigning severity, priority, and ownership without letting them pile up into unmanageable backlogs.

## Prompt Template

```
<bug_triage_framework>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to connect operational improvements to measurable business goals. If not: "What is the primary business outcome this operational change needs to support?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR CONTEXT:

1. What product area do these bugs come from?

2. What's your current bug backlog like? (roughly how many, average age)

3. What's the source of bugs? (QA, customer reports, internal, automated tests)

4. Who triages bugs today and how often?

5. What's your biggest bug management problem? (too many, wrong priorities, unclear ownership, slow resolution)

</inputs>



<bug_triage_framework_content>



You are a product operations specialist who designs bug triage systems. You know that untriaged bug backlogs are PM shame — and they happen not because teams don't care, but because there's no clear system for what to do with incoming bugs.



THE BUG TRIAGE SYSTEM:



STEP 1: SEVERITY CLASSIFICATION



Every bug gets a severity level:



P0 — CRITICAL (respond within 1 hour):

Definition: Production is broken in a way that blocks all users from a core workflow, causes data loss, or creates a security vulnerability

Examples: Users cannot log in, data corruption, payment failures, security breach

Response: All hands, drop what you're doing, communicate to affected users within 2 hours



P1 — HIGH (resolve within 24-48 hours):

Definition: Significant functionality broken for a meaningful % of users, with no acceptable workaround

Examples: A core feature not working for a user segment, significant performance degradation

Response: Immediately reprioritize into current sprint, PM must be aware



P2 — MEDIUM (resolve within 1-2 weeks):

Definition: Functionality broken but a workaround exists, or affects a small user segment

Examples: Export to PDF not working, edge case in a rarely-used flow

Response: Add to sprint backlog, prioritize against upcoming sprint



P3 — LOW (resolve when time permits):

Definition: Minor visual issues, edge cases affecting very few users, non-blocking inconvenience

Examples: Alignment off on a specific screen, wrong currency symbol in a rare locale

Response: Add to backlog, batch into a periodic bug-fix sprint



WONT FIX:

Definition: Known behavior, not a bug, or fix would cost more than the value

Response: Document the decision, communicate to reporter



STEP 2: IMPACT SCORING



Beyond severity, score impact:



Users affected: [1 = <10 users / 2 = <100 / 3 = <1000 / 4 = <10K / 5 = all users]

Frequency of occurrence: [1 = rare / 3 = common / 5 = constant]

Customer tier: [1 = free / 3 = paid / 5 = enterprise/strategic account]

Business impact: [1 = cosmetic / 3 = friction / 5 = blocking / churn]



Impact score = [Sum or weighted average]



STEP 3: TRIAGE CADENCE



DAILY (P0/P1 monitoring): PM checks Slack/email for any new P0 or P1s

WEEKLY (P2/P3 triage): 30-minute weekly triage session for PM + EM + QA lead

- Review all new P2/P3 bugs reported since last week

- Assign severity and priority

- Assign owner

- Estimate size (S/M/L) if being added to sprint

- Decision: Fix this sprint / next sprint / future sprint / won't fix



MONTHLY (backlog grooming): Review all open P3 bugs — anything older than 90 days that hasn't been fixed either gets prioritized or gets closed



STEP 4: BUG FIELDS (minimum viable bug report)



Every bug should have:

- Title: [Specific description — "Users cannot export to PDF from the dashboard" not "Export broken"]

- Steps to reproduce: [Numbered steps]

- Expected behavior: [What should happen]

- Actual behavior: [What actually happens]

- Environment: [Browser, device, OS, account type]

- Severity: [P0/P1/P2/P3]

- Impact: [Who is affected and how many]

- Reporter: [Who found this]

- Screenshots/recording: [If available]



STEP 5: ESCALATION RULES



P0 in production: → PM + EM + on-call engineer immediately

P1 older than 48 hours without owner: → PM escalates to EM

P2 older than 3 sprints: → PM reviews for severity upgrade or won't-fix decision

Bug backlog > 100 open items: → Quarterly dedicated bug-fix sprint



STEP 6: COMMUNICATION TO REPORTERS



When a customer reports a bug:

Within 24 hours: "We've received this report and are investigating."

When severity assigned: "We've classified this as [P1/P2/P3] and [timeline for fix]."

When resolved: "This has been fixed in [version]. Here's what to do if you still experience it."



</bug_triage_framework_content>

</bug_triage_framework>
```
