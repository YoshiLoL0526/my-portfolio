---
title: Agent SDK
description: "Async-first SDK for building LLM agents: swappable providers, SQLite/ChromaDB memory, conversational/ReAct/autonomous modes, events and multi-agent."
tags: [Python, asyncio, Pydantic, Anthropic, OpenAI, ChromaDB]
category: ai
date: 2026-05-28
order: 7
color: green
---

Agent SDK is a Python library for building LLM agents without locking yourself into a provider, a memory backend or a runtime. Every piece is a swappable interface.

## What it includes

- Anthropic, OpenAI, Ollama and any OpenAI-compatible API (LM Studio, vLLM…).
- SQLite (FTS5) memory, file-based memory or ChromaDB vector memory.
- Three runtime modes: conversational, ReAct (reason → act → observe) and autonomous.
- An observable event system and plugins that react to it.
- Multi-agent: any agent can be wrapped as a tool with `SubAgentTool`.
- Async-first, with streaming and tests.

## Why

Agent frameworks often hide the loop, context and tools behind a rigid API. Here the configuration is explicit: you choose the provider, context strategy, memory and tools; the SDK handles the rest. It is the base I use to experiment with agents and the MCP protocol.
