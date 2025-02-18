"use client";
import React, { useState, useEffect } from "react";

interface SlideData {
  section: React.ReactNode;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  return (
    <li
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(${(index - current) * 100}%)`,
      }}>
      <div className="w-full h-full flex items-center justify-center">
        {slide.section}
      </div>
    </li>
  );
};

interface CarouselProps {
  slides: SlideData[];
  currentPage: (index: number) => number;
}

export function Carousel({ slides, currentPage }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(currentPage(current));
  }, [currentPage, current]); // ✅ Include 'current'

  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <ul className="relative w-full h-full">
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} />
        ))}
      </ul>
    </div>
  );
}
