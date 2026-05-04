"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type TabName =
  | "Web Scraping"
  | "Data Mining"
  | "Automation"
  | "AI Integration"
  | "Video Editing";

type ProjectEntry = { title: string; desc: string };

const tabs: TabName[] = [
  "Web Scraping",
  "Data Mining",
  "Automation",
  "AI Integration",
  "Video Editing",
];

const projects: Record<TabName, ProjectEntry[]> = {
  "Video Editing": [
    {
      title: "Podcast Episode Editing",
      desc: "Edited full-length podcast episodes with clean cuts, audio balancing, and subtitles for better clarity.",
    },
    {
      title: "Short-Form Content Production",
      desc: "Created engaging short videos optimized for TikTok, Reels, and YouTube Shorts.",
    },
    {
      title: "YouTube Video Optimization",
      desc: "Edited long-form YouTube videos with improved pacing, transitions, and visual enhancements.",
    },
    {
      title: "Podcast Highlight Clips Generator",
      desc: "Extracted key moments from podcast episodes and converted them into shareable short clips.",
    },
  ],
  "Web Scraping": [
    {
      title: "Global Market Monitor",
      desc: "Real-time pricing data collection for 500+ global retailers.",
    },
  ],
  "Data Mining": [
    {
      title: "Predictive Sales Engine",
      desc: "Mining historical data to forecast multi-year sales trends.",
    },
  ],
  Automation: [
    {
      title: "Legacy Workflow Migrator",
      desc: "Automating 50+ manual legacy processes into a cloud workspace.",
    },
  ],
  "AI Integration": [
    {
      title: "Neural Chat Systems",
      desc: "Custom RAG-based AI agents for customer service automation.",
    },
  ],
};

export default function ProjectDirectory() {
  const [activeTab, setActiveTab] = useState<TabName>("Video Editing");

  return (
    <section className="py-24 px-6 bg-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 p-3 rounded-2xl glass border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab
                  ? "gradient-cyan text-white shadow-lg shadow-vibrant-cyan/20 scale-105"
                  : "text-white/40 hover:text-white/70 glass-light"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project List */}
        <motion.div layout className="space-y-4 mb-12">
          <AnimatePresence mode="wait">
            {projects[activeTab]?.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl glass-light border border-white/5 hover:border-vibrant-cyan/30 transition-all hover:bg-vibrant-cyan/5"
              >
                <div className="space-y-2">
                  <h4 className="text-xl font-bold group-hover:text-vibrant-cyan transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/40 text-sm max-w-2xl">{project.desc}</p>
                </div>
                <button className="hidden md:flex items-center gap-2 mt-4 md:mt-0 px-6 py-3 rounded-xl glass border border-white/10 group-hover:gradient-cyan text-white/70 group-hover:text-white font-bold text-sm transition-all group-hover:shadow-lg group-hover:shadow-vibrant-cyan/20">
                  View Project{" "}
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl glass border border-vibrant-cyan/40 text-vibrant-cyan font-bold hover:gradient-cyan hover:text-white transition-all shadow-lg hover:shadow-vibrant-cyan/20"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
