"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";


// Data
const servicesData = [
   {
      id: 1,
      title: "Performance Marketing",
      subtitle: "Performance Marketing",
      copy: "Strategic campaigns that help you reach the right audience, generate quality leads, and grow your business.",
      type: "marketing",
      details: [
         <div key="1"><strong className="text-white block text-[16px] mb-1">01 Multi Platform Campaigns</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">Reach your audience wherever they are.</span>We create connected campaigns across Google, Meta, LinkedIn, YouTube, and more, so every platform works together to build awareness, generate leads, and drive consistent growth.</div>,
         <div key="2"><strong className="text-white block text-[16px] mb-1">02 Landing Pages That Convert</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">Don't just attract visitors. Turn them into customers.</span>We design and optimize landing pages that make it easy for people to take action, improving conversions and getting more value from every marketing campaign.</div>,
         <div key="3"><strong className="text-white block text-[16px] mb-1">03 Smarter Growth Strategies</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">Grow today without losing tomorrow.</span>We focus on attracting customers who bring long term value, helping your business grow sustainably instead of chasing short term wins.</div>
      ]
   },
   {
      id: 2,
      title: "Brand Strategy",
      subtitle: "Brand Strategy",
      copy: "A great brand isn't just seen. It's remembered.",
      type: "branding",
      details: [
         <div key="1"><strong className="text-white block text-[16px] mb-1">01 Brand Positioning</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Find what makes your brand different."</span>Together, we'll define what sets your business apart, giving your customers a clear reason to choose you over everyone else.</div>,
         <div key="2"><strong className="text-white block text-[16px] mb-1">02 Audience Research</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Know who you're talking to."</span>We uncover your audience's needs, challenges, and motivations so every decision speaks directly to the people you want to reach.</div>,
         <div key="3"><strong className="text-white block text-[16px] mb-1">03 Competitor Analysis</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Learn from the market. Stand apart from it."</span>We study your competitors to identify opportunities, uncover gaps, and position your brand where it can truly stand out.</div>,
         <div key="4"><strong className="text-white block text-[16px] mb-1">04 Brand Messaging</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Say the right thing to the right people."</span>From your brand story to your key messages, we create communication that is clear, consistent, and memorable across every platform.</div>,
         <div key="5"><strong className="text-white block text-[16px] mb-1">05 Voice & Tone</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Give your brand a personality people recognize."</span>Whether your brand is bold, playful, premium, or approachable, we define a voice that stays consistent across every interaction.</div>,
         <div key="6"><strong className="text-white block text-[16px] mb-1">06 Visual Identity</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Design with purpose."</span>We create a visual direction that reflects your values, builds trust, and makes your brand instantly recognizable.</div>,
         <div key="7"><strong className="text-white block text-[16px] mb-1">07 Customer Experience</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Every interaction shapes your brand."</span>From the first click to the final conversation, we help create experiences that feel seamless, memorable, and worth coming back to.</div>,
         <div key="8"><strong className="text-white block text-[16px] mb-1">08 Growth Strategy</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Build for today. Plan for tomorrow."</span>We develop practical strategies that help your brand grow with clarity, adapt to change, and achieve long term success.</div>
      ]
   },
   {
      id: 3,
      title: "Social Media",
      subtitle: "Social Media",
      copy: "Social media strategies that build trust, spark engagement, and turn followers into loyal customers.",
      type: "social",
      details: [
         <div key="1"><strong className="text-white block text-[16px] mb-1">01 Content Strategy & Creation</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Content with purpose, not just presence."</span>We create content that reflects your brand, captures attention, and gives your audience a reason to engage. Every post is planned with strategy, creativity, and consistency.</div>,
         <div key="2"><strong className="text-white block text-[16px] mb-1">02 Community Management</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Conversations build stronger brands."</span>We help you build genuine relationships with your audience through meaningful interactions, active engagement, and a community that keeps coming back.</div>,
         <div key="3"><strong className="text-white block text-[16px] mb-1">03 Creator Collaborations</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Partner with voices your audience already trusts."</span>We connect your brand with creators who genuinely align with your values, helping you reach new audiences through authentic and impactful collaborations.</div>
      ]
   },
   {
      id: 4,
      title: "SEO",
      subtitle: "SEO",
      copy: "SEO strategies that increase visibility, drive qualified traffic, and deliver long term growth.",
      type: "seo",
      details: [
         <div key="1"><strong className="text-white block text-[16px] mb-1">01 Technical SEO</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Build a website Google loves."</span>We optimize your website's speed, structure, and technical foundation so search engines can understand it better and customers can find it more easily.</div>,
         <div key="2"><strong className="text-white block text-[16px] mb-1">02 SEO Content Strategy</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Create content that keeps working for you."</span>We build SEO focused content that answers real customer questions, attracts qualified traffic, and helps your business grow organically over time.</div>,
         <div key="3"><strong className="text-white block text-[16px] mb-1">03 Content That Builds Authority</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Become the trusted voice in your industry."</span>We create valuable articles, guides, and resources that answer customer questions, build trust, and improve your visibility on search engines.</div>
      ]
   },
   {
      id: 6,
      title: "Content Creation",
      subtitle: "Content Creation",
      copy: "Content that tells your story, builds trust, and gives people a reason to choose your brand.",
      type: "content",
      details: []
   },
   {
      id: 5,
      title: "Web Development",
      subtitle: "DESIGN MEETS PERFORMANCE.",
      copy: "Fast, modern websites designed to look great, perform flawlessly, and grow with your business.",
      type: "web",
      details: [
         <div key="1"><strong className="text-white block text-[16px] mb-1">01 Conversion Focused Design</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Designed with your customers in mind."</span>Every page is crafted to guide visitors naturally, making it easier for them to explore, engage, and take action. Beautiful design means little if it doesn't deliver results.</div>,
         <div key="2"><strong className="text-white block text-[16px] mb-1">02 Fast & Scalable Development</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Built for speed today and growth tomorrow."</span>We build fast, secure, and flexible websites that load quickly, perform reliably, and are ready to grow alongside your business.</div>,
         <div key="3"><strong className="text-white block text-[16px] mb-1">03 Interactive Experiences</strong><span className="text-[#C9A84C] block mb-2 text-[12px] uppercase tracking-widest">"Small details. Big impact."</span>Thoughtful animations and subtle interactions make your website feel more engaging, intuitive, and memorable while creating a smoother experience for every visitor.</div>
      ]
   }
];

