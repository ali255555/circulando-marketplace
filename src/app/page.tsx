import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORIES,
  getFeaturedListings,
  TOTAL_CO2_SAVED,
  TOTAL_LISTINGS,
} from "@/lib/data";

export default function Home() {
  const featured = getFeaturedListings();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span>🌱</span>
              <span>Economía circular en acción</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Compra y vende de forma{" "}
              <span className="text-yellow-300">sostenible</span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-xl">
              Circulando es el marketplace de segunda mano comprometido con el
              medio ambiente. Cada artículo que compras aquí reduce residuos y
              emisiones de CO₂.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/listings"
                className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full hover:bg-yellow-50 transition-colors shadow-lg"
              >
                Explorar artículos
              </Link>
              <Link
                href="/sell"
                className="bg-emerald-800/60 hover:bg-emerald-800/80 text-white font-semibold px-6 py-3 rounded-full transition-colors border border-white/30"
              >
                + Publicar anuncio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap justify-center sm:justify-between gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg">🛒</span>
              <span>
                <strong className="font-bold text-base">
                  {TOTAL_LISTINGS.toLocaleString("es-ES")}
                </strong>{" "}
                artículos disponibles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg">🌍</span>
              <span>
                <strong className="font-bold text-base">
                  {TOTAL_CO2_SAVED.toFixed(1)} kg
                </strong>{" "}
                de CO₂ ahorrado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg">♻️</span>
              <span>
                <strong className="font-bold text-base">100%</strong>{" "}
                artículos de segunda mano
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-lg">⭐</span>
              <span>
                <strong className="font-bold text-base">4.7/5</strong>{" "}
                valoración media vendedores
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Categorías</h2>
          <Link
            href="/listings"
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="text-xs font-semibold text-gray-700 leading-tight">
                {cat.name}
              </span>
              <span className="text-xs text-gray-400">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Artículos destacados
          </h2>
          <Link
            href="/listings"
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Sustainability banner */}
      <section className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              ¿Por qué comprar de segunda mano?
            </h2>
            <p className="text-gray-600 mb-8">
              Cada artículo de segunda mano que compras evita la producción de
              uno nuevo, ahorrando energía, agua y materias primas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                <div className="text-3xl mb-2">💧</div>
                <h3 className="font-bold text-gray-900 mb-1">Ahorra agua</h3>
                <p className="text-sm text-gray-500">
                  Fabricar una camiseta nueva consume hasta 2.700 litros de agua
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                <div className="text-3xl mb-2">🌡️</div>
                <h3 className="font-bold text-gray-900 mb-1">Reduce CO₂</h3>
                <p className="text-sm text-gray-500">
                  Un móvil reacondicionado ahorra hasta 60 kg de CO₂ equivalente
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Economía circular
                </h3>
                <p className="text-sm text-gray-500">
                  Prolongar la vida útil de los productos reduce los residuos a
                  vertederos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          ¿Tienes artículos que ya no usas?
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Publícalos gratis en Circulando y dales una segunda vida. Gana dinero
          y ayuda al planeta.
        </p>
        <Link
          href="/sell"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
        >
          Publicar gratis
        </Link>
      </section>
    </div>
  );
}
