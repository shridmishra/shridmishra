"use client";

import React from "react";
import {
  IconWorld,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Badge } from "@/src/components/ui/badge";
import { FileText } from "lucide-react";

interface Experience {
  logoBg: string;
  logoIcon: React.ReactNode;
  role: string;
  company: string;
  year: string;
  type: string;
  description: string;
  tech: string[];
  links: {
    type: "website" | "github" | "twitter" | "linkedin";
    url: string;
  }[];
}

const iconMap = {
  website: IconWorld,
  github: IconBrandGithub,
  twitter: IconBrandTwitter,
  linkedin: IconBrandLinkedin,
};

const experiences: Experience[] = [
  {
    logoBg: "bg-green-600",
    logoIcon: <FileText className="h-5 w-5 text-white" />,
    role: "Full-Stack Engineer",
    company: "Swifey AI",
    year: "Past",
    type: "Full-stack development across web, mobile, and blockchain",
    description: "",
    tech: ["FastAPI", "Node.js", "React", "TypeScript", "Flutter", "Solana", "Rust"],
    links: [
      { type: "github", url: "#" },
      { type: "website", url: "#" },
      { type: "twitter", url: "#" },
    ],
  },
  {
    logoBg: "bg-purple-700",
    logoIcon: <FileText className="h-5 w-5 text-white" />,
    role: "Founding Engineer",
    company: "Veritas AO",
    year: "2024",
    type: "Building fair launch platform on Arweave's AO protocol",
    description: "",
    tech: ["AO", "TypeScript", "React", "Node.js"],
    links: [
      { type: "website", url: "#" },
      { type: "twitter", url: "#" },
    ],
  },
  {
    logoBg: "bg-pink-600",
    logoIcon: <FileText className="h-5 w-5 text-white" />,
    role: "Full-Stack Engineering Intern",
    company: "Grafieks",
    year: "Internship",
    type: "Full-stack development internship",
    description: "",
    tech: ["Go", "Node.js", "React", "TypeScript"],
    links: [
      { type: "website", url: "#" },
      { type: "linkedin", url: "#" },
    ],
  },
];

export const ExperienceCard = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card px-6 py-5 shadow-lg dark:bg-neutral-900"
        >
          <div className="flex justify-between items-start sm:items-center">
            <div className="flex gap-4 items-start sm:items-center">
              <div
                className={`p-2 rounded-md ${exp.logoBg} shadow-md w-8 h-8 flex items-center justify-center`}
              >
                {exp.logoIcon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {exp.role}
                  <span className="text-muted-foreground font-normal"> · {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{exp.year}</p>
                <p className="text-sm text-muted-foreground">{exp.type}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-2 sm:mt-0">
              {exp.links.map((link, i) => {
                const Icon = iconMap[link.type];
                return (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tech.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs bg-muted border-border text-muted-foreground hover:bg-accent"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
