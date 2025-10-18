import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Car,
  SprayCan,
  Cpu,
  Package,
} from "lucide-react";

const services = [
  {
    title: "General Repairs",
    description:
      "Complete vehicle repair solutions handled by certified professionals.",
    icon: Wrench,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Stay ahead of breakdowns with routine maintenance and system checkups.",
    icon: ShieldCheck,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Emergency Roadside Assistance",
    description:
      "Get instant towing and breakdown support anytime, anywhere.",
    icon: Car,
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Body & Paint Services",
    description:
      "Premium dent, paint, and body restoration for a brand-new look.",
    icon: SprayCan,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Electrical & Diagnostics",
    description:
      "Precision diagnostics and electrical fixes using modern tools.",
    icon: Cpu,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Spare Parts Delivery",
    description:
      "Fast, verified spare parts delivery from trusted partners across India.",
    icon: Package,
    gradient: "from-cyan-500 to-sky-600",
  },
];

const OurServicesCarousel = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: "-=350",
        transition: { duration: 1, ease: "easeInOut" },
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f1f5ff] via-[#f9fbff] to-[#e8efff] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-[#004AAD]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#01184E]/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#01184E] mb-4 tracking-tight">
          Our <span className="text-[#004AAD]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Explore our wide range of services designed to keep your vehicle
          running at its best — anytime, anywhere.
        </p>
      </div>

      {/* Full-width Carousel */}
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory px-6"
        onMouseEnter={() => controls.stop()}
      >
        {[...services, ...services].map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[320px] md:min-w-[360px] bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center text-center transition-all"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default OurServicesCarousel;
