export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
};

export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  categorySlug: string;
  condition: "nuevo" | "como_nuevo" | "bueno" | "aceptable";
  images: string[];
  seller: {
    name: string;
    rating: number;
    sales: number;
    avatar: string;
    joinedYear: number;
  };
  location: string;
  createdAt: string;
  co2Saved: number; // kg of CO2 saved vs buying new
  featured: boolean;
  tags: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Ropa y Moda",
    slug: "ropa",
    icon: "👗",
    description: "Prendas sostenibles de segunda mano",
    count: 234,
  },
  {
    id: "2",
    name: "Electrónica",
    slug: "electronica",
    icon: "💻",
    description: "Dispositivos y gadgets reacondicionados",
    count: 187,
  },
  {
    id: "3",
    name: "Muebles y Hogar",
    slug: "hogar",
    icon: "🪑",
    description: "Dale nueva vida a tu espacio",
    count: 145,
  },
  {
    id: "4",
    name: "Libros y Cultura",
    slug: "libros",
    icon: "📚",
    description: "Conocimiento de segunda mano",
    count: 312,
  },
  {
    id: "5",
    name: "Deportes",
    slug: "deportes",
    icon: "⚽",
    description: "Equipo deportivo en buen estado",
    count: 98,
  },
  {
    id: "6",
    name: "Juguetes",
    slug: "juguetes",
    icon: "🧸",
    description: "Juguetes que siguen dando alegría",
    count: 156,
  },
  {
    id: "7",
    name: "Jardín y Plantas",
    slug: "jardin",
    icon: "🌿",
    description: "Verde para tu hogar y jardín",
    count: 73,
  },
  {
    id: "8",
    name: "Arte y Colección",
    slug: "arte",
    icon: "🎨",
    description: "Piezas únicas con historia",
    count: 61,
  },
];

export const CONDITION_LABELS: Record<Listing["condition"], string> = {
  nuevo: "Nuevo",
  como_nuevo: "Como nuevo",
  bueno: "Buen estado",
  aceptable: "Aceptable",
};

