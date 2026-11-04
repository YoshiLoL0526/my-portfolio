---
title: MCP Toolkit
description: "Servidor MCP de propósito general: búsqueda web, HTTP, sandbox de Python/JS, memoria SQLite y utilidades de fechas."
tags: [Python, FastMCP, Playwright, SQLite, MCP]
category: ai
repo: https://github.com/YoshiLoL0526/mcp-toolkit
date: 2026-04-20
order: 12
color: yellow
---

MCP Toolkit es un servidor MCP que da a un agente las herramientas que suele necesitar fuera del chat: buscar en la web, leer una URL, hacer peticiones HTTP, ejecutar código en un sandbox, recordar valores y trabajar con fechas y zonas horarias.

- `web_search` y `fetch_url` con Playwright y extracción de contenido principal.
- `http_request` para APIs y `run_python`/`run_js` con timeout.
- Memoria persistente en SQLite con `memory_set/get/search/delete`.
- Utilidades de fecha y conversión de zonas horarias.
- Transporte stdio y streamable HTTP; instalable con `uv tool install`.

Está pensado como una base práctica para agentes: pocas herramientas, bien documentadas y sin obligar a un proveedor de modelo concreto.
