import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dan Thomson. Book a call, send a message, or connect on social media.",
  openGraph: {
    title: "Contact — Dan Thomson",
    description: "Book a call or send a message to Dan Thomson.",
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

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
            Send a Message
          </h2>
          <ContactForm />
        </div>

        {/* Other Ways */}
        <div>
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
            Other Ways
          </h2>
          
          <div className="space-y-6 text-sm">
            {/* Book a Call */}
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Book a call</h3>
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
              <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
              <a
                href="mailto:dan@sensay.io"
                className="text-neutral-600 hover:text-neutral-900"
              >
                dan@sensay.io
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-medium text-neutral-900 mb-2">Social</h3>
              <ul className="space-y-1 text-neutral-600">
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
              <h3 className="font-medium text-neutral-900 mb-1">Based in</h3>
              <p className="text-neutral-600">
                Mexico City 🇲🇽
              </p>
              <p className="text-neutral-400 text-xs mt-1">
                British by birth 🇬🇧
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-16 pt-8 border-t border-neutral-100">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-6">
          Common Questions
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium text-neutral-900">Are you open to investment opportunities?</h3>
            <p className="text-neutral-500 mt-1">
              Yes! I invest up to $1M in early-stage startups in AI, Web3, and Hospitality. 
              Send me your pitch deck or book a call.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">Do you offer mentorship?</h3>
            <p className="text-neutral-500 mt-1">
              I mentor select founders, particularly those building in spaces I&apos;m passionate 
              about. Let&apos;s start with a call.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">How can I book you for speaking?</h3>
            <p className="text-neutral-500 mt-1">
              Use the contact form or email with details about your event, audience, and preferred topics.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">What&apos;s the best way to reach you?</h3>
            <p className="text-neutral-500 mt-1">
              For quick conversations, Calendly. For detailed inquiries with attachments, email. 
              For casual interaction, Twitter or Telegram DMs are open.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