export const CONDITION_COLORS: Record<Listing["condition"], string> = {
  nuevo: "bg-green-100 text-green-800",
  como_nuevo: "bg-blue-100 text-blue-800",
  bueno: "bg-yellow-100 text-yellow-800",
  aceptable: "bg-orange-100 text-orange-800",
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Bicicleta de montaña Trek 820",
    description:
      "Bicicleta de montaña Trek 820 en excelente estado. Usada solo dos temporadas, con frenos de disco hidráulicos y cambios Shimano de 21 velocidades. Ideal para rutas de montaña y ciudad. Incluye luces delanteras y traseras.",
    price: 280,
    category: "Deportes",
    categorySlug: "deportes",
    condition: "como_nuevo",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
    ],
    seller: {
      name: "Carlos M.",
      rating: 4.8,
      sales: 23,
      avatar: "CM",
      joinedYear: 2021,
    },
    location: "Barcelona",
    createdAt: "2026-03-28",
    co2Saved: 12.4,
    featured: true,
    tags: ["bicicleta", "montaña", "trek", "deportes"],
  },
  {
    id: "2",
    title: "MacBook Pro 14\" M2 - 16GB RAM",
    description:
      "MacBook Pro 14\" chip M2 con 16GB de RAM y 512GB SSD. En perfecto estado, sin rayones ni golpes. Batería al 94% de capacidad. Se vende por actualización a M4. Incluye cargador original y caja.",
    price: 1150,
    category: "Electrónica",
    categorySlug: "electronica",
    condition: "como_nuevo",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    ],
    seller: {
      name: "Laura G.",
      rating: 5.0,
      sales: 8,
      avatar: "LG",
      joinedYear: 2022,
    },
    location: "Madrid",
    createdAt: "2026-04-01",
    co2Saved: 45.2,
    featured: true,
    tags: ["macbook", "apple", "laptop", "portátil"],
  },
  {
    id: "3",
    title: "Silla de oficina ergonómica Herman Miller",
    description:
      "Silla Aeron de Herman Miller, talla B, en muy buen estado. Regulable en altura, postura lumbar y apoyabrazos. Ideal para trabajo desde casa. Se recoge en persona, no envío.",
    price: 420,
    category: "Muebles y Hogar",
    categorySlug: "hogar",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    ],
    seller: {
      name: "Ana P.",
      rating: 4.6,
      sales: 15,
      avatar: "AP",
      joinedYear: 2020,
    },
    location: "Valencia",
    createdAt: "2026-03-25",
    co2Saved: 28.7,
    featured: true,
    tags: ["silla", "oficina", "herman miller", "ergonómica"],
  },
  {
    id: "4",
    title: "Colección Harry Potter (7 libros) - Ed. tapa dura",
    description:
      "Serie completa de Harry Potter en edición de tapa dura. Libros en muy buen estado, algunos con pequeñas marcas de uso en las tapas. Perfectos para coleccionistas o regalo.",
    price: 65,
    category: "Libros y Cultura",
    categorySlug: "libros",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    ],
    seller: {
      name: "Marta S.",
      rating: 4.9,
      sales: 41,
      avatar: "MS",
      joinedYear: 2019,
    },
    location: "Sevilla",
    createdAt: "2026-03-30",
    co2Saved: 3.2,
    featured: false,
    tags: ["harry potter", "libros", "colección", "tapa dura"],
  },
  {
    id: "5",
    title: "Vestido de noche Zara - Talla M",
    description:
      "Vestido de noche negro Zara, talla M. Usado una sola vez para una boda. En perfecto estado, con etiqueta original. Material: 100% poliéster reciclado.",
    price: 35,
    category: "Ropa y Moda",
    categorySlug: "ropa",
    condition: "como_nuevo",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
    ],
    seller: {
      name: "Elena R.",
      rating: 4.7,
      sales: 32,
      avatar: "ER",
      joinedYear: 2021,
    },
    location: "Bilbao",
    createdAt: "2026-04-02",
    co2Saved: 5.8,
    featured: false,
    tags: ["vestido", "zara", "noche", "talla M"],
  },
  {
    id: "6",
    title: "LEGO Technic 42130 - BMW M 1000 RR",
    description:
      "Set LEGO Technic 42130 BMW M 1000 RR completo con todas las piezas y manual de instrucciones. Montado una vez y desmontado. Ideal para aficionados de LEGO y motos.",
    price: 95,
    category: "Juguetes",
    categorySlug: "juguetes",
    condition: "como_nuevo",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    seller: {
      name: "Javier L.",
      rating: 4.5,
      sales: 7,
      avatar: "JL",
      joinedYear: 2023,
    },
    location: "Zaragoza",
    createdAt: "2026-03-27",
    co2Saved: 2.1,
    featured: false,
    tags: ["lego", "technic", "bmw", "moto"],
  },
  {
    id: "7",
    title: "iPhone 13 Pro 256GB - Verde alpino",
    description:
      "iPhone 13 Pro 256GB en color verde alpino. Estado impecable, sin rayaduras. Batería al 89%. Desbloqueado para todas las operadoras. Incluye cargador, funda y caja original.",
    price: 620,
    category: "Electrónica",
    categorySlug: "electronica",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&q=80",
    ],
    seller: {
      name: "Pau T.",
      rating: 4.9,
      sales: 19,
      avatar: "PT",
      joinedYear: 2020,
    },
    location: "Tarragona",
    createdAt: "2026-04-03",
    co2Saved: 38.9,
    featured: true,
    tags: ["iphone", "apple", "smartphone", "móvil"],
  },
  {
    id: "8",
    title: "Mesa de comedor extensible - roble macizo",
    description:
      "Mesa de comedor extensible de roble macizo. De 140 a 200 cm. Capacidad para 6-8 personas. Pequeños arañazos en la superficie, fácilmente tratables. Se recoge en Málaga.",
    price: 350,
    category: "Muebles y Hogar",
    categorySlug: "hogar",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    ],
    seller: {
      name: "Roberto F.",
      rating: 4.3,
      sales: 5,
      avatar: "RF",
      joinedYear: 2022,
    },
    location: "Málaga",
    createdAt: "2026-03-22",
    co2Saved: 67.3,
    featured: false,
    tags: ["mesa", "comedor", "roble", "madera"],
  },
  {
    id: "9",
    title: "Chaqueta North Face Fleece - Talla L",
    description:
      "Chaqueta de forro polar The North Face, talla L. Color gris oscuro. En buen estado, con desgaste mínimo en los puños. Muy abrigada, perfecta para senderismo y ciudad.",
    price: 55,
    category: "Ropa y Moda",
    categorySlug: "ropa",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    seller: {
      name: "Nuria B.",
      rating: 4.6,
      sales: 28,
      avatar: "NB",
      joinedYear: 2020,
    },
    location: "Pamplona",
    createdAt: "2026-03-18",
    co2Saved: 7.4,
    featured: false,
    tags: ["north face", "chaqueta", "polar", "senderismo"],
  },
  {
    id: "10",
    title: "Guitarra eléctrica Fender Stratocaster",
    description:
      "Fender Stratocaster americana, serie Standard. Color sunburst. En excelente estado, con pastillas originales y clavijero ajustado recientemente. Incluye funda rígida. Un sonido increíble.",
    price: 780,
    category: "Arte y Colección",
    categorySlug: "arte",
    condition: "como_nuevo",
    images: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
    ],
    seller: {
      name: "Toni M.",
      rating: 5.0,
      sales: 12,
      avatar: "TM",
      joinedYear: 2021,
    },
    location: "Murcia",
    createdAt: "2026-04-01",
    co2Saved: 18.6,
    featured: false,
    tags: ["guitarra", "fender", "stratocaster", "música"],
  },
  {
    id: "11",
    title: "Tiesto de cerámica artesanal con suculentas",
    description:
      "Dos tiestos de cerámica artesanales hechos a mano con suculentas variadas. Ideales para interior. Diámetro aprox. 15cm. Se venden juntos. Las plantas están sanas y bien establecidas.",
    price: 22,
    category: "Jardín y Plantas",
    categorySlug: "jardin",
    condition: "nuevo",
    images: [
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    ],
    seller: {
      name: "Isabel C.",
      rating: 4.8,
      sales: 34,
      avatar: "IC",
      joinedYear: 2022,
    },
    location: "Granada",
    createdAt: "2026-04-04",
    co2Saved: 1.3,
    featured: false,
    tags: ["plantas", "suculentas", "cerámica", "jardín"],
  },
  {
    id: "12",
    title: "Patinete eléctrico Xiaomi Pro 2",
    description:
      "Patinete Xiaomi Mi Electric Scooter Pro 2. Batería al 85% (70km de autonomía). Sin golpes ni rayaduras graves. Neumáticos con buena vida. Perfecto para moverse por la ciudad de forma sostenible.",
    price: 290,
    category: "Deportes",
    categorySlug: "deportes",
    condition: "bueno",
    images: [
      "https://images.unsplash.com/photo-1558981285-6f0c8d0d24f6?w=600&q=80",
    ],
    seller: {
      name: "David N.",
      rating: 4.4,
      sales: 11,
      avatar: "DN",
      joinedYear: 2022,
    },
    location: "Alicante",
    createdAt: "2026-03-29",
    co2Saved: 22.5,
    featured: true,
    tags: ["patinete", "xiaomi", "eléctrico", "movilidad"],
  },
];

export function getListingById(id: string): Listing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export function getListingsByCategory(slug: string): Listing[] {
  return LISTINGS.filter((l) => l.categorySlug === slug);
}

export function getFeaturedListings(): Listing[] {
  return LISTINGS.filter((l) => l.featured);
}

export function searchListings(query: string): Listing[] {
  const q = query.toLowerCase();
  return LISTINGS.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.tags.some((t) => t.includes(q)) ||
      l.category.toLowerCase().includes(q)
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export const TOTAL_CO2_SAVED = LISTINGS.reduce((acc, l) => acc + l.co2Saved, 0);
export const TOTAL_LISTINGS = LISTINGS.length;
