import { Header, ServicesSection, Footer } from "@/components/Sections";

export default function Servicios() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-[#6B2D5B] to-[#1A7F72]"></div>
      <ServicesSection />
      <Footer />
    </main>
  );
}
