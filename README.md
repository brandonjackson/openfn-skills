# openfn-skills

A skills-pack browser inspired by [Productboard's PM prompt library](https://www.productboard.com/product-management-prompts-library/).

## What's here

- **`site/`** — static website. Pick a skill pack from the dropdown, filter by
  category, search by name, click a card to view and copy the prompt.
- **`example_prompts/`** — the Productboard PM prompt library (134 prompts
  across 16 categories), used as the default pack.
- **`scripts/build_packs.py`** — builds the JSON pack files the site loads from
  the markdown sources.
- **`OPENFN_STARTER_PACK_PLAN.md`** — plan for the OpenFn-flavoured pack
  (currently shipped as planned-skill stubs; bodies authored in a follow-up).

## Run it locally

```bash
python3 scripts/build_packs.py        # regenerate site/packs/*.json
cd site
python3 -m http.server 8000           # http://localhost:8000
```

Opening `site/index.html` directly with `file://` will fail — browsers block
`fetch` for local files. Any static server works.

## Adding or editing prompts

Productboard pack — edit the markdown files under `example_prompts/<category>/`
following the existing format:

```
# Skill Title

**Source:** [https://…](https://…)

> One-line description shown on the card.

## Prompt Template

​```
<prompt body, typically XML-tagged sections>
​```
```

Then re-run `python3 scripts/build_packs.py`.

OpenFn starter pack — see `OPENFN_STARTER_PACK_PLAN.md`. Skills are currently
defined inline in `scripts/build_packs.py::build_openfn_starter_pack()` as
stubs; Phase 2 of the plan moves them out to `openfn_starter/<category>/*.md`.
