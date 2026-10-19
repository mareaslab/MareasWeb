"use client";

import { createContext, useCallback, useContext } from "react";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/es";

interface LocaleContextValue {
  locale: Locale;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("Falta <LocaleProvider> en el árbol de componentes");
  return ctx;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useMessages(): Messages {
  return useLocaleContext().messages;
}

/** Devuelve una función que añade el prefijo de idioma a las rutas internas. */
export function useLocalePath(): (path: string) => string {
  const locale = useLocale();
  return useCallback((path: string) => localePath(locale, path), [locale]);
}
