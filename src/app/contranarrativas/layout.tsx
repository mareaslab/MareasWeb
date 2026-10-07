import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repositorio de Contranarrativas | Mareas Lab",
  description: "Desmontando discursos de odio con datos, Derechos Humanos y perspectivas feministas e interculturales.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
