import { useEffect, useRef } from "react";

type NodeType = "house" | "camera";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let nodes: any[] = [];
    let animationFrameId: number;

    const cx = () => canvas.width / 2;
    const cy = () => canvas.height / 2;

    // 🔹 Crear nodos (ahora dinámico según tamaño)
    const createNodes = () => {
      const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 40;

      nodes = Array.from({ length: 14 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 80 + Math.random() * maxRadius;

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          r: 6,
          pulse: Math.random() * 100,
          type: Math.random() > 0.5 ? "camera" : ("house" as NodeType),
        };
      });
    };

    // 🔹 Resize seguro
    const resize = () => {
      const parent = canvas.parentElement;

      canvas.width = parent?.clientWidth || window.innerWidth;
      canvas.height = parent?.clientHeight || window.innerHeight;

      createNodes(); // 🔥 recalcular nodos al cambiar tamaño
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const drawIcon = (x: number, y: number, type: NodeType) => {
      ctx.strokeStyle = "rgba(0,220,255,0.9)";
      ctx.lineWidth = 2;

      ctx.beginPath();

      if (type === "camera") {
        ctx.rect(x - 6, y - 4, 12, 8);
        ctx.arc(x + 8, y, 2, 0, Math.PI * 2);
      } else {
        ctx.moveTo(x - 6, y);
        ctx.lineTo(x, y - 6);
        ctx.lineTo(x + 6, y);
        ctx.lineTo(x + 6, y + 6);
        ctx.lineTo(x - 6, y + 6);
        ctx.closePath();
      }

      ctx.stroke();
    };

    const draw = () => {
      // 🔒 Clipping para evitar overflow visual
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.clip();

      // fondo
      ctx.fillStyle = "#021520";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🔵 Radar rings
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(cx(), cy(), 80 + i * 60 + (t % 60), 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,200,255,0.06)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 🌐 líneas de red
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.moveTo(cx(), cy());
        ctx.lineTo(cx() + n.x, cy() + n.y);
        ctx.strokeStyle = "rgba(0,200,255,0.05)";
        ctx.stroke();
      });

      // 📍 nodos + pulso
      nodes.forEach((n) => {
        const px = cx() + n.x;
        const py = cy() + n.y;

        // pulso
        const pulseSize =
          Math.abs(Math.sin((t + n.pulse) * 0.02)) * 10;

        ctx.beginPath();
        ctx.arc(px, py, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,200,255,0.15)";
        ctx.stroke();

        // nodo base
        ctx.beginPath();
        ctx.arc(px, py, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,220,255,0.9)";
        ctx.fill();

        // icono
        drawIcon(px, py, n.type);
      });

      ctx.restore(); // 🔓 fin clipping

      t += 0.6;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default AnimatedBackground;