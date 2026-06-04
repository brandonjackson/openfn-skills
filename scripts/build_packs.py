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
    "setting-up": "Setting Up",
    "capacity-building": "Capacity Building",
    "workflow-discovery": "Workflow Discovery",
    "workflow-design": "Workflow Design",
    "workflow-building": "Workflow Building",
    "workflow-maintenance": "Workflow Maintenance",
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
    """Build the OpenFn starter pack from markdown files in openfn_starter/."""
    src = ROOT / "openfn_starter"
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
                "label": CATEGORY_LABELS.get(slug, slug.replace("-", " ").title()),
                "skill_ids": cat_skill_ids,
            })

    return {
        "id": "openfn-starter",
        "name": "OpenFn Starter Pack",
        "description": (
            "Skills for teams running workflow automation and digital "
            "transformation projects with OpenFn — from initial setup and "
            "discovery through design, building, and ongoing maintenance."
        ),
        "source_url": "https://www.openfn.org/",
        "categories": categories,
        "skills": [asdict(s) for s in skills],
    }


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    packs = [build_openfn_starter_pack(), build_productboard_pack()]

    manifest = {
        "default": "openfn-starter",
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
