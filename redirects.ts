// redirects.ts  — import into next.config.ts (see bottom of file)
//
// WHY A RESOLVER: hairskill.com already 301s several merged posts. Renaming a
// post that others point to would create chains (A -> B -> C). finalPath() follows
// every old slug to its FINAL destination so every rule is a single hop.
//
// Status code: `statusCode: 301` is used (not `permanent: true`, which emits 308).
// Google treats 301 and 308 the same; use whichever your team prefers.

type Redirect = { source: string; destination: string; statusCode: 301 };

/** Flip to 1 ONLY after the Search Console check described in report section 1.5 (per pair). */
const MERGE_INTO_SERVICE_PAGES = process.env.MERGE_BLOGS_INTO_SERVICE_PAGES === '1';

const blogPath = (slug: string) => `/blogs/${slug}`;

/** 1) Plain renames: old slug -> new slug (post stays, URL gets cleaner). */
const RENAMES: Record<string, string> = {
  'best-hair-doctor-lahore': 'best-hair-transplant-surgeon-lahore',
  'hair-transplant-cost-lahore-2026': 'hair-transplant-cost-factors-lahore',
  'hair-transplant-for-diabetic-and-blood-pressure-patients-lahore':
    'hair-transplant-for-diabetic-patients-lahore',
  'scalp-micropigmentation-lahore-smp-treatment': 'scalp-micropigmentation-lahore',
};

/** 2) Posts ALREADY merged on the live site (verified 2026-11-05) or listed in the
 *    sitemap but retired. old slug -> surviving slug. Re-pointed so there are no chains. */
const ALREADY_MERGED: Record<string, string> = {
  'hair-transplant-lahore-10-things': 'best-hair-doctor-lahore', // verified: redirects today
  'best-hair-transplant-surgeon-lahore-checklist': 'best-hair-doctor-lahore', // verified
  'dhi-hair-transplant-cost-in-pakistan': 'dhi-hair-transplant-lahore-procedure-benefits', // verified
  'prp-hair-treatment-cost-lahore-price': 'best-prp-hair-treatment-lahore', // verified
  'female-hair-transplant-cost-lahore': 'female-hair-transplant-lahore-fue', // verified
  'hair-transplant-method-by-baldness-stage': 'dhi-vs-fue-hair-transplant-lahore', // verified
  // NOT yet verified by fetch — confirm with the curl script before shipping:
  'female-hair-transplant-results-recovery-success': 'female-hair-transplant-lahore-fue',
  'hair-transplant-results-timeline-lahore': 'hair-transplant-recovery-timeline-lahore',
};

/** 3) Blog posts that target the same head keyword as a service page.
 *    MERGE flag ON  -> 301 post -> service page.
 *    MERGE flag OFF -> post stays (renamed to `keepAs` if the slug is weak). */
const CANNIBALS: { slug: string; servicePage: string; keepAs: string }[] = [
  { slug: 'dhi-hair-transplant-lahore-procedure-benefits', servicePage: '/hair-transplant/treatments/dhi', keepAs: 'dhi-hair-transplant-lahore-procedure-benefits' },
  { slug: 'female-hair-transplant-lahore-fue', servicePage: '/hair-transplant/treatments/female', keepAs: 'female-hair-transplant-lahore-fue' },
  { slug: 'best-prp-hair-treatment-lahore', servicePage: '/hair-transplant/treatments/prp-hair-treatment', keepAs: 'best-prp-hair-treatment-lahore' },
  { slug: 'beard-transplant-lahore-cost-procedure', servicePage: '/hair-transplant/treatments/beard-transplant', keepAs: 'beard-transplant-lahore-cost-procedure' },
  { slug: 'sideburn-hair-transplant-lahore', servicePage: '/hair-transplant/treatments/sideburn', keepAs: 'sideburn-hair-transplant-lahore' },
  { slug: 'afro-hair-transplant-in-lahore', servicePage: '/hair-transplant/treatments/afro-hair', keepAs: 'afro-hair-transplant-in-lahore' },
  { slug: 'hair-mesotherapy-in-lahore-stop-hair-fall', servicePage: '/hair-transplant/treatments/mesotherapy', keepAs: 'hair-mesotherapy-lahore' },
  { slug: 'ozone-hair-treatment-lahore-scalp-rejuvenation', servicePage: '/hair-transplant/treatments/ozone-hair-therapy', keepAs: 'ozone-hair-treatment-lahore' },
  { slug: 'fut-hair-transplant-cost-lahore', servicePage: '/hair-transplant/treatments/fut', keepAs: 'fut-hair-transplant-lahore-guide' },
];

function finalPath(slug: string, seen: Set<string> = new Set()): string {
  if (seen.has(slug)) throw new Error(`Redirect loop at "${slug}"`);
  seen.add(slug);

  const cannibal = CANNIBALS.find((c) => c.slug === slug);
  if (cannibal) {
    if (MERGE_INTO_SERVICE_PAGES) return cannibal.servicePage;
    return cannibal.keepAs === slug ? blogPath(slug) : finalPath(cannibal.keepAs, seen);
  }
  if (RENAMES[slug]) return finalPath(RENAMES[slug], seen);
  if (ALREADY_MERGED[slug]) return finalPath(ALREADY_MERGED[slug], seen);
  return blogPath(slug);
}

const RETIRED_SLUGS = [
  ...Object.keys(RENAMES),
  ...Object.keys(ALREADY_MERGED),
  ...CANNIBALS.map((c) => c.slug),
];

/** Every URL pattern that has been (or is being) advertised for a post. */
const PREFIXES = ['/blogs', '/blogs/hair-transplant', '/blogs/hair-loss'];

export function buildBlogRedirects(): Redirect[] {
  const rules: Redirect[] = [];

  // Explicit rules FIRST (Next.js applies the first match).
  for (const slug of RETIRED_SLUGS) {
    const destination = finalPath(slug);
    if (destination === blogPath(slug)) continue; // slug survives unchanged
    for (const prefix of PREFIXES) {
      rules.push({ source: `${prefix}/${slug}`, destination, statusCode: 301 });
    }
  }

  // Catch-all LAST: the sitemap advertised /blogs/<category>/<slug>, but the live
  // route is flat /blogs/<slug>. Send every nested URL to its flat equivalent.
  rules.push({ source: '/blogs/hair-transplant/:slug', destination: '/blogs/:slug', statusCode: 301 });
  rules.push({ source: '/blogs/hair-loss/:slug', destination: '/blogs/:slug', statusCode: 301 });

  return rules;
}

export const blogRedirects = buildBlogRedirects();

/** True when a post URL now redirects elsewhere. Use it to keep retired slugs out of the sitemap. */
export const isRetiredSlug = (slug: string) =>
  RETIRED_SLUGS.includes(slug) && finalPath(slug) !== blogPath(slug);

// ------------------------------------------------------------
// next.config.ts
// ------------------------------------------------------------
// import type { NextConfig } from 'next';
// import { blogRedirects } from './redirects';
//
// const nextConfig: NextConfig = {
//   async redirects() {
//     return [...blogRedirects]; // append your other redirects here
//   },
// };
// export default nextConfig;
