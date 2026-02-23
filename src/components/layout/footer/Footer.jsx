import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">LyfeTech</h2>

          <p className="text-sm leading-relaxed mb-4">
            Professional construction and electrical solutions with modern
            technology, quality work, and trusted engineering services across
            Odisha.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 border rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/service" className="hover:text-orange-500">
                Services
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-orange-500">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/service"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Residential Building
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Commercial Projects
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Renovation
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Infrastructure
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Electrical Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>

          <p className="text-sm mb-2">Bhubaneswar, Odisha, India</p>

          <p className="text-sm mb-2">
            <span className="font-semibold">Phone:</span> +91 7894298921
          </p>

          <p className="text-sm">
            <span className="font-semibold">Email:</span> contact@lyfetech.in
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">LyfeTech</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
