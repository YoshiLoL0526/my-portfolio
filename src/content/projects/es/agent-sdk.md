---
title: Agent SDK
description: "SDK async-first para construir agentes LLM: proveedores intercambiables, memoria SQLite/ChromaDB, modos conversacional/ReAct/autónomo, eventos y multiagente."
tags: [Python, asyncio, Pydantic, Anthropic, OpenAI, ChromaDB]
category: ai
date: 2026-05-28
order: 7
color: green
---

Agent SDK es una librería de Python para construir agentes LLM sin acoplarte a un proveedor, una memoria o un runtime concretos. Cada pieza es una interfaz que se puede sustituir.

## Qué incluye

- Proveedores Anthropic, OpenAI, Ollama y cualquier API compatible con OpenAI (LM Studio, vLLM…).
- Memoria SQLite con FTS5, basada en ficheros o vectorial con ChromaDB.
- Tres modos de ejecución: conversacional, ReAct (razonar → actuar → observar) y autónomo.
- Sistema de eventos observable y plugins que reaccionan a ellos.
- Multiagente: cualquier agente se puede envolver como herramienta con `SubAgentTool`.
- Todo asíncrono, con streaming y tests.

## Por qué

Los frameworks de agentes suelen esconder el bucle, el contexto y las herramientas detrás de una API rígida. Aquí la configuración es explícita: tú eliges el proveedor, la estrategia de contexto, la memoria y las herramientas; el SDK se encarga del resto. Es la base sobre la que experimento con agentes y con el protocolo MCP.
