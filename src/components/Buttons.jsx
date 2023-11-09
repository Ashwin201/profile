import Link from "next/link";
import { AiFillProfile } from "react-icons/ai";
import { IoIosMailUnread } from "react-icons/io";
const Buttons = async () => {
  return (
    <ul className="flex font-medium max-[300px]:flex-col ">
      <li
        className="list-none  mr-3  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:scale-95 transition-all duration-500 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
      >
        <Link
          target="_blank"
          aria-label="resume"
          href=""
          // https://drive.google.com/file/d/1Sx1wgDSLJPffXROh9dyoSjU5s603bCaY/view?usp=sharing
          className=" flex items-center    py-[6px] px-3 text-lg "
        >
          Resume
          <span className="ml-2">
            <AiFillProfile size={23} />
          </span>
        </Link>
      </li>
      <li className=" border-solid border-2 border-black dark:border-white hover:scale-95  transition-all duration-500 ease-in-out rounded-md ">
        <Link
          href="mailto:sharmaashwin203@gmail.com"
          target="_blank"
          aria-label="contact"
          className="flex items-center py-[6px]  px-3 text-lg  "
        >
          Contact
          <span className="ml-2">
            <IoIosMailUnread size={28} />
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Buttons;
