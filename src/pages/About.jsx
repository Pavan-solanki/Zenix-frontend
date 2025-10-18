import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png"; // ← replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side — Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#01184E] mb-6">
            About <span className="text-[#004AAD]">ZENIX</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Redefining vehicle servicing through a <span className="font-semibold text-[#004AAD]">digital-first platform</span>. 
            No more unverified mechanics or hidden charges. Zenix solves these 
            with our unique <span className="font-semibold text-[#004AAD]">3-app ecosystem</span>, ensuring trust, transparency, 
            and convenience for every vehicle owner in India.
          </p>

          <div className="grid grid-cols-2 gap-4 text-[#01184E] font-medium">
            <div className="bg-[#F2F6FF] rounded-2xl p-4 hover:bg-[#E6EEFF] transition">
              🚗 Trusted Mechanics
            </div>
            <div className="bg-[#F2F6FF] rounded-2xl p-4 hover:bg-[#E6EEFF] transition">
              📱 Digital Ecosystem
            </div>
            <div className="bg-[#F2F6FF] rounded-2xl p-4 hover:bg-[#E6EEFF] transition">
              💡 Transparent Pricing
            </div>
            <div className="bg-[#F2F6FF] rounded-2xl p-4 hover:bg-[#E6EEFF] transition">
              ⚙️ 24/7 Availability
            </div>
          </div>
        </motion.div>

        {/* Right Side — Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#004AAD]/10 rounded-full blur-3xl"></div>
          <img
            src={aboutImg}
            alt="About Zenix"
            className="relative z-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
