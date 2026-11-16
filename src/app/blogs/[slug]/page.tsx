import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsDatabase } from "../../../data";
import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  return blogsDatabase.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogsDatabase.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  const baseUrl = "https://www.hairskill.com";
  const postUrl = `${baseUrl}/blogs/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.seoDescription,
      url: postUrl,
      siteName: "Hair Skill Clinic",
      locale: "en_PK",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Dr. Mansoor Ahmad"],
      images: [
        {
          url: `${baseUrl}${post.previewImage}`,
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        },
      ],
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogsDatabase.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://www.hairskill.com";
  const postUrl = `${baseUrl}/blogs/${post.slug}`;
  
  // Date format for Schema
  const iso = new Date(post.date).toISOString();
  
  // Doctor Author Schema
  const doctor = { 
    "@type": "Physician", 
    "@id": `${baseUrl}/doctors/dr-mansoor-ahmad#physician`, 
    name: "Dr. Mansoor Ahmad", 
    url: `${baseUrl}/doctors/dr-mansoor-ahmad` 
  };

  // Upgraded Schema with Breadcrumbs and Author
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      { 
        "@type": "BlogPosting", 
        "@id": `${postUrl}#article`, 
        headline: post.title, 
        description: post.seoDescription,
        image: `${baseUrl}${post.previewImage}`, 
        datePublished: iso, 
        dateModified: iso, 
        inLanguage: "en-PK",
        mainEntityOfPage: { "@id": postUrl }, 
        author: doctor,
        publisher: { 
          "@type": "Organization", 
          name: "Hair Skill Clinic", 
          logo: { "@type": "ImageObject", url: `${baseUrl}/home/logo.webp` } 
        } 
      },
      { 
        "@type": "BreadcrumbList", 
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${baseUrl}/blogs` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl } 
        ] 
      },
    ],
  };

  const categoryNames: Record<string, string> = {
    "hair-loss": "Hair Loss",
    "hair-transplant": "Hair Transplant",
    "general": "General"
  };

  const categoryTitle = categoryNames[post.category] || "Blogs";
  const categoryLink = post.category === "general" ? "/blogs" : `/blogs/${post.category}`;

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-32 pb-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }}
      />

      <div className="max-w-[1300px] mx-auto mb-8">
        <div className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2 justify-start flex-wrap">
          <Link href="/" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
          <span>/</span>
          <Link href="/blogs" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Blogs</Link>
          {post.category !== "general" && (
            <>
              <span>/</span>
              <Link href={categoryLink} className="md:hover:text-[#772424] active:text-[#772424] transition-colors">{categoryTitle}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-[#772424] truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 pb-8 border-b border-gray-200 mb-8">
          <span>Published {post.date}</span>
        </div>
        
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-gray-50 shadow-xl border border-gray-100 flex items-center justify-center">
          <Image 
            src={post.previewImage} 
            alt={post.title} 
            fill 
            priority 
            sizes="(max-width:1024px) 100vw, 896px" 
            className="object-contain object-top" 
          />
        </div>

        <div className="text-lg leading-relaxed font-medium text-gray-800 text-justify">
          {post.content}
        </div>
        
        <aside aria-label="Medical reviewer" className="mt-12 flex gap-4 rounded-2xl border border-gray-200 p-6 bg-gray-50/50">
          <Image src="/home/owner1.webp" alt="Dr. Mansoor Ahmad" width={72} height={72} className="rounded-full object-cover shrink-0" />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-gray-900">Medically reviewed by Dr. Mansoor Ahmad</p>
            <p className="text-sm text-gray-600 mt-1">Hair transplant surgeon, Hair Skill Clinic Lahore (Reg. 1535-P). Last reviewed {post.date}.</p>
            <Link href="/doctors/dr-mansoor-ahmad" className="text-sm font-extrabold text-[#772424] hover:underline mt-2">
              View credentials
            </Link>
          </div>
        </aside>

        {/* === KEEP READING (3 RELATED BLOGS) === */}
        {blogsDatabase.filter((b) => b.category === post.category && b.slug !== post.slug).length > 0 && (
          <div className="mt-16 mb-12 border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Keep Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogsDatabase
                .filter((b) => b.category === post.category && b.slug !== post.slug)
                .slice(0, 3)
                .map((rb) => (
                  <Link key={rb.slug} href={`/blogs/${rb.slug}`} className="group block border border-gray-100 rounded-2xl p-4 md:hover:border-[#772424] active:border-[#772424] transition-colors bg-gray-50/50 shadow-sm md:hover:shadow-md">
                    <div className="w-full aspect-[16/10] bg-white rounded-xl mb-4 overflow-hidden border border-gray-100 flex items-center justify-center">
                      <Image 
                        src={rb.previewImage} 
                        alt={rb.title} 
                        width={400} 
                        height={250} 
                        className="w-full h-full object-contain md:group-hover:scale-105 group-active:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <h4 className="font-extrabold text-gray-900 text-sm md:group-hover:text-[#772424] group-active:text-[#772424] line-clamp-2 leading-snug">
                      {rb.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        )}
        {/* === KEEP READING END === */}

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href={categoryLink} 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#772424] text-white font-extrabold text-sm tracking-wider uppercase shadow-lg md:hover:bg-[#8c2a2a] active:scale-95 transition-all"
          >
            ← Back to {categoryTitle}
          </Link>
        </div>
      </article>
    </div>
  );
}