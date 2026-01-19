import { useState, useEffect, useRef } from "react";
import { Search, Bell, Heart, X } from "lucide-react";
import { toast } from "sonner";

interface NavbarProps {
  onSecretUnlocked?: (code: string) => void;
}

const SECRET_WORDS = ["melissa", "meli", "oscar", "mel"]; // cámbialas
const SECRET_SEQUENCE = "LOVE";

const Navbar = ({ onSecretUnlocked }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  // Search UI
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Key sequence
  const seqRef = useRef("");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const normalize = (s: string) =>
    s.toLowerCase().replace(/\s+/g, "").trim();

  const triggerUnlock = (code: string) => {
    toast("Contenido desbloqueado 💖", {
      description: "Encontraste el secreto de OurFlix.",
    });
    onSecretUnlocked?.(code);
    // opcional: cerrar search
    setSearchOpen(false);
    setQuery("");
  };

  // Search open focus
  useEffect(() => {
    if (!searchOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [searchOpen]);

  // Global key sequence (L O V E)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // no capturar si estás escribiendo en un input/textarea
      const target = e.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        (target as any)?.isContentEditable;

      if (isTyping) return;

      const ch = e.key.length === 1 ? e.key.toUpperCase() : "";
      if (!ch) return;

      seqRef.current = (seqRef.current + ch).slice(-SECRET_SEQUENCE.length);
      if (seqRef.current === SECRET_SEQUENCE) {
        seqRef.current = "";
        triggerUnlock("LOVE");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = () => {
    const q = normalize(query);
    if (!q) return;

    // palabra secreta
    if (SECRET_WORDS.includes(q)) {
      triggerUnlock(q);
      return;
    }

    toast("No hay resultados 😅", {
      description: "Intenta otra palabra…",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background" : "netflix-gradient-navbar"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToId("inicio")}
            className="font-display text-3xl md:text-4xl text-primary tracking-wider flex items-center gap-2"
            aria-label="Ir a inicio"
            type="button"
          >
            <Heart className="w-8 h-8 fill-primary animate-pulse-heart" />
            OurFlix
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <button
                onClick={() => scrollToId("inicio")}
                className="text-foreground font-medium hover:text-muted-foreground transition-colors cursor-pointer"
                type="button"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("momentos")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                type="button"
              >
                Momentos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("viajes")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                type="button"
              >
                Viajes
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("episodios")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                type="button"
              >
                Episodios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("mi-lista")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                type="button"
              >
                Mi Lista
              </button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="cursor-pointer"
              aria-label="Buscar"
              type="button"
            >
              <Search className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 mt-3 w-[260px] rounded-md border border-white/10 bg-black/80 backdrop-blur-md p-2 shadow-2xl">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-white/70" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearchSubmit();
                      if (e.key === "Escape") {
                        setSearchOpen(false);
                        setQuery("");
                      }
                    }}
                    placeholder="Buscar..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="p-1 rounded hover:bg-white/10"
                    aria-label="Cerrar búsqueda"
                    type="button"
                  >
                    <X className="w-4 h-4 text-white/70" />
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-white/50">
                    Tip: escribe una palabra… 😉
                  </span>
                  <button
                    onClick={handleSearchSubmit}
                    className="text-[11px] px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white/80"
                    type="button"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            )}
          </div>

          <Bell className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />

          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;