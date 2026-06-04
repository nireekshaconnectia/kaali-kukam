import { useEffect, useRef } from "react";

/**
 * useBackgroundMusic
 * Autoplays background music on page load.
 * Handles browser autoplay policy — waits for first user interaction if blocked.
 * Works on iOS Safari, Android Chrome, and desktop browsers.
 */
export function useBackgroundMusic(src: string, volume = 0.35) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    // Create and configure audio element
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    // iOS Safari requires load() before play() will work
    audio.src = src;
    audio.load();
    audioRef.current = audio;

    const attemptPlay = () => {
      if (unlockedRef.current) return;
      audio
        .play()
        .then(() => {
          unlockedRef.current = true;
          removeListeners();
        })
        .catch(() => {
          // Still blocked — will retry on next interaction
        });
    };

    // iOS Safari: play() MUST be called synchronously inside a touch/click handler.
    // Using { passive: true } improves scroll performance on mobile.
    const handleInteraction = () => {
      if (unlockedRef.current) return;
      // Re-load on iOS in case the element stalled
      if (audio.readyState === 0) {
        audio.load();
      }
      attemptPlay();
    };

    const removeListeners = () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("touchend", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    // Try immediate autoplay first (works on desktop / Android with no autoplay block)
    audio
      .play()
      .then(() => {
        unlockedRef.current = true;
      })
      .catch(() => {
        // Autoplay blocked — arm interaction listeners
        // touchend fires slightly after touchstart and is more reliable for iOS play()
        window.addEventListener("touchstart", handleInteraction, { passive: true });
        window.addEventListener("touchend", handleInteraction, { passive: true });
        window.addEventListener("click", handleInteraction);
        window.addEventListener("keydown", handleInteraction);
      });

    return () => {
      removeListeners();
      audio.pause();
      audio.src = "";
    };
  }, [src, volume]);
}