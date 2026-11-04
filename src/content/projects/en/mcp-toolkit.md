---
title: MCP Toolkit
description: "General-purpose MCP server: web search, HTTP, Python/JS sandbox, SQLite memory and date utilities."
tags: [Python, FastMCP, Playwright, SQLite, MCP]
category: ai
repo: https://github.com/YoshiLoL0526/mcp-toolkit
date: 2026-04-20
order: 12
color: yellow
---

MCP Toolkit is an MCP server that gives an agent the tools it usually needs outside the chat: web search, URL reading, HTTP requests, sandboxed code execution, persistent memory and date/timezone utilities.

- `web_search` and `fetch_url` with Playwright and main-content extraction.
- `http_request` for APIs and `run_python`/`run_js` with a timeout.
- Persistent SQLite memory with `memory_set/get/search/delete`.
- Date utilities and timezone conversion.
- stdio and streamable HTTP transports; installable with `uv tool install`.

It is meant as a practical agent baseline: few tools, well documented, with no lock-in to a specific model provider.
