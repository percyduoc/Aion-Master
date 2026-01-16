import { motion } from "framer-motion";

const soluciones = [
  "Proyectos de seguridad residencial y empresarial",
  "Supervisión remota desde tu celular",
  "Detección instantánea de eventos",
  "Protección perimetral avanzada",
  "Control de intrusión en grandes zonas",
  "Mantenimiento y soporte de sistemas",
];

const SolucionesIntegrales = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#022E46] mb-8">
            Soluciones integrales
            <br />
            <span className="text-cyan-500">en seguridad y conectividad</span>
          </h2>

          <ul className="space-y-4">
            {soluciones.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-cyan-500 font-bold">—</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="src/assets/img/Foto.png"
            alt="Soluciones de seguridad"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SolucionesIntegrales;
