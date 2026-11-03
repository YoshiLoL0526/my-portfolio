import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada entrada vive en una carpeta por idioma: projects/es/mi-proyecto.md → id "es/mi-proyecto".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: image().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      color: z.enum(['pink', 'blue', 'green', 'yellow', 'purple']).default('yellow'),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    url: z.url().optional(),
    start: z.coerce.date(),
    // Sin fecha de fin = puesto actual.
    end: z.coerce.date().optional(),
    type: z.enum(['work', 'education']).default('work'),
  }),
});

export const collections = { projects, experience };
