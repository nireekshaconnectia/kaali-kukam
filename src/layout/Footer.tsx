import { useEffect, useRef } from "react";
import union from "@/assets/Union.png";
import trishul from "@/assets/trishul.png";

const cols = [
  ["मुख्यपृष्ठ", "परिचय", "दर्शन", "सेवाएं"],
  ["अनुसंधान", "शास्त्रीय", "आचारबिंदु", "संपर्क"],
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const trishulRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1, root: document.getElementById("scroll-container") }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;
    const handleScroll = () => {
      const el = trishulRef.current;
      const footer = footerRef.current;
      if (!el || !footer) return;
      const rect = footer.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      el.style.transform = `translateY(${progress * -24}px)`;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#F42903",
        color: "white",
      }}
    >
      <img
        ref={trishulRef}
        src={trishul}
        alt="त्रिशूल"
        loading="lazy"
        style={{
          transition: "transform 0.1s linear",
          pointerEvents: "none",
          position: "absolute",
          right: "1rem",
          top: "-4rem",
          height: "130%",
          width: "auto",
        }}
      />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "3.5rem 1.5rem", width: "100%", display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        <div>
          <img src={union} alt="Union" style={{ height: "5rem", width: "auto", marginTop: "0.5rem" }} />
          <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", lineHeight: "1.6", opacity: 0.85 }}>
            प्लॉट F1/149, सेक्टर 16, रोहिणी,<br />दिल्ली &nbsp; 110089
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", opacity: 0.85 }}>support@kalikulam.org</p>
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          {cols.map((col, i) => (
            <ul key={i} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              {col.map((l) => (
                <li key={l}><a href="#" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>{l}</a></li>
              ))}
            </ul>
          ))}
        </div>

        <div>
          <p style={{ marginBottom: "0.75rem", fontFamily: "var(--font-display)" }}>काली कुलम ज्ञान पत्रिका</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.4)", background: "rgba(0,0,0,0.2)", padding: "0.5rem 1rem" }}>
            <input type="email" placeholder="ईमेल" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "0.875rem", color: "white" }} />
            <button aria-label="सदस्यता लें" style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "rgba(255,255,255,0.9)", color: "#F42903", border: "none", cursor: "pointer", display: "grid", placeItems: "center" }}>→</button>
          </div>
        </div>
      </div>

      <div style={{ background: "#BD1C00", textAlign: "center", padding: "0.375rem", fontSize: "0.75rem" }}>
        © 2026 Kali Kulam. All rights reserved.
      </div>
    </footer>
  );
}
