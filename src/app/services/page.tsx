"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";

// Shared Data
const services = [
  { id: 0, title: "Branding", desc: "Identity, positioning, and strategic direction.", scattered: { x: -30, y: -20 }, orbit: { angle: 0 }, grid: { col: 0, row: 0 } },
  { id: 1, title: "Digital Marketing", desc: "Performance-driven growth systems.", scattered: { x: 35, y: -25 }, orbit: { angle: 40 }, grid: { col: 1, row: 0 } },
  { id: 2, title: "Social Media Management", desc: "Community building and engagement.", scattered: { x: -40, y: 15 }, orbit: { angle: 80 }, grid: { col: 2, row: 0 } },
  { id: 3, title: "Video Production", desc: "High-end visual storytelling.", scattered: { x: 40, y: 5 }, orbit: { angle: 120 }, grid: { col: 0, row: 1 } },
  { id: 4, title: "SEO", desc: "Organic search dominance.", scattered: { x: -25, y: 35 }, orbit: { angle: 160 }, grid: { col: 1, row: 1 } },
  { id: 5, title: "Content Creation", desc: "Editorial and creative assets.", scattered: { x: 25, y: 35 }, orbit: { angle: 200 }, grid: { col: 2, row: 1 } },
  { id: 6, title: "Web Development", desc: "High-performance digital experiences.", scattered: { x: -15, y: -40 }, orbit: { angle: 240 }, grid: { col: 0, row: 2 } },
  { id: 7, title: "Technology", desc: "Scalable digital infrastructure.", scattered: { x: 15, y: 45 }, orbit: { angle: 280 }, grid: { col: 1, row: 2 } },
  { id: 8, title: "Consultation Services", desc: "Executive growth advisory.", scattered: { x: 0, y: -10 }, orbit: { angle: 320 }, grid: { col: 2, row: 2 } },
];

const pairs = [
  [0, 5], [0, 2], [0, 3], [7, 6], [7, 4], [7, 1], [1, 2], [3, 8], [4, 5], [6, 8]
];

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) return <div className="min-h-screen bg-[#0B0B0B]" />;

  return isMobile ? <MobileServices /> : <DesktopServices />;
}

