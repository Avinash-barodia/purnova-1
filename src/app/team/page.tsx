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
            Behind every remarkable brand is a room full of thinkers, builders, storytellers, designers, and strategists who obsess over the details no one else sees.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Rushikesh believes every successful brand is built twice, first as a strategy, then as a business. Long before campaigns launch or content goes live, he's already asking the difficult questions that shape lasting growth. He founded Purnova on the belief that creativity earns attention, but strategy earns trust. Everything else is just noise.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Attention gets you noticed. Strategy keeps you remembered."
                </p>
              </div>
            </div>

            {/* 2. SAURABH BORAWAKEY */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Saurabh%20Sir.jpg.jpeg"
                  alt="Saurabh Borawakey"
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-[1px] bg-[var(--color-primary)] mb-6 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"></div>
                <h3 className="font-serif text-[32px] leading-[40px] font-semibold text-[var(--color-on-surface)] mb-1 uppercase tracking-tight">
                  SAURABH BORAWKEY
                </h3>
                <span className="font-sans text-[12px] leading-[16px] tracking-[0.15em] font-bold text-[var(--color-primary)] mb-6 block uppercase">
                  Digital Growth Manager
                </span>
                <p className="font-sans text-[16px] leading-[26px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
                  Saurabh has probably said eight sentences all week, and every one of them moved a number. He's not cold; he's intentional. The kind of person who believes most meetings could've been emails, and most emails could've been silence. While others are busy explaining their wins, he's already building the next campaign, quietly letting the dashboard say everything he doesn't.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Pallavi somehow manages five conversations, three deadlines, and one brand crisis all at once and still remembers your dog's name. She calls her mind "wonderfully scattered," but in her hands, chaos becomes clarity and moving pieces become a plan. Clients don't just trust her with their brand; they trust her with the version they know exists but haven't yet found the words to express.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Avinash hears, "That's not technically possible," the way most people hear a dare. He doesn't look for easy builds; he looks for the ones with a catch, the kind that make other developers wince. Somewhere between the bug nobody could trace and the deadline nobody believed in, he finds the only satisfaction that matters to him: proving that impossible was just an opinion.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Rutuja designs as though every brand lends her its voice before she opens the first artboard. She doesn't decorate identities, she uncovers them. Every layout, every colour, every line exists for a reason, until the work feels less like design and more like something that always belonged. Her art isn't made for today. It's made to outlive it.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "I design for the years, not the trends."
                </p>
              </div>
            </div>

            {/* 6. ANIKET SURYAWANSHI */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Aniket.jpg.jpeg"
                  alt="Aniket Suryawanshi"
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Aniket believes reliability is a skill, not a personality trait. He delivers exactly what's needed no shortcuts, no overcomplication, no missed deadlines. Ask him for ten things, and you'll get ten things back, finished when promised. He jokes that he only follows instructions, but what he really follows is discipline. Excuses simply don't fit into his workflow.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Anushka sees stories long before she writes them. In half-finished ideas, overlooked details, and brands still searching for their identity, she finds the narrative waiting to be uncovered. She blends curiosity with strategy, turning ordinary briefs into stories people don't just read they remember. For her, content isn't decoration. It's the voice that gives a brand its place in the world.
                </p>
                <p className="font-serif italic text-[18px] text-[var(--color-primary)]">
                  — "Every brand has a story. I just know where to look."
                </p>
              </div>
            </div>

            {/* 8. TEJAS KUMBHAR */}
            <div className="luxury-card bg-[var(--color-surface-container-low)] flex flex-col group border border-[var(--color-border)] hover:border-[var(--color-primary-container)] transition-all duration-400">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/team/Tejas.jpg.jpeg"
                  alt="Tejas Kumbhar"
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Tejas doesn't chase the perfect shot he simply happens to be there when it arrives. He's the kind of observer who notices the half-second between moments, the one everyone else blinks through. Where others see a meeting, a street, or a product on a table, he sees the beginning of a story waiting to be told and instinctively knows when to press record.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Ritesh treats every timeline like it owes someone an emotion. He'll spend an hour refining a cut most people would never notice simply because he knows they'll feel it. For him, editing isn't assembly; it's the difference between a video that's watched and one that's remembered. He doesn't finish projects so much as pour himself into them, frame by frame, until every second earns its place.
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
                  className="w-full h-full object-cover filter grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
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
                  Pratap edits the way he speaks straightforward, a little loud, and completely uninterested in polish for the sake of polish. He's not trying to make things look expensive; he's trying to make them feel real. There's a rawness to his cuts that no amount of big-budget gloss can fake, the kind that comes from someone who grew up watching stories, not stock footage.
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
