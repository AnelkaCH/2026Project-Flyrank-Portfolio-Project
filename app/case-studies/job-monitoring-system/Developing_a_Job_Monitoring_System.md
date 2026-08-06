# Developing a Job Monitoring System

Personal project, ongoing since June 2026, currently at v2.3.2

## Overview

An automated internship tracker that queries public applicant tracking system APIs, filters and classifies listings, and notifies me when something relevant appears. Built with a focus on operating within platform rules rather than around them: robots.txt compliance, rate limiting with backoff, adapter-based integration across 10+ ATS platforms, and secrets scanning baked into the commit workflow.

**Highlights**
- Adapter pattern supporting 10+ applicant tracking systems, each with different response formats
- Tiered classification system with a hard stop rule to filter irrelevant listings automatically
- robots.txt compliance and exponential backoff with jitter on every request
- Separate operational and audit logs for traceability
- detect-secrets pre-commit hook to catch credentials before they reach version control
- 33+ unit tests, with ARCHITECTURE.md and CHANGELOG.md maintained alongside the code

## The Problem

Companies post openings across dozens of different applicant tracking systems, each with its own API, format, and update cadence. Checking them manually every day was repetitive and easy to get wrong. I wanted a monitor, not a scraper: something that watched approved sources responsibly rather than pulling as much data as possible.

## What I Built

The system runs on a schedule. It queries each supported ATS through its public API, normalises the response into a common format, filters and classifies listings against my own criteria, checks for duplicates, logs the event, and sends a notification if something new and relevant shows up.

Every platform gets its own adapter, since no two ATS providers structure data the same way. Listings pass through a tiered classifier with a hard stop at the bottom tier, so clearly irrelevant results get dropped automatically instead of reaching my inbox.

## Engineering Decisions

**APIs over scraping.** I only monitor platforms that expose public APIs and explicitly support this kind of access, rather than scraping indiscriminately.

**Rate limiting with backoff and jitter.** Retries increase in delay and add randomisation, reducing load on external services during failures instead of hammering them.

**Two-tier logging.** Operational logs track runs, failures, and errors. Audit logs record which companies were checked and what was processed. Small system, but the separation gave me a real sense of why observability and auditability matter.

**Secrets hygiene by default.** A detect-secrets pre-commit hook checks for leaked credentials before anything gets committed, not after.

## Challenges

Workday was the clearest headache. Its API didn't behave consistently across companies using the same platform, and the URL structure for pulling job data varied by instance rather than staying fixed. An adapter that worked for one company's Workday board silently failed on another's until I stopped assuming the endpoint pattern was universal and handled it per instance instead.

More broadly, there's no standard job API. Every provider structures data differently, so every integration needed its own adapter rather than a shared assumption.

## Outcome

The monitor currently tracks 10+ sources and has been running long enough to catch listings I would otherwise have missed. More importantly, it forced me to think about automation as something with obligations attached: respecting platform terms, logging for accountability, and treating secrets and rate limits as defaults rather than afterthoughts. That mindset is the throughline I'd want a hiring manager to take from this project.
