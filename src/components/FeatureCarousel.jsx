import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import all assets correctly
import allInOneImg from "../assets/allinone.png";
import verified from "../assets/verified.png";
import tracking from "../assets/tracking.png";
import time from "../assets/24.png";
import price from "../assets/price.png"; // double-check path & spelling
import nation from "../assets/nation.png"; // double-check path & spelling

const features = [
  {
    title: "All-in-One App Ecosystem",
    description:
      "Manage all your vehicle needs in one sleek platform, from service to delivery.",
    image: allInOneImg,
  },
  {
    title: "Verified Service Providers",
    description:
      "All our partners are certified professionals you can trust, anywhere in India.",
    image: verified,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track every move of your service request with real-time location updates.",
    image: tracking,
  },
  {
    title: "24/7 Support",
    description:
      "Instant help, anytime, anywhere — our AI + human support team never sleeps.",
    image: time,
  },
  {
    title: "Transparent Pricing",
    description:
      "No surprises, no fine print. Just fair, upfront pricing every time.",
    image: price, // ✅ Ensure image path correct and file exists
  },
  {
    title: "Nationwide Coverage",
    description:
      "From metro cities to small towns — Zenix is with you, everywhere.",
    image: nation, // ✅ Ensure image path correct and file exists
  },
];

const FeatureCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const next = () => setCurrent((prev) => (prev + 1) % features.length);
  const prev = () => setCurrent((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#ffffff] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#004AAD]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#01184E]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#01184E] mb-16 tracking-tight">
          Experience <span className="text-[#004AAD]">Zenix Advantage</span>
        </h2>

        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 80, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, y: -80, scale: 0.9, rotateY: -15 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative bg-white/50 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-10 md:p-14 w-full max-w-4xl flex flex-col items-center text-center"
            >
              {/* 🔹 Bigger Image */}
              <motion.img
                src={features[current].image}
                alt={features[current].title}
                className="w-64 h-64 object-contain mb-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                onError={(e) => (e.target.style.display = "none")} // hides broken image if missing
              />

              <motion.h3
                className="text-2xl md:text-3xl font-semibold text-[#004AAD] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {features[current].title}
              </motion.h3>

              <motion.p
                className="text-gray-700 text-lg max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {features[current].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-12 p-3 md:p-4 bg-white/70 hover:bg-white rounded-full shadow-md backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#004AAD]" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-12 p-3 md:p-4 bg-white/70 hover:bg-white rounded-full shadow-md backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#004AAD]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {features.map((_, idx) => (
            <motion.span
              key={idx}
              onClick={() => setCurrent(idx)}
              whileHover={{ scale: 1.2 }}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                current === idx
                  ? "bg-[#004AAD] shadow-[0_0_10px_#004AAD]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
