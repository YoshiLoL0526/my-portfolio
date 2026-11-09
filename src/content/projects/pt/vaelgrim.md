---
title: Vaelgrim
description: "RPG idle de navegador com grupo de 3 heróis, loot, temporadas, PvP, leilão, battle pass e servidor autoritativo."
tags: [TypeScript, PixiJS, React, Fastify, WebSocket, SQLite]
category: game
cover: ../../../assets/projects/vaelgrim.jpg
demo: https://vaelgrim.com
date: 2026-10-26
featured: true
order: 3
color: purple
---

Vaelgrim é um RPG idle de navegador inspirado em Diablo 2 no tom e na estrutura, mas com identidade própria: você não controla cada golpe, você monta o grupo. Três heróis de cinco classes avançam sozinhos por atos, ondas e chefes enquanto você decide composição, atributos, habilidades, talentos, equipamento, gemas, encantamentos e onde farmar. O loot é o coração.

## O jogo

- Cinco classes com árvores de talentos e habilidades próprias; grupos de três com sinergias.
- Raridades, afixos com faixas, itens únicos que modificam habilidades, sets, gemas, encantamento, crafting e filtro de loot.
- Atos com zonas, chefes, guardiões, elites, masmorra diária infinita (Endless Descent), Arena PvP e leilão.
- Battle Pass por temporada, missões diárias e semanais, indicações, consumíveis, chat e ranking.
- Multijogador online com contas, save autoritativo, servidor que simula e cliente espelho.
- i18n inglês/espanhol/português, changelog dentro do jogo e versão pública.

## A arquitetura

TypeScript estrito em camadas (motor puro, dados declarativos, render e UI separados por regras de ESLint), PixiJS 8 para o combate e React 19 para os menus. Simulação determinística de tick fixo (20 Hz) com RNG com seed, render interpolado a 60 FPS e migrações de save v1→v19. O servidor é Fastify 5 + WebSocket + SQLite; a implantação, dois contêineres Docker (frontend Nginx e backend). A suíte inclui testes, simulação de balanceamento, bots de carga e `npm run load:sessions` para medir capacidade.

## Status

Alpha pública `0.1.0-alpha.13`, em desenvolvimento ativo. O site trilíngue `vaelgrim.com` (React, Vite, Tailwind v4, prerender e SEO) é a cara do projeto; o repositório do jogo é privado por causa da licença dos sprites.
