"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { socialLinks } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="container-max px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500 font-mono">
            <span className="text-purple-400">&lt;AR /&gt;</span>{" "}
            &copy; {new Date().getFullYear()} MD. ABDUR RAHMAN
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 font-mono">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 mx-1" />
            <span>for intelligent systems</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
