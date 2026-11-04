---
title: Planify
description: "Aplicación self-hosted para planificar ideas: notas Tiptap, diagramas Excalidraw, carpetas, búsqueda global, comentarios y permisos."
tags: [Next.js, TypeScript, Prisma, PostgreSQL, Tiptap, Excalidraw]
category: web
repo: https://github.com/YoshiLoL0526/planify
date: 2026-10-15
order: 5
color: green
---

Planify es una aplicación web self-hosted para convertir ideas sueltas en proyectos con contexto: notas con formato, diagramas, carpetas, etiquetas y conversaciones.

## Qué incluye

- Proyectos y documentos con notas Tiptap y diagramas Excalidraw embebidos.
- Carpetas, etiquetas y búsqueda global.
- Comentarios en hilos y notificaciones.
- Compartición por roles y autenticación con better-auth.
- Perfil de usuario y despliegue con Docker Compose.
- Backups diarios y runbook de actualización.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS y shadcn/ui; PostgreSQL 16 y Prisma 7; Vitest para unitarias y Playwright para E2E. La base de datos y la app corren en Docker; Caddy es opcional para TLS.

## Estado

MVP de la fase 1 completado. La fase 2 (tiempo real, export/import y correo) está en el roadmap. Es el proyecto que uso para probar patrones de producto self-hosted: permisos, migraciones, backups y una UI que no dependa de un servicio externo.
