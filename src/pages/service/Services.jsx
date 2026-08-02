import { motion } from "framer-motion";
import {
  Zap,
  Settings,
  Building2,
  ClipboardCheck,
  Home,
  Cpu,
  CheckCircle2,
  ShieldAlert,
  BarChart3,
  FileText,
  HardHat,
  Microscope,
  WrenchIcon,
} from "lucide-react";

const services = [
  {
    no: "01",
    icon: Zap,
    title: "Electrical Engineering",

    desc: "Comprehensive HT & LT electrical infrastructure including power distribution, solar integration, and industrial automation.",
    details: [
      "HT/LT Panel & Switchgear",
      "Transformer Erection (Up to 33kV)",
      "Industrial Wiring & Cabling",
      "Earthing & Lightning Protection",
      "DG Set & Solar Installation",
      "AMC & Preventive Maintenance",
    ],
    color: "bg-amber-500",
    shadow: "hover:shadow-amber-200/50",
    text: "text-amber-600",
  },
  {
    no: "02",
    icon: Cpu,
    title: "MV Installation Works",

    desc: "End-to-end Medium Voltage solutions for power utilities and heavy industries, focusing on 11kV/33kV networks.",
    details: [
      "Substation Construction",
      "RMU & VCB Installation",
      "Relay Testing & Calibration",
      "U/G Cable Laying & Termination",
      "Overhead Line Erection",
      "Grid Synchronization",
    ],
    color: "bg-blue-600",
    shadow: "hover:shadow-blue-200/50",
    text: "text-blue-600",
  },
  {
    no: "03",
    icon: Building2,
    title: "Civil & Infrastructure",

    desc: "Heavy-duty industrial civil works, from deep foundations to structural RCC and factory layouts.",
    details: [
      "RCC Frame Structures",
      "Industrial Machine Foundations",
      "Heavy-duty Flooring (VDF)",
      "Site Development & Earthworks",
      "Commercial Complexes",
      "Drainage & Water Systems",
    ],
    color: "bg-slate-700",
    shadow: "hover:shadow-slate-300/50",
    text: "text-slate-700",
  },
  {
    no: "04",
    icon: WrenchIcon,
    title: "Cable Laying Works",

    desc: "Professional cable laying solutions for power distribution and industrial infrastructure, ensuring safe installation, protection, and long-term reliability.",
    details: [
      "HT & LT Underground Cable Laying",
      "Cable Trench & Duct Installation",
      "Cable Tray & Ladder Installation",
      "Cable Jointing & Termination",
      "Power & Control Cable Routing",
      "Testing, Commissioning & Documentation",
    ],
    color: "bg-orange-600",
    shadow: "hover:shadow-orange-200/50",
    text: "text-orange-600",
  },
  {
    no: "05",
    icon: ClipboardCheck,
    title: "Electrical Consultancy",

    desc: "Strategic engineering consultancy including load audits, safety certifications, and cost optimization.",
    details: [
      "Electrical Load Planning",
      "Energy & Safety Audits",
      "BOQ & Tender Preparation",
      "Project Management (PMC)",
      "Feasibility Studies",
      "SLD & Layout Design",
    ],
    color: "bg-cyan-700",
    shadow: "hover:shadow-cyan-200/50",
    text: "text-cyan-700",
  },
  {
    no: "06",
    icon: Home,
    title: "Residential Building Construction",

    desc: "Complete architectural and engineering solutions for premium residential townships and villas.",
    details: [
      "Turnkey Construction",
      "Premium Interior Finishing",
      "MEP Integration",
      "Landscaping & External Dev",
      "Structural Retrofitting",
      "Smart Home Wiring",
    ],
    color: "bg-emerald-700",
    shadow: "hover:shadow-emerald-200/50",
    text: "text-emerald-700",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-transparent py-24 overflow-hidden mt-16">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#444 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
          {[
            { icon: BarChart3, label: "MSME UDYAM Certified", sub: "OD-19-0167040" },
            { icon: ShieldAlert, label: "GST Registered", sub: "21AAGCL2956FIZQ" },
            { icon: Microscope, label: "Precision Testing", sub: "NABL Standards" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm"
            >
              <stat.icon className="text-amber-600" size={24} />
              <div>
                <p className="text-slate-900 font-bold text-sm leading-none">{stat.label}</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold mt-1 tracking-wider">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p className="text-amber-600 font-black tracking-widest text-sm uppercase mb-3">
            Our Expertise
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">
            Engineering{" "}
            <span className="text-amber-500 underline decoration-slate-200">Excellence</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="grid gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className={`group relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 transition-all duration-500 shadow-xl ${service.shadow}`}
            >
              {/* Background Watermark Number */}
              <span className="absolute right-10 top-0 text-[10rem] font-black text-slate-50 select-none pointer-events-none group-hover:text-slate-100 transition-colors">
                {service.no}
              </span>

              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                {/* Left Side: Summary */}
                <div className="lg:w-1/3">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                  <p className={`${service.text} font-bold text-xs uppercase tracking-widest mb-2`}>
                    {service.standard}
                  </p>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Right Side: Grid Items */}
                <div className="lg:w-2/3 lg:pl-12 lg:border-l border-slate-100">
                  <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-slate-200"></span>
                    Portfolio Scope
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.details.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 transition-all group/item"
                      >
                        <CheckCircle2
                          className={`shrink-0 ${service.text} opacity-40 group-hover/item:opacity-100 transition-opacity`}
                          size={18}
                        />
                        <span className="text-slate-700 font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framework Section */}
        <div className="mt-32 rounded-[3rem] bg-slate-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />

          <h4 className="text-3xl font-bold mb-12 relative z-10">Project Execution Framework</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
            {[
              { icon: FileText, step: "Consulting" },
              { icon: Settings, step: "Designing" },
              { icon: HardHat, step: "Execution" },
              { icon: Zap, step: "Testing" },
              { icon: CheckCircle2, step: "Handover" },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                  <p.icon size={24} className="text-white" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">
                  {p.step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
