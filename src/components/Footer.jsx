import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#01184E] text-gray-300 pt-20 pb-8 overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004AAD]/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00b4ff]/20 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* === Contact Info === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00b4ff]" />
              <span>Plot No. 2, Jaganpur, Gautam Buddha Nagar, UP 201308</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#00b4ff]" />
              <span>+91 7897520216</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#00b4ff]" />
              <span>zenix.automotive@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* === Information === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Core Policies</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Terms</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Contact</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Services</li>
          </ul>
        </div>

        {/* === Our Services === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Why Choose Zenix?</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Platform</li>
          </ul>
        </div>

        {/* === Company === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#00b4ff] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Careers</li>
            <li className="hover:text-[#00b4ff] cursor-pointer transition">Team</li>
          </ul>
        </div>
      </div>

      {/* === Divider === */}
      <div className="relative mt-14 mb-8 border-t border-white/20 max-w-7xl mx-auto"></div>

      {/* === Bottom Section === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Social Icons */}
        <div className="flex gap-5 mb-4 md:mb-0">
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-[#00b4ff] hover:text-white transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-[#00b4ff] hover:text-white transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-[#00b4ff] hover:text-white transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-[#00b4ff] hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} <span className="text-[#00b4ff] font-semibold">Zenix Automotive</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
