import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/Hero.png"; 
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Tag */}
          <div className="inline-block bg-white/10 px-4 py-2 rounded mb-4 text-sm">
            Trusted Construction Partner
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Building Tomorrow's Infrastructure <span className="text-yellow-400">Today</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 max-w-xl">
            Professional Construction & Electrical Solutions with modern technology, quality work,
            and trusted engineering expertise.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold transition">
                Explore Our Projects
              </button>
            

            <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition flex items-center gap-2">
              Goto Services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-yellow-500 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p>Team Experts</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">5+</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
}
