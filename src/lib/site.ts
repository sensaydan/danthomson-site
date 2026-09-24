export const SITE_URL = "https://danthomson.co.uk";
export const SITE_NAME = "Dan Thomson";
export const TWITTER_HANDLE = "@sensaydan";

// Curated identity URLs. LinkedIn/Instagram cannot be verified programmatically
// (they return anti-bot 999s), so these mirror the profile handles used across
// the site's contact/footer (assumed authoritative over prior schema defaults).
export const SOCIAL = {
  twitter: "https://twitter.com/sensaydan",
  linkedin: "https://linkedin.com/in/dan-thomson-sensay",
  instagram: "https://instagram.com/danttravels",
  github: "https://github.com/sensaydan",
  telegram: "https://t.me/sensaydan",
  medium: "https://asksensay.medium.com",
} as const;

export function canonicalFor(path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
}
