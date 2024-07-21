import React from "react";
import "./hero-section.css";
import { heroIntro, name, profession } from "./hero-section-data";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-black">Hi I am</h2>
        <h2 className="name">{name}</h2>
      </div>
      <h1 className="main-Profession ">{profession}</h1>
      <p className="hero-intro ">{heroIntro}</p>
      <div className="w-auto">
        <button className="button">Hire Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
