import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import fast from "../../public/images/fast.webp";
import responsive from "../../public/images/responsive.webp";
import design from "../../public/images/webdesign.webp";

const Services = async () => {
  return (
    <div className="mt-[100px]  md:px-16">
      <AnimatedText text="Services!" />
      <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-2  gap-10 ">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={design} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Web Designs
          </div>
          <p className="mt-6 text-center font-medium">
            Websites will work on any resolution devices like Desktop,
            Tablet&apos;s and Mobile&apos;s etc.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={fast} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Fast Website
          </div>
          <p className="mt-6 text-center font-medium">
            Fast load time of website and lag free interaction and good
            experience for user is my higher priority.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={responsive} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Responsive Website
          </div>
          <p className="mt-6 text-center font-medium">
            Can design interactive and beautiful designs according to your
            preferences or according to your need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
