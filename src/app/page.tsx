import Hero from "../../components/hero";
import Navbar from "../../components/navigation/navbar";
import SpotlightCircle from "../../components/spotlightCircle";
import { motion } from "framer-motion";
import { Carousel } from "../../components/ui/carousel";

export default function Home() {
  return (
    <main
      className="scroll-smooth relative bg-background  flex flex-col justify-center items-center overflow-hidden mx-auto
    px-5 sm:px-10 ">
      <Navbar />
      <SpotlightCircle />
      <div
        className="h-auto max-w-lg w-full aspect-square 
     rounded-full absolute top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 bg-gradient-to-t from-[#1E190F]/100
       to-[#7A6C51]/80 blur-3xl animate-spotlight"></div>
      <div className="h-auto max-w-xs w-full aspect-square rounded-full absolute bottom-0 left-0 -translate-x-40 translate-y-20  bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>
      <div className="h-auto max-w-xs w-full aspect-square rounded-full absolute top-0 right-0 translate-x-40 -translate-y-20  bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>
      <div className="max-w-7xl w-full flex justify-start items-center overflow-hidden relative ">
        <Hero />
        <Hero />
        <Hero />
      </div>
      <Carousel slides={[<Hero />]} />
    </main>
  );
}
