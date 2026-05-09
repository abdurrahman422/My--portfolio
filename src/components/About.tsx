"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Cpu,
  Palette,
  Bot,
  Cog,
  LayoutDashboard,
  Lightbulb,
  Map,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: Cpu,
    title: "AI Systems Engineering",
    description:
      "Designing intelligent systems with voice interaction, intent detection, and autonomous workflow orchestration. Focused on building assistant architectures that understand, reason, and act.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "UI/UX Architecture",
    description:
      "Crafting futuristic interfaces with glassmorphism, micro-interactions, and seamless user flows that feel like interacting with an intelligent operating system rather than a standard application.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bot,
    title: "Assistant Architecture",
    description:
      "Building Jarvis-style AI assistants with modular skill engines, multi-modal input processing (voice + text), context-aware response generation, and privacy-first local processing.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Cog,
    title: "Automation & Workflow",
    description:
      "Developing smart automation pipelines that eliminate repetitive workflows, orchestrate multi-step tasks, and create self-operating sequences with intelligent error handling and state management.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: LayoutDashboard,
    title: "System Design",
    description:
      "Approaching every project with production-grade system design — scalable architecture, modular components, database schema design, and real-world performance optimization.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong foundation in data structures, algorithms, probability, and statistics — solving complex computational problems with elegant, efficient, and maintainable solutions.",
    color: "from-cyan-500 to-purple-500",
  },
  {
    icon: Map,
    title: "Database Architecture",
    description:
      "Designing normalized relational schemas, efficient indexing strategies, and scalable data models that ensure data integrity, query performance, and long-term maintainability.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "AI Interaction Design",
    description:
      "Creating conversational and command-based interfaces that feel natural and intelligent — from intent detection to response generation, focused on seamless human-AI interaction.",
    color: "from-pink-500 to-purple-500",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about" className="section-padding relative">
      <div className="absolute inset-0 grid-bg-sm opacity-25" />
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="tag mb-4 inline-block">&gt; about.system()</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gradient">About the Architect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 mb-14 items-center"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
            <Image
              src="/images/about-visual.png"
              alt="MD. Abdur Rahman — AI System Architect"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>
          <div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
              Results-oriented Computer Science &amp; Engineering student with hands-on experience in intelligent system design,
              AI-driven automation, database architecture, and futuristic UI/UX — building towards a vision of seamless human-AI interaction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-mono rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                CSE Student
              </span>
              <span className="px-3 py-1.5 text-xs font-mono rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Bangladesh
              </span>
              <span className="px-3 py-1.5 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                AI Systems
              </span>
              <span className="px-3 py-1.5 text-xs font-mono rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                UI/UX Design
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative p-4 sm:p-5 rounded-2xl glass glass-hover glow-card"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div
                  className={`w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} p-2 transition-transform group-hover:scale-110 duration-300 flex-shrink-0`}
                >
                  <item.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
