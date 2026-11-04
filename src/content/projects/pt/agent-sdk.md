---
title: Agent SDK
description: "SDK async-first para construir agentes LLM: provedores intercambiáveis, memória SQLite/ChromaDB, modos conversacional/ReAct/autônomo, eventos e multiagente."
tags: [Python, asyncio, Pydantic, Anthropic, OpenAI, ChromaDB]
category: ai
date: 2026-05-28
order: 7
color: green
---

Agent SDK é uma biblioteca Python para construir agentes LLM sem acoplamento a um provedor, uma memória ou um runtime específicos. Cada peça é uma interface que pode ser substituída.

## O que inclui

- Provedores Anthropic, OpenAI, Ollama e qualquer API compatível com OpenAI (LM Studio, vLLM…).
- Memória SQLite com FTS5, baseada em arquivos ou vetorial com ChromaDB.
- Três modos de execução: conversacional, ReAct (raciocinar → agir → observar) e autônomo.
- Sistema de eventos observável e plugins que reagem a eles.
- Multiagente: qualquer agente pode ser encapsulado como ferramenta com `SubAgentTool`.
- Tudo assíncrono, com streaming e testes.

## Motivação

Frameworks de agentes costumam esconder o loop, o contexto e as ferramentas atrás de uma API rígida. Aqui a configuração é explícita: você escolhe o provedor, a estratégia de contexto, a memória e as ferramentas; o SDK cuida do resto. É a base sobre a qual experimento agentes e o protocolo MCP.
