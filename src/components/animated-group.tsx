"use client";

// Adapted from Motion Primitives' Animated Group (MIT).
// https://github.com/ibelick/motion-primitives/blob/main/components/core/animated-group.tsx
// See THIRD_PARTY_NOTICES.md. Limited to gentle vertical motion; text stays visible in SSR.
import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function AnimatedGroup({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="content"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }}
    >
      {Children.map(children, (child) => (
        <motion.div
          className="motion-item"
          variants={{ hidden: { y: 8 }, visible: { y: 0 } }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
