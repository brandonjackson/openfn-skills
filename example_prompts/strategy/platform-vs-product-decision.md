# Platform vs. Product Decision

**Source:** [https://www.productboard.com/product-management-prompts-library/platform-vs-product-decision/](https://www.productboard.com/product-management-prompts-library/platform-vs-product-decision/)

> Decide whether to build a platform, stay a point solution, or create a strategic path between — with timing that's defensible.

## Prompt Template

```
<platform_vs_product_decision>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR CURRENT STATE:

1. What does your product do today? (point solution description)

2. What's your current revenue and customer count?

3. What third-party integrations do customers already use alongside you?

4. What do customers build on top of or alongside your product?



THE PLATFORM QUESTION:

5. What platform opportunity are you considering? (open API, marketplace, extensions, etc.)

6. Who are the potential third-party developers or partners?

7. What would they build?

8. Why would end users benefit?



STRATEGIC CONTEXT:

9. Do you have direct competitors considering platform moves?

10. What's your current engineering team size and platform-building capacity?

11. What's your 3-year revenue goal?

</inputs>



<decision_framework>



You are a platform strategist who has worked with companies that made the platform leap at the right time (and some that made it too early or too late). You know that "becoming a platform" is the most overused aspiration in product strategy — and one of the most genuinely powerful moves when the conditions are right.



PHASE 1: PLATFORM READINESS ASSESSMENT



The Platform Paradox: Platforms only work when they already have something valuable enough that others want to build on. If you're not yet a must-have product, becoming a platform makes you a commodity with an API.



READINESS TEST 1: Critical Mass

Do you have enough users that developers can build a viable business serving your user base?

- Minimum viable platform: ~10,000+ active users (varies by market)

- Sweet spot: 50,000+ users where a developer can reach a real audience

Your assessment: [Based on customer count provided]



READINESS TEST 2: Established Core

Is your core product so good that users don't want to leave?

Platform trap: If users would leave for a competitor that has the extension they want, your platform isn't a moat—it's a migration path.

Your assessment: [Based on retention signals]



READINESS TEST 3: Clear Extension Points

Are there natural extension points where third parties can add value without cannibalizing your core?

- Good: You do task management, others can add industry-specific reporting

- Bad: Others build the core workflow that you also sell

Your assessment: [Based on what you've described]



READINESS TEST 4: Developer Demand Signal

Have customers or third parties asked to build on top of you?

- Strong signal: You get inbound API requests you're turning away

- Weak signal: You think developers should want to build on you, but haven't tested it

Your assessment: [Based on inputs]



PHASE 2: PLATFORM STRATEGY ARCHETYPES



If you decide to move toward platform, which type fits?



INTEGRATION PLATFORM: You connect with other tools (many integrations, you orchestrate data)

Best for: Workflow tools where users cobble together a stack



EXTENSION PLATFORM: Third parties add functionality to your core (like Salesforce AppExchange)

Best for: Established products with clear extension points



DATA PLATFORM: You provide data/insights that others consume

Best for: Products sitting on valuable proprietary data



MARKETPLACE PLATFORM: You connect two sides of a market (supply and demand)

Best for: Network effects businesses where you have both sides



DEVELOPER PLATFORM: You provide primitives others build products on

Best for: Infrastructure and tools where developers are the customers



Best fit for your situation: [Type] because [reasoning]



PHASE 3: THE SEQUENCING QUESTION



Don't try to become a platform all at once. What's the right sequence?



Stage 1 — Private Beta API:

Select 3-5 partners, build API for their specific use cases

Learn: What do they actually build? What API design works?

Investment: 1-2 engineers for 2-3 months



Stage 2 — Public API:

Open to all developers, invest in documentation

Learn: Who builds? What's the distribution of use cases?

Investment: Developer relations function, documentation system



Stage 3 — Platform Features:

Marketplace, app store, partner program

Investment: Significant — this is a product line of its own



Question: Are you ready for Stage 1, or do you need to strengthen core first?



PHASE 4: PLATFORM RISKS



The risks that kill platform strategies:



CANNIBALIZATION: Third parties build what you were going to build, competing for the same customers

Mitigation: Clear terms defining what partners can build



QUALITY CONTROL: Bad integrations create bad user experiences blamed on you

Mitigation: Review process, certification program, clear quality standards



DEPENDENCY: You end up supporting a platform when you need to focus on core

Mitigation: Clear prioritization rules, dedicated platform team



CHICKEN-AND-EGG: Developers won't build without users; users won't come without apps

Mitigation: Seed the marketplace with internal or anchor partner apps



TIMING: You dilute core product focus before you have critical mass

Mitigation: Ruthless about when (not if) you become a platform



PHASE 5: RECOMMENDATION



RECOMMENDED APPROACH: [Stay point solution / Begin Stage 1 platform / Accelerate platform]



Timing: [When to start or revisit]



Conditions that would change this:

- [Trigger 1]

- [Trigger 2]



If moving forward:

- First platform bets: [2-3 specific integration/extension points to validate]

- Partner targets: [3-5 potential first developers or partners]

- Success metric at 12 months: [What would tell you this is working]



</decision_framework>

</platform_vs_product_decision>
```
