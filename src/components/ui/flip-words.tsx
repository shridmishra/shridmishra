"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export const FlipWords = ({
  words,
  duration = 1200,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={currentWord}
        initial={{ rotateX: 60, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -60, opacity: 0, position: "absolute" }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "center" }}
        className={cn(
          "inline-block text-muted",
          className
        )}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};
