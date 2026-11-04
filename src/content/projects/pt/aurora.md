---
title: Aurora
description: "Biblioteca de interfaces desktop para Python com núcleo nativo em Rust. Declarativa, reativa e sem WebView."
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

Aurora nasce de uma frustração concreta: para que uma aplicação desktop em Python ficasse bonita, o habitual era montar React, um WebView e um backend HTTP, ou aceitar a estética de toolkits de outra época. Aurora propõe uma única tecnologia —Python—, janelas nativas de verdade e um motor de layout e renderização escrito em Rust.

## A ideia

A interface é descrita como uma função do estado. Os `Signal` mantêm a view sincronizada e o núcleo nativo cuida de layout, tipografia, animações e eventos com Skia + Taffy, fora do interpretador e sem o GIL.

## O que inclui

- Layout flexbox, temas com tokens e modo claro/escuro em tempo real.
- Componentes como cards, tabelas, abas, switches, tooltips, modais e toasts.
- Gráficos de linhas, áreas, barras e dispersão com milhões de pontos reduzidos com LTTB em Rust.
- Múltiplas janelas, bandeja do sistema, menus nativos, diálogos e notificações.
- Renderização PNG sem abrir janela e um piloto para testes de interação.
- Empacotamento em executável com `aurora build`.

## Status

Pré-alfa (v0.10). Já serve para ferramentas internas e protótipos; a API pode mudar. Toda a documentação e as capturas estão no site do projeto, e o app de demonstração —Aurora Studio— é renderizado pela própria biblioteca.

É o projeto que mais está impulsionando meu aprendizado de Rust e de renderização nativa.
