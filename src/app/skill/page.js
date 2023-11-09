import React from "react";
import {
  Bootstrap,
  Cpp,
  Css,
  // FireBase,
  Html,
  Java,
  Js,
  MongoDb,
  NextJs,
  Nodejs,
  Prisma,
  Reactjs,
  Tailwind,
} from "../../../public/SkillIcons";
import dynamic from "next/dynamic";
import AnimatedText from "@/components/AnimatedText";
const Services = dynamic(() => import("@/components/Services"));

export const metadata = {
  title: "Skills",
  description: "This is a nextjs portfolio website with tailwind css.",
};

const page = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt[70px] mb-[120px]">
        <AnimatedText text="Technical Skills!" />

        <div className="flex flex-col mt-[70px]">
          <div className="flex flex-col lg:flex-row justify-center align-middle lg:justify-between mb-10 ">
            <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
              Front-End Development
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-content-end gap-10 lg:gap-16">
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Html />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Html
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Css />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Css
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Js />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Javascript
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Reactjs />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  React
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Bootstrap />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Bootstrap
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Tailwind />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          <hr />
          {/* Backend  Development */}

          <div className="flex flex-col lg:flex-row justify-center align-middle lg:justify-between my-10">
            <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
              Back-End Development
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-content-end gap-10 lg:gap-[70px]">
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Nodejs />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Nodejs
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <NextJs />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Nextjs
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <MongoDb />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  MongoDb
                </span>
              </div>
              <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <Prisma />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  Prisma
                </span>
              </div>
              {/* <div className=" flex flex-col items-center ">
                <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                  <FireBase />
                </span>
                <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                  FireBase
                </span>
              </div> */}
            </div>
          </div>
        </div>

        <hr />
        {/* Other Technologies*/}

        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between mt-10">
          <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
            Other Technologies
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-[70px]">
            <div className=" flex flex-col items-center ">
              <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                <Java />
              </span>
              <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                Java
              </span>
            </div>
            {/* <div className=" flex flex-col items-center ">
              <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                <Cpp />
              </span>
              <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                C++
              </span>
            </div> */}
          </div>
        </div>

        <Services />
      </div>
    </>
  );
};

export default page;
