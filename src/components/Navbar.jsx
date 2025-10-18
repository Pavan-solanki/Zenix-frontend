import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (section) => {
    setMenuOpen(false);
    scrollToSection(section);
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-13/14 md:w-17/18 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl py-4 px-6 md:px-12"
        >
          <div className="flex items-center justify-between h-9 md:h-15">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Zenix Logo"
                className="w-20 md:w-28 h-auto object-contain cursor-pointer"
                onClick={() => handleClick("hero")}
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10 font-semibold text-[#01184E]">
              {["Services", "About", "Features", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-[#004AAD] transition-colors duration-300"
                  onClick={() => handleClick(item.toLowerCase())}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Book Now Button */}
            <button
              className="hidden md:block bg-[#004AAD] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#01184E] transition-all duration-300"
              onClick={() => handleClick("booknow")}
            >
              Book Now
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#01184E] text-3xl focus:outline-none"
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white w-full shadow-md py-6 flex flex-col items-center space-y-4 rounded-b-2xl"
            >
              {["Services", "About", "Features", "Contact"].map((item) => (
                <div
                  key={item}
                  className="text-[#01184E] text-lg font-medium hover:text-[#004AAD] cursor-pointer"
                  onClick={() => handleClick(item.toLowerCase())}
                >
                  {item}
                </div>
              ))}
              <button
                className="bg-[#004AAD] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#01184E]"
                onClick={() => handleClick("booknow")}
              >
                Book Now
              </button>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
