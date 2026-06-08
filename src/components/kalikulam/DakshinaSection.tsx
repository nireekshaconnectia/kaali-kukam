// DakshinaSection.tsx
import { motion } from "framer-motion";
import dakshinaHands from "@/assets/dakshina-hands.png";
import vector from "@/assets/image.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const GradientText = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-block bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] bg-clip-text text-transparent ${className}`}
    style={{
      backgroundSize: "200% auto",
      animation: "gradientShift 8s linear infinite",
    }}
  >
    {text}
  </span>
);

export function DakshinaSection() {
  const prefersReducedMotion = useReducedMotion();
  const smoothEasing = [0.25, 0.46, 0.45, 0.94] as const;

  const bgTransition = prefersReducedMotion
    ? { duration: 1.5, ease: smoothEasing }
    : {
        default: { duration: 1.5, ease: smoothEasing },
        opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
      };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: smoothEasing } 
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: smoothEasing } 
    },
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.02); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-animate, .pulse-animate, .float-animate { animation: none !important; }
        }
      `}</style>

      <section className="relative overflow-hidden">
        {/* Background image with gentle pulse */}
        <motion.img
          src={dakshinaHands}
          alt="दक्षिणा अर्पण"
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.48, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          animate={prefersReducedMotion ? {} : { opacity: [0.45, 0.52, 0.45] }}
          transition={bgTransition}
        />

        {/* Content — staggered fade-up children */}
        <motion.div
          className="relative mx-auto max-w-5xl px-6 md:px-14 py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p
            className="font-body text-muted-foreground text-xl mb-1"
            variants={fadeUp}
          >
            कृतज्ञता का <GradientText text="अर्पण" />
          </motion.p>

          <motion.img
            src={vector}
            alt="दक्षिणा"
            className="mx-auto mb-6 h-31.5"
            variants={scaleIn}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />

          {/* Button with enhanced animations */}
          <motion.button
            className="rounded-full border border-gold/60 bg-linear-to-tr from-[#EBB57C] to-[#94622C] px-10 py-3 font-body text-muted-foreground glow text-3xl mb-10 relative overflow-hidden group"
            variants={fadeUp}
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.05, boxShadow: "0 0 30px rgba(235,181,124,0.6)" }
            }
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: smoothEasing }}
          >
            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ width: "100%", height: "100%" }}
            />
            दक्षिणा प्रदान करें
          </motion.button>

          <motion.p
            className="mx-auto mt-10 max-w-8xl text-foreground leading-relaxed text-[20px]"
            variants={fadeUp}
          >
            दक्षिणा केवल धन नहीं, यह श्रद्धा का वह प्रवाह है जो शिष्य से गुरु तक
            और गुरु से शक्ति तक पहुँचता है। भारतीय संस्कृति में दक्षिणा एक देवी
            का नाम है: यज्ञ की पत्नी। जहाँ दक्षिणा है, वहाँ यज्ञ पूर्ण है। जहाँ
            दक्षिणा नहीं, वहाँ साधना अधूरी है।
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}