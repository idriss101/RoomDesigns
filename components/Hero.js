import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="w-screen lg:flex lg:flex-row lg:h-4/6">
      <HeroImage />
      <HeroText />
    </div>
  );
}
