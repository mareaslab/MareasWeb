import type { Metadata } from "next";
import { Header, AboutSection, Footer } from "@/components/Sections";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/quienes-somos", getMessages(locale).meta.pages.quienesSomos);
}

export default function QuienesSomos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <AboutSection />
      <Footer />
    </main>
  );
}
