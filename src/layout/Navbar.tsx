// Navbar.tsx
import { useState, useEffect, useRef } from "react";
import LogoSrc from "@/assets/Logo-Mark.png";
import NavbarMantra from "@/assets/Navbar_Mantra.png";

const navLinks = ["मुख्यपृष्ठ", "परिचय", "सेवाएं", "सहयोग"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("मुख्यपृष्ठ");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fade in after 8s on mount (overlay has just closed)
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 8000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{
        fontFamily: "'Mukta', serif",
        background: scrolled
          ? window.innerWidth >= 768
            ? "rgba(0,0,0,0.75)"  // desktop scrolled: semi-transparent
            : "rgba(0,0,0,0.95)"  // mobile scrolled: solid
          : "transparent",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 1000ms ease-out, transform 1000ms ease-out, background 300ms ease",
      }}
    >
      <div className="bg-[#F42903] flex justify-center py-1.5">
        <img
          src={NavbarMantra}
          alt="ॐ कृष्ण काली शंकराय स्वाहा"
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-51.5 py-3 md:py-10">
        {/* Desktop left links */}
        <div className="hidden md:flex gap-6 lg:gap-18 flex-1">
          {navLinks.slice(0, 2).map((l, idx) => (
            <a
              key={l}
              href="#"
              onClick={() => setActiveLink(l)}
              className={`px-4 lg:px-8 py-2 transition-colors whitespace-nowrap font-body text-base lg:text-xl hover:text-gold ${
                idx === 0 || activeLink === l
                  ? "text-[#F42903] font-bold"
                  : "text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <img
            src={LogoSrc}
            alt="Kaali Kulam"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Desktop right links */}
        <div className="hidden md:flex gap-6 lg:gap-15 flex-1 justify-end">
          {navLinks.slice(2).map((l) => (
            <a
              key={l}
              href="#"
              onClick={() => setActiveLink(l)}
              className={`px-4 lg:px-8 py-2 transition-colors whitespace-nowrap font-body text-base lg:text-xl hover:text-gold ${
                activeLink === l ? "text-[#F42903] font-bold" : "text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-2 p-2 rounded-md text-white hover:text-[#F42903] transition-colors z-50 relative"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <>
          <div className="fixed inset-0 md:hidden bg-black/80" style={{ zIndex: 45 }} onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-black shadow-2xl z-50 md:hidden animate-in slide-in-from-right flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-white" aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-5">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  onClick={() => { setActiveLink(l); setOpen(false); }}
                  className={`font-body text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeLink === l ? "text-[#F42903] bg-white/10 font-bold" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}