import { useState } from "react";
import MobileMenuButton from "./components/layout/MobileMenyButton";
import MobileMenu from "./components/layout/MobileMeny";

import KpiGrid from "./components/kpi/KpiGrid";
import SalesChart from "./components/charts/SalesChart";
import ConversionChart from "./components/charts/ConversionChart";
import TopProductsTable from "./components/tables/TopProductsTable";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-kleda-background text-kleda-dark">

      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-40">
      <h2 className="text-2xl text-kleda-primary font-semibold">Kleda</h2>
        <h1 className="text-2xl text-kleda-primary font-semibold">H&M Presentasjonssenter</h1>

        {/* Hamburger Menu Button */}
        <MobileMenuButton onOpen={() => setMenuOpen(true)} />
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-12">

        {/* KPI CARDS */}
        <KpiGrid />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SalesChart />
          <ConversionChart />
        </div>

        {/* TOP PRODUCTS TABLE */}
        <TopProductsTable />
      </main>

      {/* MOBILE MENU PORTAL */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}


