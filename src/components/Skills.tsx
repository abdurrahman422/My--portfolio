"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Brain,
  Palette,
  BookOpen,
  Terminal,
  GitFork,
  Users,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend & App",
    icon: Code2,
    color: "from-purple-500 to-blue-500",
    skills: ["React", "HTML", "CSS", "Firebase"],
  },
  {
    category: "Database",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    skills: ["MySQL", "Firebase Realtime Database", "Firestore"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: ["Linear Regression", "K-Means Clustering", "Data Processing", "Confusion Matrix", "Prediction Systems"],
  },
  {
    category: "Core Knowledge",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
    skills: ["Data Structures & Algorithms", "Probability & Statistics", "Markov Chains", "Database Design", "Digital Image Processing"],
  },
  {
    category: "Tools",
    icon: GitFork,
    color: "from-cyan-500 to-blue-500",
    skills: ["Git & GitHub", "Google Colab", "Figma", "VS Code", "Android Studio"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    color: "from-green-500 to-teal-500",
    skills: ["Analytical Thinking", "Problem Solving", "Technical Documentation", "Team Collaboration", "Project Planning"],
  },
  {
    category: "Design",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="skills" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag tag-blue mb-4 inline-block">&gt; skills.inventory()</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Languages, frameworks, tools, and methodologies powering intelligent system development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
              className="glass rounded-2xl p-4 sm:p-5 glow-card glass-hover"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${group.color} p-1.5 flex-shrink-0`}
                >
                  <group.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:border-purple-500/30 hover:text-purple-300 hover:bg-purple-500/5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
