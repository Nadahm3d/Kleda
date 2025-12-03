import KpiGrid from "./components/kpi/KpiGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-kleda-background px-6 py-10">
      <h1 className="text-2xl font-semibold text-kleda-dark mb-8">
        Dashboard
      </h1>
      <KpiGrid />
    </div>
  );
}




