---
title: Paris System
description: "Desktop app for a formalwear-rental store: inventory, contracts, payments, scheduling and reports."
tags: [FastAPI, SQLAlchemy, React, PyWebView, SQLite]
category: tool
date: 2026-09-17
order: 13
color: pink
---

Paris System is a management app for a formalwear-rental store. The client needed to leave spreadsheets behind and run inventory, contracts, payments and scheduling in one system.

- Modular FastAPI backend with SQLAlchemy, Alembic, Pydantic, JWT, RBAC and auditing.
- React/Vite frontend with protected routes and screens wired to the real API.
- Customers, inventory, contracts, charges, signatures and photos, payments, receivables, schedule, reports and direct sales.
- Shipped as a single Windows `.exe`: FastAPI starts in the background, waits for the healthcheck and opens a PyWebView window.
- Backend tests, lint and frontend build passing.

It is a good example of a complete product: data model, permissions, auditing, UI and packaging for a user who is never going to open a terminal.
