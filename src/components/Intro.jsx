"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import React from "react";

export const Intro = () => {
  // Separate each word for the typewriter effect
  const words = [
    {
      text: "I",
      className: "font-bold text-7xl",
    },
    {
      text: "design",
      className: "font-bold text-7xl",
    },
    {
      text: "and",
      className: "font-bold text-7xl",
    },
    {
      text: "build",
      className: "font-bold text-7xl",
    },
    {
      text: "full-stack",
      className: "font-bold text-7xl text-blue-500", // Optional colored text
    },
    {
      text: "web",
      className: "font-bold text-7xl",
    },
    {
      text: "apps.",
      className: "font-bold text-7xl",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center h-md pt-20 bg-slate-950 text-white font-poppins px-10">
      
      {/* Normal Text for "Hi, I'm Shrid Mishra" */}
      <div className="text-left mb-4 flex flex-wrap text-slate-300">
        <p className="text-4xl font-extralight mr-3">Hi, I'm</p>
        <p className="text-4xl font-semibold">Shrid Mishra  👋 </p>
      </div>

      {/* Typewriter Effect for "I design and build full-stack web apps" */}
      <div className="text-left">
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
};
