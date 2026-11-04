---
title: Local Share
description: "Transferência de arquivos pela rede local entre Windows e Android: mDNS, pareamento por PIN e TLS, sem nuvem."
tags: [Python, Flet, FastAPI, mDNS, TLS]
category: tool
date: 2026-08-20
order: 18
color: green
---

Local Share move arquivos entre dispositivos da mesma rede sem contas, sem nuvem e sem digitar IPs manualmente.

- Descoberta por mDNS e pareamento por PIN uma única vez por dispositivo.
- Transferência direta entre pares via TLS, com histórico e dispositivos pareados em SQLite.
- Um único processo por dispositivo: Flet para a UI, FastAPI/uvicorn para o servidor e httpx para o cliente.
- Ferramentas de desenvolvimento para testar descoberta, pareamento e transferência entre dois processos.
- Pensado para Windows ↔ Android; o certificado e a identidade são gerados localmente.

Um pequeno projeto de infraestrutura doméstica: a parte difícil é a rede, não a interface.
