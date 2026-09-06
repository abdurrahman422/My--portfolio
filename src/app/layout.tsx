import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070d",
};

export const metadata: Metadata = {
  title: "Abdur Rahman | AI & Software Engineer",
  description:
    "Cinematic portfolio of Abdur Rahman, an AI and Software Engineer building intelligent assistants, automation tools, full-stack applications and practical digital systems.",
  keywords: [
    "AI Engineer",
    "System Designer",
    "Portfolio",
    "Abdur Rahman",
    "Bangladesh",
    "React",
    "Next.js",
    "Machine Learning",
    "Python",
    "Firebase",
    "AI Assistant",
    "Jarvis",
    "Voice AI",
    "MySQL",
    "System Architecture",
  ],
  authors: [{ name: "Abdur Rahman" }],
  creator: "Abdur Rahman",
  openGraph: {
    title: "Abdur Rahman | AI & Software Engineer",
    description:
      "AI System Designer from Bangladesh, specializing in intelligent assistant architectures, voice AI systems, database design, and futuristic UI/UX.",
    url: "https://my-portfolio-eight-sigma-wm5wq9rsei.vercel.app",
    siteName: "Abdur Rahman",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdur Rahman | AI & Software Engineer",
    description:
      "AI System Designer from Bangladesh specializing in intelligent assistant architectures, voice AI, and machine learning systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
