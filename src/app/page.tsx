import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ContactSection from "./components/ContactSection/ContactSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContactSection />
    </div>
  );
};

export default page;
