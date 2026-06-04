# Competitive Moat Analysis

**Source:** [https://www.productboard.com/product-management-prompts-library/competitive-moat-analysis/](https://www.productboard.com/product-management-prompts-library/competitive-moat-analysis/)

> Analyze your product's defensibility and identify which moats are real, which are wishful thinking, and how to strengthen them.

## Prompt Template

```
<competitive_moat_analysis>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What do you build and who buys it?

2. What's your primary revenue model?

3. How long have you been in market?



YOUR CLAIMED MOATS:

4. What do you say makes you defensible? (list them)

5. What do competitors say about you in win/loss calls?

6. What would it take for a customer to switch away from you?



COMPETITIVE CONTEXT:

7. Who are your top 3 competitors?

8. What's their funding/resource situation vs. yours?

9. Have any well-funded competitors entered your space in the last 2 years?

</inputs>



<moat_framework>



You are a product strategist who has evaluated hundreds of businesses for defensibility. You know that most claimed moats are illusions—network effects that aren't real networks, switching costs that evaporate under pressure, "proprietary data" that competitors can replicate in 6 months.



Your job: cut through the self-deception and identify what's genuinely defensible.



PHASE 1: MOAT INVENTORY & SCORING



Evaluate each of the 7 moat types for this business:



1. NETWORK EFFECTS

Does the product get more valuable as more users join?

- Direct network effects: Value between users (Slack, WhatsApp)

- Indirect network effects: Value between user groups (Uber, Airbnb)

- Data network effects: More users → better ML → better product

Score (0-10): Does each new user make the product meaningfully better for existing users?

Reality check: "More users = more revenue" is NOT a network effect.



2. SWITCHING COSTS

How painful is it to leave?

- Data lock-in: History, configurations, exports that don't transfer

- Workflow lock-in: Trained habits, integrations, processes built around product

- Contract lock-in: Multi-year deals, implementation investments

- Learning lock-in: Time invested to become proficient

Score (0-10): How many months of pain would switching cause?

Reality check: Switching costs decay—if a competitor builds an importer, you lose this.



3. PROPRIETARY DATA

Do you have data no one else can get?

- Behavioral data: How users actually act (not just what they say)

- Training data: Labeled datasets that improve AI/ML

- Market data: Transactions, prices, outcomes

Score (0-10): Could a well-funded competitor replicate this data in 2 years?

Reality check: Most "proprietary data" is just data you collected first.



4. ECONOMIES OF SCALE

Do unit economics improve as you grow?

- Infrastructure costs per customer declining

- Support costs declining as product matures

- Sales efficiency improving with brand recognition

Score (0-10): How much cheaper are you to operate at 10x current scale?



5. BRAND & TRUST

Does your name carry weight in purchase decisions?

- Category definition: Are you the category leader?

- Trust in regulated industries: Compliance certifications, track record

- Community and mindshare: Where do practitioners go to learn?

Score (0-10): Would a customer choose you over equal features/price because of brand alone?



6. REGULATORY/COMPLIANCE MOAT

Does compliance create a barrier?

- Certifications that take years to earn (SOC2, FedRAMP, HIPAA BAA)

- Government relationships or approvals

- Industry-specific compliance built into product

Score (0-10): How long would it take a new entrant to match your compliance posture?



7. TECHNOLOGY LEAD

Do you have a genuine technical advantage?

- Core algorithms or models that outperform

- Architecture that enables things competitors can't do

- Patents or trade secrets (be specific)

Score (0-10): How long would it take a strong engineering team to replicate your core tech?



PHASE 2: MOAT STRENGTH ASSESSMENT



After scoring each moat:



TIER 1 (Score 7+): REAL MOATS

These are genuinely defensible. Competitors can't easily replicate.

[List with explanation of what makes each real]



TIER 2 (Score 4-6): PARTIAL MOATS

Exist but eroding, situational, or replicable within 2-3 years.

[List with what would strengthen or weaken each]



TIER 3 (Score 0-3): ILLUSORY MOATS

You claim these, but they don't hold up to scrutiny.

[List with honest explanation of why they're weak]



PHASE 3: MOAT-BUILDING RECOMMENDATIONS



For each real moat: How to deepen it

For each partial moat: Whether to invest in strengthening or accept its limits

For each illusory moat: Stop claiming it and redirect energy



PRIORITY ACTIONS (Next 12 months):

1. [Highest-leverage moat investment]

2. [Second priority]

3. [Third priority]



COMPETITIVE SCENARIOS:



Best-funded competitor doubles down: What breaks first, what holds?

New well-funded entrant: Where's your 18-month window to entrench before they catch up?

Commoditization pressure: Which moats survive if core features become table stakes?



EXECUTIVE SUMMARY:

[3-paragraph honest assessment: your real defensibility, your vulnerabilities, and your #1 priority]



</moat_framework>

</competitive_moat_analysis>
```
