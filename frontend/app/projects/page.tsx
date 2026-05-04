"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingAIButton from "../components/FloatingAIButton";
import { ALL_PROJECTS, CATEGORIES, TAG_COLORS, Project } from "../data/projects";

const PortfolioCard = ({ title, description, tags, image, slug }: Project) => (
  <Link href={`/projects/${slug}`}>
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="flex flex-col h-full rounded-[12px] border border-[#2b3547] hover:border-[#1DE9B6]/30 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(124,77,255,0.15)]"
      style={{
        backgroundColor: "rgba(19, 24, 35, 0.7)",
        backdropFilter: "blur(8px)",
        padding: "18px"
      }}
    >
      <div className="w-full h-[220px] relative shrink-0 rounded-[8px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
            color: "#FFFFFF",
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
);

const ProjectSkeleton = () => (
  <div className="flex flex-col rounded-[12px] border border-[#2b3547]/50 bg-[#131823] p-[18px] h-full overflow-hidden relative">
    {/* Shimmer Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
    </div>

    <div className="w-full h-[220px] bg-[#1a2130] rounded-[8px]" />
    <div className="pt-6 pb-2 flex flex-col flex-grow relative z-10">
      <div className="w-3/4 h-6 bg-[#1a2130] rounded mb-3" />
      <div className="w-full h-4 bg-[#1a2130] rounded mb-2" />
      <div className="w-5/6 h-4 bg-[#1a2130] rounded mb-6" />
      <div className="flex gap-3 mt-auto">
        <div className="w-16 h-6 bg-[#1a2130] rounded-full" />
        <div className="w-20 h-6 bg-[#1a2130] rounded-full" />
      </div>
    </div>
  </div>
);

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProjects = activeCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  const categoriesWithAll = ["All", ...CATEGORIES];

  return (
    <div className="min-h-screen bg-[#0E121D] text-white overflow-x-hidden">
      <Navbar />

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      <main className="pt-[160px] pb-24 px-6 max-w-[1440px] mx-auto w-full flex flex-col items-center">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-semibold mb-3 max-w-[1216px] text-[24px] md:text-[36px]"
            style={{
              fontFamily: "Inter",
              lineHeight: "1.21em",
              background: "linear-gradient(141deg, #E5FAFA 0%, #1DE9B6 50%, #7C4DFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white font-inter font-light text-[14px] md:text-[16px]"
          >
            Explore our work across data, automation, and content solutions.
          </motion.p>
        </motion.div>

        {/* ── Filter Bar ── */}
        <div
          className="w-full max-w-[1240px] flex flex-row items-center justify-center gap-[1px] min-[390px]:gap-[2px] sm:gap-4 py-1.5 sm:py-5 px-0.5 sm:px-10 rounded-[12px] mb-8 sm:mb-16 mx-auto"
          style={{ backgroundColor: "#070A11", border: "1px solid rgba(255, 255, 255, 0.04)" }}
        >
          {categoriesWithAll.map((cat) => {
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
                      background: "linear-gradient(#070A11, #070A11) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
                    }
                    : {
                      color: "#FFFFFF",
                      border: "1px solid transparent",
                      background: "transparent",
                    }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid / Skeleton ── */}
        <div className="max-w-[1240px] w-full min-h-[600px] relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ProjectSkeleton key={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
              >
                {filteredProjects.map((project) => (
                  <PortfolioCard key={project.title} {...project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
      <FloatingAIButton />
    </div>
  );
}
