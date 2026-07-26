"use client";

import Link from "next/link";

export function LogoBanner() {
  const logos = [
    { name: "UPSCALE", url: "https://www.instagram.com/salmanshaikh_upscale/?hl=en" },
    { name: "PUNE VOICES", url: "https://www.instagram.com/punevoices/?hl=en" },
    { name: "BUSHARE", url: "https://www.instagram.com/buybushare/?hl=en" },
    { name: "DR AUTO", url: "https://www.instagram.com/_the_dr_auto__/?hl=en" },
    { name: "COSMIC GANGES", url: "https://www.instagram.com/cosmicganges/?hl=en" },
    { name: "IMPORT EXPORT FEDERATION", url: "https://www.instagram.com/import.export.federation/?hl=en" },
    { name: "SHRI SAMARTH KRUPA GHEE", url: "https://www.instagram.com/shrisamarthakrupa/?hl=en" },
    { name: "EAT RIGHT UP", url: "https://www.instagram.com/eatrightup/?hl=en" },
    { name: "DELIGHT EVENTS", url: "https://www.instagram.com/delight_event_decor/?hl=en" },
    { name: "VAICHAL GROUP", url: "https://www.instagram.com/vaichalgroup/?hl=en" },
    { name: "AASHI FOREST SKOOL", url: "https://www.instagram.com/aashiforestskool/?hl=en" },
    { name: "SIRAA", url: "https://www.instagram.com/houseofsiraa/?hl=en" },
    { name: "SADGEE MASALE", url: "https://www.instagram.com/sadgee_masale/?hl=en" },
    { name: "SAVANIEE RAVINDRRA", url: "https://www.instagram.com/savanieeravindrra/?hl=en" },
    { name: "SONALEE KULKARNI", url: "https://www.instagram.com/sonalee18588/?hl=en" },
    { name: "HOTEL WADA", url: "https://www.instagram.com/hotelwada/?hl=en" },
    { name: "GLAMOWELL", url: "https://www.instagram.com/glamowellofficial/?hl=en" },
    { name: "VARAD VINAYAK", url: "#" },
    { name: "AKSHAY CATERING", url: "https://www.instagram.com/caterersakshay" },
    { name: "SMILESWORLD", url: "https://www.instagram.com/smilesworld10/?hl=en" },
    { name: "URBAN EDUCATION", url: "https://www.instagram.com/urban_education_official/?hl=en" },
    { name: "ZISTRAL ORAL CARE", url: "https://www.instagram.com/zistral_oral_care/?hl=en" }
  ];

  return (
    <section className="py-8 luxury-border border-x-0 bg-[var(--color-surface-container-lowest)] overflow-hidden">
      <style>{`
        .marquee-track { animation: marquee 100s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      `}</style>

      <div className="text-center mb-6">
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
              className="text-[32px] font-serif font-bold text-white/50 hover:text-[#C9A84C] transition-colors duration-500 italic uppercase tracking-tighter shrink-0 cursor-pointer"
            >
              {logo.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
