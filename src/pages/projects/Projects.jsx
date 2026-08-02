import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Cpu,
  Building2,
  Settings,
  ClipboardCheck,
  Home,
  LayoutGrid,
  ArrowUpRight,
  MessageCircle,
  PencilRuler,
  Cog,
  KeyRound,
  ChevronDown,
  Filter,
  X,
} from "lucide-react";

// ... keep your asset imports (p1, p2, etc.) exactly as they are ...
import p1 from "../../assets/1.jpeg";
import p2 from "../../assets/2.jpeg";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.jpeg";
import p5 from "../../assets/5.jpeg";
import p6 from "../../assets/6.jpeg";
import p7 from "../../assets/7.jpeg";
import p8 from "../../assets/7.jpeg";
import p9 from "../../assets/9.png";
import p10 from "../../assets/12.jpeg";
import p11 from "../../assets/11.jpeg";
import p12 from "../../assets/12.jpeg";
import p13 from "../../assets/13.jpeg";
import p14 from "../../assets/14.jpeg";
import p15 from "../../assets/15.jpeg";

const projectsData = [
  {
    image: p1,
    category: "Electrical Engineering Services",
    title: "HT/LT Switchgear Panel Installation",
    desc: "Installation and commissioning of HT/LT electrical switchgear panels.",
  },
  {
    image: p8,
    category: "Medium Voltage (MV) Installation Works",
    title: "1 MVA Compact Substation",
    desc: "11kV/433V compact substation with transformer and RMU.",
  },
  {
    image: p15,
    category: "Civil Engineering Services",
    title: "Industrial Infrastructure",
    desc: "Comprehensive civil construction and site development.",
  },
  {
    image: p4,
    category: "Electrical Consultancy Services",
    title: "Project Site Supervision",
    desc: "Quality inspection and project management consultancy.",
  },
  {
    image: p9,
    category: "Medium Voltage (MV) Installation Works",
    title: "11kV RMU Installation",
    desc: "Ring Main Unit installation with safety protection systems.",
  },

  {
    image: p2,
    category: "Residential Building Construction",
    title: "Premium Housing Foundation",
    desc: "Turnkey residential structural works and foundations.",
  },
  {
    image: p7,
    category: "Electrical Engineering Services",
    title: "HT Control Room Setup",
    desc: "Internal electrification and HT control panel maintenance.",
  },
  {
    image: p11,
    category: "Medium Voltage (MV) Installation Works",
    title: "Transmission Line Erection",
    desc: "Overhead 33kV line installation using crane assistance.",
  },
];

const filterConfigs = [
  { label: "All", icon: LayoutGrid },
  { label: "Electrical Engineering Services", icon: Zap },
  { label: "Medium Voltage (MV) Installation Works", icon: Cpu },
  { label: "Civil Engineering Services", icon: Building2 },
  { label: "Electrical Consultancy Services", icon: ClipboardCheck },
  { label: "Residential Building Construction", icon: Home },
];

export default function ProjectsAndWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const counts = useMemo(() => {
    const obj = { All: projectsData.length };
    projectsData.forEach((p) => {
      obj[p.category] = (obj[p.category] || 0) + 1;
    });
    return obj;
  }, []);

  const filteredProjects =
    activeFilter === "All" ? projectsData : projectsData.filter((p) => p.category === activeFilter);

  const activeConfig = filterConfigs.find((f) => f.label === activeFilter);

  return (
    <div className="bg-transparent">
      <section className="relative py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Our <span className="text-yellow-500">Portfolio</span>
            </h2>
            <div className="h-1.5 w-20 bg-yellow-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* ADVANCED FILTER SYSTEM */}
          <div className="sticky top-24 z-50 mb-12">
            {/* 1. DESKTOP FILTER BAR (Visible on md and up) */}
            <div className="hidden md:block bg-white/20 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-3 overflow-hidden">
              <div className="flex items-center  overflow-x-auto no-scrollbar">
                {filterConfigs.map((config) => (
                  <button
                    key={config.label}
                    onClick={() => setActiveFilter(config.label)}
                    className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-500 whitespace-nowrap
                      ${activeFilter === config.label ? "text-white" : "text-slate-500 hover:bg-slate-100"}
                    `}
                  >
                    {activeFilter === config.label && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 bg-slate-900 rounded-2xl shadow-xs "
                      />
                    )}
                    <config.icon
                      size={18}
                      className={`relative z-10 ${activeFilter === config.label ? "text-yellow-400" : "text-slate-400"}`}
                    />
                    <span className="relative z-10">{config.label}</span>
                    <span
                      className={`relative z-10 text-[14px] px-3  rounded-full ${activeFilter === config.label ? "bg-yellow-500 text-slate-900" : "bg-slate-100 text-slate-500"}`}
                    >
                      {counts[config.label] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. MOBILE FILTER TRIGGER (Visible on small screens) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-full flex items-center justify-between bg-slate-900 text-white p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-2 rounded-lg text-slate-900">
                    <activeConfig.icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Category
                    </p>
                    <p className="text-sm font-bold truncate max-w-[200px]">{activeFilter}</p>
                  </div>
                </div>
                <div className="bg-slate-800 p-2 rounded-lg">
                  <Filter size={20} className="text-yellow-500" />
                </div>
              </button>
            </div>
          </div>

          {/* MOBILE FILTER OVERLAY MENU */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden"
                />
                {/* Menu Card */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[3rem] p-8 z-[70] md:hidden max-h-[85vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-black text-slate-900">Filter Projects</h3>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 bg-slate-100 rounded-full text-slate-900"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {filterConfigs.map((config) => (
                      <button
                        key={config.label}
                        onClick={() => {
                          setActiveFilter(config.label);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all
                          ${activeFilter === config.label ? "border-yellow-500 bg-yellow-50" : "border-slate-50 bg-slate-50"}
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-xl ${activeFilter === config.label ? "bg-yellow-500 text-slate-900" : "bg-white text-slate-400 shadow-sm"}`}
                          >
                            <config.icon size={22} />
                          </div>
                          <span
                            className={`font-bold text-sm ${activeFilter === config.label ? "text-slate-900" : "text-slate-500"}`}
                          >
                            {config.label}
                          </span>
                        </div>
                        <span className="bg-white px-3 py-1 rounded-full text-[12px] font-black text-slate-400 shadow-sm">
                          {counts[config.label] || 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* PROJECT GRID */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-600 mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
