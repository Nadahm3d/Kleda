import KpiCard from "./KpiCard";
import { Eye, PackageCheck, ShoppingCart, Percent } from "lucide-react";

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <KpiCard
        title="Totale visninger"
        value="48 200"
        description="H&M sine produkter har i år hatt totalt 48 200 visninger på Kleda."
        icon={<Eye />}
      />

      <KpiCard
        title="Totalt salg"
        value="2 490"
        description="H&M sine produkter har blitt solgt 2 490 ganger i år via Kleda."
        icon={<ShoppingCart />}
      />

      <KpiCard
        title="Omsetning"
        value="kr 589 000"
        description="H&M sine produkter har omsatt for totalt 589 000 kr i år på Kleda."
        icon={<PackageCheck />}
      />

      <KpiCard
        title="Konverteringsrate"
        value="5,2%"
        description="5,2 % av brukerne som har sett H&M sine produkter har gjennomført et kjøp."
        icon={<Percent />}
      />
    </div>
  );
}
