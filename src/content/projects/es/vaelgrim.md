---
title: Vaelgrim
description: "RPG idle de navegador con grupo de 3 héroes, botín, temporadas, PvP, subasta, battle pass y servidor autoritativo."
tags: [TypeScript, PixiJS, React, Fastify, WebSocket, SQLite]
category: game
cover: ../../../assets/projects/vaelgrim.jpg
demo: https://vaelgrim.com
date: 2026-10-26
featured: true
order: 3
color: purple
---

Vaelgrim es un RPG idle de navegador inspirado en Diablo 2 en tono y estructura, pero con identidad propia: tú no controlas cada golpe, diseñas el grupo. Tres héroes de cinco clases avanzan solos por actos, oleadas y jefes mientras tú decides composición, atributos, habilidades, talentos, equipo, gemas, encantamientos y dónde farmear. El botín es el corazón.

## El juego

- Cinco clases con árboles de talentos y habilidades propias; grupos de tres con sinergias.
- Rarezas, afijos con rangos, únicos que modifican habilidades, sets, gemas, encantamiento, crafteo y filtro de botín.
- Actos con zonas, jefes, guardianes, élites, mazmorra diaria infinita (Endless Descent), Arena PvP y subasta.
- Battle Pass por temporada, misiones diarias y semanales, referidos, consumibles, chat y ranking.
- Multijugador online con cuentas, guardado autoritativo, servidor que simula y cliente espejo.
- i18n inglés/español/portugués, changelog dentro del juego y versión pública.

## La arquitectura

TypeScript estricto en capas (motor puro, datos declarativos, render y UI separados por reglas de ESLint), PixiJS 8 para el combate y React 19 para los menús. Simulación determinista de tick fijo (20 Hz) con RNG con semilla, render interpolado a 60 FPS y migraciones de guardado v1→v19. El servidor es Fastify 5 + WebSocket + SQLite; el despliegue, dos contenedores Docker (frontend Nginx y backend). La suite incluye tests, simulación de balance, bots de carga y `npm run load:sessions` para medir capacidad.

## Estado

Alpha pública `0.1.0-alpha.13`, en desarrollo activo. La web bilingüe `vaelgrim.com` (React, Vite, Tailwind v4, prerender y SEO) es la cara del proyecto; el repositorio del juego es privado por la licencia de los sprites.
