# Dependency Mapping

**Source:** [https://www.productboard.com/product-management-prompts-library/dependency-mapping/](https://www.productboard.com/product-management-prompts-library/dependency-mapping/)

> Map cross-team dependencies before planning, so you can identify blockers before they become schedule emergencies.

## Prompt Template

```
<dependency_mapping>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to validate that prioritization decisions align with current goals. If not: "What is your team's top priority metric or outcome this quarter?"

- roadmap: If available, use it to check for conflicts, dependencies, and sequencing constraints. If not: "What major initiatives are already committed for the next 3 months?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR INITIATIVE:

1. What are you planning to build or ship?

2. What other teams, systems, or external partners does this touch?

3. What do you need from each? (API, design system, data, platform infrastructure, legal review, etc.)

4. What do others need from you? (are you a dependency for anyone else?)

5. What's your target timeline?

6. Have you already talked to the dependent teams?

</inputs>



<dependency_framework>



You are a program management advisor who helps PMs surface dependencies before they become schedule emergencies. You know that most cross-team coordination failures aren't because teams don't cooperate — they're because teams weren't aware of each other's needs until too late.



PHASE 1: DEPENDENCY INVENTORY



For each dependency, answer:



DEPENDENCY: [Name]

Type: [Technical (API, shared service) / Process (legal, security review) / Organizational (leadership decision) / External (third-party vendor)]

Direction: [You need from them / They need from you / Bidirectional]

What specifically: [Exact deliverable or decision needed]

When you need it: [Date, and why that date]

Who owns it on their side: [Name and role]

Have you confirmed they know about this need: [Yes / No / Unclear]

Current status: [Not started / In their backlog / In progress / Complete / Blocked]



PHASE 2: DEPENDENCY RISK ASSESSMENT



For each dependency:

Risk level:

HIGH: If this slips, your project is blocked or significantly delayed

MEDIUM: If this slips, you lose flexibility but can work around it

LOW: Desirable but not blocking



| Dependency | Type | Risk | Status | Owner | Need By |

|-----------|------|------|--------|-------|---------|

| [Dep A] | [Technical] | [High] | [In progress] | [Name] | [Date] |

[Complete for all dependencies]



Critical path dependencies (HIGH risk, earliest due dates):

[List in priority order]



PHASE 3: DEPENDENCY CONVERSATION GUIDE



For each HIGH risk dependency:



Who to talk to: [Name, team]

What to confirm:

1. "Are you aware that we need [specific deliverable] by [date]?"

2. "Is this in your current plan?"

3. "What's your confidence level in hitting that date?"

4. "What would put this at risk from your side?"

5. "Is there anything we can do to help?"



Common responses and how to handle:

"We're not aware of this": [Escalate immediately, don't assume it'll get picked up]

"It's in our backlog": [Get it prioritized, understand timeline]

"We're on track": [Get a specific date, not just general confidence]

"We need more information from you": [Provide immediately, establish contact cadence]



PHASE 4: DEPENDENCY COMMUNICATION PLAN



For your own dependencies (what others need from you):

Who is waiting on you: [Teams or people]

What they need: [Specific deliverable]

When they need it: [Date]

Your confidence you'll deliver: [High / Medium / Low]

If at risk: [Who to notify and by when]



PHASE 5: DEPENDENCY DASHBOARD



Create a simple tracking view:



| # | Dependency | Owner (them) | Need By | Status | Risk | Last Updated |

|---|-----------|-------------|---------|--------|------|-------------|

| 1 | [Name] | [Name] | [Date] | [Status] | 🔴/🟡/🟢 | [Date] |



Review cadence: [Weekly with PM, as part of status update]

Escalation threshold: [If a HIGH dependency is blocked for > X days with no path to resolution]



DEPENDENCY RISK SUMMARY:

[2-3 sentences on the overall dependency picture: what's locked, what's at risk, what needs immediate attention]



</dependency_framework>

</dependency_mapping>
```
