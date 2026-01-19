import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import trip1 from "@/assets/trip-1.jpg";
import trip2 from "@/assets/trip-2.jpg";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";

export interface ContentItem {
  id: string;
  image: string;
  title: string;
  description: string;
  match?: number;
  duration?: string;
  tags?: string[];
  hiddenMessage?: string;
}

export const momentsContent: ContentItem[] = [
  {
    id: "moment-1",
    image: moment1,
    title: "Noche en París",
    description: "Esa noche mágica donde caminamos bajo las luces de la Torre Eiffel, donde cada paso nos acercaba más y el mundo desaparecía a nuestro alrededor. Un momento que quedó grabado para siempre en mi corazón.",
    match: 100,
    duration: "Eternidad",
    tags: ["Romance", "Viaje", "Magia"],
    hiddenMessage: "Contigo, París brilla más ✨",
  },
  {
    id: "moment-2",
    image: moment2,
    title: "Nuestra Primera Cena",
    description: "Velas, vino, y esa mirada que lo decía todo sin palabras. La noche donde confirmé que eras la persona con quien quería compartir cada cena por el resto de mi vida.",
    match: 100,
    duration: "3h 45min",
    tags: ["Romance", "Especial", "Íntimo"],
    hiddenMessage: "Eres mi cena favorita 🍷",
  },
  {
    id: "moment-3",
    image: moment3,
    title: "Bailando Bajo la Lluvia",
    description: "Cuando la lluvia nos sorprendió y en lugar de correr, decidimos bailar. Ese momento espontáneo que define nuestra relación: encontrar alegría en lo inesperado.",
    match: 100,
    duration: "45 min",
    tags: ["Espontáneo", "Alegría", "Libertad"],
    hiddenMessage: "Contigo hasta mojarse es perfecto 💧",
  },
];

export const tripsContent: ContentItem[] = [
  {
    id: "trip-1",
    image: trip1,
    title: "Amanecer en la Montaña",
    description: "Despertar juntos para ver el amanecer desde la cima. El esfuerzo de la caminata valió cada segundo cuando vi tus ojos iluminarse con los primeros rayos del sol.",
    match: 100,
    duration: "12h",
    tags: ["Aventura", "Naturaleza", "Memorable"],
    hiddenMessage: "Contigo llegaría a cualquier cima 🏔️",
  },
  {
    id: "trip-2",
    image: trip2,
    title: "Paraíso Tropical",
    description: "Arena blanca, agua turquesa y tú. No necesitábamos nada más. Esos días donde el tiempo se detuvo y solo existíamos nosotros dos.",
    match: 100,
    duration: "7 días",
    tags: ["Playa", "Relax", "Paraíso"],
    hiddenMessage: "Mi paraíso eres tú 🏝️",
  },
];

export const episodesContent: ContentItem[] = [
  {
    id: "episode-1",
    image: episode1,
    title: "Domingo de Lluvia",
    description: "Café caliente, un buen libro y tú a mi lado. La perfección de los momentos simples, donde no hacía falta hacer nada extraordinario porque estar contigo ya lo era.",
    match: 100,
    duration: "Todo el día",
    tags: ["Cozy", "Hogar", "Paz"],
    hiddenMessage: "Eres mi hogar 🏠",
  },
  {
    id: "episode-2",
    image: episode2,
    title: "Nuestro Primer Beso",
    description: "Ese momento donde el mundo se detuvo. El nerviosismo, la anticipación, y luego... magia. El instante que cambió todo y marcó el inicio de nuestra historia.",
    match: 100,
    duration: "Infinito",
    tags: ["Primer beso", "Inolvidable", "Mágico"],
    hiddenMessage: "El primero de millones 💋",
  },
];
