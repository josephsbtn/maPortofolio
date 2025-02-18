"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useState, useRef, useId, useEffect } from "react";

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
  currentPage: (index: number) => void;
}

export function Carousel({ slides, currentPage }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(currentPage()); // ✅ Call function to get the value
  }, [currentPage]);

  const handlePreviousClick = () => {
    setCurrent((prev) => {
      const newIndex = (prev - 1 + slides.length) % slides.length;
      currentPage(newIndex); // ✅ Notify parent
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrent((prev) => {
      const newIndex = (prev + 1) % slides.length;
      currentPage(newIndex); // ✅ Notify parent
      return newIndex;
    });
  };

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
