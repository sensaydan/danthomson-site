import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investing",
  description:
    "Dan Thomson invests in early-stage technology and crypto founders. Read what he looks for and how to get in touch.",
  alternates: { canonical: "/investing" },
  openGraph: {
    url: "/investing",
    title: "Investing — Dan Thomson",
    description:
      "Early-stage angel investing in technology and crypto. How to reach out with your company.",
  },
  twitter: {
    title: "Investing — Dan Thomson",
    description:
      "Early-stage angel investing in technology and crypto founders.",
  },
};

export default function InvestingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Investing", item: `${SITE_URL}/investing` },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Investing
      </h1>
      <p className="text-neutral-500 mb-12">
        I back early-stage founders building in technology and crypto.
      </p>

      <section className="mb-12 space-y-4 text-neutral-600 leading-relaxed">
        <p>
          I&apos;m a founder first, and I invest the way I&apos;d want to be
          invested in — quickly, honestly, and out of the way once the cheque
          clears. I&apos;m most useful in the messy early days: sharpening the
          story, opening doors, and being a sober second brain when things get
          noisy.
        </p>
        <p>
          I lean toward technology and crypto companies where the founders are
          closer to the problem than anyone else. I&apos;m allergic to hype,
          and I&apos;d rather back a serious team building quietly than a loud
          one chasing a narrative.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          What interests me
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>AI products with a real user, not a demo</li>
          <li>Crypto and web3 with a use case beyond speculation</li>
          <li>Consumer and prosumer tools people actually come back to</li>
          <li>Founders who&apos;ve already shipped, sold, or survived something hard</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          When to reach out
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Any stage is fine, but I&apos;m most helpful pre-seed or seed, before
          the round is fully packaged. I read everything, I try to reply, and I
          say no quickly and kindly when it&apos;s not a fit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          What to send
        </h2>
        <p className="text-sm text-neutral-500 mb-3">
          A short note beats a long deck. If you can, cover:
        </p>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>What you&apos;re building, in one or two sentences</li>
          <li>Who&apos;s building it and why you</li>
          <li>Stage, and any traction or signal so far</li>
          <li>What you&apos;re raising and roughly what you need</li>
          <li>How I can be useful beyond capital</li>
        </ul>
      </section>

      <section className="pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-500">
          Building something?{" "}
          <Link href="/contact" className="text-neutral-900 link">
            Get in touch
          </Link>
          {" "}— tell me about your company.
        </p>
      </section>
    </div>
  );
}
