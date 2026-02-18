"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkvd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <p className="text-neutral-900 font-medium mb-2">Message sent!</p>
        <p className="text-neutral-500 text-sm mb-4">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-neutral-900 link"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-neutral-600 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0 outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-600 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0 outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-neutral-600 mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0 outline-none transition-colors"
        >
          <option value="">Select a topic...</option>
          <option value="investment">Investment Opportunity</option>
          <option value="speaking">Speaking Engagement</option>
          <option value="mentorship">Mentorship</option>
          <option value="partnership">Partnership / Collaboration</option>
          <option value="media">Media / Press</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-600 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:border-neutral-400 focus:ring-0 outline-none transition-colors resize-none"
          placeholder="Tell me about your project or question..."
        />
      </div>

      {status === "error" && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-4 py-2 text-sm bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-medium rounded-lg transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-neutral-400 text-xs text-center">
        Your information is private and will never be shared.
      </p>
    </form>
  );
}
