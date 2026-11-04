---
title: Rec Studio
description: "Screen recorder and editor for Windows, built on Aurora: capture with audio, editing timeline and FFmpeg MP4 export."
tags: [Python, aurora-ui, FFmpeg, PyAV, Windows]
category: tool
cover: ../../../assets/projects/rec-studio-editor.png
repo: https://github.com/YoshiLoL0526/screen-recorder
date: 2026-11-01
order: 4
color: yellow
---

Rec Studio is a desktop app for recording your screen and editing the result without leaving the app. It is also proof that Aurora can build real tools, not just demos.

## What it does

- Records a monitor, window or region, with system audio and microphone.
- Editor with cuts, trims, reordering, speed, transitions, undo/redo and autosave.
- MP4 export with FFmpeg, GPU/quality/720p presets and stream-copy export, with progress and ETA.
- Recording library, settings and recovery of interrupted sessions.
- Inno Setup installer and portable build for Windows 10/11.

## How it is built

The UI is built with aurora-ui (declarative Python + Rust core with Skia/Taffy). Capture uses Windows Graphics Capture, Desktop Duplication and `mss`; audio uses WASAPI loopback and microphone; decoding uses PyAV + NumPy; encoding uses FFmpeg. The app is packaged with `aurora build` (PyInstaller) and has CI, integration tests and an executable smoke test.

## Status

v1.1.0. The installer and portable zip are on GitHub Releases. The project also acts as a test bed for Aurora's gaps: every limit found in the app becomes an improvement to the library.
