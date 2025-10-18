import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Wrench, Truck } from "lucide-react";

const platforms = [
  {
    title: "Customer App",
    description:
      "Book services, track repairs, and get instant support — all in one intuitive app.",
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Mechanic / Service Center App",
    description:
      "Accept jobs, manage workflow, and update customers in real time for complete transparency.",
    icon: Wrench,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Delivery Partner App",
    description:
      "Deliver spare parts and offer on-site assistance efficiently with optimized routing.",
    icon: Truck,
    gradient: "from-cyan-500 to-sky-600",
  },
];

const OurPlatform = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f5f8ff] via-[#f0f4ff] to-[#e8efff] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004AAD]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#01184E]/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#01184E] mb-4 tracking-tight">
          Our Platform: <span className="text-[#004AAD]">Three-App Ecosystem</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          A seamlessly connected ecosystem designed for customers, service providers,
          and delivery partners — empowering every part of the Zenix network.
        </p>

        {/* Three block layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${app.gradient} text-white shadow-lg`}
                >
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-700">{app.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPlatform;
