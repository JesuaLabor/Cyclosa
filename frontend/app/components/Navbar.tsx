"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = { name: string; href: string; sectionId?: string };

const menuItems: MenuItem[] = [
  { name: "Home", href: "/", sectionId: "home" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Our Work", href: "/projects" },
  { name: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const onScroll = useCallback(() => setScrolled(window.scrollY > 10), []);
  const handleToggle = useCallback(() => setMobileMenuOpen((v) => !v), []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Section Observer for highlighting
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = menuItems
      .filter((item) => item.sectionId)
      .map((item) => item.sectionId as string);

    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -150px 0px",
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 h-[60px] md:h-auto transition-all duration-300 backdrop-blur-md"
        style={{ background: "#000000" }}
      >
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "100%",
            height: "25px",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-40 md:hidden"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: (scrolled || pathname !== "/")
              ? undefined
              : "linear-gradient(150deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-[120px] flex items-center justify-between md:h-[80px]">
          <div className="flex items-center gap-2 z-10">
            <Link href="/">
              <Image
                src="/cyclosa-logo.png"
                alt="Cyclosa"
                width={160}
                height={160}
                className="h-[36px] md:h-[54px] w-auto object-contain cursor-pointer"
                style={{ maxWidth: "126px" }}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-[99px] absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => {
              const isActive = item.sectionId
                ? (pathname === "/" && activeSection === item.sectionId)
                : (item.name === "Our Work" ? pathname.startsWith("/projects") : pathname === item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-normal transition-all duration-200 whitespace-nowrap px-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1DE9B6] hover:to-[#7C4DFF]"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "1.21em",
                    ...(isActive ? {
                      background: "linear-gradient(141deg, #E5FAFA 0%, #1DE9B6 50%, #7C4DFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 600
                    } : {
                      color: "#FFFFFF"
                    })
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 z-10">
            <Link href="/#contact">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(29,233,182,0.35)" }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:flex items-center justify-center rounded-[5px] text-[#0E121D] select-none cursor-pointer"
                style={{
                  background: "linear-gradient(45deg, #1DE9B6 0%, #00B0FF 100%)",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  width: "134px",
                  height: "43px",
                }}
              >
                Contact Us
              </motion.div>
            </Link>

            <button
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-[6px] p-2 z-50"
              onClick={handleToggle}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] bg-white rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-[2px] bg-white rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] bg-white rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0E121D] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {menuItems.map((item, i) => {
              const isActive = item.sectionId
                ? (pathname === "/" && activeSection === item.sectionId)
                : (item.name === "Our Work" ? pathname.startsWith("/projects") : pathname === item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-semibold transition-colors"
                  style={{
                    fontFamily: "Inter",
                    ...(isActive ? {
                      background: "linear-gradient(141deg, #E5FAFA 0%, #1DE9B6 50%, #7C4DFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    } : {
                      color: "#FFFFFF"
                    })
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}

            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.07, duration: 0.3 }}
                className="mt-4 flex items-center justify-center rounded-[5px] text-[#0E121D] font-semibold text-lg px-10 py-4"
                style={{ background: "linear-gradient(37deg, #1DE9B6 0%, #7C4DFF 100%)", fontFamily: "Inter" }}
              >
                Contact Us
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