export default function ServicesPage() {
   const [isMobile, setIsMobile] = useState<boolean | null>(null);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   if (isMobile === null) return <div className="min-h-screen bg-[#0A0A0A]" />;

   return isMobile ? <MobileGalleryExperience /> : <DesktopGalleryExperience />;
}

// --------------------------------------------------------------------------------
// DESKTOP EXPERIENCE: 1500vh Cinematic 3D Gallery Walkthrough
// --------------------------------------------------------------------------------
function DesktopGalleryExperience() {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
   const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

   const [selectedExhibit, setSelectedExhibit] = useState<any>(null);

   useEffect(() => {
      if (selectedExhibit) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   }, [selectedExhibit]);

   // Hero Text
   const heroText1Opacity = useTransform(p, [0, 0.04, 0.06], [1, 1, 0]);
   const heroText2Opacity = useTransform(p, [0.02, 0.05, 0.06], [0, 1, 0]);

   // Gallery Doors
   const leftDoorX = useTransform(p, [0.06, 0.10], ["0%", "-100%"]);
   const rightDoorX = useTransform(p, [0.06, 0.10], ["0%", "100%"]);
   const lineOpacity = useTransform(p, [0, 0.06], [0, 1]);

   return (
      <div ref={containerRef} className="h-[1000vh] relative w-full bg-[#050505] text-white">
         <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
            <NavBar />

            {/* Ambient Lighting & Particles (Global Background) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05),_black_70%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            {/* Exhibits */}
            {servicesData.map((svc, i) => (
               <DesktopExhibit key={svc.id} service={svc} index={i} p={p} onSelect={() => setSelectedExhibit(svc)} />
            ))}

            {/* Final Tree Experience */}
            <TreeExperience p={p} />

            {/* Final Glowing CTA Layer */}
            <FinalCTALayer p={p} />

            {/* Gallery Doors (Cover everything until opened) */}
            <motion.div style={{ x: leftDoorX }} className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#0A0A0A] z-50 shadow-[20px_0_50px_rgba(0,0,0,0.8)]">
               {/* Glowing Line */}
               <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-black"></div>
               <motion.div style={{ opacity: lineOpacity }} className="absolute top-0 bottom-0 right-0 w-[2px] bg-[#C9A84C] shadow-[0_0_20px_rgba(212,175,55,1),0_0_40px_rgba(212,175,55,0.6)]"></motion.div>
            </motion.div>
            <motion.div style={{ x: rightDoorX }} className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#0A0A0A] z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]">
               {/* Glowing Line */}
               <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-black"></div>
               <motion.div style={{ opacity: lineOpacity }} className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#C9A84C] shadow-[0_0_20px_rgba(212,175,55,1),0_0_40px_rgba(212,175,55,0.6)]"></motion.div>
            </motion.div>

            {/* Hero Text (Sits ON TOP of the doors) */}
            <div className="absolute inset-0 z-[60] pointer-events-none flex flex-col items-center justify-center">
               <motion.h1 style={{ opacity: heroText1Opacity }} className="font-serif text-[40px] md:text-[64px] font-bold text-white mb-2 absolute text-center w-full px-6 leading-tight">Every Brand Has Untapped Potential.</motion.h1>
               <motion.h2 style={{ opacity: heroText2Opacity }} className="font-serif text-[40px] md:text-[64px] font-bold text-[#C9A84C] italic absolute mt-24 md:mt-32 text-center w-full px-6">We Reveal It.</motion.h2>
            </div>

            <AnimatePresence>
               {selectedExhibit && <ExhibitModal service={selectedExhibit} onClose={() => setSelectedExhibit(null)} />}
            </AnimatePresence>
         </div>
      </div>
   )
}

