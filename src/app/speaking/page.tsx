import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Dan Thomson for speaking engagements on AI, digital immortality, Web3, entrepreneurship, angel investing, and the explorer's mindset.",
  alternates: { canonical: "/speaking" },
  openGraph: {
    url: "/speaking",
    title: "Speaking — Dan Thomson",
    description:
      "Keynotes, panels, corporate events, and university lectures on AI, digital immortality, Web3, and the future of human legacy.",
  },
  twitter: {
    title: "Speaking — Dan Thomson",
    description:
      "Keynotes and panels on AI, digital immortality, Web3, and the explorer's mindset.",
  },
};

const topics = [
  {
    title: "Digital Immortality & AI",
    description: "The future of preserving human consciousness and wisdom through AI technology.",
  },
  {
    title: "Building in Web3",
    description: "Lessons from building decentralized technology companies. What works, what doesn't.",
  },
  {
    title: "The Explorer's Mindset",
    description: "How traveling to 100+ countries shaped my approach to business and life.",
  },
  {
    title: "Philosophy in Business",
    description: "Applying philosophical thinking to entrepreneurship and decision-making.",
  },
  {
    title: "Angel Investing",
    description: "What I look for in founders and startups. Building ecosystems that foster innovation.",
  },
  {
    title: "The Future of Human Legacy",
    description: "How technology is changing what it means to be remembered.",
  },
];

export default function SpeakingPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Speaking
      </h1>
      <p className="text-neutral-500 mb-4">
        I speak at conferences, corporate events, and universities about AI, 
        digital immortality, entrepreneurship, and the explorer&apos;s mindset.
      </p>
      <p className="mb-12">
        <a
          href="https://calendly.com/dan-thomson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 text-sm link"
        >
          Book for an event →
        </a>
      </p>

      {/* Topics */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Topics
        </h2>
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.title}>
              <h3 className="font-medium text-neutral-900 text-sm">{topic.title}</h3>
              <p className="text-neutral-500 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Formats
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>🎤 Keynote talks (30-60 minutes)</li>
          <li>💬 Panel discussions</li>
          <li>🎙️ Podcasts & interviews</li>
          <li>🏢 Corporate events</li>
          <li>🎓 University lectures</li>
          <li>🌐 Virtual events</li>
        </ul>
      </section>

      {/* Past Events */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Previous Appearances
        </h2>
        <p className="text-sm text-neutral-500">
          International conferences, corporate keynotes, university lectures,
          and podcast interviews across AI, Web3, and entrepreneurship.
        </p>
        <p className="text-xs text-neutral-400 mt-2">
          A curated list of specific events is being compiled. To request references
          for a particular audience or format, please{" "}
          <Link href="/contact" className="text-neutral-900 link">get in touch</Link>.
        </p>
      </section>

      {/* CTA */}
      <section className="pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-500">
          Interested in having me speak?{" "}
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
            send an inquiry
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
