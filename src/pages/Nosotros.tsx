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
      title: "DISEÑO GRATIS Y PERSONALIZADO",
      description:
        "Planificamos cada proyecto con un diseño técnico previo, asegurando eficiencia y resultados óptimos.",
      number: "1",
    },
    {
      icon: trabajador,
      title: "EQUIPOS CERTIFICADOS",
      description:
        "Trabajamos únicamente con dispositivos certificados y de calidad comprobada para máxima confiabilidad.",
      number: "2",
    },
    {
      icon: apoyo,
      title: "SEGURIDAD PENSADA PARA TU FAMILIA O EMPRESA",
      description:
        "No solo grabamos, diseñamos sistemas que protegen y cuidan a quienes más importan.",
      number: "3",
    },
    {
      icon: apoyo,
      title: "SOPORTE Y MONITOREO GRATUITO ",
      description:
        "Nuestro equipo responde rápido y con soluciones reales, justo en el momento que lo requieres.",
      number: "4",
    },
  ];
  const proyectos = [
    {
      title: "Hogar protegido 24/7",
      subtitle: "Cámaras IP + acceso remoto",
      image: "https://i.postimg.cc/mrYQ8m44/Disen-o-sin-ti-tulo-2.png",
      badge: "Residencial",
      description:
        "Sistema de cámaras IP con IA y acceso desde el móvil.",
      detalles: [
        "Cámaras IP Full HD",
        "Acceso remoto cifrado",
        "Grabación local",
        "Notificaciones por eventos",
      ],
    },
    {
      title: "Pyme con control de accesos",
      subtitle: "Seguridad y trazabilidad",
      image: "https://j3g.com.mx/wp-content/uploads/2020/11/CONTROL-DE-ACCESO-BLOG-2-1024x576.png",
      badge: "Empresa",
      description:
        "Control de accesos y monitoreo para operación diaria y prevención de incidentes.",
      detalles: [
        "Control biométrico",
        "Registro de accesos",
        "Cámaras perimetrales",
        "Soporte técnico continuo",
      ],
    },
    {
      title: "Infraestructura corporativa",
      subtitle: "Escalable y documentada",
      image: "https://i.postimg.cc/L5p84F0n/Disen-o-sin-ti-tulo-3.png",
      badge: "Corporativo",
      description:
        "Diseño técnico avanzado orientado a crecimiento y continuidad operativa.",
      detalles: [
        "Diseño de red",
        "acceso remoto",
        "Documentación técnica",
        "Soporte prioritario",
      ],
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
        <AnimatedBackground />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Seguridad y conectividad
            <br />
            <span className="text-cyan-400">con visión profesional</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl opacity-90">
            Creamos soluciones de{" "}
            <span className="font-semibold">seguridad electrónica</span>, redes y
            control de accesos que protegen personas, hogares y empresas.
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
              Lo que nos diferencia
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

                <h3 className="text-lg font-bold text-[#063B55] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* ---------------- NUESTRA HISTORIA ---------------- */}
<motion.section
  initial="hidden"
  whileInView="visible"
  variants={container}
  className="py-24 bg-white"
>
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* TEXTO */}
    <motion.div variants={fadeInUp}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#063B55] mb-6">
        Nuestra historia
      </h2>

      <p className="text-gray-600 mb-5 leading-relaxed">
        AION nace desde la experiencia real en terreno. 
        De ver instalaciones mal pensadas, equipos mal configurados
        y clientes que quedaban solos después de pagar.
      </p>

      <p className="text-gray-600 mb-5 leading-relaxed">
        Decidimos hacer las cosas distinto:{" "}
        <span className="font-semibold text-[#063B55]">
          diseñar bien desde el inicio, instalar con criterio técnico y acompañar después.
        </span>
      </p>

      <p className="text-gray-600 leading-relaxed">
        Somos ingenieros y técnicos que Construimos sistemas de seguridad y conectividad
        pensados para durar y crecer contigo.
      </p>
    </motion.div>

    {/* BLOQUE AION */}
    <motion.div
      variants={fadeInUp}
      className="relative bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl p-10 text-white shadow-xl"
    >
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2">
        ¿Qué es AION?
        <Sparkles className="w-6 h-6 text-yellow-300" />
      </h3>

      <p className="opacity-95 leading-relaxed mb-4">
        AION representa visión a largo plazo.
        Pensar la seguridad no como un gasto puntual,
        sino como una inversión continua.
      </p>

      <p className="opacity-95 leading-relaxed">
        Tranquilidad, control y confianza para personas,
        hogares y empresas.
      </p>
    </motion.div>

  </div>
</motion.section>


      {/* ---------------- SOLUCIONES EN TERRENO ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="pb-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#063B55]">
              Nuestras soluciones
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Diseñamos soluciones reales,
              pensadas para funcionar hoy y crecer mañana.
            </p>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proyectos.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt=""
                    className="h-48 w-full object-cover brightness-75"
                  />
                  <span className="absolute top-4 left-4 bg-cyan-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#063B55]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-cyan-600 font-medium mb-3">
                    {p.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {p.description}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.detalles.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-cyan-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-14">
            <button
              onClick={() => navigate("/contacto")}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-full font-semibold transition"
            >
              Solicitar evaluación técnica<span> Gratis</span>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Nosotros;
