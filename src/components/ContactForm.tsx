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
      <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h3 className="text-xl font-bold mb-2 text-green-400">Message Sent!</h3>
        <p className="text-zinc-400">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-amber-400 hover:text-amber-300 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-zinc-100 placeholder-zinc-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-zinc-100 placeholder-zinc-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-zinc-100"
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
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-zinc-100 placeholder-zinc-500 resize-none"
          placeholder="Tell me about your project, opportunity, or question..."
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 disabled:cursor-not-allowed text-zinc-900 font-semibold rounded-xl transition-all"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-zinc-500 text-xs text-center">
        Your information is private and will never be shared.
      </p>
    </form>
  );
}
