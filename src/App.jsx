import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import MissionVision from "./components/MissionVision";
import FeatureCarousel from "./components/FeatureCarousel";
import OurServicesCarousel from "./components/OurServicesCarousel";
import OurPlatform from "./components/OurPlatform";
import CareersAndPolicies from "./components/CareersAndPolicies";
import MeetTheTeam from "./components/MeetTheTeam";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const booknowRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "hero":
        heroRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "features":
        featuresRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "booknow":
        booknowRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <Hero scrollToSection={scrollToSection} />

      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <MissionVision />
      <div ref={featuresRef}>
        <FeatureCarousel />
      </div>
      <OurServicesCarousel />
      <OurPlatform />
      <CareersAndPolicies />
      <MeetTheTeam />
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <div ref={booknowRef}>
        {/* You can put a booking section here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
