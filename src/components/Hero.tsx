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
    <section className="relative flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 lg:px-[80px] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgb(242, 202, 80) 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center z-10"
      >
        <motion.span variants={item} className="font-sans text-[12px] font-bold text-[var(--color-primary)] tracking-[0.3em] block mb-6 uppercase">A DIFFERENT APPROACH TO DIGITAL MARKETING</motion.span>
        <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-8 leading-[1.15] font-bold tracking-[-0.02em] flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative inline-block pb-2"
          >
            We Don't Just <br className="hidden md:block" /> Promote Brands.
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
              className="absolute bottom-0 left-0 h-[4px] bg-[var(--color-primary)]"
            />
          </motion.div>

          <div className="mt-4 md:mt-6 text-[var(--color-primary)] italic flex flex-col items-center">
             <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
                >
                  We Establish Their
                </motion.div>
             </div>
             <div className="overflow-hidden mt-1 md:mt-2">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 1.8
                  }}
                >
                  Brand Presence.
                </motion.div>
             </div>
          </div>
        </h1>
        <motion.div variants={item} className="mb-12 max-w-2xl mx-auto flex flex-col gap-3">
          <span className="font-sans font-bold text-[var(--color-primary)] tracking-[0.2em] text-[13px] md:text-[15px] uppercase">
            FOR THOSE WHO EXPECT MORE FROM MARKETING.
          </span>
          <p className="font-sans text-[16px] md:text-[20px] text-[var(--color-on-surface-variant)] leading-[26px] md:leading-[32px]">
            Combining strategy, creativity, and performance to create brands with lasting presence.
          </p>
        </motion.div>
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/case-studies" className="inline-block w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-on-primary-fixed)] font-sans text-[12px] py-5 px-12 font-bold uppercase tracking-[0.15em] hover:bg-[var(--color-primary-fixed-dim)] transition-all duration-300 text-center">
            SEE OUR WORK
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
