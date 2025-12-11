import { X, Home, Info, MessageSquare, User, Bell, Settings, LogOut, Rocket } from "lucide-react";
import NavLinkItem from "./NavLinkItem";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <img src="/kleda-logo.svg" alt="Kleda" className="h-10" />
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Menu links */}
        <div className="space-y-2">
          <NavLinkItem icon={<Rocket />} label="Velkommen" active />
          <NavLinkItem icon={<Home color="#C34C57" />} label="Hjem" />
          <NavLinkItem icon={<Info />} label="Informasjon" />
          <NavLinkItem icon={<MessageSquare />} label="Tilbakemelding" />
        </div>

        {/* User section */}
        <div className="mt-8 opacity-40">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div>
              <p className="font-medium">Navn</p>
              <p className="text-sm text-gray-500">@Brukernavn</p>
            </div>
          </div>

          <div className="space-y-2">
            <NavLinkItem icon={<User />} label="Profil" />
            <NavLinkItem icon={<Bell />} label="Varsler" />
            <NavLinkItem icon={<Settings />} label="Innstillinger" />
            <NavLinkItem icon={<LogOut />} label="Logg ut" />
          </div>

          <button className="
            bg-kleda-primary text-white w-full py-3 rounded-lg mt-4
            text-lg font-medium hover:bg-kleda-primary/90
          ">
            Logg inn / Registrer
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto text-center text-xs text-gray-500">
          <div className="flex justify-center gap-3 mb-2">
            <a href="#" className="underline">Vilkår og betingelser</a>
            <a href="#" className="underline">Personvern</a>
          </div>
          <p>Copyright © 2024 Kleda. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

