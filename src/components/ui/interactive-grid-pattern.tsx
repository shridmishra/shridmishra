"use client";

import { cn } from "@/src/lib/utils";
import React, { useState, useEffect, useMemo, useRef } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Measure parent container size (not just screen)
  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      } else {
        setContainerSize({
          w: window.innerWidth,
          h: window.innerHeight,
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { horizontal, vertical } = useMemo(() => {
    return {
      horizontal: Math.ceil(containerSize.w / width),
      vertical: Math.ceil(containerSize.h / height),
    };
  }, [containerSize, width, height]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <svg
        width={horizontal * width}
        height={vertical * height}
        className={cn("absolute top-0 left-0", className)}
        {...props}
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-[var(--background-border)] transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
                hoveredSquare === index
                  ? "fill-gray-300/30"
                  : "fill-transparent",
                squaresClassName
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}
