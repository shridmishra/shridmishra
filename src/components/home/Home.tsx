"use client";

import { useEffect, useState } from "react";
import { IconBrandGithub, IconBrandX, IconHome, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "@/src/components/ui/floating-dock";
import  ThemeToggle  from "@/src/components/DarkModeToggle";
import { Hero } from "@/src/components/Hero";
import { ExperienceSection } from "@/src/components/ExperienceSection";

const PortfolioPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const dockLinks = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans antialiased">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-96 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">
        <ThemeToggle />
        <Hero />
        <ExperienceSection />

        <FloatingDock
          items={dockLinks}
          desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
          mobileClassName="fixed bottom-4 left-4"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
