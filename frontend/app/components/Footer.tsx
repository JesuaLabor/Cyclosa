"use client";

import React from "react";
import Image from "next/image";

function LinkedinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white hover:text-[#1DE9B6] transition-colors"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white hover:text-[#1DE9B6] transition-colors"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white hover:text-[#1DE9B6] transition-colors"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <footer className="pt-4 md:pt-8 pb-10 md:pb-16 px-6 bg-[#0E121D] flex flex-col items-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* ── Top Area: Left Column & Right Content ── */}
        <div className="flex flex-col md:flex-row justify-between items-start pb-10">
          {/* Left Column cluster */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <div className="mb-5 relative w-[134px] h-[46px] self-start" style={{ marginLeft: '-4px' }}>
              <Image src="/cyclosa-logo.png" alt="Cyclosa logo" fill className="object-contain object-left" sizes="134px" />
            </div>
            <p className="text-[#FFFFFF] font-inter text-[14px] md:text-[16px] font-light mb-6 md:mb-8 text-left max-w-[280px] md:max-w-none">
              Helping businesses automate, analyze, and grow
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-4 md:gap-x-10 md:gap-y-4 mb-8 md:mb-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#FFFFFF] font-inter text-[16px] font-medium hover:text-[#1DE9B6] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Social Icons */}
          <div className="flex items-center gap-6 text-[#FFFFFF] mt-2 md:mt-2">
            <a href="#" className="hover:text-[#1DE9B6] transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" className="hover:text-[#1DE9B6] transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-[#1DE9B6] transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* ── Bottom Bar: Copyright & Legal ── */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#FFFFFF] font-inter text-[13px] md:text-[15px] font-light text-center md:text-left">© {currentYear} Cyclosa. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[#FFFFFF] font-inter text-[13px] md:text-[15px] font-light">
            <a href="#" className="hover:text-[#1DE9B6] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[16px] opacity-40">·</span>
            <a href="#" className="hover:text-[#1DE9B6] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
