---
title: Planify
description: "Self-hosted app for planning ideas: Tiptap notes, Excalidraw diagrams, folders, global search, comments and permissions."
tags: [Next.js, TypeScript, Prisma, PostgreSQL, Tiptap, Excalidraw]
category: web
repo: https://github.com/YoshiLoL0526/planify
date: 2026-10-15
order: 5
color: green
---

Planify is a self-hosted web app that turns loose ideas into projects with context: rich notes, diagrams, folders, tags and conversations.

## What it includes

- Projects and documents with Tiptap notes and embedded Excalidraw diagrams.
- Folders, tags and global search.
- Threaded comments and notifications.
- Role-based sharing and better-auth authentication.
- User profile and Docker Compose deployment.
- Daily backups and an upgrade runbook.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS and shadcn/ui; PostgreSQL 16 and Prisma 7; Vitest for unit tests and Playwright for E2E. The app and database run in Docker; Caddy is optional for TLS.

## Status

Phase 1 MVP complete. Phase 2 (real time, export/import and email) is on the roadmap. This is my test bed for self-hosted product patterns: permissions, migrations, backups and a UI that does not depend on an external service.
