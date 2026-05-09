"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Factory,
  Siren,
  Stethoscope,
  Smartphone,
  Brain,
  Image,
  Calendar,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    title: "OS-Level Personal Desktop AI Assistant",
    period: "Sep 2024 – Dec 2024",
    description:
      "Architected a Jarvis-style AI assistant with voice/text command processing, intent detection pipeline, multi-screen reactive UI, and modular skill engine for desktop automation and privacy-first local processing.",
    icon: Bot,
    color: "from-purple-500 to-blue-500",
    tags: ["AI Architecture", "Voice Systems", "NLP", "UI/UX"],
  },
  {
    title: "Feed Mill Management System",
    period: "Jan 2025 – Apr 2025",
    description:
      "Built a comprehensive industrial management platform with raw material tracking, batch production management, finished goods inventory, supplier management, and automated reporting pipelines.",
    icon: Factory,
    color: "from-amber-500 to-orange-500",
    tags: ["Database Design", "System Architecture", "Automation"],
  },
  {
    title: "National Crisis Response System",
    period: "May 2024 – Aug 2024",
    description:
      "Designed scalable system architecture for national-level emergency coordination with real-time incident tracking, multi-agency communication, and sustainability-focused distributed systems.",
    icon: Siren,
    color: "from-red-500 to-rose-500",
    tags: ["Distributed Systems", "Scalability", "Real-time"],
  },
  {
    title: "MediSync Healthcare System",
    period: "Jan 2024 – Apr 2024",
    description:
      "Developed comprehensive healthcare workflow models, logical and physical database designs, user interaction models, and implementation planning for cross-provider data synchronization.",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-500",
    tags: ["Healthcare IT", "Data Modeling", "Security"],
  },
  {
    title: "Reward Earning Mobile App",
    period: "",
    description:
      "Built a cross-platform Flutter application with Firebase Authentication, real-time Cloud Firestore integration, and gamified reward tracking system with modern mobile UI design.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    tags: ["Flutter", "Firebase", "Mobile Dev"],
  },
  {
    title: "Machine Learning & AI Lab",
    period: "",
    description:
      "Implemented linear regression, K-Means clustering, data preprocessing pipelines, prediction systems, and model evaluation with confusion matrix analysis in Python.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    title: "Image Processing Projects",
    period: "",
    description:
      "Developed image processing pipelines implementing smoothing filters, gradient operations, pixel-level analysis, and enhancement algorithms using OpenCV and Python.",
    icon: Image,
    color: "from-cyan-500 to-blue-500",
    tags: ["Python", "OpenCV", "Computer Vision"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="experience" className="section-padding relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block">
            &gt; experience.log()
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Project Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A chronological journey through projects that shaped my approach to intelligent system design.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-blue-500/25 to-transparent" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-4 md:left-6 top-1">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} p-1.5 shadow-lg shadow-purple-500/10`}
                  >
                    <item.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="glass rounded-2xl p-4 sm:p-5 glass-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  {item.period && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
