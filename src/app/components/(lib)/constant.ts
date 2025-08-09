
import { ProjectCardProps } from "../(components)/Card";

export const projects: Omit<ProjectCardProps, "index">[] = [
  {
    title: "Anime Streaming App",
    description:
      "A Netflix-style anime streaming platform built with Next.js, TypeScript, and YouTube API.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
    link: "https://example.com/anime-app",
    source: "https://github.com/yourusername/anime-app",
  },
  {
    title: "Grocery E-Commerce",
    description:
      "A full-featured grocery store web app with product browsing, cart, and checkout.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example.com/grocery",
    source: "https://github.com/yourusername/grocery-store",
  },
];
