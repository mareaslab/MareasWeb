import type { Metadata } from "next";
import { Header, ProjectsSection, Footer } from "@/components/Sections";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/proyectos", getMessages(locale).meta.pages.proyectos);
}

export default function Proyectos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <ProjectsSection />
      <Footer />
    </main>
  );
}
