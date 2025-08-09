"use client";

import { useEffect, useState } from "react";
import Dock from "@/src/components/Dock";
import { Hero } from "@/src/components/Hero";
import { ExperienceSection } from "@/src/components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
// import Skills from "../components/Skills";
// import RecentBlogs from "../components/RecentBlogs";
import { InteractiveGridPattern } from "../components/ui/interactive-grid-pattern";
// import { BentoGrid } from "../components/Bento";

const PortfolioPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;


  return (
    <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased">
      <InteractiveGridPattern />
      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-96 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">

        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <Dock />
        {/* <BentoGrid/> */}
        {/* <Skills />
        <RecentBlogs /> */}
     </div>


    </div>
  );
};

export default PortfolioPage;
