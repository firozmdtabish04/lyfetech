import { Zap, Building2, Wrench, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-[90vh] px-6">
        {/* background glow */}
        <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full top-20"></div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">LYFETECH ODISHA</span>

            <span className="block text-yellow-400 animate-pulse">
              PROJECTS PVT. LTD.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Professional Construction & Electrical Solutions with Modern
            Technology, Quality Work, and Trusted Engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold
            hover:bg-yellow-400 transition-all duration-300
            hover:scale-110 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            >
              Our Services
            </button>

            <button
              className="border border-yellow-500 px-6 py-3 rounded-lg font-semibold
            hover:bg-yellow-500 hover:text-black transition-all duration-300
            hover:scale-110"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-slate-900 p-6 rounded-xl border border-yellow-500/20
          hover:border-yellow-400 transition-all duration-300
          hover:scale-105 hover:shadow-[0_10px_40px_rgba(234,179,8,0.3)]
          group cursor-pointer"
          >
            <Zap
              className="text-yellow-400 mb-4 group-hover:scale-125 transition"
              size={40}
            />

            <h3 className="text-xl font-semibold mb-2">
              Electrical Installation
            </h3>

            <p className="text-gray-400">
              Complete electrical wiring, maintenance, and industrial solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-slate-900 p-6 rounded-xl border border-yellow-500/20
          hover:border-yellow-400 transition-all duration-300
          hover:scale-105 hover:shadow-[0_10px_40px_rgba(234,179,8,0.3)]
          group cursor-pointer"
          >
            <Building2
              className="text-yellow-400 mb-4 group-hover:scale-125 transition"
              size={40}
            />

            <h3 className="text-xl font-semibold mb-2">
              Construction Projects
            </h3>

            <p className="text-gray-400">
              Residential, commercial, and infrastructure construction services.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-slate-900 p-6 rounded-xl border border-yellow-500/20
          hover:border-yellow-400 transition-all duration-300
          hover:scale-105 hover:shadow-[0_10px_40px_rgba(234,179,8,0.3)]
          group cursor-pointer"
          >
            <Wrench
              className="text-yellow-400 mb-4 group-hover:scale-125 transition"
              size={40}
            />

            <h3 className="text-xl font-semibold mb-2">Maintenance & Repair</h3>

            <p className="text-gray-400">
              Professional repair and maintenance services for electrical
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to start your project?
        </h2>

        <button
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold
        hover:scale-110 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Get Quote
          <ArrowRight />
        </button>
      </section>
    </div>
  );
}
