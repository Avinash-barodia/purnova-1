"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
    >
      <Link href="/contact">
        <div className="relative group cursor-pointer">
          {/* Glowing Aura Effect */}
          <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl rounded-full group-hover:opacity-60 transition-opacity duration-500" />
          
          <button className="relative flex items-center gap-3 bg-[#0A0A0A] border border-[#D4AF37]/50 text-[#D4AF37] font-sans text-[12px] md:text-[14px] font-bold uppercase tracking-[0.15em] px-6 py-4 md:px-8 md:py-5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
            <span className="relative z-10 whitespace-nowrap">Book Consultant</span>
            <span className="material-symbols-outlined text-[18px] md:text-[20px] relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
            
            {/* Hover shine effect */}
            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
