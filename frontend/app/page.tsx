"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Lazy-load below-the-fold sections to reduce initial bundle size
const Services = dynamic(() => import("./components/Services"));
const SocialProof = dynamic(() => import("./components/SocialProof"));
const Portfolio = dynamic(() => import("./components/Portfolio"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const FloatingAIButton = dynamic(() => import("./components/FloatingAIButton"));

export default function Page() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);


  return (
    <div className="min-h-screen bg-cyber-obsidian text-white relative flex flex-col">
      {/* Dynamic Background Glow - Hidden on touch devices */}
      <div ref={glowRef} className="glow-cursor hidden lg:block" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-cyan z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="pt-[60px] md:pt-[80px]">
        <Home />
        <Services />
        <SocialProof />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingAIButton />
    </div>
  );
}
