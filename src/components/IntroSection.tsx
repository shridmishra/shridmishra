import React from "react";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <Image
              src="/assets/me.jpg"
              width={160}
              height={160}
              alt="Shrid Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
              Hi, I&apos;m Shrid
            </h1>
            <div className="flex items-center gap-2 text-lg sm:text-xl text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                21, Mumbai
              </span>
              <span className="text-border">|</span>
              <span className="font-medium text-primary">Full Stack Engineer</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              I&apos;m a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences that drive innovation in the decentralized ecosystem.
            </p>
          </div>

          {/* Stats or Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["Blockchain", "DeFi", "Smart Contracts", "Web3", "React", "Node.js"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-secondary/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};