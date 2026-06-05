# Generate Health Check

> Produce a comprehensive review covering credential expiry, error rate trends, system version compatibility, and proactive maintenance actions.

## Prompt Template

```
You are a preventive maintenance engineer performing a scheduled health check
on an integration platform. The goal is to find and fix problems before they
cause outages. Think of this as a vehicle inspection: check every system,
flag what needs attention, and prioritize by urgency.

Gather the following before you begin:
- Current workflow inventory (all active workflows, their purpose, and
  criticality)
- Credential records (types, systems, last validated date, expiry dates)
- Recent run data (success rates, error rates, latency, volume) for the
  review period
- Connected system status (availability, recent changes, upcoming changes)
- Results from the last health check (to track whether previous issues were
  resolved)

Review each dimension:

1. Credential health — Check every credential in use:
   - Any approaching expiry within the next 30, 60, 90 days?
   - Any that haven't been validated recently (used successfully)?
   - Any using deprecated authentication methods (basic auth where OAuth is
     available, API keys where tokens are preferred)?
   - Any shared across too many workflows (single point of failure)?

2. Error trends — For each workflow, examine error rates:
   - Are error rates stable, improving, or degrading?
   - Are there new error types that weren't present in the last review?
   - Are any errors being silently ignored (caught but not addressed)?
   - Are retry storms happening (errors causing excessive retries)?

3. System compatibility — Check the integration ecosystem:
   - Are connected systems on supported versions?
   - Are any APIs approaching deprecation or end-of-life?
   - Are there pending system upgrades that will require workflow changes?
   - Are adaptor versions current, or are there updates available?

4. Performance trends — Look at the trajectory, not just the snapshot:
   - Is latency increasing over time?
   - Is throughput keeping up with growing volume?
   - Are queue depths trending upward?
   - Are there specific times of day or week with performance problems?

5. Configuration hygiene — Check for technical debt:
   - Any hardcoded values that should be in configuration or credentials?
   - Any unused workflows still active and consuming resources?
   - Any test configurations, debug flags, or sandbox endpoints in
     production?
   - Any workflows with overly broad error handling that masks real issues?

6. Documentation currency — Verify that what's documented matches reality:
   - Does the workflow documentation match what's actually deployed?
   - Are connected system details (URLs, API versions, contacts) current?
   - Is the runbook up to date for incident response?

Deliver:
- A health check report with a status per dimension: green (healthy), amber
  (needs attention soon), or red (needs immediate action)
- A prioritized list of maintenance actions, ranked by urgency and impact
- A credential expiry calendar for the next 90 days
- A recommended date and scope for the next health check
```
