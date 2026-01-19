import { useEffect, useRef, useState } from "react";

export default function LoveflixIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const beginExit = () => {
    // evita doble ejecución
    setExiting(true);
    // desmonta después del fade
    timers.current.push(
      window.setTimeout(() => setVisible(false), 700) // debe coincidir con CSS
    );
  };

  const tryPlay = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      a.pause();
      a.currentTime = 0;
      await a.play();
      setNeedsTap(false);
    } catch {
      // autoplay bloqueado
      setNeedsTap(true);
    }
  };

  useEffect(() => {
    const a = audioRef.current;

    // 1) Intentar reproducir audio
    tryPlay();

    // 2) Salida garantizada aunque el audio falle
    //    (ajusta este tiempo a tu gusto)
    timers.current.push(window.setTimeout(() => beginExit(), 4000));

    // 3) Si el audio termina antes, salimos en ese momento
    const onEnded = () => beginExit();
    a?.addEventListener("ended", onEnded);

    return () => {
      a?.removeEventListener("ended", onEnded);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Si ya no está visible, no renderizamos nada y tu app queda normal
  if (!visible) return null;

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-[9999] flex items-center justify-center bg-black",
          exiting ? "lfx-fadeout" : "opacity-100",
        ].join(" ")}
      >
        <div className="flex flex-col items-center gap-6">
          <img
            src="/intro/logo.svg"
            alt="Loveflix"
            className="w-[70vw] max-w-[520px] opacity-0 scale-95 lfx-logo-in drop-shadow-[0_0_38px_rgba(229,9,20,0.55)]"
            draggable={false}
          />

          {needsTap && (
            <button
              onClick={tryPlay}
              className="rounded-full px-5 py-2 text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition"
            >
              Toca para iniciar 🔊
            </button>
          )}
        </div>
      </div>

      <audio ref={audioRef} preload="auto" src="/intro/tadum-romantic.mp3" />
    </>
  );
}