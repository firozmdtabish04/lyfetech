import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2, MessageCircle, PencilRuler, Cog, KeyRound } from "lucide-react";

import p1 from "../../assets/Hero.png";
import p2 from "../../assets/elec.png";
import p3 from "../../assets/image copy 2.png";
import p4 from "../../assets/image copy 4.png";
import p5 from "../../assets/image copy 5.png";
import p6 from "../../assets/image copy 6.png";

// ================= PROJECT DATA =================

const projectsData = [
  {
    image: p1,
    category: "Residential",
    title: "Road and Construction",
    desc: "Premium residential complex with contemporary architecture",
  },
  {
    image: p2,
    category: "Commercial",
    title: "Metro Business Hub",
    desc: "State-of-the-art office complex in the city center",
  },
  {
    image: p3,
    category: "Infrastructure",
    title: "Riverside Highway Bridge",
    desc: "Major bridge connecting the northern corridor",
  },
  {
    image: p4,
    category: "Residential",
    title: "Lakeview Apartments",
    desc: "Modern lakeside living with panoramic views",
  },
  {
    image: p5,
    category: "Commercial",
    title: "Central Shopping Plaza",
    desc: "Multi-level retail destination with modern amenities",
  },
  {
    image: p6,
    category: "Infrastructure",
    title: "Northern Rail Terminal",
    desc: "Multi-modal transportation hub for the metro area",
  },
];

const filters = ["All", "Residential", "Commercial", "Infrastructure"];

// ================= HOW WE WORK DATA =================

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    desc: "We discuss your requirements and understand your project goals.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Planning & Design",
    desc: "Our team creates detailed plans and design solutions.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Construction",
    desc: "We execute the construction with precision and quality.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Project Handover",
    desc: "We deliver the completed project with full satisfaction.",
  },
];

// ================= MAIN COMPONENT =================

export default function ProjectsAndWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* ================= PROJECTS SECTION ================= */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="text-yellow-500">Projects</span>
            </h2>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2 rounded-full font-medium transition
                  ${
                    activeFilter === filter
                      ? "bg-orange-500 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-xs bg-orange-500 px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold mt-2">{project.title}</h3>

                  <p className="text-sm text-gray-200 mt-1">{project.desc}</p>
                </div>

                {/* Hover Buttons */}
                <div
                  className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  flex flex-col gap-3
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                "
                >
                  {/* Expand */}
                  <button
                    className="
                    bg-orange-500
                    w-10 h-10
                    rounded-full
                    flex items-center justify-center
                    hover:bg-orange-600
                  "
                  >
                    <Maximize2 size={18} className="text-white" />
                  </button>

                  {/* Arrow */}
                  <button
                    className="
                    bg-orange-500
                    w-10 h-10
                    rounded-full
                    flex items-center justify-center
                    hover:bg-orange-600
                  "
                  >
                    <ArrowRight size={18} className="text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW WE WORK SECTION ================= */}

      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              How We <span className="text-yellow-500">Work</span>
            </h2>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Number */}
                  <div className="text-6xl font-bold text-orange-100">{step.number}</div>

                  {/* Icon */}
                  <div
                    className="
                    w-16 h-16 mx-auto my-4
                    flex items-center justify-center
                    rounded-full bg-orange-500 text-white
                    hover:scale-110 transition
                  "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-800">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
