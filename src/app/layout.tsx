import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mareas.org"),
  title: "Mareas, Lab de innovación social y digital | Transformación social y justicia",
  description: "Organización de base juvenil e intercultural que trabaja por los Derechos Humanos desde el feminismo interseccional. Investigación-acción, incidencia política y acompañamiento estratégico.",
  keywords: ["Mareas", "Justicia Social", "Derechos Humanos", "Feminismo", "Interculturalidad", "ONG", "Tercer Sector", "Economía Social"],
  authors: [{ name: "Mareas, Lab de innovación social y digital" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mareas, Lab de innovación social y digital | Transformación estructural hacia la justicia social",
    description: "Nueve corrientes de cambio que confluyen en un mismo océano de justicia social.",
    url: "https://mareas.org",
    siteName: "Mareas, Lab de innovación social y digital",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mareas, Lab de innovación social y digital",
    description: "Transformación estructural hacia la justicia social y la equidad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
