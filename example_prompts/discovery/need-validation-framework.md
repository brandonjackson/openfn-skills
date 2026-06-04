# Need Validation Framework

**Source:** [https://www.productboard.com/product-management-prompts-library/need-validation-framework/](https://www.productboard.com/product-management-prompts-library/need-validation-framework/)

> Systematically validate that a user need is real, frequent, severe, and worth solving before investing in solutions.

## Prompt Template

```
<need_validation_framework>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to target the research and frame findings for specific user segments. If not: "Who is the primary user you're researching — their role, company type, and key goals?"

- customer feedback: If available, use feedback from the last 30 days to identify known patterns and gaps. If not: "What is the most common complaint or request you hear from users?"

- competitive_intel: If available, use it to frame findings against what alternatives exist. If not: "What is the main alternative users turn to when your product falls short?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

THE NEED:

1. State the user need you're validating: (try to use: "[User] needs to [action] so that [outcome]")

2. What evidence made you believe this is a real need?

3. How did you identify this need? (research, customer feedback, internal hypothesis)

4. What user segment is most likely to have this need?

5. What's your intuition about frequency and severity?

</inputs>



<validation_framework>



You are a product validation expert who helps teams distinguish between real user needs and interesting hypotheses that don't merit product investment. You've seen too many features built for needs that were theoretical. This framework produces a clear verdict: validated, partially validated, or not validated.



VALIDATION DIMENSIONS:



A need is worth investing in if it scores high on all four dimensions:



DIMENSION 1: REALITY — Is this need actually real?

Evidence needed: Users exhibit behavior that reveals this need (not just say they have it)



Tests:

- Observation: Can you watch users struggle with this? (highest quality evidence)

- Proxy behavior: Do users create workarounds? What are they?

- Search/forum evidence: Are users asking about this online?

- Support evidence: Do tickets reflect this need?

- Interview evidence: Do users describe this spontaneously, without prompting?



Red flags:

- Need only appears when prompted ("would you like X?" gets yes — meaningless)

- No workaround behavior (if users don't work around it, they may not need it badly)

- Only one or two users mentioned it unprompted



DIMENSION 2: FREQUENCY — How often does this need arise?

Evidence needed: Quantifiable frequency of the situation that triggers this need



Tests:

- Analytics: How often does the triggering situation occur?

- Interview: "How often per week/month does this come up for you?"

- Survey: Validated across a representative sample



Threshold: For a core feature investment, the need should arise multiple times per week for the target user.

Daily use: Multiple times per week minimum

Occasional use: Monthly is fine if severity is high and willingness to pay is clear



DIMENSION 3: SEVERITY — How much does it matter?

Evidence needed: Consequences when the need goes unmet



Tests:

- What happens if users can't accomplish this? (churn, workaround, missed goal, financial loss)

- Emotional intensity: Do users use strong language? ("hate," "impossible," "blocked")

- Workaround cost: How much time/effort do users spend on the workaround?

- Business consequence: What does unmet need cost the user's business?



Red flags:

- Users describe it as "nice to have" or "would be convenient"

- No workaround exists because users just skip the task entirely



DIMENSION 4: WILLINGNESS TO ACT — Would users change behavior to solve this?

Evidence needed: Users take or would take action to address this need



Tests:

- Fake door test: If you put a button promising this feature, would users click?

- Waitlist: Would users sign up for beta access?

- Direct question: "If a product solved this perfectly, would you switch/pay/try it?"

- Price question: "What would you pay for a perfect solution to this?"



Red flags:

- Users say they'd use it but show no urgency

- Willingness to pay is zero ("great for free, but not worth paying for")



VALIDATION SCORING:



| Dimension | Evidence Available | Score (1-5) | Notes |

|-----------|-------------------|-------------|-------|

| Reality | [evidence] | [1-5] | [observations] |

| Frequency | [evidence] | [1-5] | [observations] |

| Severity | [evidence] | [1-5] | [observations] |

| Willingness | [evidence] | [1-5] | [observations] |

| TOTAL | | [X/20] | |



VERDICT:

15-20: Validated need → Proceed to solution exploration

10-14: Partially validated → More research before investing

Below 10: Not validated → Don't build, revisit hypothesis



GAPS TO FILL:

[What evidence is missing to raise confidence on weak dimensions]



RECOMMENDED VALIDATION TESTS:

[Specific tests to run, ordered by cost and speed]



</validation_framework>

</need_validation_framework>
```
