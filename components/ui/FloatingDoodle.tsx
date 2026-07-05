"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingDoodleProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  rotate?: number;
}

/**
 * Wraps a doodle SVG in a slow, ambient bob-and-tilt loop.
 * Used to scatter strawberries, bows, stars etc. around sections
 * without ever competing with the content for attention.
 */
export default function FloatingDoodle({
  children,
  className = "",
  duration = 6,
  delay = 0,
  yOffset = 10,
  rotate = 4,
}: FloatingDoodleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{
        y: [0, -yOffset, 0],
        rotate: [-rotate, rotate, -rotate],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
