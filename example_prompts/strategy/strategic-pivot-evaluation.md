# Strategic Pivot Evaluation

**Source:** [https://www.productboard.com/product-management-prompts-library/strategic-pivot-evaluation/](https://www.productboard.com/product-management-prompts-library/strategic-pivot-evaluation/)

> Evaluate whether to pivot, how far, and in what direction — with a framework that separates signal from panic.

## Prompt Template

```
<strategic_pivot_evaluation>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

CURRENT STATE:

1. What does your product do today?

2. What signals are making you question the current strategy? (be specific)

3. How long have you been executing on the current strategy?

4. What metrics are concerning vs. what's working?



THE PROPOSED PIVOT:

5. What is the pivot direction you're considering?

6. What assumption would this test?

7. What assets/work from the current strategy carries over?

8. What do you have to abandon?



CONSTRAINTS:

9. What's your runway? (months)

10. What commitments exist? (customers, investors, team)

11. Who would need to agree on this decision?

</inputs>



<pivot_evaluation_framework>



You are a strategic advisor who has helped founders and product leaders navigate pivots—both successful ones and ones that should have happened earlier (or not at all). You know that pivots made from panic are usually wrong, but pivots delayed by attachment to sunk costs are fatal.



PHASE 1: SIGNAL vs. NOISE ANALYSIS



First, determine if this pivot is driven by signal or noise:



NOISE (bad reasons to pivot):

- Competitor shipped something scary (they usually fail too)

- One big customer is unhappy (one customer ≠ market signal)

- Team morale is low (execution problem, not strategy problem)

- You're bored with the current direction

- An advisor or investor suggested it last week



SIGNAL (good reasons to pivot):

- Retention curves show product doesn't hold value

- Multiple independent customer segments don't see the value

- You found a much stronger pull in adjacent use case

- Core market assumptions have been disproved by data

- Pricing/business model fundamentally doesn't work



Based on what you've shared, the primary drivers appear to be: [Signal / Noise / Mixed]



PHASE 2: PIVOT NECESSITY TEST



Answer these honestly:



Have you exhausted the current strategy? Or are you giving up prematurely?

Evidence you've actually tested the current strategy: [Assessment]



Is this a product problem or a market problem?

Product problem: Right market, wrong product → iterate, not pivot

Market problem: Wrong market → pivot makes sense



Is there any evidence of love anywhere in your current product?

If yes: Find that signal and build toward it (targeted pivot)

If no: Major pivot may be warranted



Could better execution (sales, marketing, ops) save the current strategy?

If yes: Solve the execution problem before pivoting



PHASE 3: PIVOT DEPTH ANALYSIS



Not all pivots are equal. Map where yours falls:



ZOOM IN (Narrow the focus): Take a feature and make it the whole product. Your full app becomes one use case.



ZOOM OUT (Expand the scope): Your feature becomes a platform. Expand what the product does.



CUSTOMER SEGMENT PIVOT: Same product, different buyer. Often the fastest pivot.



PROBLEM PIVOT: Same customer, different problem. You stay close to the user but solve something different.



BUSINESS MODEL PIVOT: Same product and customer, different revenue model.



TECHNOLOGY PIVOT: Core tech stays, application changes.



Full Restart: Rare, but sometimes necessary.



The proposed pivot is a: [Type]

Suitability for your situation: [Assessment with reasoning]



PHASE 4: ASSET INVENTORY



What carries over into the pivot?



Valuable assets to preserve:

- Technology/IP: [What stays relevant]

- Customer relationships: [Which customers might follow you]

- Market knowledge: [What you've learned that applies]

- Team capabilities: [Skills that transfer]

- Data: [What data is useful in the new direction]



Things you must let go:

- Features/products to sunset: [List]

- Customer commitments to unwind: [How]

- Mental models to abandon: [The assumptions that are no longer valid]



PHASE 5: PIVOT DECISION MATRIX



For the proposed pivot, score (1-5):



Market pull: Is there evidence of demand in the new direction? [Score and evidence]

Asset leverage: How much of your current work carries over? [Score]

Speed to test: How quickly can you get a signal? [Score]

Team capability: Do you have the skills for this? [Score]

Business model clarity: Can you make money here? [Score]



Total score: [X/25]



RECOMMENDATION:

[Pivot / Don't Pivot / Targeted Iteration]



Rationale: [2-3 sentences]



If pivoting:

- Minimum viable pivot (don't overbuild before testing the assumption)

- The one thing you need to prove in 90 days: [Specific hypothesis]

- Decision criteria at 90 days: [What will make you continue, iterate, or reverse]



If not pivoting:

- What specific execution changes would you make instead?

- What's the one unproven assumption you need to test next?

- At what point does not pivoting become the wrong answer? [Trigger]



</pivot_evaluation_framework>

</strategic_pivot_evaluation>
```
