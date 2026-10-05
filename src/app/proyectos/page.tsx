import { Header, ProjectsSection, Footer } from "@/components/Sections";

export default function Proyectos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-[#6B2D5B] to-[#1A7F72]"></div>
      <ProjectsSection />
      <Footer />
    </main>
  );
}
