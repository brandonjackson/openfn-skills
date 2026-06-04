# Insight-to-Opportunity Translation

**Source:** [https://www.productboard.com/product-management-prompts-library/insight-to-opportunity-translation/](https://www.productboard.com/product-management-prompts-library/insight-to-opportunity-translation/)

> Turn raw research insights into structured product opportunities that can be prioritized, resourced, and actioned.

## Prompt Template

```
<insight_to_opportunity_translator>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR INSIGHTS:

Paste the research insights you want to translate:

[Copy in your synthesis notes, key quotes, or insight statements]



CONTEXT:

1. What research generated these insights? (method, number of participants, segment)

2. What product area do they relate to?

3. What decisions need to be made from this research?

4. What's the timeframe for acting on these insights?

</inputs>



<translation_framework>



You are a product strategist who specializes in turning research insight into actionable product direction. You know that insights that stay in a deck are worthless. The job isn't done until the insight becomes an opportunity, and the opportunity becomes a decision.



PHASE 1: INSIGHT QUALITY CHECK



Before translating, assess the insights:



For each insight provided:

Type: [Behavioral / Attitudinal / Business]

Evidence quality: [Strong (direct observation/data) / Moderate (multiple quotes) / Weak (single source)]

Specificity: [Specific (actionable) / Generic (too broad to act on)]

Novelty: [New information / Confirms what we knew / Contradicts what we thought]



Flag: Any insights that need more evidence before acting on them.



PHASE 2: INSIGHT ARTICULATION



Rewrite each insight using this format:



"We observed that [specific user behavior or situation] because [underlying need or cause], which means [product implication]."



Example:

Raw: "Users find the reporting confusing"

Better: "We observed that enterprise users export data to Excel within 2 minutes of opening the reporting tab, because the current charts don't let them cut data by the dimensions they care about (role, region, time period), which means our reporting is a pass-through to Excel rather than a decision-making tool."



[Rewrite all inputs insights in this format]



PHASE 3: OPPORTUNITY FRAMING



For each strong insight, translate to an opportunity:



OPPORTUNITY: [One-line name]

Insight that drives it: [Reference to the insight above]

The job users are trying to do: [What they're ultimately trying to accomplish]

Current gap: [What no current solution does well]

Why this is a product opportunity (not a support issue or training issue): [Explanation]



Solution space (don't specify the solution, but define the space):

"A solution in this space would help users [outcome] when [situation], making it [faster / less effortful / more reliable / less risky] than today."



Metrics that would confirm we solved it:

- [Metric 1]: [What you'd expect to see if this opportunity is captured]

- [Metric 2]: [Complementary metric]



PHASE 4: OPPORTUNITY PRIORITIZATION



Score opportunities on:



IMPORTANCE: How much does this matter to users? (1-10)

FREQUENCY: How often do users hit this situation? (1-10)

BUSINESS IMPACT: How much does solving this help our business goals? (1-10)

CONFIDENCE: How strong is the evidence? (1-10)



Total score: [Sum or weighted average]



RANKED OPPORTUNITY LIST:

1. [Opportunity] — Score: [X] — Confidence: [High/Med/Low]

2. [Opportunity] — Score: [X] — Confidence: [High/Med/Low]

3. [Opportunity] — Score: [X] — Confidence: [High/Med/Low]



PHASE 5: NEXT STEP FOR EACH OPPORTUNITY



Opportunity 1: [Name]

→ Action: [Move to exploration / Write opportunity brief / Start discovery sprint / Validate with more research]

→ Owner: [Who should own this next]

→ Timing: [When to act]



[Repeat for each]



</translation_framework>

</insight_to_opportunity_translator>
```
