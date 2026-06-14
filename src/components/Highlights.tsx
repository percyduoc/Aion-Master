import { motion } from "framer-motion";

const cards = [
{
title: "Análisis de Vulnerabilidades",
desc: "Detectamos riesgos y brechas de seguridad antes de que sean explotadas.",
img: "https://www.personal.com.ar/content/dam/teco-b2b/productos/ciberseguridad/analisis-de-vulnerabilidad/body%203.png/jcr:content/renditions/optimized-quality.webp",
icon: "🛡️",
},
{
title: "Monitoreo Inteligente",
desc: "Supervisión continua de infraestructura, redes y sistemas críticos.",
img: "https://msmk.university/wp-content/uploads/2024/09/gestor-de-vulnerabilidades.jpg",
icon: "📡",
},
{
title: "Análisis Forense Digital",
desc: "Investigación de incidentes de seguridad y recuperación de evidencia digital.",
img: "https://i.postimg.cc/mg9xPRMm/celular-camara.png",
icon: "🔍",
},
];

const Highlights = () => {
return ( <section className="bg-[#0B1220] py-28 px-4"> <div className="max-w-7xl mx-auto">


    {/* TITULO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
        Protección Integral
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6">
        Seguridad que va más allá
        <br />
        <span className="text-cyan-400">
          de una simple cámara
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-slate-400 text-lg">
        Integramos videovigilancia, ciberseguridad,
        monitoreo inteligente y conectividad para
        proteger lo que más importa.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{
            y: -10,
          }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-500/10"
        >
          <img
            src={card.img}
            alt={card.title}
            className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/70 to-transparent" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="text-5xl mb-4">
              {card.icon}
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              {card.title}
            </h3>

            <p className="text-slate-300 mb-6">
              {card.desc}
            </p>

            <button className="w-fit px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition">
              Más Información
            </button>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


);
};

export default Highlights;
