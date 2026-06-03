import kaliFace from "@/assets/kali-face.jpg";

const wmBase: React.CSSProperties = {
  fontWeight: 300,
  letterSpacing: "0.08em",
  color: "transparent",
  WebkitTextStroke: "1px rgba(160, 140, 200, 0.35)",
  lineHeight: 1,
  whiteSpace: "nowrap",
};

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-black w-full flex items-end justify-center"
      style={{
        minHeight: "clamp(220px, 50vw, 480px)",
        fontFamily: "'Noto Serif Devanagari', serif",
      }}
    >
      {/* Watermark layer */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none z-1">
        <div className="flex gap-[5vw]">
          {["कृष्ण", "काली"].map((w) => (
            <span
              key={w}
              style={{ ...wmBase, fontSize: "max(3.5rem, 14vw)" }}
            >
              {w}
            </span>
          ))}
        </div>
        <div className="flex gap-[5vw]" style={{ marginTop: "-0.2em" }}>
          {["शंकर", "स्वाहा"].map((w) => (
            <span
              key={w}
              style={{
                ...wmBase,
                fontSize: "max(2.5rem, 10vw)",
                WebkitTextStroke: "1px rgba(160, 140, 200, 0.30)",
              }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Face image */}
      <div className="relative z-2 flex justify-center">
        <img
          src={kaliFace}
          alt="माँ काली का दिव्य स्वरूप"
          style={{
            width: "clamp(140px, 38vw, 280px)",
            aspectRatio: "1 / 1.1",
            objectFit: "cover",
            objectPosition: "top center",
            WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
            borderRadius: "0 0 50% 50%",
          }}
        />
      </div>
    </section>
  );
}