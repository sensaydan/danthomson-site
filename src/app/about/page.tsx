import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Dan Thomson - Founder & CEO of Sensay, author, angel investor, and explorer. Philosophy from King's College London, MBA from Cambridge.",
  openGraph: {
    title: "About Dan Thomson",
    description: "Founder & CEO of Sensay, author, angel investor, and explorer of 100+ countries.",
  },
};

const timeline = [
  {
    year: "Now",
    title: "Founder & CEO, Sensay",
    description: "Building AI technology for digital immortality. Leading a team creating AI replicas that preserve human knowledge and personality.",
  },
  {
    year: "2020+",
    title: "Author",
    description: "Published two books on Digital Immortality, exploring the philosophical and practical implications of living forever through AI.",
  },
  {
    year: "2015+",
    title: "Angel Investor & Mentor",
    description: "Invested up to $1M in Web3, AI, and Hospitality startups. Mentoring the next generation of founders.",
  },
  {
    year: "Cambridge",
    title: "MBA",
    description: "Master of Business Administration from the University of Cambridge, focusing on technology entrepreneurship.",
  },
  {
    year: "King's",
    title: "Philosophy Degree",
    description: "Bachelor's in Philosophy from King's College London. The foundation for thinking about big questions.",
  },
];

const adventures = [
  { emoji: "🇦🇶", place: "Antarctica", description: "Explored the last frontier" },
  { emoji: "🏔️", place: "Everest Base Camp", description: "Trekked to 5,364m" },
  { emoji: "🦇", place: "Son Doong Cave", description: "World's largest cave, Vietnam" },
  { emoji: "🌍", place: "100+ Countries", description: "And counting..." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              About Me
            </h1>
            <p className="text-xl text-zinc-400 mb-6">
              I&apos;m Dan Thomson—a philosopher turned entrepreneur, an explorer of both 
              ideas and continents, and someone who believes technology should serve 
              humanity&apos;s highest aspirations.
            </p>
            <p className="text-zinc-400 mb-6">
              Currently, I&apos;m the Founder & CEO of{" "}
              <a 
                href="https://sensay.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                Sensay
              </a>
              , where we&apos;re pioneering digital immortality through AI. We create technology 
              that preserves human knowledge, personality, and wisdom—ensuring that the people 
              who matter to us can continue to guide and inspire, even after they&apos;re gone.
            </p>
            <p className="text-zinc-400">
              Based in Mexico City 🇲🇽, British by birth 🇬🇧, citizen of the world by choice.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-amber-500/20 to-zinc-800 p-1">
              <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">⛩️</div>
                  <p className="text-zinc-400 font-medium">
                    @sensaydan everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 gradient-text">On Technology</h3>
              <p className="text-zinc-400">
                Technology should amplify what makes us human, not replace it. The best 
                tools extend our capabilities while preserving our essence. That&apos;s why 
                digital immortality isn&apos;t about escaping death—it&apos;s about extending 
                the impact of a human life beyond biological limits.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 gradient-text">On Adventure</h3>
              <p className="text-zinc-400">
                Comfort is the enemy of growth. I&apos;ve trekked to Everest Base Camp, 
                explored Antarctica, and ventured into the world&apos;s largest cave—not 
                for bragging rights, but because growth happens at the edges. The same 
                principle applies to business and life.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 gradient-text">On Freedom</h3>
              <p className="text-zinc-400">
                Freedom isn&apos;t just political or financial—it&apos;s intellectual and 
                creative. I build companies that give people more control over their 
                lives, their legacies, and their futures.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 gradient-text">On Innovation</h3>
              <p className="text-zinc-400">
                Real innovation isn&apos;t incremental—it&apos;s about reimagining what&apos;s 
                possible. A philosophy degree taught me to question assumptions. 
                An MBA taught me to execute. Together, they&apos;re the foundation for 
                building what doesn&apos;t exist yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-12">Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="text-amber-400 font-bold">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-zinc-800 last:border-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventures */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Adventures</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
            I believe in experiencing the world firsthand. Here are some highlights 
            from exploring over 100 countries.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {adventures.map((adventure) => (
              <div
                key={adventure.place}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center hover:border-amber-500/30 transition-colors"
              >
                <div className="text-4xl mb-3">{adventure.emoji}</div>
                <h3 className="font-bold mb-1">{adventure.place}</h3>
                <p className="text-zinc-500 text-sm">{adventure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🌍", value: "Freedom", desc: "Autonomy in thought and action" },
              { icon: "⛰️", value: "Adventure", desc: "Growth through exploration" },
              { icon: "💡", value: "Innovation", desc: "Creating what doesn't exist" },
              { icon: "♾️", value: "Digital Immortality", desc: "Extending human legacy" },
            ].map((item) => (
              <div
                key={item.value}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-amber-400 mb-1">{item.value}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Want to Know More?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Check out my projects, read my books, or let&apos;s have a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all"
            >
              View Projects
            </Link>
            <a
              href="https://calendly.com/sensaydan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-semibold rounded-xl transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
