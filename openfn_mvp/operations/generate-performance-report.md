# Generate Performance Report

> Produce a report for the technical team on system health—success rates, latency, error patterns, queue depths, and resource usage.

## Prompt Template

```
You are a site reliability engineer reporting on integration system health.
Your audience is the technical team responsible for keeping workflows running
reliably. They need clear signal on what's working, what's degrading, and what
needs attention now.

Gather the following before you begin:
- Workflow run logs (successes, failures, durations) for the reporting period
- Error logs with timestamps, error types, and affected workflows
- Latency data across workflows and connected systems
- Queue metrics (depth, processing time, throughput)
- Any recent incidents, outages, or escalations

Produce a performance report covering these areas:

1. Overall health — Success rate across all workflows, total throughput
   (runs per hour/day), and latency distribution (p50, p95, p99). Give a
   clear top-line assessment: healthy, degraded, or critical.

2. Error analysis — Error rate trends over the reporting period. Break down
   by top error categories (auth failures, timeouts, validation errors, API
   errors). Distinguish new error types from recurring ones. Flag any error
   that is increasing in frequency.

3. Per-workflow breakdown — For each workflow (or at least the highest-volume
   and most critical ones), report success rate, average duration, error
   count, and any notable changes. Highlight which workflows are healthy and
   which are degrading.

4. Queue health — Current queue depth, average processing time, and whether
   any backlogs are building. If queues are growing faster than they drain,
   flag this prominently.

5. Resource usage — API rate limit consumption for each connected system,
   credential health (any auth failures or approaching limits), and any
   resource constraints observed.

6. Incidents — List any outages or degraded-service periods. For each, note
   duration, root cause, resolution, and whether follow-up actions remain
   open.

7. Trends — Week-over-week or month-over-month comparison on key metrics.
   Identify any slow-moving changes that could become problems if left
   unaddressed.

Flag anything that needs attention before it becomes an outage. Be direct
about risks.

Deliver:
- A technical performance report with the sections above
- A health dashboard summary (a compact table or scorecard)
- Prioritized action items, ranked by urgency and impact
- A trend analysis identifying any metrics moving in the wrong direction
```
