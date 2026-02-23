import { useState } from "react";
import MenuItems from "../../../config/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../../../assets/image.png";

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  // Check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Row */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 lg:h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {MenuItems.map((item, index) => {
              // Dropdown Menu
              if (item.children) {
                const dropdownActive = item.children.some(
                  (child) => location.pathname === child.path,
                );

                return (
                  <div key={index} className="relative group ">
                    {/* Parent */}
                    <div
                      className={`
                      flex items-center gap-1 cursor-pointer
                      font-semibold text-[16px]
                      ${
                        dropdownActive
                          ? "text-orange-500"
                          : "text-gray-800 hover:text-orange-500"
                      }
                    `}
                    >
                      {item.name}

                      <ChevronDown size={16} />
                    </div>

                    {/* Active underline */}
                    <span
                      className={`
                      absolute left-0 -bottom-2 h-[2px] bg-orange-500
                      transition-all duration-300
                      ${dropdownActive ? "w-full" : "w-0 group-hover:w-full"}
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
                      transition duration-200
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
                );
              }

              // Normal Link
              return (
                <Link key={index} to={item.path} className="relative group">
                  <span
                    className={`
                    font-semibold text-[16px]
                    transition duration-300
                    ${
                      isActive(item.path)
                        ? "text-orange-500"
                        : "text-gray-800 hover:text-orange-500"
                    }
                  `}
                  >
                    {item.name}
                  </span>

                  {/* Underline */}
                  <span
                    className={`
                    absolute left-0 -bottom-2 h-[2px] bg-orange-500
                    transition-all duration-300
                    ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <div className="hidden lg:flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />

              <span className="font-semibold text-sm text-gray-700">
                +91 98765 43210
              </span>
            </div>

            {/* Button */}
            <button
              className="
              bg-orange-500 hover:bg-orange-600
              text-white px-6 py-2.5 rounded-full
              font-semibold text-sm
              transition duration-300
            "
            >
              Get Estimate
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          {MenuItems.map((item, index) => (
            <div key={index}>
              {!item.children ? (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block px-6 py-4 border-b font-semibold
                    ${
                      isActive(item.path)
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-800"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <div
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className="px-6 py-4 font-semibold border-b cursor-pointer flex justify-between"
                  >
                    {item.name}
                    <ChevronDown size={18} />
                  </div>

                  {mobileDropdown &&
                    item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`
                        block pl-10 py-3 border-b font-medium
                        ${
                          isActive(child.path)
                            ? "text-orange-500 bg-orange-50"
                            : "text-gray-700"
                        }
                      `}
                      >
                        {child.name}
                      </Link>
                    ))}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
