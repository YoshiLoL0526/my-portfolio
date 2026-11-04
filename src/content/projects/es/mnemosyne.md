---
title: Mnemosyne
description: "Memoria vectorial a largo plazo para agentes y editores: búsqueda semántica multi-proyecto, CLI y servidor MCP."
tags: [Python, ChromaDB, MCP, Typer, embeddings]
category: ai
date: 2026-04-21
order: 11
color: purple
---

Mnemosyne guarda decisiones, patrones y contexto de un proyecto en una base vectorial local para que un agente o un editor los recupere por significado, no por palabra exacta.

- Embeddings locales con modelos de Hugging Face y almacenamiento en ChromaDB.
- Varios proyectos, etiquetas y búsqueda semántica.
- CLI con Typer/Rich y servidor MCP para dar memoria persistente a OpenCode, Claude Code o cualquier cliente MCP.
- Todo local por defecto: el contexto no sale de tu máquina.

Es una pieza pequeña pero muy útil: convierte el conocimiento disperso de un repositorio en algo que el agente puede consultar entre sesiones.
