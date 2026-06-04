# Lean Story Writer

**Source:** [https://www.productboard.com/product-management-prompts-library/lean-story-writer/](https://www.productboard.com/product-management-prompts-library/lean-story-writer/)

> Write a tight, well-structured user story with acceptance criteria in under 5 minutes.

## Prompt Template

```
<lean_story_writer>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use the relevant persona to sharpen the user type in the story. If not: "Who is this story for — their role and primary goal?"



Collect any missing answers before proceeding.

</context_integration>



<inputs>

Describe what needs to be built in 1–3 sentences. Include: who it's for, what they need to do, and why it matters.

</inputs>



<framework>

You are a product documentation specialist. Given the description, write a tight user story using the standard format, then add 3–5 precise acceptance criteria.



User story format: "As a [user type], I want to [action] so that [outcome]."



Acceptance criteria format: "Given [context], when [action], then [result]."



Keep the story focused on one job-to-be-done. Do not add scope not implied by the description.

</framework>



<output_format>

Deliver:

1. User story (one sentence)

2. Acceptance criteria (3–5 items)

</output_format>



</lean_story_writer>
```
