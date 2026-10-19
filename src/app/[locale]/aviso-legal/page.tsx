import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/i18n/legal";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/aviso-legal", getMessages(locale).meta.pages.avisoLegal);
}

export default async function AvisoLegal({ params }: LocaleProps) {
  const locale = await getLocale(params);
  const { title, Content } = getLegal(locale).avisoLegal;

  return (
    <LegalPage locale={locale} title={title}>
      <Content />
    </LegalPage>
  );
}
