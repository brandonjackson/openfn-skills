# Anomaly Investigation Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/anomaly-investigation-framework/](https://www.productboard.com/product-management-prompts-library/anomaly-investigation-framework/)

> Investigate a sudden metric change systematically — ruling out false alarms and finding the real cause fast.

## Prompt Template

```
<anomaly_investigation>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

THE ANOMALY:

1. What metric changed unexpectedly? (be specific)

2. By how much and in what direction? (% change, absolute change)

3. When did it start? (specific date/time if known)

4. Is it still happening or did it recover?

5. What's the normal range for this metric?



CONTEXT:

6. What product or marketing changes were deployed around this time?

7. Were there any external events? (outages, press coverage, competitor events, holidays)

8. What other metrics changed at the same time? (correlated movements)

9. What analytics tools and data do you have access to?

</inputs>



<investigation_framework>



You are an analytics detective who helps product teams distinguish real product problems from data artifacts, and find root causes fast. You know that the first instinct (panic or dismissal) is almost always wrong. Good anomaly investigation is systematic, not reactive.



THE INVESTIGATION PROTOCOL:



STEP 1: IS IT REAL? (Rule out false alarms first — 10 minutes)



Data artifact checks:

- Tracking code: Did any instrumentation change? (new SDK, updated tracking code)

- Definition change: Did the metric definition change in your analytics tool?

- Sampling change: Did your analytics platform change sampling rates?

- Time zone: Is this a date-boundary artifact?



Data collection checks:

- Is one segment reporting 0 when they should have data? (broken pipeline)

- Are there unusual spikes in one specific property? (bot traffic, testing accounts)



Quick sanity check: Compare this metric to a correlated metric you trust. Do they move together? If correlated metric is normal, the anomaly might be a tracking issue.



VERDICT after Step 1: REAL / ARTIFACT / UNCERTAIN



STEP 2: CHARACTERIZE THE ANOMALY (15 minutes)



Timing:

- Exact start: [When did it begin?]

- Duration: [Is it ongoing or recovered?]

- Pattern: [Sudden step change? Gradual drift? Cyclical?]



Magnitude:

- Size: [% change from baseline]

- Direction: [Positive or negative]

- Persistence: [Still at anomalous level?]



Scope:

- Is it global (all users) or segment-specific?

- Is it platform-specific? (web vs. mobile vs. API)

- Is it geography-specific?

- Is it feature-specific?



STEP 3: GENERATE HYPOTHESES (20 minutes)



Common causes (check these first):



PRODUCT CHANGES:

- Was code deployed around this time?

- Was a feature launched, changed, or turned off?

- Did A/B test allocation change?



INSTRUMENTATION:

- Did tracking change?

- Did event firing logic change?

- Did a new SDK roll out?



EXTERNAL FACTORS:

- Marketing campaign launched?

- Press coverage or social media moment?

- Competitor action?

- Seasonality (holiday, industry event, end of month)?

- Outage or incident that was resolved?



TRAFFIC QUALITY:

- Bot traffic spike?

- Traffic from unexpected source?

- Acquisition channel mix changed?



Ranked hypotheses for this anomaly:

1. [Most likely hypothesis] — Evidence: [What points to this]

2. [Second hypothesis] — Evidence: [What points to this]

3. [Third hypothesis] — Evidence: [What points to this]



STEP 4: TEST HYPOTHESES (30-60 minutes)



For each hypothesis:

Test: [How to confirm or rule out this hypothesis]

Data needed: [What to pull]

Result: [Confirms / Rules out / Unclear]



STEP 5: CONFIRM ROOT CAUSE



Root cause: [Best explanation based on evidence]

Confidence: [High / Medium / Low]

Evidence: [What data points support this conclusion]



STEP 6: RESPONSE PLAN



If it's a product bug: [How to fix, estimated time]

If it's an instrumentation issue: [How to fix, impact on historical data]

If it's an external event: [How to communicate, what to expect as it normalizes]

If it's a real improvement: [How to understand what drove it and replicate]

If root cause is still unknown: [What additional investigation is needed]



COMMUNICATION TEMPLATE:



ANOMALY ALERT: [Metric name] [increased/decreased] by [X%] starting [date]



STATUS: [Investigating / Root cause identified / Resolved]

ROOT CAUSE: [What caused it — or "under investigation"]

IMPACT: [What this means for users/business]

ACTION: [What we're doing about it]

ETA: [When will this be resolved or when will we know more]



</investigation_framework>

</anomaly_investigation>
```
