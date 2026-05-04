"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingAIButton from "../../components/FloatingAIButton";
import { ALL_PROJECTS, Project } from "../../data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Description");
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const gallery = project.gallery || [project.image];
  const currentImage = gallery[selectedIndex];
  const tabs = ["Description", "Client Review", "FAQ"];
  return (
    <div className="min-h-screen bg-[#0E121D] text-white">
      <Navbar />

      <main className="pt-[100px] md:pt-[160px] pb-12 px-6 max-w-[1240px] mx-auto w-full">
        {/* ── Breadcrumbs ── */}
        <nav className="flex flex-wrap items-center gap-2 md:gap-3 text-[12px] md:text-[14px] tracking-wide text-[#9CA3AF] mb-6 md:mb-10 font-inter">
          <Link href="/" className="hover:text-white transition-colors whitespace-nowrap font-medium">Our Work</Link>
          <span className="opacity-40">&gt;</span>
          <Link href="/projects" className="hover:text-white transition-colors whitespace-nowrap font-medium">All Projects</Link>
          <span className="opacity-40">&gt;</span>
          <span className="text-white whitespace-nowrap font-semibold">View Project</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-8 lg:mb-12 items-start">
          {/* ── Left: Fluid Cinematic Image Gallery ── */}
          <div className="flex flex-col gap-2 w-full shrink-0">
            {/* Main Featured Image Container */}
            <div
              className="relative w-full aspect-[390/226.38] md:aspect-video overflow-hidden flex items-center justify-center mb-2"
              style={{
                background: "#171B25",
                border: "1px solid #3D3D3D",
                padding: "clamp(12px, 3.5vw, 48px) clamp(20px, 14vw, 48px)"
              }}
            >
              <div className="relative w-full h-full rounded-[4px] sm:rounded-[12px] overflow-hidden" style={{ boxShadow: "0px -16px 22.1px 0px rgba(0, 0, 0, 0.26)" }}>
                <Image
                  src={currentImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 522px"
                />
              </div>
            </div>

            {/* 6-Column Grid (Forced even on mobile) */}
            {gallery.length > 0 && (
              <div className="w-full grid grid-cols-6 gap-2 md:gap-3">
                {gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className="relative cursor-pointer transition-all duration-300 aspect-square w-full flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{
                      background: "#0E121D",
                      border: selectedIndex === i ? "1px solid #FFFFFF" : "1px solid #3D3D3D",
                      borderRadius: "4px",
                      opacity: selectedIndex === i ? 1 : 0.6
                    }}
                  >
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" sizes="(max-width: 768px) 16vw, 78px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Project Info ── */}
          <div className="flex flex-col w-full">
            <h1
              className="font-inter font-semibold text-[20px] sm:text-[32px] text-[#E5FAFA] mb-2 sm:mb-3 leading-[1.2em]"
            >
              {project.title}
            </h1>

            <p
              className="text-white text-[12px] sm:text-[16px] leading-[1.6em] font-light mb-5 sm:mb-6 font-inter"
            >
              {project.description}
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 mb-0 sm:mb-6">
              {[
                { label: "Category:", value: project.category },
                { label: "Client Type:", value: project.clientType || "Enterprise" },
                { label: "Duration:", value: project.duration || "4-6 weeks" }
              ].map((item) => (
                <div key={item.label} className="flex flex-row items-center gap-4 pb-3 sm:pb-0">
                  <span className="text-[#E5FAFA] font-semibold text-[12px] sm:text-[16px] w-[90px] sm:w-32 shrink-0">{item.label}</span>
                  <span className="text-[#FFFFFF] text-[12px] sm:text-[16px] font-light">{item.value}</span>
                </div>
              ))}

              <div className="flex flex-col mt-2">
                <span className="text-[#E5FAFA] font-semibold text-[12px] sm:text-[16px] mb-2">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {(project.techStack || project.tags).map((tech) => (
                    <div
                      key={tech}
                      className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[13px] font-semibold whitespace-nowrap"
                      style={{
                        background: "linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
                        border: "1px solid transparent",
                        color: "#1DE9B6"
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs Section ── */}
        <div className="mb-6">
          <div className="flex gap-12 pb-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[12px] md:text-[16px] font-semibold transition-all relative pb-2 ${activeTab === tab ? "text-white" : "text-white hover:text-white"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-[12px] md:text-[16px] leading-[1.7em] font-normal font-inter max-w-[900px] tracking-wide"
              >
                {activeTab === "Description" && (
                  <div className="whitespace-pre-line opacity-90">
                    {project.fullDescription || project.description}
                  </div>
                )}

                {activeTab === "Client Review" && (
                  <div className="italic text-[12px] sm:text-[16px] text-[#E5FAFA] opacity-90">
                    "{project.clientReview || "Excellent work, highly professional team. Delivered exactly what we needed on time."}"
                  </div>
                )}

                {activeTab === "FAQ" && (
                  <div className="flex flex-col gap-8 opacity-90">
                    {(project.faq || [
                      { q: "What was the biggest challenge?", a: "Integrating private APIs while maintaining strict security protocols." },
                      { q: "How scalable is the solution?", a: "Designed to handle up to 10x current data volume with minimal latency." }
                    ]).map((item, i) => (
                      <div key={i}>
                        <h4 className="text-white font-semibold mb-2">Q: {item.q}</h4>
                        <p>A: {item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Contact Section (Matched to Image) ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start gap-12 md:gap-[100px] pt-12 md:pt-24 mb-0">
          <div className="max-w-[480px] md:max-w-none text-center md:text-left mx-auto md:mx-0">
            <h2
              className="text-[24px] md:text-[32px] font-semibold leading-[1.2em] mb-4 md:mb-5 md:whitespace-nowrap"
              style={{
                fontFamily: "Inter",
                background: "linear-gradient(135deg, #1DE9B6 0%, #00B0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Have a similar project in mind?
            </h2>
            <p className="text-white text-[12px] md:text-[16px] font-light font-inter">
              Tell us about your project or ask any questions, and our team will respond promptly to guide you.
            </p>
          </div>

          <div
            className="w-full max-w-[389px] md:max-w-[625px] md:min-h-[268px] p-6 md:p-7 rounded-[12px] mx-auto md:mx-0"
            style={{
              background: "linear-gradient(#0D121D, #0D121D) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
              border: "1px solid transparent"
            }}
          >
            <form className="flex flex-col gap-3 md:gap-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] md:text-[13px] font-medium text-white/70">Name</label>
                  <input type="text" className="bg-[#1A1F2B] border border-white/5 rounded-[6px] w-full md:w-[277px] h-[44px] md:h-[54px] px-3 md:px-4 text-white focus:border-[#1DE9B6] transition-colors outline-none text-[14px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] md:text-[13px] font-medium text-white/70">Email</label>
                  <input type="email" className="bg-[#1A1F2B] border border-white/5 rounded-[6px] w-full md:w-[277px] h-[44px] md:h-[54px] px-3 md:px-4 text-white focus:border-[#1DE9B6] transition-colors outline-none text-[14px]" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] md:text-[13px] font-medium text-white/70">Message</label>
                <textarea className="bg-[#1A1F2B] border border-white/5 rounded-[6px] w-full md:w-[570px] h-[90px] md:h-[92px] p-3 md:p-4 text-white focus:border-[#1DE9B6] transition-colors outline-none resize-none text-[14px]" />
              </div>
              <div className="flex justify-end mt-1">
                <button
                  className="bg-gradient-to-r from-[#1DE9B6] to-[#00B0FF] text-[#0E121D] font-bold w-full md:w-[129px] h-[36.37px] rounded-[6px] transition-transform hover:scale-105 active:scale-95 text-[12px] md:text-[13px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingAIButton />
    </div >
  );
}
