"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/data";
import Link from "next/link";

type FormData = {
  title: string;
  description: string;
  price: string;
  category: string;
  condition: string;
  location: string;
  imageUrl: string;
};

const INITIAL_FORM: FormData = {
  title: "",
  description: "",
  price: "",
  category: "",
  condition: "",
  location: "",
  imageUrl: "",
};

export default function SellPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.title.trim()) newErrors.title = "El título es obligatorio";
    if (!form.description.trim())
      newErrors.description = "La descripción es obligatoria";
    const priceValue = Number(form.price);
    if (!form.price || isNaN(priceValue) || priceValue <= 0)
      newErrors.price = "Introduce un precio válido";
    if (!form.category) newErrors.category = "Selecciona una categoría";
    if (!form.condition) newErrors.condition = "Selecciona el estado del artículo";
    if (!form.location.trim())
      newErrors.location = "La ubicación es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
          <span className="text-6xl mb-4 block">🎉</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            ¡Anuncio publicado!
          </h1>
          <p className="text-gray-600 mb-2">
            Tu artículo{" "}
            <strong>&ldquo;{form.title}&rdquo;</strong> ha sido publicado con
            éxito.
          </p>
          <p className="text-sm text-emerald-600 mb-8">
            🌱 Gracias por darle una segunda vida a este artículo y ayudar al
            planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/listings"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Ver todos los artículos
            </Link>
            <button
              onClick={() => {
                setForm(INITIAL_FORM);
                setSubmitted(false);
              }}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full transition-colors border border-gray-200"
            >
              Publicar otro artículo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Publicar un artículo
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Rellena el formulario para poner a la venta tu artículo de segunda
          mano.
        </p>
      </div>

      {/* Sustainability tip */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-start gap-3">
        <span className="text-xl mt-0.5">🌱</span>
        <p className="text-sm text-emerald-700">
          <strong>¡Buena elección!</strong> Al vender en Circulando contribuyes
          a la economía circular y reduces la huella de carbono. Artículos con
          buenas fotos y descripciones detalladas se venden 3x más rápido.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5"
      >
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Título del artículo <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Ej: Bicicleta Trek 820, Talla M"
            maxLength={80}
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${errors.title ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Descripción <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe el artículo: estado, características, motivo de venta, ..."
            rows={5}
            maxLength={1000}
            className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none ${errors.description ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          <p className="text-xs text-gray-400 mt-0.5">
            {form.description.length}/1000
          </p>
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* Price and Category row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Precio (€) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                €
              </span>
              <input
                id="price"
                name="price"
                type="number"
                min="1"
                step="0.01"
                value={form.price}
                onChange={handleChange}
                placeholder="0.00"
                className={`w-full pl-8 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${errors.price ? "border-red-400 bg-red-50" : "border-gray-300"}`}
              />
            </div>
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">{errors.price}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Categoría <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white ${errors.category ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            >
              <option value="">Seleccionar categoría</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category}</p>
            )}
          </div>
        </div>

        {/* Condition and Location row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Condition */}
          <div>
            <label
              htmlFor="condition"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Estado del artículo <span className="text-red-500">*</span>
            </label>
            <select
              id="condition"
              name="condition"
              value={form.condition}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white ${errors.condition ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            >
              <option value="">Seleccionar estado</option>
              <option value="nuevo">Nuevo (sin usar)</option>
              <option value="como_nuevo">Como nuevo</option>
              <option value="bueno">Buen estado</option>
              <option value="aceptable">Aceptable</option>
            </select>
            {errors.condition && (
              <p className="text-red-500 text-xs mt-1">{errors.condition}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Ubicación <span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              placeholder="Ej: Madrid, Barcelona..."
              className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${errors.location ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>
        </div>

        {/* Image URL (optional) */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            URL de imagen{" "}
            <span className="text-gray-400 font-normal">(opcional)</span>
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/foto.jpg"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            Los artículos con fotos reciben muchas más visitas
          </p>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-full transition-colors text-base shadow-lg"
          >
            Publicar artículo gratis
          </button>
          <p className="text-xs text-gray-400 text-center mt-3">
            Al publicar aceptas nuestros términos de servicio y política de
            privacidad.
          </p>
        </div>
      </form>
    </div>
  );
}
