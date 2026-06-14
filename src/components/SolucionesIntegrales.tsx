import { motion } from "framer-motion";
import { Shield, Cctv, Network, Server, CheckCircle2, ArrowRight, Zap } from "lucide-react";

// --- DATOS ENRIQUECIDOS (Copywriting Corporativo) ---
const soluciones = [
  {
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
    titulo: "Ciberseguridad Avanzada",
    descripcion:
      "Protección militar para sus sistemas críticos. Análisis proactivo de vulnerabilidades y neutralización de amenazas en tiempo real.",
    items: [
      "Pentesting y Red Teaming",
      "Análisis Forense Digital",
      "Contención de Ransomware",
      "Auditorías de Cumplimiento",
    ],
  },
  {
    icon: <Cctv className="w-8 h-8 text-blue-400" />,
    titulo: "Videovigilancia Inteligente",
    descripcion:
      "Despliegue de sistemas de monitoreo de alta disponibilidad con analíticas de video e inteligencia artificial integrada.",
    items: [
      "Cámaras con IA (Reconocimiento)",
      "Centro de Monitoreo Remoto",
      "Seguridad Perimetral Activa",
      "Almacenamiento Cifrado",
    ],
  },
  {
    icon: <Network className="w-8 h-8 text-indigo-400" />,
    titulo: "Infraestructura y Redes",
    descripcion:
      "Arquitectura de redes empresariales robustas, escalables y enlaces inalámbricos de alto rendimiento para máxima continuidad.",
    items: [
      "WiFi Corporativo (Alta Densidad)",
      "Switching y Routing Avanzado",
      "Cableado Estructurado Certificado",
      "Monitoreo de Nodos",
    ],
  },
  {
    icon: <Server className="w-8 h-8 text-emerald-400" />,
    titulo: "Soporte TI Corporativo",
    descripcion:
      "Mantenimiento preventivo, gestión de servidores y soporte técnico especializado para garantizar el 99.9% de uptime.",
    items: [
      "Soporte Helpdesk Nivel 1, 2 y 3",
      "Administración de Servidores",
      "Políticas de Backup (Disaster Recovery)",
      "Optimización de Hardware",
    ],
  },
];

// --- ANIMACIONES ORQUESTADAS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

const SolucionesIntegrales = () => {
  return (
    <section className="relative bg-[#020617] text-slate-50 py-24 px-6 md:px-8 overflow-hidden font-sans">
      
      {/* Background UI Premium */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Zap className="w-4 h-4" /> Ecosistema Tecnológico Unificado
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-8 leading-[1.1] tracking-tighter">
            Tecnología para proteger
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}y potenciar su operación.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
            Integramos ciberseguridad, videovigilancia de alta precisión, infraestructura de conectividad y soporte técnico bajo un mismo estándar de excelencia empresarial.
          </p>
        </motion.div>

        {/* --- GRID DE SOLUCIONES --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {soluciones.map((solucion, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.05)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Resplandor superior interno al hacer hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {solucion.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {solucion.titulo}
              </h3>

              <p className="text-slate-400 mb-8 leading-relaxed">
                {solucion.descripcion}
              </p>

              {/* Contenedor de viñetas que empuja el botón hacia abajo */}
              <ul className="space-y-4 mb-10 flex-grow">
                {solucion.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5 opacity-80" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-cyan-400 font-semibold group/btn w-fit">
                Explorar solución
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BANNER INFERIOR (CTA PREMIUM) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl"
        >
          {/* Fondo gradiente complejo */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#031525] to-[#01253a]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] mix-blend-overlay opacity-50" />
          
          <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              ¿Requiere una arquitectura a medida?
            </h3>

            <p className="max-w-2xl mx-auto text-slate-300 mb-10 text-lg leading-relaxed">
              Nuestros ingenieros analizan su infraestructura actual para diseñar una topología que integre seguridad, rendimiento y escalabilidad sin compromisos.
            </p>

            <a
              href="https://wa.me/56947153763"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-5 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_45px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Solicitar Evaluación de Ingeniería
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SolucionesIntegrales;