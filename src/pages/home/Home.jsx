import { ArrowRight, Instagram, Linkedin, Github, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../assets/image copy 3.png";
import hero2 from "../../assets/image copy 2.png";
import hero3 from "../../assets/Hero.png";
import centerImage from "../../assets/developer.jpeg";

export default function Home() {
  const slides = [
    {
      image: hero1,
      tag: "Trusted Construction Partner",
      title: "Building Tomorrow's Infrastructure",
      highlight: "Today",
      desc: "Professional Construction & Electrical Solutions with modern technology and trusted expertise.",
    },
    {
      image: hero2,
      tag: "Engineering Excellence",
      title: "Innovative Electrical",
      highlight: "Solutions",
      desc: "Reliable electrical installation, maintenance, and industrial engineering services.",
    },
    {
      image: hero3,
      tag: "Quality & Precision",
      title: "Strong Foundations",
      highlight: "Forever",
      desc: "Delivering high-quality construction projects with safety and precision.",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-white overflow-hidden">
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        {/* ================= TOP BAR ================= */}
        <div className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-md py-3 flex justify-between items-center px-4 md:px-8 z-40">
          {/* LEFT SOCIAL ICONS */}
          <div className="flex gap-2 md:gap-4">
            {[Instagram, Linkedin, Github, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white/10 hover:bg-yellow-400 hover:text-black p-2 rounded-full transition hover:scale-110"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* RIGHT CONTACT INFO */}
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
            {/* EMAIL */}
            <a
              href="mailto:info@lyfetech.in"
              className="flex items-center gap-1 md:gap-2 hover:text-yellow-400 transition"
            >
              <Mail className="text-yellow-400" size={14} />
              <span className="hidden sm:inline">info@lyfetech.in</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:8102946894"
              className="hidden sm:flex items-center gap-1 md:gap-2 hover:text-yellow-400 transition"
            >
              <Phone className="text-yellow-400" size={14} />
              <span>8102946894</span>
            </a>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          speed={1200}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="absolute inset-0"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] md:min-h-[90vh] flex items-center pb-40 md:pb-0">
                <motion.div
                  key={index}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-xl lg:max-w-2xl"
                >
                  <motion.div
                    variants={item}
                    className="inline-block bg-white/10 px-4 py-2 rounded mb-4 text-sm backdrop-blur-sm"
                  >
                    {slide.tag}
                  </motion.div>

                  <motion.h1
                    variants={item}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    {slide.title}
                    <span className="text-yellow-400 block sm:inline"> {slide.highlight}</span>
                  </motion.h1>

                  <motion.p
                    variants={item}
                    className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-lg"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div variants={item} className="mt-6 sm:mt-8 mb-40">
                    <Link
                      to="/projects"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded font-semibold inline-flex items-center gap-3 transition-transform hover:scale-105"
                    >
                      Explore Our Projects
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= PROFILE CARD ================= */}
        <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-30 scale-110"></div>

            <img
              src={centerImage}
              alt="Profile"
              className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-yellow-400 shadow-2xl object-cover animate-float"
            />

            <h3 className="mt-3 text-sm sm:text-base md:text-lg font-bold">Vishaal Kumar Jhaa</h3>

            <p className="text-yellow-400 text-xs sm:text-sm">Full Stack Developer</p>

            <p className="mt-2 leading-relaxed">
              “At LYFETECH, we believe strong foundations build lasting relationships”
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-yellow-500 text-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "10+", label: "Team Experts" },
            { value: "5+", label: "Industry Awards" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-2xl md:text-4xl font-bold">{stat.value}</h3>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
