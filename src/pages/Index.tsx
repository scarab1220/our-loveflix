import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import DetailModal from "@/components/DetailModal";
import {
  momentsContent,
  tripsContent,
  episodesContent,
  ContentItem,
} from "@/data/content";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: ContentItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const handlePlayHero = () => {
    setSelectedItem({
      id: "main",
      image: momentsContent[0].image,
      title: "Feliz Aniversario y Sorpresa 🎉",
      description:
        "Quise darte algo muy diferente esta vez y sorprenderte con algo unico. Cada capítulo de nuestra historia está lleno de risas, aventuras, tambien de lagrimas y problemas muy dificiles, pero sobre todo momentos que atesoro con todo mi ser. Gracias por ser mia, por ser lo mas bonito que he encontrado en esta vida, te amo muchisimo!",
      match: 100,
      duration: "Para siempre",
      tags: ["Romance", "Drama", "Comedia", "Para siempre"],
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden overflow-y-visible">
      {/* NAVBAR con Easter Egg de búsqueda */}
      <Navbar
        onSecretUnlocked={(code) => {
          setSelectedItem({
            id: `secret-${code}`,
            image: momentsContent[0].image,
            title: "Contenido secreto 💖",
            description:
              "Encontraste el código… y eso significa que has ganado un premio especial.\n\nGracias por estar conmigo un aniversario mas, Te amo intensamente.",
            match: 100,
            duration: "∞",
            tags: ["Secreto", "Romance"],
            hiddenMessage: "Shhh… solo tú puedes ver esto 😉",
          });
          setIsModalOpen(true);
        }}
      />

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24">
        <HeroSection onPlay={handlePlayHero} />
      </section>

      {/* FILAS */}
      <div className="-mt-32 relative z-10">
        <section id="momentos" className="scroll-mt-24">
          <ContentRow
            title="💕 Cositas que Amoooo de Ti"
            items={momentsContent}
            onItemClick={handleItemClick}
          />
        </section>

        <section id="viajes" className="scroll-mt-24">
          <ContentRow
            title="✈️ Nuestros Viajes (Necesitamos Más)!"
            items={tripsContent}
            onItemClick={handleItemClick}
          />
        </section>

        <section id="episodios" className="scroll-mt-24">
          <ContentRow
            title="📺 Episodios (Momentos) Favoritos"
            items={episodesContent}
            onItemClick={handleItemClick}
          />
        </section>

        <section id="mi-lista" className="scroll-mt-24">
          <ContentRow
            title="🔥 Tendencias en OurFlix"
            items={[...momentsContent, ...episodesContent].map((item, index) => ({
              ...item,
              id: `trending-${index}`,
            }))}
            onItemClick={handleItemClick}
          />
        </section>
      </div>

      {/* FOOTER */}
      <footer className="py-12 px-4 md:px-12 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Hecho con ❤️ solo para Meli
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © 2023 OurFlix. Todos los momentos reservados para siempre.
          </p>
        </div>
      </footer>

      {/* MODAL */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default Index;