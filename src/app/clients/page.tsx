"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

// ---------------------------------------------------------
// DATA ARCHITECTURE
// ---------------------------------------------------------
type TileType = "A" | "B" | "C";

const clients = [
  // Brands with Logos
  { name: "Bushare", handle: "@buybushare", instagramUrl: "https://www.instagram.com/buybushare/?hl=en", category: "Technology", type: "B" as TileType, featured: true, logo: "/brand-logos/bushare.png" },
  { name: "Upscale", handle: "@salmanshaikh_upscale", instagramUrl: "https://www.instagram.com/salmanshaikh_upscale/?hl=en", category: "Media", type: "A" as TileType, featured: true, logo: "/brand-logos/Upscale.png" },
  { name: "DR Auto", handle: "@_the_dr_auto__", instagramUrl: "https://www.instagram.com/_the_dr_auto__/?hl=en", category: "Automotive", type: "B" as TileType, featured: true, logo: "/brand-logos/Dr-auto.png" },
  { name: "Cosmic Ganges", handle: "@cosmicganges", instagramUrl: "https://www.instagram.com/cosmicganges/?hl=en", category: "Technology", type: "C" as TileType, featured: true, logo: "/brand-logos/Cosmic.png" },
  { name: "Eat Right Up", handle: "@eatrightup", instagramUrl: "https://www.instagram.com/eatrightup/?hl=en", category: "Food & Beverage", type: "C" as TileType, featured: false, logo: "/brand-logos/Eat Right Up Logo.png" },
  { name: "Delight Events", handle: "@delight_event_decor", instagramUrl: "https://www.instagram.com/delight_event_decor/?hl=en", category: "Events", type: "B" as TileType, featured: false, logo: "/brand-logos/delight-events.png" },
  { name: "Vaichal Group", handle: "@vaichalgroup", instagramUrl: "https://www.instagram.com/vaichalgroup/?hl=en", category: "Real Estate", type: "A" as TileType, featured: false, logo: "/brand-logos/vaichal-group (1).png" },
  { name: "Sadgee Masale", handle: "@sadgee_masale", instagramUrl: "https://www.instagram.com/sadgee_masale/?hl=en", category: "Food & Beverage", type: "A" as TileType, featured: false, logo: "/brand-logos/sadgee.png" },
  { name: "Hotel Wada", handle: "@hotelwada", instagramUrl: "https://www.instagram.com/hotelwada/?hl=en", category: "Hospitality", type: "A" as TileType, featured: false, logo: "/brand-logos/Hotel-wada.png" },
  // Brands without Logos
  { name: "Pune Voices", handle: "@punevoices", instagramUrl: "https://www.instagram.com/punevoices/?hl=en", category: "Media", type: "A" as TileType, featured: true },
  { name: "Import Export", handle: "@import.export.federation", instagramUrl: "https://www.instagram.com/import.export.federation/?hl=en", category: "Education", type: "A" as TileType, featured: false },
  { name: "Shri Samarth", handle: "@shrisamarthakrupa", instagramUrl: "https://www.instagram.com/shrisamarthakrupa/?hl=en", category: "Food & Beverage", type: "B" as TileType, featured: false },
  { name: "Aashi Skool", handle: "@aashiforestskool", instagramUrl: "https://www.instagram.com/aashiforestskool/?hl=en", category: "Education", type: "C" as TileType, featured: false },
  { name: "Siraa", handle: "@houseofsiraa", instagramUrl: "https://www.instagram.com/houseofsiraa/?hl=en", category: "Fashion", type: "B" as TileType, featured: false },
  { name: "Savaniee", handle: "@savanieeravindrra", instagramUrl: "https://www.instagram.com/savanieeravindrra/?hl=en", category: "Personal Brands", type: "C" as TileType, featured: false },
  { name: "Sonalee K", handle: "@sonalee18588", instagramUrl: "https://www.instagram.com/sonalee18588/?hl=en", category: "Personal Brands", type: "C" as TileType, featured: false },
  { name: "Glamowell", handle: "@glamowellofficial", instagramUrl: "https://www.instagram.com/glamowellofficial/?hl=en", category: "Fashion", type: "B" as TileType, featured: false },
  { name: "Varad Vinayak", handle: "@varadvinayak", instagramUrl: "#", category: "Real Estate", type: "B" as TileType, featured: false },
  { name: "Akshay Catering", handle: "@caterersakshay", instagramUrl: "https://www.instagram.com/caterersakshay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", category: "Food & Beverage", type: "C" as TileType, featured: false },
  { name: "SmilesWorld", handle: "@smilesworld10", instagramUrl: "https://www.instagram.com/smilesworld10/reels/?hl=en", category: "Healthcare", type: "A" as TileType, featured: false },
  { name: "Urban Ed", handle: "@urban_education_official", instagramUrl: "https://www.instagram.com/urban_education_official/?hl=en", category: "Education", type: "B" as TileType, featured: false },
  { name: "Zistral", handle: "@zistral_oral_care", instagramUrl: "https://www.instagram.com/zistral_oral_care/?hl=en", category: "Healthcare", type: "C" as TileType, featured: false },
];

