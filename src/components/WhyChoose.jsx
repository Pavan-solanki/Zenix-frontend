import React from "react";
import { motion } from "framer-motion";
import {
  AppWindow,
  ShieldCheck,
  MapPin,
  Clock,
  Headphones,
  IndianRupee,
} from "lucide-react";

const features = [
  {
    icon: AppWindow,
    title: "All-in-One App Ecosystem",
    desc: "Seamlessly manage vehicle servicing, tracking, and payments in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Service Providers",
    desc: "Partnered with certified professionals ensuring trusted quality and reliability.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Track your service status live — from pick-up to delivery.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to assist you anytime.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden costs — pay only what you see with clear estimates and invoices.",
  },
  {
    icon: Headphones,
    title: "Nationwide Coverage",
    desc: "Expanding across cities to bring reliable services to every doorstep in India.",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#f8fbff] to-[#eef3ff] overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#01184E]"
        >
          Why Choose <span className="text-[#004AAD]">Zenix?</span>
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Experience reliability, transparency, and innovation — all in one platform.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-[#004AAD]/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#004AAD]/10 p-4 rounded-2xl group-hover:bg-[#004AAD]/20 transition-all duration-500">
                  <Icon className="text-[#004AAD]" size={36} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#01184E] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#004AAD]/10 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#01184E]/10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default WhyChoose;
