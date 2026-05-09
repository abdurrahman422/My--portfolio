"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Mail, Download, ChevronRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { scrollToSection, socialLinks, personalInfo } from "@/lib/utils";

const roles = [
  "AI System Designer",
  "Intelligent System Architect",
  "UI/UX Engineer",
  "Machine Learning Builder",
];

const systemMetrics = [
  { label: "STATUS", value: "ACTIVE", color: "text-green-400" },
  { label: "MODE", value: "DEVELOPER", color: "text-purple-400" },
  { label: "LOCATION", value: "BANGLADESH", color: "text-blue-400" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting && charIndex < currentRole.length) {
      setDisplayText(currentRole.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    } else if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      setDisplayText(currentRole.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="absolute inset-0">
        <div className="ambient-light top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/8" />
        <div className="ambient-light bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/6" />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, rgba(168, 85, 247, 0.04), transparent 50%)`,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="absolute top-8 left-8 hidden md:block">
        <div className="glass rounded-xl p-3 space-y-1.5 border-l-2 border-l-purple-500/50">
          {systemMetrics.map((m) => (
            <div key={m.label} className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-500">{m.label}:</span>
              <span className={`${m.color} font-semibold`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 glass rounded-xl px-4 py-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs font-mono text-green-400">SYSTEM ONLINE</span>
      </div>

      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[1px] opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute right-0 top-0 h-full w-[50vw] max-w-[650px] hidden lg:block pointer-events-none"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/hero-visual.png"
            alt=""
            fill
            className="object-cover object-[center_30%] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/15 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30" />
        </div>
      </motion.div>

      <div className="relative z-10 container-max px-6 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-purple-400 border border-purple-500/20 rounded-full bg-purple-500/5">
            <Terminal className="w-3 h-3" />
            <span className="hidden sm:inline">&gt; system.init() —</span> AI Engineer Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight text-balance"
        >
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 mb-6"
        >
          <span className="text-lg sm:text-2xl text-gray-300 font-mono">
            {displayText}
            <span className="animate-cursor text-purple-400 ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed text-balance"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-6 sm:px-8 py-3 rounded-full font-mono text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="/resume.pdf"
            download
            className="group px-6 sm:px-8 py-3 rounded-full font-mono text-sm font-medium glass glass-hover border border-white/10 text-gray-300 flex items-center gap-2 hover:text-white active:scale-95 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 sm:px-8 py-3 rounded-full font-mono text-sm font-medium glass glass-hover border border-white/10 text-gray-300 hover:text-white active:scale-95 transition-all duration-300"
          >
            Contact
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-purple-400 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-4 h-7 border-2 border-gray-600 rounded-full flex justify-center">
              <motion.div className="w-1 h-2 bg-purple-400 rounded-full mt-1.5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
