"use client";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import mypic from "../../../public/images/me.jpg";
import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../../../public/Icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedText from "@/components/AnimatedText";
const Info = dynamic(() => import("@/components/Info"));
const Buttons = dynamic(() => import("@/components/Buttons"));

// const Transition = dynamic(() => import("@/components/Transition"));
export const metadata = {
  title: "About Me",
  description: "This is a nextjs portfolio website with tailwind css.",
};

const page = () => {
  return (
    <>
      <div className=" mt-[40px] sm:mt[70px]  ">
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="flex flex-col xl:flex-row items-center my-16  xl:px-20 ">
          <div className=" h-max w-max z-10 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border-b-[12px]  border-black dark:border-white rounded-2xl p-5 xl:p-6 xl:w-[35%]">
            <Image
              src={mypic}
              alt="mypic"
              loading="eager"
              priority={true}
              className="rounded-lg w-[240px] h-[370px] lg:w-full sm:h-full "
            />
          </div>
          <div className=" xl:w-[65%] mt-10 xl:ml-16 flex flex-col justify-center xl:-mt-3 align-middle text-center xl:text-start">
            <h3 className="font-bold text-3xl">Front End Developer</h3>
            <div className="mt-6 text-black dark:text-white font-medium">
              <p>
                Hi, I'm Ashmin Sharma, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and responsive
                design by making pixels magic. After completing high school,
                I've been actively involved in the Web Development community.
              </p>
              <p>
                Whether I'm working on a website or any other things, i bring my
                commitment to design excellence and user-centered thinking to
                every project I work on.
              </p>
              <p>
                I look forward to the opportunity to bring my skills and passion
                to your next project.
              </p>
            </div>
            <nav className=" flex justify-center xl:justify-start items-center my-6">
              <Link
                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                className="mr-3"
                aria-label="Instagram"
                target="_blank"
              >
                <InstaIcon />
              </Link>
              <Link
                href="https://github.com/Ashwin201"
                className="mr-3"
                aria-label="Github"
                target="_blank"
              >
                <BsGithub size={26} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                className="mr-3"
                aria-label="Linkedin"
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100033350950689"
                className="mr-3 hidden lg:block"
                aria-label="Facebook"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
              {/* <Link
                href="tel:8607343110"
                className="mr-3"
                aria-label="home"
                target="_blank"
              >
                <PhoneIcon />
              </Link> */}
            </nav>
            <div className="flex justify-center xl:justify-start">
              <Buttons />
            </div>
          </div>
        </div>
        <Info />
      </div>
    </>
  );
};

export default page;
