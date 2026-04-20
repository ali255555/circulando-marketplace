import Link from "next/link";
import Image from "next/image";
import { Listing, CONDITION_LABELS, CONDITION_COLORS } from "@/lib/data";

type Props = {
  listing: Listing;
};

export default function ProductCard({ listing }: Props) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-200 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {/* Condition badge */}
        <div className="absolute top-2 left-2">
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CONDITION_COLORS[listing.condition]}`}
          >
            {CONDITION_LABELS[listing.condition]}
          </span>
        </div>
        {/* CO2 saved badge */}
        <div className="absolute top-2 right-2">
          <span className="bg-emerald-600/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            🌱 {listing.co2Saved} kg CO₂
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 flex-1 group-hover:text-emerald-700 transition-colors">
            {listing.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-lg font-bold text-gray-900">
            {listing.price.toLocaleString("es-ES")} €
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg
              className="w-3 h-3"
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
          </div>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-2">
          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
            {listing.seller.avatar}
          </span>
          <span>{listing.seller.name}</span>
          <span className="ml-auto flex items-center gap-0.5">
            ⭐ {listing.seller.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
