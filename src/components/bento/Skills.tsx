"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiSolana,
  SiRust,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const baseIcons = [
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiSolana,
  SiRust,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiKubernetes,
];

export const SkillsCarousel = () => {
  const repeatedIcons = [...baseIcons, ...baseIcons, ...baseIcons]; // repeated for continuous loop
  const half = Math.ceil(repeatedIcons.length / 2);
  const firstRow = repeatedIcons.slice(0, half);
  const secondRow = repeatedIcons.slice(half);

  return (
    <div className="bg-card rounded-xl p-4 overflow-hidden shadow-md border-2  w-full h-full">
      <h2 className="text-lg font-light  mb-3">Skills</h2>
      <div className="space-y-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }} // only half since we duplicated
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...firstRow, ...firstRow].map((Icon, idx) => (
            <Icon key={`row1-${idx}`} size={32} className="text-primary flex-shrink-0" />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 mt-8"
          animate={{ x: ["-50%", "0%"] }} // opposite direction
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...secondRow, ...secondRow].map((Icon, idx) => (
            <Icon key={`row2-${idx}`} size={32} className="text-primary flex-shrink-0" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
