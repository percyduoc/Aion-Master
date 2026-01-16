import { motion } from "framer-motion";

const items = [
  "Optimización de señales WiFi",
  "Diagnóstico de lentitud en redes",
  "Mejora de calidad de imagen en cámaras",
  "Diseño de centrales de alarmas",
  "Conectividad entre sucursales",
  "Correos corporativos y seguridad",
  "Protección de información y contenidos",
];

const ConsultoriaTecnologica = () => {
  return (
    <section className="bg-gradient-to-br from-[#021520] to-[#063B55] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Consultoría tecnológica
        </h2>
        <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
          Ingenieros informáticos y especialistas en redes con experiencia en
          ciberseguridad, comunicaciones y sistemas críticos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10"
          >
            <p className="text-lg font-semibold">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConsultoriaTecnologica;
