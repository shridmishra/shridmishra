"use client";

import React from "react";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";
import { Dock, DockIcon } from "@/src/components/magicui/dock"
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const DockBar = () => {
    const dockLinks = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-foreground hover:text-foreground/50 transition-colors" />
            ),
            href: "/",
        },
        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-foreground hover:text-foreground/50 transition-colors" />
            ),
            href: "/projects",
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-foreground hover:text-foreground/50 transition-colors" />
            ),
            href: "https://x.com/shridmishra",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-foreground hover:text-foreground/50 transition-colors" />
            ),
            href: "https://github.com/shridmishra",
        },
        {
            title: "Toggle Theme",
            icon: <ThemeToggle />,
        },
    ];

    return (
        <Dock
            className="fixed bottom-4 left-1/2 -translate-x-1/2"
            iconSize={40}
            iconMagnification={60}
            iconDistance={140}
            direction="middle"
        >
            {dockLinks.map((item, idx) =>
                item.href ? (
                    <DockIcon key={idx}>
                        <Link href={item.href} title={item.title}>
                            {item.icon}
                        </Link>
                    </DockIcon>
                ) : (
                    <DockIcon key={idx} title={item.title}>
                        {item.icon}
                    </DockIcon>
                )
            )}
        </Dock>
    );
};

export default DockBar;
