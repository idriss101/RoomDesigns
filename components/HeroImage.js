import React from "react";
import Image from "next/image";
export default function HeroImage(props) {
  let isDesktop;
  if (typeof window !== "undefined") {
    isDesktop = window.matchMedia("(min-width:1024px)").matches;
  }

  const showImage = () => {
    if (isDesktop === true) {
      return (
        // <Image
        //   src="/images/desktop-image-hero-1.jpg"
        //   alt="Picture of the author"
        //   layout="fill"
        //   objectFit="cover"
        // />
        <img
          src={`/images/desktop-image-hero-${props.heroContent.image}.jpg`}
          alt="main hero picture"
          className="w-full h-full object-cover object-top"
        />
      );
    } else {
      return (
        // <Image
        //   src="/images/mobile-image-hero-1.jpg"
        //   alt="Picture of the author"
        //   width={500}
        //   height={500}
        //   layout="responsive"
        // />
        <img
          src={`/images/mobile-image-hero-${props.heroContent.image}.jpg`}
          alt="main hero picture"
          className="w-screen h-full object-fill object-top"
        />
      );
    }
  };

  const menuLayout = () => {
    if (isDesktop === true) {
      return (
        <>
          {/* <Image src="/images/logo.svg" alt="logo" width={100} height={20} /> */}
          <img src="/images/logo.svg" alt="logo" className="w-18 h-5" />
          <ul>
            <li className="text-white inline-block text-2xl mr-10">home</li>
            <li className="text-white inline-block text-2xl mr-10">shop</li>
            <li className="text-white inline-block text-2xl mr-10">about</li>
            <li className="text-white inline-block text-2xl ">contact</li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <Image
            src="/images/icon-hamburger.svg"
            alt="hamburger-menu"
            width={30}
            height={10}
          />
          <Image src="/images/logo.svg" alt="logo" width={70} height={20} />
        </>
      );
    }
  };

  return (
    <div className=" w-full relative z-0 lg:w-5/6 lg:h-full">
      <div className="absolute z-10 top-10 w-5/6 text-center flex justify-around lg:items-center">
        {menuLayout()}
      </div>
      <div className="w-full h-full">{showImage()}</div>

      <div className="flex flex-row absolute right-0 bottom-0 lg:-right-28 ">
        <span
          className="bg-black py-4 px-6 flex flex-col items-center justify-center transition-all hover:bg-gray-500 cursor-pointer"
          onClick={props.prevContent}
        >
          <Image
            src="/images/icon-angle-left.svg"
            alt="left arrow"
            width={10}
            height={20}
          />
        </span>
        <span
          className="bg-black py-4 px-6 flex flex-col items-center justify-center transition-all hover:bg-gray-500 cursor-pointer"
          onClick={props.nextContent}
        >
          <Image
            src="/images/icon-angle-right.svg"
            alt="left arrow"
            width={10}
            height={20}
          />
        </span>
      </div>
    </div>
  );
}
