---
title: Paris System
description: "Aplicación de escritorio para una tienda de alquiler de trajes: inventario, contratos, pagos, calendario y reportes."
tags: [FastAPI, SQLAlchemy, React, PyWebView, SQLite]
category: tool
date: 2026-09-17
order: 13
color: pink
---

Paris System es una aplicación de gestión para una tienda de alquiler de trajes y vestidos de fiesta. El cliente necesitaba dejar atrás hojas de cálculo y llevar inventario, contratos, pagos y calendario en un único sistema.

- Backend FastAPI modular con SQLAlchemy, Alembic, Pydantic, JWT, RBAC y auditoría.
- Frontend React/Vite con rutas protegidas y pantallas conectadas a la API real.
- Módulos de clientes, inventario, contratos, cargos, firmas y fotos, pagos, cuentas por cobrar, calendario, reportes y ventas directas.
- Distribución como un único `.exe` de Windows: FastAPI arranca en segundo plano, espera el healthcheck y abre una ventana PyWebView.
- Tests de backend, lint y build de frontend en verde.

Es un buen ejemplo de producto completo: modelo de datos, permisos, auditoría, UI y empaquetado para un usuario que no va a abrir una terminal.
