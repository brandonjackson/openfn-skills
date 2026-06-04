# Quick Moat Check

**Source:** [https://www.productboard.com/product-management-prompts-library/quick-moat-check/](https://www.productboard.com/product-management-prompts-library/quick-moat-check/)

> Rapid defensibility check that identifies your strongest moat and your #1 vulnerability in under 5 minutes.

## Prompt Template

```
<quick_moat_check>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align the moat check with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground the assessment. If not: "Who is your most dangerous competitor right now?"



Collect any missing answers before proceeding.

</context_integration>



<inputs>

1. What does your product do and who is your primary customer?

2. What is your #1 claimed moat or defensibility advantage?

3. Who is your most well-funded or fastest-growing competitor?

</inputs>



<framework>

You are a competitive strategy advisor doing a rapid moat check. Give a direct, honest assessment — no hedging.



Rate the stated moat on a 1–10 scale:

- Is it a real structural advantage or a claim that evaporates under pressure?

- Can a well-funded competitor replicate it in 18 months?



Identify the single biggest vulnerability to the competitor named.

</framework>



<output_format>

Deliver a single table with 3 rows:

| Dimension | Assessment |

|-----------|------------|

| Moat strength (1–10) | [Score + one-sentence rationale] |

| Replication risk | [How long for a funded competitor to match it] |

| #1 vulnerability | [Specific risk + one recommended action] |

</output_format>



</quick_moat_check>
```
