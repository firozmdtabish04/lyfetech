import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Zap, Cpu, Building } from "lucide-react";
import HeroImage3 from "../../assets/hero5.png"; // Using the Electrical Engineering photo
import HeroImage1 from "../../assets/hero1.png";
import HeroImage2 from "../../assets/hero2.png";
import HeroImage4 from "../../assets/hero6.png";
import { Link } from "react-router-dom";

export default function Home() {
  const heroImages = [HeroImage4, HeroImage2, HeroImage3, HeroImage1];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative bg-white min-h-screen pt-20 overflow-hidden">
      {/* BACKGROUND GRID EFFECT */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.6]"
        style={{
          backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* WATERMARK EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden select-none">
        <h2 className="text-[12vw] font-black text-slate-900/[.2] rotate-[-15deg] whitespace-nowrap">
          LYFETECH
        </h2>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-6">
              <Zap size={16} />
              Reliable Engineering Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Engineering <span className="text-amber-500">Innovative Solutions</span> for a Better
              Tomorrow
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              With expertise across electrical engineering, civil construction, industrial
              automation, and consultancy, we provide comprehensive services tailored to meet the
              evolving needs of industries, businesses, and communities. Quality, integrity, and
              excellence define every project we undertake.
            </p>

            {/* Quick Stats/Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500">Quality Assured</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Certified</p>
                <p className="text-sm text-slate-500">Engineers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500">Technical Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Engineering"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImage === index ? "w-8 h-2 bg-amber-500" : "w-2 h-2 bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-full -z-0 blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-50 rounded-full -z-0 blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary Section (White Background Cards) */}
      <section className="relative z-10 py-16 bg-slate-50/80 backdrop-blur-sm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap className="text-amber-500" size={32} />}
              title="Electrical Engineering"
              desc="Power distribution, MV installations, and industrial electrical solutions built for reliability."
            />
            <ServiceCard
              icon={<Building className="text-amber-500" size={32} />}
              title="Civil Construction"
              desc="Modern infrastructure and structural construction delivered with precision and integrity."
            />
            <ServiceCard
              icon={<Cpu className="text-amber-500" size={32} />}
              title="Consultancy"
              desc="Expert technical design, project management, and safety inspections for large-scale projects."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative z-10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
