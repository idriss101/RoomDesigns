import React, { useState } from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroContent = [
    {
      image: 1,
      title: `Discover innovative ways to decorate`,
      body: ` We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.`,
    },
    {
      image: 2,
      title: `Manufactured with the best materials`,
      body: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },
    {
      image: 3,
      title: `We are available all across the globe`,
      body: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    },
  ];

  const nextContent = () => {
    setIndex((st) => st + 1);
    if (index === 2) {
      setIndex(0);
    }
  };

  const prevContent = () => {
    setIndex((st) => st - 1);
    if (index === 0) {
      setIndex(2);
    }
  };

  return (
    <div className="w-screen lg:flex lg:flex-row lg:h-4/6">
      <HeroImage
        heroContent={heroContent[index]}
        nextContent={nextContent}
        prevContent={prevContent}
      />
      <HeroText heroContent={heroContent[index]} />
    </div>
  );
}
