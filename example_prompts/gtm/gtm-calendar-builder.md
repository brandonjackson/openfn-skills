# GTM Calendar Builder

**Source:** [https://www.productboard.com/product-management-prompts-library/gtm-calendar-builder/](https://www.productboard.com/product-management-prompts-library/gtm-calendar-builder/)

> Build a coordinated GTM launch calendar that sequences marketing, sales, and product activities for maximum impact.

## Prompt Template

```
<gtm_calendar_builder>



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

1. What are you launching? (describe it briefly)

2. Target launch date: (the day it goes live for customers)

3. What channels will you use? (email, blog, in-product, social, PR, events, sales outreach)

4. Who is responsible for each channel? (names or teams)

5. What's the timeline working backward from launch? (4 weeks / 8 weeks / 12 weeks)

6. Are there any hard timing constraints? (conference, competitor event, board meeting, seasonal)

7. What's the budget for launch activities? (roughly)

8. What does the customer experience look like on launch day? (what do they see, when, in what order)

</inputs>



<gtm_calendar_framework>



You are a GTM program manager who orchestrates multi-channel launches. You know that launch chaos happens when everyone does their own thing without a shared timeline. A GTM calendar creates coordination without over-engineering.



GTM CALENDAR — [PRODUCT/FEATURE NAME]

Launch date: [Date] | Owner: [PM/PMM]



---



## PRE-LAUNCH PREPARATION PHASE



### T-8 Weeks (or [Date])

- [ ] Finalize launch messaging and positioning — Owner: [PMM]

- [ ] Draft blog post — Owner: [Marketing]

- [ ] Create sales enablement kit — Owner: [PM]

- [ ] Identify beta customers for case study or quotes — Owner: [CS]



### T-6 Weeks (or [Date])

- [ ] Sales team briefing scheduled — Owner: [PM]

- [ ] Help center article drafted — Owner: [CS or Tech Writer]

- [ ] Email list segmented for launch announcement — Owner: [Marketing]

- [ ] Launch landing page drafted — Owner: [Marketing]



### T-4 Weeks (or [Date])

- [ ] Beta program in progress (if applicable)

- [ ] Sales team trained on new feature — Owner: [PM/PMM]

- [ ] CS team trained on support scenarios — Owner: [CS Lead]

- [ ] Legal and compliance review complete — Owner: [Legal]

- [ ] Email campaign copy finalized — Owner: [Marketing]



### T-2 Weeks (or [Date])

- [ ] Engineering: Feature ready in staging, all P0s resolved

- [ ] Launch readiness checklist reviewed — Owner: [PM]

- [ ] Blog post finalized — Owner: [Marketing]

- [ ] Customer case study or quotes collected — Owner: [CS/PMM]

- [ ] Social media posts drafted and scheduled — Owner: [Marketing]

- [ ] Launch email finalized and tested — Owner: [Marketing]

- [ ] PR brief sent (if applicable) — Owner: [Marketing]



---



## LAUNCH WEEK



### T-5 Business Days (Monday before launch week)

- [ ] Final go/no-go meeting — Owner: [PM]

- [ ] Launch announcement email scheduled to send — Owner: [Marketing]

- [ ] Social posts queued — Owner: [Marketing]

- [ ] CS proactive outreach to key accounts begins — Owner: [CS]



### T-2 Days

- [ ] Engineering: Feature ready in production, behind flag

- [ ] Analytics confirmed firing correctly — Owner: [PM/Eng]

- [ ] All stakeholders confirmed aware of timing



### LAUNCH DAY (T-0)

- [ ] 9am: Feature flag enabled to [X%] of users — Owner: [Eng]

- [ ] 10am: Customer announcement email sends — Owner: [Marketing]

- [ ] 10am: Blog post publishes — Owner: [Marketing]

- [ ] 10am: Social posts go live — Owner: [Marketing]

- [ ] 11am: In-product announcement activates — Owner: [Eng/PM]

- [ ] 12pm: Sales outreach begins to target accounts — Owner: [Sales]

- [ ] EOD: Monitor metrics, check for errors, assess launch health — Owner: [PM]



---



## POST-LAUNCH



### T+1 Week

- [ ] Launch metrics reviewed — Owner: [PM]

- [ ] Support ticket analysis — Owner: [CS]

- [ ] Stakeholder update sent — Owner: [PM]

- [ ] Continue rollout to [X]% → [Y%] — Owner: [Eng]



### T+2 Weeks

- [ ] Customer feedback synthesis — Owner: [PM]

- [ ] A/B test results check — Owner: [PM]



### T+4 Weeks

- [ ] Full rollout complete (if phased)

- [ ] Post-launch review — Owner: [PM]

- [ ] Document lessons learned — Owner: [PM]



---



LAUNCH COMMUNICATION ESCALATION:

If major issue discovered on launch day: → [Rollback procedure, contact: Eng Lead]

If customer escalation: → [CS Lead + PM within 1 hour]

If press inquiry: → [Marketing/PR Lead]



</gtm_calendar_framework>

</gtm_calendar_builder>
```
