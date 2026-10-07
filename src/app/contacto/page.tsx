import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Mareas Lab",
  description: "Ponte en contacto con Mareas Lab. Únete a nuestra red o solicita información sobre nuestras colaboraciones y servicios.",
};

import { Header, ContactSection, Footer } from "@/components/Sections";

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
