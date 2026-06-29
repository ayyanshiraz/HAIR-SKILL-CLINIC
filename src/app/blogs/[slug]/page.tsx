import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsDatabase } from "../../../data/blogs";

// Pre-builds 100% static lightning-fast HTML pages at build time
export async function generateStaticParams() {
  return blogsDatabase.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogsDatabase.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-32 pb-24 px-6">
      
      {/* Breadcrumbs flush left to wide container with dynamic category injection */}
      <div className="max-w-[1300px] mx-auto mb-8">
        <div className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2 justify-start flex-wrap">
          <Link href="/" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
          <span>/</span>
          <Link href="/blogs" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Blogs</Link>
          
          {/* Conditionally renders Hair Transplant link if the post belongs to that category */}
          {post.category === "hair-transplant" && (
            <>
              <span>/</span>
              <Link href="/blogs/hair-transplant" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Hair Transplant</Link>
            </>
          )}

          {/* Conditionally renders Hair Loss link if the post belongs to that category */}
          {post.category === "hair-loss" && (
            <>
              <span>/</span>
              <Link href="/blogs/hair-loss" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Hair Loss</Link>
            </>
          )}

          <span>/</span>
          <span className="text-[#772424] truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto">

        {/* Article Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>
        
        {/* Published Date (Author strictly excluded) */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 pb-8 border-b border-gray-200 mb-8">
          <span>Published {post.date}</span>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-gray-100 shadow-xl border border-gray-100">
          <img src={post.previewImage} alt={post.title} className="w-full h-full object-cover object-top" />
        </div>

        {/* Text Body */}
        <div className="flex flex-col gap-6 text-lg leading-relaxed font-medium text-gray-800">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Return Button dynamically routed based on category */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href={
              post.category === "hair-transplant" 
                ? "/blogs/hair-transplant" 
                : post.category === "hair-loss" 
                ? "/blogs/hair-loss" 
                : "/blogs"
            } 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#772424] text-white font-extrabold text-sm tracking-wider uppercase shadow-lg md:hover:bg-[#8c2a2a] active:scale-95 transition-all"
          >
            ← Back to {
              post.category === "hair-transplant" 
                ? "Hair Transplant Blogs" 
                : post.category === "hair-loss" 
                ? "Hair Loss Blogs" 
                : "All Blogs"
            }
          </Link>
        </div>

      </article>
    </div>
  );
}