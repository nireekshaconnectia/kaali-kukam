import { useEffect, useRef } from "react";

/**
 * useBackgroundMusic
 * Autoplays background music on page load.
 * Handles browser autoplay policy — waits for first user interaction if blocked.
 * Works on iOS Safari, Android Chrome, and desktop browsers.
 */
export function useBackgroundMusic(src: string, volume = 0.35) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    audio.src = src;
    audio.load();
    audioRef.current = audio;

    const startPlayback = () => {
      if (isPlayingRef.current) return;
      
      // For iOS: need to reload if audio element is stalled
      if (audio.readyState === 0) {
        audio.load();
      }
      
      audio.play()
        .then(() => {
          isPlayingRef.current = true;
          // Remove listeners once playing
          removeListeners();
        })
        .catch((err) => {
          console.log("Playback still blocked:", err);
        });
    };

    const removeListeners = () => {
      document.removeEventListener("touchstart", startPlayback);
      document.removeEventListener("click", startPlayback);
      document.removeEventListener("keydown", startPlayback);
    };

    // Try to play immediately (might work on desktop)
    audio.play()
      .then(() => {
        isPlayingRef.current = true;
      })
      .catch(() => {
        // Autoplay blocked - wait for user interaction on the ENTIRE document
        document.addEventListener("touchstart", startPlayback, { once: false });
        document.addEventListener("click", startPlayback, { once: false });
        document.addEventListener("keydown", startPlayback, { once: false });
      });

    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [src, volume]);
}