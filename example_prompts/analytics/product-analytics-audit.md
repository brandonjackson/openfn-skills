# Product Analytics Audit

**Source:** [https://www.productboard.com/product-management-prompts-library/product-analytics-audit/](https://www.productboard.com/product-management-prompts-library/product-analytics-audit/)

> Audit your product analytics implementation for gaps, bad data, and missing tracking — so you can trust what you measure.

## Prompt Template

```
<analytics_audit>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR SETUP:

1. What analytics tools do you use? (Mixpanel, Amplitude, GA4, Segment, etc.)

2. Who implemented the tracking? (engineering team, growth team, third-party)

3. When was it last audited or significantly updated?

4. What events or metrics do you rely on for key decisions?

5. What decisions have you made recently based on analytics data?



CONCERNS:

6. Any metrics that feel off or that you don't trust?

7. Any user behaviors you can't measure but wish you could?

8. Any discrepancies between different tools (e.g., analytics vs. database counts)?

9. How does your team currently validate that tracking is working?

</inputs>



<audit_framework>



You are a product analytics consultant who audits analytics implementations for data quality, coverage gaps, and structural issues. You know that decisions made on bad data are worse than decisions made on no data — at least with no data, you know you're guessing.



AUDIT DIMENSIONS:



DIMENSION 1: TRACKING COVERAGE



Map your tracking against your user journey:



For each key step in your product's primary user journey:

Step: [Name]

Tracking in place: [Yes / No / Partial]

Event fired: [Event name if tracked]

Properties captured: [What context is captured with the event]

Gap: [What's missing]



Coverage assessment:

Full coverage: [% of key journey steps tracked]

Critical gaps: [Steps with no tracking that drive decisions]

Priority tracking to add: [Top 3 missing events]



DIMENSION 2: EVENT QUALITY



For critical events in your tracking plan:



Event: [Name]

Problem types to check:

- FIRES TOO OFTEN: Event firing on page load instead of user action

- FIRES TOO RARELY: Not firing in all scenarios it should

- WRONG PROPERTIES: Missing user ID, session ID, or key context

- INCONSISTENT NAMING: Same action tracked with multiple event names

- MISSING USER IDENTITY: Anonymous events that can't be attributed



Quality test protocol:

1. Browse through the product as a test user

2. Check real-time events in your analytics tool

3. Verify every action you take generates the expected events

4. Check for duplicate events or unexpected fires



DIMENSION 3: IDENTITY AND USER MATCHING



Is your identity tracking correct?



Pre-login events: Are they attributed to the user when they eventually log in?

Multi-device: If a user uses web and mobile, are they the same user in your system?

Account vs. user: Are you tracking at the right level? (Individual user events vs. account-level events)

Anonymous → Known: Is the transition from anonymous to identified handled correctly?



Identity gaps found: [List if any]



DIMENSION 4: DATA GOVERNANCE



Naming conventions: Are events named consistently? (snake_case, camelCase, consistent verbs)

Documentation: Is there a tracking plan or data dictionary that's current?

Ownership: Does someone own analytics quality? (Often no one does)

Change process: When new features ship, is tracking added as part of the process?



DIMENSION 5: TRUST CALIBRATION



For your 5 most decision-critical metrics:



Metric: [Name]

Trust level: [High / Medium / Low]

Validation: [How do you know it's correct?]

Discrepancy: [Any mismatch with other data sources?]

Risk: [If this metric is wrong, what bad decisions could result?]



AUDIT FINDINGS SUMMARY:



CRITICAL ISSUES (Fix before making decisions based on this data):

1. [Issue] — Impact: [What decisions are at risk] — Fix: [Specific action]

2. [Issue] — Impact: [What decisions are at risk] — Fix: [Specific action]



IMPORTANT GAPS (Fix in next sprint):

1. [Gap] — Missing tracking for: [What behavior] — Fix: [Event to add]

2. [Gap] — Missing tracking for: [What behavior] — Fix: [Event to add]



CLEANUP (Nice to have):

1. [Naming inconsistency / duplicate event / documentation gap]

2. [Naming inconsistency / duplicate event / documentation gap]



ANALYTICS HEALTH SCORE:

Coverage: [X/10]

Quality: [X/10]

Identity: [X/10]

Governance: [X/10]

Trust: [X/10]

Overall: [X/50 → Letter grade]



30-DAY IMPROVEMENT PLAN:

Week 1: [Critical fixes]

Week 2: [Important gap tracking additions]

Week 3: [Cleanup and documentation]

Week 4: [Validation and re-audit of critical metrics]



</audit_framework>

</analytics_audit>
```
