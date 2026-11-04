---
title: Rec Studio
description: "Grabador y editor de pantalla para Windows, construido sobre Aurora: captura con audio, timeline de edición y export MP4 con FFmpeg."
tags: [Python, aurora-ui, FFmpeg, PyAV, Windows]
category: tool
cover: ../../../assets/projects/rec-studio-editor.png
repo: https://github.com/YoshiLoL0526/screen-recorder
date: 2026-11-01
order: 4
color: yellow
---

Rec Studio es una aplicación de escritorio para grabar la pantalla y editar el resultado sin salir de la app. Es además la prueba de que Aurora sirve para construir herramientas reales, no solo demos.

## Qué hace

- Graba monitor, ventana o región, con audio del sistema y micrófono.
- Editor con cortes, recortes, reordenación, velocidad, transiciones, undo/redo y autoguardado.
- Export MP4 con FFmpeg, presets de GPU/calidad/720p y export sin recodificar, con progreso y ETA.
- Biblioteca de grabaciones, ajustes y recuperación de sesiones interrumpidas.
- Instalador Inno Setup y versión portable para Windows 10/11.

## Cómo está construido

La interfaz está hecha con aurora-ui (Python declarativo + núcleo Rust con Skia/Taffy). La captura usa Windows Graphics Capture, Desktop Duplication y `mss`; el audio, WASAPI loopback y micrófono; el decode, PyAV + NumPy; el encode, FFmpeg. La app se empaqueta con `aurora build` (PyInstaller) y tiene CI, tests de integración y un smoke test del ejecutable.

## Estado

v1.1.0. El instalador y el zip portable están en GitHub Releases. El proyecto también sirve como banco de pruebas para las carencias de Aurora: cada límite que aparece en la app se convierte en una mejora de la librería.
