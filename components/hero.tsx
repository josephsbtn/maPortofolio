import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex relative flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-col justify-center items-center space-y-3 max-w-md ">
          <h1 className="font-viga text-sm tracking-widest text-white ">
            I am/私は/saya
          </h1>
          <TextGenerateEffect
            className="font-viga text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center max-w-[35vw] "
            words="Joseph Sebastian Rosario Putra"
          />
        </div>

        <div className="flex justify-around items-center space-x-4">
          <a className="bg-[#1E190F] px-4 py-2 rounded-lg font-viga text-white">
            HIRE ME
          </a>
          <a className="font-viga text-white " href="#projects">
            MY PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
