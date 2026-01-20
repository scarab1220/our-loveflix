import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

interface EasterEggModalProps {
  open: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
}

export default function EasterEggModal({
  open,
  onClose,
  message,
  title = "Para siempre",
}: EasterEggModalProps) {
  const fullText = useMemo(
    () =>
      message ??
      "Si llegaste hasta aquí… es porque eres tú y solamente tu.\n\nGracias por existir en mi vida. Eres mi lugar seguro, mi risa favorita, y la historia de mi vida.\n\nTe elijo hoy, mañana y siempre. ❤️",
    [message]
  );

  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!open) {
      setTyped("");
      return;
    }

    let i = 0;
    setTyped("");

    // typing: rápido pero romántico
    const tick = () => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i < fullText.length) {
        const ch = fullText[i - 1];
        const delay =
          ch === "\n" ? 220 : ch === "." || ch === "…" ? 120 : 22;
        window.setTimeout(tick, delay);
      }
    };

    const start = window.setTimeout(tick, 250);
    return () => window.clearTimeout(start);
  }, [open, fullText]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Contenido secreto"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="w-full max-w-2xl rounded-lg border border-white/10 bg-black/70 shadow-2xl lfx-tadum-mini"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="text-xs tracking-widest text-white/70">
            LOVEFLIX • CONTENIDO SECRETO
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/10 transition"
            aria-label="Cerrar"
            type="button"
          >
            <X className="h-5 w-5 text-white/80" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-3xl md:text-5xl font-semibold text-white mb-4">
            {title}
          </div>

          {/* typing */}
          <p className="whitespace-pre-line text-white/85 text-base md:text-lg leading-relaxed min-h-[220px]">
            {typed}
            <span className="lfx-caret" aria-hidden="true" />
          </p>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded bg-white text-black font-semibold hover:bg-white/90 transition"
              type="button"
            >
              Volver a OurFlix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}