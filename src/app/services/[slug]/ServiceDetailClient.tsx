"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { useRef, useState, useEffect } from "react";

export function ServiceDetailClient({ service }: { service: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  // Fallback for mobile devices without a mouse
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      <NavBar />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.05),_transparent_50%)] pointer-events-none" />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 md:px-[80px] max-w-[1440px] mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
        >
          <span className="material-symbols-outlined text-[#D4AF37] text-4xl md:text-5xl">
            {service.icon}
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[48px] md:text-[80px] lg:text-[100px] font-bold leading-[1.05] tracking-tighter mb-8 max-w-5xl"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-[18px] md:text-[24px] text-[#D4AF37] italic tracking-wide max-w-2xl"
        >
          "{service.manifesto}"
        </motion.p>
      </section>

      {/* 2. The Flashlight Vault */}
      <section className="py-12 md:py-20 px-4 md:px-[80px] max-w-[1440px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="font-sans text-[12px] md:text-[14px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-12 text-center animate-pulse flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">flashlight_on</span>
            Explore the dark to reveal our architecture
          </span>

          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
            className="relative w-full rounded-[40px] overflow-hidden bg-black border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)_inset]"
          >
             {/* Dim Layer (The Shadows) */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16 p-8 md:p-20 opacity-[0.03] transition-opacity duration-500">
               {service.features.map((feature: any, index: number) => (
                 <FeatureCard key={`dim-${index}`} feature={feature} index={index} />
               ))}
             </div>

             {/* Bright Layer (The Flashlight) */}
             <div 
               className="absolute inset-0 pointer-events-none grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16 p-8 md:p-20 bg-black"
               style={{
                 WebkitMaskImage: isMobile ? 'none' : `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
                 maskImage: isMobile ? 'none' : `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
                 opacity: isMobile ? 1 : (isHovering ? 1 : 0),
                 transition: "opacity 0.5s ease"
               }}
             >
               {service.features.map((feature: any, index: number) => (
                 <FeatureCard key={`bright-${index}`} feature={feature} index={index} isBright />
               ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Final CTA */}
      <section className="py-24 md:py-40 px-6 md:px-[80px] max-w-[1440px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="text-[#D4AF37] text-[24px] opacity-80 animate-pulse mb-8">★</div>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] text-white font-bold leading-[1.1] tracking-tighter mb-12">
            Ready To Build Your <br className="hidden md:block" /> Growth System?
          </h2>
          <Link href="/contact">
            <button className="bg-[#D4AF37] text-black font-sans text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] px-12 py-5 rounded-[16px] hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              BOOK A CALL
            </button>
          </Link>
        </motion.div>
      </section>
      
    </main>
  );
}

function FeatureCard({ feature, index, isBright = false }: { feature: any, index: number, isBright?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 ${isBright ? 'opacity-100' : 'opacity-100'}`}>
      <div className="flex items-start gap-6">
        <span 
          className="font-serif text-[48px] md:text-[64px] font-bold text-transparent leading-none" 
          style={{ WebkitTextStroke: isBright ? "1px rgba(212,175,55,0.8)" : "1px rgba(255,255,255,0.5)" }}
        >
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        <div className="flex flex-col gap-2 pt-2">
          <h3 className={`font-serif text-[28px] md:text-[32px] font-semibold leading-tight ${isBright ? 'text-[#D4AF37]' : 'text-white'}`}>
            {feature.title}
          </h3>
          <p className={`font-sans text-[16px] md:text-[18px] italic ${isBright ? 'text-white/90' : 'text-white'}`}>
            "{feature.manifesto}"
          </p>
        </div>
      </div>
      <p className={`font-sans text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] mt-2 ${isBright ? 'text-white/70' : 'text-white'}`}>
        {feature.description}
      </p>
    </div>
  )
}
