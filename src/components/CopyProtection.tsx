"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CopyProtection() {
  const [showToast, setShowToast] = useState(false);
  const [toastPos, setToastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      
      // Override clipboard content
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "Legends Don't copy.");
      }

      let x = window.innerWidth / 2;
      let y = window.innerHeight - 100;

      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect.width > 0 || rect.height > 0) {
          x = rect.left + rect.width / 2;
          y = rect.top - 10;
        }
      }

      setToastPos({ x, y });
      setShowToast(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowToast(false), 3000);
    };

    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCopy);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-full drop-shadow-2xl"
          style={{ left: toastPos.x, top: toastPos.y }}
        >
          <div className="bg-[#0B0B0B] border border-[#D4AF37]/50 shadow-[0_10px_40px_rgba(212,175,55,0.2)] px-8 py-4 rounded-full flex items-center gap-4 backdrop-blur-md">
            <span className="material-symbols-outlined text-[#D4AF37]">content_copy</span>
            <span className="font-serif text-[#D4AF37] text-[18px] tracking-widest uppercase font-bold">
              Legends Don't copy
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
