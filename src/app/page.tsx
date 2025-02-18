"use client";

import { useEffect, useState } from "react";
import Hero from "../../components/hero";
import Navbar from "../../components/navigation/navbar";
import SpotlightCircle from "../../components/spotlightCircle";
import { Carousel } from "../../components/ui/carousel";

const AboutMe = () => (
  <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
    <h2 className="text-4xl font-bold">About Me</h2>
    <p className="mt-4 max-w-lg text-lg">
      Hi! I&apos;m a passionate developer who loves building interactive web
      applications.
    </p>
  </div>
);

const Contact = () => (
  <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
    <h2 className="text-4xl font-bold">Contact Me</h2>
    <p className="mt-4 max-w-lg text-lg">
      Reach out via email:
      <a href="mailto:example@email.com" className="underline">
        example@email.com
      </a>
    </p>
  </div>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 0) {
        setCurrentPage(1);
      } else if (scrollPosition > 100 && scrollPosition < 200) {
        setCurrentPage(2);
      } else {
        setCurrentPage(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <main className="relative bg-background flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      <Navbar setCurrentSlide={setCurrentPage} />
      <SpotlightCircle />

      {/* Background Gradients */}
      <div className="h-auto max-w-lg w-full z-0 aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/80 blur-3xl animate-spotlight"></div>
      <div className="h-auto max-w-xs w-full z-0 aspect-square rounded-full absolute bottom-0 left-0 -translate-x-40 translate-y-20 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>
      <div className="h-auto max-w-xs w-full z-0 aspect-square rounded-full absolute top-0 right-0 translate-x-40 -translate-y-20 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>

      {/* Carousel */}
      <div className="max-w-7xl w-full flex justify-start items-center overflow-hidden relative">
        <Carousel
          currentPage={() => currentPage}
          slides={[
            { section: <Hero /> },
            { section: <AboutMe /> },
            { section: <Contact /> },
          ]}
        />
      </div>
    </main>
  );
}
