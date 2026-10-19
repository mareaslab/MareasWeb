import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/", getMessages(locale).meta.site);
}

export default function Home() {
  return <HomePage />;
}
