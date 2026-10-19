import type { Metadata } from "next";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageMetadata, type LocaleProps } from "@/i18n/server";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "/contranarrativas", getMessages(locale).meta.pages.contranarrativas);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