const categories = ["All", "Media", "Food & Beverage", "Education", "Technology", "Healthcare", "Personal Brands", "Hospitality", "Events", "Fashion", "Automotive", "Real Estate"];

// ---------------------------------------------------------
// MAIN EXPORT
// ---------------------------------------------------------
export default function ClientsPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <>
      <NavBar />
      {isMobile ? <MobileClients /> : <DesktopClients />}
      <Footer />
    </>
  );
}

// ---------------------------------------------------------
// DESKTOP ECOSYSTEM (Editorial & Interactive)
// ---------------------------------------------------------
function DesktopClients() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredClients = clients.filter(c => activeCategory === "All" || c.category === activeCategory);

  return (
    <main className="bg-[#0A0A0A] text-white selection:bg-[#C9A84C] selection:text-black w-full overflow-hidden">
      
      {/* 1. HERO & LIVING CONSTELLATION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <LivingConstellation />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10 pointer-events-none"
        >
          <h1 className="font-serif text-[64px] md:text-[96px] lg:text-[120px] font-bold text-white mb-6 leading-[0.9] tracking-tighter flex flex-wrap justify-center md:block">
            {["The", "Brands", "Behind"].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 md:mr-6 pb-2">
                 <motion.span 
                    initial={{ y: "-110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.1) }}
                    className="inline-block"
                 >
                    {word}
                 </motion.span>
              </span>
            ))}
            <br className="hidden md:block"/>
            {["The", "Growth."].map((word, i) => (
              <span key={i + 3} className="inline-block overflow-hidden mr-3 md:mr-6 pb-2">
                 <motion.span 
                    initial={{ y: "-110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + ((i + 3) * 0.1) }}
                    className="inline-block"
                 >
                    {word}
                 </motion.span>
              </span>
            ))}
          </h1>
          <p className="font-sans text-[18px] md:text-[24px] text-[#C9A84C] italic max-w-2xl mx-auto">
            Every logo represents a story.<br/>
            Every story represents trust.
          </p>
        </motion.div>
      </section>

      {/* 3. MASONRY GALLERY */}
      <section className="relative w-full max-w-[1600px] mx-auto px-[40px] md:px-[80px] pb-32 min-h-[800px]">
        {/* Large screens: 3 columns */}
        <div className="hidden lg:flex gap-8">
           {[0, 1, 2].map(colIndex => (
             <div key={colIndex} className="flex-1 flex flex-col gap-8">
               <AnimatePresence>
                 {filteredClients.filter((_, i) => i % 3 === colIndex).map((client) => (
                   <MasonryTile key={client.name} client={client} />
                 ))}
               </AnimatePresence>
             </div>
           ))}
        </div>
        
        {/* Medium screens: 2 columns */}
        <div className="hidden md:flex lg:hidden gap-8">
           {[0, 1].map(colIndex => (
             <div key={colIndex} className="flex-1 flex flex-col gap-8">
               <AnimatePresence>
                 {filteredClients.filter((_, i) => i % 2 === colIndex).map((client) => (
                   <MasonryTile key={client.name} client={client} />
                 ))}
               </AnimatePresence>
             </div>
           ))}
        </div>
      </section>

      {/* 4. SOCIAL PROOF STRIP */}
      <section className="w-full py-10 bg-[#C9A84C] overflow-hidden rotate-[-1deg] scale-105 my-20 shadow-[0_0_50px_rgba(212,175,55,0.2)] flex">
        <motion.div 
          className="flex whitespace-nowrap w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
           {Array.from({length: 4}).map((_, i) => (
             <div key={i} className="flex items-center gap-12 px-6">
                {clients.map(c => (
                  <span key={c.name} className="font-serif text-[32px] text-black font-bold uppercase tracking-widest flex items-center gap-6">
                    {c.name}
                    <span className="w-3 h-3 rounded-full bg-black/50"></span>
                  </span>
                ))}
             </div>
           ))}
        </motion.div>
      </section>



      {/* 6. FINAL CTA */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden py-32 md:py-48">
        <div className="relative z-20 text-center flex flex-col items-center max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.1] text-white mb-6">
            Your Brand Could <br/>Be Next.
          </h2>
          <p className="font-sans text-[20px] md:text-[24px] text-white/40 italic mb-16">
            The strongest brands grow together.
          </p>
          <Link href="/contact">
            <button className="group relative bg-transparent border-2 border-[#C9A84C] text-[#C9A84C] font-sans text-[16px] font-bold uppercase tracking-[0.2em] px-16 h-[72px] overflow-hidden transition-colors hover:bg-[#C9A84C] hover:text-black">
              <span className="relative z-10">Start The Conversation</span>
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

// ---------------------------------------------------------
// DESKTOP SUB-COMPONENTS
// ---------------------------------------------------------

function LivingConstellation() {
  const [nodes, setNodes] = useState<{x: number, y: number}[]>([]);
  
  useEffect(() => {
    setNodes(Array.from({length: 30}).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    })));
  }, []);

  return (
    <div 
      className="absolute inset-0 z-0 opacity-40" 
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {nodes.map((n1, i) => 
          nodes.slice(i + 1, i + 3).map((n2, j) => (
            <line key={`${i}-${j}`} x1={`${n1.x}%`} y1={`${n1.y}%`} x2={`${n2.x}%`} y2={`${n2.y}%`} stroke="#C9A84C" strokeWidth="0.5" />
          ))
        )}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C9A84C] rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, Math.random() * 20 - 10, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 3, boxShadow: "0 0 20px #C9A84C" }}
        />
      ))}
    </div>
  );
}

