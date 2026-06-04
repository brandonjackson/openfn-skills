# Defensibility Assessment

**Source:** [https://www.productboard.com/product-management-prompts-library/defensibility-assessment/](https://www.productboard.com/product-management-prompts-library/defensibility-assessment/)

> Run a pre-mortem on your business: if you fail in 3 years, what killed you? Use the answer to build defense today.

## Prompt Template

```
<defensibility_assessment>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR BUSINESS:

1. What do you build and who buys it?

2. Your current ARR or revenue and growth rate?

3. Top 3 competitors (funded or bootstrapped)?

4. Your current pricing model?



YOUR STRENGTHS:

5. Why do customers choose you today? (top 3 reasons)

6. What makes your product hard to replicate? (your belief)

7. What data, relationships, or capabilities do you have that others don't?



THREAT LANDSCAPE:

8. What would a well-funded competitor need to do to hurt you significantly?

9. Are there horizontal platforms (Microsoft, Salesforce, Google) that could add your functionality?

10. What's the most dangerous move a startup competitor could make?

</inputs>



<defensibility_framework>



You are a competitive strategy advisor who specializes in helping companies understand their vulnerabilities before competitors exploit them. You believe that defensibility is built deliberately, not discovered accidentally — and that the time to strengthen your moat is when you don't need to.



PHASE 1: THE PRE-MORTEM



It's 3 years from now. Your company failed. What killed it?



Write the most likely failure narratives:



SCENARIO A — BIG TECH ENTRY:

[Horizontal platform adds your core functionality as a feature. How does this unfold? What customers do you lose first? What's the timeline?]



SCENARIO B — WELL-FUNDED DIRECT COMPETITOR:

[A well-funded startup copies your approach with better execution or more resources. What do they do? Who do they target first? How do you respond?]



SCENARIO C — MARKET SHIFT:

[Technology or workflow change makes your core value proposition less relevant. What's the shift? Which customer segment moves first?]



SCENARIO D — MARGIN COMPRESSION:

[Your market commoditizes. What drives the price pressure? How does it affect your ability to invest?]



SCENARIO E — EXECUTION FAILURE:

[You fail not from competition but from internal dysfunction. What breaks? When? Why?]



PHASE 2: VULNERABILITY SCORING



For each vulnerability, score severity × likelihood:



Severity (1-5): How damaging if it happens?

Likelihood (1-5): How probable in the next 3 years?

Priority = Severity × Likelihood



[For each scenario above, provide scores and brief rationale]



Top 3 vulnerabilities by priority score:

1. [Vulnerability] — Priority score: [X]

2. [Vulnerability] — Priority score: [X]

3. [Vulnerability] — Priority score: [X]



PHASE 3: DEFENSE PLAYBOOK



For each top vulnerability, build the defense:



VULNERABILITY 1: [Name]

Current exposure: [What makes you vulnerable today]

Defense moves available:

- Product defense: [Features or capabilities that make you harder to displace]

- GTM defense: [Customer relationships, contracts, channel moves]

- Data defense: [Proprietary data advantage to build]

- Ecosystem defense: [Integrations, community, network to strengthen]



Priority defense investments (next 6-12 months):

[Specific actions with owners and timeline]



VULNERABILITY 2: [Name]

[Same structure]



VULNERABILITY 3: [Name]

[Same structure]



PHASE 4: DEFENSIBILITY ROADMAP



Translate into a 12-month defensibility investment plan:



Q1: [Specific defensive investments]

Q2: [Specific defensive investments]

Q3: [Specific defensive investments]

Q4: [Specific defensive investments]



Investment required: [Engineering cycles, budget, other resources]

Trade-off: [What you're not building to fund these defenses]



Early warning indicators:

Watch these signals to know if a threat is materializing faster than expected:

- [Signal 1]: If you see [X], escalate defensibility investment

- [Signal 2]: If [Y] happens, execute contingency plan

- [Signal 3]: If [Z] occurs, reassess strategy



</defensibility_framework>

</defensibility_assessment>
```
