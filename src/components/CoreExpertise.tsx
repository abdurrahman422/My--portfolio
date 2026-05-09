"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Workflow,
  Mic,
  Flame,
  Palette,
  LayoutDashboard,
  Cog,
  Database,
  Search,
  MessageSquare,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { expertiseData } from "@/lib/utils";

const iconMap: Record<number, React.ElementType> = {
  0: Bot,
  1: Workflow,
  2: Mic,
  3: Flame,
  4: Palette,
  5: LayoutDashboard,
  6: Cog,
  7: Database,
  8: Search,
  9: MessageSquare,
};

export default function CoreExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="expertise" className="section-padding relative">
      <div className="absolute inset-0 grid-bg-sm opacity-25" />
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block">&gt; expertise.matrix()</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Core Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Specialized capabilities in intelligent system design, AI interaction, and modern software architecture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {expertiseData.map((item, index) => {
            const Icon = iconMap[index] || Bot;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative p-4 sm:p-5 rounded-2xl glass glass-hover glow-card text-center"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} p-2 mx-auto mb-3 transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
