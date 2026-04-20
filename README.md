# Circulando — Marketplace Sostenible de Segunda Mano

**Circulando** es un marketplace de segunda mano enfocado en la sostenibilidad y la economía circular. Compra y vende artículos de segunda mano de forma sencilla, contribuyendo a reducir residuos y emisiones de CO₂.

## 🌱 Características

- **Página de inicio** con artículos destacados, categorías y estadísticas de impacto sostenible
- **Explorar artículos** con filtrado por categoría, estado y orden de precio
- **Detalle de artículo** con información de CO₂ ahorrado, vendedor y artículos relacionados
- **Publicar anuncio** con formulario validado para vender tus artículos
- **Categorías** organizadas por tipo de producto
- **Indicadores de sostenibilidad**: kg de CO₂ ahorrado por cada artículo

## 🚀 Tecnologías

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```

## 📁 Estructura del proyecto

```
src/
  app/
    page.tsx              # Página de inicio
    layout.tsx            # Layout principal
    globals.css           # Estilos globales
    listings/
      page.tsx            # Listado y búsqueda de artículos
      [id]/page.tsx       # Detalle de artículo
    categorias/
      [slug]/page.tsx     # Artículos por categoría
    sell/
      page.tsx            # Formulario de publicación
  components/
    Header.tsx            # Barra de navegación
    Footer.tsx            # Pie de página
    ProductCard.tsx       # Tarjeta de artículo
  lib/
    data.ts               # Datos y tipos del marketplace
```

## 🌍 Impacto ambiental

Cada artículo vendido en Circulando muestra los kg de CO₂ que se ahorran frente a comprar uno nuevo. Juntos podemos reducir nuestra huella de carbono y dar una segunda vida a los productos.

