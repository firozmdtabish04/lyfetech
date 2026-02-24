import { motion } from "framer-motion";
import { Home, Building2, Wrench, Route, ClipboardList, PencilRuler } from "lucide-react";

import serviceImage from "../../assets/Hero.png";

const services = [
  {
    icon: Home,
    title: "Residential Building",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.",
    direction: "left",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit.",
    direction: "right",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    direction: "left",
  },
  {
    icon: Route,
    title: "Road & Infrastructure",
    desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    direction: "right",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    direction: "left",
  },
  {
    icon: PencilRuler,
    title: "Architecture & Design",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    direction: "right",
  },
];

const cardVariant = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -40 : 40,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Our Services
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img src={serviceImage} className="w-full h-[480px] object-cover" alt="services" />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                We Deliver Excellence in Every Project
              </h3>

              <button className="text-yellow-500 font-semibold hover:translate-x-1 transition">
                Get a Free Consultation →
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  custom={service.direction}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  className="
                  bg-white
                  border
                  border-gray-200
                  rounded-lg
                  p-6
                  flex
                  items-start
                  gap-4
                  hover:border-yellow-500
                  hover:shadow-md
                  transition-all
                  duration-300
                  cursor-pointer
                  group
                  "
                >
                  {/* icon box */}
                  <div
                    className="
                  w-20
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-orange-100
                  group-hover:bg-orange-500
                  transition
                  "
                  >
                    <Icon
                      size={25}
                      className="
                      text-yellow-400
                      group-hover:text-white
                      transition
                      "
                    />
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>

                    <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
