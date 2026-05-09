"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { architectureItems } from "@/lib/utils";
import SectionWrapper from "./SectionWrapper";

export default function SystemArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="architecture" className="section-padding relative">
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
            &gt; architecture.diagram()
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">System Design & Architecture</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Engineering approach — from assistant pipelines to database schemas, automation workflows, and system layering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {architectureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass rounded-2xl p-5 sm:p-6 glass-hover"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {item.items.map((sub, i) => (
                  <div key={sub} className="flex items-center gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        i < item.items.length - 1
                          ? "bg-purple-500/50"
                          : "bg-blue-500/50"
                      }`}
                    />
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-xs text-gray-300">{sub}</span>
                      {i < item.items.length - 1 && (
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-purple-500/10 to-transparent" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
