# Interning at Accelist Lentera Indonesia

Full stack development internship, July to August 2026

## Overview

Enterprise software internship focused on integrating an internal task management platform with Odoo CRM, keeping task data synchronised between both systems through APIs and webhooks. First experience working inside an existing codebase, on a team, at a scale beyond personal projects.

## The Problem

The sales team relied on two systems that didn't talk to each other. Every task had to be created and updated manually in both, which meant duplicated work and a real risk of the two falling out of sync over time. The goal was to make changes in one system propagate automatically to the other.

## What I Worked On

I contributed to the integration layer connecting both platforms, using APIs and webhooks to detect changes on one side, transform the data into the format the other system expected, and apply the update. At a high level, this meant listening for events, handling them in a way that stayed consistent even when they arrived out of order or more than once, and keeping both systems aligned without manual intervention.

I can't go into the internal architecture or specific implementation details here, but the work spanned both frontend and backend code across the stack listed above.

## What I Learned

**Reading code before writing it.** The bigger challenge wasn't new features, it was understanding an existing system with established patterns and conventions before touching it. That skill mattered more here than in any personal project I'd done before.

**Working as part of a team.** Contributing to a shared codebase meant following conventions I didn't set and coordinating with people whose context I didn't fully have. Adjusting to that was its own learning curve.

**Webhooks are a different mental model.** Instead of requesting data when I needed it, I had to think about how systems notify each other the moment something changes, and how to handle those notifications reliably when they don't always arrive cleanly or in order.

## Outcome

This was my first exposure to software at enterprise scale, where integration between systems matters as much as any individual feature. It changed how I think about backend work generally: less about a single application, more about how multiple systems stay reliable and consistent together.

**Highlights**
- Worked across React, Next.js, Vue, and .NET depending on the part of the system
- Contributed to an event-driven integration layer syncing two production systems
- Learned to work within established architecture and conventions rather than designing from scratch
- Under a standard confidentiality agreement, so implementation specifics are intentionally kept high level here