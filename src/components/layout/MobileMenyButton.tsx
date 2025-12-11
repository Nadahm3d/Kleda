import { Menu } from "lucide-react";

export default function MobileMenuButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="p-2 rounded-md text-kleda-dark hover:bg-gray-100 transition"
    >
      <Menu size={28} />
    </button>
  );
}
