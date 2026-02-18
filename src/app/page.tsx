import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <Image
            src="/images/dan-headshot.png"
            alt="Dan Thomson"
            width={80}
            height={80}
            className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover"
            priority
          />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-900">
              Dan Thomson
            </h1>
            <p className="text-neutral-500 text-sm">
              CEO @ Sensay · Author · Angel Investor
            </p>
          </div>
        </div>

        <p className="text-neutral-600 leading-relaxed mb-4">
          I&apos;m building{" "}
          <a 
            href="https://sensay.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Sensay
          </a>
          , pioneering digital immortality through AI. We create technology that 
          preserves human knowledge, personality, and wisdom for future generations.
        </p>

        <p className="text-neutral-600 leading-relaxed mb-8">
          Philosophy @ King&apos;s College London. MBA @ Cambridge. 
          110 countries. Based in Mexico City.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="https://calendly.com/dan-thomson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 link"
          >
            Book a call →
          </a>
          <a
            href="https://twitter.com/sensaydan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900"
          >
            @sensaydan
          </a>
          <a
            href="mailto:dan@sensay.io"
            className="text-neutral-500 hover:text-neutral-900"
          >
            dan@sensay.io
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Values
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Freedom & Adventure</li>
          <li>Push Boundaries</li>
          <li>Innovate</li>
          <li>Stay Drama Free</li>
          <li>Experiences &gt; Materialistic things</li>
          <li>Preserve my knowledge and stories. Build Digital Immortality.</li>
        </ul>
      </section>

      {/* Now */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Now
        </h2>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-4">
            <span className="text-neutral-400 w-24 flex-shrink-0">Sensay</span>
            <span className="text-neutral-600">Building AI replicas that preserve human wisdom</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-24 flex-shrink-0">Writing</span>
            <span className="text-neutral-600">Third book: &quot;Endless - Life After Upload&quot;</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-24 flex-shrink-0">Research</span>
            <span className="text-neutral-600">Digital Replicas for Alzheimer&apos;s & Dementia patients</span>
          </li>
          <li className="flex gap-4">
            <span className="text-neutral-400 w-24 flex-shrink-0">Investing</span>
            <span className="text-neutral-600">Angel investments in AI, Web3, Hospitality</span>
          </li>
        </ul>
      </section>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Explore
        </h2>
        <div className="space-y-2 text-sm">
          <Link href="/about" className="block text-neutral-600 hover:text-neutral-900">
            About me →
          </Link>
          <Link href="/projects" className="block text-neutral-600 hover:text-neutral-900">
            Projects →
          </Link>
          <Link href="/speaking" className="block text-neutral-600 hover:text-neutral-900">
            Speaking →
          </Link>
          <Link href="/contact" className="block text-neutral-600 hover:text-neutral-900">
            Contact →
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Highlights
        </h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-neutral-900">110</div>
            <div className="text-xs text-neutral-500">Countries</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-neutral-900">2</div>
            <div className="text-xs text-neutral-500">Books</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-neutral-900">$1M+</div>
            <div className="text-xs text-neutral-500">Invested</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-neutral-900">CEO</div>
            <div className="text-xs text-neutral-500">Sensay</div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="mb-12 pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-500">
          Building something interesting? Want to discuss AI, Web3, or investing?{" "}
          <Link href="/contact" className="text-neutral-900 link">
            Let&apos;s talk
          </Link>
          .
        </p>
      </section>

      {/* Philosophical Closing */}
      <section className="pt-8 border-t border-neutral-100">
        <p className="text-sm text-neutral-400 leading-relaxed italic">
          &quot;Who knows where I am in the world or where I&apos;ll be next week. This little bit of time we have on this floating rock in infinite space is for us to find ourselves and leave it a little bit better than when we started. Our improbable evolution of our own consciousness is a wonderful occurrence, no matter what may have caused it. We should make the most of it even if we may be a stepping stone on the evolutionary path, nothing more than monkeys with shiny toys. Perhaps Artificial Intelligence is the inevitable consequence of all evolved civilisations. Either way, it looks like we could get answers real soon. What a time to be alive.&quot;
        </p>
      </section>
    </div>
  );
}
