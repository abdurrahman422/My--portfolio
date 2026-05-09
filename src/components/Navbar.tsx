"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback((href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(href);
      }
    },
    [handleClick]
  );

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5"
            : "bg-gradient-to-b from-background/50 to-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-max flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          <button
            onClick={() => handleClick("hero")}
            onKeyDown={(e) => handleKeyDown(e, "hero")}
            className="text-base sm:text-lg font-mono font-bold text-gradient focus-visible:outline-2 focus-visible:outline-purple-500/50 rounded"
            aria-label="Home"
          >
            &lt;AR /&gt;
          </button>

          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                role="menuitem"
                className={`relative px-3 py-2 text-xs font-mono transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-500/50 rounded ${
                  activeSection === item.href
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-current={activeSection === item.href ? "true" : undefined}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors -mr-2 focus-visible:outline-2 focus-visible:outline-purple-500/50 rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="glass-strong border-b border-white/10 shadow-xl shadow-black/20">
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => handleClick(item.href)}
                    role="menuitem"
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-mono transition-colors focus-visible:outline-2 focus-visible:outline-purple-500/50 ${
                      activeSection === item.href
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    aria-current={activeSection === item.href ? "true" : undefined}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
