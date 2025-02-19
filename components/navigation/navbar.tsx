"use client";
import React, { useEffect, useState } from "react";

interface NavbarProp {
  setCurrentSlide: (slide: number) => void;
}

const navbarList = [
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
    <div className="max-w-xl xl:max-w-7xl md:max-w-2xl fixed w-full h-fit py-5  mx-auto flex justify-between items-center  top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out ">
      <a
        className="font-montserratAlt text-white font-black text-xl lg:text-2xl  tracking-widest"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          setCurrentSlide(0);
        }}>
        &lt;josse;
      </a>
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
        {/* <a
          className="font-montserrat text-base text-white font-black cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(1);
          }}>
          My Project
        </a>
        <a
          className="font-montserrat text-white font-black cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(2);
          }}>
          About Me
        </a>
        <a
          className="font-montserrat text-white font-black cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(3);
          }}>
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
