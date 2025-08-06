import React from "react";
import { ProjectCard } from "@/src/components/ui/project-card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "A comprehensive decentralized trading platform with automated market making, yield farming, and cross-chain asset management.",
      tech: ["React", "Solidity", "Web3.js", "Node.js"],
      status: "Live",
      year: "2024"
    },
    {
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, and royalty distribution. Built with gas-optimized smart contracts.",
      tech: ["Next.js", "Ethereum", "IPFS", "TypeScript"],
      status: "Live",
      year: "2023"
    },
    {
      title: "DAO Governance Tool",
      description: "Democratic governance platform enabling token holders to propose, vote, and execute organizational decisions on-chain.",
      tech: ["React", "Solidity", "The Graph", "Hardhat"],
      status: "In Development",
      year: "2024"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure asset bridge facilitating seamless transfers between Ethereum, Polygon, and BSC with minimal fees.",
      tech: ["Vue.js", "Solidity", "Chainlink", "Express"],
      status: "Live",
      year: "2023"
    }
  ];

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
        </div>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl leading-relaxed">
          A curated selection of my recent work, showcasing innovative blockchain solutions and full-stack applications that push the boundaries of Web3 development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            status={project.status}
            year={project.year}
            index={index}
          />
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center pt-8">
        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 rounded-xl transition-all duration-300 font-medium">
          <span>View All Projects</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};