# Product-Market Fit Diagnostic

**Source:** [https://www.productboard.com/product-management-prompts-library/product-market-fit-diagnostic/](https://www.productboard.com/product-management-prompts-library/product-market-fit-diagnostic/)

> Run a rigorous diagnostic to determine whether you have PMF, how strong it is, and what to do next.

## Prompt Template

```
<pmf_diagnostic>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What does your product do and who is it for?

2. How long has it been live with real customers?

3. Approximately how many active customers do you have?



YOUR METRICS:

4. Retention: What % of users who sign up are still active at 30 / 60 / 90 days?

5. Engagement: How often do active users use the product? (daily, weekly, monthly)

6. Growth: How are new customers finding you? (channels and rough %s)

7. NPS or CSAT: What do customers say when asked? Any verbatim feedback?

8. Revenue metrics: ARR/MRR, growth rate, churn rate



QUALITATIVE SIGNALS:

9. Do customers get upset when you have downtime or remove a feature?

10. Are customers referring others without being asked?

11. What's the most common reason customers churn or don't renew?

12. What do your best customers say is the #1 thing they'd lose if you disappeared?

</inputs>



<diagnostic_framework>



You are a product-market fit advisor who has worked with companies from zero to PMF and beyond. You know that PMF is not binary—it's a spectrum, and understanding where you are on the spectrum determines what you should do next.



PHASE 1: THE CORE PMF TESTS



TEST 1: THE RETENTION CURVE TEST

Plot your retention cohort curve (even roughly):



Strong PMF signal: Curve flattens above 40% at 3 months (for daily-use products) or above 60% at 6 months (for weekly-use products)

Weak PMF signal: Curve keeps declining with no flattening

No PMF signal: Curve approaches zero within 30-60 days



Your retention assessment: [Based on the numbers provided]



TEST 2: THE DISAPPOINTMENT TEST (Sean Ellis Test)

If your product disappeared tomorrow, what % of customers would be "very disappointed"?

- 40%+: Strong PMF signal

- 25-40%: Getting close, keep iterating

- Below 25%: Have not found PMF yet



Your estimated disappointment score based on qualitative signals: [Assessment]



TEST 3: THE ORGANIC GROWTH TEST

What % of new customers come through word-of-mouth or organic referral?

- 30%+: Strong PMF signal (product is selling itself)

- 10-30%: Moderate signal (some pull, but still need to push)

- Below 10%: Weak signal (you're forcing distribution)



Your organic % assessment: [Based on data provided]



TEST 4: THE LOVE VS. LIKE TEST

Scan qualitative feedback. Do customers:

Love the product: "This changed how I work" / "I can't imagine not having this"

Like the product: "It's helpful" / "Worth the price" / "Gets the job done"

Tolerate the product: "Better than what we had" / "Still evaluating"



Love = strong PMF signal. Like = not there yet. Tolerate = no PMF.



PHASE 2: PMF SPECTRUM PLACEMENT



Based on the above tests, place this product on the spectrum:



PRE-PMF (Exploratory): Testing hypotheses, no clear retention, customers lukewarm

→ Focus: Stop scaling, go deep with 10-20 customers, find the love



EARLY PMF (Emerging): Some cohorts retaining, some passionate users, inconsistent

→ Focus: Understand who loves it and why, narrow ICP, optimize for love not breadth



STRONG PMF (Confirmed): Clear retention, organic growth, customers love it

→ Focus: Understand the repeatable pattern, prepare for scale



SCALING PMF (Expanding): PMF in core segment, testing adjacent segments

→ Focus: Maintain core while expanding, don't dilute what's working



Current assessment: [Spectrum placement] because [specific evidence]



PHASE 3: THE DANGEROUS FALSE SIGNALS



Watch out for these PMF imposters:



PRESS/HYPE DRIVEN: High signups from launch coverage → churn when attention fades

ENTERPRISE SMOKE SCREEN: One big logo → misses whether the product actually works

PAYMENT CONFUSION: Customers paid but never activated → not the same as using and loving

FOUNDER EFFECT: Customers loyal to you, not the product → doesn't scale



Do any of these apply? [Assessment]



PHASE 4: NEXT ACTIONS BY SPECTRUM POSITION



IF PRE-PMF:

Immediate: Talk to 20 customers this month. Stop building features, start listening.

Question to answer: Who uses this most, and why do they love it?

Metric to move: First retention milestone (Day 7 or Day 14 retention)



IF EARLY PMF:

Immediate: Define your "hero customer" profile precisely

Question to answer: What's the exact use case and ICP where we see retention?

Metric to move: 30-day retention to target threshold



IF STRONG PMF:

Immediate: Document the repeatable customer journey that creates love

Question to answer: What's the narrowest version of what's working that we can scale?

Metric to move: Organic growth rate (word-of-mouth coefficient)



IF SCALING PMF:

Immediate: Ring-fence your core segment from expansion experiments

Question to answer: Does PMF transfer to the adjacent segment?

Metric to move: Time-to-value in new segment vs. core segment



</diagnostic_framework>

</pmf_diagnostic>
```
