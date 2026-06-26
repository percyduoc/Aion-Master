import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Zap, Clock } from "lucide-react";

// --- Animaciones Orquestadas ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 25 } }
};

const BannerContratacion = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-[#020617] text-slate-50 font-sans">
      
      {/* --- BACKGROUND UI PREMIUM --- */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent_0%,white_50%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-cyan-600/20 blur-[120px] md:blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] bg-blue-700/20 blur-[120px] md:blur-[150px] mix-blend-screen pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 shadow-[0_0_50px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-inner-[inset_0_1px_0_rgba(255,255,255,0.1)]"
      >
        {/* --- MITAD IZQUIERDA: Copywriting de Alta Conversión --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            {/* Badge Táctil */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-bold tracking-wide mb-6 sm:mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="uppercase tracking-wider">Despliegue Inmediato</span>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight">
              Asegure su empresa antes de que sea
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                {" "}demasiado tarde.
              </span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Deje su infraestructura en manos de expertos. Diseñamos, instalamos y monitoreamos soluciones de nivel corporativo para que usted se enfoque en hacer crecer su negocio.
            </motion.p>

            {/* Viñetas Optimizadas para lectura rápida en móvil */}
            <motion.ul variants={itemVariants} className="space-y-4 mb-10 sm:mb-12">
              {[
                "Inspección técnica gratuita y sin compromiso.",
                "Cotización formal en menos de 24 horas.",
                "Soporte directo 24/7 post-instalación."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* --- ZONA DE BOTONES TÁCTILES (Mobile First) --- */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
              
              {/* Botón Principal: WhatsApp (Gigante en móvil, con active:scale para feedback táctil) */}
              <a
                href="https://wa.me/56947153763"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-4 sm:py-4 rounded-2xl sm:rounded-xl font-bold text-[15px] sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] transition-all duration-300 select-none touch-manipulation"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Cotizar por WhatsApp
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block" />
              </a>

              {/* Botón Secundario: Llamada Telefónica (Tarjeta clickeable en móvil) */}
              <a 
                href="tel:+56947153763" 
                className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 sm:gap-4 p-3 sm:p-0 rounded-2xl bg-slate-800/50 sm:bg-transparent border border-slate-700 sm:border-none active:bg-slate-800 sm:active:bg-transparent active:scale-[0.98] sm:active:scale-100 transition-all group touch-manipulation"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-all duration-300">
                  <PhoneCall className="w-5 h-5 text-cyan-400 group-active:text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                      Llamar a un experto
                    </p>
                  </div>
                  <span className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                    +56 9 4715 3763
                  </span>
                </div>
              </a>

            </motion.div>
          </div>
        </motion.div>

        {/* --- MITAD DERECHA: Elemento Visual de Confianza --- */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full hidden md:block overflow-hidden bg-slate-800/50">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
            alt="Ingeniería y Seguridad" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
          {/* Overlay de gradiente para fundir con la izquierda */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />

          {/* Tarjetas Flotantes de "Trust Indicators" (Glassmorphism) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="ml-auto w-64 bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">Certificación</p>
                  <p className="text-sm font-bold text-white">Ingenieros Expertos</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mr-auto w-64 bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">Respuesta Rápida</p>
                  <p className="text-sm font-bold text-white">Disponibilidad 24/7</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default BannerContratacion;