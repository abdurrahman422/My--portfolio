"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Bot, CheckCircle2, Cpu, ExternalLink, Radio, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectModal from "./ProjectModal";
import SectionWrapper from "./SectionWrapper";

interface ProjectFeature { text: string }
interface Project {
  title: string;
  description: string;
  summary: string;
  challenge: string;
  period?: string;
  features: ProjectFeature[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  gradient: string;
  image: string;
  label: string;
}

const projects: Project[] = [
  {
    title: "NEXA AI",
    label: "AUTONOMOUS DESKTOP INTELLIGENCE",
    description: "A local-first AI assistant combining voice, chat, live answers, automation and permission-controlled desktop actions.",
    summary: "A desktop intelligence layer that listens, reasons and executes useful actions.",
    challenge: "Connecting natural-language intent with secure, permission-controlled desktop automation.",
    period: "ACTIVE BUILD",
    features: [{ text: "Voice interaction" }, { text: "Live intelligence" }, { text: "Desktop automation" }, { text: "Permission controls" }],
    tech: ["React", "Electron", "TypeScript", "Python", "FastAPI"],
    githubUrl: "https://github.com/abdurrahman422/nexa_ai",
    isFlagship: true,
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
    image: "/projects/nexa.png",
  },
  {
    title: "StudyType AI",
    label: "AI LEARNING PLATFORM",
    description: "Written-recall examinations with semantic evaluation, telemetry, intelligent feedback and retention analytics.",
    summary: "An AI learning platform built around active recall and meaningful evaluation.",
    challenge: "Turning free-form written answers into clear, useful and explainable learning feedback.",
    features: [{ text: "Semantic evaluation" }, { text: "Learning telemetry" }, { text: "AI feedback" }, { text: "Retention analytics" }],
    tech: ["TypeScript", "React", "Express", "Gemini"],
    liveUrl: "https://study-type-ai.vercel.app",
    githubUrl: "https://github.com/abdurrahman422/StudyType-AI",
    gradient: "from-blue-600 to-cyan-500",
    image: "/projects/studytype.png",
  },
  {
    title: "BAUET Academic Ecosystem",
    label: "CONNECTED CAMPUS SYSTEM",
    description: "A connected platform for academic workflows, student services, management and digital campus operations.",
    summary: "A unified digital ecosystem for connected academic operations.",
    challenge: "Bringing separate campus services into one coherent and accessible system.",
    features: [{ text: "Academic workflows" }, { text: "Student services" }, { text: "Digital operations" }, { text: "Unified access" }],
    tech: ["JavaScript", "Web Systems", "Management"],
    liveUrl: "https://bauet-academic-ecosystem.vercel.app",
    githubUrl: "https://github.com/abdurrahman422/bauet-academic-ecosystem",
    gradient: "from-cyan-600 to-emerald-500",
    image: "/projects/bauet.png",
  },
  {
    title: "BossFeed",
    label: "BUSINESS OPERATIONS CORE",
    description: "Feed-business management across inventory, products, users, orders, payments and administration.",
    summary: "A central operations system for a growing feed business.",
    challenge: "Keeping inventory, orders, payments and administration synchronized in one reliable workflow.",
    features: [{ text: "Inventory control" }, { text: "Order workflow" }, { text: "Payment records" }, { text: "Administration" }],
    tech: ["PHP", "MySQL", "Web"],
    githubUrl: "https://github.com/abdurrahman422/BossFeed",
    gradient: "from-amber-600 to-orange-500",
    image: "/projects/bossfeed.png",
  },
  {
    title: "Revive",
    label: "HEALTHCARE REMINDER",
    description: "A focused reminder experience designed around a clear everyday healthcare need.",
    summary: "A simple medicine reminder designed for consistent everyday use.",
    challenge: "Making an essential health routine easy to understand, schedule and follow.",
    features: [{ text: "Smart reminders" }, { text: "Clear scheduling" }, { text: "Focused UX" }, { text: "Mobile workflow" }],
    tech: ["Mobile", "Product Design", "Notifications"],
    githubUrl: "https://github.com/abdurrahman422/Revive",
    gradient: "from-rose-600 to-purple-500",
    image: "/projects/revive.png",
  },
  {
    title: "AR & M Enterprise",
    label: "INDUSTRIAL DIGITAL PRESENCE",
    description: "A modern digital presence for feed mill engineering and industrial solutions.",
    summary: "An industrial website that turns engineering capability into a clear digital experience.",
    challenge: "Presenting complex industrial services with clarity, credibility and modern interaction.",
    features: [{ text: "Service catalogue" }, { text: "Industrial identity" }, { text: "Responsive UI" }, { text: "Lead generation" }],
    tech: ["Next.js", "TypeScript", "Industrial Web"],
    githubUrl: "https://github.com/abdurrahman422/AR-M--Enterprise",
    gradient: "from-slate-500 to-blue-600",
    image: "/projects/portfolio.png",
  },
  {
    title: "Licence Key Management",
    label: "SECURE DEVELOPER TOOLING",
    description: "A TypeScript system for controlled software licence creation, access and management.",
    summary: "A controlled workflow for creating and managing software licences.",
    challenge: "Balancing developer convenience with reliable access control and licence integrity.",
    features: [{ text: "Key generation" }, { text: "Access control" }, { text: "Licence lifecycle" }, { text: "Admin workflow" }],
    tech: ["TypeScript", "Security", "Tooling"],
    githubUrl: "https://github.com/abdurrahman422/Licence-key-management-",
    gradient: "from-violet-600 to-fuchsia-500",
    image: "/projects/license.png",
  },
];

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <SectionWrapper id="projects" className="section-padding relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[120px]" />

