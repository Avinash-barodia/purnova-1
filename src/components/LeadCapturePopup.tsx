"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// --- TYPES ---
type Step = "intro" | "q1" | "q2" | "q3" | "analyzing" | "result" | "cta";
type AppearanceType = 1 | 2 | 3;

// --- CONSTANTS ---
const MAX_DESKTOP = 3;
const MAX_MOBILE = 2;
const COOLDOWN_MS = 60000;
const WAIT_TIME_MS = 30000; // Wait 30 seconds

// --- HOOK FOR SMART LOGIC ---
function useIntelligentDisplay() {
  const [isOpen, setIsOpen] = useState(false);
  const [appearanceType, setAppearanceType] = useState<AppearanceType>(1);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrolling = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    // If we're on a case study page, never trigger
    if (pathname.includes('/case-studies/')) return;

    const checkAndTrigger = () => {
      if (isOpen) return;

      // Limits
      const countStr = sessionStorage.getItem("purnova_popup_count");
      const count = countStr ? parseInt(countStr) : 0;
      const limit = isMobile ? MAX_MOBILE : MAX_DESKTOP;
      if (count >= limit) return;

      // Cooldown
      const lastClosedStr = sessionStorage.getItem("purnova_popup_last_closed");
      if (lastClosedStr) {
        const lastClosed = parseInt(lastClosedStr);
        if (Date.now() - lastClosed < COOLDOWN_MS) return;
      }

      // Blockers
      if (isScrolling.current) return;
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") return;

      // Trigger
      const newCount = count + 1;
      sessionStorage.setItem("purnova_popup_count", newCount.toString());

      const type = ((newCount - 1) % 3 + 1) as AppearanceType;
      setAppearanceType(type);
      setIsOpen(true);
    };

    // Trigger 1: 30s timer
    const timer = setTimeout(checkAndTrigger, WAIT_TIME_MS);

    // Trigger 2: 50% scroll
    const handleScroll = () => {
      isScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        const scrolled = window.scrollY;
        const total = document.body.scrollHeight - window.innerHeight;
        if (total > 0 && scrolled / total > 0.5) {
          checkAndTrigger();
        }
      }, 500);
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger 3: Exit intent
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 10) {
        checkAndTrigger();
      }
    };
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname, isOpen, isMobile, isClient]);

  const closePopup = () => {
    sessionStorage.setItem("purnova_popup_last_closed", Date.now().toString());
    setIsOpen(false);
  };

  return { isOpen, isMobile, appearanceType, closePopup, isClient };
}

// --- COMPONENTS ---

