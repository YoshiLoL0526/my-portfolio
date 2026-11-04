---
title: Agents Team
description: "CLI que mantém uma equipe canônica de agentes de IA e a instala no Codex, Claude Code e OpenCode, com validação, render nativo e backups."
tags: [Python, Markdown, YAML, Codex, Claude Code, OpenCode]
category: ai
repo: https://github.com/YoshiLoL0526/agents-team
date: 2026-04-23
order: 20
color: purple
---

Agents Team mantém uma única definição de agentes de IA em Markdown/YAML e a converte nos formatos nativos de Codex, Claude Code e OpenCode.

- Agentes canônicos em `agents/` com validação de metadados e permissões.
- Render em TOML para Codex e Markdown para Claude Code/OpenCode.
- Instalação global ou por projeto, com `--dry-run`, `--backup` e `--force`.
- Sobrescritas seguras com marcador de arquivo gerado.
- Comandos `list`, `validate`, `doctor`, `render` e `install`.

É uma ferramenta para não repetir a mesma configuração de agentes em três ecossistemas diferentes.
