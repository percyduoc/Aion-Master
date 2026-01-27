import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { Link } from "react-router-dom";
import Text from "../components/text";

const slides = [
  "Integramos cámaras con IA para anticipar problemas y optimizar tu infraestructura",
  "WiFi profesional donde lo necesites",
  "Control de accesos para hogares y empresas",
  "Soluciones de conectividad confiables ",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <AnimatedBackground />

      <div className="relative z-10 pt-16 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Logo */}
        {/* <div className="h-28 flex items-center justify-center mb-6">
          <img src={IconPark} alt="Logo" className="h-full w-auto" />
        </div> */}

        {/* Título fijo */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Seguridad y conectividad inteligente
          
          con  <span className="text-cyan-400"><Text/></span>
          
          
        </h1>

        {/* Slider */}
        <div className="h-16 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl text-cyan-200 font-medium"
            >
              {slides[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        
        <div className="mt-11 flex gap-4">
        <nav className="flex justify-end gap-10">
              <Link to="/contacto" className={("/contacto")}>
              <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition">
            Contactanos
          </button>
              </Link>
            </nav>
            <Link to="/nosotros" className={("/contacto")}>
            <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition">
              soluciones
            </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
