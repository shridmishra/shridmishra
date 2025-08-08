import { I_Experience, } from "@/src/types/type";

// Professional Experience Data (Unchanged from Original)
export const experienceData: I_Experience[] = [
  {
    company_link: "https://www.beiyo.in/",
    company_logo: "/beiyo.png",
    company_name: "Beiyo",
    duration: "2024 - 2025",
    job_title: "Backend Developer",
    description: "",
  },
  {
    company_link: "#",
    company_logo: "/freelance-icon.webp",
    company_name: "Freelance",
    duration: "2023 - Present",
    job_title: "FullStack Developer",
    description: "",
  },
];

// Project Data (Enhanced with Expanded Tech Stack)
export const projects = [
  {
    title: "MediChain",
    description: "A Solana-based platform for secure health data sharing with PDA-based permissions and a responsive doctor dashboard.",
    tech: ["Next.js", "React", "TypeScript", "Solana", "Anchor", "PostgreSQL"],
    status: "In Development",
    year: "2025",
    link: "https://medichain-nine.vercel.app",
    code: "https://github.com/shridmishra/solana-contracts",
  },
  {
    title: "Solana Contract",
    description: "Smart contract for staking, unstaking, and claiming SPL tokens with PDA logic and comprehensive unit tests.",
    tech: ["Rust", "Solana", "Anchor", "TypeScript", "Mocha"],
    status: "Live",
    year: "2025",
    link: "https://github.com/shridmishra/solana-contracts",
    code: "https://github.com/shridmishra/solana-contracts",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio showcasing projects and technical expertise with a modern, animated UI.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    status: "Live",
    year: "2025",
    link: "https://shridmishra.vercel.app",
  },
  {
    title: "Notes",
    description: "A note-taking app for students with real-time collaboration and markdown support.",
    tech: ["React", "JavaScript", "Node.js", "Express", "Socket.io", "MongoDB"],
    status: "Live",
    year: "2025",
    link: "https://notes.shrid.in",
    code: "https://github.com/shridmishra/sgsits-notes",
  },
  {
    title: "Landing Page",
    description: "A marketing-focused landing page template with dynamic content and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Query"],
    status: "Live",
    year: "2025",
    link: "https://landing-page.shrid.in",
    code: "https://github.com/shridmishra/landing-page",
  },
  {
    title: "Crypto Explorer",
    description: "A cryptocurrency explorer tool with real-time data visualization and API integration.",
    tech: ["React", "TypeScript", "Node.js", "Chart.js", "CoinGecko API", "Axios"],
    status: "Live",
    year: "2025",
    link: "https://crypto-explorer.shrid.in",
    code: "https://github.com/shridmishra/crypto-explorer",
  },
  {
    title: "Grocery Store App",
    description: "A streamlined grocery shopping app with cart management and payment integration.",
    tech: ["JavaScript", "React", "Node.js", "Express", "Stripe", "MongoDB"],
    status: "Live",
    year: "2025",
    link: "https://grocery-store.shrid.in",
    code: "https://github.com/shridmishra/grocery-store",
  },
  {
    title: "SM3 Tech",
    description: "A tech services platform offering scalable solutions for businesses.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "GraphQL"],
    status: "Live",
    year: "2025",
    code: "https://github.com/shridmishra/sm3tech",
  },
];