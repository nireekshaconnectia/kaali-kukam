import { motion } from "framer-motion";
import dakshinaHands from "@/assets/dakshina-hands.png";
import vector from "@/assets/image.png";

// Animated gradient text component
const GradientText = ({ text, className }: { text: string; className?: string }) => (
  <motion.span
    className={`inline-block bg-linear-to-r from-[#EBB57C] via-[#F4A460] to-[#94622C] bg-clip-text text-transparent bg-300% ${className}`}
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    style={{ backgroundSize: "200% auto" }}
  >
    {text}
  </motion.span>
);

export function DakshinaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with parallax */}
      <motion.img
        src={dakshinaHands}
        alt="दक्षिणा अर्पण"
        width={1280}
        height={896}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-48"
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.48 }}
        viewport={{  amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Content with rich animations */}
      <motion.div
        className="relative mx-auto max-w-3xl px-6 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Subtitle with shine effect */}
        <motion.p
          className="font-body text-muted-foreground text-xl mb-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          कृतज्ञता का <GradientText text="अर्पण" />
        </motion.p>

        {/* Heading image with bounce */}
        <motion.img
          src={vector}
          alt="दक्षिणा"
          className="mx-auto mb-6 h-31.5"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut", type: "spring" }
            },
          }}
        />

        {/* CTA button with pulse */}
        <motion.button
          className="rounded-full border border-gold/60 bg-linear-to-b from-[#EBB57C] to-[#94622C] px-8 py-3 font-body text-muted-foreground transition-transform glow"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(235,181,124,0.5)" }}
          whileTap={{ scale: 0.97 }}
          animate={{ 
            boxShadow: [
              "0 0 0px rgba(235,181,124,0)",
              "0 0 15px rgba(235,181,124,0.4)",
              "0 0 0px rgba(235,181,124,0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          दक्षिणा प्रदान करें
        </motion.button>

        {/* Body text with word-by-word animation */}
        <motion.p
          className="mx-auto mt-10 max-w-8xl text-foreground leading-relaxed text-[20px]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.7, ease: "easeOut" }
            },
          }}
        >
          दक्षिणा केवल धन नहीं, यह श्रद्धा का वह प्रवाह है जो शिष्य से गुरु तक और गुरु से शक्ति तक पहुँचता है। भारतीय संस्कृति में दक्षिणा एक देवी का नाम है: यज्ञ की पत्नी। जहाँ दक्षिणा है, वहाँ यज्ञ पूर्ण है। जहाँ दक्षिणा नहीं, वहाँ साधना अधूरी है।
        </motion.p>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gold-soft/10 blur-xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gold-soft/5 blur-2xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </section>
  );
}