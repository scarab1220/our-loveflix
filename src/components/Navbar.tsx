import { useState, useEffect } from "react";
import { Search, Bell, Heart } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background" : "netflix-gradient-navbar"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="font-display text-3xl md:text-4xl text-primary tracking-wider flex items-center gap-2">
            <Heart className="w-8 h-8 fill-primary animate-pulse-heart" />
            OurFlix
          </h1>
          
          {/* Navigation Links - Hidden on mobile */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li className="text-foreground font-medium hover:text-muted-foreground transition-colors cursor-pointer">
              Inicio
            </li>
            <li className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Momentos
            </li>
            <li className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Viajes
            </li>
            <li className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Episodios
            </li>
            <li className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Mi Lista
            </li>
          </ul>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
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
