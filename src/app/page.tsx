"use client";

import { useState } from "react";
import Hero from "../../components/hero";
import Navbar from "../../components/navigation/navbar";
import SpotlightCircle from "../../components/spotlightCircle";
import { Carousel } from "../../components/ui/carousel";
import Project from "../../components/Project";
import Footer from "../../components/navigation/footer";

const Contact = () => (
  <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
    <h2 className="text-4xl font-bold">Contact Me</h2>
    <p className="mt-4 max-w-lg text-lg">
      Reach out via email:{" "}
      <a href="mailto:example@email.com" className="underline">
        example@email.com
      </a>
    </p>
  </div>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative bg-background flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      {/* Navbar */}
      <Navbar
        setCurrentSlide={setCurrentPage}
        setOpen={setIsOpen}
        open={isOpen}
      />

      <SpotlightCircle />

      {/* Background Gradients */}
      <div className="h-auto max-w-lg w-full z-0 aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/80 blur-3xl animate-spotlight"></div>
      <div className="h-auto max-w-xs w-full z-0 aspect-square rounded-full absolute bottom-0 left-0 -translate-x-40 translate-y-20 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>
      <div className="h-auto max-w-xs w-full z-0 aspect-square rounded-full absolute top-0 right-0 translate-x-40 -translate-y-20 bg-gradient-to-t from-[#1E190F]/100 to-[#7A6C51]/100 blur-2xl animate-pulse"></div>

      {/* Carousel Section */}
      <section
        className="relative flex flex-col items-center justify-center w-full"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}>
        <div className="max-w-7xl w-full flex justify-start items-center overflow-hidden relative">
          <Carousel
            currentPage={() => currentPage} // Pass `currentPage` directly
            slides={[
              { section: <Hero setCurrentSlide={setCurrentPage} /> },
              { section: <Project /> },
              { section: <Contact /> },
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
