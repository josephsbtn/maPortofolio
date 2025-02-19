"use client";
import React, { useEffect, useState } from "react";

interface NavbarProp {
  setCurrentSlide: (slide: number) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
}

const navbarList = [
  { id: 0, name: "Home", valuePage: 0 },
  { id: 1, name: "My Project", valuePage: 1 },
  { id: 2, name: "Contact", valuePage: 2 }, // Fixed "About Me" → Contact
];

const Navbar = ({ setCurrentSlide, setOpen, open }: NavbarProp) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center">
      <div className="max-w-sm xl:max-w-7xl md:max-w-2xl fixed w-full h-fit py-5 mx-auto flex justify-between items-center top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out">
        <a
          className="font-montserratAlt text-white font-black text-xl lg:text-2xl tracking-widest"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(0);
            setOpen(false); // Close mobile menu
          }}>
          &lt;josse;
        </a>

        {!isPhone ? (
          <div className="flex justify-center items-center space-x-10">
            {navbarList.map((item) => (
              <a
                key={item.id}
                className="font-montserrat text-white font-black cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(item.valuePage);
                  setOpen(false);
                }}>
                {item.name}
              </a>
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col max-w-10 items-center justify-center space-y-1 cursor-pointer z-30"
            onClick={() => setOpen(!open)}>
            <div
              className={`${
                open ? "rotate-45 bg-white" : "bg-text-secondary"
              } w-6 h-1 rounded-full transition-all duration-300 ease-in-out`}></div>
            <div
              className={`${
                open ? "hidden" : "bg-text-secondary"
              } w-6 h-1 rounded-full transition-all duration-300 ease-in-out`}></div>
            <div
              className={`${
                open
                  ? "-rotate-45 -translate-y-2 bg-white"
                  : "bg-text-secondary"
              } w-6 h-1 rounded-full transition-all duration-300 ease-in-out`}></div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "top-0" : "-top-96"
        } w-screen bg-gradient-to-b from-black-100/30 to-background/100 pt-10 bg-opacity-55 h-fit transition-all duration-300 ease-in-out absolute z-20`}>
        <div className="flex flex-col items-center space-y-5 py-5">
          {navbarList.map((item) => (
            <a
              key={item.id}
              className="font-montserrat text-white font-black cursor-pointer hover:text-text-secondary transition-all duration-300 ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(item.valuePage);
                setOpen(false); // Close menu on click
              }}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
