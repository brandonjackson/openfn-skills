#!/usr/bin/env python3
"""Build JSON pack files from markdown skills directories.

Usage:
    python3 scripts/build_packs.py
"""
from __future__ import annotations

import json
import re
from dataclasses import dataclass, asdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "site" / "packs"

CATEGORY_LABELS = {
    "analytics": "Analytics",
    "career": "Career",
    "communicate": "Communicate",
    "competition": "Competition",
    "discovery": "Discovery",
    "documentation": "Documentation",
    "gtm": "GTM",
    "ideation": "Ideation",
    "launch": "Launch",
    "market-analysis": "Market Analysis",
    "operations": "Operations",
    "planning": "Planning",
    "productivity": "Productivity",
    "strategy": "Strategy",
    "technical-collaboration": "Technical Collaboration",
    "ux": "UX",
}


@dataclass
class Skill:
    id: str
    title: str
    category: str
    category_label: str
    description: str
    source_url: str | None
    prompt: str


def parse_skill(path: Path, category_slug: str) -> Skill | None:
    text = path.read_text(encoding="utf-8")

    title_match = re.search(r"^#\s+(.+?)\s*$", text, re.MULTILINE)
    if not title_match:
        return None
    title = title_match.group(1).strip()

    source_match = re.search(r"\*\*Source:\*\*\s*\[(.+?)\]\((.+?)\)", text)
    source_url = source_match.group(2).strip() if source_match else None

    desc_match = re.search(r"^>\s+(.+?)$", text, re.MULTILINE)
    description = desc_match.group(1).strip() if desc_match else ""

    prompt_match = re.search(r"```\s*\n([\s\S]*?)\n```", text)
    prompt = prompt_match.group(1).strip() if prompt_match else ""

    return Skill(
        id=path.stem,
        title=title,
        category=category_slug,
        category_label=CATEGORY_LABELS.get(category_slug, category_slug.title()),
        description=description,
        source_url=source_url,
        prompt=prompt,
    )


def build_productboard_pack() -> dict:
    src = ROOT / "example_prompts"
    skills: list[Skill] = []
    categories: list[dict] = []

    for category_dir in sorted(p for p in src.iterdir() if p.is_dir()):
        slug = category_dir.name
        files = sorted(category_dir.glob("*.md"))
        cat_skill_ids: list[str] = []
        for md in files:
            skill = parse_skill(md, slug)
            if not skill:
                continue
            skills.append(skill)
            cat_skill_ids.append(skill.id)
        if cat_skill_ids:
            categories.append({
                "slug": slug,
                "label": CATEGORY_LABELS.get(slug, slug.title()),
                "skill_ids": cat_skill_ids,
            })

    return {
        "id": "productboard",
        "name": "Productboard PM Prompts",
        "description": (
            "134 product management prompts across 16 categories, scraped from "
            "Productboard's public PM prompt library."
        ),
        "source_url": "https://www.productboard.com/product-management-prompts-library/",
        "categories": categories,
        "skills": [asdict(s) for s in skills],
    }


