"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header, Footer } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { useLocalePath, useMessages } from "@/i18n/LocaleProvider";

type Category = "all" | "migration" | "gender" | "technology";

const categories: Category[] = ["all", "migration", "gender", "technology"];

export default function ContranarrativasPage() {
  const t = useMessages().counternarratives;
  const lp = useLocalePath();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const filtered = t.items
    .map((item, id) => ({ ...item, id, category: item.category as Exclude<Category, "all"> }))
    .filter(n => activeCategory === "all" || n.category === activeCategory);

  const toggleFlip = (id: number) => {
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
            <a href={lp("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.back}
            </a>
          </Button>
          <Badge className="mb-4 bg-primary/10 text-primary">{t.badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
            {t.intro}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={activeCategory === cat ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary/20 text-foreground hover:bg-primary/10"}
                onClick={() => setActiveCategory(cat)}
              >
                {t.filters[cat]}
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
                    <Badge className="absolute top-6 left-6 bg-secondary/10 text-secondary">{t.filters[item.category]}</Badge>
                    <span className="text-destructive font-bold uppercase tracking-widest text-sm mb-4">{t.mythLabel}</span>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">"{item.myth}"</h3>
                    <div className="absolute bottom-6 flex items-center text-muted-foreground text-sm gap-2">
                      <RefreshCcw className="h-4 w-4" /> {t.reveal}
                    </div>
                  </div>

                  {/* Back - Realidad */}
                  <div className="absolute inset-0 bg-primary text-primary-foreground rounded-2xl p-8 border-transparent shadow-lg flex flex-col justify-center items-center text-center overflow-y-auto" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">{t.realityLabel}</span>
                    <p className="text-lg leading-relaxed mb-6">{item.fact}</p>
                    <span className="text-sm opacity-80 mt-auto">{t.sourceLabel}: {item.source}</span>
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
