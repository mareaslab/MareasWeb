import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Consultoría y Formación | Mareas Lab",
  description: "Descubre nuestros servicios de consultoría estratégica, innovación digital y formación con perspectiva interseccional.",
};

import { Header, ServicesSection, Footer } from "@/components/Sections";

export default function Servicios() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <ServicesSection />
      <Footer />
    </main>
  );
}
