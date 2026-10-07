"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header, Footer } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";

type Category = "Migración" | "Género" | "Tecnología" | "Todas";

interface Narrative {
  id: string;
  category: Category;
  myth: string;
  fact: string;
  source: string;
}

const narratives: Narrative[] = [
  {
    id: "1",
    category: "Migración",
    myth: "Las personas migrantes colapsan los servicios públicos y la sanidad.",
    fact: "Diversos estudios demuestran que la población migrante aporta más a las arcas públicas vía impuestos y cotizaciones sociales de lo que recibe en servicios. Además, su uso de la sanidad es menor por ser, en promedio, una población más joven.",
    source: "Informes del Banco de España y Amnistía Internacional."
  },
  {
    id: "2",
    category: "Género",
    myth: "El feminismo ya no es necesario porque existe igualdad legal.",
    fact: "La igualdad legal no se traduce automáticamente en igualdad real. Persisten la brecha salarial, la violencia machista, los techos de cristal y la feminización de la pobreza y los cuidados.",
    source: "Datos del INE y la OIT."
  },
  {
    id: "3",
    category: "Tecnología",
    myth: "Los algoritmos y la Inteligencia Artificial son neutrales y objetivos.",
    fact: "La IA aprende de datos históricos generados por humanos, reproduciendo e incluso amplificando sesgos racistas, machistas y clasistas si no se diseña con una ética de la soberanía digital.",
    source: "AlgorithmWatch y Observatorio de Algoritmos."
  },
  {
    id: "4",
    category: "Migración",
    myth: "Las vías legales y seguras provocan un 'efecto llamada'.",
    fact: "El verdadero 'efecto llamada' es la desigualdad global y los conflictos. Las vías legales reducen el tráfico de personas, evitan muertes en el mar y permiten una gestión migratoria ordenada y garantista.",
    source: "ACNUR y Comisión Española de Ayuda al Refugiado (CEAR)."
  }
];

export default function ContranarrativasPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todas");
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const filtered = activeCategory === "Todas" ? narratives : narratives.filter(n => n.category === activeCategory);

  const toggleFlip = (id: string) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-muted-foreground hover:text-foreground">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
            </a>
          </Button>
          <Badge className="mb-4 bg-primary/10 text-primary">Laboratorio de Ideas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Repositorio de Contranarrativas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Frente a los discursos de odio, desinformación y prejuicios, desde Mareas oponemos datos,
            Derechos Humanos y perspectiva interseccional. Haz clic en las tarjetas para descubrir la realidad
            detrás del mito.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {(["Todas", "Migración", "Género", "Tecnología"] as Category[]).map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={activeCategory === cat ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary/20 text-foreground hover:bg-primary/10"}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {filtered.map(item => {
            const isFlipped = flippedCards.has(item.id);
            return (
              <div 
                key={item.id} 
                className="relative h-[350px] w-full cursor-pointer group"
                onClick={() => toggleFlip(item.id)}
              >
                <motion.div
                  className="w-full h-full relative"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front - Mito */}
                  <div className="absolute inset-0 bg-card/70 backdrop-blur-md rounded-2xl p-8 border shadow-sm flex flex-col justify-center items-center text-center" style={{ backfaceVisibility: "hidden" }}>
                    <Badge className="absolute top-6 left-6 bg-secondary/10 text-secondary">{item.category}</Badge>
                    <span className="text-destructive font-bold uppercase tracking-widest text-sm mb-4">El Mito</span>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">"{item.myth}"</h3>
                    <div className="absolute bottom-6 flex items-center text-muted-foreground text-sm gap-2">
                      <RefreshCcw className="h-4 w-4" /> Haz clic para revelar
                    </div>
                  </div>

                  {/* Back - Realidad */}
                  <div className="absolute inset-0 bg-primary text-primary-foreground rounded-2xl p-8 border-transparent shadow-lg flex flex-col justify-center items-center text-center overflow-y-auto" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">La Realidad</span>
                    <p className="text-lg leading-relaxed mb-6">{item.fact}</p>
                    <span className="text-sm opacity-80 mt-auto">Fuente: {item.source}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
