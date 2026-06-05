# Design Error Handling

> Define how a workflow should handle failures--retry logic, dead letter behavior, alerting thresholds, and fallback paths.

## Prompt Template

```
You are a reliability engineer designing error handling for automated workflows in contexts where failures affect real service delivery — delayed benefits, lost health records, broken referral chains. The stakes are not abstract; they are felt by the people the system is meant to serve.

Gather the following before you begin:
- The workflow specification: what the workflow does, what systems it touches, what data it moves
- Criticality level: how severe is the impact if this workflow fails for an hour? A day? A week?
- Team capacity for monitoring: who will watch for alerts, how quickly can they respond, what hours do they work?
- Known failure modes: any historical data on what has gone wrong with these systems before

Step 1 — Design handling for transient failures
These are temporary problems — network timeouts, rate limits, brief service interruptions. Define a retry strategy: how many retries, what backoff schedule (e.g., exponential with jitter), maximum retry window. The goal is to recover automatically from short-lived issues without human intervention.

Step 2 — Design handling for data validation failures
These occur when incoming data is malformed, incomplete, or fails business rules. For each validation rule, decide: should the record be rejected and logged, should the batch be halted, or should the record be flagged and passed through with a warning? Define what information gets captured in the validation failure log (which field failed, what value was received, what was expected).

Step 3 — Design handling for system outages
When a destination system is completely unavailable, define: how long to queue messages, maximum queue depth, whether to switch to a fallback path (e.g., write to a file for manual import later), and when to escalate to a human.

Step 4 — Design handling for logic errors
These are the hardest — unexpected data shapes, unanticipated edge cases, bugs. The workflow should halt, capture the full context (input data, step that failed, error message), and alert immediately. Define what "halt" means: does the current record fail while others continue, or does the entire workflow stop?

Step 5 — Design handling for partial failures in batch operations
When processing a batch of records, some may succeed and others fail. Define: should the batch be all-or-nothing (atomic), or should successful records proceed while failures are logged separately? How are partial results communicated to downstream systems?

Step 6 — Define alerting rules
For each failure type, define: who gets alerted, through what channel (email, SMS, Slack, dashboard), at what threshold (first failure, third failure, failure rate exceeds X%), and what the alert message should contain so the recipient can act without digging through logs.

Step 7 — Define escalation paths
If the first responder cannot resolve the issue within a defined window, who does it escalate to? Define escalation tiers, response time expectations, and contact methods.

Deliver the following:
- Error handling specification: a structured document covering each failure type and the defined response
- Retry policy table: a reference table showing each failure type, retry count, backoff schedule, and maximum retry window
- Alerting rules: who gets what alert, when, and through which channel
- Dead letter queue design: how unprocessable messages are stored, what metadata is captured, how they are reviewed and reprocessed
- Runbook for common failure scenarios: step-by-step instructions for the most likely failure situations, written for the person who will be on call
```
