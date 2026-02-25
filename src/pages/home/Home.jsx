import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../assets/image copy 3.png";
import hero2 from "../../assets/image copy 2.png";
import hero3 from "../../assets/Hero.png";

import About from "../about/About";

import Services from "../service/Services";
import Project from "../projects/Projects";
import Team from "../officebearers/officebearers";
import Contact from "../contact/Contact";

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
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <img
                src={slide.image}
                alt="Construction"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Animated Content */}
              <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 min-h-[90vh] flex items-center">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="max-w-3xl"
                >
                  {/* Tag */}
                  <motion.div
                    variants={item}
                    className="inline-block bg-white/10 px-4 py-2 rounded mb-4 text-sm backdrop-blur-sm"
                  >
                    {slide.tag}
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={item}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                  >
                    {slide.title} <span className="text-yellow-400">{slide.highlight}</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={item}
                    className="mt-6 text-gray-300 max-w-xl text-base sm:text-lg"
                  >
                    {slide.desc}
                  </motion.p>

                  {/* Button */}
                  <motion.div variants={item} className="mt-8">
                    <Link
                      to="/projects"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded font-semibold transition duration-300 inline-flex items-center gap-2"
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
      </section>

      {/* STATS */}
      <section className="bg-yellow-500 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">50+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
            <p>Team Experts</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">5+</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section>
        <About />
        <Services />
        <Project />
        <Team />
        <Contact />
      </section>
    </div>
  );
}
