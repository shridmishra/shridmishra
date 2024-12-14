"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPrisma, SiExpress,  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const notifications = [
  {
    name: "JavaScript",
    description: "Frontend/Backend scripting language",
    icon: <FaJs />, 
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    description: "Superset of JavaScript",
    icon: <SiTypescript />, 
    color: "#3178C6",
  },
  {
    name: "React",
    description: "Frontend library",
    icon: <FaReact className="text-[#61DAFB]"/>, 
    color: "#000",
  },
  {
    name: "Next.js",
    description: "React framework",
    icon: <SiNextdotjs />, 
    color: "white",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: <SiTailwindcss  className="text-[#38B2AC]"/>, 
    color: "#000000",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    icon: <SiMongodb />, 
    color: "#47A248",
  },
  {
    name: "Express.js",
    description: "Web framework for Node.js",
    icon: <SiExpress />, 
    color: "white",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime",
    icon: <FaNodeJs />, 
    color: "#339933",
  },
  {
    name: "Prisma",
    description: "Database toolkit",
    icon: <SiPrisma />, 
    color: "white",
  },
  {
    name: "Postgres",
    description: "Relational database management system",
    icon: <BiLogoPostgresql />, 
    color: "#5fa2d9",
  },
  {
    name: "GitHub",
    description: "Version control platform",
    icon: <FaGithub />, 
    color: "white",
  },
];

const Notification = ({ name, description, icon, color }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[105%]",
        "bg-slate-800 shadow-lg transform-gpu",
        "dark:bg-slate-700 dark:text-gray-200"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex w-12 h-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: "black" }}
        >
          <div className="text-2xl"  style={{ color: color }}>{icon}</div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="text-lg font-semibold text-gray-200">
            {name}
          </figcaption>
          <p className="text-sm font-light text-gray-300">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export const SkillsPop = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex h-[400px] lg:w-[500px] mt-12 flex-col p-6 overflow-hidden rounded-lg bg-slate-950 shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};
