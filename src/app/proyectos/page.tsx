import { Header, ProjectsSection, Footer } from "@/components/Sections";

export default function Proyectos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20 bg-gradient-to-r from-primary to-secondary"></div>
      <ProjectsSection />
      <Footer />
    </main>
  );
}
