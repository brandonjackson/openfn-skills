# Analytics Dashboard Design for PMs

**Source:** [https://www.productboard.com/product-management-prompts-library/analytics-dashboard-design-for-pms/](https://www.productboard.com/product-management-prompts-library/analytics-dashboard-design-for-pms/)

> Design a PM dashboard that drives decisions — not a vanity metrics collection that everyone looks at and no one acts on.

## Prompt Template

```
<analytics_dashboard_design>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR CONTEXT:

1. Who is this dashboard for? (PM, team, leadership, company-wide)

2. What decisions should this dashboard inform?

3. What questions should someone be able to answer by looking at this?

4. What analytics tools do you have? (Amplitude, Mixpanel, Looker, Tableau, etc.)

5. What metrics are you currently tracking that might not be the right ones?

6. How often will people look at this? (daily, weekly, monthly)

</inputs>



<dashboard_design_framework>



You are a product analytics consultant who has seen hundreds of dashboards — most of them useless. The useless ones have 40+ metrics, no hierarchy, and no clear question they're answering. The useful ones have 5-10 metrics, clear hierarchy, and make the right action obvious.



THE GOLDEN RULE: A dashboard should create a reflex. When you look at it, you should immediately know if things are good, bad, or need attention — without thinking.



PHASE 1: DASHBOARD PURPOSE DEFINITION



Before designing anything:



The one question this dashboard answers: "[Question]"

The decision it enables: "[Decision]"

Who acts on it: "[Role]"

How often they act: "[Frequency]"



If you can't answer these, you're not ready to design the dashboard.



PHASE 2: METRIC SELECTION



Start by listing every metric that could be on this dashboard.

Then apply the filter:



KEEP if:

- It changes within the review period (daily changes on daily dashboard)

- The viewer can take action based on seeing it change

- It's not a vanity metric (more users is fine, but does it tell you why or what to do?)



CUT if:

- It's interesting but not actionable

- It duplicates information from another metric on the list

- It requires external context to interpret (it'll always be wrong)

- It looks great when things are going well and confusing when they're not



After filtering:

Must-have metrics (can't answer the dashboard question without them):

[List: 3-7 max]



Supporting metrics (add context to must-haves):

[List: 3-5 max]



Total metrics: [Should be 10 or fewer — if more, split into multiple dashboards]



PHASE 3: DASHBOARD HIERARCHY



Organize metrics by importance:



LEVEL 1 — HEADLINE (top of dashboard):

1-3 metrics that capture overall health. These are the vitals.

[Metric] | [Current value] | [vs. last period] | [vs. target]



LEVEL 2 — DRIVERS (middle section):

What's causing the headline metrics to move?

[3-5 driver metrics that decompose the headline]



LEVEL 3 — DIAGNOSTICS (detail section):

What's the operational detail behind the drivers?

[Detailed breakdowns for when you need to investigate]



PHASE 4: VISUALIZATION DECISIONS



For each metric, choose the right visualization:



TREND OVER TIME: Line chart (use for metrics you're trying to move)

COMPARISON: Bar chart (use for comparing segments, cohorts, or categories)

PROPORTION: Stacked bar or pie (use sparingly — only when composition matters)

FUNNEL: Funnel chart (use for conversion analysis)

SINGLE NUMBER + CONTEXT: Big number with sparkline or trend arrow (use for headlines)

COHORT: Heatmap table (use for retention analysis)



AVOID:

3D charts (make data harder to read)

Too many colors (hard to distinguish)

Precision beyond significance (4.7283% → 4.7%)



PHASE 5: THE ALERT SYSTEM



A great dashboard has a built-in alerting layer:



GREEN: Within [X%] of target → No action needed

YELLOW: [X-Y%] below target → Monitor and investigate

RED: More than [Y%] below target → Immediate action required



For each metric, define:

Green threshold: [Value or range]

Yellow threshold: [Value or range]

Red threshold: [Value or range]

Alert recipient: [Who gets pinged when red]

Cadence: [Real-time / Daily / Weekly]



PHASE 6: DASHBOARD PROTOTYPE



DASHBOARD NAME: [Clear, specific name]

AUDIENCE: [Who sees this]

REVIEW CADENCE: [When it's reviewed]



SECTION 1 — [HEADLINE LABEL]:

Metric 1: [Name] | Type: [Big number + trend] | Target: [X]

Metric 2: [Name] | Type: [Big number + trend] | Target: [X]



SECTION 2 — [DRIVER LABEL]:

Metric 3: [Name] | Type: [Line chart, 30-day] | Compare: [vs. last 30 days]

Metric 4: [Name] | Type: [Bar chart by segment] | Segments: [List]



SECTION 3 — [DIAGNOSTIC LABEL]:

Metric 5: [Name] | Type: [Funnel] | Steps: [List]



</dashboard_design_framework>

</analytics_dashboard_design>
```
