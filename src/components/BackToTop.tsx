"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full glass glass-hover neon-glow"
    >
      <ArrowUp className="w-5 h-5 text-purple-400" />
    </motion.button>
  );
}
