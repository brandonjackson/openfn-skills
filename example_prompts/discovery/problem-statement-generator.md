# Problem Statement Generator

**Source:** [https://www.productboard.com/product-management-prompts-library/problem-statement-generator/](https://www.productboard.com/product-management-prompts-library/problem-statement-generator/)

> Write a problem statement sharp enough to align a team, guide ideation, and prevent scope creep.

## Prompt Template

```
<problem_statement_generator>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use existing feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR SITUATION:

1. What user behavior or complaint prompted this investigation?

2. Who specifically is affected? (user segment, use case)

3. What data or evidence do you have that this is a real problem?

4. What have you already tried or considered as solutions?

5. What constraints exist? (technical, resource, strategic)

6. What does success look like from the user's perspective?

</inputs>



<problem_statement_framework>



You are a product discovery coach who has watched teams waste months building the wrong thing because they jumped from symptoms to solutions. Your job: help write a problem statement that is specific enough to align a team, but open enough to allow creative solutions.



PHASE 1: PROBLEM DEFINITION AUDIT



Test the problem as stated against these failure modes:



SOLUTION-IN-DISGUISE: "The problem is that we don't have feature X"

Real problem statements describe situations, not missing features.

Is the current framing a solution in disguise? [Yes/No + how to reframe]



TOO BROAD: "Users struggle to be productive"

A problem statement should be specific enough that you can't solve it with just any feature.

Is this too broad? [Yes/No + how to narrow]



TOO NARROW: "Users can't find the filter button"

A problem statement should be open enough to allow multiple solution approaches.

Is this too narrow? [Yes/No + how to widen]



SYMPTOM NOT CAUSE: Solving for the symptom misses the root problem.

Is this addressing symptoms? [Yes/No + the underlying cause]



PHASE 2: PROBLEM STATEMENT COMPONENTS



Build the statement from these elements:



WHO: [Specific user segment with context]

Example: "Enterprise account managers who manage 50+ accounts"

Not: "Users" or "customers"



SITUATION: [The specific scenario or context where the problem occurs]

Example: "When preparing for a quarterly business review"

Not: "In general" or "when using our product"



THE STRUGGLE: [What they're trying to do and what's stopping them]

Example: "Trying to get a consolidated view of account health, but spend 3+ hours pulling data from 4 different systems"

Not: "Can't do what they need"



THE CONSEQUENCE: [What happens because of this struggle — business and emotional impact]

Example: "Leading to inconsistent reviews, missed at-risk signals, and QBR prep consuming most of their week"

Not: "It's frustrating"



THE INSIGHT: [The non-obvious root cause or observation that makes this tractable]

Example: "The data exists but is scattered across systems with no single source of truth"

Not: Required — but when present, makes the statement more powerful



PHASE 3: PROBLEM STATEMENT VERSIONS



Draft 3 versions at different levels:



THE TWEET VERSION (1 sentence, 15-20 words):

"[User] struggles to [accomplish goal] when [situation], leading to [consequence]."



THE STANDUP VERSION (2-3 sentences):

Expands on who, what, when, consequence. What you'd say at sprint planning.



THE STRATEGY DOC VERSION (1 paragraph):

Full problem statement with evidence, context, scope, and what's out of scope.



PHASE 4: ALIGNMENT QUESTIONS



Use these questions to test alignment with stakeholders:



1. "If we solved this perfectly, what would users do differently?"

2. "What's the minimum version of this problem we need to solve?"

3. "Who is most affected — and is that who we're optimizing for?"

4. "What have users tried on their own to work around this?"

5. "What would we NOT be solving for if we nailed this?"



PHASE 5: THE RECOMMENDED PROBLEM STATEMENT



[Write the recommended version with brief rationale for the framing choices]



Why this framing works:

- [Specific choice 1 and why it matters]

- [Specific choice 2 and why it matters]



What's explicitly out of scope:

- [Related problem we're NOT solving]

- [User segment we're NOT optimizing for]



</problem_statement_framework>

</problem_statement_generator>
```
