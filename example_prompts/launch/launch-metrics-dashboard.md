# Launch Metrics Dashboard

**Source:** [https://www.productboard.com/product-management-prompts-library/launch-metrics-dashboard/](https://www.productboard.com/product-management-prompts-library/launch-metrics-dashboard/)

> Design a launch monitoring dashboard that tells you within hours whether the launch is healthy or needs intervention.

## Prompt Template

```
<launch_metrics_dashboard>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to tailor launch messaging and success criteria to target segments. If not: "Who is the primary audience for this launch — their role and what outcome they care about?"

- competitive_intel: If available, use it to sharpen positioning and anticipate competitive response. If not: "What do competitors currently offer in this space and how will you differentiate?"

- okrs: If available, anchor launch success metrics to current team goals. If not: "What is the primary success metric you will use to measure this launch?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR LAUNCH:

1. What are you launching?

2. What's the primary success metric you're trying to move?

3. What metrics would tell you the launch went badly? (error rates, churn signals, performance)

4. What's your monitoring stack? (Datadog, Grafana, Mixpanel, Amplitude, etc.)

5. What does "healthy" look like vs. "needs attention" vs. "rollback now"?

6. Who needs to be notified if metrics go bad?

</inputs>



<launch_dashboard_framework>



You are a launch operations specialist who designs monitoring dashboards for product launches. You know that most launch monitoring is reactive — teams notice problems from customer support tickets, not from dashboards. A well-designed launch dashboard detects problems within minutes.



THE LAUNCH MONITORING PHILOSOPHY:



Watch in two layers:

LAYER 1 — PRODUCT HEALTH (Is the feature working?): Technical metrics

LAYER 2 — PRODUCT SUCCESS (Is the feature helping?): Business and UX metrics



---



LAYER 1: PRODUCT HEALTH METRICS (Real-time, first 24-48 hours)



ERROR RATE:

What: % of feature interactions that result in errors

Baseline: [Current error rate in production]

Green: Within 0.5% of baseline

Yellow: 1-2% above baseline

Red: >2% above baseline or any error rate spike



Response time / Latency:

What: Time for feature to load or action to complete

Baseline: [Current p50, p95, p99 latency]

Green: p99 < [X]ms

Yellow: p99 [X-Y]ms

Red: p99 > [Y]ms or p50 > [Z]ms



API error rate (if applicable):

What: % of API calls returning error status codes

Baseline: [Current rate]

Green / Yellow / Red: [Define]



LAYER 2: PRODUCT SUCCESS METRICS (Daily, first 1-4 weeks)



PRIMARY SUCCESS METRIC:

Metric: [Your primary metric from the PRD]

Baseline: [Pre-launch baseline]

Green: On track to hit [target]

Yellow: Trending 10-20% below expectation

Red: More than 20% below expectation



ADOPTION / ACTIVATION:

Feature activated / used: [% of users who have used the feature since launch]

Daily trend: [How adoption is growing each day]

Expected adoption rate: [X% in first week, Y% in first month]



SUPPORT VOLUME:

New support tickets mentioning [feature]: [# per day]

Baseline: [Normal daily support volume]

Spike indicator: >2× normal volume for [feature]-related tickets



USER BEHAVIOR SIGNAL:

Feature used more than once: [Indicates it's not just curiosity — users are coming back]

Time-to-first-use: [How long after signup does a user first use the new feature]



GUARDRAIL METRICS (must not get worse):

Core retention: [Week-over-week]

Core feature usage: [Ensure existing features aren't degraded]

Revenue metrics: [MRR, conversion]



---



DASHBOARD LAYOUT:



HEADER: [Launch name] | [Date launched] | [Current rollout %] | Status: 🟢/🟡/🔴



SECTION 1 — HEALTH (Real-time):

[Error rate chart — last 24 hours]

[Response time chart — p50, p95, p99]

[API success rate — if applicable]



SECTION 2 — ADOPTION:

[Daily new users activating the feature]

[Cumulative adoption since launch]

[Daily feature usage — absolute and per-user]



SECTION 3 — BUSINESS:

[Primary success metric — actual vs. expected trajectory]

[Support ticket volume for feature]



SECTION 4 — GUARDRAILS:

[Any metrics that must not degrade]



---



ALERT CONFIGURATION:



YELLOW alerts (send Slack notification to #launch-monitoring):

- Error rate > [X]% above baseline

- Response time p95 > [Y]ms

- Support tickets > [Z] per hour



RED alerts (send Slack + page the on-call engineer):

- Error rate > [X]% above baseline sustained for [Y] minutes

- Any 5xx error rate > [Z]%

- Response time p99 > [Y]ms



ROLLBACK TRIGGER (PM + EM must agree):

- [Specific condition that triggers rollback conversation]

- [Specific condition that is an automatic rollback with no discussion needed]



---



LAUNCH REVIEW SCHEDULE:



T+2 hours: PM reviews error rates and initial adoption

T+24 hours: PM + EM formal health check

T+7 days: Full launch review with team — is rollout proceeding?

T+30 days: Success metric assessment



</launch_dashboard_framework>

</launch_metrics_dashboard>
```
