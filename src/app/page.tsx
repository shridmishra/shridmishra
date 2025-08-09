"use client";

import { useEffect, useState } from "react";
import Dock from "@/src/components/Dock";
import { Hero } from "@/src/components/Hero";
import { ExperienceSection } from "@/src/components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import Skills from "../components/Skills";
import RecentBlogs from "../components/RecentBlogs";

const PortfolioPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;


  return (
    <div className="min-h-screen bg-background  relative overflow-hidden font-sans antialiased">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
        linear-gradient(to right, var(--background-border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--background-border) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}/></div>


      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-96 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">

        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <Dock />
        <Skills/>
        <RecentBlogs/>

      </div>
    </div>
  );
};

export default PortfolioPage;
