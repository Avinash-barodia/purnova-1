"use client";

export function CTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[80px] text-center relative overflow-hidden bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto z-10 relative">
        <h2 className="font-serif text-[36px] md:text-[40px] lg:text-[48px] font-bold mb-8 md:mb-10 leading-tight md:leading-[56px]">Your Brand Deserves More Than Marketing </h2>
        <button className="w-full md:w-auto bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-sans text-[12px] py-5 md:py-6 px-16 font-bold uppercase tracking-[0.15em] hover:bg-[var(--color-primary)] transition-all duration-300 md:scale-110 active:scale-100">
          INITIATE CONTACT
        </button>
      </div>
    </section>
  );
}
