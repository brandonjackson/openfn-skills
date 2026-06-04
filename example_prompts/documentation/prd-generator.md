# PRD Generator

**Source:** [https://www.productboard.com/product-management-prompts-library/prd-generator/](https://www.productboard.com/product-management-prompts-library/prd-generator/)

> Generate a comprehensive PRD that engineering teams trust — with clear problem framing, user stories, requirements, and explicit trade-offs.

## Prompt Template

```
<prd_generator>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to ensure documentation aligns with and supports strategic priorities. If not: "What strategic goal does this work serve?"

- personas: If available, use them to tailor writing style and content to the target audience. If not: "Who is the primary audience for this document — their role and what they need to do with it?"

- okrs: If available, use them to connect scope and success criteria to measurable goals. If not: "What does success look like for this work in measurable terms?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<pm_inputs>

Answer these questions before generating:



CORE CONTEXT:

1. What are you building? (feature/product in plain language)

2. What user problem does this solve? (pain point, not solution)

3. Who are the target users? (specific segments with characteristics)

4. What's the current state? (baseline metrics, user complaints, workarounds)

5. What does success look like? (specific outcomes and metrics)

6. Why now? (market timing, competitive pressure, strategic priority)



RESEARCH & EVIDENCE:

7. What user research validates this problem?

8. What have you tried before, if anything?

9. What do competitors do in this space?



CONSTRAINTS:

10. Hard deadline and why?

11. Team capacity: (size, any bottlenecks)

12. Technical constraints to acknowledge: (legacy systems, architecture limits)



SCOPE:

13. What's explicitly in scope?

14. What's explicitly out of scope? (often more important than in-scope)

</pm_inputs>



<prd_framework>



You are a senior PM known for writing PRDs that engineering teams actually read. Your PRDs anticipate questions before they're asked, surface hidden complexity early, and make trade-offs explicit.



Generate a complete PRD using this structure:



---



# [Feature Name] — Product Requirements Document



**Status:** Draft | **Author:** [PM] | **Date:** [Date]

**Engineering Lead:** [Name] | **Design Lead:** [Name]

**Target launch:** [Date] | **Squad:** [Team name]



---



## TL;DR (Executive Summary)

[3-4 sentences: Problem, solution, why now, expected outcome. Someone who reads only this should understand the feature.]



---



## Problem Statement



**The user problem:**

[Specific, observable problem. Not "users want X" but "users currently do Y which takes Z hours and results in W errors."]



**Who is most affected:**

[Primary segment with specifics. Include size of affected population if known.]



**Evidence this is real:**

- [Data point 1 — quantitative]

- [Research finding — qualitative]

- [Business impact — revenue, churn, support cost]



**What happens if we don't solve this:**

[Be honest. Loss of customers? Competitive disadvantage? Support burden?]



---



## Goals & Success Metrics



**Primary goal:** [One clear goal statement]



| Metric | Current | Target | Timeframe |

|--------|---------|--------|-----------|

| [Primary metric] | [Baseline] | [Target] | [When measured] |

| [Secondary metric] | [Baseline] | [Target] | [When measured] |



**Non-goals (explicitly NOT trying to achieve):**

- [Thing we're not measuring]

- [Problem we're not solving]



---



## User Stories



**Primary user:** [Persona/segment]



As a [user type], I want to [action/capability] so that [outcome/benefit].



Priority 1 (Must have):

- As a [user], I want [capability] so that [outcome].

- As a [user], I want [capability] so that [outcome].



Priority 2 (Should have):

- As a [user], I want [capability] so that [outcome].



Priority 3 (Nice to have, if capacity):

- As a [user], I want [capability] so that [outcome].



---



## Solution Overview



**Approach:**

[Plain language description of what we're building and why this approach over alternatives.]



**Alternative approaches considered:**

| Approach | Pros | Cons | Why rejected |

|----------|------|------|--------------|

| [Option A] | [+] | [-] | [Reason] |

| [Option B] | [+] | [-] | [Reason] |



---



## Functional Requirements



### Must Have (P0 — blocking launch)



**[Requirement category 1]**

- REQ-01: [Specific, testable requirement]

- REQ-02: [Specific, testable requirement]



**[Requirement category 2]**

- REQ-03: [Specific, testable requirement]

- REQ-04: [Specific, testable requirement]



### Should Have (P1 — launch with if capacity)



- REQ-05: [Requirement]

- REQ-06: [Requirement]



### Nice to Have (P2 — future iteration)



- REQ-07: [Requirement]



---



## Non-Functional Requirements



**Performance:** [Load time targets, response time, throughput]

**Security:** [Auth requirements, data handling, compliance]

**Accessibility:** [WCAG level, specific accessibility requirements]

**Reliability:** [Uptime requirements, error rate tolerance]

**Scalability:** [Expected load, growth trajectory]



---



## Edge Cases & Error States



| Scenario | Expected Behavior | Priority |

|----------|------------------|---------|

| [Edge case] | [How system should respond] | [High/Med/Low] |

| [Error state] | [Error message, recovery path] | [High/Med/Low] |



---



## Open Questions



| Question | Owner | Decision needed by | Status |

|----------|-------|-------------------|--------|

| [Question] | [Name] | [Date] | Open |



---



## Out of Scope (Explicitly)



The following are explicitly NOT in scope for this version:

- [Out of scope item 1] — Rationale: [Why deferred]

- [Out of scope item 2] — Rationale: [Why deferred]



---



## Dependencies



- [Dependency] — Team: [Name] — Status: [Confirmed/TBD] — Risk: [High/Med/Low]



---



## Launch Plan



**Rollout approach:** [Feature flag, % rollout, segment-based, full launch]

**Beta group (if applicable):** [Who gets early access]

**Monitoring plan:** [What metrics to watch in first 2 weeks]

**Rollback criteria:** [Specific conditions that trigger rollback]



</prd_framework>

</prd_generator>
```
