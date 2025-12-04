import { useEffect } from "react";
import type { TopProduct } from "../../data/topProducts";
import { X } from "lucide-react";

type Props = {
  product: TopProduct | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  // ESC for å lukke
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
  className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative animate-fade-in max-h-[90vh] overflow-y-auto"
  onClick={(e) => e.stopPropagation()}
>

        {/* Lukkeknapp */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Bilde */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[40vh] object-contain rounded-lg mb-4"

        />

        {/* Tittel + brand */}
        <h2 className="text-xl font-semibold text-kleda-dark mb-1">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{product.brand}</p>

        {/* Stats – viser års-nivå (year) */}
        <div className="grid grid-cols-3 text-center mb-6">
          <div>
            <p className="text-lg font-bold">{product.sold.year}</p>
            <p className="text-xs text-gray-500">Solgt (år)</p>
          </div>
          <div>
            <p className="text-lg font-bold">{product.clicks.year}</p>
            <p className="text-xs text-gray-500">Klikk (år)</p>
          </div>
          <div>
            <p className="text-lg font-bold">{product.favorites.year}</p>
            <p className="text-xs text-gray-500">Favorisert (år)</p>
          </div>
        </div>

        {/* CTA-knapp */}
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-kleda-primary text-white py-2 rounded-lg hover:bg-opacity-90"
        >
          Åpne i butikkens side 🔗
        </a>
      </div>
    </div>
  );
}
