import React from "react";
import Image from "next/image";

export default function HeroText() {
  return (
    <div className="mx-auto w-5/6 mt-12 pb-20 lg:w-3/6 lg:p-24 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h1 className="text-3xl font-bold mb-5 lg:text-5xl">
        Discover innovative ways to decorate
      </h1>
      <p className="text-gray-400 lg:text-lg">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <div className="flex flex-row mt-10 w-5/6 justify-between">
        <p className="uppercase text-xs font-light tracking-widest">Shop Now</p>
        <Image src="/images/icon-arrow.svg" alt="arrow" width={40} height={5} />
      </div>
    </div>
  );
}
