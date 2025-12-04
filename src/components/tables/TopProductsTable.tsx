import { useState } from "react";
import type { TopProduct } from "../../data/topProducts";
import { topProducts as allProducts } from "../../data/topProducts";
import ProductModal from "./ProductModal";
import { ArrowUp, ArrowDown, MousePointer2, Heart } from "lucide-react";

type SortKey = "sold" | "clicks" | "favorites";
type PeriodKey = "day" | "month" | "year";

export default function TopProductsTable() {
  const [selectedProduct, setSelectedProduct] = useState<TopProduct | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>("sold");
  const [period, setPeriod] = useState<PeriodKey>("month");

  const sortedProducts = [...allProducts].sort((a, b) => {
    const getValue = (p: TopProduct) => {
      if (sortBy === "sold") return p.sold[period];
      if (sortBy === "clicks") return p.clicks[period];
      return p.favorites[period];
    };
    return getValue(b) - getValue(a);
  });

  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-card">
      {/* Header + filter */}
      <div className="flex flex-col sm:flex-row justify-between mb-5 gap-3">
        <h2 className="text-lg font-semibold text-kleda-primary">
          Topp produkter
        </h2>

        <div className="flex items-center gap-3 text-sm">
          {/* Sortering */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="border border-gray-300 rounded-lg px-3 py-1 cursor-pointer"
          >
            <option value="sold">Mest solgt</option>
            <option value="clicks">Mest klikket</option>
            <option value="favorites">Mest favorisert</option>
          </select>

          {/* Periode-filter */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as PeriodKey)}
            className="border border-gray-300 rounded-lg px-3 py-1 cursor-pointer"
          >
            <option value="day">Dag</option>
            <option value="month">Måned</option>
            <option value="year">År</option>
          </select>
        </div>
      </div>

      {/* Tabell */}
      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b text-left">
          <tr>
            <th className="pb-3">Produkt</th>
            <th className="pb-3 text-center">Solgt</th>
            <th className="pb-3 text-center">Klikk</th>
            <th className="pb-3 text-center">Favorisert</th>
          </tr>
        </thead>

        <tbody>
          {sortedProducts.map((product) => (
            <tr
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer border-b last:border-0 hover:bg-kleda-primary/15 transition"
            >
              {/* Produkt + bilde */}
              <td className="py-4 flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="text-left">
                  <span className="font-medium text-kleda-dark hover:underline">
                    {product.name}
                  </span>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                </div>
              </td>

              {/* Solgt */}
              <td className="py-4 text-center font-semibold">
                <span className="flex items-center justify-center gap-1">
                  {product.sold[period]}
                  {product.trendSold > 0 ? (
                    <ArrowUp className="text-green-600" size={14} />
                  ) : (
                    <ArrowDown className="text-red-600" size={14} />
                  )}
                </span>
              </td>

              {/* Klikk */}
              <td className="py-4 text-center">
                <span className="flex justify-center items-center gap-1">
                  <MousePointer2 size={14} className="text-gray-700" />
                  {product.clicks[period]}
                  {product.trendClicks > 0 ? (
                    <ArrowUp className="text-green-600" size={14} />
                  ) : (
                    <ArrowDown className="text-red-600" size={14} />
                  )}
                </span>
              </td>

              {/* Favorisert */}
              <td className="py-4 text-center">
                <span className="flex justify-center items-center gap-1">
                  <Heart size={14} className="text-kleda-primary" />
                  {product.favorites[period]}
                  {product.trendFavorites > 0 ? (
                    <ArrowUp className="text-green-600" size={14} />
                  ) : (
                    <ArrowDown className="text-red-600" size={14} />
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
