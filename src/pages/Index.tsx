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
      title: "Nuestra Historia",
      description:
        "Desde el primer momento que te vi, supe que algo especial estaba comenzando. Esta es la historia de cómo dos corazones encontraron su camino hacia el amor verdadero. Cada capítulo está lleno de risas, aventuras, y momentos que atesoro con todo mi ser. Gracias por ser mi compañera en esta increíble aventura llamada vida.",
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
              "Encontraste el código… y eso significa que eres mi persona favorita.\n\nGracias por estar conmigo. Te amo.",
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
            title="💕 Momentos que Amo de Ti"
            items={momentsContent}
            onItemClick={handleItemClick}
          />
        </section>

        <section id="viajes" className="scroll-mt-24">
          <ContentRow
            title="✈️ Nuestros Viajes"
            items={tripsContent}
            onItemClick={handleItemClick}
          />
        </section>

        <section id="episodios" className="scroll-mt-24">
          <ContentRow
            title="📺 Episodios Favoritos"
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
            Hecho con ❤️ solo para ti
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © 2024 OurFlix. Todos los momentos reservados para siempre.
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