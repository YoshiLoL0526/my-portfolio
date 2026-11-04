---
title: Aurora
description: "Librería de interfaces de escritorio para Python con núcleo nativo en Rust. Declarativa, reactiva y sin WebView."
tags: [Python, Rust, Skia, Taffy]
category: tool
cover: ../../../assets/projects/aurora-studio.png
repo: https://github.com/YoshiLoL0526/aurora
demo: https://yoshilol0526.github.io/aurora/
date: 2026-11-02
featured: true
order: 2
color: purple
---

Aurora nace de una frustración concreta: para que una aplicación de escritorio en Python se viera bien, lo habitual era montar React, un WebView y un backend HTTP, o aceptar la estética de toolkits de otra época. Aurora propone una sola tecnología —Python—, ventanas nativas de verdad y un motor de layout y render escrito en Rust.

## La idea

La interfaz se describe como una función del estado. Los `Signal` mantienen la vista sincronizada y el núcleo nativo se encarga de layout, tipografía, animaciones y eventos con Skia + Taffy, fuera del intérprete y sin el GIL.

## Lo que incluye

- Layout flexbox, temas con tokens y modo claro/oscuro en caliente.
- Componentes como tarjetas, tablas, tabs, switches, tooltips, modales y toasts.
- Gráficos de líneas, áreas, barras y dispersión con millones de puntos reducidos con LTTB en Rust.
- Ventanas múltiples, bandeja del sistema, menús nativos, diálogos y notificaciones.
- Renderizado PNG sin abrir ventana y un piloto para tests de interacción.
- Empaquetado a ejecutable con `aurora build`.

## Estado

Pre-alpha (v0.10). Ya sirve para herramientas internas y prototipos; la API puede cambiar. Toda la documentación y las capturas están en la web del proyecto, y la app de demostración —Aurora Studio— está renderizada por la propia librería.

Es el proyecto que más está empujando mi aprendizaje de Rust y de render nativo.
