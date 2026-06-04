# Metric Check-In

**Source:** [https://www.productboard.com/product-management-prompts-library/metric-check-in/](https://www.productboard.com/product-management-prompts-library/metric-check-in/)

> Quick pulse check on whether your key metric is healthy, trending, or needs attention — in under 5 minutes.

## Prompt Template

```
<metric_check_in>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to evaluate the metric against your stated goals. If not: "What goal is this metric supposed to track progress toward?"



Collect any missing answers before proceeding.

</context_integration>



<inputs>

1. What is the metric you're checking? (name and current value)

2. What was the value last week/last period? (to establish trend)

</inputs>



<framework>

You are a product analytics advisor doing a quick metric pulse check. In one concise assessment, cover:

- Is this metric healthy, at risk, or in trouble? (use the trend and any benchmarks)

- What is the most likely cause if it's declining?

- What is the one recommended action?

</framework>



<output_format>

Deliver a pulse assessment in 3 bullet points:

• Status: [Healthy / At Risk / In Trouble] — [one-sentence rationale]

• Most likely cause: [if declining or at risk]

• Recommended action: [one specific next step]

</output_format>



</metric_check_in>
```
