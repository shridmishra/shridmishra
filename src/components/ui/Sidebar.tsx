"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface SidebarProps {
  components: { name: string; id: string }[];
  onSelect: (id: string) => void;
}

export function Sidebar({ components, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cn(
        "bg-muted border-r border-border p-4 flex flex-col transition-all duration-300",
        open ? "w-60" : "w-14"
      )}
    >
      {/* Toggle Button */}
      <button
        className="mb-4 p-2 rounded-md bg-background border border-border hover:bg-accent"
        onClick={() => setOpen(!open)}
      >
        {open ? "⟨" : "⟩"}
      </button>

      {/* Component Links */}
      <nav className="space-y-2">
        {components.map((comp) => (
          <button
            key={comp.id}
            onClick={() => onSelect(comp.id)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors",
              open ? "text-sm" : "text-xs"
            )}
          >
            {open ? comp.name : comp.name.charAt(0)}
          </button>
        ))}
      </nav>
    </aside>
  );
}
