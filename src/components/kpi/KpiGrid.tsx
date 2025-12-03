import KpiCard from "./KpiCard";
import { Eye, PackageCheck, ShoppingCart, Percent } from "lucide-react";

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <KpiCard title="Totale visninger" value="48 200" icon={<Eye size={28} />} />
      <KpiCard title="Totalt salg" value="2 490" icon={<ShoppingCart size={28} />} />
      <KpiCard title="Omsetning" value="kr 589 000" icon={<PackageCheck size={28} />} />
      <KpiCard title="Konverteringsrate" value="5,2%" icon={<Percent size={28} />} />
    </div>
  );
}
