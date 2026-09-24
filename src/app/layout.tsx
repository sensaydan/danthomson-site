import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE_URL, SOCIAL, TWITTER_HANDLE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dan Thomson | Entrepreneur, Author & Founder",
    template: "%s | Dan Thomson",
  },
  description:
    "Founder & CEO of Sensay, building AI digital twins for human legacy. Author, angel investor, and explorer of 110+ countries.",
  keywords: [
    "Dan Thomson",
    "Sensay",
    "Digital Immortality",
    "AI",
    "Web3",
    "Angel Investor",
    "Author",
    "Explorer",
    "Entrepreneur",
    "Founder",
  ],
  authors: [{ name: "Dan Thomson", url: SITE_URL }],
  creator: "Dan Thomson",
  publisher: "Dan Thomson",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Dan Thomson",
    title: "Dan Thomson | Entrepreneur, Author & Founder",
    description:
      "Founder & CEO of Sensay, building AI digital twins for human legacy. Author, angel investor, and explorer of 110+ countries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dan Thomson — Entrepreneur, Author & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: "Dan Thomson | Entrepreneur, Author & Founder",
    description:
      "Founder & CEO of Sensay, building AI digital twins for human legacy. Author, angel investor, and explorer of 110+ countries.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dan Thomson",
    url: SITE_URL,
    image: `${SITE_URL}/images/dan-headshot.png`,
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Sensay",
      url: "https://sensay.io",
    },
    sameAs: [
      SOCIAL.twitter,
      SOCIAL.linkedin,
      SOCIAL.instagram,
      SOCIAL.github,
      SOCIAL.medium,
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "King's College London" },
      { "@type": "CollegeOrUniversity", name: "University of Cambridge" },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Digital Immortality",
      "Web3",
      "Entrepreneurship",
      "Angel Investing",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
