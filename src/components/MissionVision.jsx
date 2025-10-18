import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";
import bgImage from "../assets/vision.png"; // 🖼️ Your background image (e.g., car service image)

const MissionVision = () => {
  return (
    <section
      id="mission"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff90] via-[#f5f8ffdf] to-[#ffffff90]"></div>

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#01184E]"
        >
          Mission <span className="text-[#004AAD]">&</span> Vision
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Driving innovation and trust in every service we deliver.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg border border-[#004AAD]/10 rounded-3xl shadow-xl p-10 text-left hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#004AAD]/10 p-4 rounded-2xl">
              <Target className="text-[#004AAD]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#01184E]">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To simplify and digitize automotive service delivery, making it
            accessible, reliable, and transparent for every vehicle owner in
            India. We strive to bridge the gap between traditional automotive
            services and modern digital solutions.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg border border-[#004AAD]/10 rounded-3xl shadow-xl p-10 text-left hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#004AAD]/10 p-4 rounded-2xl">
              <Lightbulb className="text-[#004AAD]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#01184E]">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be India's leading tech-enabled automotive service platform,
            setting new standards in quality, trust, and customer satisfaction.
            We envision a future where every vehicle owner has access to
            reliable, transparent, and efficient automotive services.
          </p>
        </motion.div>
      </div>

      {/* Subtle Glow Accents */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#004AAD]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#01184E]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MissionVision;
