"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-[360px] h-[520px] bg-[#0E121D] border border-white/10 rounded-[16px] shadow-2xl z-[9999] flex flex-col overflow-hidden"
          >
            {/* ── Header ── */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#131823]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1DE9B6] to-[#7C4DFF] p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-[#0E121D] flex items-center justify-center">
                    <Image src="/logo-v1.png" alt="Bot" width={16} height={16} className="w-[60%] h-[60%] object-contain" />
                  </div>
                </div>
                <span className="font-semibold text-white tracking-wide">CycloBot</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* ── Chat Messages ── */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#131823] border border-white/10 p-1 flex-shrink-0">
                  <Image src="/logo-v1.png" alt="Bot" width={16} height={16} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 max-w-[80%]">
                  <div className="bg-[#1D2433] p-3 rounded-[12px] text-[14px] leading-relaxed text-white/90">
                    Hey there! 👋<br />I'm CycloBot, and I'll be assisting you today.
                  </div>
                  <div className="bg-[#1D2433] p-3 rounded-[12px] text-[14px] leading-relaxed text-white/90">
                    How can I help?
                  </div>
                </div>
              </div>

              {/* ── Quick Actions ── */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Ask about services", "Start a project", "Request a quote"].map((tag) => (
                  <button 
                    key={tag}
                    className="px-4 py-2 rounded-full border border-[#1DE9B6]/40 text-[#1DE9B6] text-[13px] font-medium hover:bg-[#1DE9B6]/10 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Footer / Input ── */}
            <div className="p-4 border-t border-white/5 bg-[#0E121D]">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type message here" 
                  className="w-full bg-[#131823] border border-white/10 rounded-[10px] h-12 pl-4 pr-12 text-[14px] text-white outline-none focus:border-[#1DE9B6]/60 transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#1DE9B6] hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-[9999]"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_24px_rgba(29,233,182,0.3)] transition-all duration-300 overflow-hidden"
          style={{
            background: "linear-gradient(#0E121D, #0E121D) padding-box, linear-gradient(135deg, #1DE9B6 0%, #7C4DFF 100%) border-box",
            border: "2px solid transparent",
          }}
        >
          <Image
            src="/logo-v1.png"
            alt="Cyclosa"
            width={128}
            height={128}
            className="w-[55%] h-[55%] object-contain"
          />
        </div>
      </motion.div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}
