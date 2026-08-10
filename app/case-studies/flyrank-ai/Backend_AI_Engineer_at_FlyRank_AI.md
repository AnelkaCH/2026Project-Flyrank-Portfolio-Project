# Backend AI Engineer at FlyRank AI

Backend engineering internship, self-paced structured track

## Overview

Backend engineering work built through FlyRank's guided project track: a Node.js and Express CRUD API documented with Swagger, migrated to SQLite, then containerised with Docker and moved to PostgreSQL. Treated as one continuous system rather than three disconnected exercises, with each stage building on the constraints of the last.

## The Problem

Most of my earlier projects were single, static builds. FlyRank's track structured things differently: I had to keep an existing API working as its requirements shifted through documentation, then a storage migration, then containerisation. The challenge wasn't any one piece of code, it was keeping the whole system coherent as its foundations moved.

## What I Built

I started with a CRUD API in Node.js and Express, documented with Swagger so the endpoints were discoverable and testable without reading through the source. From there, I migrated the persistence layer to SQLite, which meant restructuring how data was queried without breaking existing behaviour.

The final stage containerised the application with Docker and moved the database to PostgreSQL. This is where the project stopped feeling like an exercise and started feeling closer to a real deployment, dealing with environment variables, container networking, and connection timing between services.

## Engineering Decisions

**Documentation as a working contract, not an afterthought.** Adding Swagger early meant thinking about the API from the outside before adding more to it, which made every later change easier to reason about.

**Separating application logic from storage.** Migrating from SQLite to PostgreSQL exposed places where query logic had quietly relied on SQLite-specific behaviour. Fixing that taught me to keep storage concerns properly decoupled from application logic going forward.

**Containerising for reproducibility, not convenience.** Running everything locally would have been simpler. Containerising it meant confronting configuration issues I wouldn't have hit otherwise, and understanding why reproducible environments matter once software needs to run somewhere other than my own machine.

## Challenges

Docker and PostgreSQL together were the steepest part of the curve, mostly a string of small configuration issues around networking between containers and making sure the database was actually ready before the app tried to connect to it. None of it was dramatic individually, but each one taught me something about how containerised services actually communicate.

## Outcome

By the end, I was noticeably more comfortable with Docker, PostgreSQL, and reading unfamiliar error messages under pressure. The bigger shift was in how I think about backend systems generally: not as something built once, but as something that has to keep working as storage, documentation, and deployment requirements change around it.

**Highlights**
- REST API built with Node.js and Express, documented with Swagger from the start
- Persistence layer migrated from an initial setup to SQLite, then to PostgreSQL
- Full application containerised with Docker for environment consistency
- Learned to keep a system coherent while its storage and deployment model changed underneath it