import React from "react";
import { Card } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { Users, Activity, Wallet, Trophy, ArrowUpRight, Bot, Swords, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const METRICS = [
  { label: "Atletas Registrados", value: "2,450", icon: Users, change: "+14%", color: "red" as const },
  { label: "Academias / Dojangs", value: "84", icon: Trophy, change: "+6%", color: "gold" as const },
  { label: "Recaudación Total (MXN)", value: "$640,000", icon: Wallet, change: "+22%", color: "green" as const },
  { label: "Áreas / Tatamis Activos", value: "6 en vivo", icon: Activity, change: "100% óptimo", color: "blue" as const },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-2">
            <Swords className="w-3.5 h-3.5" />
            TKDRegister Command Center
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white">Panel de Control & Gráficas</h1>
          <p className="text-text-secondary mt-1 text-sm">Monitoreo de inscripciones, pesajes y gráficas de competencia en tiempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-1.5" />
            Historial de Copas
          </Button>
          <Button variant="red" size="sm">
            <Trophy className="w-4 h-4 mr-1.5" />
            Configurar Nuevo Torneo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <Card glow={idx === 0} glowColor={metric.color} className="hover:-translate-y-1 transition-transform cursor-default">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{metric.label}</p>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2">{metric.value}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-green-400 font-mono">
                <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                {metric.change}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 min-h-[420px] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <div>
              <h3 className="font-display font-bold text-lg text-white">Flujo de Combates por Área (Tatamis)</h3>
              <p className="text-xs text-text-secondary">Monitoreo de tiempos y llamados a tatami</p>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">
              6 Áreas en Tiempo Real
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {[
              { area: "Área 1", match: "Combate #14 - Senior Varonil -68kg", blue: "Carlos Méndez (Águilas)", red: "Mateo Ruiz (Dragones)", status: "En Ronda 2 (14 - 9)" },
              { area: "Área 2", match: "Combate #11 - Cadetes Femenil -44kg", blue: "Sofía Lara (Koryo)", red: "Valeria Gómez (Japón)", status: "Por Iniciar (Peto Electrónico)" },
              { area: "Área 3", match: "Poomsae - Parejas Tradicional", blue: "Equipo Jalisco", red: "Equipo Nuevo León", status: "Calificando Jueces" },
              { area: "Área 4", match: "Combate #18 - Infantil -33kg", blue: "Emiliano Soto (Elite)", red: "Santiago Cruz (Tigres)", status: "Finalizado (Ganador: Chong)" }
            ].map((ring, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-bg-surface/80 border border-white/5 flex flex-col justify-between space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-amber-400 font-mono">{ring.area}</span>
                  <span className="text-text-muted">{ring.status}</span>
                </div>
                <div className="text-xs text-white font-medium">{ring.match}</div>
                <div className="pt-2 border-t border-white/5 text-[11px] space-y-1">
                  <div className="text-blue-400 font-semibold truncate">🔵 {ring.blue}</div>
                  <div className="text-red-400 font-semibold truncate">🔴 {ring.red}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <h3 className="font-display font-bold text-lg text-white">Torneos Activos</h3>
            <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">Calendario</span>
          </div>
          <div className="space-y-3.5 flex-1">
            {[
              { n: "Copa Nacional Elite 2026", d: "15 Oct", s: "Inscripciones Abiertas", athletes: "480 Atletas" },
              { n: "Open Regional de Poomsae", d: "22 Nov", s: "En Preparación", athletes: "210 Atletas" },
              { n: "Grand Slam TKD Final", d: "10 Dic", s: "Próximamente", athletes: "Invitacional" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-bg-surface/60 border border-white/5 hover:border-white/10 transition-colors">
                <div>
                  <p className="font-bold text-sm text-white">{t.n}</p>
                  <p className="text-xs text-brand-red-light mt-0.5 font-medium">{t.s}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{t.athletes}</p>
                </div>
                <div className="text-xs text-amber-400 font-mono bg-white/5 px-2.5 py-1 rounded-lg">{t.d}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
