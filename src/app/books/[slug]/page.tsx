import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook } from "@/lib/books";
import { SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};
  const url = `/books/${book.slug}`;
  return {
    title: book.title,
    description: book.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${book.title} — Dan Thomson`,
      description: book.description,
      type: "book",
    },
    twitter: {
      title: `${book.title} — Dan Thomson`,
      description: book.description,
    },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const canonical = `${SITE_URL}/books/${book.slug}`;

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    url: canonical,
    author: {
      "@type": "Person",
      name: "Dan Thomson",
      url: SITE_URL,
    },
    description: book.description,
    ...(book.isbn ? { isbn: book.isbn } : {}),
    workExample: [
      {
        "@type": "Book",
        url: book.amazonUrl,
        bookFormat: "https://schema.org/Paperback",
        potentialAction: {
          "@type": "BuyAction",
          target: book.amazonUrl,
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/books` },
      { "@type": "ListItem", position: 3, name: book.title, item: canonical },
    ],
  };

  const prev = books.find((b) => b.order === book.order - 1);
  const next = books.find((b) => b.order === book.order + 1);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <nav className="text-xs text-neutral-400 mb-6">
        <Link href="/books" className="hover:text-neutral-900">
          ← All books
        </Link>
      </nav>

      <div className="text-xs text-neutral-400 uppercase tracking-wider mb-2">
        Book {book.order} of 3 · Digital Immortality series
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
        {book.title}
      </h1>
      <p className="text-neutral-500 mb-8">{book.tagline}</p>

      <section className="mb-10">
        <p className="text-neutral-700 leading-relaxed">{book.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
          Where to buy
        </h2>
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 link text-sm"
        >
          Buy on Amazon →
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
          About the author
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Dan Thomson is the founder and CEO of{" "}
          <a
            href="https://sensay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Sensay
          </a>
          , a company building AI digital replicas that preserve human
          knowledge, personality, and wisdom.{" "}
          <Link href="/about" className="text-neutral-900 link">
            More about Dan
          </Link>
          .
        </p>
      </section>

      <section className="pt-8 border-t border-neutral-100 flex flex-wrap justify-between gap-4 text-sm">
        <div>
          {prev && (
            <Link href={`/books/${prev.slug}`} className="text-neutral-900 link">
              ← {prev.title}
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link href={`/books/${next.slug}`} className="text-neutral-900 link">
              {next.title} →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
