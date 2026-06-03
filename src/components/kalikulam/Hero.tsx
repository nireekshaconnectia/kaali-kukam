import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden w-full flex items-center justify-center"
      style={{
        minHeight: "clamp(320px, 60vw, 600px)",
        fontFamily: "'Noto Serif Devanagari', serif",
        background: "#000",
      }}
    >
      {/* Entire composition wrapper — keeps all pieces relative to each other */}
      <div
        style={{
          position: "relative",
          width: "clamp(300px, 80vw, 680px)",
          aspectRatio: "1.2 / 1",
        }}
      >
        {/* ── TOP ROW ── */}

        {/* कृष्ण — top left */}
        <img
          src={vectorKrsna}
          alt="कृष्ण"
          style={{
            position: "absolute",
            top: "20%",
            left: "0%",
            width: "40%",
            mixBlendMode: "screen",
            filter: "invert(1)",
            opacity: 0.9,
          }}
        />

        {/* काली — top right */}
        <img
          src={vectorKali}
          alt="काली"
          style={{
            position: "absolute",
            top: "20%",
            right: "0%",
            width: "38%",
            mixBlendMode: "screen",
            filter: "invert(1)",
            opacity: 0.9,
          }}
        />

        {/* ── CENTER FACE ── */}
        <img
          src={maaKali}
          alt="माँ काली का दिव्य स्वरूप"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "52%",
            zIndex: 2,
            objectFit: "contain",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
          }}
        />

        {/* ── BOTTOM ROW ── */}

        {/* ऐश्वराय — bottom left */}
        <img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "0%",
            width: "44%",
            mixBlendMode: "screen",
            filter: "invert(1)",
            opacity: 0.9,
          }}
        />

        {/* स्वाहा — bottom right */}
        <img
          src={vectorSwaha}
          alt="स्वाहा"
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0%",
            width: "38%",
            mixBlendMode: "screen",
            filter: "invert(1)",
            opacity: 0.9,
          }}
        />
      </div>
    </section>
  );
}