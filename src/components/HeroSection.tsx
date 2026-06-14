import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Cctv, Network, Headset, X, CheckCircle2, Activity, ArrowRight } from "lucide-react";

// --- DATOS DE MARKETING ---
const beneficiosClave = [
  "Monitoreo SOC 24/7 Activo",
  "Protección End-to-End Multicapa",
  "Cumplimiento Normativo ISO 27001",
  "Detección de Anomalías con IA",
  "Arquitectura Zero Trust",
  "SLA de Respuesta < 15 Minutos"
];

const serviciosDetallados = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Ciberseguridad Proactiva",
    shortDesc: "Protección integral contra amenazas avanzadas y zero-day.",
    longDesc: "No espere a ser la próxima noticia. Implementamos un enfoque de defensa en profundidad que neutraliza amenazas antes de que impacten su operación.",
    features: ["Auditorías & Pentesting", "EDR/MDR Gestionado", "Prevención de Ransomware", "Cifrado Militar de Datos"],
    cta: "Solicitar Diagnóstico de Riesgo",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    icon: Cctv,
    title: "Videovigilancia IA",
    shortDesc: "Sistemas cognitivos para análisis de video en tiempo real.",
    longDesc: "Evolucione de la grabación pasiva a la prevención activa. Transformamos sus cámaras en sensores inteligentes que detectan intrusiones al instante.",
    features: ["Reconocimiento Biométrico", "Detección Perimetral por IA", "Integración SOC", "Respaldo Cloud Cifrado"],
    cta: "Agendar Demo Tecnológica",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    icon: Network,
    title: "Conectividad Crítica",
    shortDesc: "Redes SD-WAN de ultra-baja latencia y alta disponibilidad.",
    longDesc: "Garantizamos la autopista digital de su empresa. Diseñamos redes redundantes que aseguran continuidad operativa, incluso ante fallos del proveedor.",
    features: ["WiFi 6/7 Empresarial", "Fibra Óptica Dedicada", "Gestión Cloud Centralizada", "Next-Gen Firewalls (NGFW)"],
    cta: "Cotizar Infraestructura",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 4,
    icon: Headset,
    title: "Soporte TI Expert",
    shortDesc: "Mantenimiento preventivo y resolución de incidentes 24/7.",
    longDesc: "Su negocio no duerme, nuestro soporte tampoco. Ingenieros certificados actúan como una extensión directa de su equipo interno.",
    features: ["Mantenimiento Proactivo", "Helpdesk Nivel 1, 2 y 3", "Monitoreo de Nodos Viales", "Planes de Disaster Recovery"],
    cta: "Ver Planes de Soporte",
    color: "from-cyan-400 to-teal-500"
  },
];

// --- ANIMACIONES CONFIG ---
const springConfig = { type: "spring", stiffness: 250, damping: 25 };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Efecto cascada
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: springConfig }
};

