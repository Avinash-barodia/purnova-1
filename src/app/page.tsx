import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { LogoBanner } from "@/components/LogoBanner";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
      <LogoBanner />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
