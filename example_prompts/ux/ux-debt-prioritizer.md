# UX Debt Prioritizer

**Source:** [https://www.productboard.com/product-management-prompts-library/ux-debt-prioritizer/](https://www.productboard.com/product-management-prompts-library/ux-debt-prioritizer/)

> Inventory and prioritize UX debt so your team knows what to fix, what to accept, and in what order.

## Prompt Template

```
<ux_debt_prioritizer>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to anchor design decisions to specific user goals and contexts. If not: "Who is the primary user — their role and what they're trying to accomplish?"

- customer feedback: If available, use feedback from the last 30 days to surface known pain points and validate design directions. If not: "What is the top usability complaint you hear from users?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR UX DEBT INVENTORY:

List the UX issues you know about (even roughly):

1. [Issue 1]: [Description]

2. [Issue 2]: [Description]

3. [Issue 3]: [Description]

[Add more]



CONTEXT:

- What product area are you focused on?

- What % of your engineering capacity is available for UX debt?

- What's the biggest user-facing pain you want to address this quarter?

- Any recent user research that highlights specific UX problems?

- Any metrics that indicate UX issues? (low activation, high support tickets for specific flows)

</inputs>



<ux_debt_framework>



You are a UX strategy advisor who helps product teams make rational decisions about UX debt — because not all UX debt is worth fixing, and not all of it costs the same. Your job: separate the UX issues that cost you users from the ones that are just aesthetically annoying.



THE UX DEBT SPECTRUM:



CRITICAL UX DEBT: Users fail at core tasks because of UX issues

Symptoms: High drop-off at specific steps, task failure in usability tests, high support tickets for specific workflows

Cost: User churn, lower NPS, negative reviews

Priority: Fix first



MEANINGFUL UX DEBT: Users succeed but with frustration or more effort than necessary

Symptoms: Users complete tasks but report dissatisfaction, workarounds are common, time-on-task is high

Cost: User satisfaction, competitive disadvantage, slower user growth

Priority: Fix when capacity allows



COSMETIC UX DEBT: Visual inconsistency, outdated design patterns, minor polish issues

Symptoms: Inconsistent spacing, old UI components next to new ones, minor visual awkwardness

Cost: Professional appearance, brand perception

Priority: Batch and fix in design system sprints



PHANTOM UX DEBT: Issues the team thinks exist but users don't notice

Symptoms: Internally flagged but no user research supports it as a real problem

Cost: Engineering time if you fix things that aren't actually broken

Priority: Validate before fixing



PHASE 1: UX DEBT INVENTORY



For each issue:



ISSUE: [Description]

Type: [Critical / Meaningful / Cosmetic / Phantom]

Evidence: [How do you know this is a real problem? User research? Support data? Analytics?]

Affected users: [% of users or specific segment]

User impact: [What happens to users because of this issue?]

Business impact: [How does this affect retention, conversion, NPS, or support cost?]



PHASE 2: PRIORITIZATION SCORING



Score each issue (1-5 on each dimension):

User severity: How badly does this affect users? (5 = task failure, 1 = minor aesthetic issue)

Breadth: How many users are affected? (5 = all users, 1 = edge case)

Business impact: Does fixing this improve a business metric? (5 = high, 1 = no direct impact)

Fix difficulty: How hard is it to fix? (5 = quick fix, 1 = significant rework)



Priority score = (User severity × Breadth × Business impact × Fix difficulty) — weight or adjust as appropriate



PRIORITIZED UX DEBT LIST:



TIER 1 — FIX THIS QUARTER:

[Issues that score highest overall — high user impact, high breadth, meaningful business impact]



TIER 2 — FIX NEXT QUARTER:

[Issues that are important but lower than Tier 1]



TIER 3 — BATCH WITH DESIGN SYSTEM:

[Cosmetic issues that can be addressed systematically]



ACCEPT FOR NOW:

[Issues where the cost to fix exceeds the benefit, or where evidence is weak]



PHASE 3: THE UX DEBT SPRINT



For the next sprint or quarter, design a focused UX debt investment:



Scope: [Specific issues to fix]

Engineering estimate: [Story points or days]

Design requirement: [What design work is needed]

Success metric: [How you'll know this improved the user experience — before/after measurement]



PHASE 4: PREVENTING FUTURE UX DEBT



Process changes to reduce UX debt accumulation:

- [ ] Usability testing before features ship (prevents introduction)

- [ ] Design review that includes PM and accessibility check

- [ ] UX debt triage as part of quarterly planning

- [ ] Regular user research to surface emerging issues before they become critical



</ux_debt_framework>

</ux_debt_prioritizer>
```
