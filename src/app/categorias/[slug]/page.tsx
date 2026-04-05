import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getCategoryBySlug, getListingsByCategory, CATEGORIES } from "@/lib/data";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const listings = getListingsByCategory(slug);

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
        <span className="text-gray-800 font-medium">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-6 mb-8 flex items-center gap-4">
        <span className="text-5xl">{category.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-gray-600 mt-1">{category.description}</p>
          <p className="text-sm text-emerald-600 mt-1 font-medium">
            {listings.length} artículo{listings.length !== 1 ? "s" : ""}{" "}
            disponible{listings.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* All categories nav */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categorias/${cat.slug}`}
            className={`shrink-0 flex items-center gap-1.5 text-sm px-4 py-2 rounded-full transition-colors border ${
              cat.slug === slug
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

      {/* Listings grid */}
      {listings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {listings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">{category.icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Todavía no hay artículos en esta categoría
          </h3>
          <p className="text-gray-500 mb-6">
            Sé el primero en publicar en {category.name}
          </p>
          <Link
            href="/sell"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Publicar artículo
          </Link>
        </div>
      )}
    </div>
  );
}
