import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoSrc from "@/assets/Logo-Mark.png";

const navLinks = ["मुख्यपृष्ठ", "परिचय", "सेवाएं", "सहयोग"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    // Navbar slides down from top on mount
    <motion.header
      className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60"
      style={{ fontFamily: "'Mukta', serif" }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
    >
      <div className="bg-[#F42903] text-primary-foreground text-center py-1.5 text-sm font-body">
        ‖ ॐ कृष्ण काली शंकराय स्वाहा ‖
      </div>

      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <div className="hidden md:flex gap-15 flex-1">
          {navLinks.slice(0, 2).map((l, idx) => (
            <a
              key={l}
              href="#"
              className={`px-8 py-2 ${idx === 0 ? "text-crimson" : "text-foreground"} font-body font-bold text-md hover:text-gold transition-colors`}
            >
              {l}
            </a>
          ))}
        </div>

        <img src={LogoSrc} alt="Kaali Kulam" className="h-16 md:h-20 w-auto" />

        <div className="hidden md:flex gap-15 flex-1 justify-end">
          {navLinks.slice(2).map((l) => (
            <a key={l} href="#" className="px-8 py-2 text-foreground font-body text-md hover:text-gold transition-colors font-bold">
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-4 p-2 rounded-md text-foreground/70 hover:text-primary transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer — slides down with staggered links */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l}
                href="#"
                onClick={() => setOpen(false)}
                className={`font-body text-base transition-colors hover:text-gold ${i < 2 ? "text-primary" : "text-foreground/70"}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
