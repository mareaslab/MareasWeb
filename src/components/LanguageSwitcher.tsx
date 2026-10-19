"use client";

import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { locales, localePath, stripLocale } from "@/i18n/config";
import { useLocale, useMessages } from "@/i18n/LocaleProvider";

/** Selector de idioma: enlaza a la misma página en el otro idioma. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useMessages().common;
  const basePath = stripLocale(usePathname() ?? "/");

  return (
    <nav aria-label={t.languageLabel} className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <Languages className="h-4 w-4 mr-1 opacity-70" aria-hidden="true" />
      {locales.map((target) =>
        target === locale ? (
          <span
            key={target}
            aria-current="true"
            className="px-1.5 py-0.5 border-b-2 border-current font-semibold"
          >
            {target.toUpperCase()}
          </span>
        ) : (
          <a
            key={target}
            href={localePath(target, basePath)}
            hrefLang={target}
            lang={target}
            title={t.languageNames[target]}
            aria-label={t.languageSwitchTo[target]}
            className="px-1.5 py-0.5 border-b-2 border-transparent opacity-70 hover:opacity-100 transition-opacity"
          >
            {target.toUpperCase()}
          </a>
        )
      )}
    </nav>
  );
}
