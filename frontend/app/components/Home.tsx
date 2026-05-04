"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden min-h-[calc(100svh-60px)] md:min-h-[794px]">
      {/* Background Image */}
      <Image
        src="/home-bg.png"
        alt="Cyclosa Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }} />

      <div className="max-w-[1440px] w-full mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* ── Hero Heading ── */}
          <h1
            style={{
              fontFamily: 'Inter',
              lineHeight: '1.21em',
              color: '#FFFFFF',
              maxWidth: '1196px'
            }}
            className="font-semibold text-center mb-6 text-[32px] md:text-[50px]"
          >
            Web Scraping, Data Mining, and Automation <br className="hidden md:block" />
            Solutions for Smarter Business Decisions
          </h1>

          {/* ── Subtitle ── */}
          <p
            className="font-light text-center mb-[45px]"
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '1.21em',
              color: '#FFFFFF',
              maxWidth: '710px'
            }}
          >
            Cyclosa helps businesses collect, analyze, and automate data efficiently—turning
            complex information into actionable insights.
          </p>

          {/* ── CTAs Group ── */}
          <div className="flex flex-row items-center justify-center gap-4 md:gap-[35px]">
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(29, 233, 182, 0.45)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-[10px] text-[#0E121D] font-semibold transition-all w-[156px] h-[52px] md:w-[184px] md:h-[59px]"
              style={{
                background: 'linear-gradient(45deg, #1DE9B6 0%, #00B0FF 100%)',
                fontFamily: 'Inter',
                fontSize: '16px',
              }}
            >
              Contact Us
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#learn-more"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-[10px] font-medium transition-all relative group w-[156px] h-[52px] md:w-[184px] md:h-[59px]"
              style={{
                background: 'rgba(0, 0, 0, 0.48)',
                fontFamily: 'Inter',
                fontSize: '16px',
              }}
            >
              <div
                className="absolute inset-0 rounded-[10px]"
                style={{
                  padding: '1px',
                  background: "linear-gradient(45deg, #1DE9B6 0%, #00B0FF 100%)",
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
              <span
                style={{
                  background: 'linear-gradient(119deg, #1DE9B6 0%, #7C4DFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600
                }}
              >
                Learn More
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Fade-out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyber-obsidian to-transparent z-20 pointer-events-none" />
    </section>
  );
}
