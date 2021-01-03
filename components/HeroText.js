import React from "react";
import Image from "next/image";

export default function HeroText(props) {
  return (
    <div className="mx-auto w-5/6 mt-12 pb-20 lg:w-3/6 lg:p-24 lg:flex lg:flex-col lg:justify-center">
      <h1 className="text-3xl font-bold mb-5 lg:text-5xl">
        {props.heroContent.title}
      </h1>
      <p className="text-gray-400 lg:text-lg">{props.heroContent.body}</p>
      <div className="flex flex-row mt-10 w-5/6 justify-between ">
        <p className="uppercase text-xs font-light tracking-widest">Shop Now</p>
        <Image src="/images/icon-arrow.svg" alt="arrow" width={40} height={5} />
      </div>
    </div>
  );
}
