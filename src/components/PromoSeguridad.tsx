import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const PromoSeguridad = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#021520] to-[#063B55] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* COLUMNA IZQUIERDA – COPY */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-cyan-400 mb-4 text-sm">
            Protección inteligente
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Seguridad total
            <br />
            <span className="text-cyan-400">diseñada para tu espacio</span>
          </h2>

          <p className="text-lg opacity-90 mb-8 max-w-xl">
            Integramos cámaras, grabación local, monitoreo remoto y control desde
            tu celular. Sin puntos ciegos, sin improvisaciones.
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <Camera className="text-cyan-400" />
              <span>Barrido real y detección secuencial</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-cyan-400" />
              <span>Monitoreo y control full mobile</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" />
              <span>Instalación profesional certificada</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/56950909031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold transition text-center"
            >
              Cotizar ahora
            </a>

            <a
              href="/contacto"
              className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400/10 transition text-center"
            >
              Solicitar asesoría
            </a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA – VISUAL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

            <p className="text-center uppercase tracking-widest text-sm text-cyan-300 mb-6">
              Sistema AION Security
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="bg-white/10 px-6 py-4 rounded-xl text-center">
                <p className="text-sm opacity-70">Cámaras</p>
                <p className="text-xl font-bold">HD / IP</p>
              </div>

              <div className="bg-white/10 px-6 py-4 rounded-xl text-center">
                <p className="text-sm opacity-70">Grabación</p>
                <p className="text-xl font-bold">24/7</p>
              </div>

              <div className="bg-white/10 px-6 py-4 rounded-xl text-center">
                <p className="text-sm opacity-70">Acceso</p>
                <p className="text-xl font-bold">Remoto</p>
              </div>
            </div>

            <p className="text-center text-sm opacity-70">
              Compatible con hogares, negocios y empresas
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PromoSeguridad;
