import { useState } from "react";
import MenuItems from "../../../config/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#020617] text-white border-b border-slate-800 sticky top-0 z-50">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            lyfetech
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {MenuItems.map((item, index) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className="relative flex items-center gap-2 group"
              >
                <Icon
                  size={18}
                  className={`transition ${
                    active
                      ? "text-blue-400"
                      : "text-slate-400 group-hover:text-blue-400"
                  }`}
                />

                <span
                  className={`transition font-medium ${
                    active
                      ? "text-blue-400"
                      : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-2 h-[2px] bg-blue-400 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-slate-900 transition-all duration-300 overflow-hidden
          ${open ? "max-h-[400px]" : "max-h-0"}
        `}
      >
        {MenuItems.map((item, index) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-6 py-4 border-b border-slate-800
              ${
                active
                  ? "text-blue-400 bg-slate-800"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
