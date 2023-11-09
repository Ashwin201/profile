import React from "react";

const Info = async () => {
  return (
    <>
      <div className=" mb-[150px] sm:px-12 lg:px-20 xl:px-52 ml-4 sm:ml-0">
        <h1 className="items-center text-center font-bold text-5xl sm:text-6xl lg:text-[80px] mt-[100px] mb-20">
          Education
        </h1>
        <div className="flex flex-col text-start ">
          <div className=" border-l-[3px] border-black dark:border-white   ">
            <div className="relative ml-[30px] sm:ml-[65px] mb-16 ">
              <div className="  font-bold text-[25px] sm:text-[30px]  mb-3">
                High School
              </div>
              <div className="  text-xl mb-3 font-bold">2019-2021</div>
              <p className="font-medium text-black dark:text-white">
                I have completed my high school in Non-medical Stream from
                Government Senior Secondary School, Jhajjar, Haryana in 2019-21
                session.
              </p>
              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
            <div className="relative ml-[30px] sm:ml-[65px] ">
              <div className="  font-bold text-[25px] sm:text-[30px] mb-3">
                Bachelor&apos;s Degree
              </div>
              <div className="  text-xl mb-3 font-bold">2021-Present</div>
              <p className="font-medium text-black dark:text-white">
                I&apos;m currently pursuing Bachelor&apos;s in Compute Science
                and Engineering from Ganga Institute of Technology and
                Management located at Kablana, Jhajjar.
              </p>
              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="items-center text-center font-bold text-5xl sm:text-6xl lg:text-[80px] mt-28 mb-20 ">
            Experience
          </h1>
          <div className="flex flex-col text-start ">
            <div className=" border-l-[3px] border-black dark:border-white  ">
              <div className="relative ml-[30px] sm:ml-[65px]  ">
                {/* mb-16 */}
                <div className="  font-bold text-[25px] sm:text-[30px] mb-3">
                  Full Stack Developer
                </div>
                <div className="  text-xl mb-3 font-bold">Currently</div>
                <p className="font-medium text-black dark:text-white">
                  After completing High School, i&apos;ve been actively involved
                  in the Web Development community and i&apos;ve built some
                  projects during this period of time from which i get good
                  amount of experience about this field. Explore my projects
                  section to see my projects.
                </p>
                <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                  <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black  dark:bg-white  rounded-[50%]"></span>
                </span>
              </div>
              {/* <div className="relative ml-[30px] sm:ml-[65px]">
                <div className="  font-bold text-[25px] sm:text-[30px] mb-3">
                  Competetive Programmer
                </div>
                <div className="  text-xl mb-3 font-bold">2023-Present</div>
                <p className="font-medium text-black dark:text-white">
                  I&apos;m also trying to learning and increase the logic building
                  capability by doing Data Structure and Algorithms in Java
                  Programming language.
                </p>
                <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                  <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white rounded-[50%]"></span>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
