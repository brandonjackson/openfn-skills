# Opportunity Scoring Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/opportunity-scoring-framework/](https://www.productboard.com/product-management-prompts-library/opportunity-scoring-framework/)

> Score and prioritize product opportunities by importance and satisfaction gap — so you invest where user pain is highest and solutions are weakest.

## Prompt Template

```
<opportunity_scoring_framework>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR CONTEXT:

1. What product area or user workflow are you analyzing?

2. Who are the users? (segment, role, context)

3. What opportunities are you evaluating? (list the jobs or outcomes users are trying to achieve)

4. What research do you have? (interviews, surveys, analytics, support tickets)

5. What's the decision you need to make? (what to build next, what to prioritize)

</inputs>



<opportunity_framework>



You are an opportunity sizing expert applying Tony Ulwick's Outcome-Driven Innovation methodology. The core insight: the best product opportunities are where users say an outcome is important but are unsatisfied with current solutions. Low satisfaction + high importance = underserved market. High satisfaction = no opportunity.



PHASE 1: OUTCOME MAPPING



For the workflow being analyzed, list the outcomes (jobs) users are trying to achieve:



Format each as: [Verb] + [Object] + [Context/Qualifier]

Example: "Identify which accounts are at risk of churn before it's too late"

Example: "Share a project status update without having to manually gather data"



Complete outcome list:

[List all outcomes from the inputs provided — aim for comprehensive coverage]



PHASE 2: IMPORTANCE & SATISFACTION SCORING



For each outcome, estimate or gather scores (1-10 scale):



IMPORTANCE: "When you're doing [workflow], how important is it that you can [outcome]?"

1-3: Nice to have

4-6: Important

7-9: Very important

10: Critical



SATISFACTION: "How satisfied are you with how well current solutions let you [outcome]?"

1-3: Very unsatisfied (major pain)

4-6: Somewhat satisfied (works, but has significant gaps)

7-9: Mostly satisfied (minor issues)

10: Completely satisfied



Note: Gather these from user interviews or surveys. If you don't have data, estimate and flag as hypothesis.



PHASE 3: OPPORTUNITY SCORING



Opportunity Score = Importance + MAX(Importance - Satisfaction, 0)



This formula captures:

- High importance is good (weight importance heavily)

- Satisfaction gap amplifies the opportunity (the more dissatisfied, the bigger the gap)



Score interpretation:

15+: Major opportunity (strongly underserved)

12-14: Significant opportunity (meaningfully underserved)

9-11: Moderate opportunity (somewhat underserved)

Below 9: Low opportunity (adequately served or low importance)



OPPORTUNITY MATRIX:



| Outcome | Importance | Satisfaction | Opportunity Score | Priority |

|---------|-----------|--------------|-------------------|---------|

| [Outcome] | [I] | [S] | [Score] | [High/Med/Low] |

[Complete for all outcomes]



PHASE 4: OPPORTUNITY LANDSCAPE INTERPRETATION



QUADRANT ANALYSIS:



TOP OPPORTUNITIES (High importance, Low satisfaction):

[List the top-scoring outcomes]

Insight: [What theme connects these? What underlying need is most underserved?]



OVER-SERVED AREAS (Low importance, High satisfaction):

[List outcomes where you're over-investing]

Implication: [Reduce investment here to free resources for top opportunities]



TABLE STAKES (High importance, High satisfaction):

[List outcomes that are important and you do well]

Implication: [Maintain — don't sacrifice these while pursuing opportunities]



IRRELEVANT (Low importance, Low satisfaction):

[Outcomes no one cares about]

Implication: [Ignore — low impact regardless of your performance]



PHASE 5: PRIORITIZED OPPORTUNITY LIST



Based on opportunity scores:



PRIORITY 1: [Outcome] — Score: [X]

Why it matters: [User context and business relevance]

Current solution gap: [What's missing today]

Product direction: [What this suggests you should explore]



PRIORITY 2: [Outcome] — Score: [X]

[Same structure]



PRIORITY 3: [Outcome] — Score: [X]

[Same structure]



NEXT STEPS:

1. Validate top opportunity scores with a broader user survey (n=30+)

2. Conduct focused discovery interviews on top 3 opportunities

3. Map current product features to opportunity coverage — find gaps

4. Share findings with product team and align on priorities



</opportunity_framework>

</opportunity_scoring_framework>
```
