import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact | Purnova",
  description: "Start the conversation. Connect with Purnova.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <NavBar />
      
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4AF37] blur-[100px] md:blur-[200px] opacity-[0.15] pointer-events-none"></div>
        
        {/* Abstract Geometry */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <p className="font-sans text-[12px] md:text-[14px] uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Let's Connect</p>
          <h1 className="font-serif text-[64px] md:text-[120px] leading-[0.9] text-white mb-20 tracking-tighter">
            Start The <br/><span className="italic text-[#D4AF37]">Conversation.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32 justify-center text-left items-start mt-12 p-8 md:p-16 bg-[#111]/80 backdrop-blur-md rounded-[32px] border border-white/10 shadow-2xl">
            
            {/* Address */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                <h3 className="font-sans text-[12px] uppercase tracking-widest text-[#D4AF37]">Headquarters</h3>
              </div>
              <p className="font-serif text-[24px] md:text-[32px] text-white leading-relaxed text-white/80 hover:text-white transition-colors">
                602, D Wing, Swami Chaya Apartments,<br/>
                Lane, DP Rd, opp. Sainath Khanawal,<br/>
                Sridhar Colony, Karvenagar,<br/>
                Pune
              </p>
            </div>

            <div className="w-full md:w-px h-px md:h-[200px] bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>

            {/* Direct Contact */}
            <div className="flex flex-col gap-12 flex-1">
              <div>
                <h3 className="font-sans text-[12px] uppercase tracking-widest text-[#D4AF37] mb-6">Direct Line</h3>
                <a href="tel:+918390025023" className="group font-serif text-[32px] md:text-[40px] text-white hover:text-[#D4AF37] transition-colors flex items-center gap-4 whitespace-nowrap">
                  +91 83900 25023
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">call</span>
                </a>
              </div>
              <div>
                <h3 className="font-sans text-[12px] uppercase tracking-widest text-[#D4AF37] mb-6">Social</h3>
                <a href="https://www.instagram.com/purnovaa/?hl=en" target="_blank" rel="noopener noreferrer" className="group font-serif text-[32px] md:text-[40px] text-white hover:text-[#D4AF37] transition-colors flex items-center gap-4">
                  Instagram
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
