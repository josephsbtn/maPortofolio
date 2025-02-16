import React from "react";
import { Montserrat_Alternates, Viga } from "next/font/google";
import { TextGenerateEffect } from "./text-generate-effect";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-col justify-center items-center -space-y-3">
          <TextGenerateEffect
            words="I am/私は/saya"
            className="text-sm text-white font-viga"
          />

          <div className=" max-w-lg -space-y-5">
            <TextGenerateEffect
              words="Joseph Sebastian"
              className="text-white text-5xl max-w-lg font-viga leading-[40px] font-bold text-center"
            />
            <TextGenerateEffect
              words="Rosario Putra"
              className="text-text-secondary font-viga text-5xl max-w-lg leading-[40px] font-bold text-center"
            />
          </div>

          <TextGenerateEffect
            words="Fullstack Web Developer"
            className="text-sm text-white font-viga"
          />
        </div>

        <div className="flex justify-around items-center space-x-4">
          <a className="bg-[#1E190F] px-4 py-2 rounded-lg font-viga text-white">
            HIRE ME
          </a>
          <a className="font-viga text-white ">MY PROJECTS</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
