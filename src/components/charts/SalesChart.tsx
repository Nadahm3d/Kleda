import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { salesData } from "../../data/salesData";

type Period = "day" | "month" | "year";

function formatSales(value: number, period: Period) {
  if (period === "day") {
    return `${value.toLocaleString("no-NO")}k`;
  }
  if (period === "month") {
    return value >= 1000
      ? `${(value / 1000).toFixed(1)} mill`
      : `${value.toLocaleString("no-NO")}k`;
  }
  return `${(value / 1000).toFixed(1)} mill`;
}

export default function SalesChart() {
  const [filter, setFilter] = useState<Period>("month");

  const periods = [
    { key: "day", label: "Dag" },
    { key: "month", label: "Måned" },
    { key: "year", label: "År" },
  ] as const;

  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      {/* Header + Filter */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-kleda-dark">Salg</h3>

        <div className="flex gap-2">
          {periods.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1 text-sm rounded-md transition ${
                filter === key
                  ? "bg-kleda-primary text-white font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Forklaring */}
      <p className="text-sm text-kleda-gray mb-4">
        {filter === "day" && "Daglige salgstall (i tusen)"}
        {filter === "month" && "Månedlige salgstall (tusen / millioner)"}
        {filter === "year" && "Årlige salgstall (i millioner)"}
      </p>

      {/* Chart */}
      <div className="h-[320px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={salesData[filter]}
      margin={{ top: 24, right: 20 }}
    >
      <XAxis dataKey="name" stroke="#6B7280" />
      <YAxis
  stroke="#6B7280"
  tickFormatter={(v) => formatSales(v, filter)}
  domain={filter === "day" ? [0, 100] : [0, "dataMax + 2000"]}
  ticks={filter === "day" ? [0, 20, 40, 60, 80, 100] : undefined}
  allowDataOverflow
/>

      <Tooltip formatter={(v: number) => formatSales(v, filter)} />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#C34C57"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}
