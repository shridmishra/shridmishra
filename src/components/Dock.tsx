"use client";

import React from "react";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { ThemeToggle } from "./ThemeToggle";

const Dock = () => {
    const dockLinks = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
            ),
            href: "/",
        },
        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
            ),
            href: "/projects",
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
            ),
            href: "https://x.com/shridmishra",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-muted-foreground hover:text-primary transition-colors" />
            ),
            href: "https://github.com/shridmishra",
        },
        {
            title: "Toggle Theme",
            icon: <ThemeToggle />, 
            
        },
    ];

    return (
        <FloatingDock
            
            items={dockLinks}
            desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
            mobileClassName="fixed bottom-4 left-4"
        />
    );
};

export default Dock;
