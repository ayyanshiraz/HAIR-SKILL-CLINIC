// redirects.ts
type Redirect = { source: string; destination: string; statusCode: 301 };

const MERGE_INTO_SERVICE_PAGES = process.env.MERGE_BLOGS_INTO_SERVICE_PAGES === '1';

const blogPath = (slug: string) => `/blogs/${slug}`;

const RENAMES: Record<string, string> = {
  'best-hair-doctor-lahore': 'best-hair-transplant-surgeon-lahore',
  'hair-transplant-cost-lahore-2026': 'hair-transplant-cost-factors-lahore',
  'hair-transplant-for-diabetic-and-blood-pressure-patients-lahore': 'hair-transplant-for-diabetic-patients-lahore',
  'scalp-micropigmentation-lahore-smp-treatment': 'scalp-micropigmentation-lahore',
  'failed-hair-transplant-repair-lahore': 'hair-transplant-repair-lahore',
  'understanding-male-pattern-baldness': 'male-pattern-baldness-treatment-lahore',
  'prp-after-hair-transplant-necessity': 'prp-after-hair-transplant',
  'how-many-grafts-needed-hair-transplant-lahore': 'how-many-grafts-for-hair-transplant',
  'hair-transplant-side-effects-lahore-guide': 'hair-transplant-side-effects-lahore',
  'hair-transplant-aftercare-mistakes-recovery': 'hair-transplant-aftercare-mistakes',
  'crown-hair-transplant-vertex-restoration-lahore': 'crown-hair-transplant-lahore'
};

const ALREADY_MERGED: Record<string, string> = {
  'hair-transplant-lahore-10-things': 'best-hair-doctor-lahore',
  'best-hair-transplant-surgeon-lahore-checklist': 'best-hair-doctor-lahore',
  'dhi-hair-transplant-cost-in-pakistan': 'dhi-hair-transplant-lahore-procedure-benefits',
  'prp-hair-treatment-cost-lahore-price': 'best-prp-hair-treatment-lahore',
  'female-hair-transplant-cost-lahore': 'female-hair-transplant-lahore-fue',
  'hair-transplant-method-by-baldness-stage': 'dhi-vs-fue-hair-transplant-lahore',
  'female-hair-transplant-results-recovery-success': 'female-hair-transplant-lahore-fue',
  'hair-transplant-results-timeline-lahore': 'hair-transplant-recovery-timeline-lahore',
};

const CANNIBALS: { slug: string; servicePage: string; keepAs: string }[] = [
  { slug: 'dhi-hair-transplant-lahore-procedure-benefits', servicePage: '/hair-transplant/treatments/dhi', keepAs: 'dhi-hair-transplant-lahore-procedure-benefits' },
  { slug: 'female-hair-transplant-lahore-fue', servicePage: '/hair-transplant/treatments/female', keepAs: 'female-hair-transplant-lahore-fue' },
  { slug: 'best-prp-hair-treatment-lahore', servicePage: '/hair-transplant/treatments/prp-hair-treatment', keepAs: 'best-prp-hair-treatment-lahore' },
  { slug: 'beard-transplant-lahore-cost-procedure', servicePage: '/hair-transplant/treatments/beard-transplant', keepAs: 'beard-transplant-lahore-cost-procedure' },
  { slug: 'sideburn-hair-transplant-lahore', servicePage: '/hair-transplant/treatments/sideburn', keepAs: 'sideburn-hair-transplant-lahore' },
  { slug: 'afro-hair-transplant-in-lahore', servicePage: '/hair-transplant/treatments/afro-hair', keepAs: 'afro-hair-transplant-lahore' },
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

const PREFIXES = ['/blogs', '/blogs/hair-transplant', '/blogs/hair-loss'];

export function buildBlogRedirects(): Redirect[] {
  const rules: Redirect[] = [];

  for (const slug of RETIRED_SLUGS) {
    const destination = finalPath(slug);
    if (destination === blogPath(slug)) continue;
    for (const prefix of PREFIXES) {
      rules.push({ source: `${prefix}/${slug}`, destination, statusCode: 301 });
    }
  }

  rules.push({ source: '/blogs/hair-transplant/:slug', destination: '/blogs/:slug', statusCode: 301 });
  rules.push({ source: '/blogs/hair-loss/:slug', destination: '/blogs/:slug', statusCode: 301 });

  return rules;
}

export const blogRedirects = buildBlogRedirects();

export const isRetiredSlug = (slug: string) =>
  RETIRED_SLUGS.includes(slug) && finalPath(slug) !== blogPath(slug);