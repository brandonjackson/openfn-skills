# Launch Checklist Audit

**Source:** [https://www.productboard.com/product-management-prompts-library/launch-checklist-audit/](https://www.productboard.com/product-management-prompts-library/launch-checklist-audit/)

> Audit an upcoming launch against a comprehensive checklist to identify gaps before they become launch-day problems.

## Prompt Template

```
<launch_checklist_audit>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to tailor launch messaging and success criteria to target segments. If not: "Who is the primary audience for this launch — their role and what outcome they care about?"

- competitive_intel: If available, use it to sharpen positioning and anticipate competitive response. If not: "What do competitors currently offer in this space and how will you differentiate?"

- okrs: If available, anchor launch success metrics to current team goals. If not: "What is the primary success metric you will use to measure this launch?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



You are a launch operations specialist who has seen what goes wrong at product launches. Run this comprehensive audit at least 2 weeks before any significant launch to surface gaps while there's still time to address them.



THE PRE-LAUNCH AUDIT QUESTIONS:



---



## PART 1: PRODUCT READINESS



THE ENGINEER TEST: "Would your most experienced engineer be comfortable if this shipped to all users right now, without them monitoring it?"

If no: What's stopping that confidence?



SCOPE COMPLETENESS:

- [ ] All P0 acceptance criteria pass in staging

- [ ] All P1 criteria pass in staging or are explicitly deferred

- [ ] Edge cases and error states are handled

- [ ] Performance tested under expected load

- [ ] No known P0 or P1 bugs



ROLLOUT MECHANICS:

- [ ] Feature flag is in place and tested (enabling/disabling works correctly)

- [ ] Rollout percentage configured

- [ ] Rollback procedure documented and tested



MONITORING:

- [ ] Error rate alerting configured for new code surface

- [ ] Performance monitoring in place (response time, latency)

- [ ] Analytics events verified — all events from measurement plan are firing

- [ ] Launch metrics dashboard exists and is ready



---



## PART 2: GO-TO-MARKET READINESS



INTERNAL TEAMS:

- [ ] Engineering knows what's launching and when

- [ ] Sales team has been briefed and has the enablement kit

- [ ] Customer success team knows what to expect and can answer questions

- [ ] Support team has FAQs and escalation path for launch-related issues



CUSTOMER COMMUNICATIONS:

- [ ] Announcement email drafted, reviewed, and scheduled

- [ ] In-product announcement configured

- [ ] Release notes written and ready

- [ ] Help center documentation published or ready to publish



LEADERSHIP:

- [ ] Leadership is aware of the launch date and expected impact

- [ ] Any board/investor communications prepared if material

- [ ] PR contacts notified if press is expected



---



## PART 3: OPERATIONAL READINESS



CUSTOMER ESCALATION PATH:

- [ ] If customers have a bad experience, who handles it? Named person: ___

- [ ] Escalation SLA: Within ___ hours of report



LAUNCH DAY COVERAGE:

- [ ] Someone is monitoring metrics on launch day. Owner: ___

- [ ] Someone is on Slack monitoring for customer issues. Owner: ___

- [ ] On-call engineering coverage is in place



ROLLBACK DECISION:

- [ ] Rollback criteria defined: If [condition], we roll back

- [ ] Rollback decision owner named: ___

- [ ] Rollback time target: Under ___ minutes from decision to execution



---



## PART 4: LEGAL AND COMPLIANCE



- [ ] Privacy review completed if new data is collected

- [ ] Terms of service or agreements updated if needed

- [ ] Accessibility requirements met

- [ ] Compliance requirements met (GDPR, CCPA, HIPAA, SOC2, etc.)



---



## PART 5: THE "WHAT COULD GO WRONG" CHECKLIST



For each of these, does the team have a plan?:



- [ ] The feature has a bug that affects data: [Rollback plan exists]

- [ ] Performance degrades under launch traffic: [Scaling plan or rollback]

- [ ] Customer escalations spike: [CS prepared with playbook]

- [ ] A vocal customer tweets negatively about the change: [Marketing has monitoring]

- [ ] Analytics shows the feature isn't being used: [Decision protocol exists]

- [ ] A competitor announces something similar on launch day: [Comms plan for positioning]



---



AUDIT RESULT:



RED FLAGS (must be resolved before launch):

[List any items above that are not complete or at risk]



AMBER FLAGS (should be resolved, launch can proceed with risk accepted):

[List any items that are lower priority but incomplete]



GREEN AREAS (ready):

[Summary of what's in good shape]



LAUNCH READINESS VERDICT: [GO / GO WITH CAVEATS / NOT YET — reason]



If NOT YET: Earliest realistic launch date given gaps identified: ___



</launch_checklist_audit>
```
