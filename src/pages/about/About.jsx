import { ShieldCheck, Clock, Users, Trophy, ArrowRight } from "lucide-react";
import aboutImg1 from "../../assets/Hero.png";
import aboutImg2 from "../../assets/elec.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-yellow-500">Lyfetech</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            <img src={aboutImg1} alt="Construction" className="rounded-xl shadow-lg" />

            <img
              src={aboutImg2}
              alt="Crane"
              className="absolute -bottom-10 right-10 w-64 rounded-xl shadow-lg border-4 border-white"
            />

            <div className="absolute top-6 right-6 bg-yellow-500 text-white w-20 h-20 flex flex-col items-center justify-center rounded-full font-bold shadow-lg">
              <span className="text-lg">5+</span>
              <span className="text-xs">Years</span>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div>
            <p className="text-yellow-500 font-semibold mb-2 uppercase tracking-wide">
              About LYFETECH
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Build With Precision, Passion & Purpose
            </h2>

            <p className="text-gray-600 mb-8">
              LYFETECH ODISHA PROJECTS PVT. LTD. delivers world-class construction and electrical
              solutions across residential, commercial, and infrastructure sectors.
            </p>

            {/* Features */}
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

              <button className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-yellow-500 bg-black hover:text-white transition">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
