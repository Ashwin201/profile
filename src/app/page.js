"use client";

import React from "react";
import Image from "next/image";
import dev from "../../public/images/developer-removebg-preview.png";
import dynamic from "next/dynamic";
const Buttons = dynamic(() => import("@/components/Buttons"));
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <header className="flex flex-col xl:flex-row align-middle  justify-center items-center mt-10 xl:mt-0 mb-[120px] lg:mb:[150px] xl:mb-0 ">
        <Image
          src={dev}
          alt="main-image"
          loading="eager"
          priority={true}
          className="  w-full h-auto md:w-[700px] md:h-auto lg:w-[600px] lg:h-[600px] xl:mr-4 "
        />

        <div className="xl:w-1/2   text-center xl:text-start   mt-5 lg:mt-0 ">
          <motion.h2
            className=" font-bold   text-3xl sm:text-6xl xl:text-5xl tracking-wide "
            initial={{ marginBottom: "-30px", opacity: 0 }}
            animate={{ marginBottom: "0px", opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Turning Vision Into Reality With Code And Design.
          </motion.h2>
          <motion.div
            initial={{ marginTop: "-30px", opacity: 0 }}
            animate={{ marginTop: "0px", opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-medium text-base mt-5 md:mt-8 xl:mt-5 text-[16px]">
              As a front-end developer, I am dedicated to turning ideas into
              innovative web applications by pixel magic and turning it into
              beautiful responsive website. Explore my latest projects
              showcasing my expertise in Next.js and web development.
            </p>
            <div className="flex justify-center xl:justify-start mt-6">
              <Buttons />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};
export default Home;
