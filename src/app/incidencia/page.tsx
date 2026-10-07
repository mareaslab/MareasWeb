import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incidencia y Recursos | Mareas Lab",
  description: "Recursos, investigaciones y campañas de incidencia política para la transformación social y digital.",
};

import { Header, AdvocacySection, Footer } from "@/components/Sections";

export default function Incidencia() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <AdvocacySection />
      <Footer />
    </main>
  );
}
