import React from "react";

const loading = () => {
  return (
    <main className="w-screen h-screen flex justify-center align-middle items-center">
      <div className="wrapper w-[200px] h-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="circle "></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span className="text-text1 absolute top-20 text-3xl font-semibold text-center  tracking-wide left-[15%] ">
          Loading
        </span>
      </div>
    </main>
  );
};

export default loading;
