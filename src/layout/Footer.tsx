
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
  const dur = prefersReducedMotion ? 0 : 0.6;
  const yVal = prefersReducedMotion ? 0 : 20;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: yVal, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: dur, ease: "easeOut" as const } },
  };
  return (
    <motion.footer
      className="relative bg-[#F42903] text-primary-foreground"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Trishul Background - anchored to bottom of footer but aligned to grid */}
      <div className="absolute inset-0 mx-auto max-w-5xl pointer-events-none z-0">
        <img
          src={trishul}
          alt="त्रिशूल"
          loading="lazy"
          className="absolute -top-24 md:top-auto md:bottom-0 right-6 md:right-14 h-[80%] md:h-[140%] w-auto object-contain md:object-bottom object-top"
        />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-5xl flex-col md:flex-row justify-between gap-10 px-6 md:px-14 py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Col 1 — Logo + address */}
        <motion.div className="z-10 flex-1" variants={fadeUp}>
          <img src={union} alt="Union" className="h-20 w-auto mt-2" />
          <p className="mt-6 text-sm/relaxed text-primary-foreground/85">
            पता: F1/145, सेक्टर 16, रोहिणी,
            <br />
            दिल्ली - 110089
          </p>
          <p className="mt-2 text-sm text-primary-foreground/85">support@kalikulam.org</p>
        </motion.div>

        {/* Col 2 — Nav links and Newsletter */}
        <motion.div className="z-10 flex-[1.5] flex flex-col gap-10" variants={fadeUp}>
          <div className="flex gap-12 sm:gap-24">
            {cols.map((col, i) => (
              <ul key={i} className="space-y-2 font-display text-sm">
                {col.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div className="w-fit" variants={fadeUp}>
            <p className="font-display mb-3 text-white">काली कुलम ज्ञान पत्रिका</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-4 py-2"
            >
              <input
                type="email"
                placeholder="ईमेल"
                className="w-48 bg-transparent text-sm outline-none placeholder:text-primary-foreground/80 text-white"
              />
              <button
                type="submit"
                aria-label="सदस्यता लें"
                className="grid place-items-center text-white font-black text-xl transition-transform hover:scale-110"
              >
                →
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#BD1C00] text-primary-foreground py-1.5 text-center text-md relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: dur, ease: "easeOut" as const }}
      >
        © 2026 Kali Kulam. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
