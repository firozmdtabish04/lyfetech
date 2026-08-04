import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, ExternalLink, Award, ShieldCheck } from "lucide-react";
import avatar from "../../assets/avatar.png";
import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Profile4 from "../../assets/profile1.png";
import Profile5 from "../../assets/profile2.png";
import Profile6 from "../../assets/profile4.png";

import ClientTestimonials from "./ClientTestimonials";

const officeBearers = [
  {
    name: "Sonali Mohanty",
    role: "Director",
    // image: Profile2,
    phone: "+91 XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "Sonali Mohanty serves as the Director of LYFETECH Odisha Projects Pvt. Ltd., providing strategic leadership and driving the company's vision for excellence in engineering, infrastructure, and project management. She is committed to delivering innovative, high-quality, and sustainable solutions while fostering long-term client relationships and organizational growth.",
    expertise: "Business Strategy & Project Management",
  },
  {
    // name: "Amiya Kanta Das",
    role: "Electrical Contractor",
    // image: Profile1,
    phone: "+91XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "Amiya Kanta Das is an experienced Electrical Contractor specializing in electrical infrastructure, power distribution systems, industrial installations, and project execution. He is committed to delivering safe, reliable, and high-quality engineering solutions.",
    expertise: "Electrical Infrastructure & Project Execution",
  },

  {
    // name: "Saroj Kumar Khuntia",
    role: "Engineer",
    // image: Profile3,
    phone: "+91 XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "Saroj Kumar Khuntia is an Engineer with extensive experience in civil and electrical engineering projects. He ensures technical excellence, quality standards, and efficient execution throughout every stage of project development.",
    expertise: "Engineering & Technical Operations",
  },
  {
    // name: "J. Subhashree Mohapatra",
    role: "Home Owner",
    // image: Profile4,
    phone: "+91 XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "J. Subhashree Mohapatra represents the perspective of homeowners, emphasizing quality construction, customer satisfaction, and practical solutions that meet residential infrastructure needs.",
    expertise: "Residential Development & Client Relations",
  },
  {
    // name: "Rashmi Ranjan Jena",
    role: "Real Estate Agent",
    // image: Profile5,
    phone: "+91 XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "Rashmi Ranjan Jena is a Real Estate Agent with expertise in property consulting, investment guidance, and market analysis. He assists clients in identifying valuable real estate opportunities while ensuring transparency and trust.",
    expertise: "Real Estate Consulting",
  },
  {
    // name: "Rajat Kumar Patra",
    role: "Property Developer",
    // image: Profile6,
    phone: "+91 XXXXX XXXXX",
    email: "info@lyfetech.in",
    linkedin: "#",
    bio: "Rajat Kumar Patra is a Property Developer experienced in residential and commercial development projects. He oversees planning, execution, and project delivery with a focus on quality, sustainability, and long-term value creation.",
    expertise: "Property Development & Infrastructure",
  },
];

const OfficeBearers = () => {
  return (
    <div className="overflow-x-hidden w-full pt-8">
      {/* --- Section Header --- */}
      <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-yellow-600 bg-yellow-100 rounded-full"
          >
            Our Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight"
          >
            Meet the Visionaries Behind <span className="text-yellow-500">LyfeTech</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* --- Office Bearers List --- */}
      <section className="py-12 md:py-16">
        <div
          className="
  max-w-6xl
  mx-auto
  px-4
  sm:px-6
  lg:px-8
  space-y-16
  md:space-y-28
  overflow-hidden
"
        >
          {officeBearers.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-4/12 flex justify-center relative">
                <div
                  className="
  relative
  group
  w-full
  max-w-[260px]
  sm:max-w-[300px]
  lg:max-w-[320px]
"
                >
                  {/* Decorative Background Blur */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-100 to-orange-50 rounded-full blur-2xl opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 p-2 md:p-2.5 bg-white border border-slate-100 shadow-xl rounded-[2rem]"
                  >
                    <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-100">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 lg:group-hover:scale-105"
                      />

                      {/* Social Overlay - Visible on mobile bottom, Hover on desktop */}
                      <div className="absolute inset-0 bg-black/40 lg:bg-black/40 flex items-center justify-center gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] lg:backdrop-blur-[2px] max-lg:inset-auto max-lg:bottom-0 max-lg:w-full max-lg:p-4 max-lg:bg-gradient-to-t max-lg:from-black/80 max-lg:to-transparent">
                        <SocialIcon
                          href={`tel:${person.phone}`}
                          icon={<Phone size={18} />}
                          label="Call"
                        />
                        <SocialIcon
                          href={`mailto:${person.email}`}
                          icon={<Mail size={18} />}
                          label="Email"
                        />
                        <SocialIcon
                          href={person.linkedin}
                          icon={<Linkedin size={18} />}
                          label="LinkedIn"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Icon Badge */}
                  <div
                    className="
  hidden
  sm:block
  absolute
  -bottom-4
  -right-4
  z-20
  bg-yellow-500
  text-white
  p-4
  rounded-xl
  shadow-lg
"
                  >
                    <ShieldCheck size={20} className="md:w-6 md:h-6" />
                  </div>
                </div>
              </div>

              {/* Text Content Side */}
              <div
                className="
  w-full
  lg:w-8/12
  text-center
  lg:text-left
  space-y-6
  px-2
  sm:px-4
  overflow-hidden
"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="hidden lg:block h-[2px] w-8 bg-yellow-500"></span>
                    <span className="text-yellow-600 font-bold uppercase tracking-widest text-[20px] md:text-xl">
                      {person.role}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {person.name}
                  </h3>
                </div>

                <p
                  className="
  text-sm
  sm:text-base
  md:text-lg
  leading-7
  md:leading-8
  text-slate-600
  max-w-2xl
  mx-auto
  lg:mx-0
  break-words
"
                >
                  {person.bio}
                </p>

                {/* Info Cards - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <InfoCard
                    icon={<Award className="text-yellow-500" size={18} />}
                    label="Core Expertise"
                    value={person.expertise}
                  />
                  <InfoCard
                    icon={<Mail className="text-yellow-500" size={18} />}
                    label="Email Address"
                    value={person.email}
                  />
                </div>

                <div className="pt-2">
                  <motion.a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-yellow-500 pb-1 text-sm transition-colors hover:text-yellow-600"
                  >
                    Connect on LinkedIn <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="relative py-20 border-t border-slate-100">
        <ClientTestimonials />
      </section>
    </div>
  );
};

// --- Sub-components with better touch support ---

const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 md:w-11 md:h-11 bg-white text-slate-900 flex items-center justify-center rounded-xl shadow-lg hover:bg-yellow-500 hover:text-white transition-all"
  >
    {icon}
  </motion.a>
);

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex-shrink-0 p-2.5 bg-slate-50 rounded-xl group-hover:bg-yellow-50 transition-colors">
      {icon}
    </div>
    <div className="min-w-0 text-left">
      <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">
        {label}
      </p>
      <p className="text-slate-800 font-bold truncate text-xs md:text-sm">{value}</p>
    </div>
  </div>
);

export default OfficeBearers;
