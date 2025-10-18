import React from "react";
import { motion } from "framer-motion";
import { Car, Zap, Clock, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <CheckCircle2 className="w-10 h-10 text-[#004AAD]" />,
    title: "Vehicle Inspection",
    desc: "Comprehensive 78-point vehicle health check with detailed diagnostics and repair recommendations.",
    features: [
      "Doorstep Inspections",
      "Fault Detection",
      "Repair Recommendations",
    ],
  },
  {
    icon: <Clock className="w-10 h-10 text-[#004AAD]" />,
    title: "Express Service",
    desc: "Quick and efficient service for bikes and cars with expert technicians at your doorstep.",
    features: ["Same Day Service", "Expert Technicians", "Genuine Parts"],
  },
  {
    icon: <Zap className="w-10 h-10 text-[#004AAD]" />,
    title: "EV Repair",
    desc: "Specialized electric vehicle repair and maintenance services with certified technicians.",
    features: ["Battery Diagnostics", "Motor Repair", "Software Updates"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#F8FAFF] to-[#E8EFFF] relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#01184E]"
        >
          Our <span className="text-[#004AAD]">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
        >
          Premium automotive care designed for speed, precision, and reliability.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 group transition-all duration-300 hover:-translate-y-3"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-[#01184E] mb-3 group-hover:text-[#004AAD] transition-colors duration-300 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mb-6">{service.desc}</p>

            {/* Sub-features */}
            <ul className="space-y-2">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#004AAD] transition-colors duration-300"
                >
                  <Car className="w-4 h-4 text-[#004AAD]" />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
