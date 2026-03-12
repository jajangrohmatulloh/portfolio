"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HeroHighlight({ children, className, containerClassName }: HeroHighlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSmooth = useSpring(mouseX, {
    stiffness: 500,
    damping: 100,
    mass: 1,
  });
  const mouseYSmooth = useSpring(mouseY, {
    stiffness: 500,
    damping: 100,
    mass: 1,
  });

  const rotateX = useTransform(mouseYSmooth, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSmooth, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    const mouseXNormalized = mouseXFromCenter / width;
    const mouseYNormalized = mouseYFromCenter / height;
    mouseX.set(mouseXNormalized);
    mouseY.set(mouseYNormalized);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full h-full",
        containerClassName
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 blur-3xl", className)} />
      {children}
    </motion.div>
  );
}

interface HeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroTitle({ children, className }: HeroTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </motion.h1>
  );
}

interface HeroSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroSubtitle({ children, className }: HeroSubtitleProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn("text-xl sm:text-2xl md:text-3xl", className)}
    >
      {children}
    </motion.p>
  );
}
