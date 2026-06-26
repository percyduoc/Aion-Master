import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiShield,
  FiRadio,
  FiCrosshair,
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiLock,
  FiServer,
  FiActivity,
} from "react-icons/fi";

// ==========================================
// 1. DATOS EXTENDIDOS (MOCK DB)
// ==========================================

/**
 * @typedef {Object} CardData
 * @property {string} title - Título de la tarjeta.
 * @property {string} desc - Descripción breve para la vista de tarjeta.
 * @property {string} img - URL de la imagen de fondo.
 * @property {React.ElementType} icon - Componente de ícono de react-icons.
 * @property {string} fullDescription - Descripción detallada para el modal.
 * @property {string[]} features - Lista de características técnicas.
 * @property {Object} stats - Estadísticas de rendimiento o protección.
 */

/** @type {CardData[]} */
const cardsData = [
  {
    title: "Análisis de Vulnerabilidades",
    desc: "Detectamos riesgos y brechas de seguridad antes de que sean explotadas.",
    img: "https://www.personal.com.ar/content/dam/teco-b2b/productos/ciberseguridad/analisis-de-vulnerabilidad/body%203.png/jcr:content/renditions/optimized-quality.webp",
    icon: FiShield,
    fullDescription: "Nuestro sistema realiza escaneos profundos automatizados 24/7 en toda tu infraestructura digital. Utilizando algoritmos de IA, identificamos patrones de ataque de día cero y configuraciones erróneas antes de que los atacantes puedan detectarlas.",
    features: ["Escaneo automatizado de puertos", "Detección de malware polimórfico", "Auditoría de contratos inteligentes", "Reportes de cumplimiento normativo (ISO 27001)"],
    stats: { coverage: "99.9%", scanTime: "< 2 mins", falsePositives: "0.01%" }
  },
  {
    title: "Monitoreo Inteligente",
    desc: "Supervisión continua de infraestructura, redes y sistemas críticos.",
    img: "https://msmk.university/wp-content/uploads/2024/09/gestor-de-vulnerabilidades.jpg",
    icon: FiRadio,
    fullDescription: "Un Centro de Operaciones de Seguridad (SOC) en la palma de tu mano. Supervisamos el tráfico de red, el uso de CPU/RAM de los servidores y los logs de acceso en tiempo real, bloqueando intentos de intrusión de forma autónoma.",
    features: ["Telemetría en tiempo real", "Alertas vía SMS/Email/Slack", "Bloqueo de IP dinámico", "Análisis de comportamiento de usuarios (UEBA)"],
    stats: { uptime: "99.999%", latency: "< 5ms", endpoints: "Ilimitados" }
  },
  {
    title: "Forense Digital",
    desc: "Investigación de incidentes de seguridad y recuperación de evidencia digital.",
    img: "https://i.postimg.cc/mg9xPRMm/celular-camara.png",
    icon: FiCrosshair,
    fullDescription: "Cuando ocurre un incidente, el tiempo es crítico. Nuestras herramientas de análisis forense congelan el estado del sistema, trazan la ruta del atacante y aseguran la cadena de custodia legal de la evidencia digital para procesos judiciales.",
    features: ["Adquisición de memoria volátil", "Recuperación de datos cifrados", "Análisis de línea de tiempo", "Ingeniería inversa de malware"],
    stats: { recoveryRate: "95%", traceSpeed: "Ultra-rápida", legalCompliance: "100%" }
  },
  
];

// ==========================================
// 2. CUSTOM HOOKS
// ==========================================

/**
 * Hook para obtener las dimensiones de la ventana (para el Canvas).
 * @returns {{width: number, height: number}}
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// ==========================================
// 3. SISTEMA DE PARTÍCULAS EN CANVAS
// ==========================================

/**
 * Componente CanvasParticles
 * Renderiza una red de nodos que se conectan mediante líneas, creando un efecto
 * tecnológico estilo "Red Neuronal" o "Ciberseguridad". Altamente optimizado.
 */
