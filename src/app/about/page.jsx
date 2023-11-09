import AboutMe from "@/components/About";
import React from "react";
export const metadata = {
  title: "About Me",
  description: "This is a nextjs portfolio website with tailwind css.",
};

const About = () => {
  return (
    <div>
      <AboutMe />
    </div>
  );
};

export default About;
