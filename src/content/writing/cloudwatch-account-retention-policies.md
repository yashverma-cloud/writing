---
title: 'One CloudWatch policy now sets log retention for an account'
description: 'CloudWatch Logs retention can now be set once for every log group, and it can shorten retention you set on purpose.'
published: '2026-11-20'
draft: false
kind: note
---

CloudWatch Logs can now set retention for a whole account in one policy, and that policy can shorten retention you set on purpose.

By default, a log group keeps its data indefinitely, and retention was set one log group at a time. Account-level retention policies, launched on 9 November, change that. One policy covers every log group in the account, or only those whose names start with a prefix such as /aws/lambda. RETROACTIVE includes existing log groups; NEW_ONLY covers only groups created afterwards. You get up to 20 policies per account and Region, at no extra cost.

When policies overlap, the longest retention wins. That makes the pattern AWS describes work: a 90-day baseline for the account, and a 1-year policy for log groups that start with /security.

The part to read twice: a policy replaces the log group's own setting, even when that setting is longer. A group kept for 10 years and caught by a 90-day RETROACTIVE policy loses everything older than 90 days. Setting retention on the group afterwards does not change that while the policy applies.

So add --dry-run to put-account-policy first. It creates nothing, and reports how many log groups would get a longer, shorter or unchanged retention period. Every "shorter" deserves a conversation before it becomes a deletion. A new policy takes effect 24 hours after you create it.
