import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SOCIAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Where Dan Thomson writes: essays and posts on digital immortality, AI, Web3, and entrepreneurship on Medium and the Sensay blog.",
  alternates: { canonical: "/writing" },
  openGraph: {
    url: "/writing",
    title: "Writing — Dan Thomson",
    description:
      "Essays and posts on digital immortality, AI, Web3, and entrepreneurship.",
  },
  twitter: {
    title: "Writing — Dan Thomson",
    description:
      "Where to read Dan Thomson: Medium, the Sensay blog, and the Digital Immortality book series.",
  },
};

const links = [
  {
    title: "Medium — @asksensay",
    href: SOCIAL.medium,
    summary:
      "Longer-form posts on digital immortality, AI replicas, and the ideas behind Sensay.",
  },
  {
    title: "Sensay Blog",
    href: "https://blog.sensay.io",
    summary:
      "Company writing on AI replicas, product updates, and applied research from the Sensay team.",
  },
  {
    title: "Twitter / X — @sensaydan",
    href: SOCIAL.twitter,
    summary:
      "Shorter thoughts on AI, Web3, angel investing, and life on the road across 110+ countries.",
  },
];

export default function WritingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Writing", item: `${SITE_URL}/writing` },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Writing
      </h1>
      <p className="text-neutral-500 mb-12">
        I write about digital immortality, AI, Web3, and what it means to build
        things that outlast us. The long-form ideas live in the{" "}
        <Link href="/books" className="text-neutral-900 link">
          book series
        </Link>
        ; the ongoing work lives on the platforms below.
      </p>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Where I publish
        </h2>
        <ul className="space-y-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 link text-sm font-medium"
              >
                {l.title} →
              </a>
              <p className="text-neutral-500 text-sm mt-1">{l.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Books
        </h2>
        <p className="text-sm text-neutral-600 mb-3">
          The three-book Digital Immortality series is the most complete
          expression of these ideas.
        </p>
        <Link href="/books" className="text-neutral-900 text-sm link">
          Browse the books →
        </Link>
      </section>

      <section className="pt-8 border-t border-neutral-100 text-sm text-neutral-500">
        Want to commission a piece or interview?{" "}
        <Link href="/contact" className="text-neutral-900 link">
          Get in touch
        </Link>
        .
      </section>
    </div>
  );
}
