import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y1f7g7t", "template_k6v9qvi", form.current, "jbpNd-lB9-QGazFkH")
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("ERROR:", error);
        alert("Failed to send message");
      });
  };

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
                  className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
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
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500 text-black"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500"
                />

                <select
                  name="service"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500 text-black"
                >
                  <option value="">Select a Service</option>
                  <option>Electrical Installation</option>
                  <option>Construction</option>
                  <option>Maintenance</option>
                  <option>Industrial Projects</option>
                </select>
              </div>

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500 text-black"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Describe your project requirements..."
                required
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-orange-500 text-black"
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
