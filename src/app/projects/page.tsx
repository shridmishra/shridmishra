"use client";

import React from "react";
import { ProjectCard } from "@/src/components/ui/project-card";
import { projects } from "@/src/lib/constants";


 const page = () => {
  const displayedProjects = projects;

  return (
    <section className="py-8 lg:py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
           My Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my work in full-stack & blockchain applications.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="group h-full"
              style={{
                animationDelay: `${index * 120}ms`,
                animationFillMode: "both",
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                imageSrc={project.imageSrc}
                link={project.link}
                source={project.code}
              />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default page;