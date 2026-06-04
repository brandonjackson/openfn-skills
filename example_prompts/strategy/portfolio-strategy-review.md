# Portfolio Strategy Review

**Source:** [https://www.productboard.com/product-management-prompts-library/portfolio-strategy-review/](https://www.productboard.com/product-management-prompts-library/portfolio-strategy-review/)

> Evaluate a product portfolio for strategic coherence, resource fit, and where to invest, maintain, or divest.

## Prompt Template

```
<portfolio_strategy_review>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PORTFOLIO:

List each product or product line:

1. [Product A]: [Description, revenue/ARR, growth rate, headcount]

2. [Product B]: [Description, revenue/ARR, growth rate, headcount]

3. [Product C]: [Description, revenue/ARR, growth rate, headcount]

[Add more as needed]



CONTEXT:

- Company stage and total revenue: [Stage, total ARR/revenue]

- Available resources for next year: [Engineering headcount, budget]

- Strategic goals for next 2-3 years: [What you're trying to achieve]

- Any competitive pressures or market changes affecting the portfolio: [Context]

</inputs>



<portfolio_framework>



You are a portfolio strategy advisor applying a rigorous framework to help allocate resources across multiple products or product lines. You believe every dollar spent on one product is a dollar not spent on another — so portfolio decisions must be explicit, not accidental.



PHASE 1: PORTFOLIO MAPPING



Map each product on two axes:



AXIS 1 — MARKET POSITION (your competitive strength)

Strong: Category leader, clear differentiation, customers choose you first

Medium: Competitive, but not clearly winning

Weak: Behind competitors, customers often choose alternatives



AXIS 2 — MARKET ATTRACTIVENESS (the opportunity ahead)

High: Growing market, large TAM, strong buyer demand

Medium: Stable market, moderate growth, decent opportunity

Low: Shrinking, commoditizing, or too small to matter



BCG-STYLE QUADRANT PLACEMENT:

[For each product, place in quadrant and justify]



Stars (Strong position, High attractiveness): Invest aggressively

Cash Cows (Strong position, Low attractiveness): Extract value, minimal new investment

Question Marks (Weak position, High attractiveness): Make a call — invest to win or exit

Dogs (Weak position, Low attractiveness): Divest or sunset



PHASE 2: RESOURCE ALLOCATION ANALYSIS



Current vs. Optimal allocation:



For each product:

- Current engineering headcount: [X]

- Current % of total engineering: [X%]

- Current revenue contribution: [X%]

- Return on resource investment: [Revenue per engineer, rough]

- Where it sits in quadrant: [Star / Cow / Question / Dog]

- Optimal resource level: [More / Same / Less / Divest]



Misallocations to flag:

- Over-resourced relative to opportunity: [Which products]

- Under-resourced relative to opportunity: [Which products]

- Resources going to products that should be sunset: [If any]



PHASE 3: STRATEGIC COHERENCE TEST



Do these products belong together?



SYNERGY TEST:

Do customers buy multiple products from the portfolio? (Cross-sell potential)

Do products share technology, go-to-market, or infrastructure? (Cost leverage)

Does the portfolio tell a coherent story to buyers? (Brand coherence)



CANNIBALIZATION TEST:

Do any products compete with each other for the same customers? (Bad)

Do any products position you inconsistently in the market? (Confusing)



RESOURCE TEST:

Is this portfolio manageable with your current team? (Spread too thin = all fail)

Would focusing on fewer products be a competitive advantage? (Often yes)



PHASE 4: STRATEGIC OPTIONS



OPTION 1 — DOUBLE DOWN:

Focus resources on [Product X] — the strongest Star or most promising Question Mark

- Investment: [How much more]

- Expected return: [Revenue/position improvement]

- Trade-off: [What gets less]



OPTION 2 — HARVEST:

Move [Product Y] to maintenance mode — extract cash while minimizing investment

- Acceptable degradation: [What you're willing to let slip]

- Resource freed: [How much]

- Risk: [Customer impact, competitive risk]



OPTION 3 — SUNSET:

Wind down [Product Z] — communicate, transition customers, reallocate resources

- Timeline: [How long to wind down responsibly]

- Customer impact: [How to handle existing customers]

- Resource freed: [How much]



RECOMMENDED PORTFOLIO STRATEGY:

[Your specific recommendation with resource reallocation details]



Prioritized investment:

1. [Product] — [Rationale and resource increase]

2. [Product] — [Rationale and resource maintenance]

3. [Product] — [Rationale and resource decrease or sunset]



</portfolio_framework>

</portfolio_strategy_review>
```
