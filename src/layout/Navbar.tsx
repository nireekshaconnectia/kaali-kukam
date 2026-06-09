// Navbar.tsx
import { useState, useEffect } from "react";
import LogoSrc from "@/assets/Logo-Mark.png";
import NavbarMantra from "@/assets/Navbar_Mantra.png";

const navLinks = ["मुख्यपृष्ठ", "परिचय", "सेवाएं", "सहयोग"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-background/30 backdrop-blur-sm "
      style={{ fontFamily: "'Mukta', serif" }}
    >
      <div className="bg-[#F42903] flex justify-center py-1.5">
        <img
          src={NavbarMantra}
          alt="ॐ कृष्ण काली शंकराय स्वाहा"
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      <nav className="mx-auto flex items-center justify-between px-6 md:px-60 py-3 md:py-15.25">
        <div className="hidden md:flex gap-15 flex-1">
          {navLinks.slice(0, 2).map((l, idx) => (
            <a
              key={l}
              href="#"
              className={`px-8 py-2 ${idx === 0 ? "text-crimson" : "text-foreground"} font-body text-xl hover:text-gold transition-colors`}
            >
              {l}
            </a>
          ))}
        </div>

        <img 
          src={LogoSrc} 
          alt="Kaali Kulam" 
          className="h-16 md:h-20 w-auto"
        />

        <div className="hidden md:flex gap-15 flex-1 justify-end">
          {navLinks.slice(2).map((l) => (
            <a
              key={l}
              href="#"
              className="px-8 py-2 text-foreground font-body text-xl hover:text-gold transition-colors"
            >
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

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={() => setOpen(false)}
              className={`font-body text-md font-semibold tracking-wide transition-colors hover:text-gold ${i === 0 ? "text-primary" : "text-foreground/80"}`}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}