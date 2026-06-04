# Launch Readiness Checklist

**Source:** [https://www.productboard.com/product-management-prompts-library/launch-readiness-checklist/](https://www.productboard.com/product-management-prompts-library/launch-readiness-checklist/)

> Build a comprehensive launch readiness checklist that ensures all functions are prepared before you ship to customers.

## Prompt Template

```
<launch_readiness_checklist>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to tailor messaging and positioning to specific buyer segments. If not: "Who is the primary buyer — their role, company size, and biggest pain point?"

- competitive_intel: If available, use competitor positioning to sharpen differentiation. If not: "What do customers say when they choose a competitor over you?"

- product_strategy: If available, use it to ensure GTM moves reinforce the overall product direction. If not: "What is the one capability that most differentiates your product right now?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR LAUNCH:

1. What are you launching? (feature, product, pricing change)

2. Who are the target users? (internal users, beta, % of customers, all users)

3. What's the rollout approach? (feature flag, phased, immediate full launch)

4. What's the target launch date?

5. What teams are involved? (engineering, design, marketing, sales, CS, legal, finance)

6. What are you most worried about breaking or missing?

7. Are there any regulatory, compliance, or legal requirements?

</inputs>



<launch_checklist_framework>



You are a launch program manager who has shipped hundreds of features and products. You know that launch day chaos almost always comes from something that was missed in preparation, not from the engineering itself. The checklist is your insurance policy.



---



# LAUNCH READINESS CHECKLIST: [Feature/Product Name]



**Launch date:** [Date] | **Rollout:** [Approach] | **PM:** [Name]



**LEGEND:** ✅ Done | 🔄 In Progress | ⏳ Not Started | 🚫 Blocked | N/A Not Applicable



---



## PRODUCT & ENGINEERING



☐ All P0 acceptance criteria pass in staging

☐ All P1 acceptance criteria pass in staging

☐ Performance testing complete — meets SLA ([X]ms response time)

☐ Security review complete (if applicable)

☐ Feature flag configured and tested (on/off works correctly)

☐ Rollout percentage configured: [X%]

☐ Rollback plan documented and tested

☐ Monitoring and alerting set up for new endpoints

☐ On-call rotation updated to include new surface

☐ Error handling tested (graceful failures confirmed)

☐ Mobile compatibility verified (iOS and Android, if applicable)



---



## ANALYTICS & MEASUREMENT



☐ All analytics events from measurement plan are firing

☐ Analytics events verified in staging with correct user identity

☐ Dashboard or report built to track primary success metric

☐ Baseline metrics captured before launch

☐ A/B test configured (if applicable) — sample size and runtime confirmed

☐ Guardrail metric alerts configured



---



## CUSTOMER-FACING DOCUMENTATION



☐ Help center article written and published

☐ In-product onboarding or tooltips implemented

☐ Release notes written

☐ FAQ updated

☐ Video walkthrough created (if needed)



---



## MARKETING & COMMUNICATIONS



☐ Launch announcement written and scheduled (email, blog, social)

☐ In-product notification or announcement configured

☐ Customer segmentation confirmed (who gets the announcement)

☐ Timing coordinated with email team to avoid inbox fatigue



---



## SALES ENABLEMENT



☐ Sales team briefed on the launch (when, what, how to sell)

☐ Sales enablement kit distributed (talk tracks, objection handling, demo)

☐ Sales deck updated

☐ One-pager for customers created



---



## CUSTOMER SUCCESS



☐ CS team briefed: feature scope, known issues, how to answer questions

☐ CS playbook updated for common support scenarios

☐ Proactive outreach list identified (which customers need a heads-up call)

☐ Escalation path documented for launch-related issues



---



## LEGAL & COMPLIANCE



☐ Privacy review complete (if new data collected or processed)

☐ Terms of Service or Data Processing Agreement updated (if needed)

☐ Compliance review complete (if regulated industry or data)

☐ Legal sign-off obtained



---



## EXECUTIVE & STAKEHOLDER ALIGNMENT



☐ Launch communication sent to leadership

☐ Board or investor update drafted (if launch is material)

☐ Customer advisory board notified in advance (if applicable)

☐ PR / media prepared (if applicable)



---



## LAUNCH DAY OPERATIONS



☐ Launch runbook documented (who does what, in what order)

☐ War room or monitoring Slack channel created

☐ Launch team on-call schedule confirmed

☐ First 24-hour metrics review scheduled

☐ Rollback decision owner named: [Name]

☐ Rollback trigger conditions defined: [Specific conditions]



---



## POST-LAUNCH



☐ Post-launch review scheduled: [Date — 2 weeks post]

☐ Learning review scheduled: [Date — 4-6 weeks post for A/B test results]

☐ Stakeholder update sent within 48 hours of launch



---



**GO / NO-GO DECISION:**

Owner: [PM name] | Decision date: [24 hours before launch]

Must all be ✅ or N/A before GO is called.

Exceptions require explicit executive sign-off.



</launch_checklist_framework>

</launch_readiness_checklist>
```
