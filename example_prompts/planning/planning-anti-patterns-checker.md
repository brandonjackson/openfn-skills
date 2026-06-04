# Planning Anti-Patterns Checker

**Source:** [https://www.productboard.com/product-management-prompts-library/planning-anti-patterns-checker/](https://www.productboard.com/product-management-prompts-library/planning-anti-patterns-checker/)

> Audit your planning process for the most common anti-patterns that cause plans to fail before execution even begins.

## Prompt Template

```
<planning_anti_patterns_checker>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- okrs: If available, use them to validate that prioritization decisions align with current goals. If not: "What is your team's top priority metric or outcome this quarter?"

- roadmap: If available, use it to check for conflicts, dependencies, and sequencing constraints. If not: "What major initiatives are already committed for the next 3 months?"



Collect any missing answers before proceeding to the main framework.

</context_integration>



You are a product planning coach who has seen every way a plan can fail before it starts. Run this checklist against your current planning process to find the anti-patterns that will cost you later.



THE 12 PLANNING ANTI-PATTERNS:



---



ANTI-PATTERN 1: THE WISH LIST

Symptoms: Everything is P1. "We need all of it." More items on the plan than could fit in 2 years.

Diagnosis: There's no real prioritization, just organized hope.

Fix: Force stack-ranking. Draw a line at capacity. Everything below the line gets a date when it'll be reconsidered, not a promise it'll happen.

Check: Count your P1 items. If it's more than 3-4 for a quarter, you have a wish list.



---



ANTI-PATTERN 2: PLANNING THE SOLUTION, NOT THE PROBLEM

Symptoms: Every item on the plan is a feature or deliverable. No mention of the problems they solve.

Diagnosis: Team will build the plan exactly as written, even if a better solution emerges.

Fix: For every initiative, write the problem statement. Review at mid-quarter: is the planned solution still the best answer?

Check: If someone removed every mention of your solution, could they still understand what you're trying to accomplish?



---



ANTI-PATTERN 3: NO CAPACITY MATH

Symptoms: Plan was built by listing desirable things, not by modeling available time.

Diagnosis: You'll run out of time 2/3 of the way through the period.

Fix: Calculate actual capacity (see Capacity Planning Calculator). Allocate explicitly.

Check: Can you show the math? [Total capacity] allocated to [specific initiatives] leaving [buffer] for unplanned work?



---



ANTI-PATTERN 4: IGNORING TECHNICAL DEBT

Symptoms: 100% of capacity on new features. Engineering is slowing down. Quality is declining.

Diagnosis: Short-term output maximized, long-term velocity declining.

Fix: Allocate a fixed % (15-25%) to tech debt every quarter, non-negotiable.

Check: What % of your plan is tech debt, maintenance, and infrastructure?



---



ANTI-PATTERN 5: NO KILL CRITERIA

Symptoms: Projects continue indefinitely even when early signals are bad. Sunk cost fallacy in full effect.

Diagnosis: Teams keep building because stopping requires a decision, and decisions are uncomfortable.

Fix: For every initiative, define at planning time: "We'll kill or pivot this if [specific condition] by [date]."

Check: For each initiative, can you name the condition that would cause you to stop?



---



ANTI-PATTERN 6: DEADLINE WITHOUT TRADE-OFF

Symptoms: Deadline is given, scope is fixed, resources are fixed. Something has to give but no one says what.

Diagnosis: One of scope, quality, or schedule will get sacrificed implicitly.

Fix: Name the trade-off explicitly. "If this must ship by [date] with current team, we'll defer [specific scope]."

Check: For hard deadlines, is there an agreed trade-off if capacity is tight?



---



ANTI-PATTERN 7: DEPENDENCY BLINDNESS

Symptoms: Plan was built by one team without checking with teams they depend on.

Diagnosis: "We need this by [date]" lands in another team's sprint planning meeting as a surprise.

Fix: Map all dependencies at planning time. Get explicit commitments from other teams.

Check: Have you talked to every team whose work affects your plan?



---



ANTI-PATTERN 8: NO LEARNING BAKED IN

Symptoms: Plan is all execution, no discovery. No checkpoints to learn if you're solving the right problem.

Diagnosis: 6 months from now you'll learn the market moved while you were executing.

Fix: Build discovery checkpoints into the plan. Schedule "is this still right?" review at mid-point.

Check: When is the earliest you could change direction if you learned something important?



---



ANTI-PATTERN 9: INDIVIDUAL ACCOUNTABILITY GAPS

Symptoms: Initiative has a team owner, not a person owner. "Engineering will handle it."

Diagnosis: When things go wrong, no one feels responsible.

Fix: Every initiative, every milestone, every dependency has a named human owner.

Check: Go through your plan. Does every item have a specific person's name on it?



---



ANTI-PATTERN 10: OPTIMISTIC ESTIMATION WITHOUT ADJUSTMENT

Symptoms: Engineers estimate without accounting for code review, testing, meetings, or unplanned work.

Diagnosis: Every sprint ends with carryover.

Fix: Apply historical velocity to future planning. Multiply by 0.75 for planning purposes.

Check: What's your average velocity? Is your plan built on that number or on what you hope is possible?



---



ANTI-PATTERN 11: SENIOR LEADER SURPRISE

Symptoms: Leadership finds out a project is at risk in a status meeting, not before.

Diagnosis: PM is managing upward reactively, not proactively.

Fix: Build a weekly stakeholder update habit. Communicate at-risk signals early, not at the crisis point.

Check: In the last 90 days, how many times have stakeholders been surprised by bad news?



---



ANTI-PATTERN 12: THE ZOMBIE PROJECT

Symptoms: Project is on the roadmap but no one is actively working on it. It's been "in progress" for 3 months.

Diagnosis: The project is too risky to kill (sunk cost, relationship) but not important enough to prioritize.

Fix: Force the decision: either resource it properly or remove it from the roadmap and communicate the change.

Check: Are there any projects on your roadmap right now that aren't getting meaningful weekly progress?



---



YOUR ANTI-PATTERN AUDIT:



Score your current planning process:

[For each anti-pattern: Not a problem / Minor issue / Significant problem]



Top 3 anti-patterns affecting your team right now:

1. [Anti-pattern]: [Specific symptom you see / Fix to implement / Owner / By when]

2. [Anti-pattern]: [Same structure]

3. [Anti-pattern]: [Same structure]



</planning_anti_patterns_checker>
```
