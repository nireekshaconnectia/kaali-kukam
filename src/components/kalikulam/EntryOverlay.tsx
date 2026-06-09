// EntryOverlay.tsx
import { useEffect, useRef } from "react";

interface EntryOverlayProps {
  onEnter: () => void;
  visible: boolean;
}

export function EntryOverlay({ onEnter, visible }: EntryOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (visible && videoRef.current) {
      // Play video when overlay becomes visible
      videoRef.current.play().catch((err) => {
        // Auto-play policies might block playback; we can ignore or handle silently
        console.log("Video autoplay prevented:", err);
      });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      onClick={onEnter}
      onTouchStart={onEnter}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        cursor: "pointer",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Full-screen video background */}
      <video
        ref={videoRef}
        src="/assets/1080x1080-Social Media Square.mp4" // Replace with your actual video path
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      />

      {/* Optional overlay text to indicate click action */}
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
          pointerEvents: "none", // So text doesn't interfere with click
        }}
      >
        tap to enter
      </div>
    </div>
  );
}