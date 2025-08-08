"use client";

import Image from "next/image";
import Link from "next/link";
import { MagicCard } from "./ui/magic-card";
import { I_Experience } from "../types/type";
import { experienceData } from "../utils/constants";

export const ExperienceSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building innovative solutions
          </p>
        </div>
     
        {/* Experience Cards */}
        <div className="space-y-4">
          {experienceData.map((exp: I_Experience, idx) => (
            <ExperienceCard key={`${exp.company_name}-${idx}`} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: I_Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <MagicCard className="group cursor-pointer border border-border/20 bg-card/30 backdrop-blur-sm hover:border-border/40 transition-all duration-300">
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-6">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={experience.company_link} 
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-border/30 bg-background shadow-sm">
                <Image 
                  src={experience.company_logo} 
                  alt={`${experience.company_name} logo`}
                  width={80} 
                  height={80} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Experience Content */}
          <div className="flex-1 min-w-0">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground leading-tight mb-1">
                  {experience.job_title}
                </h3>
                <p className="text-base text-muted-foreground font-medium">
                  {experience.company_name}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/30 shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="whitespace-nowrap font-medium">{experience.duration}</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-base text-muted-foreground leading-relaxed">
              <p>{experience.description}</p>
            </div>

            {/* Optional: Technologies Used */}
            {/* {experience.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default ExperienceSection;