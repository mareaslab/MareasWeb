export const locales = ["es", "ca"] as const;
export type Locale = (typeof locales)[number];

// El castellano es el idioma por defecto y mantiene las URLs de siempre (sin prefijo).
// El catalán cuelga de /ca (ver rewrites en next.config.ts).
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Convierte una ruta interna ("/", "/contacto", "/#mareas") a la del idioma indicado. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/** Quita el prefijo de idioma de una ruta del navegador ("/ca/contacto" → "/contacto"). */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(?:ca|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}