const UltraPremiumHero = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Bloqueo de scroll elegante
  useEffect(() => {
    if (selectedService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <LayoutGroup>
      <section className="relative min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30">
        
        {/* --- BACKGROUND UI PREMIUM --- */}
        {/* Cuadrícula técnica sutil (Tech Grid) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)] pointer-events-none" />
        
        {/* Orbes de luz de fondo para profundidad */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40">
          
          {/* --- HEADER UX --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            {/* Indicador de "Sistema Activo" (Genera Confianza Instantánea) */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-sm text-sm mb-8 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-slate-300 font-medium tracking-wide">Centro de Operaciones <strong className="text-white">Online</strong></span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tighter mb-8 text-white drop-shadow-sm">
              Blindamos su operación, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                potenciamos su escalabilidad.
              </span>
            </h1>

            {/* Vertical Ticker Refinado */}
            <div className="h-8 overflow-hidden relative w-full max-w-lg mx-auto mb-12 flex justify-center items-center mask-image-v opacity-80">
                <motion.div 
                    className="flex flex-col gap-1 absolute top-0"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ y: { repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" } }}
                >
                    {[...beneficiosClave, ...beneficiosClave].map((item, idx) => (
                        <p key={idx} className="text-lg md:text-xl text-slate-400 font-semibold tracking-tight whitespace-nowrap flex items-center justify-center gap-2">
                            <Activity className="w-4 h-4 text-cyan-500/70" /> {item}
                        </p>
                    ))}
                </motion.div>
            </div>
          </motion.div>

          {/* --- GRID DE SERVICIOS (Con Stagger Effect) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          >
            {serviciosDetallados.map((servicio) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={servicio.id}
                  layoutId={`card-${servicio.id}`}
                  onClick={() => setSelectedService(servicio)}
                  className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-slate-600 rounded-3xl p-8 cursor-pointer overflow-hidden transition-colors duration-500 flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  {/* Gradiente luminoso interno en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <motion.div layoutId={`icon-wrap-${servicio.id}`} className="relative z-10 mb-16">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shadow-inner group-hover:border-cyan-500/50 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </motion.div>

                  <div className="relative z-10 mt-auto">
                    <motion.h3 layoutId={`title-${servicio.id}`} className="text-2xl font-bold text-slate-100 mb-3 tracking-tight">
                      {servicio.title}
                    </motion.h3>
                    <motion.p layoutId={`shortDesc-${servicio.id}`} className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors">
                      {servicio.shortDesc}
                    </motion.p>
                    
                    {/* Micro-interacción: Flecha de descubrimiento */}
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Descubrir <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* --- MODAL DE DETALLES (Diseño Elite) --- */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/60"
              />

              <motion.div
                layoutId={`card-${selectedService.id}`}
                className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-[2rem] p-8 md:p-14 overflow-y-auto shadow-2xl z-10 custom-scrollbar"
                transition={springConfig}
              >
                {/* Iluminación superior dentro del modal */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-b ${selectedService.color} opacity-[0.15] blur-3xl pointer-events-none rounded-full`} />

                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid lg:grid-cols-[1fr,340px] gap-12 lg:gap-20 relative z-10">
                    <div className="pt-4">
                        <motion.div layoutId={`icon-wrap-${selectedService.id}`} className="mb-8 inline-block">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center shadow-lg">
                                <selectedService.icon className="w-8 h-8 text-cyan-400" />
                            </div>
                        </motion.div>

                        <motion.h3 layoutId={`title-${selectedService.id}`} className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter leading-tight">
                            {selectedService.title}
                        </motion.h3>
                        
                        <motion.p layoutId={`shortDesc-${selectedService.id}`} className="text-xl text-cyan-400 font-medium mb-8">
                            {selectedService.shortDesc}
                        </motion.p>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
                            className="text-slate-300 text-lg leading-relaxed"
                        >
                            {selectedService.longDesc}
                        </motion.p>
                    </div>

                    {/* Panel lateral de Valor Agregado */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                        className="bg-slate-950/50 border border-slate-800 rounded-3xl p-8 h-fit"
                    >
                        <h4 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-6">Arquitectura de Servicio</h4>
                        <ul className="space-y-5">
                            {selectedService.features.map(feat => (
                                <li key={feat} className="flex items-start gap-4">
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="text-slate-200 font-medium text-sm md:text-base">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-slate-800">
                          <Link to="/contacto" onClick={() => setSelectedService(null)}>
                              <button className={`w-full bg-gradient-to-r ${selectedService.color} text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2`}>
                                  {selectedService.cta} <ArrowRight className="w-5 h-5" />
                              </button>
                          </Link>
                        </div>
                    </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CSS Adicional */}
        <style>{`
            .mask-image-v {
                -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            }
            /* Scrollbar elegante para el modal */
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #0f172a; 
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #334155; 
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #475569; 
            }
        `}</style>
      </section>
    </LayoutGroup>
  );
};

export default UltraPremiumHero;