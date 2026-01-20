import { X, Play, Plus, ThumbsUp, Heart, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    image: string;
    title: string;
    description: string;
    match?: number;
    duration?: string;
    tags?: string[];
  } | null;
}

const DetailModal = ({ isOpen, onClose, item }: DetailModalProps) => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setShowHearts(true), 500);
    } else {
      document.body.style.overflow = "auto";
      setShowHearts(false);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 my-8 bg-card rounded-lg overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>
        
        {/* Hero Image */}
        <div className="relative aspect-video">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Floating Hearts */}
          {showHearts && (
            <>
              <Heart className="absolute bottom-20 left-10 w-4 h-4 text-primary fill-primary animate-float-heart" style={{ animationDelay: "0s" }} />
              <Heart className="absolute bottom-32 left-20 w-3 h-3 text-primary fill-primary animate-float-heart" style={{ animationDelay: "0.5s" }} />
              <Heart className="absolute bottom-24 left-32 w-5 h-5 text-primary fill-primary animate-float-heart" style={{ animationDelay: "1s" }} />
              <Heart className="absolute bottom-16 right-20 w-4 h-4 text-primary fill-primary animate-float-heart" style={{ animationDelay: "1.5s" }} />
            </>
          )}
          
          {/* Play Button Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-3">
            <Button className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8 py-6 text-lg rounded">
              <Play className="w-6 h-6 mr-2 fill-current" />
              Reproducir
            </Button>
            <Button
              variant="outline"
              className="bg-muted/50 hover:bg-muted/70 text-foreground border-0 p-6 rounded"
            >
              <Plus className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className="bg-muted/50 hover:bg-muted/70 text-foreground border-0 p-6 rounded"
            >
              <ThumbsUp className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="md:col-span-2">
              {/* Match & Metadata */}
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="text-green-500 font-semibold text-lg">❤️ {item.match || 100}% Match</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2024
                </span>
                <span className="border border-muted-foreground/50 px-2 py-0.5 text-sm text-muted-foreground">18+</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.duration || "2h 14min"}
                </span>
                <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">4K Dolby Vision</span>
              </div>
              
              {/* Title */}
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {item.title}
              </h2>
              
              {/* Description */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                {item.description}
              </p>
              
              {/* Romantic Quote */}
              <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r">
                <p className="text-foreground/70 italic">
                  "Cada momento contigo es un capítulo que quiero releer infinitas veces."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-primary text-sm">Mensaje especial para Mel</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="space-y-4">
              <div>
                <span className="text-muted-foreground text-sm">Protagonistas: </span>
                <span className="text-foreground">Tú y Yo</span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Géneros: </span>
                <span className="text-foreground">
                  {(item.tags || ["Romance", "Drama", "Comedia", "Para siempre"]).join(", ")}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Este título es: </span>
                <span className="text-foreground">Emotivo, Romántico, Inspirador</span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Director: </span>
                <span className="text-foreground">El Destino y Mel Gibson</span>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Temporadas: </span>
                <span className="text-foreground">∞ (Infinitas)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
