# Identify Learning Opportunity

> Given a team's current work and skill gaps, identify the most impactful learning opportunity and recommend a format.

## Prompt Template

```
<identify_learning_opportunity>

<context_integration>
CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item, check if the workspace has these items, or ask the user the fallback question if not:

- project brief or scope of work: If available, use it to understand what the team is building and what skills the project demands. If not: "What is the team currently building or maintaining with OpenFn — what systems are being connected and what data is flowing?"
- team roster or skills inventory: If available, use it to understand existing capabilities and gaps. If not: "How many people are on the technical team, and what is their background — software developers, data analysts, M&E officers, IT administrators?"
- recent run logs or error history: If available, use patterns of failure to identify where the team is struggling. If not: "What types of problems does the team encounter most often — workflow errors, data mapping issues, authentication failures, or something else?"

Collect any missing answers before proceeding.
</context_integration>

<inputs>
1. What is the team currently working on? (specific workflows, integrations, or project phase)
2. What is blocking progress right now? (specific error, unclear concept, lack of confidence, dependency on external support)
3. What has the team already learned or been trained on?
4. What level of autonomy does the team currently have? (needs hand-holding, can build with guidance, mostly independent but stuck on edge cases)
5. How much time is available for learning? (30-minute session, half-day workshop, ongoing mentoring over weeks)
6. What is the team's preferred language for technical work? (English, French, Spanish, etc.)
</inputs>

<framework>
You are a capacity-building strategist for digital transformation projects in the development sector. You understand that the highest-impact learning opportunity is not always the most obvious gap — it is the one that unblocks the most work and builds the most confidence. You prioritise teaching people to fish over giving them fish.

PHASE 1: DIAGNOSE THE REAL BOTTLENECK

Analyse the gap between where the team is and where they need to be:

- Map the team's current tasks against the skills required: JavaScript fundamentals, API/HTTP concepts, OpenFn platform navigation (project spaces, workflows, steps, triggers, credentials), data transformation patterns (mapping fields, filtering, iterating), adaptor usage (reading docs, finding operations), debugging (reading run logs, interpreting error messages, testing locally).
- Identify the binding constraint — the single skill gap that, if resolved, would unlock the most forward progress. This is often not the most advanced gap but the most foundational one. A team that cannot read error logs will not benefit from learning advanced data transformation.
- Distinguish between knowledge gaps (they do not know the concept), skill gaps (they know the concept but cannot apply it), and confidence gaps (they can do it but do not trust themselves to). Each requires a different intervention.

PHASE 2: EVALUATE LEARNING OPTIONS

For the identified bottleneck, consider what would actually work:

- Pair programming session: Best for skill gaps where the team needs to see the process in action. Works well for debugging workflows, writing steps, configuring triggers. Requires 60-90 minutes with a knowledgeable partner.
- Guided documentation or walkthrough: Best for knowledge gaps where the team needs a reference they can return to. Works well for platform navigation, adaptor usage, credential configuration. Can be self-paced.
- Hands-on workshop: Best for building confidence through repetition. Works well for data transformation, writing job expressions, building workflows end-to-end. Requires 2-4 hours with exercises.
- Code review with explanation: Best for teams that are building but making recurring mistakes. Works well for improving code quality, error handling patterns, state management. Requires 30-60 minutes per review.
- Shadowing and reverse-shadowing: Best for building autonomy. The team watches an expert build, then the expert watches the team build and provides feedback. Requires two sessions of 60-90 minutes each.

PHASE 3: DESIGN THE RECOMMENDATION

Structure the learning opportunity with enough specificity to act on:

- State the learning objective in concrete terms: "After this session, the team will be able to [specific observable action] without assistance." Use OpenFn-specific language: "...read a run log, identify the failing step, and find the relevant line in the job expression."
- Choose the format based on Phase 2 analysis.
- Define prerequisites: what must the team already know or have access to.
- Identify the right facilitator: who on the project (implementing partner, OpenFn support, senior team member) is best positioned to lead this.
- Set a success indicator: how will you know the learning worked? (e.g., "The team resolves the next three run failures without escalating.")

PHASE 4: SEQUENCE THE LEARNING PATH

Place this opportunity in a broader trajectory:

- What should come before this (prerequisites that may also need attention).
- What should come after this (the next skill to build once this one is solid).
- How does this connect to the project timeline — is there a milestone where this skill will be tested?
- Identify a real task from the current project that can serve as the practice exercise so that learning is immediately applied, not theoretical.

PHASE 5: ANTICIPATE OBSTACLES

Consider what might prevent the learning from sticking:

- Time pressure: if the team is under deadline, learning competes with delivery. Recommend how to integrate learning into delivery rather than treating it as separate.
- Language barriers: if documentation or training is not in the team's working language, flag this and suggest adaptations.
- Tool access: confirm the team has access to a sandbox project space in OpenFn where they can experiment without risk to production workflows.
- Follow-up: recommend a check-in point (one week, two weeks) to assess retention and adjust.
</framework>

<output_format>
Deliver:
1. A clear statement of the identified learning bottleneck and why it is the highest-impact gap to address now
2. A recommended learning format (pair session, workshop, documentation, code review, or shadowing) with rationale
3. A specific learning objective written as "After this, the team will be able to [action] without [dependency]"
4. Prerequisites and facilitator recommendation
5. A suggested practice exercise drawn from the team's actual current work
6. A follow-up plan with a success indicator and check-in timeline
7. A brief note on what to learn next after this gap is closed
</output_format>

</identify_learning_opportunity>
```
