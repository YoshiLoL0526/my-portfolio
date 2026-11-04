// Contenido de los CV descargables. Se mantiene junto a los PDFs generados
// por scripts/build-cv.mjs para poder actualizar los tres idiomas a la vez.

export const cvData = {
  es: {
    lang: 'es',
    title: 'Raidel Martínez Santos — Curriculum Vitae',
    role: 'Ingeniero de Software — Backend e IA',
    location: 'Remoto · abierto a reubicación',
    contact: ['yoshilol0526@gmail.com', 'github.com/YoshiLoL0526', 'linkedin.com/in/raidel-martínez-santos'],
    labels: {
      stack: 'Stack',
      education: 'Formación',
      profile: 'Perfil',
      experience: 'Experiencia',
      languages: 'Idiomas',
      projects: 'Proyectos seleccionados',
      page: 'Página',
      cv: 'Curriculum Vitae',
    },
    skills: [
      { title: 'Lenguajes', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust · básico', 'Lua'] },
      {
        title: 'Backend',
        items: [
          'FastAPI',
          'Flask',
          'NestJS',
          'Fastify',
          'SQLAlchemy',
          'Prisma',
          'Alembic',
          'Pydantic',
          'REST',
          'WebSocket',
          'SSE',
          'JWT / RBAC',
        ],
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS', 'Zustand', 'Radix UI', 'Tiptap', 'PixiJS'],
      },
      {
        title: 'IA y automatización',
        items: [
          'Agentes LLM',
          'MCP',
          'RAG',
          'OpenAI',
          'Anthropic',
          'Ollama',
          'ChromaDB',
          'búsqueda vectorial',
          'n8n',
        ],
      },
      {
        title: 'Ingeniería agéntica',
        items: [
          'Claude Code',
          'Codex',
          'OpenCode',
          'Orquestación de agentes',
          'Subagentes',
          'Servidores MCP',
          'Agent SDK',
        ],
      },
      { title: 'Datos', items: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Redis'] },
      {
        title: 'Infraestructura y herramientas',
        items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'PyInstaller / PyWebView', 'pytest', 'Vitest', 'Playwright'],
      },
    ],
    education: {
      title: 'Grado en Ingeniería Informática',
      org: 'Universidad de Oriente',
      meta: 'Santiago de Cuba, Cuba',
      dates: '2021 — 2024',
    },
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
      { name: 'Portugués', level: 'A2' },
    ],
    profile:
      'Ingeniero de software con más de 4 años construyendo productos full-stack y sistemas de automatización con IA. Trabajo principalmente con Python (FastAPI) y TypeScript (NestJS, Next.js, React), con experiencia específica en agentes LLM, el Model Context Protocol y la automatización de flujos con n8n. También uso herramientas agénticas de codificación —Claude Code, Codex y OpenCode— para orquestar subagentes, revisar código y llevar tareas del diseño a la implementación. Cómodo en todo el ciclo de entrega —diseño de APIs y modelos de datos, sistemas en tiempo real, infraestructura multi-tenant y empaquetado de escritorio— y acostumbrado a llevar proyectos desde el primer commit hasta producción.',
    experience: [
      {
        role: 'Ingeniero de Software',
        company: 'Freelance / Por cuenta propia',
        date: 'ago 2022 — Actualidad',
        location: 'Remoto',
        bullets: [
          'Entrego aplicaciones web full-stack y sistemas de automatización con IA de principio a fin para clientes: arquitectura, implementación, despliegue y mantenimiento.',
          '**InvokeIA (trabajo actual):** desarrollo de una plataforma de gestión clínica y automatización con IA para clínicas.',
          'El producto cubre agenda, historia clínica, ventas y facturación, automatizaciones y comunicaciones con pacientes.',
          'También incluye reportes, agentes de IA y un visor DICOM para radiografías y tomografías.',
          'Stack principal: **Next.js / React, Python / FastAPI, n8n, PostgreSQL y Docker**, con integraciones con WhatsApp Business API.',
          'Uso herramientas agénticas de codificación (Claude Code, Codex y OpenCode) para orquestar agentes, revisar código y automatizar tareas de desarrollo.',
        ],
      },
      {
        role: 'Desarrollador de Software',
        company: 'Desoft',
        date: 'sep 2024 — ene 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Desarrollador backend en proyectos de software empresarial: modelado de datos relacionales y NoSQL y automatización de procesos de negocio.',
          'Participé en el diseño de APIs, esquemas de bases de datos y herramientas internas dentro de un equipo ágil.',
        ],
      },
    ],
    projects: [
      {
        name: 'Team Flow',
        tech: 'NestJS · Prisma · PostgreSQL · Redis',
        body: 'Plataforma full-stack de colaboración de equipos: RBAC dinámico por equipo, autenticación de dos factores TOTP, una bóveda de credenciales AES-256-GCM con audit log completo, chat y notificaciones en tiempo real con Socket.IO, y vistas de tareas Kanban / lista / calendario / timeline.',
      },
      {
        name: 'agent-sdk',
        tech: 'Python · asyncio · Pydantic',
        body: 'SDK async-first para construir agentes LLM. Proveedores intercambiables (Anthropic / OpenAI / Ollama), memoria conectable (SQLite FTS5, ficheros, ChromaDB), tres modos de ejecución (conversacional, ReAct, autónomo), sistema de eventos y plugins, y orquestación multiagente mediante herramientas de subagente.',
      },
      {
        name: 'Agents Team',
        tech: 'Python · Markdown · YAML',
        body: 'CLI que mantiene una definición canónica de agentes de IA y la instala en Codex, Claude Code y OpenCode, con validación de metadatos y permisos, render nativo, instalación global o por proyecto y backups.',
      },
      {
        name: 'Mnemosyne',
        tech: 'ChromaDB · MCP · Typer',
        body: 'Sistema de memoria vectorial a largo plazo para agentes IA y desarrolladores: embeddings locales, búsqueda semántica multi-proyecto, CLI con Rich/Typer y un servidor MCP que da memoria persistente a los agentes del editor.',
        link: 'github.com/YoshiLoL0526/mnemosyne',
      },
      {
        name: 'mcp-toolkit',
        tech: 'FastMCP · Playwright',
        body: 'Servidor MCP de propósito general: búsqueda y scraping web, HTTP genérico, ejecución de Python/JS en sandbox con timeouts, memoria persistente en SQLite y utilidades de fecha y zona horaria.',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
      },
      {
        name: 'Paris System',
        tech: 'FastAPI · SQLAlchemy · React · PyWebView',
        body: 'Aplicación de escritorio para la gestión de una tienda de alquiler de trajes de fiesta. Backend FastAPI modular (SQLAlchemy, Alembic, JWT, RBAC, audit trail) con frontend React/Vite, distribuida como un único ejecutable de Windows mediante PyInstaller + PyWebView.',
      },
      {
        name: 'Video Editor',
        tech: 'React 18 · TypeScript · ffmpeg.wasm',
        body: 'Editor de vídeo local-first para web y escritorio (MIT). Procesamiento en cliente con ffmpeg.wasm / WebCodecs, un modelo de datos .vproj con migraciones, historial undo/redo, persistencia con File System Access API y una capa de adaptadores preparada para Tauri.',
      },
    ],
    footer:
      'Más en **github.com/YoshiLoL0526** — Local Share (transferencia de archivos por mDNS + TLS), Lily Flans & Home Budget (React Native, multi-moneda), Toolkit (utilidades web locales).',
  },

  en: {
    lang: 'en',
    title: 'Raidel Martínez Santos — Curriculum Vitae',
    role: 'Software Engineer — Backend & AI Automation',
    location: 'Remote · open to relocation',
    contact: ['yoshilol0526@gmail.com', 'github.com/YoshiLoL0526', 'linkedin.com/in/raidel-martínez-santos'],
    labels: {
      stack: 'Stack',
      education: 'Education',
      profile: 'Profile',
      experience: 'Experience',
      languages: 'Languages',
      projects: 'Selected projects',
      page: 'Page',
      cv: 'Curriculum Vitae',
    },
    skills: [
      { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust · basic', 'Lua'] },
      {
        title: 'Backend',
        items: [
          'FastAPI',
          'Flask',
          'NestJS',
          'Fastify',
          'SQLAlchemy',
          'Prisma',
          'Alembic',
          'Pydantic',
          'REST',
          'WebSocket',
          'SSE',
          'JWT / RBAC',
        ],
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS', 'Zustand', 'Radix UI', 'Tiptap', 'PixiJS'],
      },
      {
        title: 'AI & Automation',
        items: ['LLM agents', 'MCP', 'RAG', 'OpenAI', 'Anthropic', 'Ollama', 'ChromaDB', 'vector search', 'n8n'],
      },
      {
        title: 'Agentic Engineering',
        items: [
          'Claude Code',
          'Codex',
          'OpenCode',
          'Agent orchestration',
          'Subagents',
          'MCP servers',
          'Agent SDK',
        ],
      },
      { title: 'Data', items: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Redis'] },
      {
        title: 'Infra & Tooling',
        items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'PyInstaller / PyWebView', 'pytest', 'Vitest', 'Playwright'],
      },
    ],
    education: {
      title: 'B.Sc. in Computer Engineering',
      org: 'Universidad de Oriente',
      meta: 'Santiago de Cuba, Cuba',
      dates: '2021 — 2024',
    },
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'Portuguese', level: 'A2' },
    ],
    profile:
      "Software engineer with 4+ years building full-stack products and AI-automation systems. I work mainly in Python (FastAPI) and TypeScript (NestJS, Next.js, React), with focused experience in LLM agents, the Model Context Protocol and n8n workflow automation. I also use agentic coding tools —Claude Code, Codex and OpenCode— to orchestrate subagents, review code and take tasks from design to implementation. Comfortable across the whole delivery cycle —API and data-model design, real-time systems, multi-tenant infrastructure and desktop packaging— and used to owning projects from the first commit to production.",
    experience: [
      {
        role: 'Software Engineer',
        company: 'Freelance / Self-employed',
        date: 'Aug 2022 — Present',
        location: 'Remote',
        bullets: [
          'Deliver full-stack web apps and AI-automation systems end to end for clients: architecture, implementation, deployment and maintenance.',
          '**InvokeIA (current engagement):** building a clinical management and AI automation platform for clinics.',
          'The product covers scheduling, clinical records, sales and invoicing, automation workflows and patient communications.',
          'It also includes reporting, AI agents and a DICOM viewer for X-rays and CT scans.',
          'Main stack: **Next.js / React, Python / FastAPI, n8n, PostgreSQL and Docker**, with WhatsApp Business API integrations.',
          'Use agentic coding tools (Claude Code, Codex and OpenCode) to orchestrate agents, review code and automate development tasks.',
        ],
      },
      {
        role: 'Software Developer',
        company: 'Desoft',
        date: 'Sep 2024 — Jan 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Backend developer on enterprise software projects: relational and NoSQL data modeling and business-process automation.',
          'Contributed to API design, database schemas and internal tooling within an agile team.',
        ],
      },
    ],
    projects: [
      {
        name: 'Team Flow',
        tech: 'NestJS · Prisma · PostgreSQL · Redis',
        body: 'Full-stack team-collaboration platform: per-team dynamic RBAC, TOTP two-factor auth, an AES-256-GCM credential vault with a full audit log, real-time chat and notifications over Socket.IO, and Kanban / list / calendar / timeline task views.',
      },
      {
        name: 'agent-sdk',
        tech: 'Python · asyncio · Pydantic',
        body: 'Async-first SDK for building LLM agents. Swappable providers (Anthropic / OpenAI / Ollama), pluggable memory (SQLite FTS5, files, ChromaDB), three runtime modes (conversational, ReAct, autonomous), an event + plugin system, and multi-agent orchestration via sub-agent tools.',
      },
      {
        name: 'Agents Team',
        tech: 'Python · Markdown · YAML',
        body: 'CLI that keeps one canonical definition of AI agents and installs it into Codex, Claude Code and OpenCode, with metadata and permission validation, native rendering, global or per-project installation and backups.',
      },
      {
        name: 'Mnemosyne',
        tech: 'ChromaDB · MCP · Typer',
        body: 'Long-term vector-memory system for AI agents and developers: local embeddings, multi-project semantic search, a Rich/Typer CLI and an MCP server that gives editor agents persistent project memory.',
        link: 'github.com/YoshiLoL0526/mnemosyne',
      },
      {
        name: 'mcp-toolkit',
        tech: 'FastMCP · Playwright',
        body: 'General-purpose Model Context Protocol server: web search and scraping, generic HTTP, sandboxed Python/JS execution with timeouts, persistent SQLite memory and timezone/date utilities.',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
      },
      {
        name: 'Paris System',
        tech: 'FastAPI · SQLAlchemy · React · PyWebView',
        body: 'Desktop management app for a formalwear-rental store. Modular FastAPI backend (SQLAlchemy, Alembic, JWT, RBAC, audit trail) with a React/Vite frontend, shipped as a single Windows executable via PyInstaller + PyWebView.',
      },
      {
        name: 'Video Editor',
        tech: 'React 18 · TypeScript · ffmpeg.wasm',
        body: 'Local-first video editor for web and desktop (MIT). Client-side processing with ffmpeg.wasm / WebCodecs, a .vproj data model with migrations, undo/redo history, File System Access API persistence and a platform-adapter layer ready for Tauri.',
      },
    ],
    footer:
      'More at **github.com/YoshiLoL0526** — Local Share (mDNS + TLS file transfer), Lily Flans & Home Budget (React Native, multi-currency), Toolkit (local web utilities).',
  },

  pt: {
    lang: 'pt',
    title: 'Raidel Martínez Santos — Curriculum Vitae',
    role: 'Engenheiro de Software — Backend e IA',
    location: 'Remoto · aberto a relocação',
    contact: ['yoshilol0526@gmail.com', 'github.com/YoshiLoL0526', 'linkedin.com/in/raidel-martínez-santos'],
    labels: {
      stack: 'Stack',
      education: 'Formação',
      profile: 'Perfil',
      experience: 'Experiência',
      languages: 'Idiomas',
      projects: 'Projetos selecionados',
      page: 'Página',
      cv: 'Curriculum Vitae',
    },
    skills: [
      { title: 'Linguagens', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust · básico', 'Lua'] },
      {
        title: 'Backend',
        items: [
          'FastAPI',
          'Flask',
          'NestJS',
          'Fastify',
          'SQLAlchemy',
          'Prisma',
          'Alembic',
          'Pydantic',
          'REST',
          'WebSocket',
          'SSE',
          'JWT / RBAC',
        ],
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS', 'Zustand', 'Radix UI', 'Tiptap', 'PixiJS'],
      },
      {
        title: 'IA e automação',
        items: ['Agentes LLM', 'MCP', 'RAG', 'OpenAI', 'Anthropic', 'Ollama', 'ChromaDB', 'busca vetorial', 'n8n'],
      },
      {
        title: 'Engenharia agêntica',
        items: [
          'Claude Code',
          'Codex',
          'OpenCode',
          'Orquestração de agentes',
          'Subagentes',
          'Servidores MCP',
          'Agent SDK',
        ],
      },
      { title: 'Dados', items: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Redis'] },
      {
        title: 'Infraestrutura e ferramentas',
        items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'PyInstaller / PyWebView', 'pytest', 'Vitest', 'Playwright'],
      },
    ],
    education: {
      title: 'Bacharelado em Engenharia da Computação',
      org: 'Universidade de Oriente',
      meta: 'Santiago de Cuba, Cuba',
      dates: '2021 — 2024',
    },
    languages: [
      { name: 'Espanhol', level: 'Nativo' },
      { name: 'Inglês', level: 'B2' },
      { name: 'Português', level: 'A2' },
    ],
    profile:
      'Engenheiro de software com mais de 4 anos construindo produtos full-stack e sistemas de automação com IA. Trabalho principalmente com Python (FastAPI) e TypeScript (NestJS, Next.js, React), com experiência específica em agentes LLM, no Model Context Protocol e na automação de fluxos com n8n. Também uso ferramentas agênticas de programação —Claude Code, Codex e OpenCode— para orquestrar subagentes, revisar código e levar tarefas do design à implementação. Confortável em todo o ciclo de entrega —design de APIs e modelos de dados, sistemas em tempo real, infraestrutura multi-tenant e empacotamento desktop— e acostumado a conduzir projetos do primeiro commit à produção.',
    experience: [
      {
        role: 'Engenheiro de Software',
        company: 'Freelance / Autônomo',
        date: 'ago 2022 — Atual',
        location: 'Remoto',
        bullets: [
          'Entrego aplicações web full-stack e sistemas de automação com IA de ponta a ponta para clientes: arquitetura, implementação, implantação e manutenção.',
          '**InvokeIA (trabalho atual):** desenvolvimento de uma plataforma de gestão clínica e automação com IA para clínicas.',
          'O produto cobre agenda, prontuário, vendas e faturamento, automações e comunicação com pacientes.',
          'Também inclui relatórios, agentes de IA e um visualizador DICOM para raios X e tomografias.',
          'Stack principal: **Next.js / React, Python / FastAPI, n8n, PostgreSQL e Docker**, com integrações com a WhatsApp Business API.',
          'Uso ferramentas agênticas de programação (Claude Code, Codex e OpenCode) para orquestrar agentes, revisar código e automatizar tarefas de desenvolvimento.',
        ],
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'Desoft',
        date: 'set 2024 — jan 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Desenvolvedor backend em projetos de software empresarial: modelagem de dados relacionais e NoSQL e automação de processos de negócio.',
          'Participei do design de APIs, esquemas de banco de dados e ferramentas internas dentro de uma equipe ágil.',
        ],
      },
    ],
    projects: [
      {
        name: 'Team Flow',
        tech: 'NestJS · Prisma · PostgreSQL · Redis',
        body: 'Plataforma full-stack de colaboração para equipes: RBAC dinâmico por equipe, autenticação de dois fatores TOTP, cofre de credenciais AES-256-GCM com audit log completo, chat e notificações em tempo real com Socket.IO, e visualizações de tarefas em Kanban / lista / calendário / timeline.',
      },
      {
        name: 'agent-sdk',
        tech: 'Python · asyncio · Pydantic',
        body: 'SDK async-first para construir agentes LLM. Provedores intercambiáveis (Anthropic / OpenAI / Ollama), memória conectável (SQLite FTS5, arquivos, ChromaDB), três modos de execução (conversacional, ReAct, autônomo), sistema de eventos e plugins, e orquestração multiagente por meio de ferramentas de subagente.',
      },
      {
        name: 'Agents Team',
        tech: 'Python · Markdown · YAML',
        body: 'CLI que mantém uma definição canônica de agentes de IA e a instala no Codex, Claude Code e OpenCode, com validação de metadados e permissões, render nativo, instalação global ou por projeto e backups.',
      },
      {
        name: 'Mnemosyne',
        tech: 'ChromaDB · MCP · Typer',
        body: 'Sistema de memória vetorial de longo prazo para agentes de IA e desenvolvedores: embeddings locais, busca semântica multi-projeto, CLI com Rich/Typer e um servidor MCP que dá memória persistente aos agentes do editor.',
        link: 'github.com/YoshiLoL0526/mnemosyne',
      },
      {
        name: 'mcp-toolkit',
        tech: 'FastMCP · Playwright',
        body: 'Servidor MCP de propósito geral: busca e scraping web, HTTP genérico, execução de Python/JS em sandbox com timeouts, memória persistente em SQLite e utilitários de data e fuso horário.',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
      },
      {
        name: 'Paris System',
        tech: 'FastAPI · SQLAlchemy · React · PyWebView',
        body: 'Aplicativo desktop para a gestão de uma loja de aluguel de trajes de festa. Backend FastAPI modular (SQLAlchemy, Alembic, JWT, RBAC, audit trail) com frontend React/Vite, distribuído como um único executável do Windows via PyInstaller + PyWebView.',
      },
      {
        name: 'Video Editor',
        tech: 'React 18 · TypeScript · ffmpeg.wasm',
        body: 'Editor de vídeo local-first para web e desktop (MIT). Processamento no cliente com ffmpeg.wasm / WebCodecs, um modelo de dados .vproj com migrações, histórico undo/redo, persistência com File System Access API e uma camada de adaptadores pronta para Tauri.',
      },
    ],
    footer:
      'Mais em **github.com/YoshiLoL0526** — Local Share (transferência de arquivos por mDNS + TLS), Lily Flans & Home Budget (React Native, multi-moeda), Toolkit (utilitários web locais).',
  },
};
