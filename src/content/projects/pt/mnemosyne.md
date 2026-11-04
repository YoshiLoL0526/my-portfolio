---
title: Mnemosyne
description: "Memória vetorial de longo prazo para agentes e editores: busca semântica multi-projeto, CLI e servidor MCP."
tags: [Python, ChromaDB, MCP, Typer, embeddings]
category: ai
date: 2026-04-21
order: 11
color: purple
---

Mnemosyne guarda decisões, padrões e contexto de um projeto em um banco vetorial local para que um agente ou editor os recupere por significado, não por palavra exata.

- Embeddings locais com modelos do Hugging Face e armazenamento no ChromaDB.
- Vários projetos, tags e busca semântica.
- CLI com Typer/Rich e servidor MCP para dar memória persistente ao OpenCode, Claude Code ou qualquer cliente MCP.
- Tudo local por padrão: o contexto não sai da sua máquina.

É uma peça pequena, mas muito útil: transforma o conhecimento disperso de um repositório em algo que o agente pode consultar entre sessões.
