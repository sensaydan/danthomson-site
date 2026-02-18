import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    label: "Countries Explored",
    value: "100+",
    description: "From Antarctica to Everest Base Camp",
  },
  {
    label: "Company",
    value: "Sensay",
    description: "AI & Digital Immortality",
  },
  {
    label: "Books Published",
    value: "2",
    description: "On Digital Immortality",
  },
  {
    label: "Investments",
    value: "$1M+",
    description: "Angel investments in Web3/AI",
  },
];

const values = [
  { icon: "🌍", label: "Freedom" },
  { icon: "⛰️", label: "Adventure" },
  { icon: "💡", label: "Innovation" },
  { icon: "♾️", label: "Digital Immortality" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up">
            <p className="text-amber-400 font-medium tracking-wide mb-4">
              CEO · AUTHOR · EXPLORER
            </p>
          </div>
          
          <h1 className="animate-fade-in-up animation-delay-200 text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Dan Thomson
          </h1>
          
          <p className="animate-fade-in-up animation-delay-400 text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Building the future of AI and human legacy at{" "}
            <a 
              href="https://sensay.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Sensay
            </a>
            . Exploring the edges of what&apos;s possible—in technology, in travel, in life.
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/sensaydan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all hover:scale-105 glow"
            >
              Book a Call
            </a>
            <Link
              href="/about"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-semibold rounded-xl transition-all hover:bg-zinc-900"
            >
              Learn More
            </Link>
          </div>

          {/* Values */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {values.map((value) => (
              <div
                key={value.label}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800"
              >
                <span className="text-xl">{value.icon}</span>
                <span className="text-zinc-400 text-sm font-medium">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {item.value}
                </div>
                <div className="text-zinc-100 font-medium mb-1">{item.label}</div>
                <div className="text-zinc-500 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                Philosophy Meets Technology
              </h2>
              <p className="text-zinc-400 text-lg mb-6">
                With a Philosophy degree from King&apos;s College London and an MBA from Cambridge, 
                I&apos;ve always been drawn to the big questions—and building practical solutions.
              </p>
              <p className="text-zinc-400 text-lg mb-8">
                Today, I lead Sensay, pioneering digital immortality through AI. We&apos;re creating 
                technology that preserves human knowledge, personality, and wisdom for future generations.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Read my full story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-500/20 to-zinc-800 p-1">
                <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌍</div>
                    <p className="text-zinc-400">
                      Antarctica • Everest Base Camp • Son Doong Cave • 100+ Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              What I&apos;m Building
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From AI companies to books to investments, here&apos;s where I focus my energy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sensay */}
            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Sensay</h3>
              <p className="text-zinc-400 mb-4">
                Leading the charge on digital immortality. AI replicas that preserve human wisdom.
              </p>
              <a
                href="https://sensay.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Visit Sensay
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Books */}
            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Author</h3>
              <p className="text-zinc-400 mb-4">
                Two books on Digital Immortality, exploring what it means to live forever through AI.
              </p>
              <Link
                href="/projects#books"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                View Books
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Investments */}
            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Angel Investor</h3>
              <p className="text-zinc-400 mb-4">
                Backing the next generation of Web3, AI, and Hospitality startups.
              </p>
              <Link
                href="/projects#investments"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Investment Thesis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re building something interesting, looking for investment, 
            or want to discuss the future of AI and humanity—I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/sensaydan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all hover:scale-105"
            >
              Schedule a Call
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-semibold rounded-xl transition-all hover:bg-zinc-900"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
