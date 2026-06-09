// EntryOverlay.tsx
import goddessImg from "@/assets/kaali_maa_tandav.png";

interface EntryOverlayProps {
  onEnter: () => void;
  visible: boolean;
}

export function EntryOverlay({ onEnter, visible }: EntryOverlayProps) {
  if (!visible) return null;

  return (
    <div
      onClick={onEnter}
      onTouchStart={onEnter}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "radial-gradient(ellipse at center, #1a0005 0%, #000 70%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Goddess + Smoke Ring */}
      <div
        style={{
          position: "relative",
          width: 260,
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        {/* Deep ambient pulse behind everything */}
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(160,0,0,0.35) 0%, rgba(100,0,0,0.12) 55%, transparent 75%)",
            pointerEvents: "none",
          }}
        />

        {/* Smoke layer 1 */}
        <div
          style={{
            position: "absolute",
            width: 256,
            height: 256,
            borderRadius: "50%",
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(120,0,0,0.22) 18%, rgba(180,20,0,0.38) 30%, transparent 42%, transparent 58%, rgba(100,0,0,0.18) 72%, rgba(160,10,0,0.32) 84%, transparent 100%)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />

        {/* Smoke layer 2 */}
        <div
          style={{
            position: "absolute",
            width: 232,
            height: 232,
            borderRadius: "50%",
            background:
              "conic-gradient(from 120deg, transparent 0%, rgba(80,0,0,0.15) 14%, rgba(200,30,0,0.28) 26%, transparent 38%, transparent 62%, rgba(140,0,0,0.2) 76%, rgba(190,20,0,0.3) 88%, transparent 100%)",
            filter: "blur(14px)",
            pointerEvents: "none",
          }}
        />

        {/* Smoke layer 3 */}
        <div
          style={{
            position: "absolute",
            width: 268,
            height: 268,
            borderRadius: "50%",
            background:
              "conic-gradient(from 240deg, transparent 0%, rgba(60,0,0,0.1) 10%, rgba(170,10,0,0.22) 22%, transparent 35%, transparent 65%, rgba(120,0,0,0.14) 80%, rgba(180,20,0,0.2) 92%, transparent 100%)",
            filter: "blur(18px)",
            pointerEvents: "none",
            opacity: 0.85,
          }}
        />

        {/* Thin ember ring */}
        <div
          style={{
            position: "absolute",
            width: 248,
            height: 248,
            borderRadius: "50%",
            border: "1px dashed rgba(200,60,0,0.18)",
            pointerEvents: "none",
          }}
        />

        {/* Goddess image */}
        <img
          src={goddessImg}
          style={{
            width: 220,
            height: 220,
            objectFit: "cover",
            objectPosition: "center center",
            position: "relative",
            zIndex: 2,
            mixBlendMode: "screen",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Site name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          marginBottom: 20,
        }}
      >
        {/* Decorative top line */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 36, height: 1, background: "linear-gradient(to right, transparent, rgba(200,80,0,0.7))" }} />
          <span style={{ fontSize: 11, color: "rgba(200,100,0,0.7)", letterSpacing: "0.35em", fontFamily: "'Mukta', serif" }}>॥ श्री ॥</span>
          <span style={{ display: "block", width: 36, height: 1, background: "linear-gradient(to left, transparent, rgba(200,80,0,0.7))" }} />
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: "'Mukta', serif",
            fontWeight: 700,
            fontSize: "clamp(34px, 9vw, 58px)",
            margin: 0,
            padding: "0 8px 4px",
            lineHeight: 1.2,
            display: "inline-block",
            background: "linear-gradient(160deg, #fff 10%, #e8c49a 45%, #cc3300 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0",
            filter: "drop-shadow(0 0 18px rgba(200,60,0,0.55))",
          }}
        >
          काली कुलम
        </h1>

        {/* Decorative bottom line */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 2 }}>
          <span style={{ display: "block", width: 50, height: 1, background: "linear-gradient(to right, transparent, rgba(200,80,0,0.5))" }} />
          <span style={{ fontSize: 9, color: "rgba(200,120,60,0.6)", letterSpacing: "0.4em", fontFamily: "'Mukta', serif", textTransform: "uppercase" }}>Kaali Kulam</span>
          <span style={{ display: "block", width: 50, height: 1, background: "linear-gradient(to left, transparent, rgba(200,80,0,0.5))" }} />
        </div>
      </div>

      {/* माँ के द्वार पर आएं */}
      <p
        style={{
          fontFamily: "'Yatra One', serif",
          fontSize: "clamp(14px, 3.5vw, 17px)",
          color: "rgba(235,181,124,0.85)",
          letterSpacing: "0.06em",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        माँ के द्वार पर आएं
      </p>

      {/* Bindi dot */}
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#f45b03",
          marginTop: 8,
        }}
      />

      {/* Whisper hint */}
      <p
        style={{
          fontFamily: "'Mukta', sans-serif",
          fontSize: "11px",
          color: "rgba(255,255,255,0.22)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginTop: 20,
        }}
      >
        tap anywhere
      </p>
    </div>
  );
}