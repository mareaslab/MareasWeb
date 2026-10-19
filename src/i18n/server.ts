import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export type LocaleProps = { params: Promise<{ locale: string }> };

/** Lee el idioma de la URL; si no es válido, devuelve un 404. */
export async function getLocale(params: LocaleProps["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

/** Metadatos de una página: título, descripción, canónica y enlaces hreflang entre idiomas. */
export function pageMetadata(
  locale: Locale,
  path: string,
  page: { title: string; description: string }
): Metadata {
  const meta = getMessages(locale).meta;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: localePath(locale, path),
      languages: {
        es: localePath("es", path),
        ca: localePath("ca", path),
        "x-default": localePath("es", path),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: localePath(locale, path),
      siteName: meta.site.name,
      type: "website",
      locale: meta.ogLocale,
    },
  };
}
