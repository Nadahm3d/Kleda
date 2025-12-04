import KpiGrid from "./components/kpi/KpiGrid";
import SalesChart from "./components/charts/SalesChart";
import ConversionChart from "./components/charts/ConversionChart";
import TopProductsTable from "./components/tables/TopProductsTable";

export default function App() {
  return (
    <div className="min-h-screen bg-kleda-background px-6 py-10">
      
      {/* Dashboard Title */}
      <h1 className="text-2xl font-semibold text-kleda-dark mb-8">
        Dashboard
      </h1>

      {/* KPI Cards */}
      <KpiGrid />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <SalesChart />
        <ConversionChart />
      </div>

      {/* Top Products Table */}
      <div className="mt-10">
        <TopProductsTable />
      </div>
      
    </div>
  );
}



