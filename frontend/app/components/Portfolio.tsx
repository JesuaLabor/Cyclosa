"use client";

import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ALL_PROJECTS, CATEGORIES, TAG_COLORS, Project } from "../data/projects";

const PortfolioCard = memo(function PortfolioCard({ title, description, tags, image, slug }: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.01 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col h-full rounded-[12px] border border-[#2b3547] hover:border-[#1DE9B6]/30 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(124,77,255,0.15)]"
        style={{
          backgroundColor: "rgba(19, 24, 35, 0.7)",
          backdropFilter: "blur(8px)",
          padding: "18px"
        }}
      >
        <div className="w-full h-[220px] relative shrink-0 rounded-[8px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>

        <div className="pt-6 pb-2 flex flex-col flex-grow">
          <h3
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "1.3em",
              color: "#E5FAFA",
            }}
            className="mb-3"
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: "1.6em",
              color: "#CFCFCF",
            }}
            className="mb-6 flex-grow"
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {tags &&
              tags.map((tag) => {
                const colorConfig = TAG_COLORS[tag] || { bg: "#4A28FF", text: "#FFFFFF" };
                return (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-inter tracking-wider uppercase font-medium"
                    style={{ background: colorConfig.bg, color: colorConfig.text }}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
        </div>
      </motion.div>
    </Link>
  )
});

// Only take the first 6 for the landing page featured grid — static, created once
const FEATURED_PROJECTS = ALL_PROJECTS.slice(0, 6);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Video Editing");

  // Only recomputes when activeCategory changes
  const filteredListProjects = useMemo(
    () => ALL_PROJECTS.filter((p: Project) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="portfolio" className="pt-2 md:pt-8 pb-12 px-6 relative w-full flex flex-col items-center bg-[#000000]">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center">
        {/* ── Project Cards Grid (Featured) ── */}
        {/* Desktop: 2-col / 3-col grid */}
        <motion.div layout className="hidden md:grid w-full md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-16">
          <AnimatePresence mode="popLayout">
            {FEATURED_PROJECTS.map((project: Project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile: horizontal swipe carousel */}
        <div className="md:hidden w-[calc(100%+24px)] -mr-6 mb-6">
          <div
            className="flex gap-[16px] overflow-x-auto snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {FEATURED_PROJECTS.map((project: Project) => (
              <div
                key={project.title}
                className="snap-start shrink-0"
                style={{ width: "78vw", maxWidth: "320px" }}
              >
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Category List Filter ── */}
        <div className="w-full flex flex-col items-center">
          <div
            className="w-full max-w-[1240px] flex flex-row items-center justify-center gap-[1px] min-[390px]:gap-[2px] sm:gap-4 py-1.5 sm:py-5 px-0.5 sm:px-10 rounded-[12px] mb-8 mx-auto"
            style={{
              backgroundColor: "#070A11",
              border: "1px solid rgba(255, 255, 255, 0.04)"
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-1 min-[390px]:px-1.5 h-[25px] sm:px-8 sm:h-auto sm:py-2.5 rounded-[4px] sm:rounded-[8px] transition-all duration-300 relative text-[8px] sm:text-[16px] font-inter font-light sm:font-semibold tracking-normal flex items-center justify-center focus:outline-none whitespace-nowrap"
                  style={
                    isActive
                      ? {
                        color: "#FFFFFF",
                        border: "1px solid transparent",
                        background: "linear-gradient(#070A11, #070A11) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box"
                      }
                      : {
                        color: "#CFCFCF",
                        border: "1px solid transparent",
                        background: "transparent"
                      }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ── Filtered Project List ── */}
          <div className="w-full flex flex-col gap-[6px]">
            <AnimatePresence mode="popLayout">
              {filteredListProjects.map((project: Project) => (
                <Link key={project.title} href={`/projects/${project.slug}`} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between py-5 px-6 md:px-8 rounded-[8px] group cursor-pointer transition-all hover:bg-[#1a2130]"
                    style={{ backgroundColor: "#131823" }}
                  >
                    <div className="flex flex-col">
                      <h4 className="text-[#E5FAFA] font-medium font-inter text-[16px] md:text-[18px] mb-1">
                        {project.title}
                      </h4>
                      <p className="text-[#9CA3AF] font-light font-inter text-[13px] md:text-[14px] leading-relaxed max-w-[800px]">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center shrink-0">
                      <span className="text-[#A0AAB2] font-inter font-medium text-[13px] group-hover:text-[#E5FAFA] transition-colors flex items-center tracking-wide">
                        View Project <span className="ml-[6px] text-[18px] font-light">&gt;</span>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── View All Projects Button ── */}
        <div className="mt-10">
          <Link href="/projects">
            <button
              className="px-8 py-3.5 rounded-[8px] transition-all duration-300 hover:brightness-125 focus:outline-none"
              style={{
                border: "1px solid transparent",
                background: "linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                View All Projects
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


