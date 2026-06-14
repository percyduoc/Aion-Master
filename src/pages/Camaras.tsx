import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  TerminalSquare, 
  Bug, 
  Search, 
  CloudRain, 
  Activity, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

// --- DATOS ENRIQUECIDOS (Marketing + Ciberseguridad) ---
const servicios = [
  {
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    title: "Auditoría de Riesgos",
    desc: "Mapeo exhaustivo de su superficie de ataque. Identificamos brechas críticas antes de que impacten su operación o reputación.",
  },
  {
    icon: <TerminalSquare className="w-8 h-8 text-blue-400" />,
    title: "Pentesting Ético",
    desc: "Simulaciones de ataque de grado militar (Red Teaming) para testear la resiliencia real de su infraestructura de red y aplicaciones.",
  },
  {
    icon: <Bug className="w-8 h-8 text-red-400" />,
    title: "Respuesta a Incidentes",
    desc: "Contención inmediata, erradicación de malware persistente y recuperación de sistemas comprometidos por ransomware.",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-cyan-400" />,
    title: "Análisis Forense Digital",
    desc: "Trazabilidad completa del ataque, recolección de evidencia digital con cadena de custodia legal y análisis de causa raíz.",
  },
  {
    icon: <CloudRain className="w-8 h-8 text-blue-400" />,
    title: "Arquitectura Cloud Segura",
    desc: "Fortificación y auditoría de configuraciones en entornos AWS, Azure y GCP bajo normativas internacionales (CIS Controls).",
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-400" />,
    title: "Monitoreo SOC 24/7",
    desc: "Vigilancia ininterrumpida, análisis de logs en tiempo real y neutralización activa de amenazas mediante inteligencia artificial.",
  },
];

const procesos = [
  { step: "01", title: "Reconocimiento", desc: "Mapeo de activos digitales" },
  { step: "02", title: "Explotación Controlada", desc: "Testeo de vulnerabilidades" },
  { step: "03", title: "Hardening", desc: "Mitigación y parcheo" },
  { step: "04", title: "Operación Segura", desc: "Monitoreo continuo" },
];

const certificaciones = [
  "Ingenieros Informáticos Colegiados",
  "Certificación CISA / CISM",
  "OWASP Top 10 Security",
  "Peritaje Forense Digital",
  "Normativa ISO/IEC 27001",
];

// --- ANIMACIONES ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 25 } }
};

const CyberSecurity = () => {
  return (
    <section className="relative bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] pointer-events-none" />
      
      {/* Orbes de luz */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">

        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-sm font-semibold tracking-wide mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <ShieldCheck className="w-4 h-4" /> Unidades de Defensa Cibernética
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tighter">
              Aseguramos sus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                activos más críticos
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Anticípese a las amenazas. Ejecutamos auditorías profundas, pentesting ofensivo y análisis forense para blindar su infraestructura corporativa con precisión militar.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/56947153763"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/56947153763"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                Hablar con un Ingeniero
              </a>
            </div>
          </motion.div>

          {/* Imagen Hero con Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl" />
            <div className="relative bg-slate-900 border border-slate-700 rounded-[2rem] p-2 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                alt="Operaciones de Ciberseguridad"
                className="rounded-[1.5rem] w-full h-[400px] object-cover opacity-80"
              />
              {/* Overlay decorativo tech */}
              <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4">
                 <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-slate-400">STATE: </span>
                  <span className="text-emerald-400">SECURE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="mb-40">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Vectores de <span className="text-cyan-400">Defensa</span></h2>
            <p className="text-slate-400 text-lg">Soluciones de ingeniería especializada para proteger sus sistemas críticos frente a vectores de ataque modernos.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicios.map((servicio, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/60 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{servicio.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{servicio.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- METODOLOGÍA (PIPELINE) --- */}
        <div className="mb-40 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">Protocolo de Intervención</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {/* Línea conectora de fondo (Solo Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 z-0" />
            
            {procesos.map((proceso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4"
              >
                <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-900 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl mb-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                  {proceso.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{proceso.title}</h3>
                <p className="text-sm text-slate-400">{proceso.desc}</p>
                
                {/* Flecha conectora móvil */}
                {index < procesos.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-slate-700 mt-4 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PANEL DE AUTORIDAD (STATS & CERTS) --- */}
        <div className="mb-40 grid lg:grid-cols-[1fr,2fr] gap-8">
          
          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-900/50 rounded-3xl p-10 flex flex-col justify-center"
          >
            {[
              { num: "+2.5K", label: "Vulnerabilidades Mitigadas" },
              { num: "0", label: "Brechas Post-Intervención" }
            ].map((stat, i) => (
              <div key={i} className={`${i !== 0 ? 'mt-8 pt-8 border-t border-cyan-900/50' : ''}`}>
                <h3 className="text-5xl font-black text-cyan-400 font-mono tracking-tighter mb-2">{stat.num}</h3>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 lg:p-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400" /> 
              Acreditaciones de la Industria
            </h3>
            <div className="flex flex-wrap gap-3">
              {certificaciones.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-slate-950 border border-slate-700 text-slate-300 px-4 py-2.5 rounded-lg text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* --- CTA BOTTOM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] mix-blend-overlay" />
          
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              No espere al próximo incidente.
            </h2>
            <p className="text-cyan-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Contrate inteligencia ofensiva y defensiva. Ejecutemos un escaneo de superficie hoy mismo para conocer su exposición real.
            </p>
            <a
              href="https://wa.me/56947153763"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#020617] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 shadow-2xl hover:shadow-cyan-900/50 hover:-translate-y-1 transition-all duration-300"
            >
              Iniciar Auditoría de Seguridad <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CyberSecurity;