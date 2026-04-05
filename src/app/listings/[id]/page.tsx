import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getListingById,
  LISTINGS,
  CONDITION_LABELS,
  CONDITION_COLORS,
} from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return LISTINGS.map((l) => ({ id: l.id }));
}

export default async function ListingDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  // Related listings (same category, different id)
  const related = LISTINGS.filter(
    (l) => l.categorySlug === listing.categorySlug && l.id !== listing.id
  ).slice(0, 3);

  const postedDate = new Date(listing.createdAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-emerald-600">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-emerald-600">
          Artículos
        </Link>
        <span>/</span>
        <Link
          href={`/categorias/${listing.categorySlug}`}
          className="hover:text-emerald-600"
        >
          {listing.category}
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium line-clamp-1">
          {listing.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="space-y-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CONDITION_COLORS[listing.condition]}`}
              >
                {CONDITION_LABELS[listing.condition]}
              </span>
              <span className="text-xs text-gray-500">
                Publicado el {postedDate}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {listing.title}
            </h1>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">
              {listing.price.toLocaleString("es-ES")} €
            </span>
          </div>

          {/* CO2 Saved highlight */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <p className="font-semibold text-emerald-800 text-sm">
                Al comprar este artículo ahorras{" "}
                <strong>{listing.co2Saved} kg de CO₂</strong>
              </p>
              <p className="text-xs text-emerald-600">
                Frente a comprar uno nuevo. ¡Gracias por cuidar el planeta!
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-2">Descripción</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {listing.description}
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-0.5">Categoría</p>
              <p className="font-semibold text-gray-800 text-sm">
                {listing.category}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-0.5">Ubicación</p>
              <p className="font-semibold text-gray-800 text-sm flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {listing.location}
              </p>
            </div>
          </div>

          {/* Tags */}
          {listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {listing.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/listings?q=${encodeURIComponent(tag)}`}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="space-y-3">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-full transition-colors text-lg shadow-lg">
              Contactar al vendedor
            </button>
            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-full transition-colors text-sm border border-gray-200">
              💌 Enviar mensaje
            </button>
          </div>

          {/* Seller Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Vendedor</h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-bold text-lg flex items-center justify-center shrink-0">
                {listing.seller.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  {listing.seller.name}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
                  <span className="flex items-center gap-1">
                    ⭐{" "}
                    <strong className="text-gray-700">
                      {listing.seller.rating}
                    </strong>
                  </span>
                  <span>·</span>
                  <span>{listing.seller.sales} ventas</span>
                  <span>·</span>
                  <span>Desde {listing.seller.joinedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Listings */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Más en {listing.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((rel) => {
              return (
                <Link
                  key={rel.id}
                  href={`/listings/${rel.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all flex gap-3 p-3 items-center"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={rel.images[0]}
                      alt={rel.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-700">
                      {rel.title}
                    </p>
                    <p className="text-sm font-bold text-gray-700 mt-1">
                      {rel.price.toLocaleString("es-ES")} €
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
