"use client";

import Link from "next/link";

export function LogoBanner() {
  const logos = [
    { name: "PUNE VOICES", url: "https://www.instagram.com/punevoices" },
    { name: "BUSHARE", url: "https://www.instagram.com/bushare" },
    { name: "UPSCALE", url: "https://www.instagram.com/upscale" },
    { name: "DR AUTO", url: "https://www.instagram.com/drauto" },
    { name: "COSMIC GANGES", url: "https://www.instagram.com/cosmicganges" },
    { name: "IMPORT EXPORT FEDERATION", url: "https://www.instagram.com/importexportfederation" },
    { name: "VAICHAL GROUP", url: "https://www.instagram.com/vaichalgroup" },
    { name: "SADGEE MASALE", url: "https://www.instagram.com/sadgeemasale" }
  ];

  return (
    <section className="py-16 luxury-border border-x-0 bg-[var(--color-surface-container-lowest)] overflow-hidden">
      <style>{`
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      `}</style>

      <div className="text-center mb-10">
        <span className="font-sans text-[12px] font-bold text-[var(--color-on-surface-variant)] uppercase tracking-[0.15em]">Trusted by ambitious brands</span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="marquee-track flex items-center gap-20 whitespace-nowrap min-w-max pr-20">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <Link
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[32px] font-serif font-bold text-white/50 hover:text-[#D4AF37] transition-colors duration-500 italic uppercase tracking-tighter shrink-0 cursor-pointer"
            >
              {logo.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
