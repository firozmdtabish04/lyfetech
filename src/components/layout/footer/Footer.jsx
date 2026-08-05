import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

  return (
    <footer className="relative bg-slate-100 text-slate-600  border-slate-200 overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-[180px] font-black tracking-widest text-slate-900 absolute -bottom-10 -left-10 leading-none">
          LYFETECH
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto  lg:px-8 py-3 z-10">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
              {/* Company Bio */}
              <div className="space-y-4">
                <Link to="/" className="inline-block group">
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-500 transition-colors">
                    LYFETECH
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Odisha Projects Pvt. Ltd.
                  </p>
                  <div className="mt-2 h-1 w-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full group-hover:w-28 transition-all duration-300" />
                </Link>

                <p className="text-sm leading-relaxed text-slate-600 pt-2">
                  Delivering innovative construction, infrastructure, electrical engineering, and
                  industrial solutions with precision and reliability.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-extrabold uppercase tracking-widest text-sm text-slate-900 mb-5">
                  Company
                </h3>
                <ul className="space-y-3 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-slate-600 hover:text-amber-600 font-medium transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-extrabold uppercase tracking-widest text-sm text-slate-900 mb-5">
                  Contact
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span className="leading-snug text-slate-600">
                      Ground Floor, Plot No. 892/5984/5983, Palasuni, Rasulgarh, Bhubaneswar, Odisha
                      - 751025
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Phone className="text-amber-500 shrink-0" size={18} />
                    <a
                      href="tel:+917855004500"
                      className="text-slate-700 font-semibold hover:text-amber-600 transition-colors"
                    >
                      +91 7855004500
                    </a>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="text-amber-500 shrink-0 mt-1" size={18} />
                    <div className="space-y-1">
                      <a
                        href="mailto:info@lyfetech.in"
                        className="block text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        info@lyfetech.in
                      </a>
                      <a
                        href="mailto:md@lyfetech.in"
                        className="block text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        md@lyfetech.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP CARD */}
          <div className="xl:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-amber-500/10">
              {/* Header */}
              <div className="relative bg-slate-900 p-6 text-white">
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                      Corporate Office
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">Our Location</h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      Visit our office for project consultation and business enquiries.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md">
                    <MapPin size={22} />
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <iframe
                  title="LyfeTech Location Map"
                  src="https://www.google.com/maps?q=Ground+Floor,+Plot+No.+892/5984/5983,+Palasuni,+Rasulgarh,+Bhubaneswar,+Odisha+751025&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                />

                {/* Floating Office Badge overlay on Map */}
                <div className="absolute left-4 bottom-4 right-4 max-w-xs rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                  <div className="flex gap-3 items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">LYFETECH Office</h4>
                      <p className="text-[11px] leading-tight text-slate-500 line-clamp-2 mt-0.5">
                        Ground Floor, Plot No. 892/5984/5983, Palasuni, Rasulgarh, Bhubaneswar,
                        Odisha - 751025
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 border-t border-slate-200 bg-white text-xs font-bold">
                <a
                  href="https://maps.google.com/?q=Ground+Floor,+Plot+No.+892/5984/5983,+Palasuni,+Rasulgarh,+Bhubaneswar,+Odisha+751025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 text-slate-700 hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <MapPin size={16} />
                  Open Maps
                </a>

                <a
                  href="tel:+917855004500"
                  className="flex items-center justify-center gap-2 border-l border-slate-200 py-4 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  Call Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & ENTERPRISE FOOTER */}
      <div className="relative overflow-hidden bg-slate-950 text-slate-400 border-t border-amber-500/20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Copyright Text */}
            <div className="text-center lg:text-left space-y-1">
              <h4 className="text-white font-bold tracking-wider uppercase text-sm">
                LYFETECH Odisha Projects Pvt. Ltd.
              </h4>
              <p className="text-xs text-slate-400">
                Delivering Excellence in Electrical & Civil Engineering Solutions Across India.
              </p>
              <p className="text-xs text-slate-500 pt-2">
                © {new Date().getFullYear()} LYFETECH Odisha Projects Pvt. Ltd. All Rights Reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-bold">
              <Link to="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-amber-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Developer Attribution Line */}
          <div className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
            Designed & Developed by{" "}
            <a
              href="https://lyient.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              Lyient Solutions
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919937219000?text=${encodeURIComponent(
            "Hello LYFETECH Team,\n\nI would like to know more about your services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white p-3 md:px-5 md:py-3 rounded-2xl shadow-xl flex items-center gap-2.5 hover:bg-emerald-600 transition-all hover:-translate-y-0.5 active:scale-95"
          aria-label="WhatsApp Support"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5"
          />

          <div className="hidden md:flex flex-col leading-none">
            <span className="text-[10px] uppercase tracking-wider text-emerald-100">Chat with</span>
            <span className="font-bold text-sm">LYFETECH</span>
          </div>
        </a>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className={`bg-white text-slate-900 p-3 md:px-5 md:py-3 rounded-2xl shadow-xl flex items-center gap-2.5 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 border border-slate-200 ${
            showTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
          <span className="hidden md:inline font-bold text-xs tracking-wide">Top</span>
        </button>
      </div>
    </footer>
  );
}
