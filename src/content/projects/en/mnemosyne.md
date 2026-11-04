---
title: Mnemosyne
description: "Long-term vector memory for agents and editors: multi-project semantic search, CLI and MCP server."
tags: [Python, ChromaDB, MCP, Typer, embeddings]
category: ai
date: 2026-04-21
order: 11
color: purple
---

Mnemosyne stores a project's decisions, patterns and context in a local vector database so an agent or editor can retrieve them by meaning, not exact wording.

- Local Hugging Face embeddings and ChromaDB storage.
- Multiple projects, tags and semantic search.
- Typer/Rich CLI and an MCP server that gives persistent memory to OpenCode, Claude Code or any MCP client.
- Local by default: context never leaves your machine.

It is a small but very useful piece: it turns a repository's scattered knowledge into something an agent can query across sessions.
