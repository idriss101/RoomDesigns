import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen">
      <div className="container w-full relative">
        <Image
          src="/images/mobile-image-hero-1.jpg"
          alt="Picture of the author"
          width={500}
          height={400}
          //   className="object-cover"s
        />
        <div className="flex flex-row absolute right-0 bottom-1.5">
          <span className="bg-black py-4 px-6 flex flex-col items-center justify-center">
            <Image
              src="/images/icon-angle-left.svg"
              alt="left arrow"
              width={10}
              height={20}
            />
          </span>
          <span className="bg-black py-4 px-6 flex flex-col items-center justify-center">
            <Image
              src="/images/icon-angle-right.svg"
              alt="left arrow"
              width={10}
              height={20}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
