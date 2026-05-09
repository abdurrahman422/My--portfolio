import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CoreExpertise from "@/components/CoreExpertise";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SystemArchitecture from "@/components/SystemArchitecture";
import UIShowcase from "@/components/UIShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Particles from "@/components/Particles";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Particles />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <CoreExpertise />
      <Skills />
      <Projects />
      <Experience />
      <SystemArchitecture />
      <UIShowcase />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
