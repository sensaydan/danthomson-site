import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Dan Thomson's projects: Sensay AI, books on Digital Immortality, angel investments in Web3, AI, and Hospitality startups.",
  openGraph: {
    title: "Projects — Dan Thomson",
    description: "Sensay AI, books on Digital Immortality, and angel investments.",
  },
};

const currentVentures = [
  { name: "Sensay", url: "https://sensay.io" },
  { name: "$SNSY", url: "https://snsy.ai" },
  { name: "Draftr", url: "https://draftr.co" },
  { name: "Trima", url: null, note: "Coming Soon" },
  { name: "Forget Me Not", url: null, note: "Coming Soon" },
  { name: "Dgaf.ai", url: "https://dgaf.ai" },
  { name: "Clonez", url: "https://clonez.io" },
  { name: "Key Person Replicas", url: "https://kpreplicas.com" },
  { name: "CelebChat", url: "https://celebchat.app" },
  { name: "Twim", url: "https://twim.live" },
  { name: "NEXLY", url: "https://nexly.xyz" },
  { name: "hirenet.ai", url: "https://hirenet.ai" },
  { name: "Eternas", url: "https://eternas.ai" },
  { name: "KOLZ", url: "https://kolz.chat" },
  { name: "tutorbud", url: null },
  { name: "coachbeyond", url: null },
  { name: "expertchat", url: null },
];

const pastVentures = [
  "Rock Crypto Fund",
  "RESTEK",
  "Supernatural",
  "Pacifico Burritos",
  "Atlantic Sushi",
  "Paradise Tiki Bar",
  "Squish Juice",
  "Juice Club",
  "BYOC",
  "Zenna",
];

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Projects
      </h1>
      <p className="text-neutral-500 mb-12">
        From building AI companies to writing books to backing founders.
      </p>

      {/* Sensay */}
      <section id="sensay" className="mb-12 scroll-mt-24">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Current Focus
        </h2>
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Sensay</h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          As Founder & CEO of Sensay, I&apos;m leading the charge on digital immortality. 
          We&apos;re building AI technology that creates digital replicas of people—preserving 
          their knowledge, personality, and wisdom for future generations.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          Our AI replicas aren&apos;t just chatbots. They capture the essence of a person: 
          how they think, what they know, their values and perspectives.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a
            href="https://sensay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            sensay.io →
          </a>
          <a
            href="https://www.coingecko.com/en/coins/sensay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900"
          >
            $SNSY Token
          </a>
        </div>
      </section>

      {/* Ventures Current */}
      <section id="ventures-current" className="mb-12 scroll-mt-24">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Ventures — Current
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
          {currentVentures.map((venture) => (
            <div key={venture.name}>
              {venture.url ? (
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  {venture.name}
                </a>
              ) : (
                <span className="text-neutral-600">
                  {venture.name}
                  {venture.note && (
                    <span className="text-neutral-400 text-xs ml-1">({venture.note})</span>
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ventures Past */}
      <section id="ventures-past" className="mb-12 scroll-mt-24">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Ventures — Past
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-neutral-500">
          {pastVentures.map((venture) => (
            <div key={venture}>{venture}</div>
          ))}
        </div>
      </section>

      {/* Books */}
      <section id="books" className="mb-12 scroll-mt-24">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Books
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          I&apos;ve written two books exploring what it means to live forever through 
          technology—the philosophical implications, practical applications, and 
          the future of human legacy.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-neutral-900 text-sm">Immortality in a Digital Age</h3>
            <p className="text-neutral-500 text-sm mb-2">
              How we can live forever as digital copies of ourselves, and the 
              benefits and issues that may come with it.
            </p>
            <a
              href="https://www.amazon.com/Immortality-Digital-Age-ourselves-benefits/dp/1700712934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 text-sm link"
            >
              Buy on Amazon →
            </a>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900 text-sm">The Digital Afterlife: Exploring Mind Uploading</h3>
            <p className="text-neutral-500 text-sm mb-2">
              A deep exploration into the future of human consciousness and the 
              frontier where mind melds with technology.
            </p>
            <a
              href="https://www.amazon.com/Digital-Afterlife-Exploring-Mind-Uploading/dp/B0BZ6SVZNP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 text-sm link"
            >
              Buy on Amazon →
            </a>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900 text-sm">Endless - Life After Upload</h3>
            <p className="text-neutral-500 text-sm">
              Currently writing — exploring the future of consciousness and digital existence.
            </p>
          </div>
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="mb-12 scroll-mt-24">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Angel Investing
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          I invest up to $1M in early-stage startups and actively mentor founders. 
          If you&apos;re building something interesting in these spaces, I&apos;d love to talk.
        </p>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-neutral-900">AI & Machine Learning</span>
            <p className="text-neutral-500">
              Applications that enhance human capabilities and preserve human value.
            </p>
          </div>
          <div>
            <span className="font-medium text-neutral-900">Web3 & Blockchain</span>
            <p className="text-neutral-500">
              Decentralized technologies that give power back to users and creators.
            </p>
          </div>
          <div>
            <span className="font-medium text-neutral-900">Hospitality & Travel</span>
            <p className="text-neutral-500">
              As someone who&apos;s visited 110 countries, I understand what makes 
              great travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Advisory
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Beyond investing, I take on select advisory and board positions where 
          I can contribute strategic value—go-to-market strategy, fundraising guidance, 
          and scaling operations for AI and Web3 startups.
        </p>
      </section>

      {/* CTA */}
      <section className="pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-500">
          Have a pitch?{" "}
          <a
            href="https://calendly.com/dan-thomson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Book a call
          </a>
          {" "}or{" "}
          <Link href="/contact" className="text-neutral-900 link">
            send a message
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
