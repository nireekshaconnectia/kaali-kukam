// DakshinaSection.tsx
import { motion } from "framer-motion";
import dakshinaHands from "@/assets/dakshina-hands.png";
import vector from "@/assets/image.png";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Pure CSS animated gradient — no Framer Motion needed for this
const GradientText = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-block bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] bg-clip-text text-transparent ${className}`}
    style={{
      backgroundSize: "200% auto",
      animation: "gradientShift 6s linear infinite",
    }}
  >
    {text}
  </span>
);

export function DakshinaSection() {
  const prefersReducedMotion = useReducedMotion();
  const dur = prefersReducedMotion ? 0 : 0.6;
  const yVal = prefersReducedMotion ? 0 : 20;

  const fadeUp = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: yVal },
    visible: { opacity: 1, y: 0, transition: { duration: dur, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* Inject CSS animation once — no JS loop */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-animate { animation: none !important; }
        }
      `}</style>

      <section className="relative overflow-hidden">
        {/* Background image: fade + subtle scale on enter */}
        <motion.img
          src={dakshinaHands}
          alt="दक्षिणा अर्पण"
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-48"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.06 }}
          whileInView={{ opacity: 0.48, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: "easeOut" }}
        />

        {/* Content — staggered fade-up children */}
        <motion.div
          className="relative mx-auto max-w-3xl px-3 py-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
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
            variants={fadeUp}
          />

          {/* Button: whileHover glow only — no infinite pulse */}
          <motion.button
            className="rounded-full border border-gold/60 bg-linear-to-tr from-[#EBB57C] to-[#94622C] px-10 py-3 font-body text-muted-foreground glow text-3xl mb-10"
            variants={fadeUp}
            whileHover={
              prefersReducedMotion
                ? {}
                : { scale: 1.06, boxShadow: "0 0 24px rgba(235,181,124,0.45)" }
            }
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
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
