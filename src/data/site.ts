// Datos personales y enlaces. Cambia los valores marcados con TODO.
export const site = {
  name: 'Raidel',
  role: 'Full-stack developer',
  email: 'hola@example.com', // TODO
  location: 'España', // TODO
  cv: '/cv.pdf', // TODO: coloca tu CV en public/cv.pdf
  socials: [
    { label: 'GitHub', href: 'https://github.com/' }, // TODO
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/' }, // TODO
  ],
  stats: { years: 5, projects: 20, coffee: '∞' }, // TODO
  // Clave pública de https://web3forms.com (está pensada para ir en el HTML).
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO
} as const;

// Tipos de proyecto para filtrar; sus nombres visibles están en i18n/ui.ts (category.*).
export const projectCategories = ['web', 'api', 'mobile', 'tool'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const skills = {
  frontend: ['TypeScript', 'React', 'Astro', 'Tailwind CSS', 'HTML y CSS'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'REST', 'Prisma'],
  tools: ['Git', 'Docker', 'Vite', 'Figma', 'Linux'],
} as const;
