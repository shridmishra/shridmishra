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
        {
            title: "Toggle Theme",
            icon: <ThemeToggle />, // ✅ Add the toggle here
            href: "#",
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
