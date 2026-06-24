"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-center px-6">
      <h2 className="font-serif text-6xl md:text-8xl font-bold text-[var(--color-primary)] mb-6">404</h2>
      <h3 className="font-sans text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-8 uppercase tracking-[0.15em]">
        Empire Not Found
      </h3>
      <p className="text-[var(--color-foreground)]/80 max-w-[500px] mb-10 leading-relaxed">
        The page you are looking for has been moved or no longer exists. Return to the main domain to continue your journey.
      </p>
      <Link href="/">
        <Button size="lg">Return to Home</Button>
      </Link>
    </div>
  );
}
