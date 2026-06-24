"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Services", href: "/services", sticker: "/navbar_sticker/services.png" },
  { name: "Case Studies", href: "/case-studies", sticker: "/navbar_sticker/case.png" },
  { name: "Clients", href: "/clients", sticker: "/navbar_sticker/clients.png" },
  { name: "About", href: "/about", sticker: "/navbar_sticker/about.png" },
  { name: "Our Team", href: "/team", sticker: "/navbar_sticker/team.png" },
  // { name: "Contact", href: "#", sticker: "/navbar_sticker/contact.png" },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-surface-container-highest)] transition-transform duration-300"
      >
        <div className="flex justify-between items-center w-full px-6 md:px-[80px] max-w-[1440px] mx-auto pt-8 pb-4 md:pt-12 md:pb-5">
          <Link href="/" className="text-[24px] md:text-[32px] font-serif font-bold text-[var(--color-primary)] tracking-tighter uppercase">
            Purnova
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = link.href !== "#" && pathname.startsWith(link.href);
              return (
                <div key={link.name} className={`nav-link-wrapper relative ${isActive ? 'active' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={`${link.name} sticker`} className="nav-sticker" src={link.sticker} />
                  <Link
                    href={link.href}
                    className={`font-sans text-[12px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? '' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'}`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
          <Link href="/contact">
            <button className="hidden md:block bg-transparent border border-[var(--color-primary-container)] text-[var(--color-primary)] font-sans text-[12px] font-bold uppercase tracking-[0.15em] py-3 px-8 hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary-container)] transition-all duration-300 active:scale-95">
              BOOK A CALL
            </button>
          </Link>
          <button
            className="md:hidden text-[var(--color-primary)] p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[var(--color-background)] flex flex-col p-6"
          >
            <div className="flex justify-between items-center w-full py-2">
              <Link href="/" className="text-[24px] font-serif font-bold text-[var(--color-primary)] tracking-tighter uppercase" onClick={() => setMobileMenuOpen(false)}>
                Purnova
              </Link>
              <button
                className="text-[var(--color-primary)] p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 mt-12">
              {navLinks.map((link) => {
                const isActive = link.href !== "#" && pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group relative font-serif text-[32px] md:text-[48px] uppercase font-semibold transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-on-surface)] hover:text-[var(--color-primary)]'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-[var(--color-primary)] transition-all duration-300 ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`}></span>
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="mt-8 bg-transparent border border-[var(--color-primary-container)] text-[var(--color-primary)] font-sans text-[14px] font-bold uppercase tracking-[0.15em] py-4 px-12 active:scale-95 transition-transform">
                  BOOK A CALL
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
