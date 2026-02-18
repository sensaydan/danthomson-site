import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dan Thomson. Book a call, send a message, or connect on social media.",
  openGraph: {
    title: "Contact | Dan Thomson",
    description: "Book a call or send a message to Dan Thomson.",
  },
};

const socialLinks = [
  {
    name: "Twitter / X",
    handle: "@sensaydan",
    href: "https://twitter.com/sensaydan",
    icon: "𝕏",
  },
  {
    name: "LinkedIn",
    handle: "sensaydan",
    href: "https://linkedin.com/in/sensaydan",
    icon: "in",
  },
  {
    name: "Instagram",
    handle: "@sensaydan",
    href: "https://instagram.com/sensaydan",
    icon: "📷",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Whether you want to discuss a project, explore an investment opportunity, 
          book me for speaking, or just say hello—I&apos;d love to hear from you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
            
            {/* Book a Call */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 mb-6">
              <h3 className="text-lg font-bold mb-2">📞 Book a Call</h3>
              <p className="text-zinc-400 text-sm mb-4">
                The fastest way to connect. Schedule a time that works for you.
              </p>
              <a
                href="https://calendly.com/sensaydan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-lg transition-all text-sm"
              >
                Open Calendly
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mb-6">
              <h3 className="text-lg font-bold mb-2">📧 Email</h3>
              <p className="text-zinc-400 text-sm mb-2">
                For formal inquiries or if you prefer email:
              </p>
              <a
                href="mailto:dan@sensay.io"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                dan@sensay.io
              </a>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-lg font-bold mb-4">🌐 Social Media</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-lg text-sm font-bold">
                        {social.icon}
                      </span>
                      <div>
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-zinc-500 text-xs">{social.handle}</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-lg font-bold mb-2">📍 Based In</h3>
              <p className="text-zinc-400">
                Mexico City, Mexico 🇲🇽
              </p>
              <p className="text-zinc-500 text-sm mt-1">
                British by birth 🇬🇧 · Citizen of the world 🌍
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">Are you open to investment opportunities?</h3>
              <p className="text-zinc-400 text-sm">
                Yes! I invest up to $1M in early-stage startups in AI, Web3, and Hospitality. 
                Send me your pitch deck or book a call to discuss.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">Do you offer mentorship?</h3>
              <p className="text-zinc-400 text-sm">
                I mentor select founders, particularly those building in spaces I&apos;m passionate 
                about. Let&apos;s start with a call to see if there&apos;s a good fit.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">How can I book you for speaking?</h3>
              <p className="text-zinc-400 text-sm">
                Use the contact form above or email me directly with details about your event, 
                audience, and preferred topics. I speak at conferences, corporate events, and universities.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="font-bold mb-2">What&apos;s the best way to reach you?</h3>
              <p className="text-zinc-400 text-sm">
                For quick conversations, book a Calendly slot. For detailed inquiries with 
                attachments (like pitch decks), email works best. For casual interaction, 
                Twitter DMs are open.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
