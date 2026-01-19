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
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-6 group/row overflow-visible">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 px-4 md:px-12">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-visible">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-0 bottom-10 z-40 w-14
            bg-gradient-to-r from-background to-transparent
            flex items-center justify-start pl-2
            transition-opacity duration-300 opacity-0 group-hover/row:opacity-100
            ${showLeftArrow ? "" : "pointer-events-none opacity-0"}
          `}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-0 bottom-10 z-40 w-14
            bg-gradient-to-l from-background to-transparent
            flex items-center justify-end pr-2
            transition-opacity duration-300 opacity-0 group-hover/row:opacity-100
            ${showRightArrow ? "" : "pointer-events-none opacity-0"}
          `}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>

        {/* ✅ Wrapper visible: aquí NO hacemos scroll */}
        <div className="relative overflow-visible px-4 md:px-12">
          {/* ✅ Scroller: solo scroll horizontal */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-hidden hide-scrollbar"
          >
            {/* ✅ Track: aquí va el contenido que puede “salirse” visualmente */}
            <div className="flex gap-2 py-1 pb-20 overflow-visible">
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
      </div>
    </div>
  );
};

export default ContentRow;