def build_openfn_starter_pack() -> dict:
    """Placeholder structure for the OpenFn starter pack.

    Skills are scaffolded but prompts are empty — they'll be filled in by a
    later job with more context on what each one should do.
    """
    planned = [
        ("discovery", "Digital Transformation Discovery", [
            ("partner-discovery-interview", "Partner Discovery Interview Guide"),
            ("workflow-pain-point-synthesis", "Workflow Pain Point Synthesis"),
            ("data-flow-mapping", "Data Flow Mapping Across Systems"),
            ("system-of-record-audit", "System-of-Record Audit"),
            ("manual-handoff-inventory", "Manual Handoff Inventory"),
        ]),
        ("integration-design", "Integration Design", [
            ("workflow-blueprint", "Workflow Blueprint Generator"),
            ("api-fit-assessment", "API Fit Assessment"),
            ("data-mapping-spec", "Source-to-Target Data Mapping Spec"),
            ("error-handling-strategy", "Error Handling & Retry Strategy"),
            ("idempotency-design", "Idempotency Design Review"),
            ("auth-strategy-picker", "Auth Strategy Picker (OAuth / API key / mTLS)"),
        ]),
        ("data-governance", "Data Governance & Privacy", [
            ("pii-data-classification", "PII Data Classification"),
            ("consent-flow-design", "Consent Flow Design"),
            ("data-minimization-review", "Data Minimization Review"),
            ("retention-policy-builder", "Retention Policy Builder"),
        ]),
        ("interoperability-standards", "Interoperability Standards", [
            ("fhir-resource-selector", "FHIR Resource Selector"),
            ("dhis2-tracker-design", "DHIS2 Tracker Program Design"),
            ("openhie-component-fit", "OpenHIE Component Fit Check"),
            ("hl7-vs-fhir-decision", "HL7 vs FHIR Decision Guide"),
        ]),
        ("implementation", "Implementation & Delivery", [
            ("job-decomposition", "OpenFn Job Decomposition"),
            ("adaptor-selection", "Adaptor Selection Guide"),
            ("cron-vs-webhook-trigger", "Cron vs Webhook Trigger Decision"),
            ("staging-rollout-plan", "Staging-to-Prod Rollout Plan"),
        ]),
        ("monitoring-ops", "Monitoring & Operations", [
            ("run-failure-triage", "Run Failure Triage"),
            ("alerting-strategy", "Alerting Strategy for Workflows"),
            ("sla-definition", "SLA Definition for Integrations"),
            ("incident-postmortem", "Integration Incident Post-Mortem"),
        ]),
        ("change-management", "Change Management", [
            ("stakeholder-map", "Stakeholder Map for Digital Transformation"),
            ("partner-onboarding-plan", "Implementing-Partner Onboarding Plan"),
            ("training-rollout-plan", "End-User Training Rollout Plan"),
            ("digital-readiness-assessment", "Digital Readiness Assessment"),
        ]),
        ("strategy", "Strategy & Funding", [
            ("digital-public-goods-fit", "Digital Public Goods Fit Check"),
            ("donor-narrative-builder", "Donor Narrative Builder"),
            ("sustainability-plan", "Sustainability & Local Ownership Plan"),
            ("theory-of-change-builder", "Theory of Change Builder"),
        ]),
    ]

    skills: list[dict] = []
    categories: list[dict] = []
    for slug, label, items in planned:
        ids: list[str] = []
        for sid, title in items:
            skills.append({
                "id": sid,
                "title": title,
                "category": slug,
                "category_label": label,
                "description": "Coming soon — to be authored in a follow-up job.",
                "source_url": None,
                "prompt": "",
                "planned": True,
            })
            ids.append(sid)
        categories.append({"slug": slug, "label": label, "skill_ids": ids})

    return {
        "id": "openfn-starter",
        "name": "OpenFn Starter Pack",
        "description": (
            "Skills for teams running digital transformation projects with "
            "OpenFn — discovery, integration design, governance, ops, and "
            "change management. Skill bodies are stubs and will be authored "
            "in a follow-up job."
        ),
        "source_url": "https://www.openfn.org/",
        "categories": categories,
        "skills": skills,
    }


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    packs = [build_productboard_pack(), build_openfn_starter_pack()]

    manifest = {
        "default": "productboard",
        "packs": [
            {
                "id": p["id"],
                "name": p["name"],
                "description": p["description"],
                "skill_count": len(p["skills"]),
                "category_count": len(p["categories"]),
                "file": f"{p['id']}.json",
            }
            for p in packs
        ],
    }

    (OUT_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    for pack in packs:
        (OUT_DIR / f"{pack['id']}.json").write_text(json.dumps(pack, indent=2), encoding="utf-8")

    for p in packs:
        print(f"built {p['id']}: {len(p['skills'])} skills across {len(p['categories'])} categories")


if __name__ == "__main__":
    main()
