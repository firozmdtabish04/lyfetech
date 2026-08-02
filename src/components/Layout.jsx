import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone, Mail, MapPin, ArrowUp, ArrowRight, ChevronRight } from "lucide-react";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col font-sans overflow-x-hidden">
      {/* ----------------------------------------------------------------- */}
      {/* BACKGROUND GRID & WATERMARK EFFECT (PERSISTENT ACROSS ALL PAGES)  */}
      {/* ----------------------------------------------------------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-14, -10, -14] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center transform opacity-80"
          >
            <h2
              className="text-[clamp(3.5rem,16vw,22rem)] font-black uppercase leading-none tracking-tighter text-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.05)" }}
            >
              LYFETECH
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* STICKY HEADER / NAVBAR                                            */}
      {/* ----------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shadow-md group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
              <Zap size={22} className="fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                LYFETECH
              </span>
              <span className="text-[10px] font-bold text-amber-600 tracking-widest uppercase">
                ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive ? "text-amber-600" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <Phone size={16} />
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-medium py-2 transition-colors ${
                    location.pathname === link.path ? "text-amber-600 font-bold" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-lg bg-amber-500 text-slate-900 font-bold text-center block"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ----------------------------------------------------------------- */}
      {/* PAGE CONTENT CONTAINER (INJECTS YOUR PAGE CONTENT HERE)          */}
      {/* ----------------------------------------------------------------- */}
      <main className="relative z-10 flex-grow">{children}</main>

      {/* ----------------------------------------------------------------- */}
      {/* GLOBAL REUSABLE CALL-TO-ACTION (CTA)                              */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative z-10 bg-slate-900 text-white py-16 px-6 lg:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap size={14} /> Start Your Project Today
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to build innovative engineering solutions with us?
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Contact our team of technical experts to discuss your upcoming electrical, civil, or
              automation projects.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              Schedule Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+1234567890"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 border border-slate-700"
            >
              <Phone size={18} className="text-amber-400" /> Direct Call
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FOOTER                                                            */}
      {/* ----------------------------------------------------------------- */}
      <footer className="relative z-10 bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                <Zap size={20} className="fill-current" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">LYFETECH</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Engineering innovative, reliable, and sustainable solutions across electrical, civil
              construction, and industrial automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight size={14} className="text-amber-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-amber-500" /> Electrical Engineering
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-amber-500" /> Civil Construction
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-amber-500" /> Industrial Automation
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-amber-500" /> Technical Consultancy
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>123 Industrial Parkway, Tech Hub, Suite 400</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400 shrink-0" />
                <span>+1 (555) 019-2834</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400 shrink-0" />
                <span>info@lyfetech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-xs text-center text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} LYFETECH Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* ----------------------------------------------------------------- */}
      {/* FLOATING BACK TO TOP BUTTON                                      */}
      {/* ----------------------------------------------------------------- */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-amber-500 text-slate-950 shadow-xl hover:bg-amber-400 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
