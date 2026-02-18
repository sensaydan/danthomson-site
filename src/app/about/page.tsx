import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Dan Thomson - Founder & CEO of Sensay, author, angel investor, and explorer. Philosophy from King's College London, MBA from Cambridge.",
  openGraph: {
    title: "About - Dan Thomson",
    description: "Founder & CEO of Sensay, author, angel investor, and explorer of 110 countries.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-8">
        About
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <Image
          src="/images/dan-headshot.png"
          alt="Dan Thomson"
          width={120}
          height={120}
          className="rounded-lg w-28 h-28 object-cover flex-shrink-0"
        />
        <div className="space-y-4">
          <p className="text-neutral-600 leading-relaxed">
            I&apos;m a philosopher turned entrepreneur, an explorer of both ideas 
            and continents, and someone who believes technology should serve 
            humanity&apos;s highest aspirations.
          </p>
          <p className="text-neutral-500 text-sm">
            Based in Mexico City 🇲🇽 · British by birth 🇬🇧 · INTJ
          </p>
          <p className="text-neutral-500 text-sm">
            Speaks English, Spanish, and Portuguese
          </p>
        </div>
      </div>

      {/* Current */}
      <section className="mb-12">
        <p className="text-neutral-600 leading-relaxed">
          Currently, I lead{" "}
          <a 
            href="https://sensay.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Sensay
          </a>
          , where we&apos;re pioneering digital immortality through AI - preserving 
          human knowledge, personality, and wisdom for future generations.
        </p>
      </section>

      {/* Current Research */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Current Research
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Writing third book: &quot;Endless - Life After Upload&quot;</li>
          <li>Studying long-term effects of Digital Replicas as business tools, AI assistants, and death/grief tech</li>
          <li>Studying positive benefits on Alzheimer&apos;s Disease and Dementia patients</li>
        </ul>
      </section>

      {/* Philosophy */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Philosophy
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <span className="font-medium text-neutral-900">On Technology</span>
            <p className="text-neutral-600 mt-1">
              Technology should amplify what makes us human, not replace it. 
              Digital immortality isn&apos;t about escaping death - it&apos;s about 
              extending the impact of a human life.
            </p>
          </div>
          <div>
            <span className="font-medium text-neutral-900">On Adventure</span>
            <p className="text-neutral-600 mt-1">
              Comfort is the enemy of growth. I&apos;ve trekked to Everest Base Camp 
              and explored Antarctica because growth happens at the edges.
            </p>
          </div>
          <div>
            <span className="font-medium text-neutral-900">On Freedom</span>
            <p className="text-neutral-600 mt-1">
              Freedom isn&apos;t just political or financial - it&apos;s intellectual 
              and creative. I build companies that give people more control over 
              their lives and legacies.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Journey
        </h2>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0">Now</span>
            <span className="text-neutral-600">Founder & CEO, Sensay - Building AI for digital immortality</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0">2020+</span>
            <span className="text-neutral-600">Author - Two books on Digital Immortality (third in progress)</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0">2015+</span>
            <span className="text-neutral-600">Angel Investor - Web3, AI, and Hospitality startups</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0"></span>
            <span className="text-neutral-600">Former CMO at InsurAce & MetaRisk (blockchain-enhanced risk financing)</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0"></span>
            <span className="text-neutral-600">Partner at a Gibraltar crypto fund</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0"></span>
            <span className="text-neutral-600">Founded and scaled an international chain of juice bars and restaurants</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0"></span>
            <span className="text-neutral-600">MBA, Cambridge - Technology entrepreneurship</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-16 flex-shrink-0"></span>
            <span className="text-neutral-600">Philosophy, King&apos;s College London</span>
          </li>
        </ul>
      </section>

      {/* Personal */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Personal
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>
            Aspiring Philanthropist - {" "}
            <a
              href="https://unchainedelephants.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 link"
            >
              Unchained Elephants
            </a>
          </li>
          <li>Cocktail, Wine, Spirit & Cigar enthusiast, mixologist</li>
        </ul>
      </section>

      {/* Adventures */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Adventures
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>🇦🇶 Antarctica - Explored the last frontier</li>
          <li>🏔️ Everest Base Camp - Trekked to 5,364m</li>
          <li>🇻🇳 Son Doong Cave - World&apos;s largest cave</li>
          <li>🌍 110 Countries - And counting</li>
        </ul>
      </section>

      {/* Writing */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Writing
        </h2>
        <p className="text-sm text-neutral-600 mb-4">
          I share thoughts and insights on:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="https://asksensay.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 link"
            >
              Medium →
            </a>
          </li>
          <li>
            <a
              href="https://blog.sensay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 link"
            >
              Sensay Blog →
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-500">
          Want to know more?{" "}
          <Link href="/projects" className="text-neutral-900 link">
            View projects
          </Link>
          {" "}or{" "}
          <a
            href="https://calendly.com/dan-thomson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            book a call
          </a>
          .
        </p>
      </section>
    </div>
  );
}
