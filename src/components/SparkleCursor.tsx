"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
}

export function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkId = 0;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only spawn a sparkle if the mouse has moved a minimum distance
      // to avoid spawning too many while moving slowly or stationary
      if (distance > 10) {
        lastX = e.clientX;
        lastY = e.clientY;

        // Add some randomness so it doesn't look too uniform
        if (Math.random() > 0.3) {
          const newSparkle: Sparkle = {
            id: sparkId++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 8 + 4, // 4px to 12px
            angle: Math.random() * 360,
          };
          
          setSparkles((prev) => {
            // Keep maximum 30 sparkles at once to prevent performance issues
            const next = [...prev, newSparkle];
            if (next.length > 30) return next.slice(next.length - 30);
            return next;
          });
          
          // Remove sparkle after animation duration
          setTimeout(() => {
            setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
          }, 800);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Return early if no sparkles (optimization)
  if (sparkles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y, rotate: sparkle.angle }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              y: sparkle.y + (Math.random() * 30 + 10), // fall down slightly
              x: sparkle.x + (Math.random() * 20 - 10), // drift slightly left/right
              rotate: sparkle.angle + 90 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              // Centering offset
              marginLeft: -(sparkle.size / 2),
              marginTop: -(sparkle.size / 2)
            }}
          >
            {/* 4-point sparkle star SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#D4AF37]">
              <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
