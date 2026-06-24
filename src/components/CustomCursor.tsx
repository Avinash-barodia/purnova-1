"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on mobile or SSR
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[var(--color-primary)] transition-transform duration-100 ease-out hidden md:block"
        style={{
          width: '12px',
          height: '12px',
          left: position.x - 6,
          top: position.y - 6,
          transform: isHovering ? 'scale(0)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[var(--color-primary)] transition-all duration-300 ease-out hidden md:block"
        style={{
          width: '40px',
          height: '40px',
          left: position.x - 20,
          top: position.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          backgroundColor: isHovering ? 'rgba(242, 202, 80, 0.1)' : 'transparent',
          borderColor: isHovering ? 'var(--color-primary)' : 'rgba(242, 202, 80, 0.3)',
        }}
      />
    </>
  );
}
