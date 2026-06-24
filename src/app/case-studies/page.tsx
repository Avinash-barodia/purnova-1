"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  {
    id: "bushare",
    title: "Bushare",
    industry: "Fashion / E-commerce",
    summary: "How a zero-visibility clothing brand became a recognised Korean fashion label.",
    insight: "3.4× Revenue Growth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_Nl2GGYG2Lbdw1Q6vA6TtTQw3a_vzXdbmOyAu_C3-pNYJyyGspwHCehDXemHaXY5uoBkRgOUSA1q5CRhIBSynvxQPra0uGAjyKVhjTlOK8lHZPlFXN8tec1mde6rKwaR2ajCL6JFdAXn5l5IXRRqNsiUZ5nkXpdE5SYs6tllG_GIlY5uga2RqhxP1ucKuLCz3TbDUiMLvuvfWDIlFBZc0FbTA29EcNxsNP8-QkqSi0Q2bzwe_qKzHgF4dkRQDKN4LQPodoP3ySc",
    href: "/case-studies/bushare"
  },
  {
    id: "pune-voices",
    title: "Pune Voices",
    industry: "Podcast & Media",
    summary: "Transforming a local podcast into a recognised media brand.",
    insight: "300%+ Social Reach Growth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhMIWLhc8QVVBLw9nW83qwUZBWEuWcjcwagtVxNN_KOi5nPYWLdp1yMQt9Xo4aOr3musUpJjIxE2PWNS1BhAZ1srCIGTJwgeZDwia0vPmdSsujvIMkz8_R_lZL7hzgEINnVvKzlsTSjdCVszIjOCdOZTNrs62JuTRpcxzBTECopMpXQnOKFk5kbJA3xJJ8oVFKwgHmweh2jt07b_5EiiQ_ypBAp2QkgZCy_oBvqmux2jQu60Zu4O3KK8PucjAV9r9fuE2vmGCkPaw",
    href: "/case-studies/pune-voices"
  },
  {
    id: "bonvie",
    title: "Bonvie",
    industry: "Brand Strategy",
    summary: "Elevating a wellness brand to premium market leadership.",
    insight: "Complete Brand Repositioning",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyXTd7GU3Ap1hK3kudmwJ4_Ja0yqDOXh7C-8jGjJEXRHNAatvxYL7ukvOrxeUzyOxXNIJbk9n0xK3kyrhr96E2Q5ROEK0xbFAlUVMOEbM2AnTLtWBw-lpCOYEpR30H9yldy3CdJq_TGD_v4SW_YyzqPrAxLORSk_llf2It8amk1J6nDqAi-vrbBaYa8JgaNdHw7TGv68B9VfOM7JjrUcn1_1MYNZKpW10XTBKyZTqZAU7mxlFKFvlQGQNCkHZ9mlwdzar6XcY_CcU",
    href: "#"
  },
  {
    id: "second-cup",
    title: "Second Cup Coffee",
    industry: "Packaging Design",
    summary: "Crafting a visual identity that tastes as good as it looks.",
    insight: "Award-Winning Packaging",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUrTEAUuuU77ae8a40LDvnx34A8VIv-KWVpJiyN65QWdthF_2yLyoukhey6cj5T8DGy7xDohPPYmTEzuQmEsEKFW7Q_VYYchhYtQYuChp815oem4VAeGmtTufKJ_gfTJ7R-wECl_wEvk94g-m9_7I3lzQZTGFV0944By5FcqO6C_nlpLSXshRl3KQ-jnJlqRsj8rpS8Zk7fHSpKvTlXn_EQahniVPzlWSiOX6A4MBm7tWjcg-5dwsvZd8APpVTuNKRC4hh4luYNzQ",
    href: "#"
  },
  {
    id: "flaneur",
    title: "Flaneur",
    industry: "Digital Growth",
    summary: "Scaling an e-commerce fashion powerhouse.",
    insight: "4x Revenue Growth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_Nl2GGYG2Lbdw1Q6vA6TtTQw3a_vzXdbmOyAu_C3-pNYJyyGspwHCehDXemHaXY5uoBkRgOUSA1q5CRhIBSynvxQPra0uGAjyKVhjTlOK8lHZPlFXN8tec1mde6rKwaR2ajCL6JFdAXn5l5IXRRqNsiUZ5nkXpdE5SYs6tllG_GIlY5uga2RqhxP1ucKuLCz3TbDUiMLvuvfWDIlFBZc0FbTA29EcNxsNP8-QkqSi0Q2bzwe_qKzHgF4dkRQDKN4LQPodoP3ySc",
    href: "#"
  },
  {
    id: "medivora",
    title: "Medivora",
    industry: "Website",
    summary: "A seamless digital experience for modern healthcare.",
    insight: "200% Conversion Lift",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo5aZcJIvDW4fF2qcIEfYaReckLR1OslCtia9cJ_n-DQURXtq_BMcgLoTBKZNc8rGVdiErNFIZ8p_Vmze4TQflzhsh_RGmp3xVYKNQ2bzHzit_B-2ZNwPqyuobI4WC-TuerTLmBiplrAKQ2EfqII3Eococ4dPJ9Nj_qJZpuZtDT31o84zniptJzwK2y-ZfkaQRQ_KRnP2u9ix8LdoZywHf45uDSmn-iLX1mM3XzNQzXeLgV_Y5eXaOyfcelXMkfK6oHxKVxL1SEYk",
    href: "#"
  },
  {
    id: "softbricks",
    title: "SoftBricks Tech",
    industry: "Content",
    summary: "Simplifying complex software through strategic content.",
    insight: "Enterprise Audience Growth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpIBbZTf9wnJR8I3IGPnv_ZJPVsctQPvirNotmP9Pyy3g8Ia27RAbWnDA-4KFZykDNp4dXL77vO3MmAvK7baojfeXpUxVQGyrXZkdvWnS9V9VjCDr6lRnMCrTx9DAjYW76aAReZBymDweTLor_ssrjLTj1cIS5K8Ysra4SxQ3A9QJAb7YZVBaV3DofQQ5tJVtG2qXiPY6ChbmC7rWA80SqRMPXmqhZKBlSHyIwV_GITeoBlFN_-RQGd65a9gWZFSOKO2P1en57hjY",
    href: "#"
  },
  {
    id: "baadshah",
    title: "Baadshah",
    industry: "Personal Branding",
    summary: "Establishing executive presence and thought leadership.",
    insight: "Industry Authority Built",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGO59det4Y0H1_Dm-TehOZralzlG5OMAcRJ2p3tnrHhtNB3C8xkwVSa8cndWKNFr0kqngxRpsveaEn6qYE4QYREi3xKDJiN4JXIUnhrUh3sxxVBcW0Np6sL-aWq_7WkK2yhyM05-eWpVEB6Qs9kEqbRukdpDNM7wT50LvSpKVENnPB5uiLFqlUxW7RC0mS_yw9r0ZNspzgRPA3LrrN-8WjwcZ3ICV3OBXKeNA9g5Xx3Efydmr_jl6mIwnm2U1O9GNsgKiOkhxgEm4",
    href: "#"
  }
];

