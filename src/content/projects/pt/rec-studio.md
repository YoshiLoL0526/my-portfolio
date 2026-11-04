---
title: Rec Studio
description: "Gravador e editor de tela para Windows, construído sobre Aurora: captura com áudio, timeline de edição e export MP4 com FFmpeg."
tags: [Python, aurora-ui, FFmpeg, PyAV, Windows]
category: tool
cover: ../../../assets/projects/rec-studio-editor.png
repo: https://github.com/YoshiLoL0526/screen-recorder
date: 2026-11-01
order: 4
color: yellow
---

Rec Studio é um aplicativo desktop para gravar a tela e editar o resultado sem sair do app. É também a prova de que Aurora serve para construir ferramentas reais, não apenas demos.

## O que faz

- Grava monitor, janela ou região, com áudio do sistema e microfone.
- Editor com cortes, recortes, reordenação, velocidade, transições, undo/redo e salvamento automático.
- Export MP4 com FFmpeg, presets de GPU/qualidade/720p e export sem recodificar, com progresso e ETA.
- Biblioteca de gravações, configurações e recuperação de sessões interrompidas.
- Instalador Inno Setup e versão portátil para Windows 10/11.

## Como é construído

A interface é feita com aurora-ui (Python declarativo + núcleo Rust com Skia/Taffy). A captura usa Windows Graphics Capture, Desktop Duplication e `mss`; o áudio, WASAPI loopback e microfone; o decode, PyAV + NumPy; o encode, FFmpeg. O app é empacotado com `aurora build` (PyInstaller) e tem CI, testes de integração e um smoke test do executável.

## Status

v1.1.0. O instalador e o zip portátil estão no GitHub Releases. O projeto também serve como banco de testes para as lacunas da biblioteca Aurora: cada limite que aparece no app vira uma melhoria da biblioteca.
