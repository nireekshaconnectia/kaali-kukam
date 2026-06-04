import union from "@/assets/Union.png";
import trishul from "@/assets/trishul.png";

const cols = [
  ["मुख्यपृष्ठ", "परिचय", "दर्शन", "सेवाएं"],
  ["अनुसंधान", "शास्त्रीय", "आचारबिंदु", "संपर्क"],
];

export function Footer() {
  return (
    <footer className="relative bg-[#F42903] text-primary-foreground">
      {/* Trishul — always visible, repositioned per breakpoint */}
      <img
    src={trishul}
    alt="त्रिशूल"
    loading="lazy"
    className="pointer-events-none absolute right-4 -top-16 md:-top-20 h-[80%] md:h-[130%] w-auto"
  />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Col 1 — Logo + address */}
        <div>
          <img src={union} alt="Union" className="h-20 w-auto mt-2" />
          <p className="mt-6 text-sm/relaxed text-primary-foreground/85">
            प्लॉट F1/149, सेक्टर 16, रोहिणी,
            <br />
            दिल्ली &nbsp; 110089
          </p>
          <p className="mt-2 text-sm text-primary-foreground/85">
            support@kalikulam.org
          </p>
        </div>

        {/* Col 2 — Nav links */}
        <div className="flex gap-12">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-2 font-display text-sm">
              {col.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="hover:text-gold-soft transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Col 3 — Newsletter */}
        <div className="sm:col-span-2 md:col-span-1">
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

        <div className="bg-[#BD1C00] text-primary-foreground py-1.5 text-center text-xs">
          © 2026 Kali Kulam. All rights reserved.
        </div>
    </footer>
  );
}
