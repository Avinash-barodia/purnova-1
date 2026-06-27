"use client";

import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function PuneVoicesCaseStudy() {
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
          <img alt="Podcast Studio Background" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRUyLdPmKrugMiMuvKxmbNCw7KopALsDUNApMBe1PDcrpX3NaP0_QgGyaW53wLKkpn279bgNSkEsDu-O8t0dLHqlVX2KH4-19gRI7l_A9Ahthzv9CZNZfCoXhnOZsRWrpcX8pupHqYC-U2EQpiqsizGINUhCcRHWJaL2OLEf8tOuFzeENzrdkuCcVYDM3Z00y9sTSn7Avpad2Gqy5M4bA7DUx5OZaoaWIUuUDTTHbqQiiAQSUaDVX_bhlCUn4fpdwCXjlS09vb9Yw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#0B0B0B]/80 to-[#0B0B0B]"></div>
        </div>
        
        <div className="relative z-10 px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="reveal-up reveal-active max-w-3xl">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 md:mb-6">CASE STUDY</p>
            <h1 className="font-serif text-[40px] md:text-[120px] leading-[1.0] font-bold text-white mb-6 md:mb-12 uppercase tracking-tight">Pune<br className="hidden md:block"/> Voices</h1>
            <p className="font-sans text-[16px] md:text-[24px] leading-[1.6] text-white/70 mb-12 md:mb-24">A city had stories. It just needed someone to tell them the right way.</p>
          </div>
          
          {/* Mobile-First 2x2 Premium Information Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 reveal-up reveal-active" style={{ transitionDelay: "200ms" }}>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">INDUSTRY</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">Digital Media</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">LOCATION</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">Pune, India</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">ENGAGEMENT</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">2+ Years</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 rounded-[12px] md:rounded-[16px]">
              <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">SERVICES</p>
              <p className="font-sans text-[14px] md:text-[16px] text-white">Brand & Content</p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 01: OVERVIEW */}
      <section className="py-16 md:py-32">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start reveal-up">
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 md:mb-6">01 · OVERVIEW</p>
              <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white">Pune Has A Problem. Now It Has A Podcast.</h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-16 relative">
              <div className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white/60 space-y-6">
                <p>The cultural capital of Maharashtra had thousands of untold stories hidden in its colonial-era wadas and modern tech parks. Pune Voices was born as a passion project to bridge the gap between historical heritage and futuristic ambition.</p>
                <p>Purnova was brought in to transform this raw passion into a structured digital media powerhouse that could command the attention of urban professionals and global diaspora alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: CHALLENGE */}
      <section className="py-16 md:py-32 bg-[#080808] border-y border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4 text-center md:text-left">02 · CHALLENGE</p>
          <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white mb-12 md:mb-24 text-center md:text-left">Good Content. Wrong Direction.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-up">
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">01</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">No Defined Niche</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">The content was too broad, attempting to cater to everyone and reaching no one effectively.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">02</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">Invisible Space</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">Podcast platforms were saturated. Standing out required more than just good audio.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">03</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">No Social System</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">Content was being made in isolation, with no systematic repurposing for social growth.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-[16px] border border-white/5">
              <p className="font-serif text-[32px] text-[#D4AF37]/30 mb-4">04</p>
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-wider text-white mb-3">No Personal Brand</h3>
              <p className="font-sans text-[16px] leading-[1.6] text-white/60">The host was hidden behind the mic, missing out on the human-to-human connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: STRATEGY */}
      <section className="py-16 md:py-32">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <div className="mb-12 md:mb-24 reveal-up">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4">03 · STRATEGY</p>
            <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white mb-6">Three Phases. One Clear Build.</h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white/60 max-w-2xl">Architecting a digital ecosystem where every minute of audio fuels hours of engagement.</p>
          </div>
          
          <div className="max-w-3xl reveal-up">
            {/* Timeline Vertical Flow */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Find Niche</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Audience profiling and category design to dominate the local intellectual space.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Build Brand</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Visual identity development that blends historical Pune with modern luxury design.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Grow Audience</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Aggressive short-form content strategy and data-driven ad placement.</p>
            </div>
            <div className="border-b border-white/10 pb-6 mb-6 border-transparent">
              <h3 className="font-sans font-bold text-[18px] text-white mb-2 uppercase tracking-wide"><span className="text-[#D4AF37] mr-3">●</span> Build Host</h3>
              <p className="font-sans text-[16px] text-white/60 pl-6">Authority building for the host via LinkedIn and editorial thought leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: BUSINESS IMPACT */}
      <section className="py-16 md:py-32 bg-[#080808] border-y border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-3xl mx-auto w-full text-center">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-6 md:mb-12">04 · BUSINESS IMPACT</p>
          <div className="reveal-up">
            <h2 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-white mb-8">Beyond The Numbers</h2>
            <p className="font-sans text-[18px] md:text-[24px] leading-[1.6] text-white/80">
              The transformation wasn't just digital—it was institutional. Pune Voices transitioned from a hobbyist's platform to a genuine media entity that local government bodies and corporate giants now seek to collaborate with.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05: Premium Testimonial Card */}
      <section className="py-16 md:py-32 border-b border-white/5">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1000px] mx-auto w-full">
          <div className="bg-[#111] border border-white/5 rounded-[16px] p-6 md:p-16 relative overflow-hidden reveal-up w-full">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
              <span className="material-symbols-outlined text-[120px] md:text-[200px]">format_quote</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <blockquote className="font-serif text-[24px] md:text-[36px] italic leading-[1.4] text-white mb-8 md:mb-12 max-w-2xl">
                "We had energy and ideas, but no real direction. Purnova helped us understand what Pune Voices actually was — and what it could be.<br/><br className="hidden md:block"/> Once that clarity landed, everything moved faster. Our reach grew, our audience engaged genuinely, and people in Pune started recognising us by name."
              </blockquote>
              
              <div className="flex flex-col items-center">
                <img alt="Rohit Kulkarni" className="w-16 h-16 object-cover rounded-full mb-4 border border-[#D4AF37]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHixsZPZu42hSX1Qq30YjdtNCuAzyK1gS6HsaCvyYo8HXgK2tKLGoH0qHbICGsFlUbZAVQYHcHC15SwtFfMp0E7WMOthWJ56xN6JOeWViXskQioI4_HC_M_8XkVnQo4Ujzo9Xa3UrnECSP2Er8i3BleL3hffwXoorBuHTh0AciHGo5MAQpxY8fCpsdfWnInG-kDh10oSQy4xcupai8s2kmbMioWO50KP0DN5hfuJnC76d_h9G6OzuzBdVael8RLZNBhQ3ffalUwHE" />
                <p className="font-sans font-bold text-[16px] text-white">Rohit Kulkarni</p>
                <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mt-1">Founder & Host, Pune Voices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: SELECTED WORK GALLERY */}
      <section className="py-16 md:py-32 bg-[#080808]">
        <div className="px-5 md:px-[80px] max-w-none md:max-w-[1440px] mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-8 md:mb-16 text-center md:text-left">06 · SELECTED WORK</p>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8 reveal-up">
            <div className="w-full md:col-span-8 aspect-video border border-white/5 overflow-hidden rounded-[16px]">
              <img alt="Social Media Templates" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGO59det4Y0H1_Dm-TehOZralzlG5OMAcRJ2p3tnrHhtNB3C8xkwVSa8cndWKNFr0kqngxRpsveaEn6qYE4QYREi3xKDJiN4JXIUnhrUh3sxxVBcW0Np6sL-aWq_7WkK2yhyM05-eWpVEB6Qs9kEqbRukdpDNM7wT50LvSpKVENnPB5uiLFqlUxW7RC0mS_yw9r0ZNspzgRPA3LrrN-8WjwcZ3ICV3OBXKeNA9g5Xx3Efydmr_jl6mIwnm2U1O9GNsgKiOkhxgEm4" />
            </div>
            <div className="w-full md:col-span-4 aspect-video md:aspect-square border border-white/5 overflow-hidden rounded-[16px]">
              <img alt="Cover Design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0CAJWM998JgUQXJTJ8h0IzM3kiQqCtRXmNSWDB03f_DtmbKP2ppmIkD-_HUqfTCNMKiU02DHcgRMA-cwSy0VSXxWIVLANPI5kOpfBg8J0y6zwPos19ONiIInLOaFfGZEJb6tz_QLmD29gWSeoFkZkHpIC905A6-Wh2hgwX2J9J7cFavXtcWlsrILP_unHnjQn6ydntOC4VooxyZGA18-_9NQdS1uamrrsbH_qR7nEE4SKklU5A-Ps1O9o5WouH_Ur5qMHWPPJJ4Q" />
            </div>
            <div className="w-full md:col-span-4 aspect-video md:aspect-[4/5] border border-white/5 overflow-hidden rounded-[16px]">
              <img alt="Instagram Reels Grid" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Qx-OPmwySvnbSJpXGwZUTnCPDIVGUqMxmWr4mZUGiSl7PJvwRGU2A9OZVS4paUc3YqZbGd88GgxpPtz_SbFKQKpCnjHANIZy0im-eFGV30KEhTTBW1wo6O7Gxv1rU_1ElwpZx-Z8L7pCD-JV5oWTN0t-tX7dS3UYR0sJ82XK15cn4FUE0VMv6BNqq-8UVGicwOWaE2JXw5eri-oAKn_pdTkp3zhtjfLWkEVuOF61wkOO3_SdtYbO-WQWABVnVPGhSWZnehwysm4" />
            </div>
            <div className="w-full md:col-span-8 aspect-video md:aspect-[16/7] border border-white/5 overflow-hidden rounded-[16px]">
              <img alt="Physical Studio environment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWP7t3OPz1VJ1nbCzeXyJh-9g9iqB8Kele_oj0D2gtDngOXoOVzW_sc0iboNoMRFDVBMTMGfpHpJBkIbvm-SwXX-AsihOowycIOicUZOACSuOeERkRlcWDYDAZWQ-1vF71Wu65OnUHfN1uBAiiTdlwmS9WQ60kfizqghEGDETfDIEmVwu0eGlLtiK3Jd3z-jG3S0YVwylhdHa9cTyCv2REt37Al6VgtuL6vfCqoe1ACzYreLBNaXksxjDQ-To0UB-komeQaLiiPQ8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <nav className="border-y border-white/5 py-16 bg-[#0B0B0B]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[80px] grid grid-cols-2 text-center">
          <Link className="group px-4 md:px-8 border-r border-white/5 flex flex-col items-center hover:text-white transition-colors" href="/case-studies/bushare">
            <span className="text-white/40 text-[10px] mb-2 uppercase tracking-[0.2em]">Previous</span>
            <span className="font-serif text-[16px] md:text-[24px]">Bushare</span>
          </Link>
          <Link className="group px-4 md:px-8 flex flex-col items-center hover:text-white transition-colors" href="/case-studies">
            <span className="text-white/40 text-[10px] mb-2 uppercase tracking-[0.2em]">Next</span>
            <span className="font-serif text-[16px] md:text-[24px]">All Work</span>
          </Link>
        </div>
      </nav>

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
