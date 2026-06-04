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

## Categories

6 categories with 5–8 skills each (40 skills total), following the lifecycle of
an OpenFn workflow automation project. Skills are authored as markdown files in
`openfn_starter/<category>/` and built into JSON by `scripts/build_packs.py`.

| Category | Skills | Purpose |
|---|---|---|
| **Setting Up** | 6 | Map the technology landscape, APIs, data ownership, and quality before building anything |
| **Capacity Building** | 5 | Build team knowledge — concept introductions, readiness assessment, error-based learning, handover docs |
| **Workflow Discovery** | 8 | Map existing processes, identify pain points, prioritize opportunities, generate briefs for stakeholders |
| **Workflow Design** | 7 | Turn requirements into workflow specs, data mappings, error strategies, and stakeholder review docs |
| **Workflow Building** | 7 | Generate code, apply best practices, identify edge cases, create tests, diagnose errors, assess readiness |
| **Workflow Maintenance** | 7 | Monitor performance, detect anomalies, propose fixes, assess upstream changes, run health checks |

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

1. **Phase 1 — Scaffold (done).** Categories and skill IDs defined.
2. **Phase 2 — Draft (done).** All 40 skills authored as markdown files in
   `openfn_starter/<category>/<skill-id>.md`.
3. **Phase 3 — Generate (done).** `scripts/build_packs.py` reads from
   `openfn_starter/` the same way it reads `example_prompts/`. Run
   `python3 scripts/build_packs.py` to regenerate `site/packs/openfn-starter.json`.
4. **Phase 4 — Polish (future).** Tag each skill with `audience` (partner /
   programme / internal) and `complexity` (foundational / intermediate /
   advanced), add filtering in the browser, and link related prompts.

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
