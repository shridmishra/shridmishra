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
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 ">
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  
  {
    category: "",
    title: "Crypto Wallet",
    src: "/crypto.png",
     link: "https://crypto-wallet-shrid.vercel.app/"
  },
  {
    category: "",
    title: "GS Notes",
    src: "/gsnotes.png",
    link: "https://sgsitsnotes.vercel.app/"
  
  },
  {
    category: "",
    title: "Zerodha Page",
    src: "/zerodha.png",
    
  },
   {
    category: "",
    title: "Coming Soon",
    src: "/gsnotes.png",
    link: "https://sgsitsnotes.vercel.app/"
  
  },
  {
    category: "",
    title: "Crypto Wallet",
    src: "/crypto.png",
     link: "https://crypto-wallet-shrid.vercel.app/"
  },
  {
    category: "",
    title: "Zerodha Page",
    src: "/zerodha.png",
    
  },
  
];
