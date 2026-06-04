# Feature Usage Deep Dive

**Source:** [https://www.productboard.com/product-management-prompts-library/feature-usage-deep-dive/](https://www.productboard.com/product-management-prompts-library/feature-usage-deep-dive/)

> Analyze feature adoption and usage patterns to understand what's working, what's ignored, and where to invest next.

## Prompt Template

```
<feature_usage_analysis>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to anchor metric analysis to current business goals. If not: "What is your team's primary success metric this quarter?"

- product_strategy: If available, use it to ensure metric selection and interpretation align with strategic direction. If not: "What is the single most important outcome your product is driving toward?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR ANALYSIS SCOPE:

1. Which product area or feature set are you analyzing?

2. What's the user population? (how many users, what segment)

3. What usage data do you have? (feature adoption %, usage frequency, time spent)

4. What decision does this analysis inform? (roadmap, deprecation, investment)

5. Any features you're specifically curious or concerned about?

</inputs>



<usage_analysis_framework>



You are a product analytics consultant analyzing feature usage to inform investment decisions. You know that usage data is easily misread — low usage could mean the feature is bad, or that users haven't discovered it yet, or that only power users need it but rely on it completely. Context is everything.



PHASE 1: USAGE LANDSCAPE SNAPSHOT



Map all features across two dimensions:



ADOPTION RATE: % of active users who have ever used this feature

ENGAGEMENT DEPTH: Of users who use it, how intensively? (daily / weekly / monthly / rarely)



Feature usage matrix:



| Feature | Adoption % | Depth | Discovered | Intentional | Assessment |

|---------|-----------|-------|------------|-------------|------------|

| [Feature A] | [X%] | [Daily] | [Yes/No] | [Yes/No] | [Category] |

[Complete for all features]



Categories:

CORE: High adoption, high depth → Protect and invest

GROWING: Moderate adoption, increasing trend → Accelerate

HIDDEN GEMS: Low adoption, high depth for users who find it → Surface better

STRUGGLING: Low adoption, low depth → Diagnose: bad feature or bad discoverability?

DECLINING: Dropping adoption or depth → Investigate urgently



PHASE 2: DEEP DIVE ON TOP CONCERNS



For features flagged as struggling or declining:



FEATURE: [Name]

Usage data: Adoption [X%] | Depth: [Y] | Trend: [Up/Down/Flat]



Investigation questions:

1. Who is using it? (profile of the users who do use it)

2. How do they use it? (workflow context — when, with what other features)

3. What do non-users do instead? (workaround behavior)

4. Is low adoption a discovery problem or a quality problem?



Discovery test: If you surface this feature more prominently, does adoption increase?

(If yes = discovery problem. If no = quality/fit problem.)



Quality test: Among users who found it, do they continue using it or abandon it?

(If abandonment is high after first use = quality problem.)



PHASE 3: FEATURE-RETENTION CORRELATION



The most important analysis: Do features that correlate with retention?



For each major feature, compare:

Retained users (90+ days): What % use [feature]?

Churned users: What % used [feature]?



Features where retained users use at significantly higher rates:

[List — these are "stickiness features" — prioritize and deepen]



Features where usage shows no retention correlation:

[List — these may be providing less value than assumed]



PHASE 4: POWER USER ANALYSIS



Identify your top 10-20% most engaged users. What do they use that average users don't?

[Features that power users disproportionately use]



Implication: These features may be "graduation milestones" — average users who discover and adopt them become power users.

Recommended action: Surface these features earlier in the user journey as activation targets.



PHASE 5: INVESTMENT RECOMMENDATIONS



DOUBLE DOWN (increase investment):

[Features] — Because: [High correlation with retention / high adoption / growing]



IMPROVE DISCOVERABILITY (UX and onboarding work):

[Features] — Because: [Low adoption but high value once discovered]



IMPROVE QUALITY (product work):

[Features] — Because: [Adopted but abandoned quickly / low depth]



MAINTAIN (current investment appropriate):

[Features] — Because: [Stable, performing adequately]



DEPRECATION CANDIDATES (consider removing):

[Features] — Because: [Low adoption, low depth, no retention correlation, maintenance burden]

Caution: Before deprecating, survey the users who DO use it — vocal minority may rely on it critically.



</usage_analysis_framework>

</feature_usage_analysis>
```
