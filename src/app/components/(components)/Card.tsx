"use client";

import * as React from "react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  link?: string;
  source?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  index,
  link,
  source,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group relative flex flex-col justify-between rounded-2xl p-8
        bg-gradient-to-b from-background via-background/95 to-background/80
        border border-white/10
        min-h-[400px] lg:max-h-[400px]
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        hover:border-primary/40
        hover:scale-[1.02]
        transition-all duration-300 ease-out
      "
    >
      {/* Header */}
      <header className="flex items-start justify-between mb-6">
        <h3
          className="
            text-xl font-semibold tracking-tight
            text-primary
            group-hover:text-primary/80
            transition-colors
          "
        >
          {title}
        </h3>

        <div
          className="
            w-9 h-9 flex items-center justify-center
            rounded-lg
            bg-background backdrop-blur-sm border border-border
            text-xs font-mono text-muted
            shadow-inner
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </header>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground mb-6">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-wider text-white/60 mb-3">
          Stack
        </h4>
        <motion.div
          className="flex flex-wrap gap-1.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {tech.map((item) => (
            <motion.span
              key={item}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-xs font-medium px-2 py-1.5 rounded-full
                bg-gradient-to-br from-muted/50 to-muted/30
                border border-border
                hover:from-primary/20 hover:to-primary/10
                transition-all
              "
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Actions */}
      <footer className="flex items-center gap-6 pt-4 border-t border-border">
        {/* View Project */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/70 transition-colors group/link"
          >
            <svg
              className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
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
            View Project
          </a>
        ) : (
          <span className="flex items-center gap-2 text-xs font-medium text-white/40">
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
            <svg
              className="w-3.5 h-3.5 group-hover/source:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source
          </a>
        ) : (
          <span className="flex items-center gap-2 text-xs font-medium text-white/40">
            Source
          </span>
        )}
      </footer>
    </motion.article>
  );
}
