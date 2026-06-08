import { motion } from "framer-motion";
import union from "@/assets/Union.png";
import trishul from "@/assets/trishul.png";
import { useReducedMotion } from "../hooks/useReducedMotion";

const cols = [
  ["मुख्यपृष्ठ", "परिचय", "दर्शन", "सेवाएं"],
  ["अनुसंधान", "सहयोग", "आचार्यवाणी", "संपर्क"],
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const smoothEasing = [0.25, 0.46, 0.45, 0.94] as const;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.7, ease: smoothEasing } 
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: smoothEasing } 
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: smoothEasing } 
    },
  };

  return (
    <motion.footer
      className="relative bg-[#F42903] text-primary-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Trishul Background - animated */}
      <motion.div 
        className="absolute inset-0 mx-auto max-w-5xl pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.img
          src={trishul}
          alt="त्रिशूल"
          loading="lazy"
          className="absolute -top-24 md:top-auto md:bottom-0 right-6 md:right-14 h-[80%] md:h-[140%] w-auto object-contain md:object-bottom object-top"
          animate={prefersReducedMotion ? {} : {
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="relative mx-auto flex max-w-5xl flex-col md:flex-row justify-between gap-10 px-6 md:px-14 py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Col 1 — Logo + address */}
        <motion.div className="z-10 flex-1" variants={slideInLeft}>
          <motion.img 
            src={union} 
            alt="Union" 
            className="h-20 w-auto mt-2"
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p 
            className="mt-6 text-sm/relaxed text-primary-foreground/85"
            variants={fadeUp}
          >
            पता: F1/145, सेक्टर 16, रोहिणी,
            <br />
            दिल्ली - 110089
          </motion.p>
          <motion.p 
            className="mt-2 text-sm text-primary-foreground/85"
            variants={fadeUp}
          >
            support@kalikulam.org
          </motion.p>
        </motion.div>

        {/* Col 2 — Nav links and Newsletter */}
        <motion.div className="z-10 flex-[1.5] flex flex-col gap-10" variants={slideInRight}>
          <div className="flex gap-12 sm:gap-24">
            {cols.map((col, i) => (
              <motion.ul key={i} className="space-y-2 font-display text-sm" variants={fadeUp}>
                {col.map((l, idx) => (
                  <motion.li 
                    key={l}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <motion.a 
                      href="#" 
                      className="hover:text-amber-200 transition-colors duration-200 inline-block"
                      whileHover={{ x: 5, color: "#fbbf24" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {l}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div 
            className="w-fit" 
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="font-display mb-3 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              काली कुलम ज्ञान पत्रिका
            </motion.p>
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-4 py-2"
              whileHover={{ borderColor: "#fbbf24", boxShadow: "0 0 10px rgba(251,191,36,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="ईमेल"
                className="w-48 bg-transparent text-sm outline-none placeholder:text-primary-foreground/80 text-white"
              />
              <motion.button
                type="submit"
                aria-label="सदस्यता लें"
                className="grid place-items-center text-white font-black text-xl transition-transform"
                whileHover={{ x: 5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-[#BD1C00] text-primary-foreground py-1.5 text-center text-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: smoothEasing, delay: 0.2 }}
      >
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          © 2026 Kali Kulam. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}