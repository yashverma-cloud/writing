/** Single source of truth for identity strings used in metadata and JSON-LD. */

/** The main site, where the person, the work and the contact details live. */
export const MAIN_URL = 'https://yashverma.cloud';

export const SITE = {
  url: 'https://writing.yashverma.cloud',
  name: 'Yash Verma',
  /** Official title, must match the resume and the main site. */
  jobTitle: 'Infrastructure Engineer, Cloud Operations',
  employer: 'Copado',
  location: 'India · IST',
  title: 'Writing — Yash Verma',
  description:
    'Postmortems and notes on running production infrastructure — Kubernetes, autoscaling, cost and observability on AWS and GCP.',
  analyticsId: 'G-75ZS56MGG5',
  /** Attribution on X link cards (twitter:site). */
  xHandle: '@yashverma_cloud',
} as const;

/** Assembled in the browser so no raw address appears in the HTML. */
export const EMAIL_PARTS = ['yash', 'yashverma.cloud'] as const;

/**
 * Every profile that is the same person, for JSON-LD `sameAs`. Not the site's visible links:
 * those are LinkedIn, GitHub and email only (src/content/links.yaml). List only accounts that
 * still exist: a dead URL here is worse than a missing one.
 */
export const SAME_AS = [
  'https://www.linkedin.com/in/yashcloud/',
  'https://github.com/yashverma-cloud',
  'https://www.instagram.com/yashverma_cloud/',
  'https://www.facebook.com/yashverma.cloud',
  'https://x.com/yashverma_cloud',
  'https://www.threads.com/@yashverma_cloud',
] as const;

/**
 * Absolute URL of an OG image, versioned with the deploy's commit (Cloudflare Pages sets
 * CF_PAGES_COMMIT_SHA at build time). Each deploy gets new image URLs, so neither Cloudflare's
 * edge cache (/og/* is cached for 30 days) nor a link preview cache can keep an old card.
 */
export function ogImageHref(path: string): string {
  const url = new URL(path, SITE.url);
  // Read through globalThis: this module is also bundled for the browser, which has no process.
  const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env;
  const version = (env?.CF_PAGES_COMMIT_SHA ?? '').slice(0, 7);
  if (version) url.searchParams.set('v', version);
  return url.href;
}
