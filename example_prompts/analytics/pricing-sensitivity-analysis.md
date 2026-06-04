# Pricing Sensitivity Analysis

**Source:** [https://www.productboard.com/product-management-prompts-library/pricing-sensitivity-analysis/](https://www.productboard.com/product-management-prompts-library/pricing-sensitivity-analysis/)

> Analyze pricing sensitivity data to find the optimal price point and packaging structure for your product.

## Prompt Template

```
<pricing_sensitivity_analysis>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What do you sell and to whom?

2. Current pricing: (plans, prices, packaging)

3. Current conversion rate from free to paid (if freemium) or trial to paid

4. Current average deal size and annual contract value

5. Churn rate and whether it correlates to pricing tier



PRICING DATA YOU HAVE:

6. Any pricing experiment results?

7. Win/loss data mentioning pricing?

8. Customer interviews or surveys about pricing?

9. Competitor pricing information?

10. Any Van Westendorp or Conjoint analysis data?

</inputs>



<pricing_analysis_framework>



You are a pricing strategy consultant who has designed pricing models for B2B SaaS, consumer subscriptions, and usage-based products. You know that most companies undercharge for the value they create — and that the right price is almost never the one chosen arbitrarily at launch.



PHASE 1: VAN WESTENDORP PRICE SENSITIVITY MODEL



If you have or can gather this data, run the four-question survey:

Q1: "At what price would this product be so cheap you'd question its quality?"

Q2: "At what price would this product seem like a bargain?"

Q3: "At what price would this product start to feel expensive?"

Q4: "At what price would this product be too expensive to consider?"



Plot the responses to find:

- Acceptable Price Range: Between Q3 and Q4 medians

- Optimal Price Point: Intersection of Q1/Q2 and Q3/Q4 cumulative distributions

- Point of Marginal Cheapness: Q1 median (floor)

- Point of Marginal Expensiveness: Q4 median (ceiling)



Based on data provided, estimated ranges:

[If survey data provided, calculate. If not, note that this analysis requires user research.]



PHASE 2: COMPETITIVE PRICE POSITIONING



Map your price vs. competitors:



| Competitor | Plan Name | Price | What's Included | Your vs. Theirs |

|-----------|----------|-------|-----------------|-----------------|

| [Competitor A] | [Plan] | $[X]/mo | [Features] | [Above/At/Below] |

[Complete for main competitors]



Where you sit in the market:

- Premium: [If you charge more than most competitors]

- Parity: [If you're roughly at market rate]

- Value: [If you're below market — why?]



Is your current position intentional? Should it change?



PHASE 3: VALUE-BASED PRICING ANALYSIS



What value does your product actually create?



QUANTIFIABLE VALUE:

Time saved: [X hours/month × $Y/hour = $Z/month value per user]

Revenue enabled: [X% improvement × $Y ARR = $Z/month value]

Cost reduced: [X cost eliminated = $Z/month value]

Risk reduced: [X risk mitigation = $Z/month value]



Total quantifiable value per customer per month: $[X]



Current price as % of value delivered: [Current price / value × 100]%



Rule of thumb: You should capture 10-25% of the value you create.

If capturing less: You may be underpriced.

If capturing more: You may be overpriced (or value delivery isn't clear to customers).



PHASE 4: PRICE SEGMENTATION OPPORTUNITIES



Are all your customers getting the same value? Often not.



HIGH VALUE SEGMENT:

Profile: [Company type, use case, scale]

Value they receive: [Estimated monthly value]

What you could charge: [$X — capturing [Y]% of value]



MEDIUM VALUE SEGMENT:

Profile: [Company type, use case, scale]

Value they receive: [Estimated monthly value]

What you could charge: [$X]



LOW VALUE SEGMENT:

Profile: [Company type, use case, scale]

Value they receive: [Estimated monthly value]

What you could charge: [$X]



Implication: Multi-tier pricing should map to value segments, not arbitrary feature bundles.



PHASE 5: PRICING RECOMMENDATIONS



OPTIMAL PRICE RANGE: $[X] — $[Y] per [unit/seat/month]



PACKAGING RECOMMENDATION:

[Tier 1]: $[X] — For [segment], includes [features]

[Tier 2]: $[Y] — For [segment], includes [features]

[Tier 3]: $[Z] — For [segment], includes [features]



TESTING APPROACH:

Test 1: [Price point] vs. [Current price] — Measure: [Conversion rate + revenue per user]

Test 2: [Packaging change] vs. [Current] — Measure: [Average deal size]



RISK ASSESSMENT:

Raising prices risks: [Who would churn, what % of revenue, how to mitigate]

Keeping prices risks: [What opportunities are you leaving on the table]



</pricing_analysis_framework>

</pricing_sensitivity_analysis>
```
