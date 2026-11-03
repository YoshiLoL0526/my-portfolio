import { languages, ui, type Lang, type UiKey } from './ui';

export const langs = Object.keys(languages) as Lang[];

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

/** Ruta con prefijo de idioma y barra final: localePath('en', 'projects/x') → /en/projects/x/ */
export function localePath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Misma página en otro idioma: /es/projects/x/ → /en/projects/x/ */
export function switchLangPath(pathname: string, target: Lang) {
  const [, , ...rest] = pathname.split('/');
  return localePath(target, rest.join('/'));
}

/** Las entradas de contenido tienen id "es/slug"; esto separa ambas partes. */
export function splitEntryId(id: string) {
  const [lang, ...slug] = id.split('/');
  return { lang: lang as Lang, slug: slug.join('/') };
}

export function formatMonth(date: Date, lang: Lang) {
  // Las fechas del frontmatter se parsean como medianoche UTC; formatear en local puede restar un día (y un mes).
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}
