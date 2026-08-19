import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsDatabase } from "../../../data";
import { Metadata } from "next";

export async function generateStaticParams() {
  const generalPosts = blogsDatabase.filter((post) => post.category === `general`);
  return generalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogsDatabase.find((b) => b.slug === resolvedParams.slug && b.category === `general`);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: post.title,
    description: post.seoDescription,
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      images: [post.previewImage],
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogsDatabase.find((b) => b.slug === resolvedParams.slug && b.category === `general`);

  if (!post) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-white text-black font-sans pt-32 pb-24 px-6`}>
      <div className={`max-w-[1300px] mx-auto mb-8`}>
        <div className={`text-xs font-black uppercase tracking-widest text-black flex items-center gap-2 justify-start flex-wrap`}>
          <Link href={`/`} className={`md:hover:text-[#772424] active:text-[#772424] transition-colors`}>Homepage</Link>
          <span>/</span>
          <Link href={`/blogs`} className={`md:hover:text-[#772424] active:text-[#772424] transition-colors`}>Blogs</Link>
          <span>/</span>
          <span className={`text-[#772424] truncate max-w-[200px] sm:max-w-none`}>{post.title}</span>
        </div>
      </div>

      <article className={`max-w-4xl mx-auto`}>

        <div className={`w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-gray-100 shadow-xl border border-gray-100`}>
          <img src={post.previewImage} alt={post.title} className={`w-full h-full object-cover object-top`} />
        </div>
        <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4`}>
          {post.title}
        </h1>
        
        <div className={`flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 pb-8 border-b border-gray-200 mb-8`}>
          <span>Published {post.date}</span>
        </div>

        <div className={`text-lg leading-relaxed font-medium text-gray-800 text-justify`}>
          {post.content}
        </div>

        <div className={`mt-16 pt-8 border-t border-gray-200`}>
          <Link 
            href={`/blogs`} 
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#772424] text-white font-extrabold text-sm tracking-wider uppercase shadow-lg md:hover:bg-[#8c2a2a] active:scale-95 transition-all`}
          >
            ← Back to All Blogs
          </Link>
        </div>
      </article>
    </div>
  );
}