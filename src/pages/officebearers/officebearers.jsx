import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, User } from "lucide-react";
import avatar from "../../assets/avatar.png";
import ClientTestimonials from "./ClientTestimonials";
export default function OfficeBearers() {
  const officeBearers = [
    {
      name: "Akhil Kumar",
      role: "President",
      image: avatar,
      phone: "+91 9876543210",
      email: "president@lyfetech.in",
      linkedin: "#",
    },
    {
      name: "Rahul Sharma",
      role: "Vice President",
      image: avatar,
      phone: "+91 9876543211",
      email: "vicepresident@lyfetech.in",
      linkedin: "#",
    },
    {
      name: "Priya Singh",
      role: "Secretary",
      image: avatar,
      phone: "+91 9876543212",
      email: "secretary@lyfetech.in",
      linkedin: "#",
    },
    {
      name: "Amit Das",
      role: "Treasurer",
      image: avatar,
      phone: "+91 9876543213",
      email: "treasurer@lyfetech.in",
      linkedin: "#",
    },
  ];

  return (
    <>
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="text-yellow-500">Team</span>
            </h2>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Meet our experienced leadership team driving excellence and innovation.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {officeBearers.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                    <a
                      href={`tel:${person.phone}`}
                      className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
                    >
                      <Phone size={18} className="text-white" />
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
                    >
                      <Mail size={18} className="text-white" />
                    </a>

                    <a
                      href={person.linkedin}
                      className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>

                  <p className="text-orange-500 text-sm font-medium mt-1">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section><ClientTestimonials/></section>
    </>
  );
}
