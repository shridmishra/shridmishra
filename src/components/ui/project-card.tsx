import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: string;
  year: string;
  index: number;
}

export const ProjectCard = ({ title, description, tech, status, year, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800/30';
      case 'in development':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-400 dark:border-yellow-800/30';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950/30 dark:text-gray-400 dark:border-gray-800/30';
    }
  };

  return (
    <div className={`group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
      index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'
    }`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(status)}`}>
                {status}
              </span>
              <span className="text-sm text-muted-foreground font-mono">
                {year}
              </span>
            </div>
          </div>
          
          {/* Project icon/number */}
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1.5 text-xs font-medium bg-secondary/70 text-secondary-foreground rounded-lg border border-border/50 hover:bg-secondary transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Project
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};