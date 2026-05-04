"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#1DE9B6] transition-colors">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#1DE9B6] transition-colors">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#1DE9B6] transition-colors">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 px-6 relative overflow-hidden bg-[#000000]">

      {/* ── Background Images ── */}
      <Image
        src="/contact-bg-left.png"
        alt=""
        fill
        sizes="35vw"
        loading="lazy"
        className="!left-0 !top-0 !h-full !w-[35%] object-cover object-left z-0 pointer-events-none opacity-80 mix-blend-screen"
        style={{ WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)', maskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}
      />
      <Image
        src="/contact-bg-right.png"
        alt=""
        fill
        sizes="35vw"
        loading="lazy"
        className="!left-auto !right-0 !top-0 !h-full !w-[35%] object-cover object-right z-0 pointer-events-none opacity-80 mix-blend-screen"
        style={{ WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)', maskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
      />

      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center relative z-10">

        {/* ── Headings ── */}
        <div className="text-center mb-16 max-w-[800px] flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[48px] font-semibold font-inter mb-4"
          >
            <span
              style={{
                background: 'linear-gradient(141deg, #E5FAFA 0%, #1DE9B6 50%, #7C4DFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Have a Project in Mind?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#FFFFFF] font-inter font-light text-[14px] md:text-[16px]"
          >
            Tell us what you need, and we'll build the right solution for your business.
          </motion.p>
        </div>

        {/* ── Form Container ── */}
        <div
          className="max-w-[750px] w-full rounded-[12px] p-5 sm:p-8 md:p-10 relative shadow-2xl z-20"
          style={{
            background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box',
            border: '1px solid transparent'
          }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-[#FFFFFF] tracking-wider uppercase ml-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#0E121D] rounded-[8px] px-5 py-4 text-white focus:outline-none font-inter font-light text-[14px] shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-[#FFFFFF] tracking-wider uppercase ml-1 block">Email</label>
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  className="w-full bg-[#0E121D] rounded-[8px] px-5 py-4 text-white focus:outline-none font-inter font-light text-[14px] shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-[#FFFFFF] tracking-wider uppercase ml-1 block">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-[#0E121D] rounded-[8px] px-5 py-4 text-white focus:outline-none font-inter font-light text-[14px] resize-none shadow-inner"
              ></textarea>
            </div>

            <div className="flex justify-end pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="px-8 py-3 rounded-[6px] font-inter font-medium text-[15px]"
                style={{ background: 'linear-gradient(to right, #1DE9B6, #7C4DFF)', color: '#000000' }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>

        {/* ── Socials ── */}
        <div className="mt-14 flex flex-col items-center gap-6 md:gap-8 relative z-20 pb-0">
          <p className="text-[#FFFFFF] font-inter text-[13px] font-light italic text-center">Or reach out to us directly:</p>
          <div className="flex flex-row items-center justify-center gap-5 sm:gap-8 text-white w-full">
            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-[#1DE9B6] transition-colors font-inter text-[13px] sm:text-[15px] font-medium sm:tracking-wide">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-[#1DE9B6] transition-colors font-inter text-[13px] sm:text-[15px] font-medium sm:tracking-wide">
              <InstagramIcon /> Instagram
            </a>
            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-[#1DE9B6] transition-colors font-inter text-[13px] sm:text-[15px] font-medium sm:tracking-wide">
              <FacebookIcon /> Facebook
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
