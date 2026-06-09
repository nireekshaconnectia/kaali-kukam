// Navbar.tsx
import { useState, useEffect } from "react";
import LogoSrc from "@/assets/Logo-Mark.png";
import NavbarMantra from "@/assets/Navbar_Mantra.png";

const navLinks = ["मुख्यपृष्ठ", "परिचय", "सेवाएं", "सहयोग"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("मुख्यपृष्ठ"); // Track active link

  // Close menu when window is resized to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black md:bg-background md:backdrop-blur-sm"
      style={{ fontFamily: "'Mukta', serif" }}
    >
      <div className="bg-[#F42903] flex justify-center py-1.5">
        <img
          src={NavbarMantra}
          alt="ॐ कृष्ण काली शंकराय स्वाहा"
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-51.5 py-10 md:pt-15.25">
        {/* Desktop left links - hidden on mobile */}
        <div className="hidden md:flex gap-6 lg:gap-18 flex-1">
          {navLinks.slice(0, 2).map((l, idx) => (
            <a
              key={l}
              href="#"
              onClick={() => setActiveLink(l)}
              className={`px-4 lg:px-8 py-2 ${
                idx === 0 || activeLink === l ? "text-[#F42903] font-bold" : "text-foreground"
              } font-body text-base lg:text-xl hover:text-gold transition-colors whitespace-nowrap`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Logo - centered on mobile, left aligned on desktop */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <img
            src={LogoSrc}
            alt="Kaali Kulam"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Desktop right links - hidden on mobile */}
        <div className="hidden md:flex gap-6 lg:gap-15 flex-1 justify-end">
          {navLinks.slice(2).map((l) => (
            <a
              key={l}
              href="#"
              onClick={() => setActiveLink(l)}
              className={`px-4 lg:px-8 py-2 ${
                activeLink === l ? "text-[#F42903] font-bold" : "text-foreground"
              } font-body text-base lg:text-xl hover:text-gold transition-colors whitespace-nowrap`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger button - visible only on mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded-md text-foreground/70 hover:text-primary transition-colors z-50 relative"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay - solid black background, no transparency */}
      {open && (
        <>
          {/* Backdrop overlay - solid black */}
          <div
            className="fixed inset-0 md:hidden"
            style={{ zIndex: 45 }}
            onClick={() => setOpen(false)}
          />

          {/* Slide-in menu from right - solid black, no backdrop blur */}
          <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-black shadow-2xl z-50 md:hidden animate-in slide-in-from-right flex flex-col">
            {/* Menu header with logo */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-2 p-5">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  onClick={() => {
                    setActiveLink(l);
                    setOpen(false);
                  }}
                  className={`font-body text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeLink === l
                      ? "text-[#F42903] bg-white/10 font-extrabold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
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