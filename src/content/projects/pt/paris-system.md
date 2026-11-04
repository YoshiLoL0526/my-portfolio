---
title: Paris System
description: "Aplicativo desktop para uma loja de aluguel de trajes: estoque, contratos, pagamentos, calendário e relatórios."
tags: [FastAPI, SQLAlchemy, React, PyWebView, SQLite]
category: tool
date: 2026-09-17
order: 13
color: pink
---

Paris System é um aplicativo de gestão para uma loja de aluguel de trajes e vestidos de festa. O cliente precisava deixar as planilhas para trás e controlar estoque, contratos, pagamentos e calendário em um único sistema.

- Backend FastAPI modular com SQLAlchemy, Alembic, Pydantic, JWT, RBAC e auditoria.
- Frontend React/Vite com rotas protegidas e telas conectadas à API real.
- Módulos de clientes, estoque, contratos, cobranças, assinaturas e fotos, pagamentos, contas a receber, calendário, relatórios e vendas diretas.
- Distribuição como um único `.exe` do Windows: o FastAPI inicia em segundo plano, aguarda o healthcheck e abre uma janela PyWebView.
- Testes de backend, lint e build de frontend passando.

É um bom exemplo de produto completo: modelo de dados, permissões, auditoria, UI e empacotamento para um usuário que não vai abrir um terminal.
