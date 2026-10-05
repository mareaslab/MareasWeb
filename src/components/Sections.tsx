"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { type MareaData } from "@/components/MareaModal";
// Carga dinámica del modal pesado de Mareas solo cuando se requiera (mejora de rendimiento)
const MareaModal = dynamic(() => import("@/components/MareaModal").then(mod => mod.MareaModal), {
  ssr: false,
  loading: () => null
});
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Heart,
  Globe,
  Scale,
  Sparkles,
  MessageCircle,
  Handshake,
  Cpu,
  Briefcase,
  BookOpen,
  FileText,
  Megaphone,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  ExternalLink,
  Send,
  Waves,
  Target,
  Lightbulb,
  Shield,
  GraduationCap,
  Plane,
  Rainbow,
  Vote,
  Globe2,
  Laptop,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
  Quote
} from "lucide-react";

// Navigation Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Las 9 Mareas", href: "/#mareas" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Incidencia", href: "/incidencia" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Waves className="h-8 w-8 text-[#6B2D5B] group-hover:text-[#1A7F72] transition-colors" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#1A7F72] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-[#6B2D5B]" : "text-white"}`}>
              Mareas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#1A7F72] ${isScrolled ? "text-[#2C3E50]" : "text-white/90"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#6B2D5B] hover:bg-[#4B1D3B] text-white"
            >
              <a href="/contacto">
                Únete a Mareas
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-[#2C3E50]" : "text-white"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Waves className="h-8 w-8 text-[#6B2D5B]" />
                  <span className="text-xl font-bold text-[#6B2D5B]">Mareas</span>
                </div>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#2C3E50] hover:text-[#6B2D5B] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Separator className="my-4" />
                <Button
                  asChild
                  className="bg-[#6B2D5B] hover:bg-[#4B1D3B] text-white w-full"
                >
                  <a href="/contacto" onClick={() => setIsOpen(false)}>
                    Únete a Mareas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient - Even Lighter version */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BC66A3] via-[#A34B8A] to-[#43C7B5]" />

      {/* Animated waves overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#ffffff"
            className="animate-wave"
          />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#1A7F72]/20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-1">
            Think-and-Do Tank para la justicia social
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transformación estructural hacia la{" "}
            <span className="text-[#2A9F8A]">justicia social</span> y la equidad
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Somos una organización de base juvenil e intercultural que trabaja por los Derechos Humanos
            desde el feminismo interseccional. Investigamos, incidimos y acompañamos a comunidades y
            administraciones en la construcción de una sociedad más justa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6B2D5B] hover:bg-white/90 text-lg px-8 py-6"
            >
              <a href="/#mareas">
                Conoce nuestras 9 Mareas
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href="/servicios">
                Solicita consultoría
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">9</p>
              <p className="text-white/70 text-sm">Áreas de especialización</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-white/70 text-sm">Reinversión social</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">ODS</p>
              <p className="text-white/70 text-sm">Agenda 2030</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  );
}

// Mareas Data
const mareasData: MareaData[] = [
  {
    id: 1,
    name: "Mareas Juvenil",
    icon: GraduationCap,
    tagline: "Empoderamos a las nuevas generaciones como agentes de cambio",
    description: "Investigamos las realidades de las juventudes y promovemos la participación ciudadana, con especial énfasis en juventudes migradas, exiliadas y refugiadas.",
    color: "#6B2D5B",
    lightColor: "#F3E5F0",
    detalle: {
      enfoque: "Empoderamos a las nuevas generaciones como agentes de cambio social, con énfasis en juventudes migradas, exiliadas y refugiadas.",
      actividades: ["Investigación sobre realidades juveniles", "Participación ciudadana", "Proyectos de empoderamiento", "Formaciones específicas", "Trabajo con juventud en riesgo", "Diagnósticos territoriales"],
      proyectos: ["Jóvenes en Red", "Voces Jóvenes", "Participació Jove BCN", "Youth Empowerment"],
      comoParticipar: "Puedes asociarte como miembro joven, colaborar en proyectos de investigación, participar en nuestras formaciones o sumarte como voluntario/a en actividades con juventud."
    }
  },
  {
    id: 2,
    name: "Mareas Feministas",
    icon: Heart,
    tagline: "Transversalizamos los feminismos interseccionales",
    description: "Promovemos la equidad de género real mediante investigaciones, formaciones y proyectos orientados a erradicar todas las violencias machistas.",
    color: "#E74C3C",
    lightColor: "#FDECEA",
    detalle: {
      enfoque: "Transversalizamos el feminismo interseccional en todos nuestros proyectos, luchando contra las desigualdades de género desde una perspectiva estructural.",
      actividades: ["Formaciones en perspectiva de género", "Protocolos contra violencia machista", "Investigación feminista", "Acompañamiento a víctimas", "Incidencia legislativa", "Talleres de deconstrucción"],
      proyectos: ["Marea Violeta", "Sin Violencia", "Feminismo Interseccional", "Escuela Feminista"],
      comoParticipar: "Únete como socia feminista, colabora en nuestros grupos de trabajo, asiste a nuestras formaciones especializadas o propón proyectos de investigación con perspectiva de género."
    }
  },
  {
    id: 3,
    name: "Mareas Migrantes",
    icon: Globe,
    tagline: "Construimos puentes hacia la inclusión plena",
    description: "Desarrollamos estrategias y narrativas transformadoras que combaten la discriminación estructural y garantizan la inclusión de las personas migradas.",
    color: "#1A7F72",
    lightColor: "#E0F5F3",
    detalle: {
      enfoque: "Construimos puentes hacia la inclusión plena de personas migradas, combatiendo el racismo estructural y promoviendo narrativas transformadoras.",
      actividades: ["Asesoramiento jurídico", "Narrativas antirracistas", "Acompañamiento en procesos de regularización", "Formación intercultural", "Mediación comunitaria", "Incidencia política"],
      proyectos: ["Voces Migrantes", "Narrativas Libres", "Puentes Interculturales", "Documentación Sin Fronteras"],
      comoParticipar: "Participa como mediador/a intercultural, colabora en proyectos de narrativas transformadoras, o solicita asesoramiento para tu organización sobre inclusión de personas migradas."
    }
  },
  {
    id: 4,
    name: "Mareas en Movimiento y Pau",
    icon: Plane,
    tagline: "Defendemos el derecho a moverse con dignidad",
    description: "Acompañamos en movilidad humana, asilo y refugio, e impulsamos la cultura de paz y la memoria democrática.",
    color: "#4A7C59",
    lightColor: "#E8F0EA",
    detalle: {
      enfoque: "Defendemos el derecho a moverse con dignidad, acompañando procesos de asilo y refugio, e impulsando la cultura de paz y la memoria democrática.",
      actividades: ["Acompañamiento en solicitudes de asilo", "Cultura de paz", "Memoria democrática", "Orientación a refugiados/as", "Redes de acogida", "Movilidad estudiantil"],
      proyectos: ["Refugio Seguro", "Memoria Viva", "Movilidad Digna", "Acogida y Paz"],
      comoParticipar: "Puedes ser familia de acogida, colaborar en orientación y acompañamiento a personas refugiadas, o sumarte a nuestras actividades de memoria democrática y cultura de paz."
    }
  },
  {
    id: 5,
    name: "Mareas Diversas",
    icon: Rainbow,
    tagline: "Visibilizamos y acompañamos las disidencias",
    description: "Abordamos las realidades LGTBIQA+ desde una perspectiva interseccional, con énfasis en personas migrantes del colectivo.",
    color: "#9B59B6",
    lightColor: "#F3E5F5",
    detalle: {
      enfoque: "Visibilizamos y acompañamos las disidencias sexuales y de género desde una perspectiva interseccional, con especial atención a las personas LGTBIQA+ en contexto migratorio.",
      actividades: ["Espacio seguro LGTBIQA+", "Asesoramiento específico", "Visibilización e incidencia", "Formación en diversidad", "Red de apoyo mutuo", "Proyectos artísticos"],
      proyectos: ["Arcoíris Sin Fronteras", "Diversidad Visible", "Espacio Seguro", "Orgullo Migrante"],
      comoParticipar: "Únete a nuestros espacios seguros, participa en actividades de visibilización, colabora como aliado/a en formaciones sobre diversidad o apoya nuestros proyectos de acompañamiento."
    }
  },
  {
    id: 6,
    name: "Mareas Incidencia",
    icon: Vote,
    tagline: "Transformamos leyes, políticas y sociedades",
    description: "Diseñamos estrategias de incidencia política, jurídica y ciudadana para promover cambios estructurales.",
    color: "#34495E",
    lightColor: "#ECEFF1",
    detalle: {
      enfoque: "Transformamos leyes, políticas y sociedades a través de estrategias de incidencia política, jurídica y ciudadana fundamentadas en la investigación.",
      actividades: ["Lobbying legislativo", "Litigio estratégico", "Campañas de sensibilización", "Formación en incidencia", "Alianzas estratégicas", "Informes de políticas públicas"],
      proyectos: ["Ley Migración Digna", "Incidencia ONU", "Red Parlamentaria", "Ciudadanía Activa"],
      comoParticipar: "Colabora en nuestras campañas de incidencia, forma parte de nuestro equipo jurídico voluntario, o participa en las formaciones sobre herramientas de presión democrática."
    }
  },
  {
    id: 7,
    name: "Mareas Cooperación",
    icon: Handshake,
    tagline: "Tejemos redes para la democracia participativa",
    description: "Impulsamos la cooperación internacional y la participación comunitaria con metodologías innovadoras.",
    color: "#16A085",
    lightColor: "#E0F2F1",
    detalle: {
      enfoque: "Tejemos redes de cooperación internacional y participación comunitaria para generar democracia participativa y transformación colectiva.",
      actividades: ["Proyectos de cooperación internacional", "Participación comunitaria", "Metodologías innovadoras", "Alianzas internacionales", "Intercambios culturales", "Financiación solidaria"],
      proyectos: ["Red Iberoamericana", "Coopera Local", "Democracia Participativa", "Fondos Solidarios"],
      comoParticipar: "Participa en proyectos de cooperación internacional, suma tu organización a nuestra red, o colabora en el diseño de metodologías participativas."
    }
  },
  {
    id: 8,
    name: "Mareas Lab",
    icon: Cpu,
    tagline: "Laboratorio de innovación social y digital",
    description: "Investigamos y diseñamos servicios de transformación y auditoría digital ética para la soberanía tecnológica.",
    color: "#2980B9",
    lightColor: "#E3F2FD",
    detalle: {
      enfoque: "Laboratorio de innovación social y digital que investiga y diseña soluciones tecnológicas éticas para la soberanía digital del tercer sector.",
      actividades: ["Auditorías digitales éticas", "Formación en soberanía tecnológica", "Herramientas libres y abiertas", "Data lab social", "Análisis de algoritmos", "Consultoría ética de IA"],
      proyectos: ["Mareas Data Lab", "Tech Ética", "Software Libre Social", "IA Justa"],
      comoParticipar: "Súmate como desarrollador/a voluntario/a, colabora en investigaciones de ética digital, o solicita una auditoría digital para tu organización."
    }
  },
  {
    id: 9,
    name: "Mareas Consulting",
    icon: TrendingUp,
    tagline: "Consultoría con impacto social real",
    description: "Prestamos servicios de consultoría estratégica y comunicación con perspectiva de derechos humanos.",
    color: "#8E44AD",
    lightColor: "#F3E5F5",
    detalle: {
      enfoque: "Consultoría estratégica con impacto social real, combinando la perspectiva de derechos humanos con metodologías innovadoras de gestión y comunicación.",
      actividades: ["Planificación estratégica", "Comunicación con impacto", "Evaluación de proyectos", "Desarrollo organizacional", "Formación directiva", "Gestión de alianzas"],
      proyectos: ["Estrategia 2030", "Comunicación Transformadora", "Impacto Social", "Consultoría Pro Bono"],
      comoParticipar: "Solicita una consultoría para tu organización, colabora como experto/a en alguna de nuestras áreas, o únete a nuestro equipo de consultores/as con compromiso social."
    }
  }
];

// Mareas Grid Section
function MareasSection() {
  const [selectedMarea, setSelectedMarea] = useState<MareaData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenMarea = (marea: MareaData) => {
    setSelectedMarea(marea);
    setModalOpen(true);
  };

  return (
    <section id="mareas" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#1A7F72]/10 text-[#1A7F72]">Nueve corrientes de cambio</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Las 9 Mareas
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Nueve corrientes de cambio que confluyen en un mismo océano de justicia social.
            Cada Marea es un área de especialización que trabaja de forma interconectada,
            generando sinergias y multiplicando el impacto de nuestras acciones.
          </p>
        </div>

        {/* Mareas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mareasData.map((marea, index) => {
            const IconComponent = marea.icon;
            return (
              <FadeIn key={marea.id} delay={index * 0.1}>
              <Card
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleOpenMarea(marea)}
              >
                <CardHeader className="pb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: marea.lightColor }}
                  >
                    <IconComponent className="h-7 w-7" style={{ color: marea.color }} />
                  </div>
                  <CardTitle className="text-xl text-[#2C3E50] group-hover:text-[#6B2D5B] transition-colors">
                    {marea.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium" style={{ color: marea.color }}>
                    {marea.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {marea.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-[#6B2D5B] hover:text-[#4B1D3B] hover:bg-[#6B2D5B]/5 p-0"
                    onClick={(e) => { e.stopPropagation(); handleOpenMarea(marea); }}
                  >
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <MareaModal
        marea={selectedMarea}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

// About Section
function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Justicia Social",
      description: "Trabajamos por una distribución equitativa de recursos, oportunidades y derechos para todas las personas."
    },
    {
      icon: Heart,
      title: "Feminismo Interseccional",
      description: "Reconocemos cómo el género se cruza con otras identidades para crear experiencias únicas de discriminación."
    },
    {
      icon: Globe2,
      title: "Interculturalidad",
      description: "Promovemos el diálogo y la convivencia entre culturas, construyendo puentes de comprensión mutua."
    },
    {
      icon: Shield,
      title: "Derechos Humanos",
      description: "Defendemos la dignidad inherente de todas las personas, sin distinción de ningún tipo."
    },
    {
      icon: Lightbulb,
      title: "Innovación Social",
      description: "Desarrollamos metodologías creativas para abordar los desafíos sociales complejos."
    },
    {
      icon: Users,
      title: "Participación",
      description: "Fomentamos la ciudadanía activa y el empoderamiento de las comunidades."
    }
  ];

  return (
    <section id="quienes" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <Badge className="mb-4 bg-[#6B2D5B]/10 text-[#6B2D5B]">Nuestra identidad</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              La <strong className="text-[#6B2D5B]">ASOCIACIÓN MAREAS, LAB DE INNOVACIÓN SOCIAL Y DIGITAL</strong>, es una organización de base mayoritariamente juvenil e intercultural,
              constituida como asociación sin ánimo de lucro regulada por la
              <strong className="text-[#6B2D5B]"> Ley 4/2008 de Cataluña</strong>.
            </p>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
              Nuestro modelo de trabajo se fundamenta en la
              <strong className="text-[#1A7F72]"> investigación-acción</strong>:
              investigamos las realidades sociales para diseñar intervenciones
              efectivas que generen transformación estructural. Perseguimos fines orientados a la promoción de los Derechos Humanos, la justicia social, el feminismo interseccional y la inclusión plena de las personas migradas y refugiadas, acompañando a comunidades en la construcción de una sociedad más equitativa y democrática.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#2C3E50]">
                <CheckCircle className="h-5 w-5 text-[#1A7F72]" />
                <span className="font-medium">Compromiso ODS</span>
              </div>
              <div className="flex items-center gap-2 text-[#2C3E50]">
                <CheckCircle className="h-5 w-5 text-[#1A7F72]" />
                <span className="font-medium">Agenda 2030</span>
              </div>
              <div className="flex items-center gap-2 text-[#2C3E50]">
                <CheckCircle className="h-5 w-5 text-[#1A7F72]" />
                <span className="font-medium">Transparencia</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6B2D5B] to-[#1A7F72] p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <Waves className="h-24 w-24 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-white/90 leading-relaxed">
                  La transformación estructural de la sociedad hacia la justicia social,
                  la equidad y la garantía de los Derechos Humanos, impulsando la soberanía tecnológica y el empoderamiento de colectivos en riesgo de exclusión social, con especial foco en la juventud y las mujeres migrantes.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#4A7C59]/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#1A7F72]/10 rounded-full -z-10" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#2C3E50] text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#6B2D5B]/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-[#6B2D5B]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#2C3E50] mb-2">{value.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparency Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">Compromiso</Badge>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Transparencia Institucional</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Como entidad regulada por la Ley 4/2008 de Cataluña, rendimos cuentas de cada euro
                invertido y cada impacto generado. Los ingresos de nuestros servicios de consultoría
                se reinvierten íntegramente en fines sociales.
              </p>
              <Button variant="outline" className="border-[#6B2D5B] text-[#6B2D5B] hover:bg-[#6B2D5B]/5"
                onClick={() => window.open("https://drive.google.com", "_blank")}>
                <FileText className="mr-2 h-4 w-4" />
                Ver memorias anuales
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8F9FA] rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[#6B2D5B]">100%</p>
                <p className="text-sm text-[#6B7280]">Reinversión social</p>
              </div>
              <div className="bg-[#F8F9FA] rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[#1A7F72]">Ley 4/2008</p>
                <p className="text-sm text-[#6B7280]">Régimen jurídico</p>
              </div>
              <div className="bg-[#F8F9FA] rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[#4A7C59]">ESS</p>
                <p className="text-sm text-[#6B7280]">Economía Social</p>
              </div>
              <div className="bg-[#F8F9FA] rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[#E74C3C]">5 años</p>
                <p className="text-sm text-[#6B7280]">Mandato Junta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Data
const servicesData = [
  {
    title: "Consultoría Estratégica",
    icon: Briefcase,
    description: "Evaluación de políticas públicas, diseño de proyectos sociales y acompañamiento institucional con perspectiva de derechos humanos.",
    features: ["Evaluación de impacto", "Diseño de proyectos", "Acompañamiento institucional", "Análisis de contextos"]
  },
  {
    title: "Auditoría Digital Ética",
    icon: Cpu,
    description: "Servicios de transformación y auditoría digital para reducir la brecha digital y fomentar la soberanía tecnológica.",
    features: ["Soberanía tecnológica", "Ética de datos", "Herramientas libres", "Auditorías digitales"]
  },
  {
    title: "Formación y Capacitación",
    icon: BookOpen,
    description: "Catálogo de formaciones especializadas en justicia social, feminismo interseccional, migraciones y soberanía tecnológica.",
    features: ["Formación a medida", "Recursos educativos", "Talleres prácticos", "Acompañamiento continuo"]
  },
  {
    title: "Comunicación Estratégica",
    icon: MessageCircle,
    description: "Diseño de campañas de incidencia, narrativas transformadoras y estrategia digital para organizaciones sociales.",
    features: ["Campañas de incidencia", "Narrativas transformadoras", "Estrategia digital", "Consultoría en comunicación"]
  }
];

// Services Section
function ServicesSection() {
  const scrollToContact = () => {
    window.location.href = "/contacto";
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#6B2D5B]/10 text-[#6B2D5B]">Mareas Consulting & Lab</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Servicios con Impacto Social
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Ofrecemos servicios especializados de consultoría, auditoría digital ética y formación
            para instituciones y empresas de la Economía Social y Solidaria.
            <strong className="text-[#1A7F72]"> Todos los ingresos se reinvierten en fines sociales.</strong>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border border-gray-100 hover:border-[#6B2D5B]/20 hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6B2D5B] to-[#4B1D3B] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#2C3E50]">{service.title}</CardTitle>
                  <CardDescription className="text-[#6B7280]">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <CheckCircle className="h-4 w-4 text-[#1A7F72]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-[#6B2D5B] text-[#6B2D5B] hover:bg-[#6B2D5B] hover:text-white"
                    onClick={scrollToContact}
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#2C3E50] text-center mb-12">Nuestro Proceso de Trabajo</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contacto inicial", desc: "Escuchamos tus necesidades y objetivos" },
              { step: "02", title: "Diagnóstico", desc: "Analizamos el contexto y diseñamos la estrategia" },
              { step: "03", title: "Propuesta", desc: "Presentamos un plan detallado y presupuesto" },
              { step: "04", title: "Ejecución", desc: "Implementamos y evaluamos el impacto" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6B2D5B] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-[#2C3E50] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Projects */}
        <div className="mt-16 bg-gradient-to-br from-[#6B2D5B] to-[#4A1D3F] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10 blur-3xl pointer-events-none">
            <div className="w-64 h-64 bg-white rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10 blur-3xl pointer-events-none">
            <div className="w-64 h-64 bg-white rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experiencia en Proyectos Reales</h3>
            <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Nuestra metodología de investigación y acción no se queda en la teoría. Contamos con el respaldo y la financiación de entidades clave para el impacto social.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#6B2D5B] font-black text-xl shadow-inner">
                    C
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Fondo Calala</h4>
                    <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">Financiador</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Desarrollamos proyectos respaldados y financiados por el Fondo de Mujeres Calala, fortaleciendo redes, fomentando la equidad y apoyando la acción directa de base comunitaria.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1A7F72] to-[#125A50] flex items-center justify-center text-white font-black text-xl shadow-inner">
                    R
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Proyecto Radix</h4>
                    <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">Intervención</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Participamos activamente en iniciativas transformadoras como Radix, aplicando herramientas digitales e investigación para impulsar la soberanía tecnológica y el cambio social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "«Voces en contracorriente: Escuela de Comunicación Feminista y Contranarativa para la paz»",
      category: "Comunicación Formativa e Incidencia",
      status: "En ejecución",
      budget: "10.000€",
      description: "Iniciativa de comunicación formativa y de incidencia dirigida principalmente a mujeres jóvenes migrantes en Cataluña (y nivel estatal). Parte de una premisa política clara: las mujeres migrantes jóvenes no necesitan que alguien hable por ellas; necesitan herramientas, espacios seguros y comunidad para hablar por sí mismas. Contribuye a la participación social frente al riesgo de exclusión.",
      details: "La escuela se articula en tres fases: (I) diseño metodológico participativo con una red de formadoras expertas en comunicación comunitaria, activismo y feminismos; (II) ciclo de formación híbrida sobre narrativas de género, análisis de discursos de odio, ciberfeminismo y soberanía tecnológica; (III) encuentro presencial en Barcelona con producción colaborativa de contenidos y diálogo intergeneracional.",
      impact: "Enmarcado en la Línea A5 (sensibilización, comunicación e investigación). Su objetivo es producir materiales digitales de libre acceso y crear una red activa de creadoras de contenido feministas jóvenes migrantes, actuando como intervención política frente a los discursos de odio antimigración."
    },
    {
      title: "«Proyecto Radix: Soberanía Tecnológica Comunitaria»",
      category: "Innovación Social y Digital",
      status: "Fase 2",
      budget: "Financiación Propia / Donaciones",
      description: "Programa de auditoría digital ética y transformación tecnológica para organizaciones del tercer sector y colectivos sociales.",
      details: "Acompañamos a entidades en su transición hacia herramientas de software libre, garantizando la privacidad de los datos, la ética algorítmica y la independencia frente a los monopolios tecnológicos. Realizamos talleres prácticos y auditorías personalizadas.",
      impact: "Reducción de la brecha digital y fomento de un ecosistema tecnológico justo, seguro y alineado con los derechos humanos."
    },
    {
      title: "«Jóvenes en Red: Participación Ciudadana Intercultural»",
      category: "Juventud y Derechos Humanos",
      status: "Evaluación",
      budget: "Subvenciones Locales",
      description: "Espacio de encuentro, formación y empoderamiento para juventudes diversas (migradas, exiliadas y locales) enfocado en la incidencia política.",
      details: "A través de metodologías participativas y asamblearias, los y las jóvenes identifican las problemáticas de sus entornos y diseñan campañas de sensibilización, reuniéndose con responsables políticos locales para exigir cambios tangibles en sus barrios.",
      impact: "Fortalecimiento de la participación democrática juvenil, creación de liderazgos comunitarios y fomento de la cohesión social intercultural."
    }
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#6B2D5B]/10 text-[#6B2D5B]">Nuestra acción en el territorio</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Proyectos y Actividades
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Desde la investigación hasta la acción directa, impulsamos iniciativas con impacto real 
            para promover los derechos humanos y la inclusión plena.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-[#1A7F72] to-[#125A50] md:w-1/3 p-8 text-white flex flex-col justify-between">
                  <div>
                    <Badge className="bg-white/20 text-white hover:bg-white/30 border-0 mb-4">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-white/70" />
                      <span className="text-sm font-medium">Estado: {project.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Handshake className="h-5 w-5 text-white/70" />
                      <span className="text-sm font-medium">Apoyo: {project.budget}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 bg-white">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-[#2C3E50] mb-2 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-[#6B2D5B]" />
                        ¿Qué es y para qué?
                      </h4>
                      <p className="text-[#6B7280] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <Separator className="bg-gray-100" />
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#2C3E50] mb-2 flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#6B2D5B]" />
                        ¿Cómo y con quién?
                      </h4>
                      <p className="text-[#6B7280] leading-relaxed">
                        {project.details}
                      </p>
                    </div>
                    
                    <Separator className="bg-gray-100" />

                    <div>
                      <h4 className="text-lg font-bold text-[#2C3E50] mb-2 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-[#6B2D5B]" />
                        Impacto esperado
                      </h4>
                      <p className="text-[#6B7280] leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Advocacy Section  
function AdvocacySection() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleNewsletter = async () => {
    if (!newsletterEmail.includes("@")) return;
    setNewsletterStatus("sending");

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
        : "https://formspree.io/f/xbdzejly";

      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          tipo_consulta: "newsletter",
          email: newsletterEmail,
          _subject: "Nueva suscripción a la Newsletter"
        })
      });

      if (res.ok) {
        setNewsletterStatus("done");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      alert("Error de conexión al suscribirse. Por favor, revisa tu conexión a internet.");
      setNewsletterStatus("error");
    }
  };

  const publications = [
    { title: "Guía de Soberanía Tecnológica para Organizaciones Sociales", type: "Guía", year: "2026", href: "/Soberania_Tecnologica_Mareas_2026.pdf" },
    { title: "Juventudes y Participación Política: Diagnóstico Cataluña 2024", type: "Informe", year: "2024", href: "/recursos/diagnostico-juventudes.pdf" },
    { title: "Manual de Incidencia Política con Perspectiva Feminista", type: "Manual", year: "2024", href: "/recursos/manual-incidencia.pdf" },
    { title: "Migraciones y Derechos: Narrativas Transformadoras", type: "Cuaderno", year: "2024", href: "/recursos/narrativas-migrantes.pdf" }
  ];

  const campaigns = [
    { title: "Vías Legales y Seguras", desc: "Por una migración digna y sin fronteras mortales", active: true },
    { title: "Tech Ética", desc: "Soberanía digital para el tercer sector", active: true },
    { title: "Juventudes Visibles", desc: "Amplificando voces jóvenes en políticas públicas", active: false }
  ];

  return (
    <section id="incidencia" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#1A7F72]/10 text-[#1A7F72]">Mareas Lab</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Incidencia y Recursos
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Espacio para publicaciones de investigación, guías sobre soberanía tecnológica
            y campañas de incidencia política.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Publications */}
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#6B2D5B]" />
              Publicaciones Recientes
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => window.open(pub.href, "_blank")}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#6B2D5B]/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-[#6B2D5B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#2C3E50] group-hover:text-[#6B2D5B] transition-colors line-clamp-1">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        <Badge variant="secondary" className="mr-2 text-xs">{pub.type}</Badge>
                        {pub.year}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[#6B7280] group-hover:text-[#6B2D5B] transition-colors" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 border-[#6B2D5B] text-[#6B2D5B]">
              Ver todas las publicaciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Campaigns */}
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-[#1A7F72]" />
              Campañas Activas
            </h3>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <Card key={index}
                  className={`hover:shadow-md transition-shadow cursor-pointer group ${campaign.active ? "border-l-4 border-l-[#1A7F72]" : "opacity-75"
                    }`}
                  onClick={() => window.location.href = "/contacto"}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[#2C3E50] group-hover:text-[#6B2D5B] transition-colors">
                            {campaign.title}
                          </h4>
                          {campaign.active && (
                            <Badge className="bg-[#1A7F72] text-white text-xs">Activa</Badge>
                          )}
                        </div>
                        <p className="text-sm text-[#6B7280]">{campaign.desc}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[#6B7280] group-hover:text-[#6B2D5B] transition-colors flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter */}
            <Card className="mt-8 bg-gradient-to-br from-[#6B2D5B] to-[#4B1D3B] text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Suscríbete a nuestra newsletter</h4>
                <p className="text-white/80 text-sm mb-4">
                  Recibe mensualmente novedades, recursos y convocatorias.
                </p>
                {newsletterStatus === "done" ? (
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm text-white">¡Gracias! Te hemos suscrito correctamente.</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Tu email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleNewsletter()}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Button
                        className="bg-white text-[#6B2D5B] hover:bg-white/90"
                        onClick={handleNewsletter}
                        disabled={newsletterStatus === "sending" || !newsletterEmail.includes("@")}
                      >
                        {newsletterStatus === "sending" ? (
                          <span className="animate-spin h-4 w-4 border-2 border-[#6B2D5B] border-t-transparent rounded-full" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {newsletterStatus === "error" && (
                      <p className="text-red-300 text-sm mt-1">Hubo un error al suscribirte. Inténtalo de nuevo.</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [activeTab, setActiveTab] = useState("asociarse");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.email) return;
    setSubmitStatus("sending");

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
        // URL de fallback por defecto para que no de error si la envar no está
        : "https://formspree.io/f/xbdzejly";

      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          tipo_consulta: activeTab,
          nombre: formData.name,
          email: formData.email,
          marea_interes: formData.interest || "No especificada",
          mensaje: formData.message || "Sin mensaje"
        })
      });

      if (res.ok) {
        setSubmitStatus("done");
        setFormData({ name: "", email: "", interest: "", message: "" });
      } else {
        const err = await res.json().catch(() => ({}));
        console.error("Formspree error response:", err);
        alert("🚨 Error de Formspree: " + (err.error || JSON.stringify(err)));
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network or script error during submission:", error);
      alert("🚨 Error de red o del navegador. Por favor, inténtalo de nuevo o contacta directamente por email: info@mareas.org");
      setSubmitStatus("error");
    }
  };

  // Restablecer el estado al cambiar de tab
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSubmitStatus("idle");
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#6B2D5B]/10 text-[#6B2D5B]">Únete al cambio</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            El cambio empieza cuando decides ser parte de él
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Sea cual sea tu origen, tu edad o tu historia, hay un lugar para ti en Mareas.
            Asóciate, colabora, solicita nuestros servicios o simplemente mantente informado/a.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C3E50]">Contacta con nosotras</CardTitle>
              <CardDescription>
                Cuéntanos cómo te gustaría participar o qué servicios necesitas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="asociarse">Asociarme</TabsTrigger>
                  <TabsTrigger value="servicios">Servicios</TabsTrigger>
                  <TabsTrigger value="colaborar">Colaborar</TabsTrigger>
                </TabsList>
                <TabsContent value="asociarse">
                  {submitStatus === "done" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <CheckCircle className="h-12 w-12 text-[#1A7F72]" />
                      <h3 className="font-bold text-[#2C3E50] text-lg">¡Solicitud recibida!</h3>
                      <p className="text-[#6B7280] text-center text-sm">Nos pondremos en contacto contigo en los próximos días. ¡Gracias por querer unirte a Mareas!</p>
                      <Button variant="outline" className="mt-2" onClick={() => setSubmitStatus("idle")}>Enviar otra</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Nombre completo *</label>
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Email *</label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">¿Qué Marea te interesa más?</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona una Marea (Opcional)</option>
                          {mareasData.map(marea => (
                            <option key={marea.id} value={marea.name}>{marea.name}</option>
                          ))}
                        </select>
                      </div>
                      <Button className="w-full bg-[#6B2D5B] hover:bg-[#4B1D3B] text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email}>
                        {submitStatus === "sending" ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" /> : null}
                        Quiero asociarme
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {submitStatus === "error" && <p className="text-red-500 text-sm mt-2 text-center">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="servicios">
                  {submitStatus === "done" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <CheckCircle className="h-12 w-12 text-[#1A7F72]" />
                      <h3 className="font-bold text-[#2C3E50] text-lg">¡Solicitud recibida!</h3>
                      <p className="text-[#6B7280] text-center text-sm">Nos pondremos en contacto con tu organización en breve. ¡Gracias por confiar en Mareas!</p>
                      <Button variant="outline" className="mt-2" onClick={() => setSubmitStatus("idle")}>Enviar otra</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Organización *</label>
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre de tu organización" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Email profesional *</label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="contacto@organizacion.org" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Área de Consultoría / Marea</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona un área de interés</option>
                          {mareasData.map(marea => (
                            <option key={marea.id} value={marea.name}>{marea.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Mensaje *</label>
                        <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos más sobre tu proyecto o necesidades..." rows={3} required />
                      </div>
                      <Button className="w-full bg-[#1A7F72] hover:bg-[#157566] text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email || !formData.message}>
                        {submitStatus === "sending" ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" /> : null}
                        Solicitar información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {submitStatus === "error" && <p className="text-red-500 text-sm mt-2 text-center">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="colaborar">
                  {submitStatus === "done" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <CheckCircle className="h-12 w-12 text-[#1A7F72]" />
                      <h3 className="font-bold text-[#2C3E50] text-lg">¡Gracias por tu interés!</h3>
                      <p className="text-[#6B7280] text-center text-sm">Nos pondremos en contacto contigo pronto para explorar cómo colaborar juntos.</p>
                      <Button variant="outline" className="mt-2" onClick={() => setSubmitStatus("idle")}>Enviar otra</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Nombre completo *</label>
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Email *</label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">¿Con qué Marea te gustaría colaborar?</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona una Marea (Opcional)</option>
                          {mareasData.map(marea => (
                            <option key={marea.id} value={marea.name}>{marea.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#2C3E50] mb-2 block">Forma de colaboración</label>
                        <Input name="message" value={formData.message} onChange={handleChange} placeholder="Donación, Alianza, Voluntariado..." />
                      </div>
                      <Button className="w-full bg-[#4A7C59] hover:bg-[#3A6C49] text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email}>
                        {submitStatus === "sending" ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" /> : null}
                        Quiero colaborar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {submitStatus === "error" && <p className="text-red-500 text-sm mt-2 text-center">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#6B2D5B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#6B2D5B]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C3E50]">Dirección</p>
                    <p className="text-[#6B7280]">Carrer de Tarragona 8, 2,3ºG. 43840 Salou, Tarragona, Cataluña, España</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A7F72]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#1A7F72]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C3E50]">Email</p>
                    <a href="mailto:info@mareas.org" className="text-[#1A7F72] hover:underline">info@mareas.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4A7C59]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#4A7C59]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C3E50]">Teléfono</p>
                    <a href="tel:+34611614662" className="text-[#4A7C59] hover:underline">+34 611 61 46 62</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-4">Síguenos</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mareaslab" },
                  { icon: Twitter, label: "Twitter", href: "https://www.twitter.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
                  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar nuestro perfil en ${social.label}`}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#6B2D5B]/20 hover:bg-[#6B2D5B] hover:text-white hover:border-[#6B2D5B]"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal Info */}
            <Card className="bg-[#F8F9FA] border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#2C3E50] mb-3">Régimen Jurídico</h4>
                <p className="text-sm text-[#6B7280] mb-4">
                  <strong>Mareas, Lab de innovación social y digital</strong> (NIF: G26956961)<br />
                  Asociación regulada por la Ley 4/2008, de 24 de abril, del libro tercero del
                  Código civil de Cataluña, relativo a las personas jurídicas, y la Ley Orgánica
                  1/2002, de 22 de marzo, reguladora del derecho de asociación. Inscrita en el Registre d'Associacions de la Generalitat de Catalunya (secció 1ª, resolució 23/7/26) con número de inscripción: 80169.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="link" className="text-[#6B2D5B] p-0 h-auto text-sm">
                    Aviso Legal
                  </Button>
                  <span className="text-[#6B7280]">•</span>
                  <Button variant="link" className="text-[#6B2D5B] p-0 h-auto text-sm">
                    Privacidad
                  </Button>
                  <span className="text-[#6B7280]">•</span>
                  <Button variant="link" className="text-[#6B2D5B] p-0 h-auto text-sm">
                    Cookies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const quickLinks = [
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Las 9 Mareas", href: "/#mareas" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Incidencia", href: "/incidencia" },
    { label: "Contacto", href: "/contacto" }
  ];

  const mareasLinks = [
    "Juvenil", "Feministas", "Migrantes", "Pau", "Diversas", "Incidencia", "Cooperación", "Lab", "Consulting"
  ];

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Waves className="h-8 w-8 text-[#1A7F72]" />
              <span className="text-xl font-bold">Mareas</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Transformación estructural hacia la justicia social y la equidad.
              Think-and-do tank por los Derechos Humanos.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mareaslab" },
                { icon: Twitter, label: "Twitter", href: "https://www.twitter.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar nuestro perfil en ${social.label}`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white/70 hover:text-white hover:bg-white/10"
                    >
                      <IconComponent className="h-5 w-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mareas */}
          <div>
            <h4 className="font-bold mb-6">Las 9 Mareas</h4>
            <ul className="space-y-2">
              {mareasLinks.map((marea, index) => (
                <li key={index}>
                  <a
                    href="/#mareas"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Mareas {marea}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Carrer de Tarragona 8, 2,3ºG. 43840 Salou, Tarragona, Cataluña, España</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@mareas.org" className="hover:text-white">info@mareas.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34611614662" className="hover:text-white">+34 611 61 46 62</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2026 Mareas, Lab de innovación social y digital (NIF: G26956961). Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Animación de aparición al hacer scroll
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export {
  Header,
  HeroSection,
  MareasSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  AdvocacySection,
  ContactSection,
  Footer
};
