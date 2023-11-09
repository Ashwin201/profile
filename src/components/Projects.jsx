"use client";
import Link from "next/link";
import React from "react";
import img1 from "../../public/images/Online-Ecommerce.webp";
import img2 from "../../public/images/calculator.webp";
import img3 from "../../public/images/tic_tactoe.webp";
import img4 from "../../public/images/real-estate.webp";
import crud from "../../public/images/crud.webp";
import blog from "../../public/images/blog.webp";
import articles from "../../public/images/articles.webp";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { BsGithub } from "react-icons/bs";

const FeaturedProject = ({ type, image, title, summary, link, github }) => {
  return (
    <main
      className=" flex  flex-col justify-center  md:flex-row  md:justify-between p-5 sm:p-6 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl 
    rounded-bl-3xl border-b-[12px]  border-black dark:border-white  rounded-2xl mx-[12px] hover:scale-[.99] ease-in-out duration-500 group cursor-pointer"
    >
      <div className="grid grid-cols-2 gap-0  lg:gap-10">
        <div className=" col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <Image
            src={image}
            alt={title}
            loading="eager"
            className="w-full h-full rounded-2xl object-cover "
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px]  ">
          <p className="text-xl text-text1 font-semibold  mt-6 lg:mt-0">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={github} aria-label="link">
              <BsGithub size={38} />
            </Link>
            <Link
              href={link}
              aria-label="See Live"
              className="font-semibold text-[17px] underline hover:text-gray-600  transition-all duration-300"
            >
              See Live
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
const FeaturedProjectRight = ({
  type,
  image,
  title,
  summary,
  link,
  github,
}) => {
  return (
    <main
      className=" flex flex-col justify-center  md:flex-row  md:justify-between p-5 sm:p-6 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl 
    rounded-bl-3xl border-b-[12px]  border-black dark:border-white  rounded-2xl mx-[12px] hover:scale-[.99] ease-in-out duration-500 group cursor-pointer"
    >
      <div className="grid grid-cols-2 gap-0  lg:gap-10">
        <div className=" block lg:hidden col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <Image
            src={image}
            alt={title}
            loading="eager"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px] ">
          <p className="text-xl text-text1 font-semibold mt-6 lg:mt-0 ">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={github} aria-label="Github">
              <BsGithub size={38} />
            </Link>
            <Link
              href={link}
              aria-label="See Live"
              className="font-semibold text-[17px] underline hover:text-gray-600  transition-all duration-300"
            >
              See Live
            </Link>
          </div>
        </div>
        <div className=" hidden lg:block col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <Image
            src={image}
            alt={title}
            loading="eager"
            className="w-[100%] h-auto sm:h-[280px] lg:h-full  rounded-2xl "
          />
        </div>
      </div>
    </main>
  );
};
const Projects = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt[70px]  mb-[120px] sm:px-10  md:px-3 lg:px-0 xl:px-24 2xl:px-[130px]">
        <AnimatedText text="Imagination Trumps Knowledge!" />

        <div className="grid grid-cols-2 gap-12 sm:gap-16 mt-[60px]">
          <div className="col-span-2 ">
            <FeaturedProjectRight
              type={"Nextjs"}
              image={articles}
              title={"Articles App"}
              summary={
                "It's a full stack blog app in which you can create, read, delete and update blogs  if you are authenticated but if not you can only view others blog. You can also add images from your gallery and  can also post multiple links. This app is created by using Taiwind Css, Next.Js, MongoDB, NextAuth, Prisma and Cloudinary for image upload."
              }
              link={"https://bookk.vercel.app/"}
              github={"https://github.com/Ashwin201/.book-app.git"}
            />
          </div>

          <div className="col-span-2">
            <FeaturedProject
              type={"Nextjs"}
              image={blog}
              title={"Blog App"}
              summary={
                "A full-stack blog app in which you can create your own post after authenticate through email and google &  users data will be stored in backend but your password  will be in hashed form for user's security purpose."
              }
              link={"https://blog-app-seven-weld.vercel.app/"}
              github={"https://github.com/Ashwin201/Blog-App.git"}
            />
          </div>
          <div className="col-span-2 ">
            <FeaturedProjectRight
              type={"Nextjs"}
              image={crud}
              title={"CRUD App"}
              summary={
                "It's a crud (Create, Read, Delete and Update) app which is created by using Html, Tailwind Css, Nextjs, Prisma for building Rest Api and MongoDb in backend for storing data."
              }
              link={"https://crud-app-omega-green.vercel.app/"}
              github={"https://github.com/Ashwin201/Crud-App.git"}
            />
          </div>
          <div className=" col-span-2 ">
            <FeaturedProject
              type={"React"}
              image={img4}
              title={" Real Estate"}
              summary={
                "it's a single real estate website design  which is created by using Html, Bootstrap5, React & many more  libraries."
              }
              link={"https://ashwin201.github.io/Real-Estate-Design/"}
              github={"https://github.com/Ashwin201/Real-Estate-Design.git"}
            />
          </div>
          <div className="col-span-2">
            <FeaturedProjectRight
              type={"Bootstrap5"}
              image={img1}
              title={"Ecommerce"}
              summary={
                "It's a responsive single page ecommerce app design which created by using Html, Css, Bootstrap5  and Javascript."
              }
              link={"https://ashwin201.github.io/Ecommerce/"}
              github={"https://github.com/Ashwin201/Ecommerce.git"}
            />
          </div>
          <div className="col-span-2 ">
            <FeaturedProject
              type={"Javascript"}
              image={img2}
              title={"Calculator"}
              summary={
                "This ia a simple calculator app which perform basic calculator operations like Addition, Subtraction, Multiplication and Division etc."
              }
              link={"https://ashwin201.github.io/Calculator/"}
              github={"https://github.com/Ashwin201/Ecommerce.git"}
            />
          </div>

          <div className="col-span-2 ">
            <FeaturedProjectRight
              type={"Javascript"}
              image={img3}
              summary={
                "This is simple and basic Tic Tac Toe game project which is created by using Html, vanilla Css and pure Javascript only."
              }
              title={"Tic Tac Toe"}
              link={"https://ashwin201.github.io/TicTacToe/"}
              github={"https://github.com/Ashwin201/TicTacToe.git"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

// const SmallProject = ({ type, image, title, summary, link, github }) => {
//   return (
//     <main className=" col-span-2  flex  flex-col justify-center  p-4 sm:p-6 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border-b-[12px]   border-black dark:border-white  rounded-2xl mx-[12px] hover:scale-[.99] ease-in-out duration-500 group cursor-pointer">
//       <div className=" group-hover:scale-[.99] ease-in-out duration-500 ">
//         <Image
//           src={image}
//           alt={title}
//           loading="lazy"
//           className="w-[100%] h-auto sm:h-[280px] lg:h-full rounded-2xl"
//         />
//       </div>
//       <div className=" gap-[6px]  ">
//         <p className="text-xl text-text1 font-semibold mt-6 ">{type}</p>
//         <div className="font-bold text-2xl sm:text-3xl  my-[6px] sm:my-3">
//           {title}
//         </div>
//         <p className="  font-medium mb-[10px] sm:mb-3">{summary}</p>
//         <div className=" flex justify-between items-center   ">
//           <Link href={github} aria-label="link">
//             <BsGithub size={38} />
//           </Link>
//           <Link
//             href={link}
//             aria-label="See Live"
//             className="font-semibold text-[17px] underline  hover:text-gray-600 transition-all duration-300"
//           >
//             See Live
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// };
