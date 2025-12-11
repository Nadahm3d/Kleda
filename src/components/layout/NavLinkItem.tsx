import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};

export default function NavLinkItem({ icon, label, active }: Props) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer 
        ${active ? "bg-gray-100 font-medium" : "text-kleda-dark hover:bg-gray-100"}
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg">{label}</span>
    </div>
  );
}
