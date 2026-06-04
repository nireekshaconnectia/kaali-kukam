import { useEffect, useRef } from "react";

/**
 * useBackgroundMusic
 * Autoplays background music on page load.
 * Handles browser autoplay policy — waits for first user interaction if blocked.
 */
export function useBackgroundMusic(src: string, volume = 0.35) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const tryPlay = () => {
      audio.play().catch(() => {
        // Browser blocked autoplay — wait for first interaction
        const unlock = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", unlock);
          window.removeEventListener("touchstart", unlock);
          window.removeEventListener("keydown", unlock);
        };
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
      });
    };

    tryPlay();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [src, volume]);
}
