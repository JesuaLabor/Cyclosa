"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Samuel Priyak",
    role: "Operations Manager, Streamline Logistic",
    image: "https://i.pravatar.cc/150?u=samuel",
    content: "The automation system they built saved us hours of manual work every week. Highly reliable and easy to work with",
  },
  {
    name: "Daniel Cruz",
    role: "Founder, Vinex Trading Co.",
    image: "https://i.pravatar.cc/150?u=daniel",
    content:
      "Cyclosa delivered exactly what we needed. Their web scraping solution helped us gather accurate data quickly and improve our pricing strategy.",
  },
  {
    name: "James Walker",
    role: "CEO, DataBridge Solutions",
    image: "https://i.pravatar.cc/150?u=james",
    content:
      "We worked with Cyclosa through Upwork, and the experience was excellent. Fast delivery, clear communication, and high-quality results.",
  },
  {
    name: "Alice Zhang",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/150?u=alice",
    content:
      "The accuracy of their web scraping is unmatched. Clean, structured data every time. This has drastically improved our model training.",
  },
  {
    name: "David Miller",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?u=david",
    content: "Scalability was our main concern, and Cyclosa handled it with ease. Highly recommend their automation expertise for fast-growing businesses.",
  },
];

const TestimonialCard = memo(function TestimonialCard({ name, role, content, image, isActive }: Testimonial & { isActive: boolean }) {
  return (
    <motion.div
      className="flex flex-col relative shrink-0"
      animate={{
        width: isActive ? 377 : 353,
        height: isActive ? 227.77 : 192.24,
        borderRadius: isActive ? 6 : 6,
        padding: isActive ? 28 : 20,
        opacity: 1,
      }}
      style={{
        maxWidth: "calc(100vw - 48px)",
        border: "1px solid transparent",
        background: isActive
          ? "linear-gradient(180deg, rgba(5, 7, 18, 1) 0%, rgba(5, 12, 22, 1) 45%, rgba(4, 28, 26, 1) 100%) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box"
          : "linear-gradient(180deg, rgba(5, 7, 18, 1) 0%, rgba(5, 12, 22, 1) 45%, rgba(4, 28, 26, 1) 100%) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
      }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="overflow-hidden shrink-0 relative"
          style={{
            width: isActive ? 63.87 : 56.78,
            height: isActive ? 63.87 : 56.78,
            borderRadius: 74,
            transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
          }}
        >
          <Image src={image} alt={name} fill className="object-cover" sizes="64px" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium font-inter text-[#E5FAFA] text-[15px] mb-0.5">{name}</h4>
          <p className="text-[#A0AAB2] font-inter text-[12px] font-light">{role}</p>
        </div>
      </div>

      <p
        className="text-[#FFFFFF] font-inter font-light leading-[1.6em] overflow-hidden"
        style={{
          fontSize: isActive ? "13px" : "12px",
          display: "-webkit-box",
          WebkitLineClamp: isActive ? 4 : 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {content}
      </p>
    </motion.div>
  )
});

export default function Testimonials() {
  // Desktop state (3 slicing)
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Mobile state (1 at a time)
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(1);

  // Desktop handlers
  const handlePrev = () => {
    if (startIndex === 0) return;
    setDirection(-1);
    setStartIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (startIndex >= TESTIMONIALS.length - 3) return;
    setDirection(1);
    setStartIndex((prev) => prev + 1);
  };
  const visibleTestimonials = TESTIMONIALS.slice(startIndex, startIndex + 3);
  const activeDotIndex = startIndex + 1;

  // Mobile handlers
  const mobilePrev = () => {
    if (mobileIndex === 0) return;
    setMobileDirection(-1);
    setMobileIndex((prev) => prev - 1);
  };
  const mobileNext = () => {
    if (mobileIndex >= TESTIMONIALS.length - 1) return;
    setMobileDirection(1);
    setMobileIndex((prev) => prev + 1);
  };
  const mobileActiveT = TESTIMONIALS[mobileIndex];

  return (
    <section
      id="testimonials"
      className="py-12 md:py-24 px-4 md:px-6 relative flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#0E121D", scrollMarginTop: "60px" }}
    >
      {/* ── Background Glows ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-[40%] w-[400px] h-[400px] rounded-full bg-[#1DE9B6] opacity-[0.04] blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-y-[40%] w-[400px] h-[400px] rounded-full bg-[#7C4DFF] opacity-[0.04] blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1240px] w-full flex flex-col items-center relative z-10">
        {/* ── Headings ── */}
        <div className="text-center mb-10 md:mb-16 max-w-[800px] flex flex-col items-center">

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
              What our clients say
            </span>

          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white font-inter font-light text-[14px] md:text-[16px]"
          >
            Discover what our satisfied clients have to say about their experiences with our services.
          </motion.p>
        </div>

        {/* ── MOBILE VIEW ── */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <AnimatePresence mode="wait" custom={mobileDirection}>
              <motion.div
                key={mobileIndex}
                custom={mobileDirection}
                variants={{
                  enter: (d: number) => ({ x: d * 20, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -20, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full max-w-[400px]"
              >
                <div
                  className="w-full flex flex-col relative rounded-[8px]"
                  style={{
                    padding: "28px",
                    border: "1px solid transparent",
                    background: "linear-gradient(180deg, rgba(5, 7, 18, 1) 0%, rgba(5, 12, 22, 1) 45%, rgba(4, 28, 26, 1) 100%) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="shrink-0 relative w-[64px] h-[64px] rounded-full overflow-hidden">
                      <Image src={mobileActiveT.image} alt={mobileActiveT.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold font-inter text-[#FFFFFF] text-[16px] mb-1">
                        {mobileActiveT.name}
                      </h4>
                      <p className="text-white font-inter text-[13px] font-light">
                        {mobileActiveT.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white font-inter font-light text-[14px] leading-[1.6em]">
                    {mobileActiveT.content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={mobilePrev}
              disabled={mobileIndex === 0}
              className="text-[#1DE9B6] hover:brightness-125 transition-all disabled:opacity-20 cursor-pointer p-2"
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18L2 10L10 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full w-[8px] h-[8px] transition-all duration-300"
                  style={{
                    backgroundColor: i === mobileIndex ? "#1DE9B6" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={mobileNext}
              disabled={mobileIndex >= TESTIMONIALS.length - 1}
              className="text-[#1DE9B6] hover:brightness-125 transition-all disabled:opacity-20 cursor-pointer p-2"
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 18L10 10L2 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── DESKTOP VIEW ── */}
        <div className="hidden md:flex w-full flex-col items-center">
          <div className="w-full overflow-hidden flex justify-center mb-10 relative" style={{ minHeight: "320px" }}>
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 160, opacity: 0, scale: 0.95 }),
                  center: { x: 0, opacity: 1, scale: 1 },
                  exit: (d: number) => ({ x: d * -160, opacity: 0, scale: 0.95 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.5, ease: "linear" },
                  scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                }}
                className="flex gap-[24px] items-center"
              >
                {visibleTestimonials.map((t, index) => {
                  const isActive = index === 1;
                  return <TestimonialCard key={t.name} {...t} isActive={isActive} />;
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Controls */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="text-[#1DE9B6] hover:brightness-125 transition-all disabled:opacity-20 cursor-pointer p-2"
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18L2 10L10 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full w-[8px] h-[8px] transition-all duration-300"
                  style={{
                    backgroundColor: i === activeDotIndex ? "#1DE9B6" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex >= TESTIMONIALS.length - 3}
              className="text-[#1DE9B6] hover:brightness-125 transition-all disabled:opacity-20 cursor-pointer p-2"
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 18L10 10L2 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
