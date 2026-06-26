import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cctv, Network, Headset, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// --- DATOS COMERCIALES CON IMÁGENES DE ALTO IMPACTO ---
const servicios = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Ciberseguridad Proactiva",
    shortTitle: "Seguridad",
    desc: "Neutralizamos ransomware y amenazas zero-day en milisegundos antes de que paralicen su operación.",
    bullets: ["EDR/MDR Gestionado", "Cifrado Militar"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    cta: "Proteger mi red",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    icon: Cctv,
    title: "Videovigilancia IA",
    shortTitle: "Vigilancia IA",
    desc: "Cámaras que no solo graban, sino que detectan intrusos, reconocen rostros y alertan al instante.",
    bullets: ["Biometría Avanzada", "Detección Perimetral"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
    cta: "Agendar Demo",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    icon: Network,
    title: "Conectividad Crítica",
    shortTitle: "Conectividad",
    desc: "Redes redundantes de alta velocidad. Si un enlace cae, el otro entra sin que su empresa lo note.",
    bullets: ["Fibra Dedicada", "Failover Automático"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    cta: "Cotizar Enlace",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 4,
    icon: Headset,
    title: "Soporte TI 24/7",
    shortTitle: "Soporte TI",
    desc: "Deje de apagar incendios. Nuestro equipo gestiona su infraestructura para que usted se enfoque en su negocio.",
    bullets: ["Helpdesk Inmediato", "Mantenimiento Proactivo"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
    cta: "Ver Planes",
    color: "from-cyan-400 to-teal-500"
  }
];

const ServicesHook = () => {
  // Por defecto, la primera tarjeta está expandida
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="relative bg-[#020617] text-slate-50 py-20 lg:py-32 overflow-hidden font-sans">
      
      {/* Fondo sutil */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Título de Venta (Directo al dolor del cliente) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Una infraestructura <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">invulnerable.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Seleccione el área que desea potenciar y descubra cómo nuestras soluciones transforman la vulnerabilidad en su mayor fortaleza comercial.
          </p>
        </div>

        {/* CONTENEDOR ACORDEÓN EXPANSIVO */}
        {/* En móvil: vertical (h-auto), en desktop: horizontal (h-[500px]) */}
        <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[500px] gap-3 lg:gap-4">
          
          {servicios.map((servicio) => {
            const isActive = activeId === servicio.id;
            const Icon = servicio.icon;

            return (
              <motion.div
                key={servicio.id}
                layout
                onClick={() => setActiveId(servicio.id)}
                onMouseEnter={() => setActiveId(servicio.id)}
                // Animación mágica: crece la activa, encoge las demás
                animate={{
                  flex: isActive ? (typeof window !== "undefined" && window.innerWidth >= 1024 ? 5 : 4) : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer group border ${
                  isActive ? "border-cyan-500/50 shadow-2xl shadow-cyan-900/20" : "border-slate-800 hover:border-slate-600"
                }`}
              >
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={servicio.image}
                    alt={servicio.title}
                    animate={{ scale: isActive ? 1.05 : 1.2 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradiente que oscurece la imagen para que el texto sea legible */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive 
                      ? "bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent lg:bg-gradient-to-r lg:from-[#020617] lg:via-[#020617]/80 lg:to-transparent" 
                      : "bg-[#020617]/80 group-hover:bg-[#020617]/60"
                  }`} />
                </div>

                {/* CONTENIDO INTERNO */}
                <div className="relative z-10 w-full h-full flex flex-col justify-end lg:justify-between p-6">
                  
                  {/* Icono superior (siempre visible) */}
                  <div className="hidden lg:flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border transition-colors ${
                      isActive ? "bg-cyan-500/20 border-cyan-500/50" : "bg-slate-900/50 border-slate-700"
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-cyan-300"}`} />
                    </div>
                  </div>

                  {/* Título rotado para tarjetas inactivas (Solo Desktop) */}
                  {!isActive && (
                    <div className="hidden lg:flex flex-col items-center justify-end h-full pb-4">
                      <h3 className="text-slate-300 font-bold whitespace-nowrap -rotate-90 origin-bottom transform translate-y-10 text-xl tracking-wide">
                        {servicio.shortTitle}
                      </h3>
                    </div>
                  )}

                  {/* Icono + Título para tarjetas inactivas (Solo Móvil) */}
                  {!isActive && (
                    <div className="flex lg:hidden items-center gap-4 w-full h-full">
                      <Icon className="w-6 h-6 text-slate-400 shrink-0" />
                      <h3 className="text-slate-300 font-bold text-lg">{servicio.shortTitle}</h3>
                    </div>
                  )}

                  {/* Contenido expandido (Solo se muestra cuando isActive es true) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="flex flex-col justify-end lg:justify-center h-full max-w-sm lg:pt-16"
                      >
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                          {servicio.title}
                        </h3>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                          {servicio.desc}
                        </p>

                        <ul className="space-y-2 mb-8 hidden sm:block">
                          {servicio.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto">
                           {/* Usando <Link> si usas React Router, o <a> si es externo */}
                          <Link to="/contacto" className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${servicio.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-1 w-full sm:w-auto`}>
                            {servicio.cta} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesHook;