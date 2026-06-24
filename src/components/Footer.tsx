import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 bg-[var(--color-background)] border-t border-[var(--color-surface-container-highest)]">
      <div className="flex flex-col items-center gap-8 md:gap-12 px-6 md:px-[80px] max-w-[1440px] mx-auto">
        <div className="text-[24px] md:text-[32px] font-serif font-bold text-[var(--color-primary)]">Purnova</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6">
          <Link href="/services" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">Services</Link>
          <Link href="/case-studies" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">Work</Link>
          <Link href="/about" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">About</Link>
          <Link href="/contact" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">Contact</Link>
          <Link href="https://www.instagram.com/purnovaa/?hl=en" target="_blank" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">Instagram</Link>
          <Link href="https://linkedin.com" target="_blank" className="text-[var(--color-on-surface-variant)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] hover:text-[var(--color-primary)] transition-colors duration-300">LinkedIn</Link>
        </div>
        <div className="text-[var(--color-on-surface-variant)] font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mt-4 md:mt-8 text-center">
            © {new Date().getFullYear()} PURNOVA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
