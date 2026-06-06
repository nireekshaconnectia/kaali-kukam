import { useEffect, useRef, useCallback } from "react";

/**
 * useBackgroundMusic
 * Returns a `play()` function to start music on first user interaction.
 * Handles browser autoplay policy on iOS Safari, Android Chrome, and desktop.
 */
export function useBackgroundMusic(src: string, volume = 0.35) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    audio.src = src;
    audio.load();
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [src, volume]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || isPlayingRef.current) return;

    if (audio.readyState === 0) {
      audio.load();
    }

    audio
      .play()
      .then(() => {
        isPlayingRef.current = true;
      })
      .catch((err) => {
        console.log("Playback blocked:", err);
      });
  }, []);

  return { play };
}