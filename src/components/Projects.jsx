"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-slate-950">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "",
    title: "SGSITS NOTES",
    src: "/gsnotes.png",
    link: "https://sgsitsnotes.vercel.app/"
  
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/example.png",
    
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/example.png",
    
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/example.png",
    
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/example.png",
    
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/example.png",
    
  },
];
