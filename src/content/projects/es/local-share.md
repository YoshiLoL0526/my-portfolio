---
title: Local Share
description: "Transferencia de archivos por red local entre Windows y Android: mDNS, emparejamiento por PIN y TLS, sin nube."
tags: [Python, Flet, FastAPI, mDNS, TLS]
category: tool
date: 2026-08-20
order: 18
color: green
---

Local Share mueve archivos entre dispositivos de la misma red sin cuentas, sin nube y sin escribir IPs a mano.

- Descubrimiento por mDNS y emparejamiento por PIN una sola vez por dispositivo.
- Transferencia directa entre pares sobre TLS, con historial y dispositivos emparejados en SQLite.
- Un único proceso por dispositivo: Flet para la UI, FastAPI/uvicorn para el servidor y httpx para el cliente.
- Herramientas de desarrollo para probar descubrimiento, emparejamiento y transferencia entre dos procesos.
- Pensado para Windows ↔ Android; el certificado y la identidad se generan en local.

Un proyecto pequeño de infraestructura doméstica: la parte difícil es la red, no la interfaz.
