"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useMedia from "use-media";

export default function LampDemo() {
  // Define media query to detect if it's mobile (screen width < 768px)
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <LampContainer isMobile={isMobile}>
      <motion.h1
        initial={isMobile ? {} : { opacity: 0.5, y: 100 }}  // Skip animation if mobile
        whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      ></motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className, isMobile }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-lvh flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left Lamp */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0.5, width: "15rem" }}  // Skip animation if mobile
          whileInView={isMobile ? {} : { opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Lamp */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0.5, width: "15rem" }}  // Skip animation if mobile
          whileInView={isMobile ? {} : { opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Other UI Elements */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] sm:w-[20rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={isMobile ? {} : { width: "8rem" }}  // Skip animation if mobile
          whileInView={isMobile ? {} : { width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 sm:w-40 md:w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={isMobile ? {} : { width: "15rem" }}  // Skip animation if mobile
          whileInView={isMobile ? {} : { width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] sm:w-[20rem] md:w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
