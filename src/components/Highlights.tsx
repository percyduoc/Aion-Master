import { motion } from "framer-motion";

const cards = [
  {
    title: "Notificaciones de eventos críticos",
    desc: "Alertas instantáneas para respuestas rápidas y efectivas.",
    img: "https://i.postimg.cc/QxXVg4SF/Alerta.avif",
  },
  {
    title: "Monitoreo Ias 24/7",
    desc: "Vigilancia continua con tecnología de inteligencia artificial.",
    img: "https://i.postimg.cc/8Pq9Q33g/monitoreo.webp",
  },
  {
    title: "Control total desde tu celular",
    desc: "Accede a tus cámaras y sistemas desde cualquier lugar en tiempo real .",
    img: "https://i.postimg.cc/mg9xPRMm/celular-camara.png",
  },
];

const Highlights = () => {
  return (
    <section className=" py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
