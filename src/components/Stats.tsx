"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, LayoutDashboard, Brain, Database } from "lucide-react";
import { statsData } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: LayoutDashboard,
  brain: Brain,
  database: Database,
};

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative">
      <div className="container-max">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statsData.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Code2;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-gradient mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
