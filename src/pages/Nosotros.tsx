import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import trabajador from "../assets/icons/trabajador.png";
import Evaluando from "../assets/icons/Evaluando.png";
import apoyo from "../assets/icons/apoyo.png";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { ShieldCheck, Sparkles } from "lucide-react";

/* ---------------- ANIMACIONES ---------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

/* ---------------- COMPONENTE ---------------- */
const Nosotros = () => {
  const navigate = useNavigate();

  /* -------- PILARES -------- */
  const pilares = [
    {
      icon: Evaluando,
      title: "EVALUACIÓN TÉCNICA",
      description:
        "Analizamos tu espacio, riesgos y conectividad para definir la solución correcta desde el inicio.",
      number: "1",
    },
    {
      icon: trabajador,
      title: "INSTALACIÓN PROFESIONAL",
      description:
        "Nuestro equipo técnico certificado instala y configura cada sistema con estándares reales.",
      number: "2",
    },
    {
      icon: apoyo,
      title: "MONITOREO Y SOPORTE",
      description:
        "Soporte continuo, monitoreo y acompañamiento técnico para que tu sistema nunca falle.",
      number: "3",
    },
  ];

  /* -------- INSIGNIAS -------- */
  const planes = [
    {
      tier: "ESTÁNDAR",
      subtitle: "Uso hogar y pymes",
      color: "from-gray-300 to-gray-500",
      items: [
        "Instalación profesional",
        "Equipos certificados",
        "Configuración segura",
      ],
    },
    {
      tier: "PRO",
      subtitle: "Nivel empresa",
      highlight: true,
      color: "from-cyan-400 to-blue-600",
      items: [
        "Diseño técnico avanzado",
        "Escalabilidad garantizada",
        "Soporte prioritario",
        "Documentación técnica",
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* ---------------- INTRO ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden pt-36 pb-20 text-center text-white"
      >
        {/* Fondo animado */}
        <AnimatedBackground />

        {/* Contenido */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Seguridad y conectividad
            <br />
            <span className="text-cyan-400">a nivel profesional</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl opacity-90">
            Diseñamos e instalamos sistemas de{" "}
            <span className="font-semibold">seguridad electrónica</span>, redes y
            control de accesos para hogares y empresas.
          </p>
        </div>
      </motion.section>


      {/* ---------------- PILARES ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#063B55]">
              Nuestro proceso de trabajo
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-sky-100 text-center"
              >
                <div className="relative mb-6 flex justify-center">
                 

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </motion.div>

                </div>

                <h3 className="text-xl font-bold text-[#063B55] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ---------------- VERSIONES ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="pb-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#063B55]">
              Niveles de servicio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planes.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`relative bg-white rounded-xl shadow-xl p-10 border ${
                  p.highlight
                    ? "border-cyan-400 ring-2 ring-cyan-300"
                    : ""
                }`}
              >
                {/* BRILLO */}
                {p.highlight && (
                  <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent pointer-events-none"
                  />
                )}

                <div
                  className={`mx-auto mb-6 w-28 h-28 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-extrabold text-xl relative`}
                >
                  {p.highlight && (
                    <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-300" />
                  )}
                  {p.tier}
                </div>

                <p className="text-center text-sm text-gray-500 mb-6">
                  {p.subtitle}
                </p>

                <ul className="space-y-3 text-gray-700 text-sm">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-14">
            <button
              onClick={() => navigate("/contacto")}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-full font-semibold transition"
            >
              Solicitar evaluación técnica →
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Nosotros;
