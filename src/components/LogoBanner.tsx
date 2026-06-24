"use client";

import { motion } from "framer-motion";

export function LogoBanner() {
  const logos = [
    "PUNE VOICES", 
    "BUSHARE", 
    "UPSCALE", 
    "DR AUTO", 
    "COSMIC GANGES", 
    "IMPORT EXPORT FEDERATION", 
    "VAICHAL GROUP", 
    "SADGEE MASALE"
  ];

  return (
    <section className="py-16 luxury-border border-x-0 bg-[var(--color-surface-container-lowest)] overflow-hidden">
      <div className="text-center mb-10">
        <span className="font-sans text-[12px] font-bold text-[var(--color-on-surface-variant)] uppercase tracking-[0.15em]">Trusted by ambitious brands</span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex items-center gap-20 whitespace-nowrap min-w-max pr-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="text-[32px] font-serif font-bold text-white/50 hover:text-[#D4AF37] transition-colors duration-500 italic uppercase tracking-tighter shrink-0"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
