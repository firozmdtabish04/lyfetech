import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { LineChart } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      line1: "LYFETECH Odisha Projects Pvt. Ltd.",
      line2: "Odisha, India",
    },
    {
      icon: Phone,
      title: "Call Us",
      line1: "+91 7894298921",
      line2: "+91 9876543210",
    },
    {
      icon: Mail,
      title: "Email Us",
      line1: "info@lyfetech.in",
      line2: "support@lyfetech.in",
    },
    {
      icon: Clock,
      title: "Working Hours",
      line1: "Mon - Fri: 9:00 AM - 6:00 PM",
      line2: "Sat: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Contact LYFETECH for construction, electrical, and infrastructure services.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition"
                >
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Icon size={22} className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>

                    <p className="text-gray-600 text-sm mt-1">{item.line1}</p>

                    <p className="text-gray-600 text-sm">{item.line2}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                />

                <select
                  className="border 
                text-gray-400 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                >
                  <option>Select a Service</option>
                  <option>Electrical Installation</option>
                  <option>Construction</option>
                  <option>Maintenance</option>
                  <option>Industrial Projects</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Subject"
                className=" border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Describe your project requirements..."
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
