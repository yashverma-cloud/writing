---
title: 'The CloudWatch EKS add-on now scrapes your ServiceMonitors'
description: 'From version 8.0.0, the CloudWatch Observability add-on scrapes every ServiceMonitor and PodMonitor by default. Set the selectors before you upgrade.'
published: '2026-11-27'
draft: false
kind: note
---

The CloudWatch EKS add-on now scrapes your ServiceMonitors. All of them, by default.

Since 20 November, version 8.0.0 of the CloudWatch Observability add-on takes your own application telemetry. Applications with an OpenTelemetry SDK send to an OTLP endpoint the agent serves on every node, and the agent scrapes the Prometheus targets your ServiceMonitor and PodMonitor objects describe. No Prometheus operator to run, no scrape config to rewrite, and the metrics land in CloudWatch, where you query them with PromQL.

That is a real simplification if the only reason you ran a collector was to forward metrics. Each team keeps its monitor next to its application instead of in one central config.

Read the defaults before you upgrade. Scraping is on, every 30 seconds, and both selectors are empty, so the agent scrapes every ServiceMonitor and PodMonitor in the cluster, including the ones your own Prometheus already scrapes. Ingestion is charged at $0.08 per GB.

If you want a migration rather than a duplicate, set serviceMonitorSelector and podMonitorSelector in the add-on configuration first, label the monitors you want in CloudWatch, and move them over one team at a time. And pick one monitor per workload: a ServiceMonitor and a PodMonitor on the same pods scrape everything twice.
