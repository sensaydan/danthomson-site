// Book data. Titles, descriptions, and purchase URLs come from the existing
// projects page (verified against the actual Amazon listings referenced there).
// No reviews, awards, testimonials, or excerpts are asserted here.

export type Book = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  order: number; // position in the trilogy
  publishedYear?: number;
  amazonUrl: string;
  isbn?: string;
};

export const books: Book[] = [
  {
    slug: "immortality-in-a-digital-age",
    title: "Immortality in a Digital Age",
    tagline: "Book one of the trilogy.",
    description:
      "An exploration of how we might live on as digital copies of ourselves, and the benefits and issues that may come with it.",
    order: 1,
    amazonUrl:
      "https://www.amazon.com/Immortality-Digital-Age-ourselves-benefits/dp/1700712934",
    isbn: "1700712934",
  },
  {
    slug: "the-digital-afterlife",
    title: "The Digital Afterlife: Exploring Mind Uploading",
    tagline: "Book two of the trilogy.",
    description:
      "A deeper look at the future of human consciousness and the frontier where mind melds with technology.",
    order: 2,
    amazonUrl:
      "https://www.amazon.com/Digital-Afterlife-Exploring-Mind-Uploading/dp/B0BZ6SVZNP",
  },
  {
    slug: "endless-life-after-upload",
    title: "Endless — Life After Upload",
    tagline: "Book three of the trilogy.",
    description:
      "The final book in the trilogy. A philosophical exploration of what happens after we upload our minds — identity, meaning, and existence in a digital realm.",
    order: 3,
    amazonUrl: "https://amzn.eu/d/0bQOK2Zn",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
