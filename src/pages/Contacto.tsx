import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Headset, Calendar } from "lucide-react";
import WhatsappIcon from "../assets/svg/whatsapp-logo.svg";
import AnimatedBackground from "../components/ui/AnimatedBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contacto = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  // FORM STATE
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !telefono || !mensaje) {
      alert("Por favor completa todos los campos");
      return;
    }

    const texto = `
Hola, quiero una cotización 

 Nombre: ${nombre}
 Teléfono: ${telefono}
 Servicio:
${mensaje}
`;

    const url = `https://wa.me/56950909031?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    // Limpia el formulario
    setNombre("");
    setTelefono("");
    setMensaje("");
  };

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden pt-36 pb-20 text-center text-white"
      >
        <AnimatedBackground />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Contáctanos
          </h1>

          <p className="max-w-3xl mx-auto text-xl opacity-90">
            Instalación de <strong>cámaras de seguridad</strong>, redes WiFi
            y soluciones de conectividad a tu medida.
          </p>
        </div>
      </motion.section>

      {/* FORM */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 -mt-20"
      >
        <div className="bg-white mt-52 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#022E46] mb-6 text-center">
            Solicita tu cotización
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 mb-10"
          >
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006699] outline-none"
            />

            <input
              type="tel"
              placeholder="Teléfono / WhatsApp"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#006699] outline-none"
            />

            <textarea
              rows={4}
              placeholder="¿Qué necesitas? (cámaras, WiFi, redes, etc.)"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-[#006699] outline-none"
            />

            <button
              type="submit"
              className="bg-[#006699] hover:bg-[#00557a] text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar solicitud
            </button>
          </form>

          {/* CTA EXTRA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/56950909031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <img src={WhatsappIcon} className="w-6 h-6 invert" />
              WhatsApp inmediato
            </a>

            <button
              onClick={() => setOpenCalendar(true)}
              className="inline-flex items-center gap-3 bg-[#022E46] hover:bg-[#011e2f] text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <Calendar className="w-5 h-5" />
              Agendar reunión técnica
            </button>
          </div>
        </div>
      </motion.div>

      {/* INFO */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div whileHover={{ y: -4 }} className="flex items-start gap-4">
            <Headset className="w-10 h-10 text-cyan-500" />
            <div>
              <h3 className="font-bold text-lg text-[#022E46]">
                Atención directa
              </h3>
              <p className="text-gray-600 text-sm">
                Te atiende un especialista real desde la cotización
                hasta la instalación.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="flex items-start gap-4">
            <MapPin className="w-10 h-10 text-cyan-500" />
            <div>
              <h3 className="font-bold text-lg text-[#022E46]">
                Cobertura local
              </h3>
              <p className="text-gray-600 text-sm">
                Operamos desde Viña del Mar con visitas técnicas
                programadas.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="flex items-start gap-4">
            <Mail className="w-10 h-10 text-cyan-500" />
            <div>
              <h3 className="font-bold text-lg text-[#022E46]">
                Canales claros
              </h3>
              <p className="text-gray-600 text-sm">
                WhatsApp para urgencias y correo para cotizaciones
                formales.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* MODAL CALENDARIO */}
      {openCalendar && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] relative"
          >
            <button
              onClick={() => setOpenCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <iframe
              src="https://cal.com/percy-aramis-santibanez-alarcon-h5dfvn"
              className="w-full h-full rounded-2xl"
              frameBorder="0"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contacto;
