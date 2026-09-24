import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investing",
  description:
    "Dan Thomson is interested in technology and crypto founders. How to get in touch.",
  alternates: { canonical: "/investing" },
  openGraph: {
    url: "/investing",
    title: "Investing — Dan Thomson",
    description:
      "Technology and crypto founders — how to reach out with your company.",
  },
  twitter: {
    title: "Investing — Dan Thomson",
    description:
      "Technology and crypto founders — how to reach out.",
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
        Interested in technology and crypto companies.
      </p>

      <section className="mb-12 space-y-4 text-neutral-600 leading-relaxed">
        <p>
          If you&apos;re a founder building in technology or crypto, I&apos;d
          be glad to hear from you.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          What to send
        </h2>
        <p className="text-sm text-neutral-500 mb-3">
          A short note is enough to start. If it&apos;s helpful, include:
        </p>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>What you&apos;re building, in a sentence or two</li>
          <li>Who&apos;s on the team</li>
          <li>What stage you&apos;re at</li>
          <li>Any traction or signal so far</li>
          <li>What you&apos;re raising, if you are</li>
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
