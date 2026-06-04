# Feature Discoverability Audit

**Source:** [https://www.productboard.com/product-management-prompts-library/feature-discoverability-audit/](https://www.productboard.com/product-management-prompts-library/feature-discoverability-audit/)

> Audit how easily users can find and understand key features — then fix the discoverability gaps that are hiding value.

## Prompt Template

```
<discoverability_audit>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to anchor design decisions to specific user goals and contexts. If not: "Who is the primary user — their role and what they're trying to accomplish?"

- customer feedback: If available, look at the last 30 days of feedback to surface known discoverability issues. If not: "What is the top discoverability complaint you hear from users?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR FEATURE(S):

1. Which features are you concerned about discoverability for?

2. What % of users have used each feature? (adoption rate)

3. Do users who discover and use these features retain better? (if known)

4. Where are these features currently located in the product?

5. How do users currently find out about these features? (exploration, onboarding, email, colleague)

6. What have you tried to improve discoverability? What happened?

</inputs>



<discoverability_framework>



You are a product UX specialist focused on feature adoption. You know that a feature no one discovers might as well not exist — and many products have high-value features that sit unused because users don't know about them. Discoverability is a product problem, not a marketing problem.



PHASE 1: DISCOVERABILITY DIAGNOSTIC



For each feature, assess across 4 discoverability dimensions:



AWARENESS: Do users know this feature exists?

Test: Ask 5 users to describe what the product can do. Do they mention this feature?

Score (1-5): 1 = no one knows it exists, 5 = most users are aware



LOCATION: Can users find it when they go looking?

Test: Ask 5 users to find [feature] without help. How long does it take?

Score (1-5): 1 = users can't find it even looking, 5 = immediately visible



COMPREHENSION: Do users understand what it does from the label/entry point?

Test: Show users the feature name/icon without context. Can they guess what it does?

Score (1-5): 1 = completely unclear, 5 = self-explanatory



ACTIVATION: Once users find it, do they successfully use it?

Test: Measure first-time task success for this feature.

Score (1-5): 1 = most first-time users fail or abandon, 5 = almost all succeed



Overall discoverability score: [Average of 4 dimensions for each feature]

Lowest-scoring dimension = the primary problem to fix



PHASE 2: ROOT CAUSE ANALYSIS



For features with discoverability score below 3:



AWARENESS PROBLEMS:

- Feature is never surfaced to users in relevant context

- Feature is only accessible through a non-obvious menu path

- Feature isn't mentioned in onboarding or empty states

Fixes: In-context promotion, tooltips at relevant moments, onboarding mention, email announcement



LOCATION PROBLEMS:

- Feature is nested 3+ levels deep in navigation

- Feature uses a non-standard icon or metaphor

- Feature is in a logical but unexpected location

Fixes: Navigation restructure, search/command palette, contextual deep-links, keyboard shortcuts



COMPREHENSION PROBLEMS:

- Feature name is internal jargon (e.g., "Workspaces," "Pods," "Streams")

- Icon doesn't communicate the feature clearly

- Tooltip or description is missing or unhelpful

Fixes: Rename feature with user language, improve icon, add descriptive tooltip, add examples



ACTIVATION PROBLEMS:

- Feature has empty state with no guidance

- Feature requires setup that's unclear

- Feature has a complex first-use experience

Fixes: Guided first use, sample data, shorter path to first value



PHASE 3: DISCOVERABILITY IMPROVEMENT PLAN



For each feature with discoverability issues:



FEATURE: [Name]

Primary discoverability gap: [Awareness / Location / Comprehension / Activation]

Root cause: [Specific reason]



Improvements to test:

Quick win (1-3 days): [Specific copy or UI change]

Medium-term (1-2 weeks): [More significant change]

Measurement: [How you'll know discoverability improved]

Success target: [Adoption rate increase from X% to Y%]



PHASE 4: SYSTEMIC FIXES



Beyond individual features, are there systemic discoverability improvements?



Navigation audit: [Does the nav structure make the product's capabilities obvious?]

Search/command palette: [Would a global search dramatically improve discoverability?]

Onboarding gaps: [Which high-value features are never mentioned in onboarding?]

Contextual surfacing: [Where in the user journey should each feature be introduced?]



</discoverability_framework>

</discoverability_audit>
```
