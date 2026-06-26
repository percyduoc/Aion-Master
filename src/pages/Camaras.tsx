import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Database, 
  ServerCrash, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// --- DATOS INTERACTIVOS ---
const casosDeUso = [
  {
    id: "ransomware",
    icon: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />,
    tabTitle: "Ransomware",
    title: "Neutralización de Secuestro de Datos",
    desc: "El 70% de las empresas que sufren ransomware quiebran en menos de un año. Aislamos la amenaza en milisegundos y recuperamos su operatividad.",
    beneficios: ["Bloqueo automático de encriptación", "Recuperación de respaldos", "Expulsión del atacante"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fuga",
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    tabTitle: "Fuga de Datos",
    title: "Blindaje de Información Confidencial",
    desc: "Evite multas millonarias y pérdida de confianza. Auditamos sus bases de datos y establecemos políticas estrictas de Cero Confianza (Zero Trust).",
    beneficios: ["Prevención de robo interno", "Encriptación de extremo a extremo", "Cumplimiento legal"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "downtime",
    icon: <ServerCrash className="w-5 h-5 sm:w-6 sm:h-6" />,
    tabTitle: "Caída de Sistema",
    title: "Continuidad Operativa 24/7",
    desc: "Cada minuto que su sistema está caído, su empresa pierde dinero. Monitoreamos y fortificamos su red para garantizar máxima disponibilidad.",
    beneficios: ["Defensa contra ataques DDoS", "Monitoreo en tiempo real", "Arquitectura resiliente"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  }
];

const CyberSecurityAnimated = () => {
  // Manejamos el índice numérico para facilitar el cálculo de "Siguiente" o "Anterior"
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = casosDeUso[activeIndex];

  // Función para detectar el deslizamiento (Swipe)
  const handleDragEnd = (event, info) => {
    const umbralSwipe = 50; // Píxeles necesarios para cambiar de tarjeta
    
    if (info.offset.x < -umbralSwipe && activeIndex < casosDeUso.length - 1) {
      // Deslizó hacia la izquierda -> Siguiente
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > umbralSwipe && activeIndex > 0) {
      // Deslizó hacia la derecha -> Anterior
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="relative bg-[#020617] text-slate-50 py-16 md:py-24 overflow-hidden font-sans">
      
      <div className="absolute top-0 right-0 w-full md:w-[600px] h-[400px] md:h-[600px] bg-blue-700/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-[500px] h-[400px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
            Anticípese al <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Peligro</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg px-2">
            Deslice para descubrir cómo nuestra ingeniería resuelve los riesgos críticos antes de que impacten su empresa.
          </p>
        </div>

        {/* Controles de Pestañas (Se sincronizan con el deslizamiento) */}
        <div className="flex overflow-x-auto pb-4 mb-8 md:mb-12 snap-x snap-mandatory gap-3 sm:gap-4 sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full px-2 sm:px-0">
          {casosDeUso.map((caso, index) => (
            <button
              key={caso.id}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap shrink-0 snap-center flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 border ${
                activeIndex === index
                  ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {caso.icon}
              {caso.tabTitle}
            </button>
          ))}
        </div>

        {/* Panel Interactivo de Contenido (Swipeable) */}
        <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex items-center shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing">
          
          {/* Indicadores de Swipe (Solo móviles) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-30 md:hidden opacity-30">
            {activeIndex > 0 && <ChevronLeft className="w-8 h-8 text-cyan-400 animate-pulse" />}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-30 md:hidden opacity-30">
            {activeIndex < casosDeUso.length - 1 && <ChevronRight className="w-8 h-8 text-cyan-400 animate-pulse" />}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              drag="x" // Permite arrastrar horizontalmente
              dragConstraints={{ left: 0, right: 0 }} // Devuelve la tarjeta a su lugar tras soltarla
              dragElastic={0.2} // Dureza del rebote
              onDragEnd={handleDragEnd} // Lógica para cambiar la tarjeta
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full touch-pan-y"
            >
              
              {/* Imagen Responsiva */}
              <div className="order-1 lg:order-2 relative w-full h-[220px] sm:h-[300px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-700/50 shadow-inner group pointer-events-none">
                <div className="absolute inset-0 bg-cyan-900/30 mix-blend-overlay z-10" />
                
                {/* Efecto Escáner Láser Animado */}
                <motion.div
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] z-30 opacity-70"
                />

                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] lg:from-[#020617]/50 via-transparent to-transparent z-20" />
              </div>

              {/* Texto de la Solución */}
              <div className="order-2 lg:order-1 w-full pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-500/20">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Solución Activa
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {activeTab.title}
                </h3>
                
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {activeTab.desc}
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {activeTab.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-start sm:items-center gap-3 text-slate-300 text-sm sm:text-base font-medium leading-snug">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                      {beneficio}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/56947153763"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex sm:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
                >
                  Proteger mi negocio ahora
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Paginación de Puntos (Dots) Inferior para Móviles */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
            {casosDeUso.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CyberSecurityAnimated;