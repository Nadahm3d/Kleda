type KpiCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
};

export default function KpiCard({ title, value, icon }: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-card p-5 flex items-center gap-4 border border-gray-100">
      {icon && (
        <div className="p-3 bg-kleda-primary text-white rounded-lg">
          {icon}
        </div>
      )}
      <div>
        <p className="text-kleda-gray text-sm">{title}</p>
        <p className="text-xl font-semibold text-kleda-dark">{value}</p>
      </div>
    </div>
  );
}

  