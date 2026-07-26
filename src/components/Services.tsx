"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    description: "Performance isn't about spending more. It's about growing smarter. ",
    icon: "insights",
  },
  {
    title: "Brand Strategy",
    slug: "brand-strategy",
    description: "A great brand isn't just seen. It's remembered.",
    icon: "diamond",
  },
  {
    title: "Social Media",
    slug: "social-media",
    description: "Great content starts conversations. Great brands build communities.",
    icon: "public",
  },
  {
    title: "SEO & Content",
    slug: "seo-and-content",
    description: "Be found when your customers are looking for you.",
    icon: "search",
  },
  {
    title: "Web Design",
    slug: "web-design",
    description: "More than a website. A digital experience.",
    icon: "web",
  },
];

export function Services() {
  return (
    <section id="services" className="pt-8 pb-24 md:pt-16 md:pb-40 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto relative z-10 bg-[var(--color-background)]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">

        {/* Left Side: Sticky Editorial Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans text-[12px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] mb-6 block">OUR EXPERTISE</span>
            <h2 className="font-serif text-[40px] md:text-[48px] lg:text-[56px] font-semibold mb-6 leading-[1.1] text-white tracking-tighter">
              Turning Businesses Into Brands.
            </h2>
            <p className="text-white/60 font-sans text-[16px] leading-[26px] mb-8 max-w-md">
              From defining your brand to strengthening your digital presence, we help businesses build meaningful connections that inspire lasting growth.
            </p>
            <Link href="/services" className="group inline-flex items-center gap-4 font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#C9A84C] transition-colors duration-300">
              Explore All Services
              <span className="material-symbols-outlined text-sm group-hover:translate-x-3 transition-transform duration-300">arrow_forward</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Sticky Stacking Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-12 relative pb-[10vh]">
          {services.map((service, index) => {
            // CSS Sticky creates the magical overlapping deck of cards effect natively
            const stickyTop = `calc(10vh + ${index * 40}px)`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="sticky w-full h-auto min-h-[350px] md:min-h-[400px] rounded-[40px] p-8 md:p-14 flex flex-col justify-between border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden group"
                style={{
                  top: stickyTop,
                  backgroundColor: '#0A0A0A',
                  zIndex: 10 + index
                }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_50%)] rounded-[40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[40px]" />

                {/* Card Header (Icon + Number) */}
                <div className="flex justify-between items-start relative z-10 w-full">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#0A0A0A] border border-white/5 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-[#C9A84C] text-4xl md:text-5xl">
                      {service.icon}
                    </span>
                  </div>
                  <span className="font-sans text-[80px] md:text-[120px] font-bold text-white/[0.03] leading-none select-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content (Title + Description) */}
                <div className="relative z-10 max-w-xl mt-auto">
                  <h3 className="font-serif text-[32px] md:text-[36px] lg:text-[48px] font-semibold mb-4 leading-tight text-white group-hover:text-[#C9A84C] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-sans text-[16px] md:text-[20px] leading-[30px] md:leading-[34px] mb-6">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <button className="bg-transparent border border-[#C9A84C] text-[#C9A84C] font-sans text-[12px] font-bold uppercase tracking-[0.15em] px-8 py-3 hover:bg-[#C9A84C] hover:text-black transition-all duration-300">
                      Explore Service
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
