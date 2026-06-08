import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

// Each calligraphy corner flies in from its diagonal corner
const cornerVariants = {
  hidden: (dir: { x: number; y: number }) => ({
    opacity: 0,
    x: dir.x,
    y: dir.y,
  }),
  visible: {
    opacity: 0.9,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Center Kali: emerges from darkness — scale + brightness
const centerVariants = {
  hidden: { opacity: 0, scale: 0.82, filter: "brightness(0)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 },
  },
};

export function Hero() {
  const { isReady } = useOutletContext<{ isReady: boolean }>();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section
      className="relative overflow-hidden w-full h-screen flex items-center justify-center -my-20"
      style={{ fontFamily: "'Mukta', serif", background: "#000" }}
    >
      <motion.div
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={isReady ? "visible" : "hidden"}
        transition={prefersReducedMotion ? { duration: 0 } : undefined}
        style={{
          position: "relative",
          width: "clamp(300px, 95vw, 680px)",
          height: isMobile ? "clamp(360px, 15vh, 80px)" : "clamp(360px, 85vh, 580px)",
        }}
      >
        {/* कृष्ण — top left */}
        <motion.img
          src={vectorKrsna}
          alt="कृष्ण"
          custom={{ x: -28, y: -28 }}
          variants={cornerVariants}
          transition={{ delay: 0.3 }}
          style={{
            position: "absolute",
            top: "24%",
            left: "0%",
            width: "30%",
          }}
        />

        {/* काली — top right */}
        <motion.img
          src={vectorKali}
          alt="काली"
          custom={{ x: 28, y: -28 }}
          variants={cornerVariants}
          transition={{ delay: 0.45 }}
          style={{
            position: "absolute",
            top: "20%",
            right: "0%",
            width: "38%",
          }}
        />

        {/* ── CENTER — Maa Kali emerges from darkness ── */}
        <motion.img
          src={maaKali}
          alt="माँ काली का दिव्य स्वरूप"
          variants={centerVariants}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            width: "52%",
            zIndex: 10,
            objectFit: "contain",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
          }}
        />

        {/* ऐश्वराय — bottom left */}
        <motion.img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          custom={{ x: -28, y: 28 }}
          variants={cornerVariants}
          transition={{ delay: 0.6 }}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-6%",
            width: "44%",
          }}
        />

        {/* स्वाहा — bottom right */}
        <motion.img
          src={vectorSwaha}
          alt="स्वाहा"
          custom={{ x: 28, y: 28 }}
          variants={cornerVariants}
          transition={{ delay: 0.75 }}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0%",
            width: "38%",
          }}
        />
      </motion.div>
    </section>
  );
}