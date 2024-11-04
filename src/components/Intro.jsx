"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export const Intro = () => {
  // Separate each word for the typewriter effect
  const words = [
    {
      text: "I",
      className: "font-bold text-xl lg:text-5xl",
    },
    {
      text: "design",
      className: "font-bold text-xl lg:text-5xl",
    },
    {
      text: "&",
      className: "font-bold text-xl lg:text-5xl",
    },
    {
      text: "build",
      className: "font-bold text-xl lg:text-5xl",
    },
    {
      text: "full-stack",
      className: "font-bold text-xl lg:text-5xl text-blue-500", // Optional colored text
    },
    {
      text: "web",
      className: "font-bold text-xl lg:text-5xl",
    },
    {
      text: "apps.",
      className: "font-bold text-xl lg:text-5xl",
    }
  ];

  return (
    <div className="flex flex-col items-start justify-center  pt-10 bg-slate-950 text-white font-poppins px-8 mb-4">
      
     
      <div className="text-left mb-6 flex flex-wrap text-slate-300 mx-auto lg:mx-0">
        <p className="text-lg font-extralight mr-2 lg:text-4xl">Hi, I'm</p>
        <p className="text-lg font-semibold lg:text-4xl "> 
          <LinkPreview
          url="https://www.linkedin.com/in/shridmishra/"
          className="font-light bg-clip-text text-transparent bg-slate-200">
          Shrid Mishra
        </LinkPreview> 👋 </p>
      </div>

      {/* Typewriter Effect for "I design and build full-stack web apps" */}
      <div className="text-left">
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
};