const FinalCTALayer = ({ p }: any) => {
   const opacity = useTransform(p, [0.97, 1], [0, 1]);
   const scale = useTransform(p, [0.97, 1], [0.8, 1]);
   const [isActive, setIsActive] = useState(false);
   const [isRendered, setIsRendered] = useState(false);
   useMotionValueEvent(p, "change", (latest: number) => {
      const active = latest > 0.96;
      const rendered = latest > 0.95;
      if (isActive !== active) setIsActive(active);
      if (isRendered !== rendered) setIsRendered(rendered);
   });

   if (!isRendered) return null;

   return (
      <motion.div
         style={{ opacity, scale }}
         className={`absolute inset-0 z-50 flex flex-col items-center justify-center ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
         <div className="absolute inset-0 bg-[#050505] z-0"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15),_transparent_60%)] z-10 pointer-events-none"></div>
         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#C9A84C] rounded-full blur-[150px] absolute opacity-30 animate-pulse z-10 pointer-events-none"></div>

         <div className="relative z-20 flex flex-col items-center text-center">
            {/* Decorative Star */}
            <div className="absolute -right-8 md:-right-20 top-[-20px] md:top-0 text-[#C9A84C] text-[20px] md:text-[24px] opacity-80 animate-pulse">★</div>
            
            <h2 className="font-serif text-[48px] md:text-[80px] lg:text-[100px] text-white font-bold leading-[1.1] tracking-tighter mb-10 md:mb-12">
               Ready To Build Your <br /> Growth System?
            </h2>
            <Link href="/contact">
               <button className="bg-[#C9A84C] text-black font-sans text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] px-12 py-5 hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                  BOOK A CALL
               </button>
            </Link>
         </div>
      </motion.div>
   )
}

const DesktopExhibit = ({ service, index, p, onSelect }: any) => {
   const start = 0.10 + index * 0.13;
   const end = 0.10 + (index + 1) * 0.13;

   // Fade in, hold, fade out
   const opacity = useTransform(p, [start - 0.02, start, end - 0.02, end], [0, 1, 1, 0]);

   // Camera walk forward effect (scale 0.9 to 1.1)
   const scale = useTransform(p, [start - 0.02, end], [0.95, 1.1]);
   const yOffset = useTransform(p, [start - 0.02, end], ["5vh", "-5vh"]);

   // Ensure it doesn't block clicks when invisible and unmount entirely when far out of view
   const [isActive, setIsActive] = useState(false);
   const [isRendered, setIsRendered] = useState(false);
   useMotionValueEvent(p, "change", (latest: number) => {
      const active = latest > start - 0.02 && latest < end;
      const rendered = latest > start - 0.05 && latest < end + 0.05;
      if (isActive !== active) setIsActive(active);
      if (isRendered !== rendered) setIsRendered(rendered);
   });

   if (!isRendered) return null;

   return (
      <motion.div
         style={{ opacity, scale, y: yOffset }}
         className={`absolute inset-0 flex items-center justify-center ${isActive ? 'pointer-events-auto' : 'pointer-events-none'} z-20`}
      >
         <div className="absolute inset-0 z-0">
            <ExhibitVisuals type={service.type} />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505] z-10"></div>
         <div className="absolute inset-0 bg-black/30 z-10"></div>

         <div className="relative z-30 text-center max-w-4xl px-6 flex flex-col items-center">
            <span className="font-sans text-[12px] text-[#C9A84C] tracking-[0.3em] uppercase mb-6 border border-[#C9A84C]/30 px-6 py-2 rounded-full bg-[#0A0A0A]">
               {service.subtitle}
            </span>
            <h2 className="font-serif text-[64px] md:text-[96px] text-white leading-[1.1] mb-8">{service.title}</h2>
            <p className="font-sans text-[16px] md:text-[20px] text-white/60 leading-relaxed max-w-2xl">{service.copy}</p>

            <button onClick={onSelect} className="mt-12 bg-transparent border border-white/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 text-white hover:text-[#C9A84C] font-sans text-[12px] font-bold uppercase tracking-[0.2em] px-12 py-5 transition-all duration-300 shadow-xl group">
               Explore Masterpiece
               <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </button>
         </div>
      </motion.div>
   )
}

const ExhibitModal = ({ service, onClose }: any) => {
   return (
      <motion.div
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
         className="fixed inset-0 z-[100] bg-[#050505]/95 flex items-center justify-center p-8 pointer-events-auto"
      >
         <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
         <motion.div
            initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }} transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-[#0A0A0A] border border-[#C9A84C]/20 w-full max-w-6xl rounded-[32px] p-12 md:p-16 shadow-[0_0_100px_rgba(212,175,55,0.15)] flex flex-col md:flex-row gap-12 md:gap-16 items-center"
         >
            <button onClick={onClose} className="absolute top-8 right-8 w-12 h-12 bg-white/5 hover:bg-[#C9A84C] text-white hover:text-black transition-colors flex items-center justify-center z-50">
               <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex-1 relative z-10 max-h-[70vh] overflow-y-auto pr-4">
               <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                  <span className="font-sans text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase">{service.subtitle}</span>
               </div>

               <h2 className="font-serif text-[40px] md:text-[48px] text-white leading-tight mb-4">
                  {service.title}
               </h2>

               <p className="font-serif text-[16px] md:text-[20px] italic text-[#9B9489] leading-relaxed mb-8 pb-8 border-b border-white/10">
                  {service.copy}
               </p>

               {service.details ? (
                  <div className="flex flex-col gap-8">
                     <div className="flex flex-col gap-4">
                        {service.details.map((text: any, idx: number) => (
                           <div key={idx} className="font-sans text-[14px] text-[#ADA8A0] leading-[1.85] font-light">
                              {text}
                           </div>
                        ))}
                     </div>

                     {service.deliverables && (
                        <div>
                           <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-6">Key Deliverables</p>
                           <div className="flex flex-col">
                              {service.deliverables.map((item: string, idx: number) => (
                                 <div key={idx} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0 first:border-t">
                                    <span className="w-1.5 h-1.5 border border-[#C9A84C] rotate-45 shrink-0 mt-1.5"></span>
                                    <span className="font-sans text-[13px] font-light text-[#C8C3BB] leading-relaxed">{item}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>
               ) : (
                  <p className="font-sans text-[14px] md:text-[16px] text-white/40 leading-relaxed border-l-2 border-[#C9A84C]/30 pl-6 italic">
                     "We approach every discipline as an art form. Every detail is meticulously crafted to ensure your brand stands out in the most competitive markets. We architect scalable systems designed for elite performance."
                  </p>
               )}
            </div>
            <div className="flex-1 w-full bg-[#050505] border border-white/5 rounded-[24px] overflow-hidden relative min-h-[300px] md:min-h-[500px] shadow-2xl">
               <ExhibitVisuals type={service.type} />
               <div className="absolute inset-0 bg-black/20 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
            </div>
         </motion.div>
      </motion.div>
   )
}

const treeNodes = [
   // Parents
   { id: 'strategy', label: 'STRATEGY', x: 50, y: 10, type: 'parent' },
   { id: 'tech', label: 'TECH', x: 10, y: 30, type: 'parent' },
   { id: 'marketing', label: 'MARKETING', x: 45, y: 30, type: 'parent' },
   { id: 'brand', label: 'BRAND', x: 90, y: 30, type: 'parent' },
   
   // Leafs
   { id: 'web', label: 'WEB DEVELOPMENT', x: 10, y: 50, type: 'leaf', icon: 'code' },
   { id: 'brand-strat', label: <>BRAND STRATEGY<br />& POSITIONING</>, x: 90, y: 50, type: 'leaf', icon: 'my_location' },
   
   { id: 'seo', label: 'SEO', x: 25, y: 55, type: 'leaf', icon: 'search' },
   { id: 'social', label: 'SOCIAL MEDIA', x: 65, y: 55, type: 'leaf', icon: 'chat' },
   
   { id: 'content', label: 'CONTENT CREATION', x: 50, y: 72, type: 'leaf', icon: 'edit' },
   { id: 'video', label: 'VIDEO PRODUCTION', x: 80, y: 72, type: 'leaf', icon: 'play_arrow' },
];

const treeLines = [
   // Strategy splits to Tech, Marketing, Brand
   { x1: "50%", y1: "10%", x2: "50%", y2: "20%" },
   { x1: "10%", y1: "20%", x2: "90%", y2: "20%" },
   { x1: "10%", y1: "20%", x2: "10%", y2: "30%" },
   { x1: "45%", y1: "20%", x2: "45%", y2: "30%" },
   { x1: "90%", y1: "20%", x2: "90%", y2: "30%" },
   
   // Tech -> Web Dev
   { x1: "10%", y1: "30%", x2: "10%", y2: "50%" },
   
   // Marketing splits to SEO, Social Media
   { x1: "45%", y1: "30%", x2: "45%", y2: "45%" },
   { x1: "25%", y1: "45%", x2: "65%", y2: "45%" },
   { x1: "25%", y1: "45%", x2: "25%", y2: "55%" },
   { x1: "65%", y1: "45%", x2: "65%", y2: "55%" },
   
   // Social splits to Content, Video
   { x1: "65%", y1: "55%", x2: "65%", y2: "65%" },
   { x1: "50%", y1: "65%", x2: "80%", y2: "65%" },
   { x1: "50%", y1: "65%", x2: "50%", y2: "72%" },
   { x1: "80%", y1: "65%", x2: "80%", y2: "72%" },

   // Brand -> Brand Strat
   { x1: "90%", y1: "30%", x2: "90%", y2: "50%" },
];

const treeDots = [
   // Intersections
   { x: "50%", y: "20%" },
   { x: "10%", y: "20%" },
   { x: "45%", y: "20%" },
   { x: "90%", y: "20%" },
   { x: "45%", y: "45%" },
   { x: "25%", y: "45%" },
   { x: "65%", y: "45%" },
   { x: "65%", y: "65%" },
   { x: "50%", y: "65%" },
   { x: "80%", y: "65%" },
];

const TreeExperience = ({ p }: any) => {
   const treeOpacity = useTransform(p, [0.90, 0.93, 0.96, 0.99], [0, 1, 1, 0]);
   const treeScale = useTransform(p, [0.90, 1], [0.95, 1.05]);

   const [isActive, setIsActive] = useState(false);
   const [isRendered, setIsRendered] = useState(false);
   useMotionValueEvent(p, "change", (latest: number) => {
      const active = latest > 0.92;
      const rendered = latest > 0.88;
      if (isActive !== active) setIsActive(active);
      if (isRendered !== rendered) setIsRendered(rendered);
   });

   if (!isRendered) return null;

   return (
      <motion.div
         style={{ opacity: treeOpacity, scale: treeScale }}
         className={`absolute inset-0 z-40 flex items-center justify-center ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
         <div className="absolute inset-0 bg-[#050505] z-0"></div>
         
         {/* Central Ambient Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#C9A84C] rounded-full blur-[150px] opacity-10 pointer-events-none z-10"></div>

         <div className="relative w-full max-w-[1400px] h-[80vh] z-20">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
               {treeLines.map((line, i) => (
                  <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#C9A84C" strokeWidth="1.5" strokeOpacity="0.4" />
               ))}
               {treeDots.map((dot, i) => (
                  <circle key={i} cx={dot.x} cy={dot.y} r="3.5" fill="#C9A84C" className="drop-shadow-[0_0_8px_rgba(212,175,55,1)]" />
               ))}
            </svg>

            {/* Nodes */}
            {treeNodes.map((node) => (
               <div 
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center px-5 py-3 md:px-6 md:py-4 bg-[#0A0A0A] border border-[#C9A84C]/40 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] whitespace-nowrap transition-transform duration-300 hover:scale-105 hover:border-[#C9A84C] cursor-pointer group"
                  style={{ left: node.x + '%', top: node.y + '%' }}
               >
                  {node.type === 'parent' ? (
                     <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#C9A84C] rounded-full mr-3 md:mr-4 shadow-[0_0_12px_rgba(212,175,55,1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,1)] transition-shadow"></div>
                  ) : (
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#C9A84C]/50 flex items-center justify-center mr-3 md:mr-4 group-hover:border-[#C9A84C] transition-colors">
                        <span className="material-symbols-outlined text-[#C9A84C] text-[14px] md:text-[16px]">{node.icon}</span>
                     </div>
                  )}
                  <span className="font-sans text-[10px] md:text-[12px] text-white tracking-[0.2em] font-medium uppercase text-left">{node.label}</span>
               </div>
            ))}
         </div>
      </motion.div>
   )
}

// --------------------------------------------------------------------------------
// MOBILE EXPERIENCE: Sticky Stacked Panels
// --------------------------------------------------------------------------------
function MobileGalleryExperience() {
   return (
      <div className="w-full bg-[#050505] text-white relative">
         <NavBar />

         {/* Mobile Hero */}
         <div className="min-h-[90dvh] flex flex-col items-center justify-center text-center px-6 relative sticky top-0 z-0 bg-[#0A0A0A] border-b border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1),_transparent_70%)]"></div>
            <h1 className="font-serif text-[36px] sm:text-[48px] font-bold text-white mb-4 sm:mb-6 leading-tight relative z-10">Every Brand Has Untapped Potential.</h1>
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#C9A84C] italic relative z-10">We Reveal It.</h2>
            <div className="absolute bottom-12 animate-bounce opacity-50">
               <span className="font-sans text-[10px] tracking-[0.3em] uppercase border border-white/20 px-6 py-2 rounded-full">Enter Gallery ↓</span>
            </div>
         </div>

         {/* Stacked Exhibit Panels */}
         <div className="relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,1)] bg-[#050505]">
            {servicesData.map((svc, i) => (
               <MobileExhibit key={svc.id} service={svc} index={i} />
            ))}
         </div>

         {/* Mobile Final Experience */}
         <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 relative sticky top-0 z-20 bg-black pt-20 pb-32 shadow-[0_-30px_60px_rgba(0,0,0,1)] border-b border-white/5">
            <div className="w-[200px] h-[200px] bg-[#C9A84C] rounded-full blur-[80px] absolute opacity-20 animate-pulse"></div>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-center leading-tight text-[#C9A84C] font-bold mb-4 relative z-10 px-4">
               Growth Happens When Everything Works Together.
            </h2>
         </div>

         {/* Mobile Very Final CTA */}
         <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 w-full relative sticky top-0 z-30 bg-[#050505] shadow-[0_-40px_60px_rgba(0,0,0,1)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.2),_transparent_70%)] pointer-events-none"></div>
            <div className="w-[250px] h-[250px] bg-[#C9A84C] rounded-full blur-[100px] absolute opacity-30 animate-pulse pointer-events-none"></div>

            <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
               {/* Decorative Star */}
               <div className="absolute right-0 -top-6 text-[#C9A84C] text-[20px] opacity-80 animate-pulse">★</div>
               
               <h2 className="font-serif text-[32px] sm:text-[40px] text-white font-bold leading-[1.1] tracking-tighter mb-8 sm:mb-10">
                  Ready To Build Your <br /> Growth System?
               </h2>
               <Link href="/contact" className="w-full sm:w-auto flex justify-center">
                  <button className="bg-[#C9A84C] w-full sm:w-auto text-black font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] px-8 sm:px-10 py-4 sm:py-5 active:scale-95 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                     BOOK A CALL
                  </button>
               </Link>
            </div>
         </div>

      </div>
   )
}

const MobileExhibit = ({ service, index }: any) => {
   const [expanded, setExpanded] = useState(false);

   return (
      <div className="min-h-[100dvh] sticky top-0 w-full overflow-hidden flex items-center justify-center bg-[#080808] border-b border-white/5" style={{ zIndex: index + 1 }}>
         <div className="absolute inset-0 z-0 opacity-60">
            <ExhibitVisuals type={service.type} />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10"></div>

         <div className="relative z-20 px-6 sm:px-8 py-16 sm:py-20 flex flex-col justify-center items-center text-center w-full h-full min-h-[100dvh]">
            <span className="font-sans text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mb-4 block border border-[#C9A84C]/30 px-4 py-2 rounded-full bg-[#0A0A0A]">
               0{index + 1} // {service.subtitle}
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] text-white mb-4 sm:mb-6 leading-tight">{service.title}</h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-white/70 leading-relaxed mb-6 sm:mb-8">{service.copy}</p>

            <AnimatePresence>
               {expanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-8">
                     {service.details ? (
                        <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
                           <div className="flex flex-col gap-4">
                              {service.details.map((text: any, idx: number) => (
                                 <div key={idx} className="font-sans text-[13px] text-[#ADA8A0] leading-[1.7] font-light">
                                    {text}
                                 </div>
                              ))}
                           </div>
                           {service.deliverables && (
                              <div>
                                 <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-4">Key Deliverables</p>
                                 <div className="flex flex-col">
                                    {service.deliverables.map((item: string, idx: number) => (
                                       <div key={idx} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 first:border-t">
                                          <span className="w-1.5 h-1.5 border border-[#C9A84C] rotate-45 shrink-0 mt-1"></span>
                                          <span className="font-sans text-[12px] font-light text-[#C8C3BB] leading-relaxed">{item}</span>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </div>
                     ) : (
                        <p className="font-sans text-[14px] text-white/40 leading-relaxed pt-6 border-t border-white/10 italic">
                           Every detail is meticulously crafted to ensure your brand stands out in the most competitive markets. We architect scalable systems designed for elite performance.
                        </p>
                     )}
                  </motion.div>
               )}
            </AnimatePresence>

            <button onClick={() => setExpanded(!expanded)} className="bg-transparent border border-white/30 text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C] mt-4">
               {expanded ? "Close Details" : "Explore Masterpiece"}
            </button>
         </div>
      </div>
   )
}

// --------------------------------------------------------------------------------
// CINEMATIC MICRO-ANIMATIONS (The Masterpieces)
// --------------------------------------------------------------------------------
const ExhibitVisuals = ({ type }: { type: string }) => {
   switch (type) {
      case 'branding':
         return (
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#050505]">
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
               <motion.div animate={{ rotateY: 360, rotateX: 180 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] relative preserve-3d">
                  <div className="absolute inset-0 border-[1px] border-[#C9A84C]/30 rounded-full rotate-45 shadow-[0_0_40px_rgba(212,175,55,0.1)]"></div>
                  <div className="absolute inset-0 border-[1px] border-[#C9A84C]/20 rounded-full -rotate-45"></div>
                  <div className="absolute inset-0 border-[1px] border-white/10 rounded-full rotate-90"></div>
               </motion.div>
               <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[150px] h-[150px] bg-[#C9A84C] rounded-full blur-[100px]"></motion.div>
            </div>
         );
      case 'marketing':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#020202] flex items-center justify-center">
               <svg className="absolute w-full h-[60%] bottom-0 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                     d="M0,100 C20,80 40,90 60,40 C80,0 100,20 100,20 L100,100 Z"
                     fill="url(#goldGradient)"
                     initial={{ opacity: 0.5 }} animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }}
                  />
                  <defs>
                     <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A84C" />
                        <stop offset="100%" stopColor="transparent" />
                     </linearGradient>
                  </defs>
               </svg>
               <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute md:left-[20%] top-[30%] w-[250px] md:w-[350px] h-[180px] bg-[#0A0A0A] border border-white/10 rounded-[20px] p-8 shadow-2xl">
                  <div className="w-[80%] h-2 bg-white/10 rounded-full mb-4"></div>
                  <div className="w-[50%] h-2 bg-[#C9A84C]/50 rounded-full mb-8"></div>
                  <div className="flex gap-3 h-[50px] items-end">
                     {[30, 70, 50, 100, 80].map((h, i) => (
                        <motion.div key={i} animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }} transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }} className="flex-1 bg-[#C9A84C]/40 rounded-t-sm"></motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>
         );
      case 'social':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center perspective-[1000px]">
               <motion.div animate={{ rotateY: [-3, 3, -3], rotateX: [3, -3, 3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="w-[90%] md:w-[60%] h-[80%] flex gap-4 md:gap-8 preserve-3d">
                  <div className="flex-1 flex flex-col gap-4 md:gap-8 translate-z-10">
                     <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0 }} className="h-[40%] bg-white/5 border border-white/10 rounded-[20px] md:rounded-[32px]"></motion.div>
                     <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="h-[60%] bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-[20px] md:rounded-[32px]"></motion.div>
                  </div>
                  <div className="flex-[1.5] flex flex-col gap-4 md:gap-8 translate-z-30">
                     <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="h-[70%] bg-[#0A0A0A] border border-white/10 rounded-[20px] md:rounded-[32px] p-6 flex flex-col justify-end shadow-2xl">
                        <div className="w-12 h-12 rounded-full bg-[#C9A84C]/30 mb-4"></div>
                        <div className="w-[60%] h-3 bg-white/20 rounded-full mb-3"></div>
                        <div className="w-[40%] h-3 bg-white/10 rounded-full"></div>
                     </motion.div>
                     <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1.5 }} className="h-[30%] bg-white/5 border border-white/10 rounded-[20px] md:rounded-[32px]"></motion.div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4 md:gap-8 translate-z-0 hidden md:flex">
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="h-[50%] bg-[#C9A84C]/5 border border-[#C9A84C]/10 rounded-[32px]"></motion.div>
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2.5 }} className="h-[50%] bg-white/5 border border-white/10 rounded-[32px]"></motion.div>
                  </div>
               </motion.div>
            </div>
         );
      case 'video':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#030303] flex items-center justify-center">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.15)_90deg,transparent_180deg)] opacity-60"></motion.div>
               <div className="absolute inset-0 border-y-[60px] md:border-y-[150px] border-[#000] z-10 flex flex-col justify-between p-4 md:p-8 opacity-40">
                  <div className="w-full flex justify-between"><div className="w-12 h-1 bg-white/20"></div><div className="w-12 h-1 bg-white/20"></div></div>
                  <div className="w-full flex justify-between"><div className="w-12 h-1 bg-white/20"></div><div className="w-12 h-1 bg-white/20"></div></div>
               </div>
               <div className="absolute w-[70%] h-[40%] md:h-[50%] border border-white/10 z-20 flex items-center justify-center">
                  <div className="w-8 md:w-12 h-8 md:h-12 border-t-[2px] border-l-[2px] border-[#C9A84C] absolute top-[-2px] left-[-2px]"></div>
                  <div className="w-8 md:w-12 h-8 md:h-12 border-t-[2px] border-r-[2px] border-[#C9A84C] absolute top-[-2px] right-[-2px]"></div>
                  <div className="w-8 md:w-12 h-8 md:h-12 border-b-[2px] border-l-[2px] border-[#C9A84C] absolute bottom-[-2px] left-[-2px]"></div>
                  <div className="w-8 md:w-12 h-8 md:h-12 border-b-[2px] border-r-[2px] border-[#C9A84C] absolute bottom-[-2px] right-[-2px]"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse absolute top-4 right-4 md:top-8 md:right-8"></div>
               </div>
            </div>
         );
      case 'seo':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#080808] flex items-center justify-center">
               <motion.div animate={{ x: ["-100vw", "100vw"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent skew-x-[45deg]"></motion.div>

               <div className="relative z-10 w-[80%] md:w-[60%] max-w-[700px] h-[60px] md:h-[80px] bg-[#0A0A0A] border border-white/20 rounded-full flex items-center px-8 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                  <span className="material-symbols-outlined text-[#C9A84C] text-[24px] md:text-[32px] mr-6">search</span>
                  <motion.div animate={{ width: ["0%", "80%", "80%", "0%"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="h-4 bg-white/20 rounded-full overflow-hidden"></motion.div>
               </div>

               <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
                  {[...Array(6)].map((_, i) => (
                     <motion.div key={i} animate={{ y: ["100vh", "-20vh"], opacity: [0, 0.4, 0] }} transition={{ duration: 8, repeat: Infinity, delay: i * 1.5, ease: "linear" }} className="absolute text-[#C9A84C] font-sans font-bold uppercase tracking-widest text-[16px]" style={{ left: `${15 + i * 14}%` }}>
                        + Ranking
                     </motion.div>
                  ))}
               </div>
            </div>
         );
      case 'content':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center perspective-[1200px]">
               <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="relative w-[300px] md:w-[600px] h-[300px] md:h-[600px] flex items-center justify-center">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                     <motion.div key={i} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.6 }} className="absolute w-[100px] md:w-[150px] h-[140px] md:h-[200px] bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-[16px] shadow-2xl flex flex-col p-4 md:p-6" style={{ transform: `rotate(${i * 60}deg) translateY(-200px)` }}>
                        <div className="w-full h-2 md:h-3 bg-white/20 rounded-full mb-3 md:mb-4"></div>
                        <div className="w-[70%] h-2 md:h-3 bg-white/10 rounded-full mb-6 md:mb-8"></div>
                        <div className="w-full h-full bg-[#0A0A0A] rounded-[8px] md:rounded-[12px]"></div>
                     </motion.div>
                  ))}
                  <div className="w-[120px] h-[120px] bg-[#C9A84C] rounded-full blur-[60px] opacity-40 animate-pulse"></div>
               </motion.div>
            </div>
         );
      case 'web':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#050505] flex items-center justify-center p-6 md:p-20">
               <div className="w-full max-w-[1000px] h-[50%] md:h-[70%] bg-[#0A0A0A] border border-white/10 rounded-[24px] md:rounded-[32px] shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
                  <div className="h-[40px] md:h-[60px] bg-[#0A0A0A] border-b border-white/5 flex items-center px-6 md:px-8 gap-3">
                     <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-red-500/50"></div><div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-yellow-500/50"></div><div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10">
                     <div className="w-full md:w-[25%] flex flex-row md:flex-col gap-4 md:gap-6">
                        <motion.div animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="flex-1 md:h-10 bg-white/5 rounded-[8px] md:rounded-[12px]"></motion.div>
                        <div className="flex-1 md:h-10 bg-white/5 rounded-[8px] md:rounded-[12px]"></div>
                        <div className="flex-1 md:h-10 bg-white/5 rounded-[8px] md:rounded-[12px] hidden md:block"></div>
                     </div>
                     <div className="flex-1 flex flex-col gap-6 md:gap-8">
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} className="h-24 md:h-48 bg-gradient-to-r from-[#C9A84C]/10 to-[#C9A84C]/30 rounded-[12px] md:rounded-[20px] border border-[#C9A84C]/20"></motion.div>
                        <div className="flex gap-6 md:gap-8 h-full">
                           <div className="flex-1 bg-white/5 rounded-[12px] md:rounded-[20px]"></div>
                           <div className="flex-1 bg-white/5 rounded-[12px] md:rounded-[20px]"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         );
      case 'tech':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#000] flex items-center justify-center">
               <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                     <pattern id="gridLarge" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridLarge)" />
               </svg>
               <div className="relative w-[300px] md:w-[600px] h-[300px] md:h-[600px]">
                  <motion.svg animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-60">
                     <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" strokeDasharray="2 4" />
                     <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.4" />
                     <motion.path animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity }} d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                  </motion.svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-[#0A0A0A] rounded-full shadow-[0_0_60px_#C9A84C] flex items-center justify-center border border-[#C9A84C]/50">
                     <span className="font-sans text-[10px] md:text-[14px] text-white font-bold tracking-widest uppercase">Systems</span>
                  </div>
               </div>
            </div>
         );
      case 'consulting':
         return (
            <div className="w-full h-full relative overflow-hidden bg-[#0A0805] flex flex-col items-center justify-center">
               <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.2),_transparent_60%)] pointer-events-none"></motion.div>

               <div className="relative z-10 w-[300px] md:w-[500px] h-[200px] md:h-[300px] border-b-[2px] border-white/10 flex items-end justify-center pb-0">
                  <div className="w-[150px] md:w-[200px] h-[4px] md:h-[6px] bg-[#C9A84C] shadow-[0_0_30px_#C9A84C] mb-10 md:mb-16 relative rounded-full">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-16 h-[80px] md:h-[120px] border-x-2 border-[#C9A84C]/20 -translate-y-full rounded-t-[8px]"></div>
                  </div>
               </div>

               <div className="absolute bottom-[15%] text-center opacity-60 px-6">
                  <p className="font-serif text-[24px] md:text-[36px] text-[#C9A84C] italic drop-shadow-lg">Every Great Strategy Begins With One Conversation.</p>
               </div>
            </div>
         );
      default:
         return null;
   }
}
