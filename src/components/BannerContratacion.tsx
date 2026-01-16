import { motion } from "framer-motion";

const BannerContratacion = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-[#021520] to-[#043b55] flex flex-col md:flex-row items-center"
      >
        {/* Texto */}
        <div className="flex-1 p-10 text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Contrata tu sistema de seguridad
            <br />
            <span className="text-cyan-400">con asesoría experta</span>
          </h3>

          <p className="text-lg opacity-90 mb-6">
            Te ayudamos a elegir la mejor solución en cámaras, alarmas,
            conectividad y redes según tu espacio y necesidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/56950909031"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold text-center transition"
            >
              Comunicate con un  asesor
            </a>

            <span className="text-white/80 flex items-center">
              o llámanos al
              <strong className="ml-2 text-xl text-white">
                +56 9 5090 9031
              </strong>
            </span>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="flex-1 h-72 md:h-full bg-[url('/img/seguridad-callcenter.jpg')] bg-cover bg-center" />
      </motion.div>
    </section>
  );
};

export default BannerContratacion;
