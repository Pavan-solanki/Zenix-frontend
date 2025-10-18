import React from "react";
import careerBg from "../assets/back.jpg"; // ✅ Use any background image you like

const careers = [
  { title: "Career Growth", description: "Unlock endless opportunities for advancement in a fast-growing tech mobility platform." },
  { title: "Skill Development", description: "Enhance your technical and professional skills with continuous learning support." },
  { title: "Inclusive Culture", description: "Be part of a diverse, innovative team that values every voice and perspective." },
  { title: "Competitive Pay", description: "We reward excellence with fair, transparent, and industry-leading compensation." },
];

const policies = [
  { title: "Transparency First", description: "All operations, prices, and communications are clear and honest." },
  { title: "Fast & Efficient Service", description: "Streamlined processes ensure speed without compromising quality." },
  { title: "Quality Assurance", description: "Every service is inspected to meet our strict quality standards." },
  { title: "User-Friendly Terms", description: "Simple, accessible, and easy-to-understand policies for all users." },
];

const terms = [
  { title: "Service Agreement", description: "Defines the mutual commitments between Zenix and users for each service." },
  { title: "Warranty Coverage", description: "Repairs and replacements are covered as per transparent warranty conditions." },
  { title: "Cancellation Policy", description: "Flexible cancellation options designed for customer convenience." },
  { title: "Liability Clause", description: "Outlines responsibility limitations for both customers and service providers." },
];

const CareersAndPolicies = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(1, 24, 78, 0.692), rgba(1, 24, 78, 0.683)), url(${careerBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Careers & Policies at <span className="text-[#00b4ff]">Zenix</span>
        </h2>

        {/* === Careers Section === */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-[#00b4ff] text-center">
            Careers at Zenix
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careers.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Core Policies Section === */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-[#00b4ff] text-center">
            Core Policies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policies.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Terms Summary Section === */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-[#00b4ff] text-center">
            Terms Summary
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {terms.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersAndPolicies;
