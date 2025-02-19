"use client";
import React, { useEffect, useState } from "react";

interface NavbarProp {
  setCurrentSlide: (slide: number) => void;
}

const navbarList = [
  {
    id: 0,
    name: "Home",
    valuePage: 0,
  },
  {
    id: 1,
    name: "My Project",
    valuePage: 1,
  },
  {
    id: 2,
    name: "About Me",
    valuePage: 2,
  },
  {
    id: 3,
    name: "Contact",
    valuePage: 3,
  },
];

const Navbar = ({ setCurrentSlide }: NavbarProp) => {
  const [isPhone, setIsPhone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleIsPhone = () => {
      if (window.innerWidth <= 768) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    };
    handleIsPhone();
    window.addEventListener("resize", handleIsPhone);

    return () => {
      window.removeEventListener("resize", handleIsPhone);
    };
  }, []);
  return (
    <div className="max-w-lg xl:max-w-7xl md:max-w-2xl fixed w-full h-fit py-5  mx-auto flex justify-between items-center  top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out ">
      <a
        className="font-montserratAlt text-white font-black text-xl lg:text-2xl  tracking-widest"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          setCurrentSlide(0);
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
              }}>
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col max-w-10 items-center justify-center space-y-1 cursor-pointer z-30   "
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`${
              isOpen ? "rotate-45 bg-white" : "bg-text-secondary"
            } w-6 h-1 rounded-full transition-all duration-300 ease-in-out `}></div>
          <div
            className={`${
              isOpen ? "hidden" : "bg-text-secondary"
            } w-6 h-1 rounded-full transition-all duration-300 ease-in-out`}></div>
          <div
            className={`${
              isOpen
                ? "-rotate-45 -translate-y-2 bg-white"
                : "bg-text-secondary"
            } w-6 h-1 rounded-full transition-all duration-300 ease-in-out `}></div>
        </div>
      )}

      {/* {isOpen ? (
        <div className="fixed w-full h-full bg-background bg-opacity-70 top-0 left-0 z-20 flex justify-center items-center">
          <div className="flex flex-col space-y-5">
            {navbarList.map((item) => (
              <a
                key={item.id}
                className="font-montserrat text-white font-black cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(item.valuePage);
                  setIsOpen(false);
                }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ) : null} */}

      <div
        className={`${
          isOpen ? "top-0" : "-top-96"
        } w-full bg-black-100 bg-opacity-55 h-fit transition-all duration-300 ease-in-out absolute`}>
        <div className="flex flex-col items-center space-y-5 py-5">
          {navbarList.map((item) => (
            <a
              key={item.id}
              className="font-montserrat text-white font-black cursor-pointer hover:text-text-secondary
              transition-all duration-300 ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(item.valuePage);
                setIsOpen(false);
              }}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
