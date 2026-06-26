"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  const trailRef = useRef<Point[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);
  const lastMoveTimeRef = useRef<number>(0);

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (lastX === -100) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Interpolate positions every 3px
      if (distance > 3) { 
        const steps = Math.max(Math.floor(distance / 3), 1);
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          trailRef.current.push({
            x: lastX + dx * t,
            y: lastY + dy * t,
          });
        }
        
        // Cap buffer at 120 max points
        if (trailRef.current.length > 120) {
          trailRef.current = trailRef.current.slice(trailRef.current.length - 120);
        }

        lastX = e.clientX;
        lastY = e.clientY;
        lastMoveTimeRef.current = Date.now();
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".card-hover") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;

    const render = () => {
      const trail = trailRef.current;

      // Trimming logic: tail disappears from tail end first
      if (trail.length > 0) {
        trail.shift(); // Remove 1 oldest point even while moving
        
        // If not moving recently, aggressively remove 2 more (total 3)
        if (Date.now() - lastMoveTimeRef.current > 50) {
           if (trail.length > 0) trail.shift();
           if (trail.length > 0) trail.shift();
        }
      }

      // Render the SVG Path
      if (trail.length < 2) {
        if (pathRef.current) pathRef.current.setAttribute("d", "");
      } else {
        const n = trail.length;
        const lefts = [];
        const rights = [];

        // Build left and right offsets for the tapered polygon
        for (let i = 0; i < n; i++) {
          const p = trail[i];
          let nx = 0, ny = 0;

          if (i === 0) {
            const p2 = trail[1];
            const dx = p2.x - p.x, dy = p2.y - p.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          } else if (i === n - 1) {
            const p0 = trail[i - 1];
            const dx = p.x - p0.x, dy = p.y - p0.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          } else {
            const p0 = trail[i - 1];
            const p2 = trail[i + 1];
            const dx = p2.x - p0.x, dy = p2.y - p0.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          }
          
          // Smooth tapering from 0 at i=0 (tail tip) to 4 at i=n-1 (head)
          const radius = 4 * (i / (n - 1)); 
          
          lefts.push({ x: p.x + nx * radius, y: p.y + ny * radius });
          rights.push({ x: p.x - nx * radius, y: p.y - ny * radius });
        }

        // Draw the precise polygon path
        let d = `M ${lefts[n - 1].x.toFixed(2)},${lefts[n - 1].y.toFixed(2)} `;
        for (let i = n - 2; i >= 0; i--) {
          d += `L ${lefts[i].x.toFixed(2)},${lefts[i].y.toFixed(2)} `;
        }
        for (let i = 1; i < n; i++) {
          d += `L ${rights[i].x.toFixed(2)},${rights[i].y.toFixed(2)} `;
        }
        d += "Z";

        if (pathRef.current) pathRef.current.setAttribute("d", d);

        // Map the gradient strictly from head to tail
        if (gradRef.current) {
          gradRef.current.setAttribute("x1", String(trail[n - 1].x));
          gradRef.current.setAttribute("y1", String(trail[n - 1].y));
          gradRef.current.setAttribute("x2", String(trail[0].x));
          gradRef.current.setAttribute("y2", String(trail[0].y));
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Flawless SVG Tapered Trail rendering */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="comet-grad" ref={gradRef} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="1.0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path 
          ref={pathRef} 
          fill="url(#comet-grad)" 
          style={{ filter: "drop-shadow(0px 0px 8px rgba(212,175,55,0.6))" }} 
        />
      </svg>

      {/* Main Cursor (Solid Golden Star) */}
      <motion.div
        className="absolute flex items-center justify-center"
        animate={{
          x: position.x - 12, 
          y: position.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.3 }}
        style={{
          width: 24,
          height: 24,
        }}
      >
        {isHovering && (
          <motion.div
            className="absolute inset-0 rounded-full border border-white/50"
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37" style={{ filter: 'drop-shadow(0px 0px 8px rgba(212,175,55,0.8))' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
    </div>
  );
}
