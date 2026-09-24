import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dan Thomson — book a call, send an email, or connect on Twitter, LinkedIn, Instagram, Telegram, or GitHub.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact — Dan Thomson",
    description:
      "Book a call, email dan@sensay.io, or reach out on your preferred social network.",
  },
  twitter: {
    title: "Contact — Dan Thomson",
    description: "Book a call, email, or DM Dan Thomson.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        Contact
      </h1>
      <p className="text-neutral-500 mb-12">
        Whether you want to discuss a project, explore an investment opportunity, 
        book me for speaking, or just say hello.
      </p>

      <div className="space-y-8 text-sm">
        {/* Book a Call */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
            Book a call
          </h2>
          <p className="text-neutral-500 mb-2">
            The fastest way to connect.
          </p>
          <a
            href="https://calendly.com/dan-thomson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Open Calendly →
          </a>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
            Email
          </h2>
          <a
            href="mailto:dan@sensay.io"
            className="text-neutral-900 link"
          >
            dan@sensay.io
          </a>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
            Social
          </h2>
          <ul className="space-y-2 text-neutral-600">
            <li>
              <a
                href="https://t.me/sensaydan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                Telegram @sensaydan
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sensaydan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                Twitter @sensaydan
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/danttravels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                Instagram @danttravels
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/dan-thomson-sensay"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sensaydan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://asksensay.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
            Based in
          </h2>
          <p className="text-neutral-600">
            Mexico City 🇲🇽
          </p>
          <p className="text-neutral-400 text-xs mt-1">
            British by birth 🇬🇧
          </p>
        </div>
      </div>
    </div>
  );
}
