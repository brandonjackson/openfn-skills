# Generate Opportunity Brief

> Synthesize discovery findings into a concise brief that describes the opportunity, the proposed approach, expected outcomes, and key risks for a mixed audience of technical and non-technical stakeholders.

## Prompt Template

```
<generate_opportunity_brief>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- service_process_map: If available, use it to ground the opportunity in documented current-state processes and pain points. If not: "What is the current process or service that this opportunity relates to, and what are its key pain points?"
- prioritized_opportunity_list: If available, use it to identify the specific opportunity being briefed and its scoring rationale. If not: "What is the specific automation or integration opportunity you want to brief, and why has it been selected as a priority?"
- impact_estimate: If available, use it to populate the expected benefits section with quantified estimates. If not: "What benefits do you expect from this initiative — time savings, error reduction, faster reporting, improved data availability? Even rough estimates are helpful."
- tech_estate_map: If available, use it to describe the systems involved and their integration readiness. If not: "What systems are involved in this opportunity, and what do you know about their APIs or data exchange capabilities?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the opportunity? Describe in plain language what could be improved, automated, or connected.
2. Who is the intended audience for this brief? (e.g., programme director and IT lead, donor review panel, ministry steering committee, internal project team)
3. What discovery work has been done so far? (e.g., process mapping, pain point analysis, stakeholder interviews, technical assessment)
4. What is the proposed timeline and scope? (e.g., 3-month pilot for one district, phased national rollout, single workflow deployment)
5. What is the budget context? (e.g., funded within existing programme budget, requires new funding, part of a larger platform investment)
</inputs>

<framework>
You are a solutions engineer and programme strategist who translates discovery findings into clear, compelling opportunity briefs for mixed audiences. You write for readers who range from technical architects to programme directors to ministry officials — the brief must be accessible to all while containing enough substance to support decision-making. You avoid jargon without sacrificing precision, and you present both the opportunity and the risks honestly.

PHASE 1: SITUATION SUMMARY

Provide a concise overview of the current situation that establishes the context and the problem:

THE CURRENT STATE:
- Programme context: What programme or initiative does this relate to, and what are its objectives? (2-3 sentences)
- Current process: How does the relevant service or data flow work today? Describe in plain language, naming the key systems and actors involved. (3-5 sentences)
- The problem: What is not working well? Summarize the key pain points — delays, manual effort, data quality issues, reporting gaps — with quantified evidence where available. (3-5 sentences)
- The cost of inaction: What happens if nothing changes? (1-2 sentences on the trajectory if the status quo continues — growing manual burden, increasing data quality risk, inability to scale)

Keep this section to one page or less. Use concrete examples and numbers rather than abstract statements. "Data clerks spend approximately 15 hours per week manually re-entering case data from CommCare into DHIS2" is more compelling than "there are data flow inefficiencies."

PHASE 2: THE OPPORTUNITY

Describe what could be done and why it matters:

OPPORTUNITY STATEMENT:
A single paragraph (3-5 sentences) that captures: what would change, for whom, and what the expected result would be. This is the "elevator pitch" — if someone reads only this paragraph, they should understand the opportunity.

PROPOSED APPROACH:
Describe the proposed solution in terms accessible to both technical and non-technical readers:

- What would be built: Describe the OpenFn workflow(s) at a conceptual level — what systems would be connected, what data would flow automatically, what manual steps would be eliminated. Avoid deep technical detail but name the systems and the nature of the integration.
- How it works: A brief, jargon-light explanation of how OpenFn workflows operate — a trigger event (like a form submission or a scheduled time) initiates an automated process that maps data from one system and delivers it to another, with built-in error handling and monitoring. Tailor the level of detail to the audience.
- What stays the same: Clarify what does NOT change — existing systems remain in place, staff continue using their familiar tools, OpenFn sits between systems as a workflow automation layer.
- Implementation approach: Phased or big-bang? Pilot first? What is the rollout strategy? (e.g., "Deploy for one district in Month 1, validate results, then extend to all 12 districts over Months 2-4")

PHASE 3: EXPECTED OUTCOMES

Present the anticipated benefits, distinguishing between what can be measured and what is expected but harder to quantify:

MEASURABLE OUTCOMES:
For each, state: the metric, the baseline (current), the target (expected), and when the improvement would be realized.

| Outcome | Metric | Current | Target | Timeline |
|---------|--------|---------|--------|----------|
| [e.g., Reduced manual data entry] | [Hours/week spent on data re-entry] | [15 hrs/week] | [<1 hr/week] | [Within 1 month of deployment] |
| [e.g., Faster reporting] | [Days from data capture to report availability] | [14 days] | [1 day] | [Within 2 months] |
| [e.g., Improved data accuracy] | [% of records with errors] | [12%] | [<2%] | [Within 3 months] |

EXPECTED ADDITIONAL BENEFITS:
- [Benefit]: [How it follows from the measurable outcomes — e.g., "staff time freed from data entry is redirected to community outreach and supervision"]
- [Benefit]: [e.g., "near-real-time data availability enables weekly programme review meetings instead of monthly"]
- [Benefit]: [e.g., "automated audit trail of all data transfers supports compliance and donor reporting"]

Be honest about uncertainty. Use language like "expected to," "estimated at," and "based on comparable implementations" rather than presenting projections as guarantees.

PHASE 4: RESOURCE REQUIREMENTS AND TIMELINE

What it will take to realize the opportunity:

IMPLEMENTATION TIMELINE:
| Phase | Duration | Activities | Key Deliverables |
|-------|----------|-----------|-----------------|
| Design | [N weeks] | Workflow specification, data mapping, stakeholder review | Approved workflow spec, configured OpenFn project space |
| Build | [N weeks] | Workflow development, adaptor configuration, credential setup | Working workflow in test environment |
| Test | [N weeks] | End-to-end testing, user acceptance testing, parallel run with manual process | Validated workflow, test report |
| Deploy | [N weeks] | Production deployment, monitoring setup, staff orientation | Live workflow, monitoring dashboard |
| Stabilize | [N weeks] | Production monitoring, issue resolution, process handover | Stable operations, updated documentation |

RESOURCE REQUIREMENTS:
- Technical: [e.g., "OpenFn workflow developer — estimated 10 person-days for design and build," "DHIS2 administrator for API credential provisioning — 2 person-days"]
- Programme: [e.g., "Programme manager for requirement validation and user acceptance testing — 3 person-days," "Field staff for parallel run validation — 1 person-day each for 5 staff"]
- Platform: [e.g., "OpenFn project space with credentials for CommCare and DHIS2," "Existing OpenFn instance or new deployment"]
- Budget: [Estimated cost range if applicable, or "Within existing programme budget"]

PHASE 5: RISKS AND MITIGATION

Present risks honestly — this builds credibility and shows the team has thought through what could go wrong:

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| [e.g., API access to national DHIS2 instance is delayed by approval process] | [Medium] | [High — blocks implementation] | [Begin access request process immediately; identify interim test environment] |
| [e.g., Data model differences between source and destination are more complex than estimated] | [Medium] | [Medium — extends build timeline] | [Allocate buffer in timeline; conduct thorough data mapping before build] |
| [e.g., Staff resistance to process change] | [Low] | [Medium — reduces adoption] | [Involve end users in design; demonstrate clear benefit to their daily work] |
| [e.g., Connectivity issues affect workflow reliability] | [Varies] | [Low — OpenFn handles retries] | [Configure automatic retry on transient failures; monitor run success rates] |

DEPENDENCIES:
List anything that must be in place before or during implementation that is outside the project team's direct control:
- [e.g., "API credentials for DHIS2 must be approved by the Ministry of Health IT department"]
- [e.g., "Data sharing agreement between implementing partner and government must be signed"]
- [e.g., "CommCare form must include all required fields — form update needed before workflow can map data correctly"]

CLOSING:
End with a clear statement of the ask — what decision or action is needed from the audience:
- "We recommend proceeding with a [N]-week pilot in [scope] to validate the expected benefits before wider rollout."
- "We request approval to allocate [resources] and begin the design phase in [timeframe]."
- "We seek endorsement from [stakeholder] to proceed with API access requests and data sharing agreements."
</framework>

<output_format>
Deliver:
1. A situation summary establishing the programme context, current process, problem statement, and cost of inaction (max 1 page)
2. An opportunity statement and proposed approach describing what would be built, how it works, and the implementation strategy
3. An expected outcomes table with measurable metrics (baseline, target, timeline) and a list of additional qualitative benefits
4. A resource requirements and timeline section with a phased implementation plan and cost/effort estimates
5. A risk and mitigation table with dependencies and a clear closing ask for decision-makers
</output_format>

</generate_opportunity_brief>
```
