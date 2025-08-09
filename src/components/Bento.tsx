// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardContent } from "@/src/components/ui/card";
// import {
//   Github,
//   GitPullRequest,
//   BookOpen,
//   Code,
//   Terminal,
//   Database,
//   Server,
//   Globe,
// } from "lucide-react";

// export function BentoGrid() {
//   return (
//     <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
      
//       {/* Tall image card */}
//       <Card className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800">
//         <Image
//           src="/anime.jpg"
//           alt="Profile"
//           width={400}
//           height={600}
//           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full">
//           <Globe className="w-4 h-4 text-white" />
//         </div>
//       </Card>

//       {/* Stacks */}
//       <Card className="col-span-3 row-span-1 rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-6">
//         <h2 className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
//           <Code className="w-4 h-4" /> Stacks
//         </h2>
//         <div className="flex flex-wrap gap-6">
//           <Terminal className="w-6 h-6 text-white" />
//           <Database className="w-6 h-6 text-white" />
//           <Server className="w-6 h-6 text-white" />
//           <Github className="w-6 h-6 text-white" />
//           <BookOpen className="w-6 h-6 text-white" />
//           <GitPullRequest className="w-6 h-6 text-white" />
//         </div>
//       </Card>

//       {/* GitHub contributions */}
//       <Card className="col-span-2 row-span-1 rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4">
//         <h2 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
//           <Github className="w-4 h-4" /> GitHub
//         </h2>
//         <iframe
//           src="https://ghchart.rshah.org/shridmishra"
//           className="w-full h-[120px] border-0"
//         />
//       </Card>

//       {/* Recent blogs */}
//       <Card className="col-span-2 row-span-1 rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4">
//         <h2 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
//           <BookOpen className="w-4 h-4" /> Recent Blogs
//         </h2>
//         <ul className="space-y-2">
//           <li>
//             <Link href="/blog/solana-anchor" className="text-white hover:underline">
//               Mastering Solana Anchor
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog/nextjs-performance" className="text-white hover:underline">
//               Next.js 15 Performance Tips
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog/prisma-postgresql" className="text-white hover:underline">
//               Prisma with PostgreSQL
//             </Link>
//           </li>
//         </ul>
//       </Card>

//     </div>
//   );
// }
