---
title: Planify
description: "Aplicação self-hosted para planejar ideias: notas Tiptap, diagramas Excalidraw, pastas, busca global, comentários e permissões."
tags: [Next.js, TypeScript, Prisma, PostgreSQL, Tiptap, Excalidraw]
category: web
repo: https://github.com/YoshiLoL0526/planify
date: 2026-10-15
order: 5
color: green
---

Planify é uma aplicação web self-hosted para transformar ideias soltas em projetos com contexto: notas formatadas, diagramas, pastas, tags e conversas.

## O que inclui

- Projetos e documentos com notas Tiptap e diagramas Excalidraw embutidos.
- Pastas, tags e busca global.
- Comentários em threads e notificações.
- Compartilhamento por papéis e autenticação com better-auth.
- Perfil de usuário e implantação com Docker Compose.
- Backups diários e runbook de atualização.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS e shadcn/ui; PostgreSQL 16 e Prisma 7; Vitest para unitários e Playwright para E2E. O banco de dados e o app rodam em Docker; Caddy é opcional para TLS.

## Status

MVP da fase 1 concluído. A fase 2 (tempo real, export/import e email) está no roadmap. É o projeto que uso para testar padrões de produto self-hosted: permissões, migrações, backups e uma UI que não dependa de um serviço externo.
