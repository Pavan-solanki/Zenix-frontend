import React from "react";
import { motion } from "framer-motion";
import teamBg from "../assets/expert.jpg"; // ✅ Add your background image here
import techImg from "../assets/expert.jpg";
import customerImg from "../assets/customer.jpg";
import qualityImg from "../assets/quality.jpg";
import deliveryImg from "../assets/delivery.jpg";

const teams = [
  {
    title: "Expert Technicians",
    description:
      "Our highly skilled technicians ensure that every vehicle receives precise, reliable, and efficient service.",
    image: techImg,
  },
  {
    title: "Customer Service Team",
    description:
      "Dedicated support professionals ready to assist you 24/7 with quick, friendly, and helpful responses.",
    image: customerImg,
  },
  {
    title: "Quality Controllers",
    description:
      "Ensuring every repair and service meets Zenix’s rigorous standards for performance and safety.",
    image: qualityImg,
  },
  {
    title: "Delivery Heroes",
    description:
      "Our delivery partners ensure that parts, tools, and services reach the right place at the right time.",
    image: deliveryImg,
  },
];

const MeetTheTeam = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(1, 24, 78, 0.406), rgba(1, 24, 78, 0.539)), url(${teamBg})`,
      }}
    >
      {/* Decorative blue glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004bad73]/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00b4ff]/20 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Meet the <span className="text-[#00b4ff]">Zenix Team</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teams.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.title}
                className="w-28 h-28 object-contain mb-6 drop-shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-3 text-[#00b4ff]">
                {member.title}
              </h3>
              <p className="text-gray-200 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
