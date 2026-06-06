import { motion, AnimatePresence } from "framer-motion";

interface EntryOverlayProps {
  onEnter: () => void;
  visible: boolean;
}

export function EntryOverlay({ onEnter, visible }: EntryOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="entry-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
          {/* Subtle red glow ring */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 60px 20px rgba(180,0,0,0.18)",
                "0 0 120px 50px rgba(180,0,0,0.32)",
                "0 0 60px 20px rgba(180,0,0,0.18)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "1.5px solid rgba(200,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                width: 128,
                height: 128,
                borderRadius: "50%",
                border: "1px dashed rgba(200,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* OM symbol */}
              <span
                style={{
                  fontSize: 52,
                  color: "#cc2200",
                  fontFamily: "'Mukta', serif",
                  lineHeight: 1,
                  textShadow: "0 0 24px rgba(200,0,0,0.7)",
                }}
              >
                ॐ
              </span>
            </motion.div>
          </motion.div>

          {/* Site name — styled title block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
                fontFamily: "'Mukta', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(34px, 9vw, 58px)",
                margin: 0,
                padding: "6px 10px 6px",
                lineHeight: 1.3,
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
          </motion.div>

          {/* Tap to enter pulse */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              fontFamily: "'Mukta', serif",
              fontSize: "clamp(13px, 3vw, 16px)",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            ✦ &nbsp; Tap to Enter &nbsp; ✦
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
