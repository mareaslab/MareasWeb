import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegal } from "@/i18n/legal";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/cookies", getMessages(locale).meta.pages.cookies);
}

export default async function Cookies({ params }: LocaleProps) {
  const locale = await getLocale(params);
  const { title, Content } = getLegal(locale).cookies;

  return (
    <LegalPage locale={locale} title={title}>
      <Content />
    </LegalPage>
  );
}
