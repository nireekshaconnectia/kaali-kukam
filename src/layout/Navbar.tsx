// Navbar.tsx
import { useState, useEffect } from "react";
import LogoSrc from "@/assets/Logo-Mark.png";
import NavbarMantra from "@/assets/Navbar_Mantra.png";

const navLinks = [
  { name: "मुख्यपृष्ठ", href: "/" },
  { name: "परिचय", href: "/about" },
  { name: "सेवाएं", href: "/services" },
  { name: "सहयोग", href: "/support" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
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
      className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm"
      style={{ fontFamily: "'Mukta', serif" }}
    >
      {/* Top Mantra Bar */}
      <div className="bg-[#F42903] flex justify-center py-1.5">
        <img
          src={NavbarMantra}
          alt="ॐ कृष्ण काली शंकराय स्वाहा"
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4">
        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-6 lg:gap-10 xl:gap-18 flex-1">
          {navLinks.slice(0, 2).map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 lg:px-8 py-2 ${
                idx === 0 ? "text-crimson" : "text-foreground"
              } font-body text-base lg:text-xl hover:text-gold transition-colors whitespace-nowrap`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo - Centered on mobile, left-aligned on desktop but visually centered */}
        <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <img 
            src={LogoSrc} 
            alt="Kaali Kulam" 
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-6 lg:gap-10 xl:gap-15 flex-1 justify-end">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 lg:px-8 py-2 text-foreground font-body text-base lg:text-xl hover:text-gold transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button - Mobile only */}
        <button
          className="md:hidden p-2 rounded-md text-foreground/70 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
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
      </div>

      {/* Mobile Menu - Full width overlay from below navbar */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/98 backdrop-blur-lg border-t border-border/60 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-112px)] overflow-y-auto">
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                    i === 0 
                      ? "text-crimson bg-crimson/5 font-semibold" 
                      : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                  } hover:translate-x-1`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}