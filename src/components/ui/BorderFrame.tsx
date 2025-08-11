import { ReactNode } from "react";
import clsx from "clsx";

interface BorderFrameProps {
  children: ReactNode;
  className?: string; // extra styles for outer wrapper
}

export default function BorderFrame({ children, className }: BorderFrameProps) {
  return (
    <div className={clsx("relative group p-1", className)}>
      {/* Content inside the frame */}
      <div className="w-full h-full overflow-hidden shadow-lg bg-card z-0">
        {children}
      </div>

      {/* Dashed border */}
      <div
        className="absolute -inset-1 border-[1.5px] border-dashed z-10 border-flicker !border-accent-foreground/30"
        aria-hidden="true"
      ></div>

      {/* Corner brackets */}
      <div className="absolute -inset-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {/* top-left */}
        <div className="absolute -top-0.5 -left-0.5 w-4 h-4">
          <div className="absolute top-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker"></div>
          <div className="absolute top-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker"></div>
        </div>
        {/* top-right */}
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4">
          <div className="absolute top-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker"></div>
          <div className="absolute top-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker"></div>
        </div>
        {/* bottom-left */}
        <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4">
          <div className="absolute bottom-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker"></div>
          <div className="absolute bottom-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker"></div>
        </div>
        {/* bottom-right */}
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4">
          <div className="absolute bottom-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker"></div>
          <div className="absolute bottom-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker"></div>
        </div>
      </div>
    </div>
  );
}
