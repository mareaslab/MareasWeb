import { Header, HeroSection, MareasSection, Footer } from "@/components/Sections";

export function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <MareasSection />
      <Footer />
    </main>
  );
}
