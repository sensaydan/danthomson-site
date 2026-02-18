import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Book Dan Thomson for speaking engagements on AI, Digital Immortality, Web3, entrepreneurship, and adventure.",
  openGraph: {
    title: "Speaking | Dan Thomson",
    description: "Book Dan Thomson for keynotes and panels on AI, Digital Immortality, and the future of technology.",
  },
};

const topics = [
  {
    icon: "🧠",
    title: "Digital Immortality & AI",
    description: "The future of preserving human consciousness and wisdom through AI technology. What it means for society, relationships, and what we leave behind.",
    tags: ["AI", "Future", "Philosophy"],
  },
  {
    icon: "🚀",
    title: "Building in Web3",
    description: "Lessons from the trenches of building decentralized technology companies. What works, what doesn't, and where we're heading.",
    tags: ["Web3", "Entrepreneurship", "Crypto"],
  },
  {
    icon: "🌍",
    title: "The Explorer's Mindset",
    description: "How traveling to 100+ countries and exploring extreme environments shaped my approach to business and life. Comfort is the enemy of growth.",
    tags: ["Adventure", "Mindset", "Leadership"],
  },
  {
    icon: "💡",
    title: "Philosophy in Business",
    description: "Applying philosophical thinking to entrepreneurship. How asking the right questions leads to building the right things.",
    tags: ["Philosophy", "Strategy", "Thinking"],
  },
  {
    icon: "💰",
    title: "Angel Investing & Startup Ecosystems",
    description: "What I look for in founders and startups. Building ecosystems that foster innovation in emerging markets.",
    tags: ["Investing", "Startups", "Mentorship"],
  },
  {
    icon: "♾️",
    title: "The Future of Human Legacy",
    description: "Beyond social media and digital footprints—how technology is changing what it means to be remembered and to leave a lasting impact.",
    tags: ["Future", "Technology", "Legacy"],
  },
];

const pastEvents = [
  "Web Summit",
  "Token2049",
  "AI conferences globally",
  "University lectures",
  "Corporate keynotes",
  "Podcast appearances",
];

export default function SpeakingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          Speaking
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-8">
          I speak at conferences, corporate events, and universities about AI, 
          digital immortality, entrepreneurship, and the explorer&apos;s mindset.
        </p>
        <a
          href="https://calendly.com/sensaydan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all"
        >
          Book for an Event
        </a>
      </section>

      {/* Topics */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-12">Topics I Speak On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{topic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Event Formats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-lg font-bold mb-2">Keynote Talks</h3>
              <p className="text-zinc-400 text-sm">
                30-60 minute presentations tailored to your audience and event theme.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Panel Discussions</h3>
              <p className="text-zinc-400 text-sm">
                Interactive conversations with other leaders on AI, Web3, and the future.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">🎙️</div>
              <h3 className="text-lg font-bold mb-2">Podcasts & Interviews</h3>
              <p className="text-zinc-400 text-sm">
                Deep-dive conversations for podcasts and media appearances.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-bold mb-2">Corporate Events</h3>
              <p className="text-zinc-400 text-sm">
                Private sessions for leadership teams on innovation and strategy.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-bold mb-2">University Lectures</h3>
              <p className="text-zinc-400 text-sm">
                Guest lectures on entrepreneurship, AI ethics, and building the future.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold mb-2">Virtual Events</h3>
              <p className="text-zinc-400 text-sm">
                Remote keynotes and panels for global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8">Previous Appearances</h2>
          <div className="flex flex-wrap gap-4">
            {pastEvents.map((event) => (
              <div
                key={event}
                className="px-6 py-3 bg-zinc-800 rounded-xl text-zinc-300"
              >
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 text-center">
            <h2 className="text-3xl font-bold font-serif mb-4">
              Interested in Having Me Speak?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              I&apos;d love to hear about your event. Book a call to discuss topics, 
              format, and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/sensaydan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all"
              >
                Book a Call
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border border-zinc-600 hover:border-zinc-400 text-zinc-100 font-semibold rounded-xl transition-all"
              >
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
