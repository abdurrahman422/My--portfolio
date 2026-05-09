"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? (prefersReduced ? {} : { opacity: 1, y: 0 }) : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
