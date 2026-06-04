# Process Documentation Generator

**Source:** [https://www.productboard.com/product-management-prompts-library/process-documentation-generator/](https://www.productboard.com/product-management-prompts-library/process-documentation-generator/)

> Document a product team process in a way that's clear enough for a new team member to follow and current enough to actually be followed.

## Prompt Template

```
<process_documentation>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to connect operational improvements to measurable business goals. If not: "What is the primary business outcome this operational change needs to support?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

THE PROCESS:

1. What process are you documenting? (sprint planning, bug triage, release process, onboarding, etc.)

2. Who runs this process? (PM, EM, cross-functional)

3. What's the trigger? (what starts the process — weekly, event-based, etc.)

4. What's the outcome? (what's produced or decided)

5. What are the common failure modes? (where it breaks down or people get confused)

6. Who needs to follow this process? (new hires, cross-functional partners, leadership)

7. What tools or systems are involved?

</inputs>



<process_doc_framework>



You are a process documentation specialist who writes process docs that people actually follow. You know that most process documentation fails because it's too abstract (no specific steps), outdated within 3 months, or ignored because it's in a system no one opens. The goal: a living document that's clear, specific, and maintained.



---



# [PROCESS NAME]



**Owner:** [Name/Role] | **Last updated:** [Date] | **Next review:** [Date]

**Status:** Active | **Audience:** [Who needs to follow this]



---



## What This Is



[1-2 sentences: What process this covers and why it exists]



---



## When This Runs



**Trigger:** [What starts this process — weekly at X time / when Y event occurs / on demand when Z happens]

**Frequency:** [Daily / Weekly / Per sprint / Per launch / Ad hoc]

**Duration:** [How long the process takes — X hours / X days]



---



## Who's Involved



| Role | Responsibility | Required or Optional |

|------|---------------|---------------------|

| [PM] | [What they do] | Required |

| [EM] | [What they do] | Required |

| [Design] | [What they do] | Optional |

| [CS] | [What they do] | If applicable |



---



## Prerequisites



Before starting, ensure:

- [ ] [Prerequisite 1 — what must be in place]

- [ ] [Prerequisite 2]

- [ ] [Tool access / permissions]



---



## Step-by-Step



### Step 1: [Name] (Time: ~X minutes)



**Who:** [Role]

**Action:** [Specific, unambiguous description of what they do]

**Using:** [Tool, template, or resource]

**Output:** [What is produced or decided at the end of this step]



*Common mistakes:* [What people often do wrong here]



---



### Step 2: [Name] (Time: ~X minutes)



**Who:** [Role]

**Action:** [Specific action]

**Using:** [Tool]

**Output:** [Result]



*Decision criteria:* [If a decision is made in this step, what criteria guide it]



---



### Step 3: [Name]

[Same structure]



---



## Decision Rules



Decisions made in this process and who makes them:



| Decision | Who decides | Criteria |

|----------|------------|---------|

| [Decision type] | [Role] | [How they decide] |



---



## Outputs / Deliverables



At the end of this process:

- [Artifact 1] — Location: [Where it lives] — Owner: [Who maintains it]

- [Artifact 2] — Location: [Where it lives]



---



## Tools and Templates



- [Tool name]: [How it's used in this process] — Access: [How to get access]

- [Template]: [Link]



---



## Common Failure Modes and Fixes



| What goes wrong | Why it happens | How to fix / prevent |

|----------------|---------------|---------------------|

| [Failure mode] | [Root cause] | [Prevention or fix] |



---



## Change Log



| Date | What changed | Who changed it |

|------|-------------|---------------|

| [Date] | [What was updated] | [Name] |



---



*Questions? Reach out to [Process owner name] via [Slack/email].*



</process_doc_framework>

</process_documentation>
```
