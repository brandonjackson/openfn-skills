# Build vs. Buy vs. Partner Analysis

**Source:** [https://www.productboard.com/product-management-prompts-library/build-vs-buy-vs-partner-analysis/](https://www.productboard.com/product-management-prompts-library/build-vs-buy-vs-partner-analysis/)

> Make the build/buy/partner decision rigorously by analyzing total cost, strategic fit, and risk — not just upfront price.

## Prompt Template

```
<build_buy_partner_analysis>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to align all analysis and recommendations with your stated strategic direction. If not: "What is your product's core strategic priority right now?"

- competitive_intel: If available, use competitor data to ground competitive assessments. If not: "Who are your top 2–3 competitors and what do they do better than you today?"

- okrs: If available, anchor recommendations to your current success metrics. If not: "What is your primary success metric this quarter?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

THE CAPABILITY IN QUESTION:

1. What capability are you evaluating? (be specific)

2. Why do you need it? (user need, competitive gap, internal efficiency)

3. When do you need it? (deadline and consequences of being late)



BUILD OPTION:

4. Engineering estimate to build in-house: (time and team)

5. What would you NOT build if you built this? (opportunity cost)

6. Does your team have the expertise to build this well?



BUY OPTION:

7. What vendors exist? (list top 3 with rough pricing)

8. How close do they get to what you need? (90% fit? 60% fit?)

9. What customization or integration work is required?



PARTNER OPTION:

10. Who could you partner with to access this capability?

11. What's the partnership structure? (rev share, API access, co-development)

12. What's the dependency risk if the partner changes or fails?



STRATEGIC CONTEXT:

13. Is this capability core to your differentiation or a commodity?

14. How often will requirements change?

15. What's your internal appetite for vendor dependencies?

</inputs>



<analysis_framework>



You are a strategic advisor who has seen companies build things they should have bought (wasting 18 months), buy things they should have built (creating vendor lock-in that killed margins), and partner in ways that created existential dependencies. Your job: make the real trade-offs visible.



PHASE 1: DECISION CRITERIA SCORING



Rate each option (1-5) on each dimension:



DIMENSION 1: TIME TO CAPABILITY

Build: How long until this is production-ready?

Buy: How long until integrated and live?

Partner: How long to establish and operationalize partnership?

Winner: [Option with fastest time to value]



DIMENSION 2: TOTAL COST (3-year TCO)

Build:

- Engineering cost: [hours × loaded hourly rate]

- Ongoing maintenance: [% of build cost per year]

- Opportunity cost: [what else you're not building]

- 3-year total: $[X]



Buy:

- Licensing/subscription: [annual cost × 3]

- Integration engineering: [one-time cost]

- Ongoing customization/support: [annual × 3]

- 3-year total: $[X]



Partner:

- Revenue share or fees: [calculation]

- Integration and partnership management: [costs]

- 3-year total: $[X]



Winner: [Lowest 3-year TCO, with nuance]



DIMENSION 3: STRATEGIC CONTROL

Build: Full control, full responsibility

Buy: Limited control, vendor roadmap dependency

Partner: Shared control, alignment risk

Ask: Is control here strategically important?



DIMENSION 4: QUALITY & FIT

Build: Fit can be perfect (if executed well)

Buy: Gap between your needs and their product?

Partner: Dependent on partner's quality

Ask: How critical is custom fit vs. good enough?



DIMENSION 5: RISK

Build: Execution risk, talent risk, maintenance burden

Buy: Vendor stability, pricing changes, feature gaps persisting

Partner: Partnership alignment, dependency, strategic shift risk

Ask: Which risks are you best positioned to manage?



PHASE 2: STRATEGIC FIT TEST



The most important question: Is this capability part of your core differentiation?



If YES → Strong bias toward Build

Reason: If this is why customers choose you, outsourcing it creates vulnerability and gives up learning.



If NO → Strong bias toward Buy or Partner

Reason: Don't spend engineering cycles on commodities. Buy the best available and redirect focus to your differentiation.



The secret third option: Buy now, build later

For capabilities that will become strategically important but aren't yet: Buy a vendor to learn the problem space, then build your own once you understand it deeply.



PHASE 3: HIDDEN COSTS & RISKS



Build risks you might be underestimating:

- The second system effect (rebuilding after v1 fails)

- The talent dependency (what if the key engineer leaves?)

- The maintenance burden (legacy code that no one wants to touch)

- The feature creep risk (gold-plating internal tools)



Buy risks you might be underestimating:

- The vendor going out of business or changing pricing

- The "good enough" trap (mediocre tool becomes entrenched)

- The integration debt (connecting everything costs more than expected)

- The data risk (giving a vendor access to your customer data)



Partner risks you might be underestimating:

- Strategic misalignment as partner grows

- Dependency that makes you acquirable (not always bad, but be aware)

- The relationship maintenance cost (partnerships require feeding)



PHASE 4: RECOMMENDATION



RECOMMENDED PATH: [Build / Buy / Partner]



Rationale:

[3-4 sentences explaining the decision]



Conditions on this recommendation:

- This holds as long as [condition]

- Revisit if [trigger]



If recommending Buy:

- Top vendor: [Name], why: [reason]

- Second choice: [Name], why: [reason]

- Negotiation leverage: [What you have]

- Contract must-haves: [Data portability, SLA, exit terms]



If recommending Build:

- MVP scope: [What's the minimum viable version]

- Build sequence: [Phase 1, Phase 2]

- Team needed: [Who builds this]

- When to reassess: [If this takes more than X months]



If recommending Partner:

- Target partner: [Name]

- Partnership terms to push for: [Key asks]

- Dependency mitigation: [How to avoid lock-in]

- Exit plan: [If partnership fails]



</analysis_framework>

</build_buy_partner_analysis>
```
