import type { Locale } from "@/i18n/config";
import { legalCa } from "./ca";
import { legalEs } from "./es";

const legalPages: Record<Locale, typeof legalEs> = { es: legalEs, ca: legalCa };

export function getLegal(locale: Locale) {
  return legalPages[locale];
}
