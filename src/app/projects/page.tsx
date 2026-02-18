import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Dan Thomson's projects: Sensay AI, books on Digital Immortality, angel investments in Web3, AI, and Hospitality startups.",
  openGraph: {
    title: "Projects | Dan Thomson",
    description: "Sensay AI, books on Digital Immortality, and angel investments in the future.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          Projects
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          From building AI companies to writing books to backing founders—here&apos;s 
          where I focus my energy and capital.
        </p>
      </section>

      {/* Sensay */}
      <section id="sensay" className="py-16 bg-zinc-900/30 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 text-sm font-medium mb-6">
                <span>🤖</span> Current Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                Sensay
              </h2>
              <p className="text-zinc-400 text-lg mb-6">
                As Founder & CEO of Sensay, I&apos;m leading the charge on digital immortality. 
                We&apos;re building AI technology that creates digital replicas of people—preserving 
                their knowledge, personality, and wisdom for future generations.
              </p>
              <p className="text-zinc-400 mb-6">
                Our AI replicas aren&apos;t just chatbots. They capture the essence of a person: 
                how they think, what they know, their values and perspectives. This technology 
                allows loved ones to continue receiving guidance and wisdom, even after someone 
                is gone.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm">AI</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm">Web3</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm">Digital Immortality</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm">$SNSY</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://sensay.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all"
                >
                  Visit Sensay
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/sensay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-semibold rounded-xl transition-all"
                >
                  $SNSY Token
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🧠</div>
                    <p className="text-zinc-400 text-lg font-medium">
                      Digital Immortality Through AI
                    </p>
                    <p className="text-zinc-500 mt-2">
                      Preserving human wisdom for generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 text-sm font-medium mb-6">
              <span>📚</span> Author
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Books on Digital Immortality
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              I&apos;ve written two books exploring what it means to live forever through 
              technology—the philosophical implications, practical applications, and 
              the future of human legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-amber-500/10 to-zinc-800 mb-6 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📖</div>
                  <p className="text-zinc-500">Book Cover</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Immortality</h3>
              <p className="text-zinc-400 mb-4">
                An exploration of how AI technology is changing our relationship with 
                mortality and what it means to preserve human consciousness.
              </p>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                View on Amazon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-purple-500/10 to-zinc-800 mb-6 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📕</div>
                  <p className="text-zinc-500">Book Cover</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">The Immortality Thesis</h3>
              <p className="text-zinc-400 mb-4">
                A philosophical deep-dive into the ethics and implications of digital 
                consciousness and AI-powered legacy preservation.
              </p>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                View on Amazon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="py-16 bg-zinc-900/30 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 text-sm font-medium mb-6">
              <span>💰</span> Angel Investor
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Investment & Mentorship
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              I invest up to $1M in early-stage startups and actively mentor founders. 
              If you&apos;re building something interesting in these spaces, I&apos;d love to talk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-zinc-400">
                Especially interested in AI applications that enhance human capabilities 
                and preserve human value.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-bold mb-2">Web3 & Blockchain</h3>
              <p className="text-zinc-400">
                Decentralized technologies that give power back to users and creators.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-2">Hospitality & Travel</h3>
              <p className="text-zinc-400">
                As someone who&apos;s visited 100+ countries, I understand what makes 
                great travel experiences.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Have a Pitch?</h3>
                <p className="text-zinc-400">
                  I respond to every serious inquiry. Book a call or send a message 
                  to discuss your startup.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://calendly.com/sensaydan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all whitespace-nowrap"
                >
                  Book a Call
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-zinc-600 hover:border-zinc-400 text-zinc-100 font-semibold rounded-xl transition-all whitespace-nowrap"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Advisory & Board Roles</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl">
            Beyond investing, I take on select advisory and board positions where 
            I can contribute strategic value and operational expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">Strategic Advisory</h3>
              <p className="text-zinc-400 text-sm">
                Go-to-market strategy, fundraising guidance, and scaling operations 
                for AI and Web3 startups.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">Board Positions</h3>
              <p className="text-zinc-400 text-sm">
                Governance and strategic direction for companies building transformative 
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
