"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration * 1000 / words.length);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words, duration]);

  return (
    <p className={cn("font-bold", className)}>
      {displayText.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: filter ? "blur(10px)" : "none", opacity: 0 }}
          animate={{ filter: filter ? "blur(0px)" : "none", opacity: 1 }}
          transition={{ duration: duration / words.length, delay: index * (duration / words.length) }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
