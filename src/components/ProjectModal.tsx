"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { useEffect, useCallback } from "react";
import { projectDetailsData } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  period?: string;
  features: { text: string }[];
  tech: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const details = projectDetailsData[project.title as keyof typeof projectDetailsData];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-3 sm:p-4 pt-16 pb-20"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details: ${project.title}`}
      >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl glass-strong rounded-2xl overflow-hidden"
        >
          <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 border-b border-white/5 bg-background/80 backdrop-blur-xl">
            <div className="pr-6 min-w-0">
              <h2 className="text-sm sm:text-base font-semibold text-white font-mono truncate">
                {project.title}
              </h2>
              {project.period && (
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 mt-1">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  {project.period}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass glass-hover text-gray-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close project details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 sm:p-6 space-y-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {details ? (
              <>
                <div>
                  <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {details.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                    The Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {details.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">
                    System Architecture
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {details.architecture.map((item) => (
                      <div
                        key={item.label}
                        className="glass rounded-xl p-3 glass-hover"
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-[11px] font-mono text-white font-medium">
                            {item.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 pl-3">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                    Workflow Pipeline
                  </h3>
                  <div className="space-y-1.5">
                    {details.workflow.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 glass rounded-lg p-2.5"
                      >
                        <span className="text-[10px] font-mono text-purple-400 w-5 flex-shrink-0 pt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                      Design Decisions
                    </h3>
                    <ul className="space-y-1.5">
                      {details.designDecisions.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-1.5 text-xs sm:text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                      Future Scalability
                    </h3>
                    <ul className="space-y-1.5">
                      {details.scalability.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-1.5 text-xs sm:text-sm text-gray-300"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : null}

            <div>
              <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {project.features.map((f) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" aria-hidden="true" />
                    <span className="truncate">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
