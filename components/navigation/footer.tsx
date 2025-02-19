import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
  interface OpenWindowProps {
    url: string;
  }

  const openWindow = ({ url }: OpenWindowProps): void => {
    window.open(url, "_blank");
  };
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full p-4">
      <div className="flex justify-center items-center space-x-4">
        <a
          onClick={() =>
            openWindow({ url: "https://www.linkedin.com/in/josephsbtn/" })
          }
          className="p-2 hover:bg-text-secondary rounded-2xl transition-all duration-300 ease-in-out">
          <IconBrandLinkedin size={30} color="white" />
        </a>
        <a
          onClick={() =>
            openWindow({
              url: "https://www.instagram.com/josephsbtn?igsh=NHI1emFwaW82ZGg=",
            })
          }
          className="p-2 hover:bg-text-secondary rounded-2xl transition-all duration-300 ease-in-out">
          <IconBrandInstagram size={30} color="white" />
        </a>
        <a
          onClick={() => openWindow({ url: "https://github.com/josephsbtn" })}
          className="p-2 hover:bg-text-secondary rounded-2xl transition-all duration-300 ease-in-out">
          <IconBrandGithub size={30} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
