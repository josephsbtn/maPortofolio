import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-xl xl:max-w-7xl md:max-w-2xl fixed w-full h-fit py-5  mx-auto flex justify-between items-center  top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out ">
      <a
        className="font-montserratAlt text-white font-black text-3xl  tracking-widest"
        href="#home">
        &lt;josse;
      </a>
      <div className="flex justify-center items-center space-x-10">
        <a className="font-montserratAlt text-white font-black ">About</a>
        <a className="font-montserratAlt text-white font-black ">My Project</a>
        <a className="font-montserratAlt text-white font-black ">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
