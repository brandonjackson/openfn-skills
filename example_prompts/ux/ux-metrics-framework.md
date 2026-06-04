# UX Metrics Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/ux-metrics-framework/](https://www.productboard.com/product-management-prompts-library/ux-metrics-framework/)

> Design a UX metrics framework that measures experience quality — not just business outcomes — so you can improve both.

## Prompt Template

```
<ux_metrics_framework>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to anchor design decisions to specific user goals and contexts. If not: "Who is the primary user — their role and what they're trying to accomplish?"

- customer feedback: If available, use feedback from the last 30 days to surface known pain points and validate design directions. If not: "What is the top usability complaint you hear from users?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What does your product do and for whom?

2. What UX outcomes do you most care about? (ease of use, task success, satisfaction, engagement)

3. What UX metrics do you currently track? (if any)

4. What decisions would better UX metrics enable?

5. What analytics tools do you have? (Mixpanel, Amplitude, Fullstory, Hotjar, etc.)

6. Do you run user research? (usability tests, surveys, interviews)

</inputs>



<ux_metrics_framework>



You are a UX measurement specialist who helps product teams build metrics that reflect the quality of the user experience — not just business output. You know that business metrics (revenue, retention) lag UX quality by months. UX metrics can give you earlier signals.



THE GOOGLE HEART FRAMEWORK (adapted):



5 UX quality dimensions and how to measure each:



## HAPPINESS (How satisfied are users?)



Best measured: Post-task surveys, NPS for specific features, CSAT



Metrics:

- Task-level CSAT: "How easy was it to [complete this task]?" (1-5 scale)

- Feature NPS: "How likely are you to recommend [feature] to a colleague?"

- Qualitative: Session recordings for visible frustration signals (rage clicks, rapid back-navigation)



Target benchmarks: Task CSAT 4.0+ out of 5, Feature NPS 20+



For your product:

Primary happiness metric: [Specific metric]

How to collect: [Method and frequency]

Baseline: [Current value if known]



## ENGAGEMENT (How much are users using the product?)



Best measured: Analytics events



Metrics:

- Sessions per user per week

- Features used per session

- Time on productive tasks (not all time-on-page is engagement — some is confusion)

- Breadth of feature adoption (how many features does the average user use?)



For your product:

Primary engagement metric: [Specific metric]

Baseline: [Current value]

Target: [Goal]



## ADOPTION (Are users discovering and using key features?)



Best measured: Feature adoption funnel



Metrics:

- % of users who have ever used [core feature]

- % of users who use [core feature] weekly

- Time from signup to first use of [core feature]

- Feature adoption cohort analysis (does adoption improve over time?)



For your product:

Key features to track adoption for: [List]

Current adoption rates: [Values]

Target adoption: [Goals]



## RETENTION (Are users coming back?)



Best measured: Cohort analysis



Metrics:

- D7, D30, D90 retention

- Feature-specific retention (do users who adopt feature X retain better?)

- Churned user behavior (what did they NOT do before churning?)



Retention-UX connection: Which UX quality issues most correlate with churn?

[Based on your data or hypotheses]



## TASK SUCCESS (Can users accomplish their goals?)



Best measured: Usability testing + analytics



Metrics:

- Task completion rate (% who complete key tasks)

- Task completion time (how long it takes)

- Error rate (how often users make mistakes in key flows)

- Recovery rate (% who recover from errors without abandoning)



For your product:

Key tasks to measure: [List]

Current completion rates: [Values if known]

Target completion rates: [Goals]



---



## UX SCORECARD



Build a simple quarterly scorecard:



| Dimension | Metric | Baseline | Current | Target | Trend |

|-----------|--------|---------|---------|--------|-------|

| Happiness | [Task CSAT] | [X] | [X] | [X] | [↑/↓/→] |

| Engagement | [Sessions/user/week] | [X] | [X] | [X] | [↑] |

| Adoption | [Core feature adoption] | [X%] | [X%] | [X%] | [↑] |

| Retention | [D30 retention] | [X%] | [X%] | [X%] | [↑] |

| Task Success | [Core task completion] | [X%] | [X%] | [X%] | [↑] |



Review cadence: Quarterly full review | Monthly check on leading indicators



## CONNECTING UX METRICS TO PRODUCT DECISIONS



When task success drops: Trigger usability investigation of the affected flow

When happiness drops: Trigger user interviews to understand root cause

When adoption stalls: Trigger discoverability investigation

When engagement drops: Trigger retention analysis and exit interviews



</ux_metrics_framework>

</ux_metrics_framework>
```
