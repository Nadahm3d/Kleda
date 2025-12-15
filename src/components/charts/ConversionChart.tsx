import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  
} from "recharts";
import { conversionData } from "../../data/conversionData";

type Period = "day" | "month" | "year";

export default function ConversionChart() {
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
        <h3 className="text-lg font-semibold text-kleda-dark">
          Konverteringsrate
        </h3>

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
        Viser konverteringsrate i prosent (%)
      </p>

      {/* Chart */}
      <div className="h-[320px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={conversionData[filter]}
      margin={{ top: 24, right: 20 }}
    >
      <XAxis dataKey="name" stroke="#6B7280" />
      <YAxis
        stroke="#6B7280"
        tickFormatter={(v) => `${v}%`}
        domain={[0, "dataMax + 1"]}
        allowDataOverflow
      />
      <Tooltip formatter={(v: number) => `${v}%`} />
      <Line
        type="monotone"
        dataKey="rate"
        stroke="#C34C57"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}
