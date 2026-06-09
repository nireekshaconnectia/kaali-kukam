// Hero.tsx
import maaKali from "@/assets/Maa_Kali_1.png";
import vectorKali from "@/assets/Vector-1.png";
import vectorKrsna from "@/assets/Vector-3.png";
import vectorAishwarya from "@/assets/Vector-2.png";
import vectorSwaha from "@/assets/Vector.png";

export function Hero() {

  return (
    <section
      className="relative overflow-hidden w-full  flex items-start justify-center"
      style={{ fontFamily: "'Mukta', serif", background: "#000" }}
    >
      <div
        style={{
          position: "relative",
          width: "min(95vw, 680px)",
          aspectRatio: "1 / 1",
          maxWidth: "100%",
        }}
      >
        {/* कृष्ण — top left */}
        <img
          src={vectorKrsna}
          alt="कृष्ण"
          style={{
            position: "absolute",
            top: "24%",
            left: "8%",
            width: "30%",
          }}
        />

        {/* काली — top right */}
        <img
          src={vectorKali}
          alt="काली"
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "38%",
          }}
        />

        {/* CENTER — Maa Kali */}
        <img
          src={maaKali}
          alt="माँ काली का दिव्य स्वरूप"
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
          }}
        />

        {/* ऐश्वराय — bottom left */}
        <img
          src={vectorAishwarya}
          alt="ऐश्वराय"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-6%",
            width: "44%",
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
          }}
        />
      </div>
    </section>
  );
}