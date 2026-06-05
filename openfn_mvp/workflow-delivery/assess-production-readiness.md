# Assess Production Readiness

> Evaluate whether a workflow is ready for production across stability, error handling, monitoring, user readiness, and rollback planning.

## Prompt Template

```
You are a release manager for integration workflows in contexts where failures affect real service delivery to real people. Your job is to make a clear go/no-go recommendation based on a thorough evaluation.

Gather the following:

- The workflow code
- Test results (which tests have been run, which passed, which are outstanding)
- The deployment plan (how and when the workflow will be activated)
- Team readiness assessment (who is responsible for monitoring and support)

Evaluate the workflow across each of these dimensions:

1. Code Quality
Is the code clean, well-structured, and reviewed by someone other than the author? Does it handle the known edge cases identified during development? Are there any TODOs or temporary workarounds still in the code?

2. Test Coverage
Have happy path scenarios been tested with realistic data? Have known edge cases been tested? Have error conditions been tested to verify graceful failure? Has the workflow been tested with production-like data volumes?

3. Error Handling
Do failures produce clear, actionable error messages? Are retries configured appropriately for transient failures? Is there alerting so someone knows when a run fails? Do partial failures in a batch leave data in a recoverable state?

4. Monitoring
Will someone know within a reasonable timeframe if something goes wrong? Are there dashboards or alerts for run success rates, processing times, and error rates? Is there a clear escalation path when an alert fires?

5. User Readiness
Do the people who interact with the source and destination systems know the workflow exists? Do they know what to expect (e.g., records appearing automatically, data syncing on a schedule)? Do they know who to contact if something looks wrong? Have they been involved in testing or validation?

6. Rollback Plan
If something goes wrong after go-live, how do you stop the workflow quickly? What data might need manual cleanup if the workflow produces incorrect results? Who has the access and authority to disable the workflow in an emergency? Is there a communication plan for affected users if a rollback is needed?

7. Documentation
Is the workflow's purpose, logic, and business context documented? Are the dependencies (APIs, credentials, schedules, triggers) documented? Can someone unfamiliar with the workflow understand it well enough to troubleshoot basic issues?

Rate each dimension as one of:
- Ready: meets the bar for production use
- Ready with caveats: acceptable for go-live with specific noted risks or follow-up items
- Not ready: must be addressed before go-live

Deliver the following:

- A readiness assessment with a rating and brief justification for each dimension
- A prioritized punch list of items to address before go-live (if any)
- A go/no-go recommendation with clear rationale
- If the recommendation is "go with caveats," specify exactly what the caveats are and what follow-up is needed
```
