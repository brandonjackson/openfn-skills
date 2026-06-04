# Lean Feature Brief

**Source:** [https://www.productboard.com/product-management-prompts-library/lean-feature-brief/](https://www.productboard.com/product-management-prompts-library/lean-feature-brief/)

> Write a one-page lean feature brief for smaller features that don't need a full PRD but need clear direction.

## Prompt Template

```
<lean_feature_brief>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to ensure documentation aligns with and supports strategic priorities. If not: "What strategic goal does this work serve?"

- personas: If available, use them to tailor writing style and content to the target audience. If not: "Who is the primary audience for this document — their role and what they need to do with it?"

- okrs: If available, use them to connect scope and success criteria to measurable goals. If not: "What does success look like for this work in measurable terms?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR FEATURE:

1. Feature name: [Name]

2. What does it do? (one sentence)

3. Who is it for? (specific user type)

4. What problem does it solve? (one sentence)

5. What's the user story? (As a ___, I want to ___ so that ___)

6. What are the acceptance criteria? (minimum 3, testable)

7. What are we explicitly NOT building? (scope guardrails)

8. How will we know it's working? (metric or signal)

9. Any design mockups or wireframes? (link or description)

10. Any technical notes or constraints? (if known)

11. Priority: [P0/P1/P2] | Estimated size: [S/M/L]

</inputs>



<lean_brief_framework>



You are a PM coach who helps teams move fast on smaller features without drowning in documentation overhead. The lean feature brief is the minimum viable documentation for features that are clear enough to build but small enough that a full PRD would be overkill.



Lean briefs are for:

- Improvements to existing features (not new paradigms)

- Bug fixes that have a clear correct answer

- Clear scope, single team, no cross-functional dependencies

- 1-2 sprint build (not a quarter-long project)



If a feature needs a kickoff brief, cross-team alignment, or has significant user research behind it — use a full PRD, not a lean brief.



---



# Feature Brief: [Feature Name]



**Priority:** [P0/P1/P2] | **Size:** [S/M/L] | **Owner:** [PM name]

**Squad:** [Team] | **Target sprint:** [Sprint or date]



---



## What & Why (60 seconds)



**What it does:** [One sentence]

**Who it's for:** [Specific user — not "users" or "customers"]

**Problem it solves:** [One sentence — user pain or business outcome]

**Why now:** [One sentence — priority rationale]



---



## User Story



As a [specific user], I want to [specific action] so that [specific outcome].



---



## Acceptance Criteria



Must pass all of the following for this to be complete:



- [ ] GIVEN [state] WHEN [action] THEN [outcome]

- [ ] GIVEN [state] WHEN [action] THEN [outcome]

- [ ] GIVEN [error state] WHEN [action] THEN [error is handled]

- [ ] [Performance or edge case criterion]



---



## Explicitly Out of Scope



- [Thing we're NOT doing in this version]

- [Thing we're NOT doing in this version]



---



## Success Signal



We'll know this worked when: [Specific metric, behavior, or outcome we expect to see after shipping]



---



## Design



[Link to mockup / wireframe / design system component]

Or: [Brief description of the UI approach if no mockup yet]



---



## Technical Notes



[Known constraints, API dependencies, performance considerations — from engineer input if available]



---



## Open Questions (resolve before building)



- [Question] — Owner: [Name] — By: [Date]



---



*Ready to build when open questions are resolved and design is approved.*



</lean_brief_framework>

</lean_feature_brief>
```
