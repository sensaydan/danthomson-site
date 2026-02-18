import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://danthomson.ai'),
  title: {
    default: "Dan Thomson",
    template: "%s - Dan Thomson"
  },
  description: "Founder & CEO of Sensay, author, angel investor, and explorer of 110 countries. Building the future of AI and human legacy.",
  keywords: ["Dan Thomson", "Sensay", "Digital Immortality", "AI", "Web3", "Angel Investor", "Author", "Explorer"],
  authors: [{ name: "Dan Thomson" }],
  creator: "Dan Thomson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danthomson.ai",
    siteName: "Dan Thomson",
    title: "Dan Thomson",
    description: "Founder & CEO of Sensay, author, angel investor, and explorer of 110 countries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dan Thomson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Thomson",
    description: "Founder & CEO of Sensay, author, angel investor, and explorer of 110 countries.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dan Thomson",
              url: "https://danthomson.ai",
              image: "https://danthomson.ai/images/dan-headshot.png",
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
      <body className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
