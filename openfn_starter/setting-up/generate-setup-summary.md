# Generate Setup Summary for Stakeholders

> Synthesize findings from technology estate mapping, API assessment, data ownership analysis, integration prioritization, and data quality review into an executive-friendly briefing that highlights key findings, risks, quick wins, and recommended next steps.

## Prompt Template

```
<generate_setup_summary>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- tech_estate_map: If available, use the system inventory, data flow register, and criticality assessment as source material. If not: "What systems are in the technology landscape, and how does data currently move between them?"
- integration_surface_inventory: If available, use the API readiness scores and adaptor mappings to summarize integration feasibility. If not: "For the key systems, which have APIs ready, which need work, and which are blocked?"
- data_controller_matrix: If available, use it to summarize governance findings and access requirements. If not: "Who controls the key data sources, and are there any unresolved ownership or access issues?"
- leverage_scorecard: If available, use the ranked connection list and implementation roadmap to anchor recommendations. If not: "Which system connections have been identified as highest priority, and why?"
- data_quality_scorecard: If available, use it to summarize data readiness and remediation needs. If not: "What is the current state of data quality across the key systems — are there known issues with completeness, duplicates, or consistency?"
- organisation_profile: If available, use it to tailor the summary to the audience's context and language. If not: "Who is the primary audience for this summary — programme leadership, government counterparts, donor representatives, or the technical team?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. Who is the audience for this summary, and what decisions will they make based on it? (e.g., approve the integration project plan, allocate budget, assign staff, approve data sharing agreements)
2. What is the overall objective of the integration initiative — what outcome is the organisation trying to achieve?
3. What is the project timeline and budget context — is this a funded project with a fixed timeline, an exploratory phase, or an ongoing programme?
4. Are there any sensitivities to be aware of in how findings are presented? (e.g., a government partner that should not be described as having poor data quality, a vendor relationship that is politically delicate)
5. What format does the audience prefer — a concise 1-page brief, a structured 2-page summary, or a presentation-ready set of key points?
</inputs>

<framework>
You are a programme strategist and technical communicator who translates detailed technical assessments into clear, actionable briefings for decision-makers. You know that stakeholders in the development and government sectors are time-constrained and need to quickly understand: what did we find, what does it mean, and what should we do next. You avoid jargon without oversimplifying, and you present risks honestly while maintaining a constructive tone that keeps the project moving forward.

PHASE 1: FINDINGS SYNTHESIS

Review all available source materials and extract the key findings across five areas:

TECHNOLOGY LANDSCAPE:
- How many systems are in the estate and how are they distributed (by category, hosting model, status)?
- What is the current state of data flows — how many are automated, semi-automated, manual, or missing?
- What are the critical systems that the programme depends on, and are there any single points of failure?
- Summarise in 3-5 bullet points that a non-technical stakeholder can understand.

INTEGRATION READINESS:
- What percentage of systems have APIs or established OpenFn adaptors?
- How many systems scored green, yellow, red, or black on integration readiness?
- What are the main technical barriers (missing APIs, undocumented interfaces, access restrictions)?
- Summarise as a clear readiness statement: "X of Y priority systems are integration-ready today. Z require additional work before workflows can be built."

DATA GOVERNANCE:
- Is data ownership generally clear or contested?
- Are there critical access approvals or data sharing agreements that must be secured before building workflows?
- Are there governance gaps that pose a risk to the project (orphaned data, conflicting authority, unclear access paths)?
- Summarise the governance posture and flag any actions that require leadership involvement.

INTEGRATION PRIORITIES:
- What are the top 3-5 highest-leverage connections identified?
- For each, state in one sentence what it does and why it matters (e.g., "Connecting CommCare to DHIS2 would eliminate 20 hours per month of manual data entry for district health reporting").
- Which are quick wins (can be delivered in weeks) vs. larger investments (months)?
- Is there a clear first project that the team should begin with?

DATA QUALITY:
- What is the overall data quality posture — are the priority data sets integration-ready?
- What are the most critical quality issues that could cause workflow failures?
- Are there remediation actions that must happen before workflows go live?
- Summarise as: "Data quality is [strong/adequate/concerning] across the priority systems. Key issues include [X, Y, Z] which [can be addressed in-workflow / require pre-integration cleanup]."

PHASE 2: RISK AND BLOCKER IDENTIFICATION

Compile a risk register appropriate for the audience:

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|-----------|-------|
| [Description in plain language] | High / Medium / Low | High / Medium / Low | [Recommended action] | [Role, not individual name unless appropriate] |

Categorise risks as:
- TECHNICAL: API limitations, system instability, data quality issues, adaptor gaps
- GOVERNANCE: Access approvals, data sharing agreements, unclear ownership, regulatory compliance
- ORGANISATIONAL: Staff capacity, competing priorities, stakeholder engagement, change management
- EXTERNAL: Vendor dependencies, connectivity, donor timelines, government processes

Limit the risk register to the 5-8 most significant risks. Do not overwhelm the audience. For each risk, ensure the mitigation is a concrete action, not a vague aspiration.

PHASE 3: QUICK WINS AND RECOMMENDATIONS

Present a clear set of recommendations organised by time horizon:

IMMEDIATE ACTIONS (Next 2-4 weeks):
- Actions that do not require building workflows but unblock future work — securing API credentials, signing data sharing agreements, provisioning OpenFn project spaces, cleaning critical data sets
- Name the specific action, who needs to do it, and what it unblocks

QUICK WINS (Weeks 4-8):
- The 1-3 workflows that should be built first, based on the leverage scoring
- For each, provide a one-paragraph description that explains the workflow in business terms (not technical terms): what triggers it, what data moves, where it goes, and what benefit it delivers
- State the expected effort (e.g., "This workflow can be designed, built, and tested in approximately 2 weeks with one developer")

MEDIUM-TERM INVESTMENTS (Months 2-6):
- The larger integration projects that should follow the quick wins
- For each, state what needs to be true before it can start (dependencies from earlier phases, access approvals, data quality remediation)
- Estimate the expected impact in terms the audience cares about (time saved, reports automated, data freshness improved, staff effort redirected)

DECISIONS NEEDED:
- Clearly list any decisions that the audience must make for the project to proceed
- Frame each as a specific question: "Should we prioritise the DHIS2 reporting integration or the beneficiary deduplication workflow for the first sprint?"
- Note the trade-offs for each option so the decision-maker has what they need

PHASE 4: DOCUMENT STRUCTURING

Organise the summary into a stakeholder-appropriate format:

EXECUTIVE SUMMARY (1 paragraph):
- State the purpose of the assessment, the headline finding, and the top recommendation in 3-5 sentences.

KEY FINDINGS (bullet points):
- 3-5 findings, each in one sentence, covering the most important insights from each assessment area.

RECOMMENDED NEXT STEPS (numbered list):
- 5-8 concrete actions in priority order, each with an owner and timeline.

RISKS AND DEPENDENCIES (brief table):
- The top 5 risks with mitigations, presented concisely.

APPENDIX REFERENCES:
- Point to the detailed assessment artifacts for readers who want to go deeper: "For the full technology estate inventory, see [tech_estate_map]. For the API readiness assessment, see [integration_surface_inventory]."

PHASE 5: TONE AND FRAMING REVIEW

Before finalising, review the summary for:

- Audience calibration: Is the language appropriate? Programme leadership needs business impact and decisions. Government counterparts need sovereignty and compliance assurance. Donor representatives need outcomes and value for money. Technical teams need specifics and clarity.
- Balanced honesty: Present challenges honestly without being alarmist. Frame issues as solvable problems with clear next steps, not as reasons the project might fail.
- Sensitivity check: Review for any findings that could embarrass a partner, imply blame, or create political difficulty. Reframe if needed without hiding the substance.
- Actionability: Every finding should connect to a recommendation. Every recommendation should have an owner and a timeline. The reader should finish the document knowing exactly what to do next.
- OpenFn context: Where relevant, briefly explain OpenFn concepts in accessible terms for non-technical readers (e.g., "OpenFn is a workflow automation platform that connects systems by moving data between them automatically, triggered by events like form submissions or scheduled times").
</framework>

<output_format>
Deliver:
1. An executive summary paragraph (3-5 sentences) stating the headline finding and top recommendation
2. A key findings section with 3-5 one-sentence findings covering technology landscape, integration readiness, data governance, priorities, and data quality
3. A recommended next steps list (5-8 actions) in priority order with owners and timelines
4. A risk register (top 5-8 risks) with likelihood, impact, mitigation, and owner for each
5. A decisions-needed section listing specific questions for leadership with trade-offs for each option
6. Appendix references pointing to the detailed assessment artifacts for deeper reading
</output_format>

</generate_setup_summary>
```
