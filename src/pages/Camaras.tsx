import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Camaras = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#022E46] mb-6">
           Cámaras de Seguridad
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Protege tu hogar o negocio con cámaras profesionales, instalación certificada
            y monitoreo desde tu celular, estés donde estés.
          </p>
        </motion.div>

        {/* PACKS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
       <h3 className="text-2xl md:text-4xl font-bold text-center text-[#022E46] mb-4">
  Packs de Instalación
</h3>

<div className="flex justify-center mb-12">
  <span className="bg-[#E6F4FA] text-[#0177A3] px-4 py-2 rounded-full text-sm md:text-base font-semibold">
     3 meses de monitoreo gratis en todos los packs
  </span>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pack Hogar',
                desc: 'Ideal para casas y departamentos',
                items: ['4 Cámaras IA full HD+4k', 'Base de datos de grabación', 'Instalación profesional', 'Visualización movil'],
              },
              {
                title: 'Pack Pyme',
                desc: 'Para locales y oficinas',
                items: ['8 Cámaras IA full HD+4k', 'Base de datos de grabación', 'Instalación y configuración', 'Visualización movil '],
              },
              {
                title: 'Pack Empresa',
                desc: 'Seguridad a gran escala',
                items: ['16+ Cámaras IA full HD+4k ', 'Base de datos de grabación', 'Diseño personalizado', 'Monitoreo remoto asistido' ,],
              },
            ].map((pack, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#33CCFF]"
              >
                <h4 className="text-xl font-bold mb-2">{pack.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{pack.desc}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {pack.items.map((item, idx) => (
                    <li key={idx}>✔ {item}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/56950909031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#022E46] text-white py-3 rounded-lg font-semibold hover:bg-[#014d72] transition"
                >
                  Asesorar Pack
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PLANES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center text-[#022E46] mb-12">
            Planes Mensuales de Seguridad
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Plan Basico',
                price: 'Desde $18.990 / mes',
                highlight: true,
                items: [
                  '1 cámara IA full HD+4k',
                  'Base de datos de grabación',
                  'Visualización movil',
                  'Botón de pánico',
                  'Soporte técnico',
                ],
              },
              {
                title: 'Plan Mediano',
                price: 'Desde $28.990 / mes',
                items: [
                  '2–4 cámaras IA full HD+4k',
                  'Grabación continua',
                  'Alertas',
                  'Acceso remoto',
                  'Soporte prioritario',
                ],
              },
              {
                title: 'Plan Pemium',
                price: 'asesoría personalizada',
                items: [
                  '4+ cámaras IA full HD+4k',
                  'Monitoreo avanzado',
                  'Accesos múltiples',
                  'Soporte dedicado',
                  'Escalable',
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className={`rounded-xl p-8 shadow-lg ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-[#022E46] to-[#014d72] text-white'
                    : 'bg-white'
                }`}
              >
                <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                <p className={`mb-4 ${plan.highlight ? 'text-[#33CCFF]' : 'text-gray-600'}`}>
                  {plan.price}
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  {plan.items.map((item, idx) => (
                    <li key={idx}>✔ {item}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/56950909031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-white text-[#022E46] hover:bg-gray-100'
                      : 'bg-[#022E46] text-white hover:bg-[#014d72]'
                  }`}
                >
                  Quiero este plan
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Camaras;
