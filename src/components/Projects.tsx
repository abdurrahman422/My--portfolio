"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Sparkles, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectModal from "./ProjectModal";
import SectionWrapper from "./SectionWrapper";

interface ProjectFeature {
  text: string;
}

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
}

const projects: Project[] = [
  {
    title: "OS-Level Personal Desktop AI Assistant",
    description:
      "Designed architecture for an autonomous desktop AI assistant focused on intelligent interaction, workflow automation, and privacy-first system design. The flagship project demonstrating complete AI system architecture.",
    summary:
      "Autonomous desktop AI assistant with voice/text commands, intent detection, multi-screen orchestration, and modular skill architecture.",
    challenge:
      "Designing a system that understands natural language, routes intents, and manages multi-screen orchestration with privacy-first local processing.",
    period: "Sep 2024 – Dec 2024",
    features: [
      { text: "Voice command system" },
      { text: "Text command interaction" },
      { text: "Intent detection architecture" },
      { text: "AI workflow planning" },
      { text: "Automation modules" },
      { text: "Email drafting concepts" },
      { text: "Web search workflow" },
      { text: "PDF summarization concepts" },
      { text: "Task scheduling system ideas" },
      { text: "Multi-agent integration concepts" },
      { text: "Local processing & privacy-first design" },
    ],
    tech: ["React", "Firebase", "Python", "Figma", "AI Workflow Design", "NLP"],
    isFlagship: true,
    gradient: "from-purple-600 via-blue-600 to-cyan-600",
  },
  {
    title: "Feed Mill Management System",
    description:
      "Designed and developed a centralized management system for feed production operations with end-to-end tracking, automated reporting, and operational transparency.",
    summary:
      "Centralized production management with material tracking, batch control, inventory, and automated reporting.",
    challenge:
      "Building a system to manage complex feed production — materials, batches, inventory, suppliers, and sales with data integrity.",
    period: "Jan 2025 – Apr 2025",
    features: [
      { text: "Raw material tracking" },
      { text: "Batch production management" },
      { text: "Finished goods inventory" },
      { text: "Supplier management" },
      { text: "Production logs" },
      { text: "Sales records" },
      { text: "Automated reporting" },
      { text: "Operational transparency" },
    ],
    tech: ["MySQL", "System Design", "Database Architecture"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    title: "National Crisis Response System",
    description:
      "Contributed to system architecture design for real-time emergency coordination, centralized monitoring, and multi-agency communication at national scale.",
    summary:
      "Scalable emergency coordination platform with real-time resource allocation and multi-agency communication.",
    challenge:
      "Designing a national-level system for real-time emergency response with fault tolerance and sustainability.",
    period: "May 2024 – Aug 2024",
    features: [
      { text: "Centralized monitoring workflow" },
      { text: "Emergency coordination logic" },
      { text: "Scalable system architecture" },
      { text: "Sustainability analysis" },
      { text: "Real-time response concepts" },
    ],
    tech: ["System Design", "Architecture Planning", "Distributed Systems"],
    gradient: "from-red-600 to-rose-600",
  },
  {
    title: "MediSync Healthcare System",
    description:
      "Developed healthcare system workflow models, database structures, and implementation planning for a synchronized cross-provider healthcare platform.",
    summary:
      "Healthcare data synchronization platform with cross-provider records, appointment management, and secure integration.",
    challenge:
      "Creating comprehensive healthcare models enabling secure data exchange across multiple providers.",
    period: "Jan 2024 – Apr 2024",
    features: [
      { text: "Logical database design" },
      { text: "Physical database design" },
      { text: "Workflow diagrams" },
      { text: "User interaction models" },
      { text: "Sustainability analysis" },
      { text: "Implementation planning" },
    ],
    tech: ["Database Design", "System Modeling", "Healthcare IT"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "Reward Earning Mobile App",
    description:
      "Built a cross-platform mobile reward application with Firebase authentication, real-time cloud database, and an engaging gamified user experience.",
    summary:
      "Cross-platform mobile app with Firebase auth, reward tracking, and interactive user dashboard.",
    challenge:
      "Building a real-time reward tracking system with secure authentication and seamless cross-platform experience.",
    features: [
      { text: "Firebase Authentication" },
      { text: "Cloud Firestore integration" },
      { text: "Login/Register system" },
      { text: "Reward tracking" },
      { text: "Mobile app UI design" },
      { text: "User dashboard" },
    ],
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Machine Learning & AI Lab Projects",
    description:
      "Implemented supervised and unsupervised learning algorithms — linear regression, K-Means clustering, data preprocessing, model evaluation with confusion matrix analysis.",
    summary:
      "ML implementations covering regression, clustering, data preprocessing, and model evaluation.",
    challenge:
      "Implementing and evaluating multiple ML algorithms on real datasets to derive actionable predictions.",
    features: [
      { text: "Linear Regression" },
      { text: "K-Means Clustering" },
      { text: "Data preprocessing" },
      { text: "Prediction systems" },
      { text: "Model evaluation" },
      { text: "Confusion matrix concepts" },
    ],
    tech: ["Python", "Google Colab"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Image Processing Projects",
    description:
      "Implemented fundamental image processing techniques in Python using OpenCV — smoothing filters, gradient operations, histogram analysis, and image enhancement algorithms.",
    summary:
      "Image processing pipeline with filtering, gradient operations, and pixel-level analysis techniques.",
    challenge:
      "Implementing efficient image processing algorithms for real-time enhancement and analysis.",
    features: [
      { text: "Smoothing filtering" },
      { text: "Gradient operations" },
      { text: "Pixel calculations" },
      { text: "Image enhancement concepts" },
      { text: "Digital image processing fundamentals" },
    ],
    tech: ["Python", "OpenCV"],
    gradient: "from-cyan-600 to-blue-600",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onOpen,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onOpen: (p: Project) => void;
}) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowXPct = useTransform(mouseX, [0, 1], [0, 100]);
  const glowYPct = useTransform(mouseY, [0, 1], [0, 100]);
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowXPct}% ${glowYPct}%, rgba(168,85,247,0.12), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxDeg = 6;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    rotateX.set(-(deltaY / (rect.height / 2)) * maxDeg);
    rotateY.set((deltaX / (rect.width / 2)) * maxDeg);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.08 } } : {}}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
        project.isFlagship ? "md:col-span-2 lg:col-span-2" : ""
      }`}
      style={{ perspective: 800 }}
      data-cursor-scale
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700`}
        />

        <div
          className={`relative h-full glass card-depth ${
            project.isFlagship ? "glow-border" : ""
          }`}
        >
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{ background: glowBg }}
          />

          <div className="relative z-10">
            {project.isFlagship && (
              <div className="absolute top-3 right-3 z-20">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  <Sparkles className="w-2.5 h-2.5" />
                  Flagship
                </span>
              </div>
            )}

            <div className="p-5 sm:p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.period && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </span>
                )}
              </div>

              <h3
                className={`font-bold text-white mb-2 ${
                  project.isFlagship ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"
                }`}
              >
                {project.title}
              </h3>

              <p className={`text-gray-400 leading-relaxed mb-3 ${project.isFlagship ? "text-xs sm:text-sm" : "text-xs"}`}>
                {project.isFlagship ? project.description : project.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, project.isFlagship ? 5 : 3).map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${
                      project.isFlagship
                        ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        : "bg-white/5 text-gray-400 border border-white/10"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-1 mb-4">
                {project.features.slice(0, project.isFlagship ? 4 : 2).map((f) => (
                  <div key={f.text} className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <CheckCircle2 className="w-2.5 h-2.5 text-purple-500/70 flex-shrink-0" />
                    <span className="truncate">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 active:scale-95"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="hidden sm:inline">Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-lg glass glass-hover border border-white/10 text-gray-300 hover:text-white transition-all duration-300 active:scale-95"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => onOpen(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-lg glass glass-hover border border-white/10 text-gray-300 hover:text-purple-400 transition-all duration-300 group/btn active:scale-95"
                >
                  Case Study
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <SectionWrapper id="projects" className="section-padding relative">
        <div className="absolute inset-0 grid-bg opacity-12" />
        <div className="container-max relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="tag tag-cyan mb-4 inline-block">
              &gt; projects.deploy()
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Case studies in AI systems, industrial management, healthcare, mobile development, and intelligent application design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
