import { motion } from "framer-motion";
import {
  Zap,
  Building2,
  Wrench,
  Factory,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

// services data
const services = [
  {
    icon: Zap,
    title: "Electrical Installation",
    desc: "Complete electrical wiring, maintenance, and industrial solutions.",
    direction: "left",
  },
  {
    icon: Building2,
    title: "Construction Projects",
    desc: "Residential, commercial, and infrastructure construction services.",
    direction: "right",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Professional repair and maintenance services.",
    direction: "left",
  },
  {
    icon: Factory,
    title: "Industrial Electrical",
    desc: "Industrial electrical system installation and automation.",
    direction: "right",
  },
  {
    icon: Lightbulb,
    title: "Energy Solutions",
    desc: "Smart and energy-efficient electrical systems.",
    direction: "left",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspection",
    desc: "Electrical safety inspection and certification.",
    direction: "right",
  },
];

// container animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// card animation
const cardVariant = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    y: 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 ">
      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400"
      >
        Our Services
      </motion.h2>

      {/* cards container */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              custom={service.direction}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-900 p-6 rounded-xl border border-yellow-500/20
              hover:border-yellow-400 transition-all duration-300
              hover:shadow-[0_15px_50px_rgba(234,179,8,0.25)]
              group cursor-pointer"
            >
              {/* floating icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon
                  size={42}
                  className="text-yellow-400 mb-4
                  group-hover:scale-125 group-hover:rotate-6
                  transition duration-300"
                />
              </motion.div>

              {/* title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                {service.desc}
              </p>

              {/* underline animation */}
              <div className="mt-4 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-400"></div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
