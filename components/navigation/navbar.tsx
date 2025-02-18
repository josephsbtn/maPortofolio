import React from "react";

interface NavbarProp {
  setCurrentSlide: (slide: number) => void;
}

const Navbar = ({ setCurrentSlide }: NavbarProp) => {
  return (
    <div className="max-w-xl xl:max-w-7xl md:max-w-2xl fixed w-full h-fit py-5  mx-auto flex justify-between items-center  top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out ">
      <a
        className="font-montserratAlt text-white font-black text-2xl  tracking-widest"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          setCurrentSlide(0);
        }}>
        &lt;josse;
      </a>
      <div className="flex justify-center items-center space-x-10">
        <a
          className="font-montserratAlt text-white font-black cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(1);
          }}>
          About
        </a>
        <a
          className="font-montserratAlt text-white font-black cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(2);
          }}>
          My Project
        </a>
        <a
          className="font-montserratAlt text-white font-black cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide(3);
          }}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
