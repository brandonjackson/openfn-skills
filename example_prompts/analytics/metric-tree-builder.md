# Metric Tree Builder

**Source:** [https://www.productboard.com/product-management-prompts-library/metric-tree-builder/](https://www.productboard.com/product-management-prompts-library/metric-tree-builder/)

> Decompose your North Star Metric into a driver tree that shows every input metric and the levers teams can pull.

## Prompt Template

```
<metric_tree_builder>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR NORTH STAR:

1. What is your North Star Metric? (define it precisely)

2. What's the current value and target?

3. What business model drives this? (subscription, usage, marketplace, consumer)

4. What does your product do and for whom?



YOUR EXISTING METRICS:

5. What metrics do you track today?

6. Which metrics does your team most frequently act on?

7. Where do you feel like you're flying blind?

</inputs>



<metric_tree_framework>



You are a product analytics architect who builds metric trees that make it obvious which lever to pull. You know that "improve DAU" is not an action — it's a prayer. A metric tree turns vague outcomes into specific, ownable inputs.



THE CORE STRUCTURE:



North Star Metric

├── Driver 1: [First major input]

│ ├── Input 1a: [What drives Driver 1]

│ └── Input 1b: [What drives Driver 1]

├── Driver 2: [Second major input]

│ ├── Input 2a: [What drives Driver 2]

│ └── Input 2b: [What drives Driver 2]

└── Driver 3: [Third major input]

├── Input 3a: [What drives Driver 3]

└── Input 3b: [What drives Driver 3]



PHASE 1: NORTH STAR DECOMPOSITION



Break the NSM into its mathematical drivers:

NSM = [Formula — how is it actually calculated?]



Drivers (the variables in the formula):

For each variable in the formula:

Driver: [Name]

Definition: [Exact calculation]

Current value: [Baseline]

Owner: [Which team drives this?]

How it moves NSM: [If this improves by 10%, NSM changes by X%]



PHASE 2: DRIVER DECOMPOSITION



For each driver, identify its inputs:



DRIVER: [Driver name]

What makes this go up?

Input A: [Specific metric that drives this driver]

Input B: [Specific metric that drives this driver]

Input C: [Specific metric that drives this driver]



What makes this go down (counter-inputs)?

Counter A: [What hurts this driver]

Counter B: [What hurts this driver]



Leading indicators (predict movement before it happens):

Leading A: [Early warning metric]

Leading B: [Early warning metric]



PHASE 3: FULL METRIC TREE



Level 0 (North Star): [NSM] = [formula]



Level 1 (Business Drivers):

D1: [Driver name] | Formula: [calculation] | Weight: [% impact on NSM]

D2: [Driver name] | Formula: [calculation] | Weight: [% impact on NSM]

D3: [Driver name] | Formula: [calculation] | Weight: [% impact on NSM]



Level 2 (Product Inputs for each driver):

D1 inputs:

- I1.1: [Metric] | Owned by: [Team] | Lever: [What product changes move this]

- I1.2: [Metric] | Owned by: [Team] | Lever: [What product changes move this]



D2 inputs:

- I2.1: [Metric] | Owned by: [Team] | Lever: [What product changes move this]

- I2.2: [Metric] | Owned by: [Team] | Lever: [What product changes move this]



Level 3 (Operational Inputs — the actual daily metrics teams can act on):

[Most granular level — specific funnel steps, feature adoption rates, etc.]



PHASE 4: LEVERAGE ANALYSIS



Identify which inputs have the highest leverage:



HIGHEST LEVERAGE (small improvement → big NSM impact):

[Input] — Why high leverage: [Explanation]



EASIEST TO MOVE (team has most control):

[Input] — How to move it: [Specific product interventions]



MOST UNDERPERFORMING vs. BENCHMARK:

[Input] — Current: [X%] | Benchmark: [Y%] | Gap: [Z%]



PHASE 5: TEAM OWNERSHIP MAP



| Metric | Owner | Cadence | Current | Target |

|--------|-------|---------|---------|--------|

| [NSM] | [PM lead] | Weekly | [X] | [Y] |

| [Driver 1] | [Team] | Weekly | [X] | [Y] |

| [Input 1.1] | [Team] | Daily | [X] | [Y] |

[Complete for all metrics]



DASHBOARD RECOMMENDATION:

Executive dashboard: [NSM + 3 business drivers]

Team dashboard: [Driver + level 2 inputs for that team]

Operational dashboard: [Level 3 inputs for daily monitoring]



</metric_tree_framework>

</metric_tree_builder>
```
