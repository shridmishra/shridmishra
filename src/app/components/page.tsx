"use client";

import { useState } from "react";
import { Sidebar } from "@/src/components/ui/Sidebar";
import { ProjectCard } from "@/src/components/ui/project-card";
import { projects } from "@/src/app/components/(lib)/constant";
import { CodeBlock } from '@/src/components/ui/code-block';

const COMPONENTS = [
  {
    id: "project-card",
    name: "ProjectCard",
    description:
      "A card component to showcase projects with title, description, stack, and action links.",
    usage: (
      <div className="max-w-md">
        <ProjectCard {...projects[0]} index={0} />
      </div>
    ),
    code: `
<ProjectCard
  title="Anime Streaming App"
  description="A Netflix-style anime streaming platform built with Next.js, TypeScript, and YouTube API."
  tech={["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"]}
  link="https://example.com/anime-app"
  source="https://github.com/yourusername/anime-app"
  index={0}
/>
    `.trim(),
  },
  // More components here...
];

export default function ComponentsPlayground() {
  const [selectedId, setSelectedId] = useState(COMPONENTS[0].id);
  const selectedComponent = COMPONENTS.find((c) => c.id === selectedId)!;

  return (
    <div className="flex min-h-screen">
      <Sidebar
        components={COMPONENTS.map(({ id, name }) => ({ id, name }))}
        onSelect={setSelectedId}
      />

      <main className="flex-1 p-6 space-y-6">
        <header>
          <h1 className="text-2xl font-bold">{selectedComponent.name}</h1>
          <p className="text-muted-foreground mt-1">
            {selectedComponent.description}
          </p>
        </header>

        {/* Live Preview */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <div className="border border-border rounded-lg p-4 bg-background">
            {selectedComponent.usage}
          </div>
        </section>

        {/* Code Block */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Code</h2>
          <CodeBlock code={selectedComponent.code} />
        </section>
      </main>
    </div>
  );
}
