# Leading vs. Lagging Indicator Map

**Source:** [https://www.productboard.com/product-management-prompts-library/leading-vs-lagging-indicator-map/](https://www.productboard.com/product-management-prompts-library/leading-vs-lagging-indicator-map/)

> Map your metrics into leading and lagging indicators so your team can act on signals before outcomes are locked in.

## Prompt Template

```
<leading_lagging_indicator_map>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR BUSINESS:

1. What's your primary business outcome? (the ultimate result you're driving)

2. What's your time horizon for that outcome? (monthly, quarterly, annual)

3. What metrics do you currently track?

4. Which metrics can you actually influence in the next 30 days?

5. Any metrics that feel like they're showing you the present or past rather than the future?

</inputs>



<indicator_mapping_framework>



You are a product strategy advisor helping a team distinguish between metrics that predict the future (leading) and metrics that confirm the past (lagging). Most teams over-index on lagging metrics and can't course-correct in time. The right mix: lead indicators that predict what lagging indicators will look like in 30-90 days.



THE FUNDAMENTAL DISTINCTION:



LAGGING INDICATORS (confirm what happened):

- Revenue, ARR, profit margin

- Customer churn rate

- Net Promoter Score

- Annual retention rate

- Market share



You can't change these in the next 30 days. You can only look at them and understand what happened.



LEADING INDICATORS (predict what will happen):

- Actions that correlate with future retention (e.g., number of integrations set up)

- Behaviors that predict churn (e.g., declining login frequency in week 4)

- Signals that predict revenue growth (e.g., trial-to-paid conversion rate, qualified pipeline)

- Engagement patterns that predict expansion (e.g., seats used / seats licensed)



You CAN change these in the next 30 days by taking specific product actions.



PHASE 1: METRIC CLASSIFICATION



For each metric you currently track:



METRIC: [Name]

Type: [Lagging / Leading]

Time lag: [How long after this metric moves do you see it show up in business outcomes?]

Actionable: [Can your team move this in the next 30 days? How?]



PHASE 2: LEADING INDICATOR IDENTIFICATION



For your primary business outcome, identify leading indicators at each time horizon:



6-MONTH LEADING INDICATORS (predict 6-month outcomes):

[What signals today predict where revenue/retention/growth will be in 6 months?]

Example: For annual contract renewal → Quarterly Business Review completion rate



30-DAY LEADING INDICATORS (predict 30-day outcomes):

[What signals this week predict outcomes next month?]

Example: For monthly active users → Day 7 return rate after signup



WEEKLY LEADING INDICATORS (predict next week's outcomes):

[What signals today predict next week's leading indicators?]

Example: For Day 7 return → Day 2 completion of activation milestone



THE LEADING INDICATOR CHAIN:

Primary lagging outcome: [X]

6-month leading predictor: [A] → Measurement: [How to track]

30-day leading predictor: [B] → Measurement: [How to track]

Weekly leading predictor: [C] → Measurement: [How to track]



PHASE 3: CHURN LEADING INDICATORS (critical)



For each user segment, identify the early warning signals:



CHURN RISK SIGNALS:

Behavioral: [What do churning users stop doing before they churn?]

Engagement: [What engagement decline predicts churn? (e.g., <1 login in 14 days)]

Feature: [Which feature abandonment predicts churn?]

Support: [What support behavior predicts churn?]

Financial: [What payment behavior predicts churn?]



EXPANSION LEADING INDICATORS:

Behavioral: [What do expanding accounts do before they expand?]

Engagement: [What engagement pattern predicts expansion?]

Milestone: [What achievement predicts expansion consideration?]



PHASE 4: THE DASHBOARD RESTRUCTURE



Recommended metrics by review cadence:



DAILY (early warning system — leading):

[List 2-3 highest-frequency leading indicators]



WEEKLY (team performance — leading + medium-lag):

[List 3-5 weekly leading indicators that drive decisions]



MONTHLY (business health — mix of leading and lagging):

[List 4-6 monthly metrics including some lagging for accountability]



QUARTERLY (business outcomes — lagging):

[List 3-4 quarterly business outcomes]



PHASE 5: INTERVENTION CALENDAR



Based on leading indicators, define your intervention protocol:



If [leading indicator] drops below [threshold] → [Action within X days]

If [leading indicator] improves above [threshold] → [Action to accelerate]

If [churn signal] appears for account → [Customer success action within X days]



</indicator_mapping_framework>

</leading_lagging_indicator_map>
```
