import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/lib/books";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Books",
  description:
    "The Digital Immortality trilogy by Dan Thomson: Immortality in a Digital Age, The Digital Afterlife, and Endless — Life After Upload.",
  alternates: { canonical: "/books" },
  openGraph: {
    url: "/books",
    title: "Books — Dan Thomson",
    description:
      "A three-book series on digital immortality, mind uploading, and what it means to live on through technology.",
  },
  twitter: {
    title: "Books — Dan Thomson",
    description:
      "Dan Thomson's three-book series on digital immortality and mind uploading.",
  },
};

export default function BooksIndex() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/books` },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Books
      </h1>
      <p className="text-neutral-500 mb-12">
        A three-book series exploring digital immortality — the philosophical
        implications of preserving consciousness, the practicalities of mind
        uploading, and what existence might look like on the other side.
      </p>

      <ol className="space-y-8">
        {books.map((book) => (
          <li key={book.slug}>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
              Book {book.order} of 3
            </div>
            <h2 className="text-lg font-semibold text-neutral-900">
              <Link href={`/books/${book.slug}`} className="link">
                {book.title}
              </Link>
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              {book.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-3">
              <Link
                href={`/books/${book.slug}`}
                className="text-neutral-900 link"
              >
                Read more →
              </Link>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900"
              >
                Buy on Amazon
              </a>
            </div>
          </li>
        ))}
      </ol>

      <section className="pt-8 mt-12 border-t border-neutral-100 text-sm text-neutral-500">
        More on the ideas behind the books:{" "}
        <Link href="/writing" className="text-neutral-900 link">
          Writing
        </Link>{" "}
        ·{" "}
        <Link href="/about" className="text-neutral-900 link">
          About
        </Link>
        .
      </section>
    </div>
  );
}
