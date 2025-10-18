import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import carOff from "../assets/Caroff.png";
import carOn from "../assets/Caron.png";

const Hero = ({ scrollToSection }) => {
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Car Image (Lights Off) */}
      <motion.img
        src={carOff}
        alt="Car Off"
        className="absolute inset-0 w-full h-full object-cover brightness-90"
        initial={{ scale: 1 }}
        animate={{ scale: hovered || scrolled ? 1.05 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Lights On Overlay Image */}
      <motion.img
        src={carOn}
        alt="Car On"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered || scrolled ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Text Content - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left px-8 pt-25 md:px-28 max-w-110 md:max-w-4xl"
      >
        <h1 className="oswald-regular text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Your One-Stop Platform for
          <br />
          <span className="text-[#00A8FF]">24/7 Vehicle Repair & Maintenance</span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl leading-relaxed">
          Get expert car servicing, repairs, and genuine parts — anytime, anywhere. Transparent pricing and trusted professionals.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#004AAD] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#01184E] transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Book Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#004AAD] transition-all duration-300"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
