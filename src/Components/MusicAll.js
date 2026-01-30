import { useEffect, useRef } from "react";
import music from "../Assets/music.mp3";

export default function MusicAll() {
  const audioRef = useRef(null);
  const hasSeeked = useRef(false);
  const hasStarted = useRef(false);

  const LOOP_START = 25;
  const LOOP_END = 230;

  // loop segment
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= LOOP_END) {
        audio.currentTime = LOOP_START;
        audio.play();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // start music on user interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const startMusic = () => {
      if (hasStarted.current) return;

      if (!hasSeeked.current) {
        audio.currentTime = LOOP_START;
        hasSeeked.current = true;
      }

      audio.play().catch(() => {});
      hasStarted.current = true;

      // remove listeners after first play
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    // listeners
    window.addEventListener("click", startMusic);
    window.addEventListener("keydown", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={music} preload="auto" />;
}
