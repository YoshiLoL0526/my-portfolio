---
title: Local Share
description: "Local-network file transfer between Windows and Android: mDNS, PIN pairing and TLS, no cloud."
tags: [Python, Flet, FastAPI, mDNS, TLS]
category: tool
date: 2026-08-20
order: 18
color: green
---

Local Share moves files between devices on the same network with no accounts, no cloud and no typing IPs by hand.

- mDNS discovery and one-time PIN pairing per device.
- Direct peer-to-peer transfer over TLS, with history and paired devices in SQLite.
- One process per device: Flet for UI, FastAPI/uvicorn for the server and httpx for the client.
- Development tools to test discovery, pairing and transfer between two processes.
- Built for Windows ↔ Android; the certificate and identity are generated locally.

A small home-infrastructure project: the hard part is the network, not the interface.
