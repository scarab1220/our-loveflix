import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

interface ContentItem {
  id: string;
  image: string;
  title: string;
  description: string;
  match?: number;
  duration?: string;
  tags?: string[];
  hiddenMessage?: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  onItemClick: (item: ContentItem) => void;
}

const ContentRow = ({ title, items, onItemClick }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative py-6 group/row">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 px-4 md:px-12">
        {title}
      </h2>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-0 bottom-8 z-30 w-12 bg-gradient-to-r from-background to-transparent flex items-center justify-start pl-2 transition-opacity duration-300 ${
            showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>
        
        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-0 bottom-8 z-30 w-12 bg-gradient-to-l from-background to-transparent flex items-center justify-end pr-2 transition-opacity duration-300 ${
            showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>
        
        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto hide-scrollbar px-4 md:px-12 pb-16"
        >
          {items.map((item) => (
            <ContentCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              match={item.match}
              duration={item.duration}
              tags={item.tags}
              hiddenMessage={item.hiddenMessage}
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
