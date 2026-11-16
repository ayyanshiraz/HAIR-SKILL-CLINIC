"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogsDatabase } from "../data";

const MAP: Record<string, string[]> = {
  "/hair-transplant/treatments/dhi": ["dhi-vs-fue-hair-transplant-lahore","how-many-grafts-for-hair-transplant","hair-transplant-recovery-timeline-lahore"],
  "/hair-transplant/treatments/prp-hair-treatment": ["prp-after-hair-transplant","causes-of-hair-fall-in-lahore"],
  "/hair-transplant/treatments/female": ["female-hair-transplant-lahore-fue","hair-transplant-preparation-lahore"],
  "/hair-transplant/treatments/mesotherapy": ["causes-of-hair-fall-in-lahore","how-to-prevent-hair-loss-in-lahore"],
  "/hair-transplant/treatments/fut": ["dhi-vs-fue-hair-transplant-lahore","how-many-grafts-for-hair-transplant"],
  "/hair-transplant/cost": ["hair-transplant-cost-factors-lahore","best-hair-transplant-surgeon-lahore"],
  "/doctors/dr-mansoor-ahmad": ["best-hair-transplant-surgeon-lahore","surgeon-led-hair-transplant-lahore","is-hair-transplant-safe-lahore"],
  "/patient-guide/after": ["hair-transplant-aftercare-mistakes","hair-transplant-side-effects-lahore","hair-transplant-recovery-timeline-lahore"],
};

export default function RelatedPosts() {
  // Yeh line khud URL check karegi
  const pathname = usePathname();
  
  // Agar URL humare MAP mein nahi hai, toh kuch nahi dikhayega (null)
  const posts = (MAP[pathname] ?? []).map(s => blogsDatabase.find(b => b.slug === s)).filter(Boolean);
  if (!posts.length) return null;
  
  return (
    <div className="w-full bg-white">
      <section className="max-w-[1300px] mx-auto px-6 py-12">
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold mb-6 text-gray-900">Related Guides & Articles</h2>
          <ul className="space-y-4">
            {posts.map(p => (
              <li key={p!.slug} className="flex items-center gap-3">
                <span className="text-[#C5A059] font-bold text-xl leading-none">›</span>
                <Link href={`/blogs/${p!.slug}`} className="text-[#772424] font-semibold md:hover:underline active:underline transition-colors text-lg">
                  {p!.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}