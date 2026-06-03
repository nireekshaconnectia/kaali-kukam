import { Logo } from "./Logo";

const navLinks = ["मुख्यपृष्ठ", "परिचय", "सेवाएं", "सहयोग"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm tracking-widest font-display">
        ॐ क्रीं काली कुलेश्वराय स्वाहा
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="hidden md:flex gap-8 flex-1">
          {navLinks.slice(0, 2).map((l) => (
            <a key={l} href="#" className="text-primary font-display text-sm hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </div>
        <Logo />
        <div className="hidden md:flex gap-8 flex-1 justify-end">
          {navLinks.slice(2).map((l) => (
            <a key={l} href="#" className="text-foreground/70 font-display text-sm hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
