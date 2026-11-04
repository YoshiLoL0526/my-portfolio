import { getCollection } from 'astro:content';
import type { Lang } from '@/i18n/ui';

/** Proyectos de un idioma: orden curado, destacados y luego del más reciente al más antiguo. */
export async function getProjects(lang: Lang) {
  const projects = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort(
    (a, b) =>
      (a.data.order ?? 999) - (b.data.order ?? 999) ||
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** Todas las tecnologías usadas, ordenadas por cuántos proyectos las usan. */
export function countTags(projects: Awaited<ReturnType<typeof getProjects>>) {
  const counts = new Map<string, number>();
  for (const { data } of projects) {
    for (const tag of data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
