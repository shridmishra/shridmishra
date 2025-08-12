"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/src/components/Hero";
import { ExperienceSection } from "@/src/components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";

import { InteractiveGridPattern } from "../components/ui/interactive-grid-pattern";
import DockBar from "../components/Dock";
import BentoGrid from "../components/BentoSection";
import Footer from "../components/Footer";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased selection:bg-pink-600 selection:text-foreground">
      <InteractiveGridPattern />
      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-96 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">
        <Hero />
        <ProjectsSection />
        <BentoGrid />
        <ExperienceSection />
        <DockBar />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
