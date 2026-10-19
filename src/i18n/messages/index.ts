import type { Locale } from "@/i18n/config";
import { ca } from "./ca";
import { es, type Messages } from "./es";

const dictionaries: Record<Locale, Messages> = { es, ca };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Messages };