function MasonryTile({ client }: { client: any }) {
  const [expanded, setExpanded] = useState(false);

  // Layout variants mapped to TileType
  const getHeight = () => {
    if (client.type === 'A') return "h-[450px]";
    if (client.type === 'B') return "h-[250px]";
    return "h-[300px]"; // C
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onClick={() => setExpanded(!expanded)}
      className="relative overflow-hidden bg-[#0A0A0A] rounded-[24px] cursor-pointer group hover:-translate-y-2 transition-transform duration-500 border border-transparent hover:border-[#C9A84C]/50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]"
    >
      {/* TILE FRONT */}
      <motion.div layout className={`relative w-full ${getHeight()} flex flex-col justify-between p-8`}>
        {client.type === 'A' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            {/* Visual Image Placeholder */}
            <div className="absolute inset-0 bg-[#1A1A1A]">
               <div className="w-full h-full bg-[#C9A84C]/5 mix-blend-overlay"></div>
            </div>
          </>
        )}
        
        {client.type === 'C' && (
           <div className="absolute inset-0 flex items-center justify-center opacity-10">
             <div className="w-[150px] h-[150px] rounded-full border border-white"></div>
           </div>
        )}

        {client.logo && (
           <div className="absolute inset-0 z-0 flex items-center justify-center p-12 pointer-events-none opacity-60 lg:opacity-10 group-hover:opacity-60 transition-opacity duration-700">
              <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain" />
           </div>
        )}

        <div className="relative z-20 flex justify-between items-start">
          {client.type === 'C' ? (
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8A7320] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
               <span className="font-serif text-[24px] text-black">{client.name.charAt(0)}</span>
             </div>
          ) : (
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="material-symbols-outlined text-[18px] text-[#C9A84C]">camera_alt</span>
             </div>
          )}
          <span className="material-symbols-outlined text-[20px] text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500">north_east</span>
        </div>

        <div className="relative z-20 mt-auto">
          <h3 className={`font-serif text-white mb-2 ${client.type === 'B' ? 'text-[40px] leading-none' : 'text-[28px]'}`}>{client.name}</h3>
          <p className="font-sans text-[12px] uppercase tracking-widest text-[#C9A84C]">{client.handle}</p>
        </div>
      </motion.div>

      {/* INLINE EXPANSION CONTENT */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-[#151515] border-t border-white/5"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-transparent flex items-center justify-center">
                   <span className="font-serif text-[18px] text-white">{client.name.charAt(0)}</span>
                 </div>
                <div>
                  <p className="font-serif text-[18px] text-white leading-tight">{client.name}</p>
                  <p className="font-sans text-[12px] text-white/50">{client.category}</p>
                </div>
              </div>

              {/* Mock IG Grid */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="aspect-square bg-[#222] rounded-md overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#C9A84C] opacity-0 hover:opacity-20 transition-opacity cursor-pointer"></div>
                  </div>
                ))}
              </div>

              <Link href={client.instagramUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full bg-[#C9A84C]/10 text-[#C9A84C] font-sans text-[12px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-[#C9A84C] hover:text-black transition-colors">
                  Visit Instagram
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function EcosystemAssembly() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Nodes slowly assemble towards the center as user scrolls down to CTA
  const scale = useTransform(scrollYProgress, [0, 0.5], [2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.5]);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.div style={{ scale, opacity }} className="relative w-[800px] h-[800px]">
        <svg className="absolute inset-0 w-full h-full">
           {clients.slice(0, 15).map((_, i) => (
             <line key={i} x1="400" y1="400" x2={400 + Math.cos(i*24) * 300} y2={400 + Math.sin(i*24) * 300} stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
           ))}
        </svg>
        {clients.slice(0, 15).map((c, i) => (
          <div key={i} className="absolute flex flex-col items-center" style={{ left: 400 + Math.cos(i*24) * 300, top: 400 + Math.sin(i*24) * 300 }}>
             <div className="w-3 h-3 bg-[#C9A84C] rounded-full mb-2 shadow-[0_0_15px_#C9A84C]"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


// ---------------------------------------------------------
// MOBILE ECOSYSTEM (Touch-Optimized Story Stack)
// ---------------------------------------------------------
function MobileClients() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredClients = clients.filter(c => activeCategory === "All" || c.category === activeCategory);
  
  const [expandedClient, setExpandedClient] = useState<any>(null);

  return (
    <main className="bg-[#0A0A0A] text-white w-full overflow-hidden pt-24 min-h-screen">
      
      {/* 1. MOBILE HERO */}
      <section className="px-6 mb-12 text-center relative z-10">
        <h1 className="font-serif text-[48px] font-bold text-white mb-4 leading-[0.9] tracking-tighter flex flex-wrap justify-center">
            {["The", "Brands", "Behind"].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-2 pb-1">
                 <motion.span 
                    initial={{ y: "-110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.1) }}
                    className="inline-block"
                 >
                    {word}
                 </motion.span>
              </span>
            ))}
            <div className="w-full h-0"></div>
            {["The", "Growth."].map((word, i) => (
              <span key={i + 3} className="inline-block overflow-hidden mr-2 pb-1">
                 <motion.span 
                    initial={{ y: "-110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + ((i + 3) * 0.1) }}
                    className="inline-block"
                 >
                    {word}
                 </motion.span>
              </span>
            ))}
        </h1>
        <p className="font-sans text-[14px] text-[#C9A84C] italic mb-6">
          Every logo represents a story.
        </p>
      </section>

      {/* 3. SWIPEABLE STORY CARDS STACK */}
      <section className="relative w-full px-6 flex flex-col gap-6 mb-24 z-10">
        <AnimatePresence>
          {filteredClients.map((client) => (
            <motion.div
              layout
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-[400px] bg-[#0A0A0A] rounded-[24px] overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-end p-6"
              onClick={() => setExpandedClient(client)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>
              
              {client.logo && (
                 <div className="absolute inset-0 z-10 flex items-center justify-center p-12 pointer-events-none opacity-60 transition-opacity duration-500">
                    <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain" />
                 </div>
              )}

              <div className="relative z-20 flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-[32px] text-white leading-none mb-2">{client.name}</h3>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-[#C9A84C]">{client.handle}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-[18px] text-[#C9A84C]">keyboard_arrow_up</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* 4. MOBILE BOTTOM SHEET (Drawer) */}
      <AnimatePresence>
        {expandedClient && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedClient(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[80vh] bg-[#151515] rounded-t-[32px] z-[101] flex flex-col border-t border-white/10 overflow-y-auto"
            >
              <div className="w-full flex justify-center py-4">
                <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A84C] to-transparent flex items-center justify-center">
                    <span className="font-serif text-[24px] text-white">{expandedClient.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[28px] text-white leading-none mb-1">{expandedClient.name}</h3>
                    <p className="font-sans text-[12px] uppercase tracking-widest text-[#C9A84C]">{expandedClient.handle}</p>
                  </div>
                </div>

                <p className="font-sans text-[14px] text-white/60 mb-8 leading-relaxed">
                  Exploring the digital footprint and brand evolution within the {expandedClient.category} industry.
                </p>

                <div className="grid grid-cols-3 gap-2 mb-8">
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} className="aspect-square bg-[#222] rounded-md"></div>
                  ))}
                </div>

                <Link href={expandedClient.instagramUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-[#C9A84C] text-black font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-5 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    Visit Instagram
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 5. MOBILE FINAL CTA */}
      <section className="relative w-full py-32 px-6 text-center border-t border-white/5 bg-[#050505]">
        <h2 className="font-serif text-[40px] leading-[1.1] text-white mb-6">
          Your Brand Could <br/>Be Next.
        </h2>
        <Link href="/contact">
          <button className="w-full bg-transparent border-2 border-[#C9A84C] text-[#C9A84C] font-sans text-[14px] font-bold uppercase tracking-[0.2em] py-5 mt-6 active:bg-[#C9A84C] active:text-black transition-colors">
            Start The Conversation
          </button>
        </Link>
      </section>

    </main>
  );
}
