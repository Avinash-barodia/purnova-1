"use client";

import Link from "next/link";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven acquisition strategies designed to maximize ROI through precise targeting and algorithmic optimization.",
    icon: "insights",
  },
  {
    title: "Brand Strategy",
    description: "Architecting distinctive brand identities that command attention and build long-term equity in crowded markets.",
    icon: "diamond",
  },
  {
    title: "Social Media",
    description: "Curating high-end content and community engagement that transforms followers into loyal brand advocates.",
    icon: "public",
  },
  {
    title: "SEO & Content",
    description: "Dominating search landscapes with editorial-grade content and technical excellence that lasts.",
    icon: "search",
  },
  {
    title: "Paid Ads",
    description: "High-stakes advertising management across Meta  and Google with a focus on conversion and scale.",
    icon: "ads_click",
  },
  {
    title: "Web Design",
    description: "Crafting bespoke digital experiences that blend aesthetic sophistication with seamless functional precision.",
    icon: "web",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-32 px-6 md:px-[80px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
        <div className="max-w-2xl">
          <span className="font-sans text-[12px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em] mb-4 block">Our Expertise</span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-semibold mb-6 leading-tight md:leading-[56px]">Mastering the Art of Digital Dominance</h2>
        </div>
        <div className="pb-2">
          <Link href="/services" className="group flex items-center gap-4 font-sans text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors duration-300">
            Learn More
            <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {services.map((service, index) => (
          <div key={index} className="luxury-card luxury-border p-6 md:p-8 bg-[var(--color-surface-container-low)] flex flex-col h-full min-h-[250px] md:min-h-[300px]">
            <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl md:text-4xl mb-4 md:mb-6">{service.icon}</span>
            <h3 className="font-serif text-[22px] md:text-[26px] font-semibold mb-3 md:mb-4 leading-tight">{service.title}</h3>
            <p className="text-[var(--color-on-surface-variant)] font-sans text-[14px] leading-[22px] md:leading-[24px] mb-auto">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
