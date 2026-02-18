import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://danthomson.ai'),
  title: {
    default: "Dan Thomson | CEO, Author & Explorer",
    template: "%s | Dan Thomson"
  },
  description: "Founder & CEO of Sensay, author of Digital Immortality books, angel investor, and explorer of 100+ countries. Building the future of AI and human legacy.",
  keywords: ["Dan Thomson", "Sensay", "Digital Immortality", "AI", "Web3", "Angel Investor", "Author", "Explorer"],
  authors: [{ name: "Dan Thomson" }],
  creator: "Dan Thomson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danthomson.ai",
    siteName: "Dan Thomson",
    title: "Dan Thomson | CEO, Author & Explorer",
    description: "Founder & CEO of Sensay, author of Digital Immortality books, angel investor, and explorer of 100+ countries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dan Thomson - CEO, Author & Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Thomson | CEO, Author & Explorer",
    description: "Founder & CEO of Sensay, author of Digital Immortality books, angel investor, and explorer of 100+ countries.",
    creator: "@sensaydan",
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
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dan Thomson",
              url: "https://danthomson.ai",
              image: "https://danthomson.ai/dan-thomson.jpg",
              jobTitle: "Founder & CEO",
              worksFor: {
                "@type": "Organization",
                name: "Sensay",
                url: "https://sensay.io",
              },
              sameAs: [
                "https://twitter.com/sensaydan",
                "https://linkedin.com/in/sensaydan",
                "https://instagram.com/sensaydan",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "King's College London",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "University of Cambridge",
                },
              ],
              knowsAbout: ["Artificial Intelligence", "Digital Immortality", "Web3", "Entrepreneurship"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
