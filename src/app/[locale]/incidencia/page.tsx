import type { Metadata } from "next";
import { Header, AdvocacySection, Footer } from "@/components/Sections";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/incidencia", getMessages(locale).meta.pages.incidencia);
}

export default function Incidencia() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <AdvocacySection />
      <Footer />
    </main>
  );
}
