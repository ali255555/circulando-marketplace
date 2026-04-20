import ProductCard from "@/components/ProductCard";
import {
  LISTINGS,
  CATEGORIES,
  CONDITION_LABELS,
  searchListings,
  getListingsByCategory,
} from "@/lib/data";
import Link from "next/link";

type SearchParams = Promise<{
  q?: string;
  category?: string;
  condition?: string;
  sort?: string;
}>;

/** Build a /listings URL preserving the given params, overriding the ones in overrides. */
function buildListingsUrl(overrides: Record<string, string | undefined>): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(overrides)) {
    if (value) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `/listings?${qs}` : "/listings";
}

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const query = params.q ?? "";
  const categoryFilter = params.category ?? "";
  const conditionFilter = params.condition ?? "";
  const sortOption = params.sort ?? "recent";

  // Filter listings
  let listings = query
    ? searchListings(query)
    : categoryFilter
      ? getListingsByCategory(categoryFilter)
      : LISTINGS;

  if (conditionFilter) {
    listings = listings.filter((l) => l.condition === conditionFilter);
  }

  // Sort
  if (sortOption === "price_asc") {
    listings = [...listings].sort((a, b) => a.price - b.price);
  } else if (sortOption === "price_desc") {
    listings = [...listings].sort((a, b) => b.price - a.price);
  } else if (sortOption === "co2") {
    listings = [...listings].sort((a, b) => b.co2Saved - a.co2Saved);
  }
  // default: recent (order as-is)

  const title = query
    ? `Resultados para "${query}"`
    : categoryFilter
      ? (CATEGORIES.find((c) => c.slug === categoryFilter)?.name ??
        "Categoría")
      : "Todos los artículos";

  /** Base params shared across filter links */
  const baseParams = {
    q: query || undefined,
    category: categoryFilter || undefined,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {listings.length} artículo{listings.length !== 1 ? "s" : ""}{" "}
          encontrado{listings.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-6">
            {/* Categories */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3 text-sm">
                Categorías
              </h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/listings"
                    className={`flex justify-between items-center text-sm px-2 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${!categoryFilter && !query ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600"}`}
                  >
                    <span>Todos</span>
                    <span className="text-xs text-gray-400">
                      {LISTINGS.length}
                    </span>
                  </Link>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={buildListingsUrl({ category: cat.slug })}
                      className={`flex justify-between items-center text-sm px-2 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${categoryFilter === cat.slug ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600"}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </span>
                      <span className="text-xs text-gray-400">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Condition */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3 text-sm">
                Estado
              </h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={buildListingsUrl(baseParams)}
                    className={`block text-sm px-2 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${!conditionFilter ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600"}`}
                  >
                    Todos los estados
                  </Link>
                </li>
                {Object.entries(CONDITION_LABELS).map(([value, label]) => (
                  <li key={value}>
                    <Link
                      href={buildListingsUrl({ ...baseParams, condition: value })}
                      className={`block text-sm px-2 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${conditionFilter === value ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600"}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-gray-200 px-4 py-2">
            <span className="text-sm text-gray-500 hidden sm:block">
              Ordenar por:
            </span>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: "recent", label: "Más recientes" },
                { value: "price_asc", label: "Precio: menor a mayor" },
                { value: "price_desc", label: "Precio: mayor a menor" },
                { value: "co2", label: "Más sostenible" },
              ].map((opt) => (
                <Link
                  key={opt.value}
                  href={buildListingsUrl({ ...baseParams, sort: opt.value })}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${sortOption === opt.value ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Grid */}
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {listings.map((listing) => (
                <ProductCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-5xl mb-4">🔍</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-500 mb-4">
                Prueba con otros términos de búsqueda o categorías
              </p>
              <Link
                href="/listings"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Ver todos los artículos
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
