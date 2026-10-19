import { Header, Footer } from "@/components/Sections";
import { LEGAL } from "@/lib/legal";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/config";

export function LegalPage({ locale, title, children }: { locale: Locale; title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <article className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-muted-foreground leading-relaxed space-y-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-sm">{getMessages(locale).common.legalUpdated}: {LEGAL.ultimaActualizacion[locale]}</p>
        {children}
      </article>
      <Footer />
    </main>
  );
}
