import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { MotionProvider } from "@/components/MotionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { locales, localePath } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getLocale, type LocaleProps } from "@/i18n/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Solo existen /es (servido sin prefijo) y /ca; cualquier otro idioma es un 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { meta } = getMessages(locale);

  return {
    metadataBase: new URL("https://mareas.org"),
    title: meta.site.title,
    description: meta.site.description,
    keywords: meta.site.keywords,
    authors: [{ name: meta.site.name }],
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: meta.site.title,
      description: meta.site.ogDescription,
      url: `https://mareas.org${localePath(locale, "/")}`,
      siteName: meta.site.name,
      type: "website",
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.site.title,
      description: meta.site.twitterDescription,
    },
    verification: {
      google: "MrqJd81BXEgFjDIk_cjCYcZS4WeqKaMCxvbXGE5tA3g",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LocaleProps["params"];
}>) {
  const locale = await getLocale(params);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <LocaleProvider locale={locale} messages={getMessages(locale)}>
              {children}
              <Toaster />
            </LocaleProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
