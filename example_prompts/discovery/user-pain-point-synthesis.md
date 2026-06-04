# User Pain Point Synthesis

**Source:** [https://www.productboard.com/product-management-prompts-library/user-pain-point-synthesis/](https://www.productboard.com/product-management-prompts-library/user-pain-point-synthesis/)

> Synthesize raw user research into prioritized pain points with evidence quality ratings and product implications.

## Prompt Template

```
<pain_point_synthesizer>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<research_inputs>

Upload your research materials and answer:



RESEARCH MATERIALS:

- Interview transcripts or notes

- Survey open-ends

- Support tickets or forum posts

- User reviews (G2, Capterra, App Store, etc.)

- Session recordings or usability test notes



CONTEXT QUESTIONS:

1. What user segment or persona did this research cover?

2. What problem space were you exploring?

3. What decisions will this synthesis inform?

4. What time period does this research cover?

5. How many unique users/sources are represented?

</research_inputs>



<synthesis_process>



You are a senior UX researcher synthesizing user research into decision-ready insights. Your job is to find the real problems — not the surface requests — and prioritize them in a way that guides product investment.



PHASE 1: RAW SIGNAL EXTRACTION



Read all materials and extract every distinct pain point mentioned. For each:

- Exact quote or paraphrase: [What they said]

- Source type: [Interview / survey / support / review / observation]

- Frequency: [How many times across all sources]

- Severity signal: [How much do they care? Strong language? Workarounds? Churn?]



Cast a wide net in this phase — include everything.



PHASE 2: CLUSTERING & THEMING



Group pain points into thematic clusters:



CLUSTER: [Theme Name]

Pain points in this cluster:

- [Pain point 1] — [frequency: X mentions]

- [Pain point 2] — [frequency: X mentions]

- [Pain point 3] — [frequency: X mentions]



Unifying insight: [The deeper need or frustration these share]



Evidence strength: [Strong / Moderate / Weak]

- Strong: 5+ independent sources, behavioral evidence, strong emotion words

- Moderate: 3-4 sources, consistent theme, moderate intensity

- Weak: 1-2 sources, inferential, low intensity



PHASE 3: PRIORITIZED PAIN POINT MATRIX



Rank clusters by:

- Frequency: How often mentioned?

- Severity: How much does it hurt? (words like "hate," "impossible," workarounds = high severity)

- Breadth: Across segments or just one?

- Consequence: What happens if this pain continues? (churn, workarounds, support tickets)



TOP PAIN POINTS:



#1: [Pain Point Theme]

Evidence: [Strongest quotes that represent this]

Frequency: [X out of Y users mentioned this]

Severity: [High / Medium / Low] — [evidence for rating]

Segments affected: [Which users feel this most]

Current workaround: [How do users cope today]

Product implication: [What this pain point suggests about what to build]



#2: [Pain Point Theme]

[Same structure]



#3: [Pain Point Theme]

[Same structure]



PHASE 4: INSIGHT vs. REQUEST SEPARATION



For each pain point, separate what users say from what they need:



What they say: "I want [feature X]"

What they need: [Underlying job or outcome — this is the real insight]

What to build: [This requires judgment — don't default to the feature they requested]



THE MOST DANGEROUS PAIN POINTS (often missed):

Pain points that appear only once or twice in research but signal severe unmet need:

[List any that might be disproportionately impactful]



PHASE 5: RESEARCH GAPS



What we don't know yet:

- [Question that wasn't answered by this research]

- [Segment we didn't hear from]

- [Pain point that needs more signal before acting]



Recommended next research:

[What to do next to fill the gaps]



SYNTHESIS SUMMARY:

"The core finding is: [one clear sentence about what users struggle with most and why it matters]. This suggests we should [high-level product implication]."



</synthesis_process>

</pain_point_synthesizer>
```
