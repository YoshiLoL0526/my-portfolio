// Datos personales y enlaces.
export const site = {
  name: 'Raidel',
  fullName: 'Raidel Martínez Santos',
  role: 'Software Engineer · Backend & AI Automation',
  email: 'yoshilol0526@gmail.com',
  location: 'España',
  // El CV cambia según el idioma de la página.
  cv: { es: '/cv-es.pdf', en: '/cv-en.pdf' },
  // Zona horaria que se muestra en el footer.
  timeZone: 'Europe/Madrid',
  socials: [
    { label: 'GitHub', href: 'https://github.com/YoshiLoL0526' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raidel-martínez-santos' },
  ],
  stats: { years: 4, projects: 18, languages: 3 },
  // Clave pública de https://web3forms.com. Si sigue siendo el placeholder,
  // el formulario se sustituye por un enlace de email directo.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;

// Tipos de proyecto para filtrar; sus nombres visibles están en i18n/ui.ts (category.*).
export const projectCategories = ['web', 'api', 'mobile', 'tool', 'ai', 'game'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust (basic)', 'Lua'],
  backend: [
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
  frontend: [
    'React',
    'Next.js',
    'Astro',
    'React Native',
    'Vite',
    'Tailwind CSS',
    'Zustand',
    'Radix UI',
    'Tiptap',
    'PixiJS',
  ],
  ai: ['LLM agents', 'MCP', 'RAG', 'OpenAI', 'Anthropic', 'Ollama', 'ChromaDB', 'vector search', 'n8n'],
  data: ['PostgreSQL', 'SQLite', 'ChromaDB', 'Redis'],
  infra: [
    'Docker',
    'Nginx',
    'GitHub Actions',
    'Linux',
    'PyInstaller / PyWebView',
    'pytest',
    'Vitest',
    'Playwright',
  ],
} as const;

// Resumen curado del stack para la "system card" del hero.
export const stack = {
  interface: ['React', 'Next.js', 'Astro'],
  logic: ['Python', 'FastAPI', 'NestJS'],
  data: ['PostgreSQL', 'Redis', 'ChromaDB'],
  ai: ['n8n', 'MCP', 'RAG', 'OpenAI'],
} as const;
