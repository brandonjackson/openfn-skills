# Generate Stakeholder Feedback Report

> Package the current workflow design into a format that non-technical stakeholders can review and provide feedback on, translating technical details into business language while preserving accuracy.

## Prompt Template

```
<generate_stakeholder_feedback_report>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- workflow_specification: If available, use it as the primary input — this is the technical design being translated for stakeholders. If not: "What workflow design are you seeking feedback on? Describe the trigger, the steps, the systems involved, and the data being moved."
- data_transformation_map: If available, use it to explain what data changes occur in business terms. If not: "What data transformations does the workflow perform? How does data change between source and destination?"
- programme_description or project_brief: If available, use it to connect the workflow design to programme objectives and stakeholder priorities. If not: "What programme or business objective does this workflow serve, and who are the stakeholders who will review this design?"
- stakeholder_list: If available, use it to tailor the report to specific audiences and their concerns. If not: "Who will be reviewing this document? What are their roles and what do they care most about — data accuracy, cost, timeline, user impact, compliance?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What workflow design is being presented for review? Provide the workflow specification or describe the workflow in as much detail as possible.
2. Who are the stakeholders reviewing this? (e.g., programme director, M&E lead, government counterpart, donor representative, district health officer)
3. What decisions do stakeholders need to make based on this review? (e.g., approve the design, identify missing requirements, confirm data handling is acceptable, approve go-live)
4. What is the stakeholders' familiarity with OpenFn and integration concepts? (e.g., "the programme director has seen a demo but does not understand adaptors", "the government counterpart has never used OpenFn")
5. Are there known concerns or sensitivities that should be addressed proactively? (e.g., data privacy, job displacement, system reliability, cost implications)
6. What format will this be delivered in? (e.g., a document for async review, slides for a meeting, a discussion guide for a workshop)
</inputs>

<framework>
You are a solutions architect and technical communicator who bridges the gap between integration engineering teams and non-technical programme stakeholders. You know that workflow designs written for developers are incomprehensible to programme managers, and that programme managers hold critical knowledge about business rules, edge cases, and political realities that developers cannot discover on their own. Your job is to translate the technical design into a document that stakeholders can meaningfully engage with — not just understand, but actually critique and improve.

PHASE 1: BUSINESS CONTEXT FRAMING

Open the report by grounding the workflow in the business problem:

CURRENT STATE:
- Describe how the process works today in plain language. Focus on what people do, not what systems do. "Today, when a community health worker registers a new mother, they fill out a form in CommCare. The district M&E officer then manually enters the same information into DHIS2 at the end of each week."
- Name the specific problems the current process causes: delays, errors, duplicates, missing data, wasted staff time. Use concrete examples and, where possible, numbers ("On average, data arrives in DHIS2 five days after collection, and approximately 15% of records have transcription errors").

PROPOSED CHANGE:
- Describe what the workflow will do in one paragraph, using business language. "The proposed workflow will automatically transfer new mother registrations from CommCare to DHIS2 within minutes of submission, eliminating manual data entry and reducing the delay from five days to under one hour."
- State what will change for each group of users: "Community health workers will see no change to their CommCare forms. District M&E officers will no longer need to re-enter registration data — it will appear in DHIS2 automatically. M&E leads will see near-real-time data in their dashboards."

PHASE 2: WORKFLOW TRANSLATION

Translate each technical component of the workflow into stakeholder-accessible language:

TRIGGER (when does it start?):
- Translate the trigger into a real-world event: "Every time a community health worker submits a completed registration form in CommCare, the system automatically begins processing it." Avoid terms like "webhook", "cron expression", or "message filter" unless the audience is semi-technical.
- If the trigger is time-based, translate the cron schedule: "Every morning at 6:00 AM Nairobi time, the system checks for new records."

STEPS (what happens?):
- For each step, write a one-sentence description in business terms. Replace adaptor and operation names with plain descriptions:
  - Technical: "Step 1 uses `@openfn/language-commcare` to `get()` form submissions with a cursor-based filter."
  - Stakeholder version: "Step 1: Collect new form submissions from CommCare that have not been processed yet."
- For data transformation steps, explain what changes in terms stakeholders care about: "The system translates the health facility name from CommCare into the facility code that DHIS2 uses, so the data appears under the correct facility in DHIS2 reports."

ERROR HANDLING (what if something goes wrong?):
- Translate error scenarios into business impact terms: "If CommCare is temporarily unavailable (for example, during a system update), the workflow will automatically retry up to five times over the next thirty minutes. No data will be lost."
- Explain who gets notified and what they need to do: "If the workflow cannot complete after retrying, the integration lead receives an email alert with details about which records were affected. They will investigate and reprocess the records once the issue is resolved."

PHASE 3: DATA HANDLING EXPLANATION

Explain how data is handled in terms stakeholders can evaluate:

WHAT DATA MOVES:
- List the specific data fields that are transferred, using field labels (not technical paths): "The following information is transferred: mother's name, date of birth, phone number, village, health facility, registration date, expected delivery date."
- Be explicit about what does NOT move: "Clinical notes and health worker comments are not transferred — they remain only in CommCare."

HOW DATA IS PROTECTED:
- Explain credential management in plain terms: "System passwords are stored securely in the OpenFn platform and are never visible in the workflow code. Only authorised project administrators can view or update them."
- Explain data in transit: "Data moves directly between CommCare and DHIS2 through encrypted connections. It is not stored permanently in the integration platform — it passes through during processing."
- Address any data sovereignty or residency concerns: "All processing occurs on [servers located in / cloud infrastructure in] [location]."

DATA QUALITY RULES:
- Explain validation and error handling in business terms: "If a registration form is missing the mother's date of birth, the system will still process it but will flag it for review. A default placeholder date is used so the record appears in DHIS2, and the M&E team can correct it later."

PHASE 4: IMPACT AND ASSUMPTIONS SUMMARY

Lay out what stakeholders need to validate:

ASSUMPTIONS REQUIRING CONFIRMATION:
- List every assumption the design makes, phrased as a question:
  - "We assume that the facility names in CommCare exactly match the organisation unit names in DHIS2. Can you confirm this is the case, or are there known discrepancies?"
  - "We assume that all community health workers have consistent mobile network access to submit forms. Is there a pattern of delayed submissions that we should account for?"
  - "We assume that the DHIS2 user account for the integration has permission to create tracked entity instances in all target organisation units. Can this be confirmed with the DHIS2 administrator?"

TRADE-OFFS AND DESIGN DECISIONS:
- For each significant design choice, explain the options that were considered and why the current approach was chosen:
  - "We chose to process registrations one at a time as they are submitted (real-time), rather than in a daily batch. This means data appears in DHIS2 within minutes, but it also means the system needs to handle each submission individually, which requires reliable internet connectivity."
- Invite stakeholders to challenge these decisions: "If near-real-time processing is not necessary and a daily sync would be acceptable, we can simplify the design. Would a daily batch be sufficient for your reporting needs?"

PHASE 5: FEEDBACK QUESTIONS

End the report with specific, answerable questions designed to surface the feedback the design team needs:

DESIGN VALIDATION:
- "Does the described workflow match your understanding of how the process should work? Is anything missing or incorrect?"
- "Are there scenarios or edge cases not covered? For example, what should happen when [specific scenario]?"

DATA VALIDATION:
- "Is the list of data fields being transferred correct and complete? Are there fields we should add or remove?"
- "Are the data quality rules (how we handle missing or invalid data) acceptable? Would you prefer a different approach?"

OPERATIONAL VALIDATION:
- "Are the right people identified for error notifications? Should anyone else be alerted?"
- "Is the proposed timeline for the system to process data (within [X minutes/hours]) acceptable for your operational needs?"

APPROVAL:
- "Are there any concerns that would prevent you from approving this design for implementation?"
- "What additional information would you need to feel confident in this design?"
</framework>

<output_format>
Deliver:
1. A business context section explaining the current process, its problems, and what the proposed workflow changes for each user group
2. A stakeholder-friendly workflow description translating every trigger, step, and error handling approach into plain business language
3. A data handling section listing exactly what data moves, what does not, how it is protected, and what quality rules are applied
4. An assumptions and trade-offs section with each assumption phrased as a confirmable question and each design decision presented with alternatives
5. A structured set of feedback questions organised by category (design, data, operations, approval) that stakeholders can respond to directly
</output_format>

</generate_stakeholder_feedback_report>
```
