// Hero.tsx
import { useEffect, useRef, useState } from "react";
import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAnimatedOnce = useRef(false); // tracks if first animation has fired

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimatedOnce.current) {
            // First time: wait 8s (overlay has just closed)
            timerRef.current = setTimeout(() => {
              hasAnimatedOnce.current = true;
              setIsVisible(true);
            }, 8000);
          } else {
            // Subsequent scroll-backs: animate immediately
            setIsVisible(true);
          }
        } else {
          // Scrolled away — reset visibility, clear any pending timer
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full flex items-start pt-18 justify-center px-6 md:px-61.5"
      style={{ fontFamily: "'Mukta', serif", background: "#000" }}
    >
      <div
        style={{
          position: "relative",
          width: "min(325vw, 1080px)",
          aspectRatio: "1 / 1",
          maxWidth: "150%",
        }}
      >
        {/* कृष्ण — top left */}
        <img
          src={vectorKrsna}
          alt="कृष्ण"
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{
            position: "absolute",
            top: "24%",
            left: "8%",
            width: "30%",
            transitionDelay: isVisible ? "0ms" : "0ms",
          }}
        />

        {/* काली — top right */}
        <img
          src={vectorKali}
          alt="काली"
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "37%",
            transitionDelay: isVisible ? "100ms" : "0ms",
          }}
        />

        {/* CENTER — Maa Kali */}
        <img
          src={maaKali}
          alt="माँ काली का दिव्य स्वरूप"
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "52%",
            zIndex: 10,
            objectFit: "contain",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
            transitionDelay: isVisible ? "200ms" : "0ms",
          }}
        />

        {/* ऐश्वराय — bottom left */}
        <img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-6%",
            width: "44%",
            transitionDelay: isVisible ? "300ms" : "0ms",
          }}
        />

        {/* स्वाहा — bottom right */}
        <img
          src={vectorSwaha}
          alt="स्वाहा"
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0%",
            width: "38%",
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        />
      </div>
    </section>
  );
}