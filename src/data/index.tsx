// src/data/index.tsx

import { ReactNode } from "react";
import { generalBlogs } from "./generalBlogs";
import { hairTransplantBlogs } from "./hairTransplantBlogs";
import { hairLossBlogs } from "./hairLossBlogs";

// Interface yahin par rakhein
export interface BlogPost {
  id: number;
  slug: string;
  category: "general" | "hair-transplant" | "hair-loss";
  title: string;
  date: string;
  previewImage: string;
  summary: string;
  seoDescription: string;
  metaTitle: string;
  focusKeyword: string;
  content: ReactNode;
}

// UI ke liye main database export karein
export const blogsDatabase: BlogPost[] = [
  ...generalBlogs,
  ...hairTransplantBlogs,
  ...hairLossBlogs
];