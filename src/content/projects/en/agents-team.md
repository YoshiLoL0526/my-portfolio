---
title: Agents Team
description: "CLI that keeps one canonical team of AI agents and installs it into Codex, Claude Code and OpenCode, with validation, native rendering and backups."
tags: [Python, Markdown, YAML, Codex, Claude Code, OpenCode]
category: ai
repo: https://github.com/YoshiLoL0526/agents-team
date: 2026-04-23
order: 20
color: purple
---

Agents Team keeps a single definition of AI agents in Markdown/YAML and translates it to the native formats of Codex, Claude Code and OpenCode.

- Canonical agents in `agents/` with metadata and permission validation.
- TOML rendering for Codex and Markdown for Claude Code/OpenCode.
- Global or per-project installation, with `--dry-run`, `--backup` and `--force`.
- Safe overwrites using a generated-file marker.
- `list`, `validate`, `doctor`, `render` and `install` commands.

A tool to stop repeating the same agent setup across three different ecosystems.
