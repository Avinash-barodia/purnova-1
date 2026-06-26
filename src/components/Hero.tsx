"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative flex items-center justify-center pt-32 pb-24 md:pt-50 md:pb-32 px-6 md:px-[80px] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgb(242, 202, 80) 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center z-10"
      >
        <motion.span variants={item} className="font-sans text-[12px] font-bold text-[var(--color-primary)] tracking-[0.3em] block mb-6 uppercase">The Pinnacle of Digital Presence</motion.span>
        <motion.h1 variants={item} className="font-serif text-[38px] sm:text-[48px] md:text-[72px] mb-8 leading-tight font-bold tracking-[-0.02em]">We Don't Run Campaigns. <br />
          <span className="text-[var(--color-primary)] italic">We Build <span className="border-b-2 border-[var(--color-primary)]">Empires.</span></span>
        </motion.h1>
        <motion.p variants={item} className="font-sans text-[16px] md:text-[20px] text-[var(--color-on-surface-variant)] mb-12 max-w-2xl mx-auto leading-[26px] md:leading-[32px]">
          Premium digital marketing for brands that refuse to be ordinary. We specialize in aggressive growth strategies for luxury and enterprise markets.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/case-studies" className="inline-block w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-on-primary-fixed)] font-sans text-[12px] py-5 px-12 font-bold uppercase tracking-[0.15em] hover:bg-[var(--color-primary-fixed-dim)] transition-all duration-300 text-center">
            SEE OUR WORK
          </Link>
          <Link href="/contact" className="inline-block w-full sm:w-auto bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-sans text-[12px] py-5 px-12 font-bold uppercase tracking-[0.15em] hover:bg-[var(--color-primary)]/10 transition-all duration-300 text-center">
            BOOK STRATEGY CALL
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
