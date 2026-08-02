import {
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  Users,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import contactHero from "../../../assets/7.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-12 pb-40 mt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 ">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Glow Effects */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
              <CheckCircle size={16} />
              Get In Touch
            </span>

            {/* Breadcrumb */}

            {/* Heading */}

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
              Let's Build
              <span className="block text-orange-500">Together</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Connect with LYFETECH Odisha Projects Pvt. Ltd. for construction, electrical
              engineering, industrial infrastructure, and project consultation services.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
                Contact Us
                <ArrowRight size={20} className="transition group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+917855004500"
                className="flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 text-white backdrop-blur hover:bg-white hover:text-slate-900 transition"
              >
                <Phone size={18} />
                +91 7855004500
              </a>
            </div>

            {/* Statistics */}
          </div>

          {/* Right */}

          <div className="relative hidden lg:flex justify-center">
            {/* Image */}

            <img
              src={contactHero}
              alt="Engineering Team"
              className="relative z-10 w-full max-w-lg rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,.5)]"
            />

            {/* Floating Card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
