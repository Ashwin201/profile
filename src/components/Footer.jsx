import Image from "next/image";
import { BsGithub } from "react-icons/bs";

import Link from "next/link";
import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../../public/Icons";
const Footer = async () => {
  return (
    <div>
      <hr className=" block lg:hidden" />
      <header className=" flex   justify-center text-center md:justify-between  flex-col md:flex-row font-medium pb-3 lg:pb-0 pt-6 lg:pt-0  ">
        <div className="social flex justify-center align-middle  cursor-pointer mb-2 sm:mb-0 items-center ">
          <Link
            aria-label="Instagram"
            href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
            className="mr-3"
            target="_blank"
          >
            <InstaIcon />
          </Link>
          <Link
            href="https://github.com/Ashwin201"
            aria-label="Github"
            className="mr-3"
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
            className="mr-3 hidden lg:block"
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
        </div>

        <div>
          @2023
          <span className=" font-semibold "> Ashmin Sharma. </span>
          <span className=" block sm:inline mt-1 sm:mt-0">
            All rights reserved.
          </span>
        </div>
      </header>
    </div>
  );
};

export default Footer;
