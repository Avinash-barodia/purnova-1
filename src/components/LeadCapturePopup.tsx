"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const cards = [
  { title: "Brand Clarity", desc: "Know exactly where your brand should go next." },
  { title: "Growth Opportunities", desc: "Identify hidden growth channels." },
  { title: "Action Plan", desc: "Walk away with practical next steps." }
];

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<"idle" | "point" | "ring" | "modal">("idle");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Prevent triggering if already shown in this session
    if (sessionStorage.getItem("purnova_popup_shown")) return;

    let triggered = false;

    const triggerPopup = () => {
      if (triggered || isOpen) return;
      triggered = true;
      sessionStorage.setItem("purnova_popup_shown", "true");
      setIsOpen(true);
      
      // Cinematic sequence: point -> ring -> modal
      setPhase("point");
      // Let the point render, then expand to ring
      setTimeout(() => setPhase("ring"), 100);
      // Ring animation takes 0.9s, so wait 900ms before expanding to modal
      setTimeout(() => setPhase("modal"), 1000);
    };

    // Trigger 1: 15 seconds timer
    const timer = setTimeout(triggerPopup, 15000);

    // Trigger 2: 50% scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.5) {
        triggerPopup();
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger 3: Exit intent
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 10) {
        triggerPopup();
      }
    };
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isOpen]);

  const closePopup = () => {
    // Reverse sequence
    setPhase("ring");
    // Wait 0.9s for modal -> ring to finish
    setTimeout(() => setPhase("point"), 900);
    // Wait another 0.9s for ring -> point to finish
    setTimeout(() => {
      setPhase("idle");
      setIsOpen(false);
    }, 1800);
  };

  const modalVariants = {
    idle: { opacity: 0, scale: 0, width: 4, height: 4, borderRadius: "50%", backgroundColor: "#D4AF37", borderWidth: 0, borderColor: "rgba(212,175,55,0)" },
    point: { opacity: 1, scale: 1, width: 4, height: 4, borderRadius: "50%", backgroundColor: "#D4AF37", borderWidth: 0, borderColor: "rgba(212,175,55,0)" },
    ring: { opacity: 1, scale: 1, width: 120, height: 120, borderRadius: "50%", backgroundColor: "transparent", borderWidth: 2, borderColor: "#D4AF37" },
    modalDesktop: { opacity: 1, scale: 1, width: 800, height: "auto", borderRadius: "32px", backgroundColor: "#0D0D0D", borderWidth: 1, borderColor: "rgba(212,175,55,0.25)" },
    modalMobile: { opacity: 1, scale: 1, width: "100%", height: "90vh", borderRadius: "28px 28px 0 0", backgroundColor: "#0D0D0D", borderWidth: 1, borderColor: "rgba(212,175,55,0.25)" }
  };

  const getModalState = () => {
    if (phase === "idle") return "idle";
    if (phase === "point") return "point";
    if (phase === "ring") return "ring";
    return isMobile ? "modalMobile" : "modalDesktop";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-[100] flex ${isMobile ? 'items-end' : 'items-center'} justify-center overflow-hidden`}>
          {/* Cinematic Backdrop */}
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black/75"
            onClick={closePopup}
          />
          
          {/* Main Modal Orchestrator */}
          <motion.div
            variants={modalVariants}
            initial="idle"
            animate={getModalState()}
            exit="idle"
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col shadow-[0_0_80px_rgba(212,175,55,0.05)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {phase === "modal" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full h-full flex flex-col p-6 md:p-12 relative"
              >
                <Constellation />

                {/* Top Section */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2 rounded-full bg-[#D4AF37]/5">
                    Private Strategy Session
                  </span>
                  <motion.button 
                    whileHover={{ rotate: 90, boxShadow: "0 0 15px rgba(212,175,55,0.5)" }}
                    transition={{ duration: 0.3 }}
                    onClick={closePopup}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </motion.button>
                </div>

                <h2 className="font-serif text-[32px] md:text-[48px] text-white leading-[1.1] mb-3 relative z-10">
                  Let's Build Something <br className="hidden md:block"/>Unforgettable.
                </h2>
                <p className="font-sans text-[14px] md:text-[16px] text-white/50 mb-10 relative z-10">
                  Tell us where you are. We'll show you where you could be.
                </p>

                {/* Value Propositions */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 relative z-10">
                  {cards.map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                      className="flex-1 bg-[#121212] border border-white/5 rounded-[16px] p-6 hover:border-[#D4AF37]/30 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mb-4 shadow-[0_0_10px_#D4AF37]"></div>
                      <h3 className="font-sans text-[14px] font-bold text-white mb-2">{card.title}</h3>
                      <p className="font-sans text-[12px] text-white/40 leading-relaxed">{card.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Form Section */}
                <div className="flex flex-col gap-6 relative z-10 mt-auto md:mt-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <input type="text" placeholder="Name" className="flex-1 bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                    <input type="email" placeholder="Email" className="flex-1 bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                    <input type="text" placeholder="Business / Brand" className="flex-1 bg-transparent border-b border-white/10 px-0 py-2 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                  </div>
                  
                  <button className="group relative w-full mt-4 bg-[#D4AF37] text-black font-sans text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] py-5 md:py-6 rounded-[12px] overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-shadow">
                    <span className="relative z-10">Book My Strategy Session</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Trust Signal */}
                <p className="font-sans text-[10px] text-white/30 text-center mt-6 uppercase tracking-widest relative z-10">
                  No sales pressure. No generic advice. Just honest strategic direction.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------
// CONSTELLATION MICRO-INTERACTION (Forms the 'P' Logo)
// ---------------------------------------------------------
function Constellation() {
  const [formed, setFormed] = useState(false);

  useEffect(() => {
    // Forms the Purnova logo shape after 5 seconds of dwelling
    const timer = setTimeout(() => setFormed(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Predefined coordinates for the random scattered state vs the organized 'P' shape state
  const nodes = [
    { start: {x: 10, y: 20}, end: {x: 30, y: 20} }, // P top left
    { start: {x: 80, y: 15}, end: {x: 30, y: 50} }, // P mid left
    { start: {x: 15, y: 80}, end: {x: 30, y: 80} }, // P bot left
    { start: {x: 50, y: 90}, end: {x: 60, y: 20} }, // P top right
    { start: {x: 90, y: 40}, end: {x: 70, y: 35} }, // P curve outer
    { start: {x: 60, y: 60}, end: {x: 60, y: 50} }, // P curve inner/bot right
  ];

  const pairs = [
    [0, 1], [1, 2], // Left vertical line
    [0, 3], [3, 4], [4, 5], [5, 1] // Right curve loop
  ];

  return (
    <div className="absolute top-10 right-10 w-[150px] h-[150px] md:w-[250px] md:h-[250px] opacity-[0.15] pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        {pairs.map(([a, b], i) => (
          <motion.line 
            key={i}
            initial={{ x1: `${nodes[a].start.x}%`, y1: `${nodes[a].start.y}%`, x2: `${nodes[b].start.x}%`, y2: `${nodes[b].start.y}%` }}
            animate={{ 
              x1: `${formed ? nodes[a].end.x : nodes[a].start.x}%`, 
              y1: `${formed ? nodes[a].end.y : nodes[a].start.y}%`, 
              x2: `${formed ? nodes[b].end.x : nodes[b].start.x}%`, 
              y2: `${formed ? nodes[b].end.y : nodes[b].start.y}%` 
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          initial={{ left: `${node.start.x}%`, top: `${node.start.y}%` }}
          animate={{ left: `${formed ? node.end.x : node.start.x}%`, top: `${formed ? node.end.y : node.start.y}%` }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] -translate-x-1/2 -translate-y-1/2"
        />
      ))}
    </div>
  );
}
