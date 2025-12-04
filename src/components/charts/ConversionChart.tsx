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
import { conversionData } from "../../data/conversionData";

export default function ConversionChart() {
  const [filter, setFilter] = useState<"day" | "month" | "year">("month");

  const periods = [
    { key: "day", label: "Dag" },
    { key: "month", label: "Måned" },
    { key: "year", label: "År" },
  ] as const;

  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      {/* Header + Filter */}
      <div className="flex justify-between items-center mb-4">
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

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={conversionData[filter]}>
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#C34C57"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
