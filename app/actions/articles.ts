"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface ArticleContent {
  type: "paragraph" | "verse" | "heading";
  arabic?: string;
  translation?: string;
  reference?: string;
  text?: string;
}

export interface ArticleInput {
  title: string;
  slug: string;
  category: string;
  authorName: string;
  content: ArticleContent[];
}

// Get all articles
export async function getArticles() {
  const articles = await prisma.article.findMany({
    orderBy: { date: "desc" },
    include: { author: true },
  });
  return articles;
}

// Get single article by ID
export async function getArticleById(id: string) {
  const article = await prisma.article.findUnique({
    where: { id },
    include: { author: true },
  });
  return article;
}

// Get single article by slug (for public pages)
export async function getArticleBySlug(slug: string) {
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { author: true },
  });
  return article;
}

// Create new article
export async function createArticle(data: ArticleInput, authorId: string) {
  try {
    // Check if slug already exists
    const existingArticle = await prisma.article.findUnique({
      where: { slug: data.slug },
    });

    if (existingArticle) {
      return { success: false, error: "Slug sudah digunakan" };
    }

    await prisma.article.create({
      data: {
        ...data,
        content: data.content as any,
        authorId,
      },
    });

    revalidatePath("/admin/artikel");
    revalidatePath("/artikel");
    redirect("/admin/artikel");
  } catch {
    return { success: false, error: "Gagal membuat artikel" };
  }
}

// Update article
export async function updateArticle(id: string, data: ArticleInput) {
  try {
    // Check if slug is taken by another article
    const existingArticle = await prisma.article.findUnique({
      where: { slug: data.slug },
    });

    if (existingArticle && existingArticle.id !== id) {
      return { success: false, error: "Slug sudah digunakan" };
    }

    await prisma.article.update({
      where: { id },
      data: {
        ...data,
        content: data.content as any,
      },
    });

    revalidatePath("/admin/artikel");
    revalidatePath("/artikel");
    revalidatePath(`/artikel/${data.slug}`);
    redirect("/admin/artikel");
  } catch {
    return { success: false, error: "Gagal mengupdate artikel" };
  }
}

// Delete article
export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({
      where: { id },
    });

    revalidatePath("/admin/artikel");
    revalidatePath("/artikel");
    return { success: true };
  } catch {
    return { success: false, error: "Gagal menghapus artikel" };
  }
}

// Get article stats
export async function getArticleStats() {
  const totalArticles = await prisma.article.count();
  const categories = await prisma.article.groupBy({
    by: ["category"],
    _count: true,
  });

  return {
    total: totalArticles,
    categories: categories.map((c) => ({
      name: c.category,
      count: c._count,
    })),
  };
}
