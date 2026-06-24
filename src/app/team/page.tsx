import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <main className="pt-40 pb-20">
        {/* Page Header */}
        <header className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] mb-24 text-center md:text-left">
          <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] block mb-4 uppercase">
            THE PEOPLE BEHIND THE PERFORMANCE
          </span>
          <h1 className="font-serif text-[48px] leading-[56px] md:text-[72px] md:leading-[80px] tracking-[-0.02em] font-bold text-[var(--color-on-surface)] mb-6">
            Meet the Team
          </h1>
          <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] max-w-2xl">
            Every campaign, every frame, every word — built by these people. We don't just execute; we architect excellence through a synthesis of logic and creativity.
          </p>
        </header>

        {/* Team Grid */}
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. RUSHIKESH HANDE */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Rushi%20Sir.jpg.jpeg"
                  alt="Rushikesh Hande"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  RUSHIKESH HANDE
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Founder & Performance Strategist
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Rushikesh doesn't believe in gut feeling he believes in the decimal point after it. Every campaign is a hypothesis, every rupee a question waiting for proof. He built Purnova on the conviction that creativity without accountability is just decoration, and he's spent years making sure the two never get separated again. The room gets quieter when he starts doing math out loud.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Show me the story. Then show me the spreadsheet."
                </p>
              </div>
            </div>

            {/* 2. SAURABH BORAWAKEY */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Saurabh%20Sir.jpg.jpeg"
                  alt="Saurabh Borawakey"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  SAURABH BORAWAKEY
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Digital Growth Manager
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Saurabh has said maybe eight sentences this week, and every one of them moved a number. He's not cold he's economical, the kind of person who has decided that most meetings could've been emails and most emails could've been silence. While others narrate their wins, he's already three steps into the next campaign, letting the dashboard do the bragging he never will.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "I don't talk strategy. I deliver it."
                </p>
              </div>
            </div>

            {/* 3. PALLAVI VISHWAS */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Pallavi.jpg.jpeg"
                  alt="Pallavi Vishwas"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  PALLAVI VISHWAS
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Brand Architect
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Pallavi runs five conversations, three deadlines, and one brand crisis simultaneously and somehow remembers your dog's name. She calls her mind "wonderfully scattered," the kind of chaos that, in her hands, becomes structure other people can stand on. Clients don't just trust her with their brand; they trust her with the version of it they haven't figured out how to say yet.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "My mind multitasks so your brand doesn't have to."
                </p>
              </div>
            </div>

            {/* 4. AVINASH BARODIYA */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Avinash.jpg.jpeg"
                  alt="Avinash Barodiya"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  AVINASH BARODIYA
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Web Developer
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Avinash hears "that's not technically possible" the way most people hear a dare. He doesn't look for easy builds he looks for the ones with a catch, the ones that make other developers wince. Somewhere between the bug nobody could trace and the deadline nobody believed in, he finds the only kind of satisfaction that matters to him: proof that impossible was just an opinion.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Difficult is just a feature I haven't built yet."
                </p>
              </div>
            </div>

            {/* 5. RUTUJA PAWAR */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Rutu.jpg.jpeg"
                  alt="Rutuja Pawar"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  RUTUJA PAWAR
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Graphic Designer
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  She designs like someone who's read more books than scrolled feeds unhurried, deliberate, allergic to anything that expires with the algorithm. Trends arrive and leave; her work stays exactly where she put it, quietly outlasting them. There's a gentleness to how she handles a brief, the kind that makes clients feel heard before they've finished explaining what they meant.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "I design for the years, not the algorithm."
                </p>
              </div>
            </div>

            {/* 6. ANIKET SURYAWANSHI */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Aniket.jpg.jpeg"
                  alt="Aniket Suryawanshi"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  ANIKET SURYAWANSHI
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Web Developer
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Aniket has perfected the art of doing exactly what's needed no more, no drama, no chaos, no missed deadline either. Ask him for ten things and you'll get ten things, on time, without the saga most people attach to getting work done. He jokes that he runs on instructions, but the truth is simpler: he's just allergic to excuses.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Tell me the task. I'll skip the drama."
                </p>
              </div>
            </div>

            {/* 7. ANUSHKA SHIRORE */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Anushka.jpg.jpeg"
                  alt="Anushka Shirore"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  ANUSHKA SHIRORE
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Content Architect
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Anushka finds plotlines in places nobody else is looking a half-finished sentence, a product nobody bothered to describe properly, a brand that didn't know it had a voice yet. She doesn't write copy so much as excavate it, turning ordinary briefs into narratives people actually want to finish reading. Her imagination doesn't wander; it works.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Every brand has a story. I just go looking for it."
                </p>
              </div>
            </div>

            {/* 8. TEJAS KUMBHAR */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Tejas.jpg.jpeg"
                  alt="Tejas Kumbhar"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  TEJAS KUMBHAR
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Visual Storyteller
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Tejas doesn't chase the shot—he just happens to be standing there when it arrives. He's the kind of observer who notices the half-second between moments, the one everyone else blinks through. Where other people see a meeting, a street, a product on a table, he sees the beginning of a story that hasn't been told yet, and reaches for the camera right on cue.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "I don't find the moment. The moment finds me."
                </p>
              </div>
            </div>

            {/* 9. RITESH DHARANE */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Ritesh.jpg.jpeg"
                  alt="Ritesh Dharane"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  RITESH DHARANE
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Video Editor
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Ritesh treats every timeline like it owes someone an emotion. He'll spend an hour on a single cut most people wouldn't notice, because he would. For him, editing isn't assembly it's the difference between a video that plays and one that lingers. He doesn't finish projects so much as pour himself into them, frame by frame, until they feel like something instead of footage.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "I don't edit videos. I edit feelings into them."
                </p>
              </div>
            </div>

            {/* 10. PRATAP PAWAR */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Pratap.jpg.jpeg"
                  alt="Pratap Pawar"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  PRATAP PAWAR
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Video Editor
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Pratap edits the way he talks straightforward, a little loud, completely unbothered by polish for polish's sake. He's not interested in making things look expensive; he's interested in making them feel true. There's a rawness to his cuts that big-budget gloss can't fake, the kind that comes from someone who grew up watching real stories, not stock footage.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Keep it real, or don't keep it at all."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="bg-[var(--color-primary)] px-8 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            <h2 className="font-serif text-[48px] leading-[56px] text-[var(--color-on-primary-fixed)] max-w-xl leading-tight font-bold">
              Want to work with people like this?
            </h2>
            <button className="bg-[var(--color-background)] text-[var(--color-primary)] px-12 py-5 font-sans text-[12px] font-bold tracking-[0.2em] hover:scale-95 transition-transform duration-300">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
