import { motion } from "framer-motion";

function GradientMarqueeText({
  text = "I.A. Aplicada",
  gradientColors = [
    "rgb(35, 216, 230)", 
     "rgb(70, 220, 230)", 
      "rgb(4, 55, 81)" 

],
}: {
  text?: string;
  gradientColors?: string[];
}) {
  return (
    <div className="">
      <motion.div
        className="text-5xl md:text-6xl font-bold mb-6 "
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default function AnimatedGradientText() {
  return <GradientMarqueeText />;
}
