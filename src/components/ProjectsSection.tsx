import React from "react";
import Link from "next/link";
import { ProjectCard } from "@/src/components/ui/project-card";
import { projects } from "../utils/constants";

export const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
            Proof of Work
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
           A showcase of my work in full-stack & blockchain apps.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                index={index}
                link={project.link}
                source={project.code}
              />
            </div>
          ))}
        </div>

        {/* Additional Work Section */}
        <footer className="border-t border-border/20 pt-12">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <Link
                href="https://github.com/shridmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-foreground/80 transition-all duration-300 hover:gap-4"
              >
                <span>Explore More Projects</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border/30 group-hover:border-border/60 group-hover:bg-muted/50 transition-all duration-300">
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
              </Link>
              
             
            </div>

            {/* Optional: Stats or additional info */}
            {/* <div className="flex items-center justify-center gap-8 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Blockchain</span>
              </div>
            </div> */}
          </div>
        </footer>
      </div>
    </section>
  );
};