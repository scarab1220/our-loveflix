import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown, Heart } from "lucide-react";

interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  match?: number;
  duration?: string;
  tags?: string[];
  hiddenMessage?: string;
  onClick: () => void;
}

const ContentCard = ({
  image,
  title,
  description,
  match = 100,
  duration = "45 min",
  tags = ["Romance"],
  hiddenMessage,
  onClick,
}: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[240px] md:w-[280px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Base Card */}
      <div 
        className={`relative rounded overflow-hidden transition-all duration-300 ${
          isHovered ? "scale-110 z-20 shadow-hover" : "scale-100 z-10"
        }`}
      >
        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Hover Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          
          {/* Play icon on hover */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center hover:bg-foreground transition-colors">
              <Play className="w-5 h-5 text-background fill-background ml-1" />
            </div>
          </div>
          
          {/* Hidden romantic message */}
          {hiddenMessage && (
            <div 
              className={`absolute top-2 left-2 right-2 text-xs text-primary bg-background/80 px-2 py-1 rounded transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <Heart className="w-3 h-3 inline mr-1 fill-primary" />
              {hiddenMessage}
            </div>
          )}
        </div>
        
        {/* Expanded Info on Hover */}
        <div 
          className={`absolute left-0 right-0 bg-card rounded-b p-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ top: "100%" }}
        >
          {/* Action buttons */}
          <div className="flex items-center gap-2 mb-3">
            <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors">
              <Play className="w-4 h-4 text-background fill-background ml-0.5" />
            </button>
            <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors">
              <Plus className="w-4 h-4 text-foreground" />
            </button>
            <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors">
              <ThumbsUp className="w-4 h-4 text-foreground" />
            </button>
            <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors ml-auto">
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
          </div>
          
          {/* Match & Duration */}
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="text-green-500 font-semibold">❤️ {match}% Match</span>
            <span className="border border-muted-foreground/50 px-1 text-muted-foreground">16+</span>
            <span className="text-muted-foreground">{duration}</span>
          </div>
          
          {/* Tags */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < tags.length - 1 && <span className="mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Title (visible when not hovered) */}
      <p 
        className={`mt-2 text-sm text-muted-foreground truncate transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default ContentCard;
