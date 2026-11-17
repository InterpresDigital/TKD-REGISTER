import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { User, Trophy, LayoutDashboard, Settings, ArrowLeft, Bot, Activity } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function AppLayout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (!isDashboard) {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen bg-bg-base text-text-primary overflow-hidden selection:bg-brand-red selection:text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/8 bg-bg-surface flex flex-col justify-between">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-white/8">
            <Link to="/">
              <img 
                src="https://pub-de208707a70b434880056475d98329db.r2.dev/TKD%20REGISTER/LOGO%20BLANCO.png" 
                alt="TKDRegister Logo" 
                className="h-10 w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </Link>
          </div>
          <nav className="px-4 py-6 space-y-1.5">
            {[
              { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
              { icon: Trophy, label: "Torneos & Gráficas", href: "/dashboard/tournaments" },
              { icon: User, label: "Atletas & Pesaje", href: "/dashboard/athletes" },
              { icon: Bot, label: "Agentes IA Dojang", href: "/dashboard/ai-agents" },
              { icon: Settings, label: "Ajustes", href: "/dashboard/settings" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-brand-red/15 text-brand-red-light border border-brand-red/30 shadow-glow-red/10"
                    : "text-text-secondary hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-white/8">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la Página Principal
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Glow corner background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/10 blur-[130px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue-light/10 blur-[130px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
        
        <header className="h-20 border-b border-white/8 flex items-center justify-between px-8 relative z-10 bg-bg-base/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <h2 className="font-display font-bold text-lg text-white">Consola de Administración Deportiva</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-secondary">
              <span>Sede: Arena Central</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
              TKD
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8 relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