const AnimatedOrb = ({ step }: { step: Step }) => {
  let scale = 1;
  let glow = "0px";
  let pulseDuration = 4;
  let particleSpeed = 10;

  if (step === "q1") { scale = 1.1; glow = "20px"; }
  if (step === "q2") { scale = 1.2; glow = "30px"; particleSpeed = 6; }
  if (step === "q3") { scale = 1.3; glow = "40px"; particleSpeed = 4; }
  if (step === "analyzing") { scale = 1.5; glow = "60px"; pulseDuration = 0.5; particleSpeed = 1; }
  if (step === "result" || step === "cta") { scale = 0.8; glow = "10px"; pulseDuration = 6; }

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-30 z-0">
      <motion.div
        animate={{ scale, boxShadow: `0 0 ${glow} #D4AF37` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: pulseDuration, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-[#D4AF37]/30 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: particleSpeed * 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20%] rounded-full border border-[#D4AF37]/10 border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: particleSpeed * 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-40%] rounded-full border border-[#D4AF37]/5"
        />
      </motion.div>
    </div>
  );
};

export function LeadCapturePopup() {
  const { isOpen, isMobile, appearanceType, closePopup, isClient } = useIntelligentDisplay();
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });

  // Reset step when opened
  useEffect(() => {
    if (isOpen) {
      setStep("intro");
      setAnswers({ q1: "", q2: "", q3: "" });
    }
  }, [isOpen]);

  if (!isClient) return null;

  // Compute Result
  const getResult = () => {
    const map: Record<string, string> = {
      "Getting More Leads": "Lead Generation Opportunity",
      "Building Brand Awareness": "Authority Building Priority",
      "Growing Social Media": "Social Growth Opportunity",
      "Website Conversion": "Conversion Funnel Optimization",
      "Content Creation": "Content System Needed",
      "Scaling Revenue": "Brand Positioning Gap"
    };
    return map[answers.q2] || "Brand Positioning Gap";
  };

  const handleNext = (q: keyof typeof answers, val: string, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [q]: val }));
    if (nextStep === "analyzing") {
      setStep("analyzing");
      setTimeout(() => setStep("result"), 2500); // 2.5s analyzing
    } else {
      setStep(nextStep);
    }
  };

  // Variants for desktop
  const desktopVariants: any = {
    hidden: { scale: 0, opacity: 0, borderRadius: "50%", y: 0 },
    app1: {
      scale: [0, 1.1, 1],
      opacity: [0, 1, 1],
      borderRadius: ["50%", "50%", "32px"],
      transition: { duration: 1.2, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }
    },
    app2: {
      scale: [0.9, 1],
      opacity: [0, 1],
      borderRadius: "32px",
      transition: { duration: 1, ease: "easeOut" }
    },
    app3: {
      scaleY: [0, 0.05, 1],
      scaleX: [0, 1, 1],
      opacity: [0, 1, 1],
      borderRadius: "32px",
      transition: { duration: 1.2, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      scale: [1, 0.05, 0],
      opacity: [1, 1, 0],
      borderRadius: ["32px", "50%", "50%"],
      y: [0, 0, -100],
      transition: { duration: 0.8, times: [0, 0.6, 1], ease: "easeInOut" }
    }
  };

  // Variants for mobile bottom sheet
  const mobileVariants: any = {
    hidden: { y: "100%", opacity: 1 },
    visible: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: "100%", transition: { duration: 0.5, ease: "easeIn" } }
  };

  const getAnimateVariant = () => {
    if (isMobile) return "visible";
    if (appearanceType === 1) return "app1";
    if (appearanceType === 2) return "app2";
    return "app3";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-[100] flex ${isMobile ? 'items-end' : 'items-center justify-center'} overflow-hidden`}>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-black/60"
            onClick={closePopup}
          />

          {/* Modal Container */}
          <motion.div
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="hidden"
            animate={getAnimateVariant()}
            exit="exit"
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => { if (isMobile && info.offset.y > 100) closePopup(); }}
            className={`relative flex flex-col overflow-hidden bg-[#090909] border border-[#D4AF37]/25 shadow-[0_20px_80px_rgba(0,0,0,0.8),_0_0_40px_rgba(212,175,55,0.05)] ${isMobile
                ? 'w-full h-[85vh] rounded-t-[28px]'
                : 'w-[800px] max-w-[90vw] min-h-[500px] rounded-[32px]'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatedOrb step={step} />

            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, boxShadow: "0 0 15px rgba(212,175,55,0.5)" }}
              transition={{ duration: 0.3 }}
              onClick={closePopup}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 bg-black/20 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </motion.button>

            {/* Content Area */}
            <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">

                {/* --- INTRO --- */}
                {step === "intro" && (
                  <motion.div key="intro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="text-center">
                    <span className="inline-block font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2 rounded-full bg-[#D4AF37]/5 mb-6">
                      Private Growth Diagnosis
                    </span>
                    <h2 className="font-serif text-[40px] md:text-[56px] text-white leading-[1.1] mb-4">
                      Let's Find What's Holding Your Brand Back.
                    </h2>
                    <p className="font-sans text-[14px] md:text-[16px] text-white/50 mb-10 max-w-md mx-auto">
                      Answer 3 quick questions and we'll identify the area creating the biggest growth bottleneck in your business.
                    </p>
                    <button onClick={() => setStep("q1")} className="group relative inline-block bg-[#D4AF37] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-4 px-10 rounded-full overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1">
                      <span className="relative z-10 flex items-center gap-2">Start Diagnosis <span>→</span></span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
                  </motion.div>
                )}

                {/* --- Q1 --- */}
                {step === "q1" && (
                  <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-2xl mx-auto">
                    <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-8 text-center">What best describes your business?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Founder", "Startup", "Personal Brand", "E-Commerce Brand", "Local Business", "Agency"].map((opt) => (
                        <button key={opt} onClick={() => handleNext("q1", opt, "q2")} className="bg-[#121212] border border-white/10 hover:border-[#D4AF37] text-white/80 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] rounded-2xl p-5 text-left font-sans text-[14px] transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group">
                          {opt}
                          <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#D4AF37] transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* --- Q2 --- */}
                {step === "q2" && (
                  <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-2xl mx-auto">
                    <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-8 text-center">What's your biggest challenge right now?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Getting More Leads", "Building Brand Awareness", "Growing Social Media", "Website Conversion", "Content Creation", "Scaling Revenue"].map((opt) => (
                        <button key={opt} onClick={() => handleNext("q2", opt, "q3")} className="bg-[#121212] border border-white/10 hover:border-[#D4AF37] text-white/80 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] rounded-2xl p-5 text-left font-sans text-[14px] transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group">
                          {opt}
                          <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#D4AF37] transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* --- Q3 --- */}
                {step === "q3" && (
                  <motion.div key="q3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} className="w-full max-w-2xl mx-auto">
                    <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-8 text-center">What's your current stage?</h2>
                    <div className="flex flex-col gap-3 max-w-md mx-auto">
                      {["Just Starting", "Growing", "Established", "Scaling", "Market Leader"].map((opt) => (
                        <button key={opt} onClick={() => handleNext("q3", opt, "analyzing")} className="bg-[#121212] border border-white/10 hover:border-[#D4AF37] text-white/80 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] rounded-2xl p-4 text-center font-sans text-[14px] transition-all duration-300 hover:-translate-y-1">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* --- ANALYZING --- */}
                {step === "analyzing" && (
                  <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="text-center flex flex-col items-center justify-center h-full">
                    <h2 className="font-serif text-[32px] md:text-[48px] text-[#D4AF37] leading-[1.1] animate-pulse">
                      Analyzing Growth Signals...
                    </h2>
                  </motion.div>
                )}

                {/* --- RESULT --- */}
                {step === "result" && (
                  <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="text-center">
                    <span className="inline-block font-sans text-[10px] tracking-[0.2em] text-white/50 uppercase mb-4">
                      Your Biggest Growth Opportunity
                    </span>
                    <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-[24px] p-8 md:p-12 mb-8 relative overflow-hidden inline-block w-full max-w-2xl">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
                      <h3 className="font-serif text-[32px] md:text-[48px] text-[#D4AF37] mb-4">
                        {getResult()}
                      </h3>
                      <p className="font-sans text-[14px] text-white/60 max-w-md mx-auto">
                        Based on your answers, this is the area most likely limiting growth right now.
                      </p>
                    </div>
                    <button onClick={() => setStep("cta")} className="group relative inline-block bg-transparent border border-[#D4AF37] text-[#D4AF37] font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-4 px-10 rounded-full overflow-hidden hover:bg-[#D4AF37] hover:text-black transition-all">
                      Continue to Strategy →
                    </button>
                  </motion.div>
                )}

                {/* --- CTA --- */}
                {step === "cta" && (
                  <motion.div key="cta" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-xl mx-auto text-center">
                    <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-8">
                      Want A Custom Strategy For Your Business?
                    </h2>

                    <div className="flex flex-col gap-4 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                        <input type="email" placeholder="Email" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                      </div>
                      <input type="text" placeholder="Business Name" className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20" />
                      <textarea placeholder="Optional Message" rows={2} className="bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-[14px] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20 resize-none"></textarea>

                      <button className="group relative w-full mt-2 bg-[#D4AF37] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-5 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all">
                        <span className="relative z-10 flex items-center justify-center gap-2">Get Our Strategy Session</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
                      {["No sales pressure", "No generic advice", "Actionable insights", "Personalized recommendations"].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/40 font-sans text-[12px]">
                          <span className="text-[#D4AF37] text-[10px]">✓</span> {badge}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
