import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="w-screen">
      <HeroImage />
      <HeroText />
    </div>
  );
}
