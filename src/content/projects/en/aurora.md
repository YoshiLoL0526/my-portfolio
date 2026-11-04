---
title: Aurora
description: "Desktop UI library for Python with a native Rust core. Declarative, reactive and WebView-free."
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

Aurora started from a concrete frustration: making a Python desktop app look good usually meant bolting on React, a WebView and an HTTP backend, or accepting the aesthetics of toolkits from another era. Aurora takes a different route: one technology —Python—, real native windows, and a layout/render engine written in Rust.

## The idea

The UI is a function of state. `Signal`s keep the view in sync, while the native core handles layout, typography, animations and events with Skia + Taffy, outside the interpreter and without the GIL.

## What it includes

- Flexbox layout, token-based themes and live light/dark switching.
- Cards, tables, tabs, switches, tooltips, modals, toasts and more.
- Line, area, bar and scatter charts with millions of points, downsampled with LTTB in Rust.
- Multiple windows, system tray, native menus, dialogs and notifications.
- Headless PNG rendering and a pilot for interaction tests.
- Single-executable packaging with `aurora build`.

## Status

Pre-alpha (v0.10). It is already useful for internal tools and prototypes; the API may change. Docs and screenshots live on the project site, and the demo app —Aurora Studio— is rendered by the library itself.

This is the project pushing my Rust and native-rendering skills the hardest.
