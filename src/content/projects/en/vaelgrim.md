---
title: Vaelgrim
description: "Browser idle RPG with a 3-hero party, loot, seasons, PvP, auction house, battle pass and an authoritative server."
tags: [TypeScript, PixiJS, React, Fastify, WebSocket, SQLite]
category: game
cover: ../../../assets/projects/vaelgrim.jpg
demo: https://vaelgrim.com
date: 2026-10-26
featured: true
order: 1
color: purple
---

Vaelgrim is a browser idle RPG inspired by Diablo 2 in tone and structure, with an identity of its own: you do not control every hit, you design the party. Three heroes from five classes advance on their own through acts, waves and bosses while you decide composition, attributes, skills, talents, gear, gems, enchantments and where to farm. Loot is the heart.

## The game

- Five classes with talent trees and their own skills; three-hero parties with synergies.
- Rarities, rolled affixes, uniques that modify skills, sets, gems, enchanting, crafting and a loot filter.
- Acts with zones, bosses, guardians, elites, an endless daily dungeon (Endless Descent), PvP Arena and an auction house.
- Seasonal Battle Pass, daily and weekly missions, referrals, consumables, chat and rankings.
- Online multiplayer with accounts, authoritative saves, a simulating server and a mirror client.
- i18n English/Spanish/Portuguese, an in-game changelog and a public version number.

## The architecture

Strict TypeScript in layers (pure engine, declarative data, render and UI separated by ESLint rules), PixiJS 8 for combat and React 19 for menus. Deterministic fixed-tick simulation (20 Hz) with seeded RNG, interpolated 60 FPS rendering and save migrations v1→v19. The server is Fastify 5 + WebSocket + SQLite; deployment is two Docker containers (Nginx frontend and backend). The suite includes tests, balance simulation, load bots and `npm run load:sessions` to measure capacity.

## Status

Public alpha `0.1.0-alpha.13`, in active development. The bilingual `vaelgrim.com` site (React, Vite, Tailwind v4, prerendering and SEO) is the face of the project; the game repository is private because of the sprite license.