        <div className="container-max relative z-10">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="tag tag-cyan mb-4 inline-flex items-center gap-2">
              <Radio className="h-3 w-3 animate-pulse" />
              &gt; projects.initialize()
            </span>
            <p className="mb-3 font-mono text-[10px] tracking-[0.35em] text-cyan-400/70">
              IDEA // ENGINEERING // OPERATION
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Projects that move from
              <br />
              <span className="text-gradient">idea to operation.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
              Intelligent systems designed as working products—from the first signal to a dependable real-world workflow.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-6xl pb-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-ai-card sticky overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090912]/95 shadow-[0_-24px_70px_rgba(0,0,0,0.72)] backdrop-blur-xl ${index === projects.length - 1 ? "mb-8" : "mb-[52vh]"}`}
                style={{ top: "88px", zIndex: index + 1 }}
              >
                <div className={`h-px w-full bg-gradient-to-r ${project.gradient}`} />
                <div className="grid min-h-[430px] lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="group relative min-h-[260px] overflow-hidden lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} system interface`}
                      fill
                      className="object-cover opacity-75 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#090912] max-lg:bg-gradient-to-t" />
                    <div className="project-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-70 shadow-[0_0_18px_#22d3ee]" />
                    <div className="absolute bottom-5 left-5 font-mono text-[9px] tracking-[0.2em] text-cyan-300/55">
                      VISUAL FEED // {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/55 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-cyan-300 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                      SYSTEM ONLINE
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-400/35" />
                    <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-purple-400/35" />
                    <div className="absolute right-7 top-7 font-mono text-5xl font-black text-white/[0.035]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.22em] text-purple-300">
                        CASE FILE / {String(index + 1).padStart(2, "0")}
                      </span>
                      {project.isFlagship && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 font-mono text-[9px] text-amber-300">
                          <Sparkles className="h-3 w-3" /> FLAGSHIP
                        </span>
                      )}
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-cyan-400/70">
                      {index === 0 ? <Bot className="h-4 w-4" /> : <Cpu className="h-4 w-4" />}
                      <span className="font-mono text-[10px] tracking-[0.16em]">{project.label}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-400">{project.description}</p>
                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature.text} className="flex items-center gap-2 text-[11px] text-gray-400">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-cyan-500" />
                          {feature.text}
                        </div>
                      ))}
                    </div>
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-md border border-purple-400/15 bg-purple-500/[0.07] px-2 py-1 font-mono text-[9px] text-purple-200/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-3.5 py-2 font-mono text-[10px] text-white transition hover:shadow-[0_0_24px_rgba(168,85,247,0.3)]">
                          <ExternalLink className="h-3.5 w-3.5" /> Live system
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[10px] text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-300">
                        <GithubIcon className="h-3.5 w-3.5" /> Source
                      </a>
                      <button onClick={() => setSelectedProject(project)} className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[10px] text-gray-300 transition hover:border-purple-400/30 hover:text-purple-300">
                        Case study <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
