import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Electrical Engineering",
    "MV Installation Works",
    "Civil & Infrastructure",
    "Cable Laying Works",
    "Electrical Consultancy",
  ];

  return (
    <footer className="relative bg-gray-200 text-slate-600 pt-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Company Bio */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-500">
                LYFETECH
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-700 tracking-wide">
                Odisha Projects Pvt. Ltd.
              </p>

              <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 group-hover:w-32" />
            </Link>

            <p className="text-sm leading-relaxed font-medium">
              Delivering innovative construction, infrastructure, electrical engineering and
              industrial solutions with precision and reliability since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-amber-500" />
              Company
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-amber-600 transition-colors group text-slate-500"
                  >
                    <ChevronRight
                      size={14}
                      className="text-amber-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-amber-500" />
              Our Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/service"
                    className="flex items-center gap-2 hover:text-amber-600 transition-colors group text-slate-500"
                  >
                    <ChevronRight
                      size={14}
                      className="text-amber-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-amber-500" />
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-amber-600 shrink-0" size={20} />
                <span className="text-sm leading-relaxed">
                  Ground Floor, Plot No. 892/5984/5983, Palasuni, Rasulgarh, Bhubaneswar, Odisha -
                  751025
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-amber-600 shrink-0" size={20} />
                <a
                  href="tel:+917855004500"
                  className="text-slate-900 font-bold hover:text-amber-600 transition-colors"
                >
                  +91 7855004500
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-amber-600 shrink-0" size={20} />
                <div className="text-sm font-bold space-y-1">
                  <a
                    href="mailto:info@lyfetech.in"
                    className="block text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    info@lyfetech.in
                  </a>
                  <a
                    href="mailto:md@lyfetech.in"
                    className="block text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    md@lyfetech.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-full h-80 grayscale hover:grayscale-0 transition-all duration-700 border-t border-slate-300">
        <iframe
          title="LyfeTech Location"
          src="https://www.google.com/maps?q=Ground+Floor,+Plot+No.+892/5984/5983,+Palasuni,+Rasulgarh,+Bhubaneswar,+Odisha+751025&output=embed"
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      {/* COPYRIGHT FOOTER */}
      {/* ================= Enterprise Bottom Footer ================= */}
      <div className="relative overflow-hidden border-t border-amber-500/30">
        {/* Construction / Electrical Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/90" />

        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Golden Glow */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-1">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-bold tracking-wider uppercase text-lg">
                LYFETECH Odisha Projects Pvt. Ltd.
              </h4>

              <p className="text-slate-400 text-sm">
                Delivering Excellence in Electrical & Civil Engineering Solutions Across India.
              </p>

              <p className="mt-5 text-slate-500 text-sm">
                © {new Date().getFullYear()} LYFETECH Odisha Projects Pvt. Ltd.
                <br />
                All Rights Reserved.
              </p>
            </div>

            {/* Center */}
            <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />

            {/* Right */}
            <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.2em] font-bold">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/sitemap"
                className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Bottom Line */}
          <div className=" border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-l text-slate-400 text-center md:text-right ">
              Designed & Developed by{" "}
              <a
                href="https://lyient.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Lyient Solutions
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-4 lg:right-8 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9937219000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 md:px-5 md:py-3 rounded-2xl shadow-xl flex items-center gap-3 hover:bg-green-600 transition-all hover:-translate-y-1 active:scale-95 group"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WA"
            className="w-6 h-6"
          />
          <span className="hidden md:block font-bold text-sm tracking-tight">Support</span>
        </a>

        {/* Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-white text-slate-9 00 p-3 md:px-5 md:py-3 rounded-2xl shadow-xl flex items-center gap-3 hover:bg-amber-500 hover:text-white transition-all hover:-translate-y-1 active:scale-95 group border border-slate-200"
        >
          <ArrowUp size={20} strokeWidth={3} />
          <span className="hidden md:block font-extrabold text-sm tracking-tight">Top</span>
        </button>
      </div>
    </footer>
  );
}
