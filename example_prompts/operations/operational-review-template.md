# Operational Review Template

**Source:** [https://www.productboard.com/product-management-prompts-library/operational-review-template/](https://www.productboard.com/product-management-prompts-library/operational-review-template/)

> Run a monthly or quarterly operational review that surfaces what's working, what's breaking down, and what to change.

## Prompt Template

```
<operational_review>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to connect operational improvements to measurable business goals. If not: "What is the primary business outcome this operational change needs to support?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR REVIEW:

1. What period are you reviewing? (month, quarter)

2. What product area or team?

3. What are the top 3-5 operational metrics you track? (velocity, bug count, time-to-resolution, NPS, etc.)

4. What are the known operational problems that have been persisting?

5. What process changes have you made recently and what impact did they have?

6. Who attends this review? (PM, EM, design, CS, leadership)

7. What decisions do you want to make as a result of this review?

</inputs>



<operational_review_framework>



You are an operations review facilitator who runs reviews that produce decisions, not just reports. You know that most operational reviews are data presentations — lots of numbers, not enough action. Good operational reviews surface root causes and commit to changes.



OPERATIONAL REVIEW STRUCTURE (60-90 minutes):



---



# [Team / Product Area] OPERATIONAL REVIEW

**Period:** [Month/Quarter]

**Date:** [Review date]

**Attendees:** [List roles]



---



## 1. OPERATIONAL HEALTH SCORECARD (15 min)



For each metric, show: Actual | Target | Trend (↑↓→) | Commentary



| Metric | Actual | Target | Trend | Commentary |

|--------|--------|--------|-------|-----------|

| [Velocity] | [X] | [Y] | ↑ | [1 sentence on why] |

| [Bug count] | [X] | [Y] | ↓ | [1 sentence on trend] |

| [Time to first response] | [X] | [Y] | → | [1 sentence] |

| [Deployment frequency] | [X] | [Y] | ↑ | [1 sentence] |

| [Incident count] | [X] | [Y] | ↓ | [1 sentence] |



Overall health: 🟢 All on track | 🟡 [X] metrics at risk | 🔴 [X] metrics failing



---



## 2. ROOT CAUSE ANALYSIS (20 min)



For every metric that is "at risk" or "failing":



METRIC: [Name]

What the data shows: [The specific underperformance]

Root cause hypothesis: [Why this is happening — use data to support]

Contributing factors: [What's making it worse]

What we've tried: [Previous attempts to fix this]

What we haven't tried: [Options not yet explored]



---



## 3. PROCESS RETROSPECTIVE (20 min)



WHAT'S WORKING WELL:

[3-5 operational practices to keep and reinforce]

- [Practice]: Why it works: [Evidence]



WHAT'S BREAKING DOWN:

[2-3 operational problems to address]

- [Problem]: Why it happens: [Root cause] | Impact: [What it costs]



PROCESS CHANGES MADE LAST PERIOD AND OUTCOMES:

- [Change made]: Expected impact: [X] | Actual impact: [Y] | Keep/Modify/Revert: [Decision]



---



## 4. DECISIONS (15-20 min)



OPERATIONAL DECISIONS TO MAKE TODAY:



Decision 1: [Specific operational decision]

Options:

- Option A: [Description] — Pros: [+] Cons: [-]

- Option B: [Description] — Pros: [+] Cons: [-]

Decision: [What we'll do]

Owner: [Name]

By: [Date]



---



## 5. ACTION ITEMS



| Action | Owner | Due Date | Priority |

|--------|-------|---------|---------|

| [Specific operational change] | [Name] | [Date] | [H/M/L] |



These will be reviewed at the next operational review.



---



## 6. THEMES AND TRENDS



Patterns emerging over the last 3-6 months that need strategic attention:

[1-3 longer-term operational observations that should inform planning]



Things getting better:

[What's improving over time]



Things getting worse:

[What's deteriorating — requires investment or process change]



---



NEXT REVIEW: [Date]

Owner to schedule and prepare data: [Name]



</operational_review_framework>

</operational_review>
```
