"use client";

import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { LogoBanner } from "@/components/LogoBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirements: "",
    message: "",
    source: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyQ6rBgMztDLsM8t44iE6KzT4JHD9q0Gnlvq4iGD4X9_pmsiOPXsbz3JzFVjADoHdJS/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", requirements: "", message: "", source: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <NavBar />
      
      {/* Top Form Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Col: Text */}
        <div className="flex-1 lg:max-w-lg">
          <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.1] mb-6 tracking-tighter">
            Let's Understand <br/><span className="text-[#D4AF37] italic">Your Vision.</span>
          </h1>
          <p className="font-sans text-[16px] text-white/60 leading-relaxed mb-8 max-w-md">
            The More Context You Share, The Better We Can Tailor Our Strategy. Don't Hold Back.
          </p>
          <div className="hidden lg:block w-[120px] h-[120px] bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
        </div>

        {/* Right Col: Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value.replace(/[0-9]/g, '')})}
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors" 
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors" 
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors" 
              />
            </div>

            <div className="relative">
              <select 
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                required
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white/40 focus:text-white focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Your Requirements</option>
                <option value="branding">Branding & Identity</option>
                <option value="digital">Digital Marketing</option>
                <option value="content">Content Creation</option>
                <option value="development">Web Development</option>
                <option value="other">Other / Not Sure</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 material-symbols-outlined text-[20px]">expand_more</div>
            </div>

            <textarea 
              rows={4} 
              placeholder="Let us know about your project!" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors resize-none" 
            />

            <div className="relative">
              <select 
                value={formData.source}
                onChange={(e) => setFormData({...formData, source: e.target.value})}
                required
                className="w-full bg-[#111] border border-white/10 rounded-[12px] px-6 py-4 font-sans text-[14px] text-white/40 focus:text-white focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#151515] transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>How did you hear about us?</option>
                <option value="google">Google</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 material-symbols-outlined text-[20px]">expand_more</div>
            </div>

            <div>
              <button disabled={status === "loading"} type="submit" className="w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black font-sans text-[14px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                {status === "loading" ? "Submitting..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : "Submit Form"} 
                {status === "idle" && <span className="material-symbols-outlined text-[18px]">arrow_outward</span>}
                {status === "success" && <span className="material-symbols-outlined text-[18px]">check_circle</span>}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Purnova */}
      <section className="w-full bg-[#111] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[32px] md:text-[40px] mb-16 text-white tracking-tighter">
            Why Brands Choose <span className="italic text-[#D4AF37]">Purnova?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="material-symbols-outlined text-[40px] text-[#D4AF37] mb-6 opacity-80">account_tree</span>
              <h3 className="font-serif text-[24px] text-white mb-3">High-Converting Systems</h3>
              <p className="font-sans text-[14px] text-white/50 leading-relaxed">Every website, funnel, and campaign is built to drive measurable ROI.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[40px] text-[#D4AF37] mb-6 opacity-80">lightbulb</span>
              <h3 className="font-serif text-[24px] text-white mb-3">Strategic First</h3>
              <p className="font-sans text-[14px] text-white/50 leading-relaxed">We don't just design—we build with growth in mind.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[40px] text-[#D4AF37] mb-6 opacity-80">handshake</span>
              <h3 className="font-serif text-[24px] text-white mb-3">Transparent & Collaborative</h3>
              <p className="font-sans text-[14px] text-white/50 leading-relaxed">Clear timelines. Clear pricing. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="flex-1">
            <h2 className="font-serif text-[32px] md:text-[40px] mb-6 text-white tracking-tighter">
              Let's <span className="italic text-[#D4AF37]">Connect</span>
            </h2>
            <div className="mb-12">
              <p className="font-sans text-[14px] text-white/50 mb-2">Our team is available:</p>
              <p className="font-sans text-[16px] text-white font-medium">Mon – Fri <span className="mx-2 text-[#D4AF37]">|</span> 10:00 AM – 6:00 PM</p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-[#D4AF37] mt-1">mail</span>
                <div>
                  <a href="mailto:hello@purnova.com" className="font-sans text-[16px] text-white hover:text-[#D4AF37] transition-colors">hello@purnova.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-[#D4AF37] mt-1">call</span>
                <div>
                  <a href="tel:+918390025023" className="font-sans text-[16px] text-white hover:text-[#D4AF37] transition-colors">+91 83900 25023</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-[#D4AF37] mt-1">location_on</span>
                <div>
                  <p className="font-sans text-[14px] font-bold text-white mb-1">HQ - India</p>
                  <p className="font-sans text-[14px] text-white/50 leading-relaxed">
                    602, D Wing, Swami Chaya Apartments,<br/>
                    Lane, DP Rd, opp. Sainath Khanawal,<br/>
                    Sridhar Colony, Karvenagar,<br/>
                    Pune, 411052
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center lg:justify-end opacity-20 hidden md:flex">
            <span className="material-symbols-outlined text-[300px] text-white">language</span>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <LogoBanner />

      {/* Who we're best for */}
      <section className="w-full bg-[#111] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-[32px] md:text-[40px] mb-16 text-white tracking-tighter">
            Who We're Best <span className="italic text-[#D4AF37]">For?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37] mb-6 opacity-90">rocket_launch</span>
              <h3 className="font-serif text-[20px] text-white mb-2">Funded Startups</h3>
              <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-white/40">Ready To Scale</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37] mb-6 opacity-90">track_changes</span>
              <h3 className="font-serif text-[20px] text-white mb-2">Founders Who Value</h3>
              <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-white/40">Strategy Over Shortcuts</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37] mb-6 opacity-90">trending_up</span>
              <h3 className="font-serif text-[20px] text-white mb-2">Service-Based Businesses</h3>
              <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-white/40">Growing Aggressively</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-32 px-6 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37] blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-white mb-10 tracking-tighter">
            Want to Turn Your Brand Into a Scalable <span className="italic text-[#D4AF37]">Growth Engine?</span>
          </h2>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <button className="bg-transparent border border-white/20 text-white font-sans text-[14px] font-bold uppercase tracking-[0.1em] px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500">
              Book a Consultation
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
