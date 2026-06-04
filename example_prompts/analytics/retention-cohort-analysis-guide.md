# Retention Cohort Analysis Guide

**Source:** [https://www.productboard.com/product-management-prompts-library/retention-cohort-analysis-guide/](https://www.productboard.com/product-management-prompts-library/retention-cohort-analysis-guide/)

> Analyze retention cohorts to identify when users churn, why retention varies across cohorts, and what drives long-term retention.

## Prompt Template

```
<retention_cohort_analysis>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What does your product do and for whom?

2. What's your retention definition? (what action counts as "retained"?)

3. What time periods do you use? (Day 1/7/30, Week 1/4/12, Month 1/3/6)

4. What cohort data do you have? (time period, segments available)

5. What's your current retention benchmark? (goal or industry standard)



ANOMALIES YOU'VE NOTICED:

6. Are some cohorts performing dramatically better than others?

7. Has retention gotten better or worse over time?

8. Do specific user segments retain differently?

</inputs>



<retention_framework>



You are a retention analytics expert who has diagnosed retention issues for consumer and B2B products. You know that retention data is one of the richest signals in product analytics — it tells you if your product is actually delivering value over time.



PHASE 1: COHORT TABLE INTERPRETATION



Read the cohort table systematically:



HORIZONTAL READING (one cohort over time):

Trace a single acquisition cohort forward. Where does it flatten? Where does it drop sharply?

A flattening curve = users who stayed are finding ongoing value

A continuous decline = no long-term value capture



VERTICAL READING (same time period across cohorts):

Compare all cohorts at the same age (e.g., Day 30 for every cohort).

Are later cohorts retaining better or worse than earlier ones?

Improving trend = product is getting better

Declining trend = product quality deteriorating or audience quality changing



THE RETENTION CURVE SHAPE:

Smile curve: Drops sharply then levels off → Good! Long-term retained users exist

Straight decline: Continuous drop → No stable retained base

Bathtub curve: Drops, flattens, then drops again → Two distinct usage patterns



PHASE 2: BENCHMARKING



What's good for your product type?



Consumer / Mobile Apps:

Day 1: 25-40%+ | Day 7: 10-20%+ | Day 30: 5-10%+



Consumer SaaS (weekly use):

Week 1: 50%+ | Month 1: 30%+ | Month 3: 20%+



B2B SaaS (SMB):

Month 1: 80%+ | Month 6: 60%+ | Year 1: 50%+



B2B SaaS (Enterprise):

Month 1: 90%+ | Month 6: 80%+ | Year 1: 70%+



Your benchmarks vs. actuals:

[For each time period, compare actuals to benchmark]

[Flag which time periods are most below benchmark]



PHASE 3: COHORT COMPARISON ANALYSIS



Compare cohorts across dimensions:



BY ACQUISITION CHANNEL:

Which channel produces users who retain best?

[If data available, compare]

Implication: [Where to invest more, where to pull back]



BY ACTIVATION STATUS:

Compare cohorts who hit your activation milestone vs. those who didn't.

If activated users retain at [X%] and non-activated at [Y%], the activation gap is [Z%].

Implication: Activation investment ROI



BY PLAN/TIER:

Free vs. paid, or different pricing tiers.

[If applicable]



BY COMPANY SIZE (B2B):

SMB vs. mid-market vs. enterprise.

[If applicable]



Most significant segmentation finding:

[The segment dimension that creates the biggest retention differential]



PHASE 4: CHURN PATTERN ANALYSIS



When do users churn?



EARLY CHURN (Day 1-7 or Week 1):

Cause profile: Failed to see value, didn't understand product, wrong expectations from acquisition

Diagnosis: Look at activation rates for these users. Did they complete key actions?

Intervention: Onboarding improvement, faster time-to-value



MID-CYCLE CHURN (Day 8-30 or Month 2-3):

Cause profile: Got initial value but didn't find a sustained habit, product didn't fit their workflow

Diagnosis: What are they NOT doing that retained users do?

Intervention: Habit-forming features, engagement campaigns, expansion use cases



LATE CHURN (Month 3+):

Cause profile: Event-driven (contract expiry, job change, budget cut), or value plateau

Diagnosis: Churn surveys, exit interviews

Intervention: Expansion features, executive-level relationships, renewal campaigns



Primary churn window for your product: [When most churn happens]

Root cause hypothesis: [Why based on the data]



PHASE 5: RETENTION IMPROVEMENT PRIORITIES



Based on the analysis:



HIGHEST LEVERAGE INTERVENTION:

If you improve [specific step or segment], retention at [time period] moves from [X%] to [Y%].

Business impact: [Calculate — 1% retention improvement × current user base × ARPU = $X incremental revenue]



RECOMMENDED EXPERIMENTS:

1. [Experiment] → Targeting: [Cohort or segment] → Hypothesis: [Why this improves retention]

2. [Experiment] → Targeting: [Cohort or segment] → Hypothesis: [Why this improves retention]



LEADING INDICATORS OF RETENTION:

What early behaviors predict long-term retention?

[Identify 2-3 actions in the first week that correlate with 90-day retention]

Implication: Optimize onboarding to drive these specific behaviors



RETENTION HEALTH SCORECARD:

Current: [Overall assessment]

Priority gaps: [Top 2-3 areas to address]

90-day goal: [Specific retention target to hit]



</retention_framework>

</retention_cohort_analysis>
```
