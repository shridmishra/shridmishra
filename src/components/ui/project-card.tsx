import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  // status: string;
  index: number;
  link?: string;
  source?: string;
}

export const ProjectCard = ({
  title,
  description,
  tech,
  // status,
  index,
  link,
  source
}: ProjectCardProps) => {
  // const getStatusIndicator = (status: string) => {
  //   switch (status.toLowerCase()) {
  //     case "live":
  //     case "production":
  //       return {
  //         color: "bg-emerald-500",
  //         text: "Live",
  //         pulse: true
  //       };
  //     case "in development":
  //     case "development":
  //       return {
  //         color: "bg-amber-500",
  //         text: "In Development",
  //         pulse: false
  //       };
  //     case "archived":
  //       return {
  //         color: "bg-slate-400",
  //         text: "Archived",
  //         pulse: false
  //       };
  //     default:
  //       return {
  //         color: "bg-slate-400",
  //         text: status,
  //         pulse: false
  //       };
  //   }
  // };

  // const statusInfo = getStatusIndicator(status);

  return (
    <article className="group relative bg-background border border-border/50 rounded-lg p-6 hover:border-border transition-all duration-300 hover:shadow-sm">
      {/* Header */}
      <header className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">
              {title}
            </h3>
          </div>
          
          {/* Status */}
          {/* <div className="flex items-center gap-2">
            <div className={`w-2 h-2 ${statusInfo.color} rounded-full ${statusInfo.pulse ? 'animate-pulse' : ''}`} />
            <span className="text-sm text-secondary">{statusInfo.text}</span>
          </div> */}
        </div>

        {/* Index */}
        <div className="w-8 h-8 bg-muted/50 text-muted rounded-md flex items-center justify-center text-xs font-mono opacity-60">
          {String(index + 1).padStart(2, "0")}
        </div>
      </header>

      {/* Description */}
      <p className="text-muted leading-relaxed mb-6 text-sm">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs font-medium text-secondary mb-3 uppercase tracking-wider">
          Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 text-xs font-medium bg-muted/30 text-secondary rounded border border-border/30 hover:bg-muted/50 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
  <footer className="flex items-center gap-6 pt-4 border-t border-border/30">
  {/* View Project */}
  {link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/70 transition-colors group/link"
    >
      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      View Project
    </a>
  ) : (
    <span className="flex items-center gap-2 text-xs font-medium text-muted/50">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      View Project
    </span>
  )}

  {/* Source Code */}
  {source ? (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/70 transition-colors group/source"
    >
      <svg className="w-3.5 h-3.5 group-hover/source:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      Source
    </a>
  ) : (
    <span className="flex items-center gap-2 text-xs font-medium text-muted/50">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      Source
    </span>
  )}
</footer>
    </article>
  );
};