const filters = ["All", "Branding", "Content", "Social Media", "Packaging", "Website", "Personal Branding", "Brand Strategy", "Podcast & Media", "Digital Growth", "Fashion", "E-commerce"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [tappedCard, setTappedCard] = useState<string | null>(null);
  const router = useRouter();

  const filteredStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry.includes(activeFilter));

  const { scrollY } = useScroll();
  const scatterProgress = useTransform(scrollY, [200, 700], [0, 1]);
  const linesOpacity = useTransform(scrollY, [200, 450, 700], [0, 0.5, 0]);
  const containerOpacity = useTransform(scrollY, [200, 500], [1, 0]);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] text-white">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-10 md:pt-48 md:pb-24 px-4 md:px-20 overflow-hidden border-b border-white/5">
        {/* Animated Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.015] md:opacity-[0.03] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        ></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 text-center flex flex-col items-center">
          <h1 className="font-serif text-[48px] md:text-[96px] lg:text-[120px] leading-[1.0] font-bold text-white mb-4 md:mb-6 uppercase tracking-tight max-w-[90%] md:max-w-none mx-auto">
            Case Studies
          </h1>
          <p className="font-sans text-[16px] md:text-[22px] leading-relaxed text-white/60 max-w-3xl mb-12 md:mb-20 px-4 md:px-0">
            Real businesses. Real transformation. Explore how strategy, branding, content, and digital systems helped ambitious brands build stronger market positions.
          </p>

          {/* Stats Blocks (Stacked/Inline on Mobile) */}
          <div className="grid grid-cols-3 gap-2 md:gap-12 w-full max-w-4xl border-t border-white/10 pt-8 md:pt-16">
            <div className="flex flex-col items-center bg-[#111] md:bg-transparent py-4 md:py-0 rounded-[12px] md:rounded-none">
              <span className="font-serif text-[28px] md:text-[48px] text-[#D4AF37] mb-1 md:mb-2">40+</span>
              <span className="font-sans text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-white/50">Projects</span>
            </div>
            <div className="flex flex-col items-center bg-[#111] md:bg-transparent py-4 md:py-0 rounded-[12px] md:rounded-none">
              <span className="font-serif text-[28px] md:text-[48px] text-[#D4AF37] mb-1 md:mb-2">12</span>
              <span className="font-sans text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-white/50">Industries</span>
            </div>
            <div className="flex flex-col items-center bg-[#111] md:bg-transparent py-4 md:py-0 rounded-[12px] md:rounded-none">
              <span className="font-serif text-[28px] md:text-[48px] text-[#D4AF37] mb-1 md:mb-2">5+</span>
              <span className="font-sans text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-white/50">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section (Sticky Nav Area) */}
      <section className="sticky top-[72px] md:top-[88px] z-40 w-full pointer-events-none">
        
        {/* MOBILE (Standard Horizontal Scroll) */}
        <div className="xl:hidden w-full bg-[#0B0B0B]/5 backdrop-blur-3xl supports-[backdrop-filter]:bg-[#0B0B0B]/5 border-b border-white/10 pointer-events-auto py-4">
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory items-center gap-3 px-4 py-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`snap-center shrink-0 h-[48px] px-6 rounded-full font-sans text-[12px] tracking-[0.1em] uppercase transition-all duration-300 border ${
                  activeFilter === filter 
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' 
                    : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP (Framer Motion Scatter) */}
        <div className="hidden xl:block w-full relative h-[150px] max-w-[1440px] mx-auto pointer-events-none">
          {/* Glass Background that fades out */}
          <motion.div 
            className="absolute inset-0 w-[100vw] left-1/2 -translate-x-1/2 bg-[#0B0B0B]/5 backdrop-blur-3xl supports-[backdrop-filter]:bg-[#0B0B0B]/5 border-b border-white/10 pointer-events-none"
            style={{ opacity: containerOpacity }}
          />

          {/* SVG Connection Lines */}
          <motion.svg className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none overflow-visible" style={{ opacity: linesOpacity }}>
            {filters.map((filter, i) => {
              const col = i % 6;
              const row = Math.floor(i / 6);
              const initialX = (col - 2.5) * 190;
              const initialY = (row - 0.5) * 60;

              const isLeft = i % 2 === 0;
              const verticalIndex = Math.floor(i / 2);
              const finalX = isLeft ? -560 : 560;
              const finalY = verticalIndex * 70 + 150;

              const x = useTransform(scatterProgress, [0, 1], [initialX, finalX]);
              const y = useTransform(scatterProgress, [0, 1], [initialY, finalY]);

              return (
                <motion.line key={`line-${i}`} x1={initialX} y1={initialY} x2={x} y2={y} stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
              )
            })}
          </motion.svg>

          {/* Scattered Pills */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {filters.map((filter, i) => {
              const col = i % 6;
              const row = Math.floor(i / 6);
              const initialX = (col - 2.5) * 190;
              const initialY = (row - 0.5) * 60;

              const isLeft = i % 2 === 0;
              const verticalIndex = Math.floor(i / 2);
              const finalX = isLeft ? -560 : 560;
              const finalY = verticalIndex * 70 + 150;

              const x = useTransform(scatterProgress, [0, 1], [initialX, finalX]);
              const y = useTransform(scatterProgress, [0, 1], [initialY, finalY]);

              const isActive = activeFilter === filter;
              const inactiveOpacity = useTransform(scatterProgress, [0, 1], [1, 0.4]);
              const opacity = isActive ? 1 : inactiveOpacity;

              return (
                <div key={filter} className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
                  <motion.button
                    onClick={() => setActiveFilter(filter)}
                    style={{ x, y, opacity }}
                    className={`pointer-events-auto whitespace-nowrap px-6 h-[48px] rounded-full font-sans text-[12px] tracking-[0.1em] uppercase transition-all duration-300 border ${
                      isActive 
                        ? 'border-[#D4AF37] text-[#D4AF37] bg-[#111] shadow-[0_0_20px_rgba(212,175,55,0.15)]' 
                        : 'border-white/10 text-white hover:border-white/30 bg-[#111]'
                    }`}
                  >
                    {filter}
                  </motion.button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-20 xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {filteredStudies.map((study) => {
              const isTapped = tappedCard === study.id;
              
              return (
                <div 
                  key={study.id} 
                  className="group relative block w-full h-full cursor-pointer"
                  onClick={(e) => {
                    if (window.innerWidth < 768) {
                      if (!isTapped) {
                        e.preventDefault();
                        setTappedCard(study.id);
                      } else {
                        router.push(study.href);
                      }
                    } else {
                      router.push(study.href);
                    }
                  }}
                >
                  {/* Floating Insight Panel */}
                  <div className="hidden md:block absolute -top-4 -right-4 z-20 bg-[#111] border border-[#D4AF37]/30 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none shadow-2xl">
                    <span className="font-sans text-[11px] tracking-[0.1em] text-[#D4AF37] uppercase whitespace-nowrap">
                      {study.insight}
                    </span>
                  </div>

                  {/* Card Container */}
                  <div className={`bg-[#111111] rounded-[16px] md:rounded-[20px] overflow-hidden border transition-all duration-700 h-full flex flex-col shadow-lg relative ${isTapped ? 'border-[#D4AF37]/50 scale-[1.02] shadow-[#D4AF37]/10' : 'border-white/5'} md:group-hover:border-[#D4AF37]/50 md:group-hover:-translate-y-2 md:group-hover:shadow-[#D4AF37]/10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#0B0B0B] before:z-10 before:opacity-0 md:group-hover:before:opacity-100 before:transition-opacity before:duration-700`}>
                    
                    <div className="aspect-[16/10] w-full overflow-hidden relative bg-[#1A1A1A]">
                      <div className={`absolute inset-0 bg-[#0B0B0B]/20 z-10 transition-colors duration-700 ${isTapped ? 'bg-transparent' : ''} md:group-hover:bg-transparent`}></div>
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className={`w-full h-full object-cover filter transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${isTapped ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-70'} md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110`}
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 bg-[#111111]">
                      <div className="mb-auto">
                        <span className="font-sans text-[10px] md:text-[11px] tracking-[0.2em] text-[#D4AF37] uppercase block mb-3 md:mb-4">
                          {study.industry}
                        </span>
                        <h3 className="font-serif text-[24px] md:text-[28px] leading-tight text-white mb-3 md:mb-4">
                          {study.title}
                        </h3>

                        <div className="md:hidden inline-flex items-center border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-1.5 rounded-md mb-4 w-fit">
                          <span className="font-sans text-[10px] tracking-[0.1em] text-[#D4AF37] uppercase">{study.insight}</span>
                        </div>
                        
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isTapped ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:grid-rows-[0fr]'} md:group-hover:grid-rows-[1fr]`}>
                          <div className="overflow-hidden">
                            <p className={`font-sans text-[14px] md:text-[15px] leading-relaxed text-white/60 pt-2 transition-opacity duration-500 delay-100 ${isTapped ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}>
                              {study.summary}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 md:pt-8 mt-2 md:mt-4 border-t border-white/5 flex items-center justify-between">
                        <span className={`font-sans text-[11px] md:text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 ${isTapped ? 'text-[#D4AF37]' : 'text-white/80'} md:group-hover:text-[#D4AF37]`}>
                          View Case Study
                        </span>
                        <span className={`material-symbols-outlined transition-all duration-300 ${isTapped ? 'text-[#D4AF37] translate-x-2' : 'text-white/40'} md:group-hover:text-[#D4AF37] md:group-hover:translate-x-2`}>
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agency Philosophy Section */}
      <section className="py-20 md:py-32 border-t border-white/5 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="text-center lg:text-left order-1 lg:order-none">
              <h2 className="font-serif text-[32px] md:text-[64px] leading-[1.1] text-white mb-6 md:mb-8">
                Growth Is Never Accidental.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] leading-[1.8] text-white/60 max-w-lg mx-auto lg:mx-0">
                The strongest brands are built through clarity, consistency, and strategic execution. Every case study here reflects a long-term commitment to creating market leaders, not short-term campaigns.
              </p>
            </div>
            <div className="relative aspect-square w-[280px] md:w-full lg:aspect-auto lg:h-[600px] flex items-center justify-center mx-auto order-2 lg:order-none">
              <div className="absolute w-[80%] h-[80%] border border-[#D4AF37]/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[60%] h-[60%] border border-[#D4AF37]/40 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute w-[40%] h-[40%] border-t border-b border-[#D4AF37] rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-transparent to-[#080808] z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 md:py-40 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#D4AF37]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-4 md:px-20 relative z-10 text-center">
          <h2 className="font-serif text-[36px] md:text-[80px] leading-[1.1] text-white mb-4 md:mb-6">
            Ready To Become The<br className="hidden md:block"/> Next Case Study?
          </h2>
          <p className="font-sans text-[16px] md:text-[22px] text-[#D4AF37] mb-12 md:mb-16 tracking-wide">
            Let's build a brand people remember.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-[400px] mx-auto sm:max-w-none">
              <Link href="/contact">
                <button className="bg-[#D4AF37] text-black font-sans text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] px-8 md:px-12 py-4 md:py-5 rounded-[16px] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform active:scale-95">
                  Book A Call
                </button>
              </Link>
            <Link href="/services">
              <button className="bg-transparent border border-white/20 text-white font-sans text-[12px] font-bold uppercase tracking-[0.2em] px-10 h-[52px] md:py-5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 w-full sm:w-auto rounded-[16px]">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
