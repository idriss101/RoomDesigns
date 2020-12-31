import React from "react";
import Image from "next/Image";

export default function About() {
  return (
    <div className="w-screen flex flex-col">
      <Image
        src="/images/image-about-dark.jpg"
        alt="hero image 2"
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="mx-auto w-5/6 mt-12 pb-7">
        <h2 className="text-lg uppercase font-bold tracking-wider mb-5">
          About our furniture
        </h2>
        <p className="text-gray-400">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <Image
        src="/images/image-about-light.jpg"
        alt="hero image 2"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
}
