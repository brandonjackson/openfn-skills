# FAQ Document Builder

**Source:** [https://www.productboard.com/product-management-prompts-library/faq-document-builder/](https://www.productboard.com/product-management-prompts-library/faq-document-builder/)

> Build an FAQ document that answers the real questions users and stakeholders ask — not the questions you wish they'd ask.

## Prompt Template

```
<faq_builder>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- product_strategy: If available, use it to ensure documentation aligns with and supports strategic priorities. If not: "What strategic goal does this work serve?"

- personas: If available, use them to tailor writing style and content to the target audience. If not: "Who is the primary audience for this document — their role and what they need to do with it?"

- okrs: If available, use them to connect scope and success criteria to measurable goals. If not: "What does success look like for this work in measurable terms?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR CONTEXT:

1. What is the product, feature, or change this FAQ covers?

2. Who is the primary audience? (end users, admins, sales team, executives, support team)

3. List the questions you've already received (or anticipate) about this:

[Question 1]

[Question 2]

[Question 3]

[Add more]

4. What are the most common misconceptions about this?

5. Are there any topics you need to address carefully? (pricing changes, data handling, migration, limitations)

6. Where will this FAQ be published? (in-product, help center, internal wiki, customer-facing email)

</inputs>



<faq_framework>



You are a technical writer who creates FAQs that actually reduce support tickets and confusion. You know that most FAQs are written to answer questions the company wants customers to ask, not the questions customers actually ask. Great FAQs start from user uncertainty, not company messaging.



THE QUESTION PRIORITIZATION:



Rank questions by:

1. Frequency: Which questions come up most often?

2. Anxiety: Which questions, if unanswered, cause people not to adopt or escalate?

3. Impact: Which questions, if answered well, unblock the most people?



Put the highest-frequency, highest-anxiety questions first. Don't bury the scary questions at the bottom.



FAQ WRITING PRINCIPLES:



WRITE THE QUESTION AS THE USER WOULD ASK IT, NOT HOW YOU WANT IT ASKED:

Bad Q: "How does our industry-leading security ensure data protection?"

Good Q: "Is my data safe? Who can see it?"



ANSWER DIRECTLY IN THE FIRST SENTENCE:

Bad A: "This is a great question. Our team has been working hard to make sure..."

Good A: "Yes. Your data is encrypted at rest and in transit..."



BE HONEST ABOUT LIMITATIONS:

If something doesn't work yet, say so. Include the workaround and when it might change.



USE PLAIN LANGUAGE:

Write at a 7th-grade reading level for consumer products, and 10th-grade for B2B. Avoid jargon.



---



# Frequently Asked Questions: [Feature/Product Name]



**Last updated:** [Date]

**Audience:** [Who this is for]



---



## About This [Feature/Product]



**[Question 1 — most basic, most common]**

[Direct, complete answer. 2-4 sentences.]



**[Question 2 — second most common]**

[Answer. If longer than 4 sentences, use bullet points.]



---



## Getting Started



**[Setup or access question]**

[Answer with numbered steps if it's a process]

1. [Step 1]

2. [Step 2]

3. [Step 3]



**[Common "how do I" question]**

[Answer]



---



## Features & Capabilities



**[Feature question]**

[Answer]



**[Limitation question — answer honestly]**

[Answer: what it does/doesn't do, workaround if any, roadmap note if appropriate]



---



## Pricing & Plans



**[Pricing question]**

[Answer with specifics]



**[Upgrade/downgrade question]**

[Answer]



---



## Privacy & Security



**[Data question]**

[Answer with specifics — users care about this, be precise]



**[Access control question]**

[Answer]



---



## Troubleshooting



**[Most common problem users encounter]**

[Answer: diagnosis + fix]



**[Second most common problem]**

[Answer: diagnosis + fix]



---



## Still Have Questions?



[Contact information, support link, or next step]



</faq_framework>

</faq_builder>
```
