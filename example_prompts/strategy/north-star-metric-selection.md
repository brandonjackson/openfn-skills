# North Star Metric Selection

**Source:** [https://www.productboard.com/product-management-prompts-library/north-star-metric-selection/](https://www.productboard.com/product-management-prompts-library/north-star-metric-selection/)

> Choose the right North Star Metric for your product — one that actually predicts long-term success, not vanity.

## Prompt Template

```
<north_star_metric_selection>



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

1. What does your product do and for whom?

2. What's the core value delivered to users? (what changes in their life/work)

3. What's your business model? (subscription, usage-based, marketplace, etc.)

4. What phase are you in? (pre-PMF, post-PMF growth, scaling, mature)



CURRENT METRICS:

5. What metrics do you track today?

6. What metric does leadership focus on most?

7. What does your team optimize for in day-to-day decisions?



HYPOTHESES:

8. What user behavior do you believe most predicts long-term retention?

9. What do your best customers do that your churned customers don't?

10. If you could only improve one number, what would it be?

</inputs>



<nsm_framework>



You are a product analytics advisor who has helped dozens of companies select and operationalize North Star Metrics. You know that most companies either pick a vanity metric (signups, MRR), or pick something so complex it's unmeasurable. The right North Star is specific, predictive, and actionable.



PHASE 1: NORTH STAR CRITERIA



A great North Star Metric must pass all five tests:



TEST 1 — LEADING INDICATOR: Does this metric predict revenue, not just reflect it?

Bad: MRR (lags behind, you can't act on it)

Good: # of users who complete core action within 14 days of signing up



TEST 2 — REFLECTS REAL VALUE: Does improving this metric require actually delivering more value to users?

Bad: Logins (gaming doesn't require delivering value)

Good: Tasks completed with AI assistance (requires the product to work)



TEST 3 — ACTIONABLE: Can your team take specific actions that move this metric?

Bad: User satisfaction score (too diffuse)

Good: % of users who invite at least one teammate in first week



TEST 4 — SENSITIVE: Does it move in a reasonable timeframe when you ship improvements?

Bad: Annual contract value (takes 12 months to see)

Good: Weekly active users who do core workflow



TEST 5 — SIMPLE: Can every person on the team explain what it means?

Bad: Composite index across 7 metrics

Good: "Number of projects with at least 3 collaborators active this week"



PHASE 2: NORTH STAR CANDIDATES BY BUSINESS MODEL



Based on your business model, typical North Star candidates:



SUBSCRIPTION (B2B SaaS):

- Weekly Active Accounts doing core workflow

- # of accounts reaching defined "activated" state

- Net Revenue Retention (expansion minus churn)

- # of accounts with 3+ active seats



USAGE-BASED:

- Total successful API calls

- Units of value consumed (queries run, documents processed, minutes used)

- Monthly active customers who cross engagement threshold



MARKETPLACE:

- Gross Merchandise Value

- # of successful transactions

- # of active supply-side + demand-side users both active in same week



CONSUMER:

- Daily Active Users (with specific action definition)

- # of core actions per user per week

- D30 retention



Your business model candidates:

[List 3-5 candidates based on the inputs provided]



PHASE 3: NORTH STAR EVALUATION



Score each candidate (1-5 on each criterion):



[For each candidate:]

Metric name: [Name]

Definition: [Exact, unambiguous definition — every word matters]

Leading indicator test: [Score 1-5]

Real value test: [Score 1-5]

Actionable test: [Score 1-5]

Sensitive test: [Score 1-5]

Simple test: [Score 1-5]

Total: [X/25]



PHASE 4: NORTH STAR ECOSYSTEM



The NSM doesn't work alone. Build the ecosystem:



NORTH STAR: [The chosen metric]



Input metrics (levers that drive the NSM):

- Acquisition input: [What drives new users/accounts to reach NSM threshold]

- Activation input: [What accelerates first success]

- Engagement input: [What deepens usage]

- Retention input: [What prevents churn before value achieved]



Counter-metric: [What could you game while hitting NSM that would be bad]

Example: If NSM is invites sent, counter-metric is invite acceptance rate



Lagging business metric: [Revenue metric that NSM should eventually predict]



PHASE 5: IMPLEMENTATION



Make it real:



DEFINITION (write it precisely):

"[NSM name] = [exact calculation, every term defined]"

Measurement: [How is this tracked? What system? How often?]

Baseline: [Current value]



90-day targets:

- Week 4: [Value]

- Week 8: [Value]

- Week 12: [Value]



Team integration:

- Who owns this metric? [Name/role]

- Where does it appear? (weekly review, dashboard, sprint planning)

- What actions does the team take if it drops? [Protocol]



</nsm_framework>

</north_star_metric_selection>
```
