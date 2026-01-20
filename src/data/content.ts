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
    title: "Una de mis fotos favoritas",
    description: "Quiero compartir mas momentos contigo asi como el de esta foto, no siempre las circunstancias nos permiten salir, pero cuando lo hacemos soy absolutamente feliz de estar contigo en cualquier lugar del mundo. Comamos algo chiquito o algo elegante, cremee que cada momento cuenta mucho para mi.",
    match: 100,
    duration: "Eternidad",
    tags: ["Romance", "Comida", "Magia"],
    hiddenMessage: "Sos una preciosa y necesito muchas mas fotos de ti ✨",
  },
  {
    id: "moment-2",
    image: moment2,
    title: "Una Pequeña siesta de 5 horas",
    description: "Amo como no te imaginas dormir contigo, que me acerques tu carita, que me eches tu piernita y verte tan tranquila. Es una de mis cosas favoritas en el mundo poder descansar a tu lado y sentir que todo esta bien, quisiera que esos momentos nunca terminen.",
    match: 100,
    duration: "3h 45min",
    tags: ["Romance", "Especial", "Íntimo"],
    hiddenMessage: "Ese oso Shiveroso es mi reemplazo a veces 🧸",
  },
  {
    id: "moment-3",
    image: moment3,
    title: "Las Fotos y miradas que me enamoran",
    description: "No sabes como amoooo esta foto tuya, siempre me detengo a imaginar cual va a ser tu oufi del dia, es dificil creer que alguien tan bonita esta a mi lado y poder llamara mia, me encantas, me fascinas y no me canso de mirarte todos los dias.",
    match: 100,
    duration: "45 min",
    tags: ["Espontáneo", "Alegría", "Libertad"],
    hiddenMessage: " Eres mi modelo Personal y te amooooo 📸",
  },
];

export const tripsContent: ContentItem[] = [
  {
    id: "trip-1",
    image: trip1,
    title: "Guatemala y el balde de papitas 🍟",
    description: "Este viaje nos salio tan bien y demostro que planeando juntos logramos todo, y soy el mas feliz de haberlo cumplido, gracias por acompañarme en mis locuras, sos mi papita lover favorita y la compañera de viajes perfecta tan organizada!, espero que este 2026 podamos cumplir muchos mas sueños juntos.",
    match: 100,
    duration: "12h",
    tags: ["Aventura", "Naturaleza", "Memorable"],
    hiddenMessage: "Eres mi compañera de viajes, de vida y del alma 🌍",
  },
  {
    id: "trip-2",
    image: trip2,
    title: "Suchitoto y vamos por mas!",
    description: "Perdon porque no siempre salimos de viaje, pero cada vez que pasa yo soy el mas feliz, estoy muy motivado a ahorrar para lo que nos hemos propuesto este 2026 y que este año sea de paz, de amor y de muchos viajes juntos.",
    match: 100,
    duration: "7 días",
    tags: ["Playa", "Relax", "Paraíso"],
    hiddenMessage: "Mi paraíso Lunar 🏝️",
  },
];

export const episodesContent: ContentItem[] = [
  {
    id: "episode-1",
    image: episode1,
    title: "Jawolin 🎃",
    description: "Nunca voy a entender como te logre convencer de hacer esto conmigo, pero quiero que sepas que me divierto mucho a tu lado, nunca digas que eres aburrida, contigo me atrevo a hacer de todo, e incluso los dias que pasamos en casita son lo mejor para mi, te amo mi niña bonita.",
    match: 100,
    duration: "Todo el día",
    tags: ["Cozy", "Hogar", "Paz"],
    hiddenMessage: "Eres mi hogar 🏠",
  },
  {
    id: "episode-2",
    image: episode2,
    title: "Nuestro bebe Dylan 🐹",
    description: "Recuerdo el dia que fuimos a comprar a Dylan, haber puesto la mitad cada uno para comprarlo, los dias que nos hizo reir de ser tan bravito, siempre lo voy a extrañar, gracias por haber sido parte de un recuerdo tan bonito, te amo infinitamente por cumplirme cosas que a veces empiezan chiquitas pero se terminan convirtiendo en inolvidables.",
    match: 100,
    duration: "Infinito",
    tags: ["Primer beso", "Inolvidable", "Mágico"],
    hiddenMessage: "Nuestro primer hijo miniatura",
  },
];
