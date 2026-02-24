import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import avatar from "../../assets/avatar.png";

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Olivia Nguyen",
      role: "Real Estate Agent",
      image: avatar,
      text: "Excellent service and professional team.",
      rating: 5,
    },
    {
      name: "James Harrison",
      role: "Property Developer",
      image: avatar,
      text: "Highly recommend their construction expertise.",
      rating: 5,
    },
    {
      name: "Rebecca Collins",
      role: "Homeowner",
      image: avatar,
      text: "Delivered project on time with great quality.",
      rating: 5,
    },
    {
      name: "Michael Torres",
      role: "Business Owner",
      image: avatar,
      text: "Professional and reliable company.",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      role: "Architect",
      image: avatar,
      text: "Amazing teamwork and execution.",
      rating: 5,
    },
    {
      name: "Daniel Smith",
      role: "Engineer",
      image: avatar,
      text: "Very satisfied with their service.",
      rating: 5,
    },
  ];

  // chunk into groups of 3
  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < testimonials.length; i += chunkSize) {
    chunks.push(testimonials.slice(i, i + chunkSize));
  }

  const [activeIndex, setActiveIndex] = useState(0);

  // pause control
  const [isPaused, setIsPaused] = useState(false);

  // interval ref
  const intervalRef = useRef(null);

  // auto slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === chunks.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, chunks.length]);

  return (
    <section
      className="py-20 bg-[#f8f9fa]"
      onMouseEnter={() => setIsPaused(true)} // pause on hover
      onMouseLeave={() => setIsPaused(false)} // resume on leave
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Client <span className="text-yellow-500">Testimonials</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            See what our clients say about our professional services.
          </p>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {chunks[activeIndex].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm italic mb-6">"{client.text}"</p>

                {/* Client */}
                <div className="flex items-center gap-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">{client.name}</h4>

                    <p className="text-orange-500 text-sm">{client.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {chunks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-orange-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
