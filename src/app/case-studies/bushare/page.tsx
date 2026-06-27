"use client";

import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function BushareCaseStudy() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Horizontal scroll progress
    const progressContainer = document.createElement('div');
    progressContainer.style.position = 'fixed';
    progressContainer.style.top = '0';
    progressContainer.style.left = '0';
    progressContainer.style.height = '3px';
    progressContainer.style.background = 'linear-gradient(to right, #D4AF37, #f2ca50)';
    progressContainer.style.zIndex = '9999';
    progressContainer.style.width = '0%';
    document.body.appendChild(progressContainer);

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressContainer.style.width = scrolled + "%";
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (document.body.contains(progressContainer)) {
        document.body.removeChild(progressContainer);
      }
    };
  }, []);

  return (
    <main className="font-sans text-white selection:bg-[#D4AF37] selection:text-black bg-[#0B0B0B]">
      <NavBar />

      {/* Mobile-First Hero Section */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 hidden md:block">
          <img alt="Fashion Background" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_Nl2GGYG2Lbdw1Q6vA6TtTQw3a_vzXdbmOyAu_C3-pNYJyyGspwHCehDXemHaXY5uoBkRgOUSA1q5CRhIBSynvxQPra0uGAjyKVhjTlOK8lHZPlFXN8tec1mde6rKwaR2ajCL6JFdAXn5l5IXRRqNsiUZ5nkXpdE5SYs6tllG_GIlY5uga2RqhxP1ucKuLCz3TbDUiMLvuvfWDIlFBZc0FbTA29EcNxsNP8-QkqSi0Q2bzwe_qKzHgF4dkRQDKN4LQPodoP3ySc" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#0B0B0B]/80 to-[#0B0B0B]"></div>
        </div>
        
        <div className="relative z-10 px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="reveal-up reveal-active max-w-3xl">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 md:mb-6">CASE STUDY</p>
            <h1 className="font-serif text-[40px] md:text-[120px] leading-[1.0] font-bold text-white mb-6 md:mb-12 uppercase tracking-tight">Bushare</h1>
            <p className="font-sans text-[16px] md:text-[24px] leading-[1.6] text-white/70 mb-12 md:mb-24">A fashion brand that discovered great products are not enough without positioning, systems, and strategic growth.</p>
          </div>
          
          {/* Mobile-First 2x2 Premium Information Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 reveal-up reveal-active" style={{ transitionDelay: "200ms" }}>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">INDUSTRY</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">Fashion</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">LOCATION</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">India</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">ENGAGEMENT</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">14 Months</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">SERVICES</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">Brand Strategy, Social, Content</p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 01: THE BRAND */}
      <section className="py-16 md:py-32">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start reveal-up">
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 md:mb-6">01 · THE BRAND</p>
              <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white">A niche product. No audience. No system.</h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-16 relative">
              <div className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white/60 space-y-6">
                <p>Bushare sells Korean-inspired clothing to young, urban Indians aged 18–32. The aesthetic was strong. The product was real. But when they came to us, almost nobody knew they existed.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-24 reveal-up">
            <img 
              className="w-full aspect-video object-cover rounded-[16px] grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_Nl2GGYG2Lbdw1Q6vA6TtTQw3a_vzXdbmOyAu_C3-pNYJyyGspwHCehDXemHaXY5uoBkRgOUSA1q5CRhIBSynvxQPra0uGAjyKVhjTlOK8lHZPlFXN8tec1mde6rKwaR2ajCL6JFdAXn5l5IXRRqNsiUZ5nkXpdE5SYs6tllG_GIlY5uga2RqhxP1ucKuLCz3TbDUiMLvuvfWDIlFBZc0FbTA29EcNxsNP8-QkqSi0Q2bzwe_qKzHgF4dkRQDKN4LQPodoP3ySc" 
              alt="Fashion Lifestyle" 
            />
          </div>
        </div>
      </section>

      {/* Section 02: THE PROBLEM */}
      <section className="py-16 md:py-32 bg-[#080808] border-y border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 text-center md:text-left">02 · THE PROBLEM</p>
          <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white mb-12 md:mb-24 text-center md:text-left">Good product. Zero infrastructure.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 reveal-up">
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">01</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">No Identity</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">Inconsistent visuals, no clear positioning, making the brand entirely forgettable.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">02</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">Weak Funnel</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">Website converting at an abysmal 0.6% with 6-second mobile load times.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">03</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">Failed Ads</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">No tracking, no audience strategy, and poor creatives led to completely wasted ad spend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: WHAT WE DID */}
      <section className="py-16 md:py-32">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="mb-12 md:mb-24 reveal-up">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4">03 · WHAT WE DID</p>
            <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white mb-6">Brand first. Scale second.</h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white/60 max-w-2xl">Most agencies would have turned on ads immediately. We didn't. We fixed the foundation first.</p>
          </div>
          
          <div className="max-w-3xl reveal-up">
            {/* Timeline Vertical Flow */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Months 1–2</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Audience research, brand positioning, and a complete visual identity overhaul.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Months 3–5</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Shopify rebuild, advanced SEO setup, and improving mobile speed from 6.2s → 2.1s.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Months 4–8</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Content system deployment with 8–10 high-quality Reels per month across 3 core pillars.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Months 6–14</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Meta campaigns launched and actively scaled, achieving a massive 3.8× blended ROAS.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6 border-transparent">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Throughout</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Email capture, direct WhatsApp broadcasts, and automated abandoned cart recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: THE RESULTS */}
      <section className="py-16 md:py-32 bg-[#080808] border-y border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 text-center">04 · THE RESULTS</p>
          <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white text-center mb-12 md:mb-24">14 months. One brand. Measurable growth.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 reveal-up">
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-[#D4AF37] mb-2 leading-none">3.4×</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Revenue Growth</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">+218%</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Organic Traffic</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">3.8×</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Paid ROAS</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">11.4K</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">New Followers</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">6.2K+</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Email Subs</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-[#D4AF37] mb-2 leading-none">2.9%</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Conversion Rate</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">22%</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Cart Recovery</p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-[32px] md:text-[56px] text-white mb-2 leading-none">38</p>
              <p className="font-sans text-[10px] tracking-[0.1em] text-white/50 uppercase">Page-1 Keywords</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: THE SHIFT (Business Impact) */}
      <section className="py-16 md:py-32">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-3xl mx-auto w-full text-center">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-6 md:mb-12">05 · THE SHIFT</p>
          <div className="reveal-up">
            <p className="font-sans text-[18px] md:text-[24px] leading-[1.6] text-white/80">
              Bushare went from unpredictable revenue to a self-running growth system. Organic search, social content, paid ads, and email automation now work together — each layer feeding the next. The brand has an identity. Customers come back without being chased.
            </p>
          </div>
        </div>
      </section>

      {/* Section 06: Premium Testimonial Card */}
      <section className="py-16 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1000px] mx-auto w-full">
          <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-16 relative overflow-hidden reveal-up w-full">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
              <span className="material-symbols-outlined text-[120px] md:text-[200px]">format_quote</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <blockquote className="font-serif text-[24px] md:text-[36px] italic leading-[1.4] text-white mb-8 md:mb-12 max-w-2xl">
                "I thought good clothes would sell themselves.<br/><br className="hidden md:block"/> They don't.<br/><br className="hidden md:block"/> Not without the right brand and systems."
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-[#D4AF37] mb-4"></div>
                <p className="font-sans font-bold text-[16px] text-white">Founder</p>
                <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mt-1">Bushare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First CTA Section */}
      <section className="py-24 md:py-40 relative overflow-hidden border-t border-white/5 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        </div>
        <div className="relative z-10 px-5 md:px-[80px] max-w-none md:max-w-2xl mx-auto w-full">
          <h2 className="font-serif text-[36px] md:text-[64px] leading-[1.1] text-white mb-10 md:mb-16">
            Ready To Build Your Next Growth Story?
          </h2>
          <Link href="/contact">
            <button className="bg-[#D4AF37] text-black font-sans text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] px-8 md:px-12 py-4 md:py-5 rounded-[16px] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform active:scale-95">
              Book A Call
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
