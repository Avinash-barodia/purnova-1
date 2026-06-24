"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 50, suffix: "Cr+", label: "Revenue Generated", prefix: "₹" },
  { value: 120, suffix: "+", label: "Brands Scaled" },
  { value: 8, label: "Experience", suffix: " Years" },
  { value: 4.9, suffix: "★", label: "Client Rating", decimals: 1 },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-24 luxury-border border-x-0 border-b-0 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]">
      <div className="px-6 md:px-[80px] max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="font-serif text-[32px] md:text-[48px] font-bold mb-2">
              {stat.prefix}
              {isInView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.decimals || 0}
                  useEasing={true}
                />
              ) : (
                "0"
              )}
              {stat.suffix}
            </p>
            <p className="font-sans text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
