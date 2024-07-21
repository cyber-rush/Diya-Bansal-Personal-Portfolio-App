import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default page;
