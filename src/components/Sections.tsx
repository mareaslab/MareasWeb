"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Rich } from "@/i18n/Rich";
import { stripLocale } from "@/i18n/config";
import { useLocale, useLocalePath, useMessages } from "@/i18n/LocaleProvider";
import {
  Menu,
  ArrowRight,
  Users,
  Heart,
  Globe,
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
  Instagram,
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
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

// Navigation Component
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useMessages().header;
  const lp = useLocalePath();
  const isDarkText = isScrolled || stripLocale(pathname ?? "/") !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: lp("/") },
    { label: t.nav.mareas, href: lp("/#mareas") },
    { label: t.nav.about, href: lp("/quienes-somos") },
    { label: t.nav.services, href: lp("/servicios") },
    { label: t.nav.projects, href: lp("/proyectos") },
    { label: t.nav.advocacy, href: lp("/incidencia") },
    { label: t.nav.counternarratives, href: lp("/contranarrativas") },
    { label: t.nav.contact, href: lp("/contacto") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkText
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href={lp("/")} className="flex items-center gap-2 group">
            <div className="relative">
              <Waves className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`text-xl font-bold ${isDarkText ? "text-primary" : "text-white"}`}>
              Mareas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${isDarkText ? "text-foreground" : "text-white/90"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSwitcher className={isDarkText ? "text-foreground" : "text-white"} />
            <ThemeToggle className={isDarkText ? "text-foreground" : "text-white"} />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <a href={lp("/contacto")}>
                {t.join}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher className={isDarkText ? "text-foreground" : "text-white"} />
            <ThemeToggle className={isDarkText ? "text-foreground" : "text-white"} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t.openMenu}>
                  <Menu className={`h-6 w-6 ${isDarkText ? "text-foreground" : "text-white"}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Waves className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-primary">Mareas</span>
                  </div>
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Separator className="my-4" />
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white w-full"
                  >
                    <a href={lp("/contacto")} onClick={() => setIsOpen(false)}>
                      {t.join}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const t = useMessages().hero;
  const lp = useLocalePath();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient - Even Lighter version */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary\/80 to-secondary" />

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
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-background/10 animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge className="mb-6 bg-background/20 text-white border-white/30 hover:bg-background/30 text-sm px-4 py-1">
            {t.badge}
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t.titleStart} <span className="text-secondary">{t.titleHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6B2D5B] hover:bg-white/90 text-lg px-8 py-6 border-0"
            >
              <a href={lp("/#mareas")}>
                {t.ctaMareas}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#6B2D5B] text-lg px-8 py-6"
            >
              <a href={lp("/servicios")}>
                {t.ctaConsulting}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            {t.stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 dark:text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
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

// Estilo de cada Marea (iconos y colores). Los textos viven en src/i18n/messages.
const mareaStyles = [
  { icon: GraduationCap, color: "#6B2D5B", lightColor: "#F3E5F0" },
  { icon: Heart, color: "#E74C3C", lightColor: "#FDECEA" },
  { icon: Globe, color: "#1A7F72", lightColor: "#E0F5F3" },
  { icon: Plane, color: "#4A7C59", lightColor: "#E8F0EA" },
  { icon: Rainbow, color: "#9B59B6", lightColor: "#F3E5F5" },
  { icon: Vote, color: "#34495E", lightColor: "#ECEFF1" },
  { icon: Handshake, color: "#16A085", lightColor: "#E0F2F1" },
  { icon: Cpu, color: "#2980B9", lightColor: "#E3F2FD" },
  { icon: TrendingUp, color: "#8E44AD", lightColor: "#F3E5F5" },
];

function useMareasData(): MareaData[] {
  const { items } = useMessages().mareas;
  return items.map((item, index) => ({
    id: index + 1,
    name: item.name,
    icon: mareaStyles[index].icon,
    tagline: item.tagline,
    description: item.description,
    color: mareaStyles[index].color,
    lightColor: mareaStyles[index].lightColor,
    detalle: {
      enfoque: item.focus,
      actividades: item.activities,
      proyectos: item.projects,
      comoParticipar: item.howToParticipate,
    },
  }));
}

// Mareas Grid Section
function MareasSection() {
  const t = useMessages().mareas;
  const mareasData = useMareasData();
  const [selectedMarea, setSelectedMarea] = useState<MareaData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenMarea = (marea: MareaData) => {
    setSelectedMarea(marea);
    setModalOpen(true);
  };

  return (
    <section id="mareas" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary">{t.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Mareas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mareasData.map((marea, index) => {
            const IconComponent = marea.icon;
            return (
              <FadeIn key={marea.id} delay={index * 0.1}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-background overflow-hidden cursor-pointer h-full"
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
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {marea.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium" style={{ color: marea.color }}>
                      {marea.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {marea.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0"
                      onClick={(e) => { e.stopPropagation(); handleOpenMarea(marea); }}
                    >
                      {t.learnMore}
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

const valueIcons = [Target, Heart, Globe2, Shield, Lightbulb, Users];

// About Section
function AboutSection() {
  const t = useMessages().about;

  return (
    <section id="quienes" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">{t.badge}</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <Rich text={t.p1} strongClassName="text-primary" />
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <Rich text={t.p2} strongClassName="text-secondary" />
              </p>
              <div className="flex flex-wrap gap-4">
                {t.commitments.map((commitment) => (
                  <div key={commitment} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6B2D5B] to-[#1A7F72] p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Waves className="h-24 w-24 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">{t.missionTitle}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t.mission}
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">{t.valuesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.values.map((value, index) => {
                const IconComponent = valueIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transparency Section */}
          <div className="mt-20 bg-background rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent">{t.transparency.badge}</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.transparency.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.transparency.text}
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5"
                  onClick={() => window.open("https://drive.google.com", "_blank")}>
                  <FileText className="mr-2 h-4 w-4" />
                  {t.transparency.button}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {t.transparency.stats.map((stat, index) => (
                  <div key={stat.value} className="bg-muted/30 rounded-xl p-6 text-center">
                    <p className={`text-3xl font-bold ${["text-primary", "text-secondary", "text-accent", "text-[#E74C3C]"][index]}`}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const serviceIcons = [Briefcase, Cpu, BookOpen, MessageCircle];

const partnerLogoStyles = [
  "bg-background text-primary",
  "bg-gradient-to-br from-[#1A7F72] to-[#125A50] text-white",
];

// Services Section
function ServicesSection() {
  const t = useMessages().services;
  const lp = useLocalePath();

  const scrollToContact = () => {
    window.location.href = lp("/contacto");
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto none auto 800px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <Rich text={t.intro} strongClassName="text-secondary" />
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.items.map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <Card key={index} className="border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6B2D5B] to-[#4B1D3B] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={scrollToContact}
                    >
                      {t.requestInfo}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">{t.processTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Projects */}
          <div className="mt-16 bg-gradient-to-br from-[#6B2D5B] to-[#4A1D3F] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10 blur-3xl pointer-events-none">
              <div className="w-64 h-64 bg-background rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10 blur-3xl pointer-events-none">
              <div className="w-64 h-64 bg-background rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.experience.title}</h3>
              <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                {t.experience.text}
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {t.experience.partners.map((partner, index) => (
                  <div key={partner.name} className="bg-background/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-background/15 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl shadow-inner ${partnerLogoStyles[index]}`}>
                        {partner.initial}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{partner.name}</h4>
                        <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">{partner.role}</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {partner.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const t = useMessages().projects;

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-muted/30" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto none auto 800px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.intro}
            </p>
          </div>

          <div className="grid gap-8">
            {t.items.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-[#1A7F72] to-[#125A50] md:w-1/3 p-8 text-white flex flex-col justify-between">
                    <div>
                      <Badge className="bg-background/20 text-white hover:bg-background/30 border-0 mb-4">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-white/80 dark:text-muted-foreground" />
                        <span className="text-sm font-medium">{t.statusLabel}: {project.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Handshake className="h-5 w-5 text-white/80 dark:text-muted-foreground" />
                        <span className="text-sm font-medium">{t.supportLabel}: {project.budget}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 bg-background">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          {t.whatLabel}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <Separator className="bg-gray-100" />

                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          {t.howLabel}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.details}
                        </p>
                      </div>

                      <Separator className="bg-gray-100" />

                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          {t.impactLabel}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ID de respaldo para que el formulario funcione si no está definida la variable de entorno.
// Los valores que viajan en los envíos (tipo_consulta, "Sin mensaje"...) van siempre en
// castellano porque es lo que lee la asociación al recibir el correo.
const FORMSPREE_FALLBACK_ID = "xbdzejly";

function formspreeEndpoint() {
  return `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || FORMSPREE_FALLBACK_ID}`;
}

// Advocacy Section
function AdvocacySection() {
  const t = useMessages().advocacy;
  const locale = useLocale();
  const lp = useLocalePath();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleNewsletter = async () => {
    if (!newsletterEmail.includes("@") || !newsletterConsent) return;
    setNewsletterStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          tipo_consulta: "newsletter",
          email: newsletterEmail,
          idioma: locale === "ca" ? "Català" : "Castellano",
          acepta_privacidad: `Sí (${new Date().toISOString()})`,
          _subject: "Nueva suscripción a la Newsletter"
        })
      });

      if (res.ok) {
        setNewsletterStatus("done");
        setNewsletterEmail("");
        setNewsletterConsent(false);
      } else {
        setNewsletterStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      alert(t.newsletter.connectionError);
      setNewsletterStatus("error");
    }
  };

  // El PDF solo existe en castellano
  const publicationHref = "/Soberania_Tecnologica_Mareas_2026.pdf";

  return (
    <section id="incidencia" className="py-20 md:py-32 bg-background" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto none auto 800px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Publications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {t.publicationsTitle}
              </h3>
              <div className="space-y-4">
                {t.publications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group"
                    onClick={() => window.open(publicationHref, "_blank")}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          <Badge variant="secondary" className="mr-2 text-xs">{pub.type}</Badge>
                          {pub.year}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>

            {/* Campaigns */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-secondary" />
                {t.campaignsTitle}
              </h3>
              <div className="space-y-4">
                {t.campaigns.map((campaign, index) => (
                  <Card key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer group border-l-4 border-l-[#1A7F72]"
                    onClick={() => window.location.href = lp("/contacto")}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {campaign.title}
                            </h4>
                            <Badge className="bg-secondary text-white text-xs">{t.activeBadge}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{campaign.desc}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter */}
              <Card className="mt-8 bg-gradient-to-br from-[#6B2D5B] to-[#4B1D3B] text-white border-0">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{t.newsletter.title}</h4>
                  <p className="text-white/80 text-sm mb-4">
                    {t.newsletter.text}
                  </p>
                  {newsletterStatus === "done" ? (
                    <div className="flex items-center gap-2 bg-background/10 rounded-lg p-3">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-sm text-white">{t.newsletter.success}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Input
                          placeholder={t.newsletter.emailPlaceholder}
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleNewsletter()}
                          className="bg-background/10 border-white/20 text-white placeholder:text-white/50"
                        />
                        <Button
                          className="bg-background text-primary hover:bg-background/90"
                          onClick={handleNewsletter}
                          disabled={newsletterStatus === "sending" || !newsletterEmail.includes("@") || !newsletterConsent}
                          aria-label={t.newsletter.subscribeAria}
                        >
                          {newsletterStatus === "sending" ? (
                            <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <ConsentCheckbox
                        id="consent-newsletter"
                        checked={newsletterConsent}
                        onCheckedChange={setNewsletterConsent}
                        purpose={t.newsletter.consentPurpose}
                        onDark
                      />
                      {newsletterStatus === "error" && (
                        <p className="text-red-300 text-sm mt-1">{t.newsletter.error}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Contact Section
const emptyContactForm = { name: "", email: "", interest: "", collabType: "", message: "" };

const selectClassName = "flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50";

function ContactSection() {
  const t = useMessages().contact;
  const locale = useLocale();
  const mareasData = useMareasData();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [activeTab, setActiveTab] = useState("asociarse");
  const [formData, setFormData] = useState(emptyContactForm);
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !consent) return;
    setSubmitStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          tipo_consulta: activeTab,
          nombre: formData.name,
          email: formData.email,
          idioma: locale === "ca" ? "Català" : "Castellano",
          marea_interes: formData.interest || "No especificada",
          ...(activeTab === "colaborar" && { forma_colaboracion: formData.collabType || "No especificada" }),
          mensaje: formData.message || "Sin mensaje",
          acepta_privacidad: `Sí (${new Date().toISOString()})`
        })
      });

      if (res.ok) {
        setSubmitStatus("done");
        setFormData(emptyContactForm);
        setConsent(false);
      } else {
        const err = await res.json().catch(() => ({}));
        console.error("Formspree error response:", err);
        alert(t.formspreeError + (err.error || JSON.stringify(err)));
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network or script error during submission:", error);
      alert(t.networkError);
      setSubmitStatus("error");
    }
  };

  // Restablecer el estado al cambiar de tab
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSubmitStatus("idle");
    setFormData(emptyContactForm);
    setConsent(false);
  };

  const successBlock = (title: string, text: string) => (
    <div className="flex flex-col items-center justify-center py-8 gap-3">
      <CheckCircle className="h-12 w-12 text-secondary" />
      <h3 className="font-bold text-foreground text-lg">{title}</h3>
      <p className="text-muted-foreground text-center text-sm">{text}</p>
      <Button variant="outline" className="mt-2" onClick={() => setSubmitStatus("idle")}>{t.sendAnother}</Button>
    </div>
  );

  const interestSelect = (label: string, placeholder: string) => (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">{label}</label>
      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        className={selectClassName}
      >
        <option value="">{placeholder}</option>
        {mareasData.map(marea => (
          <option key={marea.id} value={marea.name}>{marea.name}</option>
        ))}
      </select>
    </div>
  );

  const spinner = submitStatus === "sending" ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" /> : null;
  const errorMessage = submitStatus === "error" ? <p className="text-red-500 text-sm mt-2 text-center">{t.sendError}</p> : null;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto none auto 800px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{t.formTitle}</CardTitle>
                <CardDescription>
                  {t.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="asociarse">{t.tabs.join}</TabsTrigger>
                    <TabsTrigger value="servicios">{t.tabs.services}</TabsTrigger>
                    <TabsTrigger value="colaborar">{t.tabs.collaborate}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="asociarse">
                    {submitStatus === "done" ? successBlock(t.join.successTitle, t.join.successText) : (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.join.name}</label>
                          <Input name="name" value={formData.name} onChange={handleChange} placeholder={t.join.namePlaceholder} required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.join.email}</label>
                          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.join.emailPlaceholder} required />
                        </div>
                        {interestSelect(t.join.interest, t.join.interestPlaceholder)}
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.join.message}</label>
                          <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.join.messagePlaceholder} rows={3} />
                        </div>
                        <ConsentCheckbox id="consent-asociarse" checked={consent} onCheckedChange={setConsent} purpose={t.join.consentPurpose} />
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email || !consent}>
                          {spinner}
                          {t.join.submit}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        {errorMessage}
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="servicios">
                    {submitStatus === "done" ? successBlock(t.services.successTitle, t.services.successText) : (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.services.name}</label>
                          <Input name="name" value={formData.name} onChange={handleChange} placeholder={t.services.namePlaceholder} required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.services.email}</label>
                          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.services.emailPlaceholder} required />
                        </div>
                        {interestSelect(t.services.interest, t.services.interestPlaceholder)}
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.services.message}</label>
                          <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.services.messagePlaceholder} rows={3} required />
                        </div>
                        <ConsentCheckbox id="consent-servicios" checked={consent} onCheckedChange={setConsent} purpose={t.services.consentPurpose} />
                        <Button className="w-full bg-secondary hover:bg-[#157566] text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email || !formData.message || !consent}>
                          {spinner}
                          {t.services.submit}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        {errorMessage}
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="colaborar">
                    {submitStatus === "done" ? successBlock(t.collaborate.successTitle, t.collaborate.successText) : (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.collaborate.name}</label>
                          <Input name="name" value={formData.name} onChange={handleChange} placeholder={t.collaborate.namePlaceholder} required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.collaborate.email}</label>
                          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.collaborate.emailPlaceholder} required />
                        </div>
                        {interestSelect(t.collaborate.interest, t.collaborate.interestPlaceholder)}
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.collaborate.type}</label>
                          <Input name="collabType" value={formData.collabType} onChange={handleChange} placeholder={t.collaborate.typePlaceholder} />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">{t.collaborate.message}</label>
                          <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.collaborate.messagePlaceholder} rows={3} />
                        </div>
                        <ConsentCheckbox id="consent-colaborar" checked={consent} onCheckedChange={setConsent} purpose={t.collaborate.consentPurpose} />
                        <Button className="w-full bg-accent hover:bg-[#3A6C49] text-white" onClick={handleSubmit} disabled={submitStatus === "sending" || !formData.email || !consent}>
                          {spinner}
                          {t.collaborate.submit}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        {errorMessage}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">{t.info.title}</h3>
                <div className="space-y-4">

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.info.email}</p>
                      <a href="mailto:info@mareas.org" className="text-secondary hover:underline">info@mareas.org</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.info.phone}</p>
                      <a href="tel:+34611614662" className="text-accent hover:underline">+34 611 61 46 62</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.info.nif}</p>
                      <p className="text-muted-foreground">G26956961</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">{t.info.followTitle}</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/mareaslab" target="_blank" rel="noopener noreferrer" aria-label={t.info.instagramAria}>
                    <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary hover:text-white hover:border-primary">
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Legal Info */}
              <LegalInfoCard />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function LegalInfoCard() {
  const t = useMessages().contact.info;
  const lp = useLocalePath();

  return (
    <Card className="bg-muted/30 border-0">
      <CardContent className="p-6">
        <h4 className="font-bold text-foreground mb-3">{t.legalTitle}</h4>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>{t.legalName}</strong> ({t.legalNif}: G26956961)<br />
          {t.legalText}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="link" className="text-primary p-0 h-auto text-sm">
            <a href={lp("/aviso-legal")}>{t.legalNotice}</a>
          </Button>
          <span className="text-muted-foreground">•</span>
          <Button asChild variant="link" className="text-primary p-0 h-auto text-sm">
            <a href={lp("/privacidad")}>{t.privacy}</a>
          </Button>
          <span className="text-muted-foreground">•</span>
          <Button asChild variant="link" className="text-primary p-0 h-auto text-sm">
            <a href={lp("/cookies")}>{t.cookies}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Footer
function Footer() {
  const t = useMessages().footer;
  const nav = useMessages().header.nav;
  const lp = useLocalePath();

  const quickLinks = [
    { label: nav.about, href: lp("/quienes-somos") },
    { label: nav.mareas, href: lp("/#mareas") },
    { label: nav.services, href: lp("/servicios") },
    { label: nav.projects, href: lp("/proyectos") },
    { label: nav.advocacy, href: lp("/incidencia") },
    { label: nav.contact, href: lp("/contacto") }
  ];

  return (
    <footer className="bg-[#2C3E50] dark:bg-card dark:border-t text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Waves className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">Mareas</span>
            </div>
            <p className="text-white/80 dark:text-muted-foreground text-sm mb-6">
              {t.tagline}
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/mareaslab" target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria}>
                <Button variant="ghost" size="icon" className="rounded-full text-white/80 dark:text-muted-foreground hover:text-white hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 dark:text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mareas */}
          <div>
            <h4 className="font-bold mb-6">{t.mareasTitle}</h4>
            <ul className="space-y-2">
              {t.mareasLinks.map((marea, index) => (
                <li key={index}>
                  <a
                    href={lp("/#mareas")}
                    className="text-white/80 dark:text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {t.mareasPrefix} {marea}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">{t.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-white/80 dark:text-muted-foreground">

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@mareas.org" className="hover:text-white">info@mareas.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34611614662" className="hover:text-white">+34 611 61 46 62</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 flex-shrink-0" />
                <span>{t.nif}: G26956961</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-background/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>{t.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href={lp("/aviso-legal")} className="hover:text-white transition-colors">{t.legalNotice}</a>
            <a href={lp("/privacidad")} className="hover:text-white transition-colors">{t.privacy}</a>
            <a href={lp("/cookies")} className="hover:text-white transition-colors">{t.cookies}</a>
            <LanguageSwitcher className="text-white/70" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Casilla de consentimiento RGPD con la primera capa de información (art. 11 LOPDGDD)
function ConsentCheckbox({ id, checked, onCheckedChange, purpose, onDark = false }: {
  id: string,
  checked: boolean,
  onCheckedChange: (checked: boolean) => void,
  purpose: string,
  onDark?: boolean
}) {
  const t = useMessages().contact.consent;
  const lp = useLocalePath();
  const textColor = onDark ? "text-white/80" : "text-muted-foreground";
  const linkColor = onDark ? "text-white underline" : "text-primary underline";

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(value) => onCheckedChange(value === true)}
          aria-required="true"
          className={`mt-0.5 ${onDark ? "border-white/60" : ""}`}
        />
        <label htmlFor={id} className={`text-sm ${onDark ? "text-white" : "text-foreground"}`}>
          {t.label}{" "}
          <a href={lp("/privacidad")} target="_blank" className={linkColor}>{t.link}</a> *
        </label>
      </div>
      <p className={`text-xs leading-snug ${textColor}`}>
        {t.info.replace("{purpose}", purpose)}
      </p>
    </div>
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
  HeroSection,
  MareasSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  AdvocacySection,
  ContactSection,
  Footer
};
