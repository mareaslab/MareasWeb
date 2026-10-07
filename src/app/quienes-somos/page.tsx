import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos | Mareas Lab",
  description: "Conoce la Asociación Mareas: organización base juvenil e intercultural dedicada a la innovación social y digital.",
};

import { Header, AboutSection, Footer } from "@/components/Sections";

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
