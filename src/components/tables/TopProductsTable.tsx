import { topProducts } from "../../data/topProducts";
import { Heart, MousePointer2 } from "lucide-react";

export default function TopProductsTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <h3 className="text-lg font-semibold text-kleda-primary mb-4">
        Top 5 mest solgte produkter
      </h3>

      <table className="w-full text-left">
        <thead className="text-gray-500 text-sm border-b">
          <tr>
            <th className="pb-2">Produkt</th>
            <th className="pb-2">Brand</th>
            <th className="pb-2 text-right w-20">Solgt</th>
            <th className="pb-2 text-right w-24">Klikk</th>
            <th className="pb-2 text-right w-28">Favorisert</th>
          </tr>
        </thead>

        <tbody className="text-sm text-kleda-dark">
          {topProducts.map((product) => (
            <tr key={product.id} className="border-b last:border-b-0">
              
              {/* Produkt + bilde */}
              <td className="py-3 flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-md object-cover"
                />
                {product.name}
              </td>

              {/* Brand */}
              <td className="py-3">{product.brand}</td>

              {/* Solgt */}
              <td className="py-3 text-right font-medium">
                {product.sold}
              </td>

              {/* Klikk */}
              <td className="py-3 text-right whitespace-nowrap flex justify-end items-center gap-1">
                <MousePointer2 size={16} className="text-gray-500" />
                {product.clicks}
              </td>

              {/* Favorisert */}
              <td className="py-3 text-right whitespace-nowrap flex justify-end items-center gap-1">
                <Heart size={16} className="text-kleda-primary" />
                {product.favorites}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
