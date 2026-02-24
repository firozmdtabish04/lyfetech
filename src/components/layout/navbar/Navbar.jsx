import { useState } from "react";
import MenuItems from "../../../config/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../../../assets/image copy.png";

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (children) =>
    children?.some((child) => child.path === location.pathname);

  const toggleDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Navbar row */}
        <div
          className="
  flex items-center justify-between
  h-[60px]
  sm:h-[65px]
  md:h-[70px]
  lg:h-[75px]
"
        >
          {/* LEFT: Logo (unchanged image) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="LyfeTech Logo"
                className="
                mt-6
                  h-40
                  sm:h-40
                  md:h-40
                  lg:h-40
                  w-auto
                  object-contain
                  max-w-[160px]
                  sm:max-w-[180px]
                  md:max-w-[200px]
                  lg:max-w-[220px]
                "
              />
            </Link>
          </div>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 flex-shrink-0">
            {MenuItems.map((item, index) =>
              item.children ? (
                <div key={index} className="relative group">
                  <div
                    className={`
                      flex items-center gap-1 cursor-pointer font-semibold text-[15px] xl:text-[16px]
                      ${
                        isDropdownActive(item.children)
                          ? "text-yellow-500"
                          : "text-gray-800 hover:text-yellow-500"
                      }
                    `}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </div>

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300
                      ${isDropdownActive(item.children) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />

                  <div
                    className="
                      absolute left-0 top-full mt-2
                      w-56 bg-white border rounded-lg shadow-lg
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition duration-200
                      z-50
                    "
                  >
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className={`
                          block px-5 py-3 font-medium text-sm
                          ${
                            isActive(child.path)
                              ? "text-yellow-500 bg-orange-50"
                              : "text-gray-700 hover:bg-orange-50 hover:text-yellow-500"
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
                      font-semibold text-[15px] xl:text-[16px]
                      ${
                        isActive(item.path)
                          ? "text-yellow-500"
                          : "text-gray-800 hover:text-yellow-500"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300
                      ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              )
            )}
          </div>

          {/* RIGHT Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Phone */}
            <div className="hidden xl:flex items-center gap-2 whitespace-nowrap">
              <Phone size={18} className="text-yellow-500" />
              <span className="font-semibold text-sm text-gray-700">+91 7894298921</span>
            </div>

            {/* Estimate Button */}
            <Link to="/contact">
              <button
                className="
                  bg-orange-500 hover:bg-yellow-500
                  text-white
                  px-3 sm:px-4 lg:px-5
                  py-1.5 sm:py-2
                  rounded-full
                  font-semibold
                  text-xs sm:text-sm
                  transition
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
                w-9 h-9 sm:w-10 sm:h-10
                rounded-md
                text-black
                flex-shrink-0
              "
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (unchanged logic) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          {MenuItems.map((item, index) => {
            if (!item.children) {
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block px-5 py-3 font-semibold text-sm
                    ${
                      isActive(item.path)
                        ? "text-yellow-500 bg-orange-50"
                        : "text-gray-800 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <div key={index}>
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center justify-between px-5 py-3 font-semibold cursor-pointer hover:bg-gray-100"
                >
                  <span>{item.name}</span>

                  <ChevronDown
                    size={18}
                    className={`transition ${mobileDropdownOpen === index ? "rotate-180" : ""}`}
                  />
                </div>

                {mobileDropdownOpen === index && (
                  <div className="bg-orange-50">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block px-8 py-3 text-sm
                          ${
                            isActive(child.path)
                              ? "text-yellow-500 bg-white"
                              : "text-gray-700 hover:bg-white"
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
