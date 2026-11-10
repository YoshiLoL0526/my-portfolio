// Contenido de los CV descargables. Se mantiene junto a los PDFs generados
// por scripts/build-cv.mjs para poder actualizar los tres idiomas a la vez.
//
// Criterio editorial (lo que mira un reclutador en 6-10 segundos):
// - La experiencia profesional va primero y ocupa la mayor parte del CV.
// - Cada puesto es una empresa con fechas propias, no todo bajo "Freelance".
// - Viñetas que empiezan por un verbo y dicen qué cambió, no qué tecnología se tocó.
// - Pocas tecnologías, agrupadas y en texto plano (legible para ATS).
// - Los proyectos personales son un apoyo breve, no la sección principal.
// La experiencia debe coincidir con src/content/experience/*.

const contact = ['yoshilol0526@gmail.com', 'github.com/YoshiLoL0526', 'linkedin.com/in/raidel-martinez-santos'];

export const cvData = {
  es: {
    lang: 'es',
    title: 'Raidel Martínez Santos — Curriculum Vitae',
    role: 'Ingeniero de Software Backend · IA aplicada',
    location: 'Curitiba, Brasil · Remoto',
    contact,
    labels: {
      profile: 'Perfil',
      experience: 'Experiencia profesional',
      skills: 'Habilidades técnicas',
      projects: 'Proyectos propios',
      education: 'Formación',
      languages: 'Idiomas',
      stack: 'Tecnologías',
      cv: 'Curriculum Vitae',
    },
    profile:
      'Ingeniero de software backend con más de 4 años de experiencia construyendo y operando productos en producción con **Python (FastAPI)** y **TypeScript (Next.js, NestJS)**. Especializado en IA aplicada —plataformas RAG, agentes LLM y automatización con n8n— para SaaS de salud, gestión documental y soporte. Me encargo de todo el ciclo: diseño de APIs y datos, despliegue con Docker, observabilidad y resolución de incidencias.',
    experience: [
      {
        role: 'Ingeniero de Software',
        company: 'InvokeIA',
        context: 'SaaS de gestión clínica y automatización con IA',
        date: 'nov 2025 — Actualidad',
        location: 'Remoto',
        bullets: [
          'Desarrollo y mantengo una plataforma usada a diario por clínicas: agenda, historia clínica, facturación, comunicaciones con pacientes por **WhatsApp Business API**, agentes de IA y visor **DICOM**.',
          'Diagnostico y corrijo incidencias en producción con rapidez, evitando que un fallo puntual se convierta en una interrupción del servicio para las clínicas.',
          'Optimizo flujos y servicios críticos del servidor de eventos en **Python / FastAPI** y de los workflows de **n8n** para mejorar tiempos de respuesta.',
          'Ejecuto despliegues y mantenimientos críticos con **Docker**, coordinando los cambios para no interrumpir la operación de los clientes.',
        ],
        stack: 'Python, FastAPI, n8n, Next.js, React, PostgreSQL, Docker',
      },
      {
        role: 'Ingeniero de Software',
        company: 'Synapse Innovation Lab, SL',
        context: 'Consultora de producto e IA para clientes',
        date: 'oct 2024 — nov 2025',
        location: 'Remoto',
        bullets: [
          'Desarrollé el backend y la integración de IA de varias plataformas **RAG** para clientes: Synopsia (gestión documental y de audio con búsqueda semántica y mapas mentales), AiFink y AJU/AjuntaTech.',
          'Construí **AIssue Detector**: microservicio **FastAPI** que clasifica incidencias por categoría, severidad y equipo con **GPT-4.1**, con chat en React, adjuntos de imagen y protección por API key.',
          'Adapté los servicios para soportar usuarios concurrentes, eliminando cuellos de botella en el acceso a recursos compartidos y manteniendo estables los tiempos de respuesta.',
          'Incorporé métricas, logs y alertas para detectar fallos y degradación en producción antes de que afectaran a los clientes.',
        ],
        stack: 'Python, FastAPI, Flask, PostgreSQL, OpenAI, RAG, React, Docker',
      },
      {
        role: 'Desarrollador de Software',
        company: 'Desoft',
        context: 'Empresa nacional de software',
        date: 'sep 2024 — ene 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Desarrollé módulos y APIs sobre **Odoo 17** para automatizar procesos de negocio de clientes empresariales.',
          'Diseñé modelos de datos relacionales y NoSQL, esquemas de base de datos y herramientas internas dentro de un equipo ágil.',
        ],
        stack: 'Python, Odoo 17, PostgreSQL',
      },
      {
        role: 'Ingeniero de Software',
        company: 'Freelance',
        context: 'Proyectos a medida para clientes, en paralelo a mi empleo',
        date: 'ago 2022 — Actualidad',
        location: 'Remoto',
        bullets: [
          '**TopSite AI:** backend de una plataforma de creación de sitios web con IA — planes y permisos por recurso, generación y edición de páginas con historial y rollback, y monitorización con Sentry.',
          '**Paris System:** sistema de gestión para una tienda de alquiler de trajes que sustituyó sus hojas de cálculo — inventario, contratos, pagos y reportes, con RBAC y auditoría, entregado como un único ejecutable de Windows.',
          'Desarrollo chatbots, soluciones RAG y extracción de información, y aplicaciones full-stack con despliegue en Docker y tests automatizados.',
        ],
        stack: 'Python, FastAPI, SQLAlchemy, PostgreSQL, OpenAI, React, Docker',
      },
    ],
    skills: [
      { title: 'Lenguajes', items: 'Python, TypeScript, JavaScript, SQL' },
      { title: 'Backend', items: 'FastAPI, Flask, NestJS, Fastify, SQLAlchemy, Prisma, REST, WebSocket, JWT / RBAC' },
      { title: 'IA', items: 'RAG, agentes LLM, OpenAI, Anthropic, Ollama, MCP, ChromaDB, búsqueda vectorial, n8n' },
      { title: 'Frontend', items: 'React, Next.js, React Native, Tailwind CSS' },
      { title: 'Datos e infraestructura', items: 'PostgreSQL, Redis, SQLite, Docker, Nginx, GitHub Actions, Linux' },
      { title: 'Calidad y flujo de trabajo', items: 'pytest, Vitest, Playwright, desarrollo asistido con Claude Code y Codex' },
    ],
    projects: [
      {
        name: 'Vaelgrim',
        link: 'vaelgrim.com',
        body: 'RPG multijugador en producción con servidor autoritativo **Fastify + WebSocket**, simulación determinista a 20 Hz, bots de carga y despliegue en Docker.',
      },
      {
        name: 'Aurora',
        link: 'github.com/YoshiLoL0526/aurora',
        body: 'Librería de interfaces de escritorio para Python con núcleo nativo en **Rust** (Skia + Taffy); base de Rec Studio, un grabador y editor de pantalla.',
      },
      {
        name: 'Agent SDK',
        body: 'SDK async de Python para agentes LLM: proveedores intercambiables (Anthropic / OpenAI / Ollama), memoria vectorial, modo ReAct y orquestación multiagente.',
      },
      {
        name: 'MCP Toolkit · Mnemosyne',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
        body: 'Servidores **MCP** que dan a los agentes de IA búsqueda web, sandbox de código y memoria semántica persistente con ChromaDB.',
      },
    ],
    education: {
      title: 'Grado en Ingeniería Informática',
      org: 'Universidad de Oriente · Santiago de Cuba',
      dates: '2021 — 2024',
      note: 'Tesis: detección de pérdidas de calor en calderas industriales a partir de imágenes térmicas.',
    },
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
      { name: 'Portugués', level: 'A2' },
    ],
  },

  en: {
    lang: 'en',
    title: 'Raidel Martínez Santos — Resume',
    role: 'Backend Software Engineer · Applied AI',
    location: 'Curitiba, Brazil · Remote',
    contact,
    labels: {
      profile: 'Summary',
      experience: 'Professional experience',
      skills: 'Technical skills',
      projects: 'Personal projects',
      education: 'Education',
      languages: 'Languages',
      stack: 'Tech',
      cv: 'Resume',
    },
    profile:
      'Backend software engineer with 4+ years of experience building and running production products with **Python (FastAPI)** and **TypeScript (Next.js, NestJS)**. Focused on applied AI —RAG platforms, LLM agents and n8n automation— for healthcare SaaS, document management and support tooling. I own the full cycle: API and data design, Docker deployments, observability and incident response.',
    experience: [
      {
        role: 'Software Engineer',
        company: 'InvokeIA',
        context: 'Clinical management & AI automation SaaS',
        date: 'Nov 2025 — Present',
        location: 'Remote',
        bullets: [
          'Build and maintain a platform clinics use every day: scheduling, clinical records, invoicing, patient messaging over the **WhatsApp Business API**, AI agents and a **DICOM** viewer.',
          'Diagnose and fix production incidents quickly, keeping isolated failures from turning into service outages for clinics.',
          'Optimize critical flows in the **Python / FastAPI** event server and **n8n** workflows to improve response times.',
          'Run critical deployments and maintenance with **Docker**, coordinating changes so client operations are never interrupted.',
        ],
        stack: 'Python, FastAPI, n8n, Next.js, React, PostgreSQL, Docker',
      },
      {
        role: 'Software Engineer',
        company: 'Synapse Innovation Lab, SL',
        context: 'Product & AI consultancy',
        date: 'Oct 2024 — Nov 2025',
        location: 'Remote',
        bullets: [
          'Built the backend and AI integration of several client **RAG** platforms: Synopsia (document and audio management with semantic search and mind maps), AiFink and AJU/AjuntaTech.',
          'Built **AIssue Detector**: a **FastAPI** microservice that classifies incident reports by category, severity and team with **GPT-4.1**, with a React chat UI, image attachments and API-key protection.',
          'Reworked services to handle concurrent users, removing bottlenecks around shared resources and keeping response times stable.',
          'Added metrics, logs and alerts to catch failures and degradation in production before they reached clients.',
        ],
        stack: 'Python, FastAPI, Flask, PostgreSQL, OpenAI, RAG, React, Docker',
      },
      {
        role: 'Software Developer',
        company: 'Desoft',
        context: 'National software company',
        date: 'Sep 2024 — Jan 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Developed **Odoo 17** modules and APIs to automate business processes for enterprise clients.',
          'Designed relational and NoSQL data models, database schemas and internal tooling in an agile team.',
        ],
        stack: 'Python, Odoo 17, PostgreSQL',
      },
      {
        role: 'Software Engineer',
        company: 'Freelance',
        context: 'Custom software for clients, alongside my full-time roles',
        date: 'Aug 2022 — Present',
        location: 'Remote',
        bullets: [
          '**TopSite AI:** backend for an AI website-builder — plan- and resource-based permissions, AI page generation and editing with version history and rollback, and Sentry monitoring.',
          '**Paris System:** management system that replaced spreadsheets for a formalwear-rental store — inventory, contracts, payments and reports with RBAC and audit trail, shipped as a single Windows executable.',
          'Build chatbots, RAG and information-extraction solutions, plus full-stack apps deployed with Docker and covered by automated tests.',
        ],
        stack: 'Python, FastAPI, SQLAlchemy, PostgreSQL, OpenAI, React, Docker',
      },
    ],
    skills: [
      { title: 'Languages', items: 'Python, TypeScript, JavaScript, SQL' },
      { title: 'Backend', items: 'FastAPI, Flask, NestJS, Fastify, SQLAlchemy, Prisma, REST, WebSocket, JWT / RBAC' },
      { title: 'AI', items: 'RAG, LLM agents, OpenAI, Anthropic, Ollama, MCP, ChromaDB, vector search, n8n' },
      { title: 'Frontend', items: 'React, Next.js, React Native, Tailwind CSS' },
      { title: 'Data & infrastructure', items: 'PostgreSQL, Redis, SQLite, Docker, Nginx, GitHub Actions, Linux' },
      { title: 'Quality & workflow', items: 'pytest, Vitest, Playwright, AI-assisted development with Claude Code and Codex' },
    ],
    projects: [
      {
        name: 'Vaelgrim',
        link: 'vaelgrim.com',
        body: 'Live multiplayer RPG with an authoritative **Fastify + WebSocket** server, deterministic 20 Hz simulation, load-testing bots and Docker deployment.',
      },
      {
        name: 'Aurora',
        link: 'github.com/YoshiLoL0526/aurora',
        body: 'Desktop UI library for Python with a native **Rust** core (Skia + Taffy); powers Rec Studio, a screen recorder and editor.',
      },
      {
        name: 'Agent SDK',
        body: 'Async Python SDK for LLM agents: swappable providers (Anthropic / OpenAI / Ollama), vector memory, ReAct mode and multi-agent orchestration.',
      },
      {
        name: 'MCP Toolkit · Mnemosyne',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
        body: '**MCP** servers that give AI agents web search, a code sandbox and persistent semantic memory backed by ChromaDB.',
      },
    ],
    education: {
      title: 'B.Sc. in Computer Engineering',
      org: 'Universidad de Oriente · Santiago de Cuba',
      dates: '2021 — 2024',
      note: 'Thesis: detecting heat loss in industrial boilers from thermal images.',
    },
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'Portuguese', level: 'A2' },
    ],
  },

  pt: {
    lang: 'pt',
    title: 'Raidel Martínez Santos — Currículo',
    role: 'Engenheiro de Software Backend · IA aplicada',
    location: 'Curitiba, Brasil · Remoto',
    contact,
    labels: {
      profile: 'Resumo',
      experience: 'Experiência profissional',
      skills: 'Habilidades técnicas',
      projects: 'Projetos próprios',
      education: 'Formação',
      languages: 'Idiomas',
      stack: 'Tecnologias',
      cv: 'Currículo',
    },
    profile:
      'Engenheiro de software backend com mais de 4 anos de experiência construindo e operando produtos em produção com **Python (FastAPI)** e **TypeScript (Next.js, NestJS)**. Especializado em IA aplicada —plataformas RAG, agentes LLM e automação com n8n— para SaaS de saúde, gestão documental e suporte. Cuido de todo o ciclo: design de APIs e dados, implantação com Docker, observabilidade e resolução de incidentes.',
    experience: [
      {
        role: 'Engenheiro de Software',
        company: 'InvokeIA',
        context: 'SaaS de gestão clínica e automação com IA',
        date: 'nov 2025 — Atual',
        location: 'Remoto',
        bullets: [
          'Desenvolvo e mantenho uma plataforma usada diariamente por clínicas: agenda, prontuário, faturamento, comunicação com pacientes pela **WhatsApp Business API**, agentes de IA e visualizador **DICOM**.',
          'Diagnostico e corrijo incidentes em produção rapidamente, evitando que uma falha pontual vire uma interrupção do serviço para as clínicas.',
          'Otimizo fluxos críticos do servidor de eventos em **Python / FastAPI** e dos workflows do **n8n** para melhorar os tempos de resposta.',
          'Executo implantações e manutenções críticas com **Docker**, coordenando as mudanças para não interromper a operação dos clientes.',
        ],
        stack: 'Python, FastAPI, n8n, Next.js, React, PostgreSQL, Docker',
      },
      {
        role: 'Engenheiro de Software',
        company: 'Synapse Innovation Lab, SL',
        context: 'Consultoria de produto e IA',
        date: 'out 2024 — nov 2025',
        location: 'Remoto',
        bullets: [
          'Desenvolvi o backend e a integração de IA de várias plataformas **RAG** para clientes: Synopsia (gestão de documentos e áudio com busca semântica e mapas mentais), AiFink e AJU/AjuntaTech.',
          'Construí o **AIssue Detector**: microsserviço **FastAPI** que classifica incidentes por categoria, severidade e equipe com **GPT-4.1**, com chat em React, anexos de imagem e proteção por API key.',
          'Adaptei os serviços para suportar usuários concorrentes, eliminando gargalos no acesso a recursos compartilhados e mantendo estáveis os tempos de resposta.',
          'Adicionei métricas, logs e alertas para detectar falhas e degradação em produção antes que afetassem os clientes.',
        ],
        stack: 'Python, FastAPI, Flask, PostgreSQL, OpenAI, RAG, React, Docker',
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'Desoft',
        context: 'Empresa nacional de software',
        date: 'set 2024 — jan 2025',
        location: 'Santiago de Cuba, Cuba',
        bullets: [
          'Desenvolvi módulos e APIs em **Odoo 17** para automatizar processos de negócio de clientes corporativos.',
          'Projetei modelos de dados relacionais e NoSQL, esquemas de banco de dados e ferramentas internas em uma equipe ágil.',
        ],
        stack: 'Python, Odoo 17, PostgreSQL',
      },
      {
        role: 'Engenheiro de Software',
        company: 'Freelance',
        context: 'Projetos sob medida para clientes, em paralelo ao meu emprego',
        date: 'ago 2022 — Atual',
        location: 'Remoto',
        bullets: [
          '**TopSite AI:** backend de uma plataforma de criação de sites com IA — planos e permissões por recurso, geração e edição de páginas com histórico e rollback, e monitoramento com Sentry.',
          '**Paris System:** sistema de gestão que substituiu as planilhas de uma loja de aluguel de trajes — estoque, contratos, pagamentos e relatórios, com RBAC e auditoria, entregue como um único executável do Windows.',
          'Desenvolvo chatbots, soluções RAG e extração de informações, além de aplicações full-stack com implantação em Docker e testes automatizados.',
        ],
        stack: 'Python, FastAPI, SQLAlchemy, PostgreSQL, OpenAI, React, Docker',
      },
    ],
    skills: [
      { title: 'Linguagens', items: 'Python, TypeScript, JavaScript, SQL' },
      { title: 'Backend', items: 'FastAPI, Flask, NestJS, Fastify, SQLAlchemy, Prisma, REST, WebSocket, JWT / RBAC' },
      { title: 'IA', items: 'RAG, agentes LLM, OpenAI, Anthropic, Ollama, MCP, ChromaDB, busca vetorial, n8n' },
      { title: 'Frontend', items: 'React, Next.js, React Native, Tailwind CSS' },
      { title: 'Dados e infraestrutura', items: 'PostgreSQL, Redis, SQLite, Docker, Nginx, GitHub Actions, Linux' },
      { title: 'Qualidade e fluxo de trabalho', items: 'pytest, Vitest, Playwright, desenvolvimento assistido com Claude Code e Codex' },
    ],
    projects: [
      {
        name: 'Vaelgrim',
        link: 'vaelgrim.com',
        body: 'RPG multijogador em produção com servidor autoritativo **Fastify + WebSocket**, simulação determinística a 20 Hz, bots de carga e implantação em Docker.',
      },
      {
        name: 'Aurora',
        link: 'github.com/YoshiLoL0526/aurora',
        body: 'Biblioteca de interfaces desktop para Python com núcleo nativo em **Rust** (Skia + Taffy); base do Rec Studio, um gravador e editor de tela.',
      },
      {
        name: 'Agent SDK',
        body: 'SDK assíncrono em Python para agentes LLM: provedores intercambiáveis (Anthropic / OpenAI / Ollama), memória vetorial, modo ReAct e orquestração multiagente.',
      },
      {
        name: 'MCP Toolkit · Mnemosyne',
        link: 'github.com/YoshiLoL0526/mcp-toolkit',
        body: 'Servidores **MCP** que dão aos agentes de IA busca na web, sandbox de código e memória semântica persistente com ChromaDB.',
      },
    ],
    education: {
      title: 'Bacharelado em Engenharia da Computação',
      org: 'Universidade de Oriente · Santiago de Cuba',
      dates: '2021 — 2024',
      note: 'TCC: detecção de perdas de calor em caldeiras industriais a partir de imagens térmicas.',
    },
    languages: [
      { name: 'Espanhol', level: 'Nativo' },
      { name: 'Inglês', level: 'B2' },
      { name: 'Português', level: 'A2' },
    ],
  },
};
