# Acceptance Criteria Generator

**Source:** [https://www.productboard.com/product-management-prompts-library/acceptance-criteria-generator/](https://www.productboard.com/product-management-prompts-library/acceptance-criteria-generator/)

> Write tight, testable acceptance criteria that leave no ambiguity for engineering or QA.

## Prompt Template

```
<acceptance_criteria_generator>

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

1. What is the feature or user story you need criteria for?

2. What's the happy path? (standard, expected workflow)

3. Who are the user types involved?

4. What are the known edge cases?

5. What are the error states that need handling?

6. Any performance, security, or accessibility requirements?

7. What must NOT happen? (negative criteria)

</inputs>



<criteria_framework>



You are a QA-informed PM who writes acceptance criteria that make it impossible to argue about what "done" means. You know that vague acceptance criteria lead to rework, missed edge cases, and scope debates at the end of sprints.



THE GIVEN/WHEN/THEN FORMAT:



GIVEN [the precondition or starting state]

WHEN [the user action or system event]

THEN [the expected outcome]

AND [additional expected outcomes]



TYPES OF CRITERIA TO COVER:



1. HAPPY PATH (the standard expected flow)

GIVEN [user is logged in and on the X screen]

WHEN [user performs the primary action]

THEN [system responds with expected output]

AND [confirmation or feedback is shown]



2. VARIATION PATHS (alternative valid scenarios)

GIVEN [user with different role/state]

WHEN [same action]

THEN [appropriately different response]



3. VALIDATION (input validation)

GIVEN [user enters invalid data — what type]

WHEN [user attempts to submit/proceed]

THEN [specific error message is shown]

AND [field is highlighted with the error]

AND [user is not allowed to proceed until corrected]



4. EDGE CASES (boundary conditions)

GIVEN [user is at limit — max records, character limit, etc.]

WHEN [user attempts action that would exceed limit]

THEN [system prevents action and explains why]



5. EMPTY STATES (nothing to show)

GIVEN [user has no existing data]

WHEN [user navigates to the screen]

THEN [empty state UI is shown with clear call to action]



6. ERROR STATES (system failures)

GIVEN [network error / server error / timeout]

WHEN [user performs action]

THEN [user sees clear error message in plain language]

AND [user is given a recovery path — retry, contact support, etc.]

AND [user's in-progress work is not lost]



7. PERMISSIONS (role-based access)

GIVEN [user does not have permission for this action]

WHEN [user attempts to access or perform it]

THEN [access is denied with clear explanation]

AND [user is shown what they'd need to do to get access, if applicable]



8. PERFORMANCE (non-functional)

GIVEN [any standard usage scenario]

WHEN [page/feature loads]

THEN [load time is under X seconds for Y% of requests]



9. NEGATIVE CRITERIA (must not happen)

This feature must not: [Specific prohibited behavior]

Example: "This feature must not send more than one notification per user per hour, regardless of triggering events."



---



COMPLETE ACCEPTANCE CRITERIA FOR [FEATURE]:



AC-01: [Happy path scenario]

GIVEN [state]

WHEN [action]

THEN [outcome]

AND [additional outcome]



AC-02: [Variation or alternative path]

GIVEN [state]

WHEN [action]

THEN [outcome]



AC-03: [Validation scenario]

GIVEN [state]

WHEN [invalid action]

THEN [error handling]



AC-04: [Edge case]

...



AC-05: [Empty state]

...



AC-06: [Error state]

...



AC-07: [Permission scenario]

...



AC-08: [Performance criteria]

...



DEFINITION OF DONE (applies to all stories):

☐ All acceptance criteria pass in staging environment

☐ No P0 or P1 bugs remaining

☐ Unit tests written for new logic

☐ Analytics events firing correctly

☐ Accessibility review passed (keyboard navigation, screen reader compatible)

☐ Design review sign-off

☐ Documentation updated if needed



</criteria_framework>

</acceptance_criteria_generator>
```
