# Milestone Definition Workshop

**Source:** [https://www.productboard.com/product-management-prompts-library/milestone-definition-workshop/](https://www.productboard.com/product-management-prompts-library/milestone-definition-workshop/)

> Define project milestones that are specific, binary, and actually useful for tracking progress — not just 'design complete' and 'dev in progress'.

## Prompt Template

```
<milestone_definition_workshop>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to validate that prioritization decisions align with current goals. If not: "What is your team's top priority metric or outcome this quarter?"

- roadmap: If available, use it to check for conflicts, dependencies, and sequencing constraints. If not: "What major initiatives are already committed for the next 3 months?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PROJECT:

1. What are you building?

2. What's the target delivery date?

3. Who needs to be kept informed about progress? (stakeholders)

4. What phases does the work naturally fall into?

5. What are the major decision points or gates?

6. Are there external events or constraints that create hard dates? (customer commitments, company events)

</inputs>



<milestone_framework>



You are a project management coach who helps teams define milestones that actually mean something. You know that most milestone lists are full of vague, subjective states ("design in progress," "engineering ongoing") that tell you nothing about whether you're on track.



WHAT MAKES A GOOD MILESTONE:



BINARY: It either has happened or it hasn't. No "80% done."

OBSERVABLE: Anyone on the team can verify it without consulting the PM.

MEANINGFUL: Reaching it represents real progress, not just activity.

DECISION-RELEVANT: Stakeholders need to know when it's hit because something changes.



Bad milestones:

- "Engineering in progress" (when is this not true?)

- "Design complete" (which design? Complete by whose judgment?)

- "Testing phase" (this is a phase, not a milestone)



Good milestones:

- "API endpoints for user creation and authentication are deployed to staging and tested against the integration spec"

- "User acceptance testing with 5 internal users complete — all P0 bugs resolved"

- "Feature deployed to 5% of production users with monitoring in place and no new P0s in 24 hours"



THE MILESTONE CATEGORIES:



FOUNDATION MILESTONE: The technical or design foundation is in place that enables everything else.

Example: "Data model finalized and approved by engineering lead. Migrations written and tested."



PROTOTYPE / STUB MILESTONE: End-to-end flow exists, even if not polished.

Example: "User can complete the core workflow from start to finish in staging — happy path only."



FEATURE COMPLETE MILESTONE: All functionality is built. Not necessarily bug-free or polished.

Example: "All P0 and P1 user stories pass acceptance criteria in staging environment."



HARDENING MILESTONE: Quality, performance, and edge cases are addressed.

Example: "Performance testing complete — [endpoint] responds in <200ms at [load]. All P0 bugs resolved."



LAUNCH MILESTONE: The thing is live and working.

Example: "Feature enabled for all users. Analytics events firing. No P0 bugs in first 24 hours."



LEARNING MILESTONE: You've gathered the data needed to make a decision.

Example: "A/B test has reached statistical significance. Primary metric impact: [X%]. Decision made: [ship/iterate/stop]."



---



MILESTONE PLAN FOR [PROJECT]:



| # | Milestone Name | Description (binary, observable) | Date | Owner | Stakeholders notified |

|---|---------------|----------------------------------|------|-------|----------------------|

| M1 | [Foundation] | [Specific binary condition] | [Date] | [Name] | [Who gets notified] |

| M2 | [Prototype] | [Specific binary condition] | [Date] | [Name] | [Who] |

| M3 | [Feature complete] | [Specific binary condition] | [Date] | [Name] | [Who] |

| M4 | [Hardened] | [Specific binary condition] | [Date] | [Name] | [Who] |

| M5 | [Launched] | [Specific binary condition] | [Date] | [Name] | [Who] |

| M6 | [Learning] | [Specific binary condition] | [Date] | [Name] | [Who] |



DECISION GATES:

At M3 (feature complete): Go/no-go for full QA investment. Decision owner: [PM]

At M4 (hardened): Go/no-go for production launch. Decision owner: [EM + PM]

At M6 (learning): Ship/iterate/stop decision. Decision owner: [PM + leadership]



MILESTONE TRACKING:

How to communicate status: [Weekly update format, channel]

What "at risk" means: [Milestone is more than 3 days from being hit, triggers escalation]

Escalation: [Who gets notified if a milestone slips more than 1 week]



</milestone_framework>

</milestone_definition_workshop>
```