// ---------------------------------------------------------
// MOBILE ECOSYSTEM (Touch-first Vertical Journey)
// ---------------------------------------------------------
function MobileServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroScale = useTransform(smoothProgress, [0, 0.05], [1, 0.5]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  // Diagram coordinates for final section
  const miniCoords = [
    { x: 80, y: 60 }, { x: 240, y: 40 }, { x: 60, y: 150 },
    { x: 260, y: 140 }, { x: 100, y: 250 }, { x: 220, y: 260 },
    { x: 140, y: 340 }, { x: 200, y: 200 }, { x: 160, y: 100 }
  ];

  return (
    <main className="bg-[#0B0B0B] text-white selection:bg-[#D4AF37] selection:text-black w-full overflow-hidden" ref={containerRef}>
      <NavBar />

      {/* 1. Mobile Hero */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-6">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="text-center flex flex-col items-center z-10">
          <h1 className="font-serif text-[48px] font-bold text-white mb-4 uppercase tracking-tighter">Services</h1>
          <p className="font-sans text-[16px] text-[#D4AF37] italic">We don't offer services.<br />We build growth ecosystems.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#D4AF37] rounded-full animate-ping"></div>
          <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-1 h-1 bg-[#D4AF37] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">System Start</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. Central Artery Journey */}
      <section className="relative w-full pb-20">
        {/* Glow Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/5 z-0">
          <motion.div
            className="w-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-transparent origin-top shadow-[0_0_15px_#D4AF37]"
            style={{ scaleY: smoothProgress, height: "100%" }}
          />
        </div>

        {/* Nodes 1-5 */}
        <div className="flex flex-col gap-32 pt-20">
          {services.slice(0, 5).map((service, idx) => (
            <MobileServiceNode key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* 3. Mid-Page Orbital Transition */}
        <div className="w-full h-[80vh] flex flex-col items-center justify-center relative my-40 z-10 bg-[#0B0B0B]/80 backdrop-blur-md border-y border-white/10 py-20 overflow-hidden">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="absolute w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37]" style={{ transform: `rotate(${i * 72}deg) translateY(-150px)` }}></div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-20%" }}
            className="z-10 bg-[#0B0B0B]/50 p-6 rounded-full backdrop-blur-sm"
          >
            <h2 className="font-serif text-[32px] text-center text-white drop-shadow-2xl">
              Everything Works <br /><span className="text-[#D4AF37] italic">Together.</span>
            </h2>
          </motion.div>
        </div>

        {/* Nodes 6-9 */}
        <div className="flex flex-col gap-32 pt-10">
          {services.slice(5, 9).map((service, idx) => (
            <MobileServiceNode key={service.id} service={service} index={idx + 5} />
          ))}
        </div>
      </section>

      {/* 4. Interactive Diagram Showcase */}
      <section className="w-full h-[70vh] relative bg-[#080808] border-y border-white/5 overflow-hidden flex flex-col items-center justify-center touch-pan-y z-20">
        <div className="absolute top-8 flex flex-col items-center z-20 pointer-events-none">
          <p className="font-sans text-[12px] tracking-[0.2em] text-[#D4AF37] uppercase mb-1">Explore Ecosystem</p>
          <p className="font-sans text-[10px] text-white/40 uppercase">(Drag to Pan)</p>
        </div>

        <motion.div
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          className="relative w-[320px] h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {pairs.map(([a, b], idx) => (
              <line
                key={idx}
                x1={miniCoords[a].x} y1={miniCoords[a].y}
                x2={miniCoords[b].x} y2={miniCoords[b].y}
                stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3"
              />
            ))}
          </svg>
          {services.map((s, i) => (
            <div key={s.id} className="absolute flex flex-col items-center" style={{ top: miniCoords[i].y - 15, left: miniCoords[i].x - 30, width: '60px' }}>
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] mb-1"></div>
              <span className="text-[8px] text-white/60 uppercase tracking-wider text-center leading-tight">{s.title}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 5. Final Collapse CTA */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center relative py-32 px-6 overflow-hidden z-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute w-[250px] h-[250px] bg-[#D4AF37] rounded-full blur-[60px] z-0 animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="font-serif text-[40px] leading-[1.1] text-white text-center mb-10">
            Ready To Build <br />Something Bigger?
          </h2>
          <Link href="mailto:hello@purnova.com">
            <button className="bg-[#D4AF37] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] px-12 py-5 rounded-[16px] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform active:scale-95">
              Book A Call
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

const MobileServiceNode = ({ service, index }: { service: any, index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center w-full px-5 z-10"
    >
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className={`w-full max-w-[400px] bg-[#0B0B0B]/90 backdrop-blur-md border rounded-[24px] p-8 flex flex-col items-center text-center overflow-hidden cursor-pointer transition-colors duration-500 ${expanded ? 'border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-white/10'}`}
      >
        <motion.div layout className={`w-3 h-3 rounded-full bg-[#D4AF37] mb-6 shadow-[0_0_15px_#D4AF37] transition-transform duration-500 ${expanded ? 'scale-[1.5]' : ''}`} />
        <motion.h3 layout className="font-serif text-[28px] leading-tight text-white mb-2">{service.title}</motion.h3>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 w-full"
            >
              <p className="font-sans text-[15px] text-white/70 mb-8 leading-relaxed">{service.desc}</p>
              <div className="w-full h-[100px] bg-gradient-to-b from-[#151515] to-[#0B0B0B] border border-white/5 rounded-[16px] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                <span className="absolute font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase bg-[#111] px-3">System Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}


// ---------------------------------------------------------
// DESKTOP ECOSYSTEM (Framer Motion WebGL-style Zoom Network)
// ---------------------------------------------------------
const progressPoints = [
  0.0,   // Center 
  0.1,   // Scattered
  0.65,  // Orbit
  0.75,  // Grid
  0.92,  // Grid Hold
  1.0,  // Collapse
  1.0    // End
];

function DesktopServices() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.05, 1], [1, 0, 0]);
  const linesOpacity = useTransform(smoothProgress, [0, 0.05, 0.1, 0.65, 0.70, 1], [0, 0, 0.4, 0.4, 0, 0]);
  const orbitTextOpacity = useTransform(smoothProgress, [0, 0.55, 0.65, 0.70, 1], [0, 0, 1, 0, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0, 0.94, 0.98, 1], [0, 0, 1, 1]);

  const pillOpacity = useTransform(smoothProgress, [0, 0.65, 0.70, 1], [1, 1, 0, 0]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.70, 0.75, 0.93, 0.95, 1], [0, 0, 1, 1, 0, 0]);

  const getX = (i: number) => [
    "0vw",
    `${services[i].scattered.x}vw`,
    `${Math.cos((services[i].orbit.angle * Math.PI) / 180) * 35}vw`,
    `${(services[i].grid.col - 1) * 28}vw`,
    `${(services[i].grid.col - 1) * 28}vw`,
    "0vw",
    "0vw"
  ];

  const getY = (i: number) => [
    "0vh",
    `${services[i].scattered.y}vh`,
    `${Math.sin((services[i].orbit.angle * Math.PI) / 180) * 35}vh`,
    `${(services[i].grid.row - 1) * 26}vh`,
    `${(services[i].grid.row - 1) * 26}vh`,
    "0vh",
    "0vh"
  ];

  const getNodeOpacity = (i: number) => useTransform(smoothProgress, progressPoints, [
    0, 1, 1, 1, 1, 0, 0
  ]);

  return (
    <main className="bg-[#0B0B0B] text-white selection:bg-[#D4AF37] selection:text-black">
      <NavBar />

      <div ref={containerRef} className="h-[900vh] relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

          <div className="absolute inset-0 bg-[#0B0B0B]">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.svg className="absolute top-1/2 left-1/2 w-0 h-0 overflow-visible pointer-events-none" style={{ opacity: linesOpacity }}>
              {pairs.map(([a, b], idx) => {
                const xA = useTransform(smoothProgress, progressPoints, getX(a));
                const yA = useTransform(smoothProgress, progressPoints, getY(a));
                const xB = useTransform(smoothProgress, progressPoints, getX(b));
                const yB = useTransform(smoothProgress, progressPoints, getY(b));
                return (
                  <motion.line
                    key={idx}
                    x1={xA} y1={yA} x2={xB} y2={yB}
                    stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4"
                  />
                );
              })}
            </motion.svg>

            <motion.div initial={{ opacity: 0 }} style={{ opacity: orbitTextOpacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="font-serif text-[5vw] leading-[1.2] text-white text-center max-w-[50vw]">
                Growth Happens When <br /><span className="text-[#D4AF37] italic">Everything Works Together.</span>
              </h2>
            </motion.div>

            {services.map((service, i) => {
              const x = useTransform(smoothProgress, progressPoints, getX(i));
              const y = useTransform(smoothProgress, progressPoints, getY(i));
              const nodeOp = getNodeOpacity(i);

              return (
                <motion.div
                  key={service.id}
                  className="absolute top-1/2 left-1/2 flex items-center justify-center"
                  style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: nodeOp }}
                >
                  <motion.div
                    style={{ opacity: pillOpacity }}
                    className="absolute whitespace-nowrap bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/30 px-6 md:px-8 py-3 md:py-4 rounded-full text-[12px] md:text-[14px] uppercase tracking-widest text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] flex items-center gap-3 pointer-events-none"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                    {service.title}
                  </motion.div>

                  <motion.div
                    style={{ opacity: cardOpacity }}
                    className="absolute w-[26vw] h-[22vh] min-w-[320px] min-h-[220px] bg-[#111] border border-white/5 rounded-[24px] p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 hover:bg-[#151515] hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all duration-500 cursor-pointer pointer-events-auto group"
                  >
                    <div>
                      <h3 className="font-serif text-[24px] md:text-[28px] text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                      <p className="font-sans text-[14px] md:text-[16px] text-white/60 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="font-sans text-[12px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2 group-hover:text-[#D4AF37] transition-colors">
                      Learn More <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-2">arrow_forward</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 1 }} style={{ opacity: heroOpacity }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-50">
            <h1 className="font-serif text-[64px] md:text-[140px] leading-[0.9] font-bold text-white mb-6 uppercase tracking-tighter">
              Services
            </h1>
            <p className="font-sans text-[16px] md:text-[24px] text-[#D4AF37] max-w-2xl text-center px-5">
              We don't offer services. We build growth ecosystems.
            </p>
            <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-50">
              <span className="font-sans text-[10px] tracking-[0.2em] text-white uppercase">SCROLL TO EXPLORE</span>
              <div className="w-px h-12 bg-white"></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} style={{ opacity: ctaOpacity }} className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0B0B]/80 backdrop-blur-sm z-50 pointer-events-none">
            <div className="w-[300px] h-[300px] bg-[#D4AF37] rounded-full blur-[100px] absolute opacity-40"></div>
            <div className="relative z-10 text-center pointer-events-auto">
              <h2 className="font-serif text-[48px] md:text-[80px] leading-[1.1] text-white mb-10">
                Ready To Build Your <br className="hidden md:block" />Growth System?
              </h2>
              <Link href="mailto:hello@purnova.com">
                <button className="bg-[#D4AF37] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] px-16 h-[64px] rounded-[16px] hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  Book A Call
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
