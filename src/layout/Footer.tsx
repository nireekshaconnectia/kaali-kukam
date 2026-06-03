import { Logo } from "./Logo";
import trishul from "@/assets/trishul.png";

const cols = [
  ["मुख्यपृष्ठ", "परिचय", "दर्शन", "सेवाएं"],
  ["अनुसंधान", "शास्त्रीय", "आचारबिंदु", "संपर्क"],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={trishul}
        alt="त्रिशूल"
        width={512}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute -right-4 bottom-0 h-[115%] w-auto opacity-90 hidden sm:block"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-6 text-sm/relaxed text-primary-foreground/85">
            प्लॉट F1/149, सेक्टर 16, रोहिणी,<br />
            दिल्ली &nbsp; 110089
          </p>
          <p className="mt-2 text-sm text-primary-foreground/85">support@kalikulam.org</p>
        </div>

        <div className="flex gap-12">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-2 font-display text-sm">
              {col.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-gold-soft transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div>
          <p className="font-display mb-3">काली कुलम ज्ञान पत्रिका</p>
          <form className="flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/20 px-4 py-2">
            <input
              type="email"
              placeholder="ईमेल"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-primary-foreground/60"
            />
            <button
              type="submit"
              aria-label="सदस्यता लें"
              className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/90 text-primary"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/20 py-4 text-center text-xs text-primary-foreground/70">
        © 2026 Kali Kulam. All rights reserved.
      </div>
    </footer>
  );
}
