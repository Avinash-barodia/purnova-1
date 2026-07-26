"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

// --- TYPES ---
type Step = "intro";
type AppearanceType = 1 | 2 | 3;

// --- HOOK FOR SMART LOGIC ---
function useIntelligentDisplay() {
  const [isOpen, setIsOpen] = useState(false);
  const [appearanceType, setAppearanceType] = useState<AppearanceType>(1);
  // FIX #2: Start as null (unknown) instead of false, so we never apply
  // the wrong animation variant before the viewport size is resolved.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if (isMobile === null) return;
    if (pathname.includes("/case-studies/")) return;
    if (isOpen) return; // Prevent setting new timers if already open

    const navTimer = setTimeout(() => {
      if (sessionStorage.getItem(`purnova_popup_v3_${pathname}`)) return;

      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") return;

      sessionStorage.setItem(`purnova_popup_v3_${pathname}`, "true");

      const countStr = sessionStorage.getItem("purnova_popup_count");
      const currentCount = countStr ? parseInt(countStr) : 0;
      const newCount = currentCount + 1;
      sessionStorage.setItem("purnova_popup_count", newCount.toString());

      const type = ((newCount - 1) % 3 + 1) as AppearanceType;
      
      // Batch state updates properly outside of an updater function
      setAppearanceType(type);
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(navTimer);
  }, [pathname, isClient, isMobile, isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return { isOpen, isMobile, appearanceType, closePopup, isClient };
}

// --- COMPONENTS ---

// FIX #4: Removed all dead step branches (q1, q2, q3, analyzing, result, cta)
// that were left over from the stripped multi-step quiz.
const AnimatedOrb = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-30 z-0">
      <motion.div
        className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-[#C9A84C]/30 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20%] rounded-full border border-[#C9A84C]/10 border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-40%] rounded-full border border-[#C9A84C]/5"
        />
      </motion.div>
    </div>
  );
};

// --- VARIANTS (Moved outside component for stable references) ---
const desktopVariants: any = {
  hidden: { scale: 0.95, opacity: 0, borderRadius: "32px", y: 20 },
  app1: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  app2: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  app3: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const mobileVariants: any = {
  hidden: { y: "100%", opacity: 1 },
  visible: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: "100%", transition: { duration: 0.5, ease: "easeIn" } },
};

export function LeadCapturePopup() {
  const router = useRouter();
  const { isOpen, isMobile, appearanceType, closePopup, isClient } = useIntelligentDisplay();
  const [step, setStep] = useState<Step>("intro");

  useEffect(() => {
    if (isOpen) {
      setStep("intro");
    }
  }, [isOpen]);

  // FIX #2: Also guard until isMobile is resolved
  if (!isClient || isMobile === null) return null;

  const handleStart = () => {
    closePopup();
    router.push("/contact");
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
        // FIX #1: The outer container is now a <motion.div> with its own
        // initial/animate/exit so AnimatePresence can properly orchestrate
        // the exit sequence for ALL children, preventing the GPU blur from
        // getting stuck on screen after the popup is dismissed.
        <motion.div
          key="popup-wrapper"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.6 } }}
          className={`fixed inset-0 z-[100] flex ${
            isMobile ? "items-end" : "items-center justify-center"
          } overflow-hidden`}
        >
          {/* Backdrop
              FIX #3: backdrop-filter blur is now a Tailwind CSS class (backdrop-blur-md)
              instead of an inline Framer Motion animated value. CSS classes get proper
              vendor prefixes (-webkit-backdrop-filter) applied by the browser, fixing
              the issue on Safari/iOS where the blur would never clear. We only animate
              opacity, which is universally supported. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
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
            onDragEnd={(e, info) => {
              if (isMobile && info.offset.y > 100) closePopup();
            }}
            className={`relative flex flex-col overflow-hidden bg-[#090909] border border-[#C9A84C]/25 shadow-[0_20px_80px_rgba(0,0,0,0.8),_0_0_40px_rgba(212,175,55,0.05)] ${
              isMobile
                ? "w-full h-[85vh] rounded-t-[28px]"
                : "w-[800px] max-w-[90vw] min-h-[500px] rounded-[32px]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatedOrb />

            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, boxShadow: "0 0 15px rgba(212,175,55,0.5)" }}
              transition={{ duration: 0.3 }}
              onClick={closePopup}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] transition-colors hover:bg-[#C9A84C]/10 bg-black/20 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </motion.button>

            {/* Content Area */}
            <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step === "intro" && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <span className="inline-block font-sans text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase border border-[#C9A84C]/30 px-4 py-2 rounded-full bg-[#C9A84C]/5 mb-6">
                      Private Growth Diagnosis
                    </span>
                    <h2 className="font-serif text-[40px] md:text-[56px] text-white leading-[1.1] mb-4">
                      Let's Find What's Holding Your Brand Back.
                    </h2>
                    <p className="font-sans text-[14px] md:text-[16px] text-white/50 mb-10 max-w-md mx-auto">
                      Answer 3 quick questions and we'll identify the area creating the biggest growth bottleneck in your business.
                    </p>
                    <button
                      onClick={handleStart}
                      className="group relative inline-block bg-[#C9A84C] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-4 px-10 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Start Diagnosis <span>→</span>
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
