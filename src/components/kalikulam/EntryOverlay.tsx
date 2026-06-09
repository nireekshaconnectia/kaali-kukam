// EntryOverlay.tsx
import { useEffect, useRef, useState } from "react";

interface EntryOverlayProps {
  onEnter: () => void;
  visible: boolean;
}

export function EntryOverlay({ onEnter, visible }: EntryOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showTapText, setShowTapText] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (visible && videoRef.current) {
      // Play video when overlay becomes visible
      videoRef.current.play().catch((err) => {
        // Auto-play policies might block playback; we can ignore or handle silently
        console.log("Video autoplay prevented:", err);
      });
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      // Enable clicking and show tap text after 8 seconds
      const timer = setTimeout(() => {
        setShowTapText(true);
        setIsClickable(true);
      }, 8000);

      return () => clearTimeout(timer);
    } else {
      setShowTapText(false);
      setIsClickable(false);
    }
  }, [visible]);

  const handleClick = () => {
    if (isClickable) {
      onEnter();
    }
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleClick}
      onTouchStart={handleClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        cursor: isClickable ? "pointer" : "",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Full-screen video background */}
      <video
        ref={videoRef}
        src="/assets/1080x1080-Social Media Square.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          maxHeight: "100vh",
          transform: "translate(-50%, -50%)",
          objectFit: "contain",
        }}
      />

      {/* Optional overlay text to indicate click action */}
      {showTapText && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Mukta', sans-serif",
            fontSize: "14px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "8px 16px",
            width: "fit-content",
            margin: "0 auto",
            borderRadius: 30,
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          tap to enter
        </div>
      )}
    </div>
  );
}
