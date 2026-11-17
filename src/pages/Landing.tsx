import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import {
  Trophy,
  Users,
  Activity,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  School,
  Star,
  Monitor,
  Smartphone,
  Code2,
  Repeat,
  Link2,
  Palette,
  Heart,
  HelpCircle,
  ChevronDown,
  DollarSign,
  Bot,
  FileText,
  CreditCard,
  MessageCircle,
  Clock,
  QrCode,
  Layers,
  Sparkles,
  Award,
  IdCard,
  Calendar,
  Video
} from "lucide-react";

export default function Landing() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const FAQ_ITEMS = [
    {
      q: "¿Es una plataforma rentada o de compra definitiva?",
      a: "Operamos bajo un modelo de renta accesible por evento, pero con un gran diferenciador: la plataforma se entrega 100% personalizada con tu logotipo, colores, convocatoria y reglas. Por un costo similar al de una herramienta genérica, obtienes un sistema con tu propia identidad."
    },
    {
      q: "¿Cómo funciona la app PWA de gráficas en 45 segundos?",
      a: "Es una aplicación progresiva (PWA) ligera e instalable en tu laptop, tablet o celular. Con solo sincronizar o ingresar los IDs de los competidores pesados, el sistema genera las llaves de combate y formas en 45 segundos, evitando que atletas del mismo dojang se enfrenten en primera ronda."
    },
    {
      q: "¿Qué incluye el paquete para mi torneo?",
      a: "Incluye la página de ventas y convocatoria oficial de tu evento, el sistema de registro para profesores y atletas, el panel administrativo para llevar las cuentas e ingresos, la generación de gafetes con ID listos para imprimir y la app PWA para armado de gráficas."
    },
    {
      q: "¿Usan plantillas prefabricadas?",
      a: "No trabajamos con plantillas genéricas. Cada proyecto se estructura con código modular adaptado a las modalidades de tu torneo (combate individual, formas tradicionales o sincronizadas, TK5 y festivales infantiles)."
    },
    {
      q: "¿La plataforma puede llevar mi propio dominio web?",
      a: "Sí. Podemos hospedar la página de tu torneo en un subdominio oficial de TKDRegister o enlazarla directamente a tu propio dominio institucional (por ejemplo: torneo.tumarca.com)."
    },
    {
      q: "¿Los gafetes con ID vienen listos para imprimir?",
      a: "Sí. El sistema genera de forma automática los gafetes con ID de cada competidor, coach y staff, listos para descarga e impresión, agilizando el pesaje y el control en áreas de combate."
    },
    {
      q: "¿Cuentan con software para la gestión de escuelas (Dojangs)?",
      a: "Sí. Contamos con una plataforma SaaS/ERP para Dojangs que incluye control de alumnos, historial de grados y cinturones (Kup/Dan), asistencias, control de mensualidades e integración de Agentes de Inteligencia Artificial para atención en WhatsApp 24/7."
    },
    {
      q: "¿Se puede reutilizar la plataforma en futuras ediciones?",
      a: "Totalmente. Toda tu configuración, historial de categorías y bases de datos quedan listos para que en tu siguiente torneo solo actualices fechas, costos y abras registros en cuestión de minutos."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-brand-green selection:text-black mesh-grid relative">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[650px] bg-brand-green/12 blur-[220px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[850px] right-[-10%] w-[60vw] h-[600px] bg-brand-blue-accent/15 blur-[240px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[600px] left-[-10%] w-[55vw] h-[550px] bg-brand-green/10 blur-[220px] rounded-full pointer-events-none -z-10" />

      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
          isScrolled
            ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/LOGO%20BLANCO.png"
              alt="TKDRegister Logo"
              className={cn(
                "transition-all duration-300 w-auto object-contain",
                isScrolled ? "h-10 md:h-11" : "h-12 md:h-14"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-secondary">
            <a href="#que-incluye" className="hover:text-white transition-colors">
              Qué incluye
            </a>
            <a href="#graficas-45s" className="hover:text-white transition-colors flex items-center gap-1.5 text-brand-green-light">
              <Zap className="w-4 h-4" />
              Gráficas en 45s
            </a>
            <a href="#diferencia" className="hover:text-white transition-colors">
              Personalizada vs Genérica
            </a>
            <a href="#dojang-erp" className="hover:text-white transition-colors">
              Para Escuelas & IA
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://panel.interpresdigital.com/#/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                <Calendar className="w-4 h-4 mr-1.5" />
                Agendar Videollamada
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-28 px-4 text-center max-w-6xl mx-auto">
        {/* PWA & Custom Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-xs sm:text-sm font-bold tracking-wide uppercase text-brand-green-light mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <Smartphone className="w-4 h-4" />
          Tecnología PWA • Soluciones Digitales para Taekwondo
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white max-w-5xl mx-auto">
          La solución digital completa para tus{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-light via-emerald-300 to-teal-400">
            torneos y escuelas de Taekwondo.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-10 leading-relaxed font-normal">
          Renta una plataforma 100% personalizada con <strong className="text-white">tu propia página de ventas</strong>, <strong className="text-white">sistema de registros</strong>, <strong className="text-white">panel administrativo para llevar las cuentas</strong>, <strong className="text-white">gafetes con ID</strong> y una <strong className="text-white">app PWA para generar gráficas en 45 segundos</strong>.
        </p>

        {/* Value Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12 text-xs sm:text-sm font-semibold text-text-secondary">
          <div className="premium-card p-3.5 rounded-xl flex items-center justify-center gap-2 text-white">
            <Palette className="w-4 h-4 text-brand-green" />
            <span>Tu Marca & Convocatoria</span>
          </div>
          <div className="premium-card p-3.5 rounded-xl flex items-center justify-center gap-2 text-white">
            <Clock className="w-4 h-4 text-brand-green" />
            <span>Gráficas en 45 Segundos</span>
          </div>
          <div className="premium-card p-3.5 rounded-xl flex items-center justify-center gap-2 text-white">
            <IdCard className="w-4 h-4 text-brand-green" />
            <span>Gafetes con ID para Pesaje</span>
          </div>
          <div className="premium-card p-3.5 rounded-xl flex items-center justify-center gap-2 text-white">
            <CreditCard className="w-4 h-4 text-brand-green" />
            <span>Control de Cuentas & Pagos</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://panel.interpresdigital.com/#/book"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="xl" className="w-full sm:w-auto text-base light-beam">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Agendar una videollamada</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <a href="#que-incluye" className="w-full sm:w-auto">
            <Button variant="secondary" size="xl" className="w-full sm:w-auto text-base">
              Ver qué incluye el paquete
            </Button>
          </a>
        </div>

        {/* IMAGEN 1: Hero Showcase Principal */}
        <div className="relative max-w-5xl mx-auto text-left">
          <div className="premium-card-glow rounded-3xl p-2 sm:p-3 overflow-hidden shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/1.png"
                alt="Torneo Oficial de Taekwondo y Arena de Competición"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <span className="px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-light border border-brand-green/40 text-xs font-mono font-bold">
                    INFRAESTRUCTURA DEPORTIVA TKDREGISTER
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-white mt-1.5">
                    Tecnología diseñada para la intensidad y el prestigio de tu torneo
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Section: Everything included for your tournament (5 key pillars - SIMÉTRICAS Y UNIFORMES) */}
        <section id="que-incluye" className="relative z-10 py-24 px-4 border-t border-white/10 bg-[#080D18]/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              Ecosistema Completo para tu Evento
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 text-white">
              Todo lo que incluye la plataforma de tu torneo
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Una solución llave en mano, diseñada con tu imagen institucional y adaptada a la operación real de tu competencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Página de ventas */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  1. Página de Ventas & Convocatoria
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Landing page oficial con tu convocatoria, fechas, sede, mapa, reglamento, costos, patrocinadores y llamados a la acción para inscribirse.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Diseño con tu marca y colores oficiales</span>
              </div>
            </div>

            {/* 2. Sistema de registro */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  2. Registro & Portal de Escuelas
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Portal ágil para que profesores y academias inscriban a sus atletas por categorías oficiales de peso, edad, cinta y modalidades (Kyorugi, Poomsae, TK5).
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Validación automática de edades y grados</span>
              </div>
            </div>

            {/* 3. Panel de cuentas */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  3. Panel Administrativo & Cuentas
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Control centralizado de ingresos en tiempo real: pagos validados, montos pendientes por escuela, cortes de caja y reportes exportables.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Control financiero transparente y en vivo</span>
              </div>
            </div>

            {/* 4. Gafetes con ID */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <IdCard className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  4. Gafetes & Credenciales con ID
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Generación automática de acreditaciones para competidores, coaches y jueces con ID único para agilizar el pesaje y el acceso a los tatamis.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Listos para imprimir en alta resolución</span>
              </div>
            </div>

            {/* 5. Gráficas en 45s */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  5. App PWA de Gráficas en 45s
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Herramienta ligera e instalable. Sincroniza o ingresa los IDs de los competidores y genera las llaves de combate de inmediato con algoritmo antichoques de misma escuela.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Llaves listas en solo 45 segundos</span>
              </div>
            </div>

            {/* 6. Dominio y Branding */}
            <div className="premium-card p-8 rounded-3xl space-y-4 hover:border-brand-green/50 transition-all flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  6. Dominio & Presencia Propia
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Tu plataforma puede funcionar en un subdominio de TKDRegister o directamente enlazada bajo el dominio web de tu propio torneo o asociación.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-xs text-brand-green-light font-semibold border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Máximo prestigio y exclusividad de marca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Bloque: Registro de Escuelas & Acreditación con Gafetes (IMÁGENES 6b y 3) */}
      <section className="relative z-10 py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Bloque Izquierdo: IMAGEN 6b (Registro en Tablet) */}
            <div className="premium-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase">
                  <Users className="w-3.5 h-3.5" />
                  Experiencia para Profesores
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Inscripción Cómoda y Rápida para Academias
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Los maestros registran a sus alumnos desde su celular, tablet o computadora, seleccionando divisiones oficiales de peso, edad y cinta sin errores ni papeleos.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B111F]">
                <img
                  src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/6b.png"
                  alt="Profesor registrando atletas de Taekwondo desde tablet"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bloque Derecho: IMAGEN 3 (Gafetes con ID) */}
            <div className="premium-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase">
                  <IdCard className="w-3.5 h-3.5" />
                  Acreditación en Pesaje
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Gafetes Oficiales con ID para Atletas y Coaches
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Acreditaciones listas para imprimir con folio de identificación para validar al instante el pesaje oficial y controlar el acceso ordenado a las áreas de combate.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B111F]">
                <img
                  src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/3.png"
                  alt="Gafetes y Credenciales Oficiales de Torneo"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Gráficas en 45 Segundos Detail + IMAGEN 2 */}
      <section id="graficas-45s" className="relative z-10 py-24 px-4 border-t border-white/10 bg-[#080D18]/70">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green-light text-xs font-bold uppercase mb-4">
                <Zap className="w-3.5 h-3.5" />
                Innovación Operativa
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-6 text-white leading-tight">
                Genera las gráficas de tu torneo <br />
                <span className="text-brand-green">en solo 45 segundos.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
                El armado de gráficas tradicionalmente toma horas de desvelo, listas en hojas de cálculo y genera reclamos por cruces erróneos entre atletas de una misma academia.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                Nuestra plataforma incluye una <strong className="text-white">app PWA especializada</strong> que organiza a los competidores por su ID, valida su pesaje y arma las llaves de combate y formas en segundos.
              </p>

              <div className="space-y-3">
                {[
                  "Ingreso rápido por ID de competidor validado",
                  "Algoritmo de sembrado que evita cruces tempranos de la misma escuela",
                  "Soporte para Kyorugi individual, Formas Poomsae, TK5 y Festivales",
                  "Exportación instantánea para mesas de jueces y áreas de combate"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGEN 2: App PWA en Tablet sobre el Tatami */}
            <div className="premium-card p-4 sm:p-6 rounded-3xl border-brand-green/40 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/2.png"
                  alt="App PWA de Gráficas en Tablet sobre el Tatami"
                  className="w-full h-64 sm:h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B111F]/80 backdrop-blur-md border border-brand-green/40 text-brand-green-light font-mono text-xs font-bold">
                  ⏱️ 45s SPEED
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-text-secondary">
                <div className="p-3.5 rounded-xl bg-bg-surface border border-white/5 flex justify-between items-center">
                  <span>Tiempo promedio en armado manual:</span>
                  <span className="text-red-400 font-bold font-mono">4 a 6 horas</span>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-green/10 border border-brand-green/30 flex justify-between items-center text-white">
                  <span>Tiempo con TKDRegister PWA:</span>
                  <span className="text-brand-green font-bold font-mono text-base">45 segundos</span>
                </div>
              </div>

              <p className="text-xs text-text-muted italic">
                * Diseñada para operar sin complicaciones durante la mesa de pesaje y la inauguración de tu competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference: Plataforma Personalizada vs Renta Genérica */}
      <section id="diferencia" className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-white">
              Por el mismo precio de un sistema genérico, <br className="hidden sm:block" />
              <span className="text-brand-green">obtén una plataforma con tu propia identidad.</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              No limites el prestigio de tu torneo adaptándote a software rígido de terceros. Desarrollamos tu entorno con tu marca, tu convocatoria y tus reglas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Rentadas Genéricas */}
            <div className="premium-card p-8 sm:p-10 rounded-3xl border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-white">Plataformas de Renta Genéricas</h3>
                  <XCircle className="w-8 h-8 text-red-400/60" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Diseño genérico que promociona la marca del proveedor, no la tuya",
                    "Te tienes que adaptar a sus reglas, categorías y limitaciones fijas",
                    "No incluye una página de ventas atractiva para promocionar tu torneo",
                    "Poco o nulo soporte si tienes modalidades personalizadas (TK5, festivales)",
                    "El costo de renta es alto y no te da exclusividad de imagen"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-text-muted">
                ❌ Pagas por un sistema cerrado que no representa el prestigio de tu evento.
              </div>
            </div>

            {/* TKDRegister Personalizada */}
            <div className="premium-card-glow p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-brand-green-light">TKDRegister Personalizada</h3>
                  <ShieldCheck className="w-8 h-8 text-brand-green" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Personalizada al 100% con tu logotipo, colores oficiales y patrocinadores",
                    "Página de ventas oficial para promocionar tu torneo y atraer escuelas",
                    "Flujo y categorías adaptadas con precisión a tu convocatoria y reglamento",
                    "Generación de gafetes con ID para agilizar el pesaje y los accesos",
                    "App PWA para elaborar gráficas en solo 45 segundos sin errores"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-brand-green-light font-bold">
                ✅ Mismo rango de precio de renta, pero hecha a la medida de tu evento.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dojang ERP & AI Section (SaaS para Escuelas) + IMAGEN 4 */}
      <section id="dojang-erp" className="relative z-10 py-24 px-4 border-t border-white/10 bg-[#080D18]/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-xs font-bold uppercase text-brand-green-light mb-4">
                <School className="w-4 h-4" />
                SaaS & ERP para Escuelas de Taekwondo
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
                Plataforma de Gestión (ERP/CRM) para tu Dojang con Agentes de IA
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                Para la operación diaria de tu escuela, desarrollamos un sistema completo que automatiza el control de alumnos, grados de cinturones, mensualidades y la atención por WhatsApp mediante Inteligencia Artificial.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Kardex de Alumnos & Grados (Kup/Dan)",
                    desc: "Control de cinturones, tiempo de permanencia, asistencias registradas y elegibilidad para examen."
                  },
                  {
                    title: "Control de Mensualidades & Pagos",
                    desc: "Monitoreo de ingresos, estados de cuenta de alumnos y avisos automáticos de colegiaturas."
                  },
                  {
                    title: "Agentes de IA en WhatsApp 24/7",
                    desc: "Atención automática a padres de familia: responde dudas sobre horarios, costos de examen y uniformes."
                  }
                ].map((item, i) => (
                  <div key={i} className="premium-card p-4 rounded-xl">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGEN 4: Dojang Moderno y Gestión con IA */}
            <div className="premium-card p-4 sm:p-6 rounded-3xl space-y-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/4.png"
                  alt="Dojang y Gestión Escolar con Inteligencia Artificial"
                  className="w-full h-64 sm:h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Asistente Virtual IA en WhatsApp</h4>
                  <p className="text-xs text-text-secondary">Atiende consultas de padres 24/7</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-bg-surface text-xs text-text-muted space-y-1.5 font-mono border border-white/5">
                <p>💬 Padre: '¿Qué días entrena cinta verde infantil?'</p>
                <p className="text-brand-green font-semibold">🤖 IA: 'Lunes, Miércoles y Viernes de 5:00 a 6:15 PM.'</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience: Para ti si... (Preserved) */}
      <section className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-white">TKDRegister es para ti si…</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, text: "Organizas torneos de taekwondo y quieres una operación profesional, con gafetes y gráficas en 45s." },
              { icon: XCircle, text: "Estás cansado de rentar plataformas genéricas donde promocionas la marca de otros." },
              { icon: Palette, text: "Quieres una página de ventas oficial con tu convocatoria y tu propia identidad de marca." },
              { icon: School, text: "Diriges una academia o dojang y necesitas automatizar cobros, alumnos y atención con IA." },
              { icon: TrendingUp, text: "Buscas ahorrar horas de estrés en pesaje, inscripciones y armado manual de gráficas." },
              { icon: CreditCard, text: "Deseas tener control administrativo y financiero total con cortes de caja y cuentas claras en tiempo real." }
            ].map((item, i) => (
              <div
                key={i}
                className="premium-card p-8 rounded-2xl flex flex-col gap-4 hover:border-brand-green/40 transition-all h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-base font-medium leading-relaxed text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Do It + IMAGEN 5: Misión y Espíritu Marcial */}
      <section className="relative z-10 py-24 px-4 border-t border-white/10 bg-[#080D18]/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGEN 5: Misión y Espíritu */}
          <div className="premium-card p-4 sm:p-6 rounded-3xl border-brand-green/30 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/5b.png"
                alt="Espíritu y Respeto Marcial en Taekwondo"
                className="w-full h-56 sm:h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white italic leading-relaxed">
              "No se trata solo de digitalizar un proceso. Se trata de elevar la experiencia, el orden y la presentación del deporte."
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-brand-green" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Misión TKDRegister</span>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Nace de una <span className="text-brand-green">necesidad real</span> dentro del taekwondo
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              <p>
                TKDRegister surge de una necesidad concreta: llevar al ecosistema del taekwondo herramientas digitales más profesionales, personalizadas y funcionales, sin obligar a los organizadores y academias a adaptarse a sistemas genéricos que no responden a su realidad.
              </p>
              <p className="font-medium text-white italic border-l-2 border-brand-green pl-4 py-1">
                No trabajamos por moda tecnológica. Trabajamos para resolver los cuellos de botella operativos que frenan el crecimiento de los eventos deportivos y dojangs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 2 COLUMNS WITH ALL ORIGINAL & EXTENDED QUESTIONS */}
      <section id="faq" className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Dudas Frecuentes
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-white">Preguntas Frecuentes</h2>
            <p className="text-base text-text-secondary">Todo lo que necesitas saber sobre el desarrollo y renta personalizada de tu plataforma.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {FAQ_ITEMS.map((faq, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={cn(
                  "premium-card p-6 rounded-2xl transition-all duration-200 cursor-pointer overflow-hidden",
                  openFaq === i ? "border-brand-green/60 shadow-[0_0_20px_rgba(40,175,144,0.15)]" : "hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug">{faq.q}</h4>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-text-secondary transition-transform duration-200 flex-shrink-0",
                      openFaq === i && "rotate-180 text-brand-green"
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-4 text-sm text-text-secondary leading-relaxed pl-8"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-4 border-t border-white/10 text-center bg-[#080D18]/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-6xl font-bold mb-6 text-white leading-tight">
            Tu torneo merece una <br className="hidden sm:block" />
            <span className="text-brand-green">plataforma personalizada</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Renta una plataforma hecha a tu medida con página de ventas, gafetes con ID y app PWA para gráficas en 45 segundos por el mismo costo de una genérica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://panel.interpresdigital.com/#/book"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="xl" className="w-full sm:w-auto text-base light-beam">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Agendar videollamada para mi torneo</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#060910] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <img
            src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/LOGO%20BLANCO.png"
            alt="TKDRegister Logo"
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
            <a href="#que-incluye" className="hover:text-white transition-colors">Qué incluye</a>
            <a href="#graficas-45s" className="hover:text-white transition-colors">Gráficas 45s</a>
            <a href="#diferencia" className="hover:text-white transition-colors">Personalizada vs Genérica</a>
            <a href="#dojang-erp" className="hover:text-white transition-colors">Para Escuelas & IA</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} TKDRegister. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-2.5 text-text-secondary">
            <span className="text-xs">Un producto de</span>
            <a
              href="https://interpresdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="https://pub-de208707a70b434880056475d98329db.r2.dev/INTERPRES%20DIGITAL/PNG/24.png"
                alt="Interpres Digital Logo"
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
