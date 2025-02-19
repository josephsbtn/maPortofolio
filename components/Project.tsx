import React from "react";
import CardProjects from "./ui/card-projects";
const project = [
  {
    id: 1,
    title: "Website Product Catalog Clinic Dr.Nich",
    description: `I built this website with two friends as a team, taking on the role
            of a full-stack developer to support both of them. We developed this
            website over two months, including an admin panel that allows for
            adding, editing, and deleting products, treatments, promotions, and
            images. We also implemented a search feature that allows users to
            easily find the product they are looking for. The website is built
            using React.js, Tailwind CSS for frontend and backend using node.js
            and MongoDB`,
    link: "https://drnich.co.id",
    image: "/drnich.png",
    type: "Full Stack Development",
  },
];

const Project = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center relative ">
      <div className="relative w-full my-auto max-h-[80vh] overflow-x-hidden overflow-y-scroll  scroll-smooth scrollbar-hidden">
        <h1 className="text-3xl font-bold font-montserrat tracking-tight text-white">
          My Projects
        </h1>
        {/*ITEMS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {project.map((item) => (
            <CardProjects key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Project;
