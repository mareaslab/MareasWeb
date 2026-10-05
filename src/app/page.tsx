import { Header, HeroSection, MareasSection, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <MareasSection />
      <Footer />
    </main>
  );
}
