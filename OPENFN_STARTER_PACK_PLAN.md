# OpenFn Starter Pack — Plan

A plan for building a Productboard-inspired skills pack tailored to teams running
digital transformation projects on the [OpenFn](https://www.openfn.org/) platform.
The pack will sit alongside the Productboard pack in the skills browser and be
selectable from the same dropdown.

## Inspiration

Productboard's PM prompt library is a flat collection of ~134 prompts organised
into 16 product-management categories. Each prompt is:

- A single self-contained markdown file
- Has a short title, one-line description, and a templated prompt body
- Uses XML-tagged sections (`<context_integration>`, `<inputs>`, `<framework>`)
  to scaffold context-gathering, role assignment, and structured output
- Designed so a PM can paste it into an LLM, fill in inputs, and get a usable
  artefact back (PRD, OKR draft, win/loss analysis, etc.)

The OpenFn pack should adopt the same shape and tone, but the categories and
prompts should map to the *digital transformation* workflow rather than product
management.

## Audience

The pack targets three overlapping personas:

1. **Implementing partners / solutions engineers** delivering OpenFn projects
   for governments and NGOs (most common user).
2. **Product / programme managers** at NGOs and ministries running a digital
   transformation initiative.
3. **OpenFn-internal staff** scoping, designing, and supporting deployments.

Prompts should assume the user knows their domain (health, ag, social
protection, etc.) but may be new to integration patterns and OpenFn's primitives.

## Categories (proposed)

Mirroring Productboard's 16-category structure with 8 categories of 4–6 prompts
each (~35 skills total in v1). The categories are scaffolded already in
`scripts/build_packs.py` → `build_openfn_starter_pack()` as empty stubs.

| Category | Purpose |
|---|---|
| **Discovery** | Understand the workflow, partners, and pain points before designing anything |
| **Integration Design** | Translate workflows into source-to-target mappings, auth, error handling |
| **Data Governance & Privacy** | PII handling, consent, retention, minimisation |
| **Interoperability Standards** | FHIR, DHIS2, OpenHIE, HL7 decision support |
| **Implementation & Delivery** | OpenFn-specific: jobs, adaptors, triggers, deployments |
| **Monitoring & Operations** | Run failure triage, alerting, SLAs, post-mortems |
| **Change Management** | Stakeholder mapping, training, readiness assessments |
| **Strategy & Funding** | DPG fit, donor narratives, sustainability, theory of change |

## Prompt structure

Each skill follows the Productboard template shape:

```
<skill_name>

<context_integration>
  CONTEXT CHECK: list of artefacts to look for in the workspace
  (e.g. existing job spec, data dictionary, partner brief).
  Fallback questions for each.
</context_integration>

<inputs>
  Numbered questions the user must answer to proceed.
</inputs>

<framework>
  Role assignment + multi-phase walkthrough (typically 3-5 phases)
  with concrete outputs at each step. Includes OpenFn-specific
  vocabulary (job, adaptor, trigger, run, state, credential).
</framework>

</skill_name>
```

Where Productboard says "PM", we say "integration lead" or "implementing
partner". Where they reference "user research", we reference "workflow
walkthroughs with frontline staff".

## Authoring workflow

The skills browser is already wired to display planned skills as stubs with a
"Planned" tag, so authoring is incremental and visible.

1. **Phase 1 — Scaffold (done).** The 35 stub skills are listed in
   `scripts/build_packs.py` so the browser renders the full pack shape with
   empty prompt bodies.
2. **Phase 2 — Draft (next job).** Author the prompt body for each skill as a
   markdown file in `openfn_starter/<category>/<skill-id>.md` matching the same
   format as `example_prompts/`. The next job will receive more context (e.g.
   real OpenFn workflows, adaptor docs, partner interview notes) to ground each
   prompt.
3. **Phase 3 — Generate.** Update `scripts/build_packs.py` to read from
   `openfn_starter/` the same way it reads `example_prompts/`, replacing the
   inline `planned` stubs. Re-run the script to regenerate
   `site/packs/openfn-starter.json`.
4. **Phase 4 — Polish.** Tag each skill with `audience` (partner / programme /
   internal) and `complexity` (foundational / intermediate / advanced), add
   filtering in the browser, and link related prompts.

## Suggested follow-on prompts to author (Phase 2 input)

For the next job, provide context on:

- One or two real OpenFn customer workflows (sanitised) — e.g. a CommCare ↔
  DHIS2 sync, or an OpenMRS ↔ OpenSRP bridge — so prompts can name concrete
  examples.
- OpenFn primitives reference (adaptor / job / trigger / state / credential)
  the prompts should consistently use.
- Example outputs of a "good" partner discovery interview, data mapping spec,
  and incident post-mortem, so the framework phases produce artefacts that
  match the OpenFn house style.
- Any existing OpenFn playbooks, runbooks, or templates that should be
  referenced or replaced.

## File layout (after Phase 3)

```
openfn-skills/
├── example_prompts/                 # scraped productboard pack
├── openfn_starter/                  # new — authored prompts
│   ├── README.md
│   ├── discovery/
│   ├── integration-design/
│   └── ...
├── scripts/
│   └── build_packs.py               # reads both source trees → packs/*.json
└── site/
    ├── index.html
    ├── app.js
    ├── styles.css
    └── packs/
        ├── manifest.json
        ├── productboard.json
        └── openfn-starter.json
```

## Out of scope for v1

- Multi-language prompts (English only first).
- User accounts, saving, or community-contributed packs.
- Direct integration with the OpenFn platform (e.g. "run this skill against a
  live project") — the v1 browser only displays and copies prompts.
