import { ArrowUp, ArrowDown, MousePointer2, Heart } from "lucide-react";
import { topProducts } from "../../data/topProducts";

export default function TopProductsTable() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-kleda-primary mb-4">
        Topp 5 mest solgte produkter
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 text-sm border-b">
            <th className="pb-3">Produkt</th>
            <th className="pb-3 text-center">Solgt</th>
            <th className="pb-3 text-center">Klikk</th>
            <th className="pb-3 text-center">Favorisert</th>
          </tr>
        </thead>

        <tbody>
          {topProducts.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50 transition">
              {/* Produkt info */}
              <td className="py-4 flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-kleda-dark">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                </div>
              </td>

              {/* Solgt */}
              <td className="py-4 text-center font-semibold text-kleda-dark">
                {product.sold}
                {product.trendSold > 0 ? (
                  <ArrowUp className="inline ml-2 text-green-600" size={16} />
                ) : (
                  <ArrowDown className="inline ml-2 text-red-600" size={16} />
                )}
              </td>

              {/* Klikk */}
              <td className="py-4 text-center">
                <span className="flex justify-center items-center gap-2">
                  <MousePointer2 className="text-kleda-dark" size={16} />
                  <span className="font-medium text-kleda-dark">
                    {product.clicks}
                  </span>
                  {product.trendClicks > 0 ? (
                    <ArrowUp className="text-green-600" size={16} />
                  ) : (
                    <ArrowDown className="text-red-600" size={16} />
                  )}
                </span>
              </td>

              {/* Favorisert */}
              <td className="py-4 text-center">
                <span className="flex justify-center items-center gap-2">
                  <Heart className="text-kleda-primary" size={16} />
                  <span className="font-medium text-kleda-dark">
                    {product.favorites}
                  </span>
                  {product.trendFavorites > 0 ? (
                    <ArrowUp className="text-green-600" size={16} />
                  ) : (
                    <ArrowDown className="text-red-600" size={16} />
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
