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
  title: "MD. ABDUR RAHMAN | AI System Designer & Engineer",
  description:
    "Portfolio of MD. ABDUR RAHMAN — AI System Designer from Bangladesh, specializing in intelligent assistant architectures, voice AI systems, database design, and futuristic UI/UX. Explore projects in automation, healthcare systems, crisis response, and machine learning.",
  keywords: [
    "AI Engineer",
    "System Designer",
    "Portfolio",
    "MD. ABDUR RAHMAN",
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
  authors: [{ name: "MD. ABDUR RAHMAN" }],
  creator: "MD. ABDUR RAHMAN",
  openGraph: {
    title: "MD. ABDUR RAHMAN | AI System Designer & Engineer",
    description:
      "AI System Designer from Bangladesh, specializing in intelligent assistant architectures, voice AI systems, database design, and futuristic UI/UX.",
    url: "https://abdurrahman.dev",
    siteName: "MD. ABDUR RAHMAN",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. ABDUR RAHMAN | AI System Designer",
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
