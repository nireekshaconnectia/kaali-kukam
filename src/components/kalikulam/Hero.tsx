import { useEffect, useState } from "react";
import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  // Give the browser one frame to paint the hidden state, then trigger animations
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const base = "absolute";
  const transition = "transition-[opacity,transform,filter]";

  return (
    <section
      className="relative overflow-hidden w-full flex items-center justify-center"
      style={{
        minHeight: "clamp(320px, 60vw, 600px)",
        fontFamily: "'Noto Serif Devanagari', serif",
        background: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "clamp(300px, 80vw, 680px)",
          aspectRatio: "1.2 / 1",
        }}
      >
        {/* कृष्ण — top left */}
        <img
          src={vectorKrsna}
          alt="कृष्ण"
          className={`${base} ${transition} duration-900 ease-out`}
          style={{
            top: "20%", left: "0%", width: "40%",
            mixBlendMode: "screen", filter: "invert(1)",
            transitionDelay: "300ms",
            opacity: mounted ? 0.9 : 0,
            transform: mounted ? "translate(0,0)" : "translate(-28px,-28px)",
          }}
        />

        {/* काली — top right */}
        <img
          src={vectorKali}
          alt="काली"
          className={`${base} ${transition} duration-900 ease-out`}
          style={{
            top: "20%", right: "0%", width: "38%",
            mixBlendMode: "screen", filter: "invert(1)",
            transitionDelay: "450ms",
            opacity: mounted ? 0.9 : 0,
            transform: mounted ? "translate(0,0)" : "translate(28px,-28px)",
          }}
        />

        {/* ── CENTER — Maa Kali emerges from darkness ── */}
        <img
          src={maaKali}
          alt="माँ काली का दिव्य स्वरूप"
          className={`${base} ${transition} duration-1200`}
          style={{
            top: "50%", left: "50%",
            transform: mounted
              ? "translate(-50%,-50%) scale(1)"
              : "translate(-50%,-44%) scale(0.82)",
            width: "52%", zIndex: 10, objectFit: "contain",
            transitionDelay: "80ms",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            opacity: mounted ? 1 : 0,
            filter: mounted ? "brightness(1)" : "brightness(0)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
          }}
        />

        {/* ऐश्वराय — bottom left */}
        <img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          className={`${base} ${transition} duration-900 ease-out`}
          style={{
            bottom: "20%", left: "-6%", width: "44%",
            mixBlendMode: "screen", filter: "invert(1)",
            transitionDelay: "600ms",
            opacity: mounted ? 0.9 : 0,
            transform: mounted ? "translate(0,0)" : "translate(-28px,28px)",
          }}
        />

        {/* स्वाहा — bottom right */}
        <img
          src={vectorSwaha}
          alt="स्वाहा"
          className={`${base} ${transition} duration-900 ease-out`}
          style={{
            bottom: "20%", right: "0%", width: "38%",
            mixBlendMode: "screen", filter: "invert(1)",
            transitionDelay: "750ms",
            opacity: mounted ? 0.9 : 0,
            transform: mounted ? "translate(0,0)" : "translate(28px,28px)",
          }}
        />
      </div>
    </section>
  );
}
