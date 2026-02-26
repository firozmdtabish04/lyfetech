import { ArrowRight, Instagram, Linkedin, Github, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../assets/image copy 3.png";
import hero2 from "../../assets/image copy 2.png";
import hero3 from "../../assets/Hero.png";
import centerImage from "../../assets/Tabish.jpg";

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
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const marqueeText =
    "🚧 Welcome to LYFETECH Odisha Projects Pvt. Ltd. | Trusted Construction & Electrical Partner | Quality • Safety • Innovation 🚧";

  return (
    <div className="text-white overflow-hidden">
      {/* MARQUEE */}
      <div className="bg-yellow-500 text-black py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="px-6 font-semibold text-sm sm:text-base">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          speed={1200}
          autoplay={{
            delay: 3000,
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

              <div
                className="
                relative z-20
                max-w-7xl mx-auto
                px-4 sm:px-6 lg:px-8
                min-h-[85vh] md:min-h-[90vh]
                flex items-center
                pb-40 md:pb-0
              "
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-xl lg:max-w-2xl"
                >
                  <motion.div
                    variants={item}
                    className="inline-block bg-white/10 px-4 py-2 rounded mb-4 text-sm"
                  >
                    {slide.tag}
                  </motion.div>

                  <motion.h1
                    variants={item}
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
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

                  <motion.div variants={item} className="mt-2 sm:mt-8">
                    <Link
                      to="/projects"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded font-semibold inline-flex items-center gap-4 transition"
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

        {/* PROFILE IMAGE */}
        <div
          className="
          absolute z-30 pointer-events-none

          bottom-6
          left-1/2
          -translate-x-1/2

          sm:bottom-8

          md:top-1/2
          md:bottom-auto
          md:left-auto
          md:right-10
          md:translate-x-0
          md:-translate-y-1/2

          lg:right-16
          xl:right-24
        "
        >
          <div className="relative text-center pointer-events-auto">
            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-30 scale-110"></div>

            <img
              src={centerImage}
              alt=""
              className="
                relative mx-auto
                w-24 h-24
                sm:w-28 sm:h-28
                md:w-36 md:h-36
                lg:w-44 lg:h-44
                xl:w-52 xl:h-52
                rounded-full
                border-4 border-yellow-400
                shadow-xl
                object-cover
              "
            />

            <h3 className="mt-3 text-sm sm:text-base md:text-lg font-bold">Tabish Firoz</h3>

            <p className="text-yellow-400 text-xs sm:text-sm">Full Stack Developer</p>

            <div className="flex justify-center gap-3 mt-3">
              <a className="bg-white/10 hover:bg-yellow-400 hover:text-black p-2 rounded-full transition">
                <Instagram size={16} />
              </a>

              <a className="bg-white/10 hover:bg-yellow-400 hover:text-black p-2 rounded-full transition">
                <Linkedin size={16} />
              </a>

              <a className="bg-white/10 hover:bg-yellow-400 hover:text-black p-2 rounded-full transition">
                <Github size={16} />
              </a>

              <a className="bg-white/10 hover:bg-yellow-400 hover:text-black p-2 rounded-full transition">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-yellow-500 text-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">5+</h3>
            <p className="text-sm md:text-base">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold">50+</h3>
            <p className="text-sm md:text-base">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold">10+</h3>
            <p className="text-sm md:text-base">Team Experts</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold">5+</h3>
            <p className="text-sm md:text-base">Industry Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
}
