"use client";

import React from "react";
import { useState, useEffect } from "react";

const SpotlightCircle = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <div
      className="h-auto max-w-24 w-full aspect-square 
     rounded-full absolute top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 bg-gradient-to-t from-[#1E190F]/100
       to-[#ffffff]/80 blur-3xl animate-spotlight z-10"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(calc(-50% - 0.5rem))",
      }}></div>
  );
};

export default SpotlightCircle;
