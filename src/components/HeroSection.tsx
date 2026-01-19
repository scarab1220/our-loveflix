import { Play, Plus, Info, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onPlay: () => void;
}

const HeroSection = ({ onPlay }: HeroSectionProps) => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-32 md:pb-40 px-4 md:px-12">
        {/* Netflix-style badge */}
        <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
          <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <Heart className="w-3 h-3 fill-current" />
            SERIE ORIGINAL
          </span>
        </div>
        
        {/* Title */}
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          NUESTRA HISTORIA
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-foreground/90 mb-2 max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Una serie original basada en una historia real
        </p>
        
        {/* Match percentage */}
        <div 
          className="flex items-center gap-3 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-green-500 font-semibold">❤️ 100% Match</span>
          <span className="text-muted-foreground">2024</span>
          <span className="border border-muted-foreground/50 px-1 text-xs text-muted-foreground">16+</span>
          <span className="text-muted-foreground">Temporada ∞</span>
        </div>
        
        {/* Description */}
        <p 
          className="text-sm md:text-base text-foreground/80 mb-8 max-w-xl line-clamp-3 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Dos almas que se encontraron en el momento perfecto. Una historia de amor, 
          risas y aventuras que comenzó con una mirada y continúa escribiéndose cada día.
          Porque los finales felices existen... y el nuestro apenas comienza.
        </p>
        
        {/* Buttons */}
        <div 
          className="flex flex-wrap gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            onClick={onPlay}
            className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-6 py-6 text-lg rounded"
          >
            <Play className="w-6 h-6 mr-2 fill-current" />
            Reproducir
          </Button>
          
          <Button
            variant="outline"
            className="bg-muted/50 hover:bg-muted/70 text-foreground border-0 font-semibold px-6 py-6 text-lg rounded"
          >
            <Info className="w-6 h-6 mr-2" />
            Más información
          </Button>
          
          <Button
            variant="outline"
            className="bg-muted/50 hover:bg-muted/70 text-foreground border-0 font-semibold px-6 py-6 rounded"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Floating hearts animation */}
      <div className="absolute bottom-20 right-10 opacity-50">
        <Heart className="w-4 h-4 text-primary animate-float-heart" style={{ animationDelay: "0s" }} />
      </div>
      <div className="absolute bottom-32 right-20 opacity-40">
        <Heart className="w-3 h-3 text-primary animate-float-heart" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-16 right-32 opacity-30">
        <Heart className="w-5 h-5 text-primary animate-float-heart" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default HeroSection;
