import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useIsMobile } from "../../hooks/use-mobile";

const smoothEasing = [0.25, 0.46, 0.45, 0.94] as const;

// Each calligraphy corner flies in from its diagonal corner
const cornerVariants = {
  hidden: (dir: { x: number; y: number }) => ({
    opacity: 0,
    x: dir.x,
    y: dir.y,
    scale: 0.8,
  }),
  visible: {
    opacity: 0.9,
    x: 0,
    y: 0,
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: smoothEasing,
    },
  },
};

// Center Kali: emerges from darkness — scale + brightness
const centerVariants = {
  hidden: { opacity: 0, scale: 0.7, filter: "brightness(0)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: { 
      duration: 1.6, 
      ease: smoothEasing, 
      delay: 0.2 
    },
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
      {/* Background pulse animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={prefersReducedMotion ? {} : {
          background: [
            "radial-gradient(circle at center, rgba(200,0,0,0) 0%, rgba(0,0,0,0) 100%)",
            "radial-gradient(circle at center, rgba(200,0,0,0.05) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at center, rgba(200,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={isReady ? "visible" : "hidden"}
        transition={prefersReducedMotion ? { duration: 0 } : undefined}
        style={{
          position: "relative",
          width: "clamp(300px, 95vw, 680px)",
          height: isMobile ? "clamp(400px, 70vh, 500px)" : "clamp(360px, 85vh, 580px)",
        }}
      >
        {/* कृष्ण — top left */}
        <motion.img
          src={vectorKrsna}
          alt="कृष्ण"
          custom={{ x: -35, y: -35 }}
          variants={cornerVariants}
          transition={{ delay: 0.3 }}
          style={{
            position: "absolute",
            top: "24%",
            left: "0%",
            width: "30%",
          }}
          whileHover={{ scale: 1.05, rotate: -5 }}
        />

        {/* काली — top right */}
        <motion.img
          src={vectorKali}
          alt="काली"
          custom={{ x: 35, y: -35 }}
          variants={cornerVariants}
          transition={{ delay: 0.45 }}
          style={{
            position: "absolute",
            top: "20%",
            right: "0%",
            width: "38%",
          }}
          whileHover={{ scale: 1.05, rotate: 5 }}
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
          animate={prefersReducedMotion ? {} : {
            filter: [
              "drop-shadow(0 0 10px rgba(200,0,0,0.3)) brightness(1)",
              "drop-shadow(0 0 25px rgba(200,0,0,0.6)) brightness(1.05)",
              "drop-shadow(0 0 10px rgba(200,0,0,0.3)) brightness(1)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ऐश्वराय — bottom left */}
        <motion.img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          custom={{ x: -35, y: 35 }}
          variants={cornerVariants}
          transition={{ delay: 0.6 }}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-6%",
            width: "44%",
          }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        />

        {/* स्वाहा — bottom right */}
        <motion.img
          src={vectorSwaha}
          alt="स्वाहा"
          custom={{ x: 35, y: 35 }}
          variants={cornerVariants}
          transition={{ delay: 0.75 }}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0%",
            width: "38%",
          }}
          whileHover={{ scale: 1.05, rotate: -3 }}
        />
      </motion.div>
    </section>
  );
}