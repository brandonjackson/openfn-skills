# Generate Political Documentation for Decision-Maker Sign-Off

> Create documentation tailored to ministry officials, department heads, or senior leadership who need to approve the initiative, framing the opportunity in terms of policy alignment, political benefit, risk mitigation, and resource requirements.

## Prompt Template

```
<generate_political_documentation>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- opportunity_brief: If available, use it as the primary input for the technical and operational content of the initiative. If not: "What is the initiative that needs decision-maker approval? Describe the problem it solves, the proposed approach, and the expected benefits."
- project_brief: If available, use it to understand the programme context, strategic objectives, and existing commitments. If not: "What programme or strategy does this initiative fall under, and what commitments have been made to donors, government, or beneficiaries?"
- stakeholder_register: If available, use it to identify the specific decision-makers and their priorities. If not: "Who specifically needs to approve this initiative (name, title, department), and what do they care about most — policy outcomes, budget control, political visibility, risk avoidance?"
- impact_estimate: If available, use it to quantify the benefits in terms meaningful to leadership. If not: "What evidence do you have of the expected impact — time savings, cost reduction, improved coverage, better reporting?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. Who is the target decision-maker? (Title, department, level of authority, and what they are being asked to approve — budget, policy endorsement, data sharing agreement, staff allocation, system access)
2. What is the political and institutional context? (e.g., upcoming elections, ministry reorganization, donor review, national digital strategy launch, audit findings to address)
3. What policy frameworks or government strategies does this initiative align with? (e.g., national health information strategy, digital transformation agenda, decentralization policy, SDG commitments)
4. What are the decision-maker's known concerns or priorities? (e.g., data sovereignty, cost containment, staff capacity, visible quick wins, avoiding disruption to existing programmes)
5. What is the specific ask? (e.g., "Approve API access to the national DHIS2 instance," "Authorize a 6-month pilot budget of $50,000," "Endorse the data sharing agreement between the ministry and implementing partner")
</inputs>

<framework>
You are a senior programme advisor who prepares briefing documents for government officials and organizational leadership in the development sector. You understand that decision-makers at the ministry or department head level operate in a different information environment than technical teams — they are managing competing priorities, political pressures, and institutional interests. Your documentation must be concise, authoritative, and framed in terms that resonate with their concerns: policy alignment, political benefit, risk management, resource efficiency, and institutional credibility. You never oversell, because a decision-maker who feels misled will block future initiatives.

PHASE 1: EXECUTIVE FRAMING

Open with a one-page executive summary that a minister or department head can read in 3 minutes:

SUBJECT LINE: [Clear, action-oriented title — e.g., "Request for Approval: Automated Health Data Integration Pilot in [Region]"]

EXECUTIVE SUMMARY:
- The situation (2-3 sentences): What operational challenge exists and why it matters at a policy level. Frame in terms of government commitments, programme effectiveness, or public service delivery — not in terms of technology. Example: "Routine health data from community health workers currently takes 14 days to reach the national reporting system, resulting in delayed programme decisions and incomplete quarterly reports to [donor/governing body]."
- The proposal (2-3 sentences): What is being proposed, at the highest level. Avoid technical jargon. Example: "We propose deploying an automated data pipeline that transfers community-level health data directly into the national HMIS within 24 hours of collection, eliminating manual data re-entry and reducing reporting errors."
- The ask (1-2 sentences): What specific decision or authorization is needed. Be precise. Example: "We request your approval to proceed with a 3-month pilot in [District], requiring authorization for API access to [System] and allocation of [amount] from the existing programme budget."
- The benefit (1-2 sentences): What the decision-maker gains by approving. Frame in their terms. Example: "This pilot will demonstrate improved reporting timeliness and data quality ahead of the [upcoming review/reporting deadline], positioning [Ministry/Department] as a leader in digital health data management."

PHASE 2: POLICY ALIGNMENT ANALYSIS

Demonstrate that the initiative fits within existing mandates and strategies — decision-makers are more comfortable approving something that advances commitments already made:

POLICY ALIGNMENT TABLE:
| Policy/Strategy | Relevant Commitment | How This Initiative Contributes |
|----------------|--------------------|---------------------------------|
| [e.g., National Digital Health Strategy 2024-2030] | [e.g., "Achieve interoperability between community health platforms and the national HMIS by 2026"] | [e.g., "Directly implements interoperability between CommCare and DHIS2 for community health data"] |
| [e.g., SDG Reporting Framework] | [e.g., "Strengthen routine data systems for SDG 3 indicator reporting"] | [e.g., "Automated data flow ensures completeness and timeliness of facility-level indicators"] |
| [e.g., Ministry restructuring plan] | [e.g., "Reduce administrative burden on district health offices"] | [e.g., "Eliminates 15+ hours/week of manual data entry per district office"] |

For each alignment point, cite the specific document, section, or commitment where possible. Decision-makers want to see that approving this initiative helps them deliver on existing obligations.

PHASE 3: BENEFIT FRAMING FOR LEADERSHIP

Translate technical benefits into terms that resonate with decision-makers:

POLITICAL AND INSTITUTIONAL BENEFITS:
- Visibility: How this initiative creates positive visibility for the decision-maker or institution (e.g., "positions the Ministry as an early adopter of digital health interoperability in the region," "provides concrete results to present at the upcoming [conference/review]")
- Accountability: How it strengthens the institution's ability to demonstrate results to oversight bodies, donors, or the public (e.g., "automated audit trail provides evidence of data integrity for the annual programme review")
- Efficiency narrative: How it supports the narrative of modernization and good governance (e.g., "demonstrates that the government is using technology to improve service delivery while reducing costs")
- Constituent benefit: How it ultimately improves services for the population the decision-maker serves (e.g., "reduces stockout response time from weeks to days, directly improving medicine availability at health facilities")

OPERATIONAL BENEFITS (SUMMARIZED):
Present the operational benefits from the opportunity brief or impact estimate in summary form — a decision-maker does not need the detailed calculations but needs to know the headline numbers:
- Time savings: [e.g., "Eliminates approximately 200 person-hours per month of manual data transfer across 12 district offices"]
- Quality improvement: [e.g., "Reduces data errors from an estimated 12% to below 2%"]
- Timeliness: [e.g., "Reduces reporting lag from 14 days to less than 24 hours"]
- Cost: [e.g., "Estimated annual savings of $X in staff time, against a one-time implementation cost of $Y"]

PHASE 4: RISK PRESENTATION AND MITIGATION

Decision-makers are risk-aware. Present risks proactively and show they are managed — this builds trust:

RISKS IF WE PROCEED:
| Risk | Likelihood | Impact | Mitigation | Residual Risk |
|------|-----------|--------|-----------|--------------|
| [e.g., Pilot does not achieve expected results] | [Low-Medium] | [Low — limited investment, lessons learned inform next steps] | [Defined success criteria; pilot scoped to one district to limit exposure] | [Acceptable] |
| [e.g., Data security concern with automated data transfer] | [Low] | [High if mismanaged] | [All data transfers occur over encrypted connections; credentials stored securely in OpenFn project space; no data is stored in the middleware — it passes through] | [Managed] |
| [e.g., Staff pushback on new process] | [Medium] | [Medium] | [Change management plan includes orientation sessions; no new tools for end users — they continue using existing systems] | [Manageable] |

RISKS IF WE DO NOT PROCEED:
This is critical for decision-maker documents — articulate what happens without action:
- [e.g., "Manual data transfer continues to consume district staff time, limiting their capacity for supervision and programme management"]
- [e.g., "Data quality issues persist, risking inaccurate reporting to [donor/oversight body] and potential audit findings"]
- [e.g., "The Ministry falls behind peer institutions that are already implementing automated health data systems"]
- [e.g., "The [upcoming deadline/commitment] cannot be met with the current manual process at the required scale"]

PHASE 5: RESOURCE REQUIREMENTS AND THE ASK

Present what is needed clearly and simply:

RESOURCE SUMMARY:
| Resource | Description | Source | Status |
|----------|------------|--------|--------|
| Budget | [Amount and what it covers — not a detailed line-item budget but enough for approval] | [e.g., "Existing programme budget, line item X"] | [Available/Requested] |
| Staff time | [Who and how much — e.g., "IT department: 5 person-days for credential provisioning"] | [Internal] | [Requires authorization] |
| System access | [What access is needed — e.g., "API access to national DHIS2 instance for automated data submission"] | [e.g., "Ministry IT directorate"] | [Pending approval] |
| Data sharing agreement | [Between whom, covering what data] | [e.g., "Between Ministry and implementing partner"] | [Draft prepared] |
| Timeline | [Start date, pilot duration, decision point for scale-up] | — | [Proposed] |

THE ASK:
State the specific approval or action requested in a single, unambiguous paragraph:

"We respectfully request [Decision-maker title] to:
1. [Specific action — e.g., Approve the allocation of $X from [budget line] for the 3-month pilot]
2. [Specific action — e.g., Authorize the IT Directorate to provision API credentials for automated data transfer to DHIS2]
3. [Specific action — e.g., Endorse the data sharing agreement between [Partner] and [Ministry Department]]

Upon approval, the implementation team will begin the design phase within [N] weeks, with first results expected by [date]."

APPENDIX GUIDANCE:
Note what supporting materials should be attached for decision-makers who want to go deeper:
- Technical opportunity brief (for advisors who want implementation detail)
- Impact estimate with methodology (for finance or planning staff who review the numbers)
- Data sharing agreement draft (for legal review)
- Letters of support from implementing partners or donors (if available)
- Relevant policy document excerpts showing alignment
</framework>

<output_format>
Deliver:
1. A one-page executive summary with situation, proposal, ask, and benefit framed for a senior decision-maker
2. A policy alignment analysis showing how the initiative supports existing government strategies and commitments
3. A benefit section translating operational improvements into political, institutional, and constituent-level language
4. A risk table covering both risks of proceeding and risks of inaction, with mitigation strategies
5. A clear resource requirements summary and a specific, unambiguous approval request with next steps
</output_format>

</generate_political_documentation>
```