const CanvasParticles = () => {
  const canvasRef = useRef(null);
  const { width, height } = useWindowSize();
  const mousePosition = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Configuración de la red
    const particleCount = width < 768 ? 40 : 80;
    const maxDistance = 150;
    const particles = [];

    // Clase interna para manejar las partículas lógicas
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? "#06b6d4" : "#3b82f6"; // Cyan or Blue
      }

      update() {
        // Rebote en los bordes
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Repulsión ligera del mouse
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * 1;
          this.y -= Math.sin(angle) * 1;
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Actualizar y dibujar
      for (let i = 0; i < particleCount; i++) {
        particles[i].update();
        particles[i].draw();

        // Conectar partículas cercanas con líneas
        for (let j = i; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Eventos de Mouse para el canvas
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePosition.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

// ==========================================
// 4. COMPONENTES UI COMPLEJOS
// ==========================================

/**
 * Componente Modal para ver detalles profundos de cada tarjeta.
 */
const DetailsModal = ({ card, isOpen, onClose }) => {
  if (!isOpen || !card) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050914]/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0B1220] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
          >
            <FiX className="text-xl" />
          </button>

          {/* Sección de Imagen del Modal */}
          <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-black">
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B1220] to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center backdrop-blur-md">
                <card.icon className="text-2xl text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Contenido del Modal */}
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              {card.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {card.fullDescription}
            </p>

            {/* Lista de características */}
            <div className="space-y-3 mb-8">
              {card.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                  <FiCheckCircle className="text-cyan-500 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Grid de Estadísticas */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-auto">
              {Object.entries(card.stats).map(([key, value], idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-cyan-400 font-bold text-lg">{value}</span>
                  <span className="text-slate-500 text-xs uppercase tracking-wider capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ==========================================
// 5. COMPONENTE DE TARJETA 3D HOVER
// ==========================================

/**
 * TiltCard con Glassmorphism avanzado y lógica 3D.
 */
const TiltCard = ({ card, index, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[450px] w-full rounded-[2.5rem] cursor-pointer perspective-1000"
    >
      {/* Contenedor Glassmorphism Principal */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border border-white/5 bg-[#0B1220]/70 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-cyan-500/40 group-hover:bg-[#0B1220]/90"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Adorno Glow Inferior Dinámico */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Imagen de fondo con recorte y blend mode */}
        <div className="absolute top-0 left-0 right-0 h-3/5 overflow-hidden rounded-t-[2.5rem]">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-70 mix-blend-luminosity group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/95 via-[#0B1220]/60 to-transparent" />
        </div>

        {/* Contenido Elevado (Efecto Parallax 3D) */}
        <div 
          className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none"
          style={{ transform: "translateZ(60px)" }} 
        >
          {/* Icono con contenedor premium */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:-translate-y-2">
            <card.icon className="text-3xl text-cyan-400 group-hover:text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-md">
            {card.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-slate-300 transition-colors">
            {card.desc}
          </p>

          {/* Falso Botón para invitar al clic */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-cyan-500/20 transition-colors">
            <span className="text-sm font-semibold text-cyan-400/80 group-hover:text-cyan-400 uppercase tracking-widest transition-colors">
              Explorar Solución
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <FiArrowRight className="text-white group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 6. COMPONENTE PRINCIPAL (ENTRY POINT)
// ==========================================

export default function Highlights() {
  const [selectedCard, setSelectedCard] = useState(null);

  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCard]);

  return (
    <section className="relative bg-[#020610] min-h-screen py-32 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Fondo de Partículas Interactivos en Canvas */}
      <CanvasParticles />

      {/* Gradientes Estáticos Radiales de fondo para Glow general */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          {/* Badge Premium */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-cyan-900/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Arquitectura Zero Trust
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Seguridad de Alto grado <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-lg">
              Para Entornos Críticos
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Nuestra plataforma unificada orquesta videovigilancia algorítmica, 
            mitigación de amenazas en la nube y conectividad cifrada. 
            Protegemos tus activos digitales y físicos con una visibilidad sin precedentes.
          </p>
        </motion.div>

        {/* GRID DE COMPONENTES 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 perspective-[1500px]">
          {cardsData.map((card, i) => (
            <TiltCard 
              key={i} 
              card={card} 
              index={i} 
              onClick={() => setSelectedCard(card)} 
            />
          ))}
        </div>
      </div>

      {/* PORTAL / RENDERIZADO DEL MODAL */}
      <DetailsModal 
        card={selectedCard} 
        isOpen={!!selectedCard} 
        onClose={() => setSelectedCard(null)} 
      />

    </section>
  );
}