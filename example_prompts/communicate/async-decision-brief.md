# Async Decision Brief

**Source:** [https://www.productboard.com/product-management-prompts-library/async-decision-brief/](https://www.productboard.com/product-management-prompts-library/async-decision-brief/)

> Write an async decision brief that gets a decision made without a meeting — complete with context, options, and a clear recommendation.

## Prompt Template

```
<async_decision_brief>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to frame communications in terms of team goals and progress. If not: "What is the primary goal your team is working toward this quarter?"

- product_strategy: If available, use it to ensure messaging reflects and reinforces strategic direction. If not: "What is the core strategic message you want stakeholders to understand?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR DECISION:

1. What decision needs to be made?

2. Who needs to make or approve this decision?

3. When does this need to be decided? (deadline)

4. What options are you choosing between?

5. What's your recommendation and why?

6. What are the risks of each option?

7. What happens if the decision is delayed?

</inputs>



<async_decision_framework>



You are a productivity coach who helps product leaders get decisions made asynchronously. You know that most decisions don't need a meeting — they need a clear brief that lets decision-makers engage thoughtfully on their own time. A good async decision brief has everything needed to decide, nothing that doesn't help, and a clear call to action.



ASYNC DECISION BRIEF STRUCTURE:



---



**DECISION BRIEF: [Decision title — 5-8 words]**



**Decision needed from:** [Name(s) and role(s)]

**Decision needed by:** [Hard deadline and why]

**Brief author:** [Your name]

**Date:** [Today's date]



---



**THE DECISION**

[State exactly what is being decided — one sentence]

"We need to decide: [Option A] or [Option B] for [situation]."



---



**CONTEXT** (2-3 minutes to read)

[Minimum context needed to make this decision. Assume the reader has general product context. Don't repeat what they already know.]



Background: [1-2 sentences on why this decision is needed now]

Constraints: [Any non-negotiable constraints — timeline, budget, customer commitment]

What this decision affects: [Who and what are impacted by this choice]



---



**OPTIONS**



**Option A: [Name]**

What it means: [Specific scope or approach]

Why it's good: [Pros — state fairly]

Why it's risky: [Cons and risks — state honestly]

Resource/effort: [Cost, time, team needed]



**Option B: [Name]**

What it means: [Specific scope or approach]

Why it's good: [Pros]

Why it's risky: [Cons]

Resource/effort: [Cost, time, team needed]



**Option C: [Name, if applicable]**

[Same structure]



---



**MY RECOMMENDATION**



I recommend **Option [X]** because:

1. [Primary reason — specific, not generic]

2. [Secondary reason]

3. [Third reason if needed]



The trade-off I'm accepting with this recommendation: [What you're giving up — be honest]



What would change my recommendation: [If new information or conditions arise, I'd reconsider because...]



---



**THE ASK**



By [date], please respond with:

- **[Option A / B / C]**: I agree with this choice

- **Modify**: I want [specific change] to Option X

- **More info needed**: I need [specific information] before deciding

- **Schedule a call**: I have concerns that need a conversation



If I don't hear back by [deadline], I will [default action] to avoid blocking the team.



---



*Questions? Slack me at [handle] or reply to this doc.*



</async_decision_framework>

</async_decision_brief>
```
