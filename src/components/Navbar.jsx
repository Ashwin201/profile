"use client";
import Image from "next/image";
import {
  BsSunFill,
  BsMoonStarsFill,
  BsGithub,
  BsInfoCircleFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { BiMenuAltRight, BiSolidBriefcase } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.webp";
import {
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../../public/Icons";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuopen, setMenuOpen] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleNav = () => {
    setMenuOpen(!menuopen);
  };
  return (
    <div>
      <header className=" sticky   top-0 bg-bg font-medium flex justify-between items-center align-middle mb-3">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="logo" width={32} height={32} />
        </Link>
        <nav className=" hidden sm:flex items-center ">
          <Link aria-label="Home" href="/" className="mx-5 relative group">
            Home
            <span className="absolute inline-block left-0 -bottom-1 bg-black dark:bg-white h-[1.6px] w-0 group-hover:w-full  transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link
            aria-label="About"
            href="/about"
            className="mr-5 relative group"
          >
            About
            <span className="absolute inline-block left-0 -bottom-1 bg-black dark:bg-white h-[1.6px] w-0 group-hover:w-full  transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link
            aria-label="Skills"
            href="/skill"
            className="mr-5 relative group"
          >
            Skills
            <span className="absolute inline-block left-0 -bottom-1 bg-black dark:bg-white h-[1.6px] w-0 group-hover:w-full  transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link
            aria-label="Projects"
            href="/projects"
            className="mr-5 relative group"
          >
            Projects
            <span className="absolute inline-block left-0 -bottom-1 bg-black dark:bg-white h-[1.6px] w-0 group-hover:w-full  transition-all duration-500 ease-in-out"></span>
          </Link>
        </nav>

        <div className=" hidden sm:flex items-center ">
          {theme === "dark" ? (
            <span onClick={() => setTheme("light")}>
              <BsSunFill cursor={"pointer"} size={23} />
            </span>
          ) : (
            <span onClick={() => setTheme("dark")}>
              <BsMoonStarsFill cursor={"pointer"} size={20} />
            </span>
          )}
          <nav className="  hidden lg:ml-3 lg:flex items-center">
            <Link
              href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
              className="mr-3"
              aria-label="Insta"
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
            {/*<Link
              href="https://www.facebook.com/profile.php?id=100033350950689"
              className="mr-3"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
             <Link
              href="tel:8607343110"
              target="_blank"
              aria-label="phone"
              className="mr-3"
            >
              <PhoneIcon />
            </Link> */}
          </nav>
        </div>
        <div className=" flex items-center justify-center sm:hidden gap-3 cursor-pointer">
          {theme === "dark" ? (
            <span onClick={() => setTheme("light")}>
              <BsSunFill cursor={"pointer"} size={23} />
            </span>
          ) : (
            <span onClick={() => setTheme("dark")}>
              <BsMoonStarsFill cursor={"pointer"} size={21} />
            </span>
          )}
          <div className="flex flex-col items-end" onClick={handleNav}>
            <BiMenuAltRight size={40} />
          </div>
        </div>
      </header>
      <div className=" block sm:hidden  ">
        <div
          className={
            menuopen
              ? "fixed z-50  top-0 left-0 w-60 h-screen transition-all ease-in-out duration-80 bg-slate-100 dark:bg-black border-r-1 rounded-r-[40px] "
              : " fixed z-50  top-0 -left-full h-screen transition-all ease-in-out rounded-r-3xl duration-800"
          }
        >
          <span
            className=" mt-[18px] mr-8 flex justify-end text-text1 cursor-pointer"
            onClick={handleNav}
          >
            <RxCross2 size={27} />
          </span>

          <ul className="flex justify-start  flex-col mt-5 pt-5 ml-6 items-start">
            <Link
              href="/"
              className="  flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
              aria-label="Home"
            >
              <AiFillHome size={22} />
              <span className="ml-2">Home</span>
            </Link>
            <Link
              href="/about"
              aria-label="About"
              className="flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BsInfoCircleFill size={20} />
              <span className="ml-2">About</span>
            </Link>
            <Link
              href="/skill"
              aria-label="Skill"
              className=" flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BsFillFileEarmarkTextFill size={20} />
              <span className="ml-2">Skills</span>
            </Link>
            <Link
              href="/projects"
              aria-label="Projects"
              className="flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BiSolidBriefcase size={22} />
              <span className="ml-2">Projects</span>
            </Link>

            <div className="social flex mt-3 cursor-pointer items-center">
              <Link
                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                className="mr-3 "
                aria-label="Instagram"
                onClick={handleNav}
                target="_blank"
              >
                <InstaIcon />
              </Link>

              <Link
                href="https://github.com/Ashwin201"
                aria-label="Github"
                className="mr-3"
                onClick={handleNav}
                target="_blank"
              >
                <BsGithub size={26} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                className="mr-3"
                aria-label="Linkedin"
                onClick={handleNav}
                target="_blank"
              >
                <LinkedinIcon />
              </Link>

              {/* <Link
                href="tel:8607343110"
                aria-label="phone"
                className="mr-3"
                onClick={handleNav}
                target="_blank"
              >
                <PhoneIcon />
              </Link> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
