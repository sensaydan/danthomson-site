import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
            <Link href="/about" className="hover:text-neutral-900">About</Link>
            <Link href="/projects" className="hover:text-neutral-900">Projects</Link>
            <Link href="/speaking" className="hover:text-neutral-900">Speaking</Link>
            <Link href="/contact" className="hover:text-neutral-900">Contact</Link>
          </div>
          
          <div className="flex gap-4 text-sm text-neutral-400">
            <a
              href="https://twitter.com/sensaydan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/sensaydan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Dan Thomson</p>
          <p>dan@sensay.io</p>
        </div>
      </div>
    </footer>
  );
}
