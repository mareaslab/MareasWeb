import type { Metadata } from "next";
import { Header, ContactSection, Footer } from "@/components/Sections";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/contacto", getMessages(locale).meta.pages.contacto);
}

export default function Contacto() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <ContactSection />
      <Footer />
    </main>
  );
}
