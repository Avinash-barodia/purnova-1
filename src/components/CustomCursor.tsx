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
  
  // Array to hold the trail points for a smooth, continuous "snake" effect
  const trailLength = 25;
  const trailRef = useRef<Point[]>(Array(trailLength).fill({ x: -100, y: -100 }));
  
  const pathRef = useRef<SVGPathElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      // On initial move, snap all points to the cursor to prevent streaking from corner
      if (trailRef.current[0].x === -100) {
        trailRef.current = Array(trailLength).fill({ x: mouseX, y: mouseY });
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
      if (mouseX !== -100) {
        const trail = trailRef.current;
        
        // The head perfectly follows the mouse
        trail[0] = { x: mouseX, y: mouseY };

        // Each subsequent point uses a spring-like easing to follow the point ahead of it
        // This guarantees a perfectly smooth, continuous curve regardless of mouse speed
        for (let i = 1; i < trail.length; i++) {
          trail[i] = {
            x: trail[i].x + (trail[i - 1].x - trail[i].x) * 0.35,
            y: trail[i].y + (trail[i - 1].y - trail[i].y) * 0.35,
          };
        }

        const n = trail.length;
        const lefts = [];
        const rights = [];

        // Calculate normals to build a tapered polygon
        for (let i = 0; i < n; i++) {
          const p = trail[i];
          let nx = 0, ny = 0;

          if (i === 0) {
            const p2 = trail[1];
            const dx = p.x - p2.x, dy = p.y - p2.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          } else if (i === n - 1) {
            const p0 = trail[i - 1];
            const dx = p0.x - p.x, dy = p0.y - p.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          } else {
            const p0 = trail[i - 1];
            const p2 = trail[i + 1];
            const dx = p0.x - p2.x, dy = p0.y - p2.y;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            nx = -dy / len; ny = dx / len;
          }
          
          // Width of the tail smoothly tapers from head (4px) to tail (0px)
          const radius = 4 * (1 - i / (n - 1)); 
          
          lefts.push({ x: p.x + nx * radius, y: p.y + ny * radius });
          rights.push({ x: p.x - nx * radius, y: p.y - ny * radius });
        }

        // Connect the calculated points to draw the SVG shape
        let d = `M ${lefts[0].x.toFixed(2)},${lefts[0].y.toFixed(2)} `;
        for (let i = 1; i < n; i++) {
          d += `L ${lefts[i].x.toFixed(2)},${lefts[i].y.toFixed(2)} `;
        }
        for (let i = n - 1; i >= 0; i--) {
          d += `L ${rights[i].x.toFixed(2)},${rights[i].y.toFixed(2)} `;
        }
        d += "Z";

        if (pathRef.current) pathRef.current.setAttribute("d", d);

        // Adjust the gradient to strictly follow the head and tail
        if (gradRef.current) {
          gradRef.current.setAttribute("x1", String(trail[0].x));
          gradRef.current.setAttribute("y1", String(trail[0].y));
          gradRef.current.setAttribute("x2", String(trail[n - 1].x));
          gradRef.current.setAttribute("y2", String(trail[n - 1].y));
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
      {/* SVG Path for the seamless, continuous trail */}
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
