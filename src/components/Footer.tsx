import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">♻️</span>
              <span className="text-xl font-bold text-white">Circulando</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              El marketplace sostenible de segunda mano. Cada compra que realizas
              ayuda a reducir residuos y la huella de carbono del planeta.
            </p>
            <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <span>🌱</span>
              <span>Comprometidos con la economía circular</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Marketplace
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Explorar artículos
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Vender un artículo
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?condition=nuevo"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Artículos nuevos
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?sort=price_asc"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Mejores precios
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Categorías
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categorias/ropa"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Ropa y Moda
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/electronica"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Electrónica
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/hogar"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hogar y Muebles
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/libros"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Libros
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Circulando Marketplace. Todos los derechos reservados.
          </p>
          <p className="text-xs text-emerald-500 font-medium">
            🌍 Juntos reducimos residuos y CO₂
          </p>
        </div>
      </div>
    </footer>
  );
}
