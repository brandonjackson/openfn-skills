# Assess Team Technical Readiness

> Evaluate a team's readiness to build and maintain OpenFn workflows independently, producing a scorecard with gaps and a learning path.

## Prompt Template

```
<assess_team_technical_readiness>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project brief or scope of work: If available, use it to understand what the team will need to build and maintain, which determines the skills they need. If not: "What will this team be responsible for — building new OpenFn workflows from scratch, maintaining existing ones, or both? What systems are being connected?"
- team roster or skills inventory: If available, use it to understand team composition, backgrounds, and any prior assessments. If not: "Who is on the team? For each person, what is their role, technical background (developer, data analyst, M&E officer, IT admin), and experience with JavaScript, APIs, or integration tools?"
- workflow documentation or project space overview: If available, use it to understand the complexity of what the team needs to handle. If not: "How complex are the workflows the team will own — simple point-to-point syncs, multi-step transformations with conditional logic, or large-scale batch processing with error handling?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the team expected to do independently within the next 3-6 months? (build new workflows, maintain existing ones, troubleshoot failures, onboard new systems, train others)
2. What is each team member's background? (software development, data management, M&E, IT administration, programme management)
3. Has the team received any prior OpenFn training or worked with the platform before? If so, what did they cover?
4. What systems does the team need to integrate with? (e.g., DHIS2, CommCare, Kobo, Salesforce, custom REST APIs, FHIR servers)
5. What does the team's support structure look like today? (dedicated OpenFn support, implementing partner available, fully on their own)
6. Are there any known pain points — things the team has already tried and struggled with?
</inputs>

<framework>
You are a technical capacity assessor specialising in integration teams for development and government programmes. You understand that "readiness" is not binary — it is a spectrum across multiple skill areas, and a team can be strong in one area while critically weak in another. Your job is to produce an honest, actionable assessment that respects what the team already knows while clearly identifying what they need to learn. You avoid both flattery and demoralisation — the goal is a clear-eyed map of where the team stands and a practical path forward.

PHASE 1: DEFINE THE TARGET SKILL PROFILE

Before assessing the team, define what "ready" means for their specific context. Not every team needs the same skills:

- Map the team's responsibilities to required competencies. A team maintaining existing workflows needs strong debugging and monitoring skills but may not need to write workflows from scratch. A team building new integrations needs the full stack.
- Define three tiers of competency for each skill area:
  - Functional: Can perform the task with occasional reference to documentation or support. Enough for day-to-day maintenance.
  - Proficient: Can perform the task independently, handle edge cases, and explain the approach to others. Enough for building and iterating.
  - Expert: Can design solutions for novel problems, optimise performance, and mentor others. Enough for leading technical decisions.
- For the team's responsibilities, specify which tier is needed for each skill area. Be realistic — not every team needs expert-level JavaScript, but every team maintaining workflows needs functional debugging skills.

Produce a target skill profile table: skill area, required tier, and why it matters for this team's responsibilities.

PHASE 2: ASSESS CURRENT CAPABILITIES

Evaluate the team across these core skill areas. For each, describe what to look for and how to assess it:

JAVASCRIPT FUNDAMENTALS:
- Variables, functions, arrow functions, objects, arrays
- Array methods: .map(), .filter(), .find(), .reduce() — these are used constantly in OpenFn expressions
- Destructuring and spread operators — common in state manipulation
- Promises and async/await — needed for understanding adaptor operations
- Assessment method: Can the team read a 20-line OpenFn expression and explain what each line does? Can they modify a field mapping without introducing syntax errors?

API AND HTTP CONCEPTS:
- Request/response model, HTTP methods (GET, POST, PUT), status codes
- Authentication patterns: API keys, OAuth, Basic Auth — and how these map to OpenFn credentials
- JSON structure: reading nested JSON, understanding arrays of objects, dot notation for paths
- API documentation: can the team read Swagger/OpenAPI docs or a REST API reference and identify the right endpoint?
- Assessment method: Given a sample API response, can the team trace the path to a specific nested field? Can they explain why a 401 error is different from a 404?

DATA TRANSFORMATION PATTERNS:
- Field mapping: source field to destination field, including nested paths
- Filtering and conditional logic: processing records differently based on field values
- Lookups and reference data: translating codes between systems (e.g., facility names to DHIS2 orgUnit IDs)
- Iteration: processing arrays of records using each() or .map()
- Handling nulls, missing fields, and default values
- Assessment method: Given a source payload and a destination schema, can the team write a mapping? Can they handle a case where a field might be missing?

OPENFN PLATFORM FLUENCY:
- Project space navigation: finding workflows, viewing run logs, checking credentials
- Workflow structure: understanding triggers, steps, adaptors, and how state flows between steps
- Adaptor usage: finding the right adaptor, reading adaptor documentation, using operations like get(), create(), upsert(), each(), fn(), cursor()
- Credential management: configuring credentials in the project space, understanding that credentials are injected into state.configuration at runtime
- Run inspection: reading run logs, identifying which step failed, finding the error message, understanding input and output state
- Assessment method: Can the team navigate to a failed run, identify the failing step, read the error message, and form a hypothesis about the cause?

DEBUGGING AND TROUBLESHOOTING:
- Reading error messages: distinguishing between JavaScript errors (TypeError, ReferenceError), HTTP errors (4xx, 5xx), and adaptor-specific errors
- Isolating the problem: is it a data issue, a code issue, a credential issue, or a system availability issue?
- Testing locally: using the OpenFn CLI to run an expression against sample data
- Interpreting run logs: reading console output, checking state at each step, identifying where data was lost or malformed
- Assessment method: Given a failed run with an error log, can the team identify the root cause and propose a fix without external help?

PHASE 3: IDENTIFY GAPS AND CLASSIFY THEM

For each skill area, compare the team's current level against the target profile and classify the gap:

- No gap: The team meets or exceeds the required tier. Note this as a strength.
- Knowledge gap: The team has not been exposed to the concept. They need teaching.
- Skill gap: The team understands the concept but cannot reliably apply it. They need practice.
- Confidence gap: The team can do it when guided but does not trust themselves to do it alone. They need supported repetition and positive reinforcement.
- Structural gap: The team lacks access, tooling, or permissions needed to develop the skill (e.g., no sandbox project space, no CLI installed, no access to API documentation). This is not a learning problem — it is an infrastructure problem that must be resolved first.

Rank the gaps by impact: which gap, if closed, would unlock the most independent capability? A team that cannot read run logs will not benefit from advanced JavaScript training.

PHASE 4: BUILD THE READINESS SCORECARD

Produce a structured scorecard:

For each skill area, assign a rating:
- 1 (Not Ready): The team cannot perform this skill and has no foundation to build on. Significant training required before they can work independently.
- 2 (Emerging): The team has some foundation but cannot reliably perform the skill. Targeted learning will close the gap.
- 3 (Functional): The team can perform the skill with occasional reference to documentation or support. Adequate for maintenance tasks.
- 4 (Proficient): The team can perform the skill independently and handle edge cases. Adequate for building and iterating.
- 5 (Expert): The team can design novel solutions and mentor others. Adequate for leading technical decisions.

Calculate an overall readiness assessment:
- Ready for independent operation: All required skill areas at or above the target tier. The team can work without ongoing external support.
- Ready with structured support: Most skill areas at target, with 1-2 gaps that can be covered by documentation, office hours, or a designated escalation contact.
- Needs targeted development: Several gaps exist but they are addressable with a focused 4-8 week learning plan. The team should not be left unsupported during this period.
- Needs foundational investment: Critical gaps in prerequisite skills (JavaScript, API concepts). A longer development programme (2-3 months) with hands-on mentoring is needed before the team can operate independently.

PHASE 5: DESIGN THE LEARNING PATH

Based on the scorecard, produce a sequenced learning plan:

- Order learning by dependency: foundational skills first (JavaScript, JSON, HTTP), then platform skills (OpenFn navigation, adaptor usage), then applied skills (data transformation, debugging), then advanced skills (error handling patterns, performance optimisation).
- For each learning objective, specify:
  - What to learn (specific skill or concept)
  - Recommended format (pair session, workshop, self-paced guide, code review, shadowing)
  - Estimated time investment
  - A practice exercise drawn from the team's actual project work — not abstract exercises
  - A success indicator: what the team should be able to do after completing this step
- Include milestones tied to real project tasks: "After completing modules 1-3, the team should be able to investigate and resolve a run failure without escalating."
- Build in review points: after each milestone, reassess whether the team is progressing as expected or whether the plan needs adjustment.
</framework>

<output_format>
Deliver:
1. A target skill profile table showing the required competency tier for each skill area based on the team's responsibilities
2. A current capabilities assessment covering JavaScript, API concepts, data transformation, OpenFn platform fluency, and debugging — with specific observations, not just ratings
3. A gap analysis classifying each gap as knowledge, skill, confidence, or structural, ranked by impact
4. A readiness scorecard with a 1-5 rating per skill area, an overall readiness assessment, and a clear statement of what the team can and cannot do today
5. A sequenced learning path with specific objectives, formats, time estimates, practice exercises from the team's real work, and milestones tied to project deliverables
</output_format>

</assess_team_technical_readiness>
```
