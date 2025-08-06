"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { FloatingDock } from "@/src/components/ui/floating-dock";
import { ExperienceCard } from "@/src/components/ExperienceCard";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";

const PortfolioPage = () => {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true) }, []);
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
                {/* Theme Toggle */}
                <div className="absolute top-14 right-15">
                    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        variant="ghost" size="icon" className="border border-border">
                        {theme === 'dark'
                            ? <Sun className="h-6 w-6 text-foreground" />
                            : <Moon className="h-6 w-6 text-foreground" />}
                    </Button>
                </div>

                {/* Profile Section */}
                <section className="relative mb-16 sm:mb-24">
                    <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-card">
                        <Image
                            src="/assets/me.jpg"
                            width={144}
                            height={144}
                            alt="Shrid Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-3xl sm:text-3xl font-medium mb-1 mt-6 tracking-tight text-foreground">
                        Hi, I&apos;m Shrid
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
                        21, Mumbai | Full Stack Engineer
                    </p>
                    <p className="text-muted-foreground max-w-full sm:max-w-2xl leading-relaxed text-base sm:text-lg">
                        I&apos;m a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi
                        solutions. From writing secure smart contracts to building intuitive Web3 interfaces,
                        I turn complex blockchain concepts into user-friendly experiences.
                    </p>
                </section>

                {/* Experience Section */}
                <section>
                    <h2 className="text-2xl font-medium text-primary mb-4">Experience</h2>
                    <p className="text-muted-foreground mb-6">
                        A snapshot of my professional journey, showcasing my roles and contributions in
                        blockchain and full-stack development.
                    </p>
                    <ExperienceCard />
                </section>

                {/* Floating Dock */}
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
