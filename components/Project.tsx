import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "./text-generate-effect";

const project = [
  {
    title: "Webstie Product Catalog Clinic Dr.Nich",
    description: "",
    link: "drnich.co.id",
    src: "/drnich.png",
  },
];

const Project = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center  items-center relative">
      <div className="relative w-full my-auto max-h-[80vh] overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-hidden">
        <h1 className="text-3xl font-bold font-montserrat tracking-tight text-white">
          My Projects
        </h1>
        {/*ITEMS CARD */}
        <div
          className="p-4 rounded-xl w-fit max-w-[400px] lg:max-w-[400px] h-fit"
          onClick={() => window.open("https://drnich.co.id")}>
          <Image
            src="/drnich.png"
            alt="drnich.co.id"
            width={400}
            height={150}
            className="aspect-video h-auto object-cover rounded-lg max-w[400px]"
          />

          <p className="text-[10px] md:text-xs font-viga text-text-secondary mt-1">
            Full Stack Develop
          </p>
          <TextGenerateEffect
            words="Website Product Catalog Clinic Dr.Nich"
            className="text-sm lg:text-lg font-bold font-viga tracking-wide text-white "
          />
          <p className="text-[10px] md:text-xs font-viga text-white mt-1 line-clamp-3">
            "I built this website with two friends as a team, taking on the role
            of a full-stack developer to support both of them. We developed this
            website over two months, including an admin panel that allows for
            adding, editing, and deleting products, treatments, promotions, and
            images. We also implemented a search feature that allows users to
            easily find the product they are looking for. The website is built
            using React.js, Tailwind CSS for frontend and backend using node.js
            and MongoDB"
          </p>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Project;
