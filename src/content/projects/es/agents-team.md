---
title: Agents Team
description: "CLI que mantiene un equipo canónico de agentes IA y lo instala en Codex, Claude Code y OpenCode, con validación, render nativo y backups."
tags: [Python, Markdown, YAML, Codex, Claude Code, OpenCode]
category: ai
repo: https://github.com/YoshiLoL0526/agents-team
date: 2026-04-23
order: 20
color: purple
---

Agents Team mantiene una única definición de agentes IA en Markdown/YAML y la traduce a los formatos nativos de Codex, Claude Code y OpenCode.

- Agentes canónicos en `agents/` con validación de metadatos y permisos.
- Render a TOML para Codex y Markdown para Claude Code/OpenCode.
- Instalación global o por proyecto, con `--dry-run`, `--backup` y `--force`.
- Sobrescrituras seguras con marcador de archivo generado.
- Comandos `list`, `validate`, `doctor`, `render` e `install`.

Es una herramienta para no repetir la misma configuración de agentes en tres ecosistemas distintos.
