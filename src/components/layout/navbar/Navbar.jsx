import { useState } from "react";
import MenuItems from "../../../config/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Building2 } from "lucide-react";
import logo from "../../../assets/image.png";

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (children) =>
    children?.some((child) => child.path === location.pathname);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
              <Building2 className="text-orange-500" size={20} />
            </div>

            <img
              src={logo}
              alt="LyfeTech Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {MenuItems.map((item, index) =>
              item.children ? (
                <div key={index} className="relative group">
                  {/* Parent */}
                  <div
                    className={`
                    flex items-center gap-1 cursor-pointer font-semibold text-[16px]
                    ${
                      isDropdownActive(item.children)
                        ? "text-orange-500"
                        : "text-gray-800 hover:text-orange-500"
                    }
                  `}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </div>

                  {/* underline */}
                  <span
                    className={`
                    absolute left-0 -bottom-2 h-[2px] bg-orange-500 transition-all duration-300
                    ${
                      isDropdownActive(item.children)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                  />

                  {/* Dropdown */}
                  <div
                    className="
                    absolute left-0 top-full
                    w-56
                    bg-white border rounded-lg shadow-lg
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition duration-200 z-50
                  "
                  >
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className={`
                          block px-5 py-3 font-medium
                          ${
                            isActive(child.path)
                              ? "text-orange-500 bg-orange-50"
                              : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                          }
                        `}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={index} to={item.path} className="relative group">
                  <span
                    className={`
                    font-semibold text-[16px]
                    ${
                      isActive(item.path)
                        ? "text-orange-500"
                        : "text-gray-800 hover:text-orange-500"
                    }
                  `}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`
                    absolute left-0 -bottom-2 h-[2px] bg-orange-500 transition-all duration-300
                    ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  />
                </Link>
              ),
            )}
          </div>

          {/* Right Section */}
          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Phone (desktop only) */}
            <div className="hidden lg:flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />
              <span className="font-semibold text-sm text-gray-700">
                +91 7894298921
              </span>
            </div>

            {/* Estimate Button */}
            <Link to="/contact">
              <button
                className="
      bg-orange-500 hover:bg-orange-600
      text-white
      px-4 sm:px-5
      py-2
      rounded-full
      font-semibold
      text-sm
      transition duration-300
      whitespace-nowrap
      "
              >
                Get Estimate
              </button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
      lg:hidden
      flex items-center justify-center
      w-10 h-10
      rounded-md
      hover:bg-gray-100
      transition
      flex-shrink-0
    "
            >
              {mobileOpen ? (
                <X size={26} className="text-gray-800" />
              ) : (
                <Menu size={26} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-1">
          {MenuItems.map((item, index) => {
            if (!item.children) {
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
              block px-4 py-3 rounded-md font-semibold transition
              ${
                isActive(item.path)
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-800 hover:bg-gray-100"
              }
            `}
                >
                  {item.name}
                </Link>
              );
            }

            // Dropdown item
            return (
              <div key={index}>
                {/* Parent */}
                <div
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between px-4 py-3 font-semibold cursor-pointer rounded-md hover:bg-gray-100 transition"
                >
                  <span className="text-orange-500">{item.name}</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown box */}
                {mobileDropdownOpen && (
                  <div className="ml-3 mt-2 bg-orange-50 rounded-lg border border-orange-100 overflow-hidden">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`
                    block px-4 py-3 font-medium transition
                    ${
                      isActive(child.path)
                        ? "text-orange-500 bg-white"
                        : "text-gray-700 hover:bg-white hover:text-orange-500"
                    }
                  `}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
