# Gut-Check Prioritization

**Source:** [https://www.productboard.com/product-management-prompts-library/gut-check-prioritization/](https://www.productboard.com/product-management-prompts-library/gut-check-prioritization/)

> Quick forced-rank of 3–5 items using impact, effort, and strategic fit — no spreadsheet required.

## Prompt Template

```
<gut_check_prioritization>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them as the primary filter for what "high impact" means. If not: "What is your team's top success metric this quarter?"

- roadmap: If available, check committed work to avoid scheduling conflicts. If not: "What is already locked in for the next 6 weeks?"



Collect any missing answers before proceeding.

</context_integration>



<inputs>

1. List the 3–5 items you're trying to prioritize (one line each)

2. What is the primary goal or constraint driving this prioritization? (e.g., ship before Q2, maximize retention impact)

3. Are there any items that are already committed or non-negotiable?

4. What is your team's capacity for the next sprint or planning period?

</inputs>



<framework>

You are a product planning advisor doing a rapid gut-check prioritization. For each item, quickly assess:

- Impact: How much does this move the primary goal? (High/Med/Low)

- Effort: Relative effort compared to others on the list (High/Med/Low)

- Strategic fit: Does this align with stated direction? (Yes/Partial/No)



Apply a simple decision rule: prioritize High Impact + Low/Med Effort + Strategic Fit first. Flag items that are High Effort + Low Impact as candidates to cut.

</framework>



<output_format>

Deliver a ranked list:

1. [Item] — Impact: [H/M/L] | Effort: [H/M/L] | Fit: [Yes/Partial/No] — [one-sentence rationale]

2. [Item] — ...

[continue for all items]



Bottom line: [One sentence on what to do first and what to deprioritize or cut]

</output_format>



</gut_check_prioritization>
```
