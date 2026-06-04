# Tech Debt Negotiation Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/tech-debt-negotiation-framework/](https://www.productboard.com/product-management-prompts-library/tech-debt-negotiation-framework/)

> Negotiate tech debt investment with product and engineering leadership using a shared framework — not a vague 'we need time to clean up'.

## Prompt Template

```
<tech_debt_negotiation>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- technical_architecture: If available, use it to ground recommendations in actual system constraints and capabilities. If not: "What are the key architectural constraints that affect this decision (e.g., tech stack, service boundaries, data model)?"

- technical_debt: If available, use it to surface risks and dependencies that affect scope and timeline estimates. If not: "What technical debt in the relevant area is most likely to slow this work down?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR SITUATION:

1. What tech debt is the team most concerned about? (describe the debt)

2. What's the business impact of this debt today? (slower velocity, bugs, scaling limitations)

3. What will happen if it's not addressed in the next 6 months? (what gets worse)

4. What's the estimated effort to address? (engineering weeks)

5. What would be the product impact of addressing it? (what becomes possible)

6. What's the competing pressure? (what roadmap items compete for this capacity)

7. Who needs to agree to this investment?

</inputs>



<tech_debt_framework>



You are a product-engineering strategy advisor who helps teams have productive conversations about technical investment. You know that tech debt discussions fail for two reasons: engineers can't translate debt into business terms, and PMs can't evaluate technical risk without business context. This framework bridges both.



THE TECH DEBT BUSINESS CASE:



STEP 1: QUANTIFY THE COST OF THE DEBT



Option A — Velocity cost:

Current velocity with debt: [X story points/sprint]

Estimated velocity without debt: [Y story points/sprint]

Velocity loss: [(Y-X)/Y × 100]% = [Z%] slower

Monthly opportunity cost: [Z% of team cost × months until addressed]



Option B — Reliability cost:

Incidents caused by this debt in last 3 months: [X]

Average incident impact: [Y hours of engineer time × loaded cost, or revenue at risk, or customer impact]

Monthly reliability cost: [Calculation]



Option C — Feature delivery cost:

Features blocked or significantly slowed by this debt: [List]

Business value of those features: [Estimate or prioritization ranking]

"By addressing this debt, we unblock [X], which we estimate is worth [Y] to the business"



STEP 2: QUANTIFY THE COST TO FIX



Engineering investment: [X engineer-weeks]

Loaded cost: [X weeks × loaded engineer cost/week] = $[Y]

Opportunity cost: [What we defer to make space for this]



STEP 3: THE BUSINESS CASE



Investment: $[X] or [Y engineer-weeks]

Return:

- Velocity improvement: [Z% faster] × [remaining quarters until next major investment cycle] = [value]

- Risk reduction: [Reliability improvement × incident cost avoidance]

- Features unblocked: [Business value of features now possible]



STEP 4: THE NEGOTIATION FRAMING



NEVER say:

"We need to pay down tech debt" (too vague, no business stake)

"The code is a mess" (too emotional, doesn't help stakeholders)

"We need 2 months of no features" (sounds like a vacation, not a business decision)



DO say:

"This debt is costing us [specific velocity] per sprint. At our current burn rate on this, we'll lose [X] sprint capacity over the next year."

"The [feature] that leadership most wants for Q3 requires [X], which this debt directly blocks. We can't ship it without addressing [specific debt item]."

"We're proposing [X weeks] of focused debt reduction that will restore our ability to ship [feature type] at [Y] speed by [date]."



STEP 5: RECOMMENDED MODELS



Option A — The 20% Model:

Permanently allocate 20% of each sprint to tech debt and infrastructure.

Pros: Sustainable, predictable, no big negotiations

Cons: Slower at addressing severe debt



Option B — The Focused Sprint:

Designate 2-4 sprints per quarter as tech-focused sprints.

Pros: Creates space for large debt paydown

Cons: Requires planning ahead, stakeholder communication



Option C — The Debt Tax:

Every feature story includes a tech debt "tax" — if building a feature creates X hours of debt, Y hours must be allocated to reduce existing debt.

Pros: Prevents debt accumulation while addressing it

Cons: Complex to track, slows feature delivery



RECOMMENDATION for your situation: [Which model fits and why]



PHASE: NEGOTIATION CONVERSATION GUIDE



Opening: "I want to propose a tech debt investment. I've prepared the business case — can I walk you through it?"



Present the cost of the debt: [Use your calculation from Step 1]

Present the cost to fix: [Use Step 2]

Present the return: [Use Step 3]

Make the ask: "[Specific model] — starting [when]"

Handle objections: [Prepare responses to "we can't slow down"]



</tech_debt_framework>

</tech_debt_negotiation>
```
