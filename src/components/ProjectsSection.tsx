import React from "react";
import Link from "next/link";
import { ProjectCard } from "@/src/components/ui/project-card";
import { projects } from "../utils/constants";

export const ProjectsSection = () => {
  return (
    <section className="space-y-12">
      {/* Section Header */}
      <header className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-medium text-primary text-center">
          Proof Of Work
        </h2>
        {/* <p className="text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          Recent projects spanning blockchain infrastructure, DeFi protocols, and full-stack applications.
          Each built with a focus on security, scalability, and user experience.
        </p> */}
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            // status={project.status}
            index={index}
            link={project.link}
            source={project.code}
          />
        ))}
      </div>

      {/* Additional Work Link */}
      <footer className="pt-4 border-t border-border/30 mb-20 ">


        <div className="text-sm font-medium text-secondary mb-1">
          <Link
            href="https://github.com/shridmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors"
          >
            <span>More Projects</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
        <p className="text-xs text-muted">
          View additional work and open source contributions
        </p>




      </footer>
    </section>
  );
};