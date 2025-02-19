import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "../text-generate-effect";

interface CardProjectsProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    type: string;
  };
}

function CardProjects({ item }: CardProjectsProps) {
  return (
    <div
      className="p-4 rounded-xl w-fit max-w-[400px] lg:max-w-[400px] h-fit"
      onClick={() => window.open(item.link)}>
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={150}
        className="aspect-video h-auto object-cover rounded-lg max-w[400px]"
      />

      <p className="text-[10px] md:text-xs font-viga text-text-secondary mt-1">
        {item.type}
      </p>
      <TextGenerateEffect
        words={item.title}
        className="text-sm lg:text-lg font-bold font-viga tracking-wide text-white "
      />
      <p className="text-[10px] md:text-xs font-viga text-white mt-1 line-clamp-3">
        {item.description}
      </p>
    </div>
  );
}

export default CardProjects;
