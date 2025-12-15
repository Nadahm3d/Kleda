import type { ReactNode } from "react";

type KpiCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon?: ReactNode;
};

export default function KpiCard({
  title,
  value,
  description,
  icon,
}: KpiCardProps) {
  return (
    <div className="
    relative group bg-white rounded-xl shadow-card p-5
    flex items-center gap-4 border border-gray-100
    transition
    hover:bg-kleda-primary/10
    hover:border-kleda-primary">
  
      {icon && (
        <div className="p-3 bg-kleda-primary text-white rounded-lg">
          {icon}
        </div>
      )}

      <div>
        <p className="text-kleda-gray text-sm">{title}</p>
        <p className="text-xl font-semibold text-kleda-dark">{value}</p>
      </div>

      {/* Tooltip */}
      <div className="
        absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2
        rounded-lg bg-black text-white text-xs px-3 py-2
        opacity-0 group-hover:opacity-100
        transition pointer-events-none z-10
      ">
        {description}
      </div>
    </div>
  );
}

  