"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Target, BookOpen } from "lucide-react";

export interface MareaData {
  id: number;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  color: string;
  lightColor: string;
  detalle?: {
    enfoque: string;
    actividades: string[];
    proyectos: string[];
    comoParticipar: string;
  };
}

interface MareaModalProps {
  marea: MareaData | null;
  open: boolean;
  onClose: () => void;
}

export function MareaModal({ marea, open, onClose }: MareaModalProps) {
  if (!marea) return null;
  const IconComponent = marea.icon;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: marea.lightColor }}
            >
              <IconComponent className="h-9 w-9" style={{ color: marea.color }} />
            </div>
            <div>
              <DialogTitle className="text-2xl text-[#2C3E50]">{marea.name}</DialogTitle>
              <DialogDescription className="text-sm font-medium mt-1" style={{ color: marea.color }}>
                {marea.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Descripción */}
          <p className="text-[#6B7280] leading-relaxed">{marea.description}</p>

          {marea.detalle && (
            <>
              {/* Enfoque */}
              <div className="bg-[#F8F9FA] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5" style={{ color: marea.color }} />
                  <h3 className="font-semibold text-[#2C3E50]">Enfoque</h3>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{marea.detalle.enfoque}</p>
              </div>

              {/* Actividades */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5" style={{ color: marea.color }} />
                  <h3 className="font-semibold text-[#2C3E50]">Actividades principales</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {marea.detalle.actividades.map((act, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: marea.color }} />
                      <span className="text-sm text-[#6B7280]">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proyectos */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5" style={{ color: marea.color }} />
                  <h3 className="font-semibold text-[#2C3E50]">Proyectos destacados</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {marea.detalle.proyectos.map((proj, i) => (
                    <Badge
                      key={i}
                      className="text-white text-xs"
                      style={{ backgroundColor: marea.color }}
                    >
                      {proj}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Cómo participar */}
              <Card className="border-l-4" style={{ borderLeftColor: marea.color }}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-[#2C3E50] mb-2">¿Cómo puedes participar?</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{marea.detalle.comoParticipar}</p>
                </CardContent>
              </Card>
            </>
          )}

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1 text-white"
              style={{ backgroundColor: marea.color }}
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Quiero participar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
