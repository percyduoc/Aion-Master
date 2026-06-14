import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

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
    <section className="py-24 px-6 md:px-8 relative overflow-hidden bg-[#020617] text-slate-50 font-sans">
      
      {/* --- BACKGROUND UI PREMIUM --- */}
      {/* Cuadrícula técnica sutil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent_0%,white_50%,transparent_100%)] pointer-events-none" />
      
      {/* Orbes de luz de fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-700/10 blur-[150px] mix-blend-screen pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-inner-[inset_0_1px_0_rgba(255,255,255,0.1)]"
      >
        {/* MITAD IZQUIERDA: Copywriting y CTA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative"
        >
          {/* Gradiente interno para profundidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            {/* Badge de Confianza Premium */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-bold tracking-wide mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-wider">Asesoría de Ingeniería sin Costo</span>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Diseñamos la seguridad exacta que
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                {" "}su proyecto requiere.
              </span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              No deje su infraestructura al azar. Nuestros especialistas evalúan sus instalaciones para recomendar la topología ideal en videovigilancia, control de acceso y conectividad.
            </motion.p>

            {/* Viñetas de valor agregado (Estilo Elite) */}
            <motion.ul variants={itemVariants} className="space-y-4 mb-12">
              {[
                "Análisis de vulnerabilidades en terreno o remoto.",
                "Selección de equipamiento con grado corporativo.",
                "Cotización y plan de acción en menos de 24 horas."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Área de Botones de Conversión */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://wa.me/56947153763"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar con un Especialista
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start px-2 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-all duration-300">
                  <PhoneCall className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                      Atención Directa
                    </p>
                  </div>
                  <a 
                    href="tel:+56947153763" 
                    className="text-xl font-black text-white hover:text-cyan-400 transition-colors tracking-tight"
                  >
                    +56 9 4715 3763
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* MITAD DERECHA: Imagen con overlays y elementos flotantes */}
      

      </motion.div>
    </section>
  );
};

export default BannerContratacion;