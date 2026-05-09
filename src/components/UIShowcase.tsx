"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutDashboard,
  Smartphone,
  Pen,
  Palette,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { FigmaIcon } from "@/components/Icons";
import SectionWrapper from "./SectionWrapper";
import { scrollToSection } from "@/lib/utils";

const showcases = [
  {
    title: "Modern Dashboard UI",
    description: "Analytics dashboard with real-time data visualization and dark theme interface design for system monitoring.",
    icon: LayoutDashboard,
    gradient: "from-purple-500/15 to-blue-500/15",
  },
  {
    title: "Mobile App Screens",
    description: "Cross-platform mobile interfaces with intuitive navigation, micro-interactions, and modern design language.",
    icon: Smartphone,
    gradient: "from-blue-500/15 to-cyan-500/15",
  },
  {
    title: "Get In Touch",
    description: "Have a project or idea? Let's collaborate and build something intelligent together.",
    icon: MessageSquare,
    gradient: "from-purple-500/15 to-cyan-500/15",
    isContact: true,
  },
  {
    title: "Wireframe Concepts",
    description: "Low and high-fidelity wireframes showcasing user flow architecture and interaction design for complex systems.",
    icon: Pen,
    gradient: "from-cyan-500/15 to-blue-500/15",
  },
  {
    title: "Figma Design System",
    description: "Comprehensive design system with reusable components, typography scales, color tokens, and interaction specs.",
    icon: FigmaIcon,
    gradient: "from-pink-500/15 to-purple-500/15",
  },
  {
    title: "UI Component Library",
    description: "Custom futuristic component library with glassmorphism, neon effects, and premium design patterns.",
    icon: Palette,
    gradient: "from-blue-500/15 to-purple-500/15",
  },
];

export default function UIShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="showcase" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag tag-blue mb-4 inline-block">
            &gt; showcase.render()
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">UI/UX Showcase</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A curated collection of interface designs and visual concepts for modern applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {showcases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={item.isContact ? () => scrollToSection("contact") : undefined}
              className={`group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-500 hover:shadow-2xl ${item.isContact ? "hover:shadow-cyan-500/20" : "hover:shadow-purple-500/15"}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 group-hover:opacity-90 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 glass border border-white/5 group-hover:border-purple-500/20 transition-colors duration-300 rounded-2xl" />

              <div className="relative h-full p-5 sm:p-6 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 p-2 mb-3 transition-transform group-hover:scale-110 duration-300">
                  <item.icon className="w-full h-full text-purple-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
