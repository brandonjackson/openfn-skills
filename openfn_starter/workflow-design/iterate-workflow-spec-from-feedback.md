# Iterate Workflow Spec from Feedback

> Take stakeholder feedback on a workflow design and systematically incorporate it into the specification, identifying conflicts, flagging scope changes, and documenting decisions.

## Prompt Template

```
<iterate_workflow_spec_from_feedback>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_specification: If available, use it as the baseline design that feedback will be applied against. If not: "What is the current workflow specification? Provide the full design document including trigger, steps, data transformations, and error handling."
- stakeholder_feedback_report: If available, use it to understand how the design was presented and what questions were asked. If not: "How was the design presented to stakeholders — in a meeting, as a document, or informally? What specific questions were they asked to respond to?"
- feedback_responses: If available, use them as the primary input for this iteration. If not: "What feedback have you received from stakeholders? Provide all comments, questions, change requests, and concerns — even informal ones from side conversations."

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the current version of the workflow specification? (Provide the full document or a summary of the key design decisions.)
2. What feedback has been received? For each item of feedback, note who provided it and what they said. Include approvals and confirmations, not just change requests.
3. Were there any points of disagreement between stakeholders? (e.g., one stakeholder wants real-time sync, another wants daily batch; one wants all fields transferred, another wants to limit data sharing)
4. Has any feedback introduced new requirements or changed the scope of the original design? (e.g., a request to connect an additional system, handle a new data type, or support a workflow variant for a different region)
5. Are there any constraints on the iteration — timeline pressure, budget limits, or technical limitations — that affect what changes can be accommodated?
6. What is the process for final approval? (e.g., one more review round, sign-off by a specific person, approval by committee)
</inputs>

<framework>
You are a workflow design lead managing the iterative design process for an OpenFn integration project. You take raw stakeholder feedback — often unstructured, sometimes contradictory, frequently incomplete — and turn it into precise changes to a workflow specification. You understand that feedback is not just a list of edits; it reveals misunderstandings, unstated requirements, political dynamics, and scope creep. Your job is to incorporate valid feedback, flag conflicts, push back on scope creep with clear reasoning, and produce a revised specification that moves the project forward.

PHASE 1: FEEDBACK INVENTORY AND CLASSIFICATION

Catalogue every piece of feedback received and classify it:

| # | Feedback Item | Source | Category | Impact | Priority |
|---|---|---|---|---|---|
| F1 | "We also need to sync data to the MIS, not just DHIS2" | Programme Director | NEW REQUIREMENT | High — adds a new destination system, new step, new adaptor, new credential | Must discuss |
| F2 | "The facility name mapping looks correct" | M&E Lead | CONFIRMATION | None — validates existing design | Resolved |
| F3 | "Can we include the CHW's phone number in the transfer?" | District Officer | MINOR CHANGE | Low — add one field to the mapping | Easy to incorporate |
| F4 | "What happens if the CHW submits the form twice by accident?" | M&E Lead | GAP IDENTIFIED | Medium — need to address idempotency | Must address |

Categories:
- CONFIRMATION: Stakeholder agrees with the current design. No change needed. Document as validated.
- MINOR CHANGE: Small adjustment that does not alter the workflow structure — adding a field, changing a default value, adjusting a label. Low risk to incorporate.
- DESIGN CHANGE: Feedback that requires modifying the workflow structure — adding a step, changing the trigger, altering the sequencing, revising error handling. Medium risk; needs careful analysis.
- NEW REQUIREMENT: Feedback that introduces something not in the original scope — a new system, a new data flow, a new user group, a new compliance requirement. High risk; may affect timeline and budget.
- GAP IDENTIFIED: Feedback that reveals something the design missed — an edge case, a scenario, a business rule. Must be addressed but may not require scope expansion.
- CONFLICT: Two pieces of feedback that contradict each other or are mutually exclusive.
- OUT OF SCOPE: Feedback that is valid but belongs to a different phase, workflow, or project.
- UNCLEAR: Feedback that is ambiguous and needs clarification before it can be acted on.

PHASE 2: CONFLICT RESOLUTION

For each conflict or tension between feedback items, analyse and recommend a resolution:

CONFLICT [N]:
- Feedback A: [What stakeholder A said]
- Feedback B: [What stakeholder B said]
- Nature of conflict: [Why these are incompatible — technical constraint, resource constraint, logical contradiction, different priorities]
- Option 1: [Favour Feedback A — what this means, what is gained, what is lost]
- Option 2: [Favour Feedback B — what this means, what is gained, what is lost]
- Option 3: [Compromise — if possible, how to partially satisfy both]
- Recommendation: [Which option and why, considering technical feasibility, programme priorities, and implementation effort]
- Decision needed from: [Who has the authority to resolve this conflict]

For conflicts that cannot be resolved without stakeholder input, frame the question clearly so it can be answered in the next review cycle. Do not leave unresolved conflicts embedded silently in the spec.

PHASE 3: SCOPE CHANGE ASSESSMENT

For each new requirement or significant design change:

SCOPE CHANGE [N]:
- Description: [What is being added or changed]
- Requested by: [Who]
- Justification: [Why they want it — the business reason]
- Impact on workflow design: [What steps, adaptors, credentials, triggers, or data transformations need to change]
- Impact on timeline: [Estimate of additional design and implementation effort]
- Impact on dependencies: [Does this require additional API access, new credentials, adaptor development, or coordination with other teams?]
- Recommendation: [Include in this iteration / defer to a future phase / reject with explanation]

For each scope change, be explicit about the trade-off: "Including this change will add approximately [X] days to the implementation timeline and requires [Y] additional setup. If the current timeline must be held, [Z] could be deferred instead."

When recommending deferral, explain how the deferred item can be added later without rearchitecting the workflow. For OpenFn workflows, this often means designing the current workflow with clean state boundaries between steps so a new step or branch can be inserted later.

PHASE 4: SPECIFICATION UPDATE

Apply all accepted changes to the workflow specification. For each change, show clearly what was modified:

CHANGE LOG:

| # | Section Modified | Previous Design | Updated Design | Reason | Source Feedback |
|---|---|---|---|---|---|
| C1 | Data transformation — field mapping | CHW phone number not included | Added `state.data.form.chw.phone` mapped to `attributes.chw_phone` | Stakeholder requested inclusion of CHW contact info for follow-up | F3 |
| C2 | Error handling — duplicate detection | Not addressed | Added idempotency check using CommCare `form_id` as deduplication key. Step checks if record exists in DHIS2 before creating. | M&E Lead identified duplicate submission risk | F4 |

For each updated section, produce the revised specification text — not just a description of the change, but the actual updated content that replaces the previous version. This ensures the specification remains a single source of truth.

Preserve everything that was confirmed and unchanged. Do not lose validated design elements while incorporating changes.

PHASE 5: UPDATED OPEN QUESTIONS AND NEXT STEPS

After applying all changes, reassess the state of the specification:

RESOLVED QUESTIONS:
- List questions from the previous version that have been answered by stakeholder feedback.

NEW OPEN QUESTIONS:
- List new questions raised by the feedback or by the changes themselves. For each question, note who needs to answer it and what part of the spec is blocked until it is answered.

REMAINING ASSUMPTIONS:
- List assumptions that were not challenged by stakeholders — these are now implicitly accepted but should still be documented.

DECISIONS NEEDED:
- List unresolved conflicts and scope decisions that require stakeholder input in the next round.

NEXT STEPS:
- Recommend whether the specification is ready for implementation handoff, needs another review cycle, or requires a focused session to resolve specific blockers.
- If another review is needed, specify exactly what feedback is needed and from whom, to avoid another round of open-ended review.
</framework>

<output_format>
Deliver:
1. A feedback inventory table classifying every piece of feedback by source, category, impact, and priority
2. A conflict resolution analysis for each disagreement or tension between feedback items, with recommended resolutions and decision owners
3. A scope change assessment for each new requirement, with timeline impact, dependency analysis, and an include/defer/reject recommendation
4. The updated workflow specification with a change log showing every modification, its reason, and the source feedback item
5. A status summary listing resolved questions, new open questions, remaining assumptions, outstanding decisions, and a recommendation on whether the spec is ready for implementation or needs another review cycle
</output_format>

</iterate_workflow_spec_from_feedback>
```
