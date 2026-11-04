---
title: MCP Toolkit
description: "Servidor MCP de propósito geral: busca web, HTTP, sandbox de Python/JS, memória SQLite e utilitários de data."
tags: [Python, FastMCP, Playwright, SQLite, MCP]
category: ai
repo: https://github.com/YoshiLoL0526/mcp-toolkit
date: 2026-04-20
order: 12
color: yellow
---

MCP Toolkit é um servidor MCP que dá a um agente as ferramentas que ele costuma precisar fora do chat: buscar na web, ler uma URL, fazer requisições HTTP, executar código em um sandbox, lembrar valores e trabalhar com datas e fusos horários.

- `web_search` e `fetch_url` com Playwright e extração do conteúdo principal.
- `http_request` para APIs e `run_python`/`run_js` com timeout.
- Memória persistente em SQLite com `memory_set/get/search/delete`.
- Utilitários de data e conversão de fusos horários.
- Transporte stdio e streamable HTTP; instalável com `uv tool install`.

Pensado como uma base prática para agentes: poucas ferramentas, bem documentadas e sem obrigar a um provedor de modelo específico.
