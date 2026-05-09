"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import SectionWrapper from "./SectionWrapper";

interface ContactItem {
  label: string;
  value: string;
  icon: React.ElementType;
  href?: string;
  iconColor: string;
  hoverGlow: string;
}

const contactItems: ContactItem[] = [
  {
    label: "Address",
    value: "Al-Hera Nogor, Bera, Pabna",
    icon: MapPin,
    iconColor: "text-purple-400",
    hoverGlow: "shadow-purple-500/15",
  },
  {
    label: "Phone",
    value: "+8801762531330",
    icon: Phone,
    href: "tel:+8801762531330",
    iconColor: "text-green-400",
    hoverGlow: "shadow-green-500/15",
  },
  {
    label: "WhatsApp",
    value: "+8801762531330",
    icon: WhatsAppIcon,
    href: "https://wa.me/8801762531330",
    iconColor: "text-green-400",
    hoverGlow: "shadow-green-500/15",
  },
  {
    label: "Email",
    value: "abdurrahman422487@gmail.com",
    icon: Mail,
    href: "mailto:abdurrahman422487@gmail.com",
    iconColor: "text-purple-400",
    hoverGlow: "shadow-purple-500/15",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdurrahman422",
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/abdurrahman422",
    iconColor: "text-blue-400",
    hoverGlow: "shadow-blue-500/15",
  },
  {
    label: "GitHub",
    value: "github.com/abdurrahman422",
    icon: GithubIcon,
    href: "https://github.com/abdurrahman422",
    iconColor: "text-gray-300",
    hoverGlow: "shadow-purple-500/15",
  },
  {
    label: "Facebook",
    value: "facebook.com/abdurrahman422",
    icon: FacebookIcon,
    href: "https://www.facebook.com/abdurrahman422",
    iconColor: "text-blue-400",
    hoverGlow: "shadow-blue-500/15",
  },
  {
    label: "Instagram",
    value: "@abdurrahmanboss2",
    icon: InstagramIcon,
    href: "https://www.instagram.com/abdurrahmanboss2?igsh=MXhhemthMzZtNWlhcQ==",
    iconColor: "text-pink-400",
    hoverGlow: "shadow-pink-500/15",
  },
];

function ContactButton({
  item,
  index,
  isInView,
}: {
  item: ContactItem;
  index: number;
  isInView: boolean;
}) {
  const Icon = item.icon;

  const inner = (
    <>
      <span className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-12">
        <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
      </span>
      <span className="text-xs font-mono font-medium text-gray-200">
        {item.label}
      </span>
    </>
  );

  if (!item.href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.25, delay: index * 0.04 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass border border-white/5 hover:border-white/15 transition-colors duration-300 hover:shadow-lg ${item.hoverGlow}`}
      >
        {inner}
      </motion.div>
    );
  }

  const isExternal = item.href.startsWith("http");
  return (
    <motion.a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass border border-white/5 hover:border-white/15 transition-colors duration-300 hover:shadow-lg ${item.hoverGlow}`}
    >
      {inner}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="contact" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="tag tag-cyan mb-4 inline-block">
            &gt; contact.connect()
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something intelligent together.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
          {contactItems.map((item, index) => (
            <ContactButton
              key={item.label}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
