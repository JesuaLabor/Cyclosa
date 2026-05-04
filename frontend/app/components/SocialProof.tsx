"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialProof() {
  const stats = [
    { value: "10+", label: "Countries Served" },
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "25+", label: "Automation Tools Built" },
  ];

  const topLogos = [
    { src: "/logos/logo_ati.svg", width: 48, height: 48 },
    { src: "/logos/logo_quickbooks.svg", width: 48, height: 48 },
    { src: "/logos/logo_qnap.svg", width: 110.83, height: 110.83 },
    { src: "/logos/logo_lyft.svg", width: 48, height: 48 },
    { src: "/logos/logo_pimjo.svg", width: 133, height: 133 },
    { src: "/logos/logo_cisco.svg", width: 67, height: 67 },
  ];

  const bottomLogos = [
    { src: "/logos/logo_asana.svg", width: 105, height: 21 },
    { src: "/logos/logo_ioniq.svg", width: 50, height: 50 },
    { src: "/logos/logo_intuit.svg", width: 80, height: 80 },
    { src: "/logos/logo_auphonic.png", width: 57, height: 41 },
    { src: "/logos/logo_ladspa.svg", width: 92, height: 92 },
  ];

  return (
    <section className="pt-12 pb-6 md:pt-24 md:pb-12 flex flex-col items-center justify-center" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-[1440px] w-full mx-auto px-6 flex flex-col items-center">
        {/* ── Headings ── */}
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
          Cyclosa turns web data into smarter business decisions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-light mb-8 md:mb-[80px] text-[14px] md:text-[16px] text-white"
          style={{ fontFamily: "Inter", lineHeight: "1.21em" }}
        >
          Built for scalability and designed for results.
        </motion.p>

        {/* ── Awards / Trust Badges Row ── */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-1">
          {/* Card 1: Upwork */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[12px] flex-shrink-0"
            style={{
              width: "345px",
              height: "94px",
              backgroundColor: "#0E121D",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none"
              style={{
                padding: "1px",
                background: "linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src="/upwork.svg"
              alt="Upwork"
              width={91}
              height={28}
              className="absolute object-contain"
              style={{ left: "45px", top: "21px" }}
            />
            <span
              className="absolute outline-none"
              style={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "156px",
                top: "29px",
                letterSpacing: "-0.01em"
              }}
            >
              Global freelancing platform
            </span>
            <Image
              src="/crown.png"
              alt="100% Job Success icon"
              width={18}
              height={18}
              unoptimized={true}
              className="absolute object-contain"
              style={{ left: "45px", top: "56px", width: "18px", height: "18px" }}
            />
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "68px",
                top: "59.5px",
              }}
            >
              100% Job Success
            </span>
            <Image
              src="/star.png"
              alt="Top Rated icon"
              width={18}
              height={18}
              unoptimized={true}
              className="absolute object-contain"
              style={{ left: "190px", top: "56px", width: "18px", height: "18px" }}
            />
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "215px",
                top: "59.5px",
              }}
            >
              Top Rated
            </span>
          </motion.div>

          {/* Card 2: Hackathon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[12px] flex-shrink-0"
            style={{
              width: "345px",
              height: "94px",
              backgroundColor: "#0E121D",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none"
              style={{
                padding: "1px",
                background: "linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src="/devcon.png"
              alt="Hackathon"
              width={140}
              height={140}
              className="absolute object-contain"
              style={{ left: "32px", top: "12px", width: "70px", height: "70px" }}
            />
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "114px",
                top: "23px",
                width: "225px",
              }}
            >
              Devcon Bukidnon Hackathon 2024 Champion
            </span>
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 200,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "114px",
                top: "58px",
                width: "225px",
              }}
            >
              Devcon Hackathon 2024
            </span>
          </motion.div>

          {/* Card 3: TechVision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[12px] flex-shrink-0"
            style={{
              width: "345px",
              height: "94px",
              backgroundColor: "#0E121D",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none"
              style={{
                padding: "1px",
                background: "linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src="/techvision.png"
              alt="TechVision"
              width={112}
              height={124}
              className="absolute object-contain"
              style={{ left: "32px", top: "25px", width: "64px", height: "44px" }}
            />
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "114px",
                top: "23px",
                width: "225px",
              }}
            >
              Innovative Tech Startup of the Year - Philippines
            </span>
            <span
              className="absolute"
              style={{
                fontFamily: "Inter",
                fontWeight: 200,
                fontSize: "11px",
                lineHeight: "1.21em",
                color: "#FFFFFF",
                left: "114px",
                top: "58px",
                width: "225px",
              }}
            >
              TechVision Awards 2025
            </span>
          </motion.div>
        </div>

        {/* ── Client Logos Grid ── */}
        <div className="mt-4 w-full flex flex-col items-center justify-center px-6">
          <div className="max-w-[1122px] w-full flex flex-col items-center">
            {/* Top Row (6 Logos) */}
            <div className="flex flex-nowrap justify-between sm:justify-center items-center gap-x-3 sm:gap-x-8 md:gap-x-16 lg:gap-x-24 mb-0 w-full">
              {topLogos.map((logo, idx) => (
                <div key={`top-${idx}`} className="flex-shrink-1" style={{ maxWidth: `${logo.width}px` }}>
                  <Image
                    src={logo.src}
                    alt={`Client logo row 1 - ${idx}`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 w-[75%] sm:w-full h-auto mx-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Row (5 Logos) */}
            <div className="flex flex-nowrap justify-between sm:justify-center items-center gap-x-3 sm:gap-x-8 md:gap-x-16 lg:gap-x-24 -mt-6 sm:-mt-8 md:-mt-8 lg:-mt-10 w-full">
              {bottomLogos.map((logo, idx) => (
                <div key={`bottom-${idx}`} className="flex-shrink-1" style={{ maxWidth: `${logo.width}px` }}>
                  <Image
                    src={logo.src}
                    alt={`Client logo row 2 - ${idx}`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 w-[75%] sm:w-full h-auto mx-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="flex flex-row items-center justify-between md:justify-center gap-[10px] md:gap-[90px] pt-6 -mt-2 sm:-mt-6 md:pt-10 md:mt-0 pb-0 relative w-full">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex flex-col items-center justify-start text-center flex-1 md:flex-none"
              >
                <div
                  className="font-normal text-[#FFFFFF] text-[20px] sm:text-[32px] md:text-[48px]"
                  style={{ fontFamily: "Inter", lineHeight: "1.21em" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-light text-[#FFFFFF] mt-1 md:mt-2 tracking-wide text-[10px] sm:text-[12px] md:text-[16px] max-w-[80px] md:max-w-none mx-auto"
                  style={{ fontFamily: "Inter" }}
                >
                  {stat.label}
                </div>
              </motion.div>

              {/* Vertical Separator Line */}
              {idx < stats.length - 1 && (
                <div
                  className="block w-[1px] h-[32px] md:h-[64px] shrink-0"
                  style={{ background: "linear-gradient(180deg, #1DE9B6 0%, #7C4DFF 100%)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
