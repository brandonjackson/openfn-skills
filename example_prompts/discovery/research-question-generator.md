# Research Question Generator

**Source:** [https://www.productboard.com/product-management-prompts-library/research-question-generator/](https://www.productboard.com/product-management-prompts-library/research-question-generator/)

> Turn a vague research goal into a specific set of researchable questions ordered by decision importance.

## Prompt Template

```
<research_question_generator>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR SITUATION:

1. What is the general topic you want to understand? (broad)

2. What decisions will you make based on what you learn?

3. What do you already know? (don't re-research what you know)

4. What do you think is true but haven't validated?

5. What would change your product direction if you found out it was wrong?

6. What's the timeframe for the decision?

</inputs>



<question_generation_framework>



You are a research strategist who helps product teams stop running research in circles. You know that "we want to understand users better" is not a research question. Research questions must be specific, researchable, and connected to a real decision.



PHASE 1: KNOWLEDGE AUDIT



What you know (don't research):

[Based on inputs — what's already established]



What you think you know (test, don't assume):

[Hypotheses that need validation]



What you don't know (need to discover):

[Genuine unknowns]



What you can't know from research alone (decide, don't research):

[Questions that are about judgment or strategy, not user behavior]



PHASE 2: QUESTION GENERATION



Generate research questions in 4 categories:



BEHAVIORAL QUESTIONS (What do users actually do?):

These must be answered with observation or analytics — not just asking.

1. [Specific behavioral question]

2. [Specific behavioral question]

3. [Specific behavioral question]



ATTITUDINAL QUESTIONS (What do users think and feel?):

These can be asked directly, but triangulate with behavior.

1. [Specific attitudinal question]

2. [Specific attitudinal question]

3. [Specific attitudinal question]



MOTIVATIONAL QUESTIONS (Why do users do what they do?):

These are for interviews — can't be answered with surveys.

1. [Specific motivational question]

2. [Specific motivational question]



MARKET QUESTIONS (How does this relate to the competitive landscape?):

These may be answered with desk research or win/loss data.

1. [Specific market question]

2. [Specific market question]



PHASE 3: QUESTION PRIORITIZATION



For each question, rate:

- Decision relevance: Does answering this directly change a decision? (Y/N)

- Time sensitivity: Does this need to be answered before a specific deadline? (Y/N)

- Answerability: Can this actually be answered in your timeframe? (Y/N)



PRIORITY 1 (Must answer — decision-blocking):

[Questions that score Yes on all 3]



PRIORITY 2 (Should answer — decision-strengthening):

[Questions that score Yes on 1-2]



PRIORITY 3 (Nice to know — don't prioritize):

[Everything else]



PHASE 4: METHOD MATCHING



For each Priority 1 and 2 question:

Question: [Specific question]

Best method to answer it: [Method + why]

Minimum sample: [How many participants/responses needed]

Estimated time: [How long to answer this]



PHASE 5: QUESTION SUMMARY



Your research questions, ordered by priority:



[Numbered list of Priority 1 questions, written precisely, ready to use in a research brief or interview guide]



Questions to park for later:

[Priority 3 questions that are interesting but not urgent]



Questions that research can't answer:

[Things that require a judgment call, not data]



</question_generation_framework>

</research_question_generator>
```
