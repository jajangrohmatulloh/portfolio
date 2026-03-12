"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  particleCount?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  colors?: string[];
}

export function Sparkles({
  className,
  particleCount = 50,
  minSize = 2,
  maxSize = 6,
  minSpeed = 0.5,
  maxSpeed = 2,
  colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#06B6D4"],
}: SparklesProps) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }>
  >([]);

  const generateParticle = useCallback((id: number) => {
    return {
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed),
      speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed),
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.3,
    };
  }, [colors, maxSize, minSize, maxSpeed, minSpeed]);

  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => generateParticle(i))
    );
  }, [particleCount, generateParticle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: ((p.x + p.speedX) % 100 + 100) % 100,
          y: ((p.y + p.speedY) % 100 + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
