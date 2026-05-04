"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  delay: number;
  width?: number;
  height?: number;
  topPadding?: number;
  gap?: number;
  imageScale?: number;
};

const ServiceCard = memo(function ServiceCard({ image, title, description, delay, width, height, topPadding = 32, gap = 51, imageScale = 1 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative rounded-[16px] overflow-hidden flex flex-col items-start w-full md:w-[379px] text-left transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(29,233,182,0.15)] mb-8 break-inside-avoid mx-auto"
      style={{
        backgroundColor: "rgba(10, 14, 23, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: `${topPadding}px 32px 32px 32px`,
        minHeight: height ? `${height}px` : "auto",
      }}
    >
      {/* ── Gradient Border via Pseudo-element ── */}
      <div
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(135deg, rgba(29, 233, 182, 0.5) 0%, rgba(124, 77, 255, 0.5) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* ── Image Wrapper ── */}
      <div className="w-full flex items-center justify-center relative z-10" style={{ marginBottom: `${gap}px` }}>
        <Image
          src={image}
          alt={title}
          width={width || 313}
          height={height || 130}
          unoptimized={true}
          className="object-contain object-center w-full h-auto"
        />
      </div>

      {/* ── Text Content ── */}
      <div className="relative z-10 flex flex-col w-full" style={{ gap: "6px" }}>
        <h3
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "1.2em",
            color: "#FFFFFF",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "1.5em",
            color: "#FFFFFF",
            opacity: 0.8,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
});

const ALL_SERVICES = [
  {
    title: "Web Scraping",
    description: "Collect accurate and structured data from websites quickly and efficiently.",
    image: "/webscraping.png",
    width: 313,
    height: 366,
    topPadding: 41,
    gap: 51,
  },
  {
    title: "AI Integration",
    description:
      "Leverage data analytics and AI models to uncover insights, automate decision-making, and optimize business processes.",
    image: "/ai_integration.png",
    width: 313,
    height: 402,
    topPadding: 47,
    gap: 38,
  },
  {
    title: "Data Mining",
    description: "Extract valuable insights from large datasets to support smarter business decisions.",
    image: "/data_mining.png",
    width: 312,
    height: 469,
    topPadding: 15,
    gap: 14,
  },
  {
    title: "Web Automation",
    description: "Automate repetitive web tasks and workflows to save time and increase productivity.",
    image: "/web_automation.png",
    width: 314,
    height: 300,
    topPadding: 32,
    gap: 26,
  },
  {
    title: "Video Editing",
    description: "Create and enhance video content with professional editing tailored to your business needs.",
    image: "/video_editing.png",
    width: 313,
    height: 366,
    topPadding: 32,
    gap: 35,
  },
  {
    title: "E-commerce Data Collection",
    description: "Gather product, pricing, and competitor data to stay competitive in your market.",
    image: "/e_commerce_data_collection.png",
    width: 319,
    height: 400,
    topPadding: 19,
    gap: 35,
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-12 md:pt-24 pb-8 md:pb-12 px-6 relative overflow-hidden" style={{ backgroundColor: "#0E121D", scrollMarginTop: "60px" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10 flex flex-col">
        {/* ── Section Headings (Centered) ── */}
        <div className="flex flex-col items-center text-center w-full mb-10 md:mb-[80px]" style={{ gap: "10px" }}>
          {/* Title: What We Offer */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[36px] font-semibold font-inter mb-4"
          >
            <span
              style={{
                background: 'linear-gradient(141deg, #E5FAFA 0%, #1DE9B6 50%, #7C4DFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              What We Offer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#FFFFFF] font-inter font-light text-[14px] md:text-[16px]"
          >
            From data to automation and content, we build solutions that power your business forward.
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {ALL_SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
