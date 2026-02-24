import { ShieldCheck, Clock, Users, Trophy, ArrowRight } from "lucide-react";
import aboutImg1 from "../../assets/Hero.png";
import aboutImg2 from "../../assets/Hero.png";

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE SECTION */}
        <div className="relative">
          {/* Main Image */}
          <img src={aboutImg1} alt="Construction" className="rounded-xl shadow-lg" />

          {/* Small overlay image */}
          <img
            src={aboutImg2}
            alt="Crane"
            className="absolute -bottom-10 right-10 w-64 rounded-xl shadow-lg border-4 border-white"
          />

          {/* Experience Badge */}
          <div className="absolute top-6 right-6 bg-yellow-500 text-white w-20 h-20 flex flex-col items-center justify-center rounded-full font-bold shadow-lg">
            <span className="text-lg">5+</span>
            <span className="text-xs">Years</span>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div>
          {/* Tag */}
          <p className="text-yellow-500 font-semibold mb-2 uppercase tracking-wide">
            About LYFETECH
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            We Build With Precision, Passion & Purpose
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            LYFETECH ODISHA PROJECTS PVT. LTD. delivers world-class construction and electrical
            solutions across residential, commercial, and infrastructure sectors. Our commitment to
            quality and client satisfaction drives everything we do.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <ShieldCheck className="text-yellow-500" />
              <div>
                <h4 className="font-semibold">Licensed & Insured</h4>
                <p className="text-sm text-gray-500">Fully certified and insured projects.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="text-yellow-500" />
              <div>
                <h4 className="font-semibold">On-Time Delivery</h4>
                <p className="text-sm text-gray-500">Always delivered on schedule.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Users className="text-yellow-500" />
              <div>
                <h4 className="font-semibold">Expert Workforce</h4>
                <p className="text-sm text-gray-500">Skilled engineers & technicians.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Trophy className="text-yellow-500" />
              <div>
                <h4 className="font-semibold">Award Winning</h4>
                <p className="text-sm text-gray-500">Industry recognized excellence.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-gray-800 hover:text-white transition">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
