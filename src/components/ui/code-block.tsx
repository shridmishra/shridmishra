"use client";

import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative border border-border rounded-lg bg-muted p-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
