// Datos personales y enlaces.
export const site = {
  name: 'Raidel',
  fullName: 'Raidel Martínez Santos',
  role: 'Software Engineer · Backend & AI Automation',
  email: 'yoshilol0526@gmail.com',
  location: { es: 'Curitiba, Brasil', en: 'Curitiba, Brazil', pt: 'Curitiba, Brasil' },
  // El CV cambia según el idioma de la página. Se regeneran con `npm run cv`.
  cv: { es: '/cv-es.pdf', en: '/cv-en.pdf', pt: '/cv-pt.pdf' },
  // Zona horaria que se muestra en el footer.
  timeZone: 'America/Sao_Paulo',
  socials: [
    { label: 'GitHub', href: 'https://github.com/YoshiLoL0526' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raidel-martinez-santos' },
  ],
  // Idiomas hablados. Los años y el número de proyectos se calculan desde las colecciones.
  spokenLanguages: 3,
} as const;

// Tipos de proyecto para filtrar; sus nombres visibles están en i18n/ui.ts (category.*).
export const projectCategories = ['web', 'api', 'mobile', 'tool', 'ai', 'game'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

// Lo que no aparece en la pasarela de logos (data/tech.ts): conceptos y herramientas sin logo.
export const skills = {
  backend: ['SQL', 'REST', 'WebSocket', 'SSE', 'JWT / RBAC', 'Alembic'],
  frontend: ['React Native', 'Zustand', 'Tiptap', 'PixiJS'],
  ai: ['LLM agents', 'RAG', 'OpenAI', 'ChromaDB', 'vector search'],
  agentic: ['Agentic coding', 'Codex', 'Agent orchestration', 'Subagents', 'MCP servers', 'Agent SDK'],
  infra: ['PyInstaller / PyWebView', 'Playwright'],
} as const;

