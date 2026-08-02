import { useState } from "react";
import MenuItems from "../../../config/MenuItems";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from "lucide-react";
import logo from "../../../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (children) =>
    children?.some((child) => child.path === location.pathname);

  return (
    <header className="fixed top-0 w-full z-[100] font-sans">
      {/* --- ADVANCE TOPBAR --- */}
      <div className="bg-[#0f172a] text-white py-2 border-b border-slate-700 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-between">
          {/* Social Icons - Visible on all devices, centered on mobile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden lg:inline-block text-[11px] uppercase tracking-widest text-slate-400 font-bold mr-2">
              Follow Us:
            </span>
            {[
              { icon: <Facebook size={14} />, link: "#" },
              { icon: <Instagram size={14} />, link: "#" },
              { icon: <Linkedin size={14} />, link: "#" },
              { icon: <Twitter size={14} />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Center: Infinite Marquee - HIDDEN ON MOBILE (sm:flex) */}
          <div className="hidden sm:flex flex-1 overflow-hidden relative h-6 mx-4">
            <div className="absolute whitespace-nowrap flex items-center animate-marquee-ltr">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="mx-6 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    Electrical Engineering Services
                  </span>

                  <span className="text-slate-500">|</span>

                  <span className="mx-6 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Medium Voltage (MV) Installation Works
                  </span>

                  <span className="text-slate-500">|</span>

                  <span className="mx-6 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Civil Engineering Services
                  </span>

                  <span className="text-slate-500">|</span>

                  <span className="text-slate-500">|</span>

                  <span className="mx-6 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    Electrical Consultancy Services
                  </span>

                  <span className="text-slate-500">|</span>

                  <span className="mx-6 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    Residential Building Construction
                  </span>

                  <span className="text-slate-500">|</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Info - HIDDEN ON MOBILE (hidden lg:flex) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="mailto:info@lyfetech.in"
              className="group flex items-center gap-2 text-[13px] font-medium hover:text-orange-400 transition-colors"
            >
              <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-orange-500/20 transition-colors">
                <Mail size={14} className="text-orange-500" />
              </div>
              <span>info@lyfetech.in</span>
            </a>
            <a
              href="tel:+917855004500"
              className="group flex items-center gap-2 text-[13px] font-medium hover:text-orange-400 transition-colors"
            >
              <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-orange-500/20 transition-colors">
                <Phone size={14} className="text-orange-500" />
              </div>
              <span>+91 78550-04500</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt="LyfeTech Logo"
                  className="h-32 sm:h-40 md:h-52 lg:h-52 pt-4 w-auto object-contain mt-2"
                />
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {MenuItems.map((item, index) =>
                item.children ? (
                  <div key={index} className="relative group py-8">
                    <div
                      className={`flex items-center gap-1 cursor-pointer font-bold text-[15px] uppercase tracking-wide transition-colors ${isDropdownActive(item.children) ? "text-orange-500" : "text-slate-700 hover:text-orange-500"}`}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    </div>
                    <span
                      className={`absolute bottom-6 left-0 h-[3px] bg-orange-500 transition-all duration-300 ${isDropdownActive(item.children) ? "w-full" : "w-0 group-hover:w-full"}`}
                    />

                    <div className="absolute left-0 top-[90px] w-64 bg-white border border-slate-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[80px] transition-all duration-300 z-50 p-2">
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${isActive(child.path) ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50 hover:text-orange-500"}`}
                        >
                          {child.name}
                          {isActive(child.path) && (
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={index} to={item.path} className="relative group py-8">
                    <span
                      className={`font-bold text-[15px] uppercase tracking-wide transition-colors ${isActive(item.path) ? "text-orange-500" : "text-slate-700 hover:text-orange-500"}`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`absolute bottom-6 left-0 h-[3px] bg-orange-500 transition-all duration-300 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                )
              )}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">
              <Link to="/Estimate-form">
                <button className="bg-orange-500 hover:bg-slate-900 text-white px-4 sm:px-7 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap shadow-lg uppercase tracking-wider">
                  Get Estimate
                </button>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-200"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-6 shadow-inner space-y-2">
            {MenuItems.map((item, index) => {
              if (!item.children) {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all ${isActive(item.path) ? "bg-orange-50 text-orange-600" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {item.name}
                    <div
                      className={`w-2 h-2 rounded-full ${isActive(item.path) ? "bg-orange-500" : "bg-slate-200"}`}
                    />
                  </Link>
                );
              }
              return (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`flex w-full items-center justify-between p-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 ${mobileDropdownOpen ? "text-orange-500" : ""}`}
                  >
                    {item.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-slate-50 rounded-xl ${mobileDropdownOpen ? "max-h-96 py-2" : "max-h-0"}`}
                  >
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-8 py-3 font-semibold text-sm transition ${isActive(child.path) ? "text-orange-500" : "text-slate-600"}`}
                      >
                        <span className="mr-3 text-orange-300">●</span> {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
