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
  return (
    <div
      className="relative flex-shrink-0 w-[240px] md:w-[280px] cursor-pointer group"
      onClick={onClick}
    >
      {/* Base + Expanded wrapper */}
      <div
        className="
          relative rounded overflow-visible
          transform-gpu transition-all
          duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
          group-hover:scale-[1.28] group-hover:z-30
          group-hover:shadow-2xl
        "
      >
        {/* Image */}
        <div className="aspect-video relative overflow-visible rounded">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover transform-gpu
              transition-transform duration-500 ease-out
              group-hover:scale-[1.08]
            "
            draggable={false}
          />

          {/* Hover Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/80 via-black/20 to-transparent
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          {/* Play icon on hover */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          >
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <Play className="w-5 h-5 text-black fill-black ml-1" />
            </div>
          </div>

          {/* Hidden romantic message */}
          {hiddenMessage && (
            <div
              className="
                absolute top-2 left-2 right-2
                text-xs text-primary bg-black/55 backdrop-blur-sm
                px-2 py-1 rounded
                opacity-0 -translate-y-2 transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
              "
            >
              <Heart className="w-3 h-3 inline mr-1 fill-primary" />
              {hiddenMessage}
            </div>
          )}
        </div>

        {/* Expanded Info (appears under image) */}
        <div
          className="
            absolute left-0 right-0
            mt-0
            rounded-b bg-card
            p-3
            opacity-0 translate-y-2 pointer-events-none
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          "
          style={{ top: "100%" }}
        >
          {/* Title inside expanded panel (Netflix-like) */}
          <div className="mb-2">
            <p className="text-sm font-semibold text-foreground line-clamp-1">
              {title}
            </p>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mb-3">
            <button
              className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-4 h-4 text-background fill-background ml-0.5" />
            </button>

            <button
              className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus className="w-4 h-4 text-foreground" />
            </button>

            <button
              className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ThumbsUp className="w-4 h-4 text-foreground" />
            </button>

            <button
              className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ChevronDown className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Match & Duration */}
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="text-green-500 font-semibold">❤️ {match}% Match</span>
            <span className="border border-muted-foreground/50 px-1 text-muted-foreground">
              16+
            </span>
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

      {/* Title under card (hide on hover) */}
      <p
        className="
          mt-2 text-sm text-muted-foreground truncate
          transition-opacity duration-200
          group-hover:opacity-0
        "
      >
        {title}
      </p>
    </div>
  );
};

export default ContentCard;