import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

interface ArticleContent {
  type: "paragraph" | "verse" | "heading";
  arabic?: string;
  translation?: string;
  reference?: string;
  text?: string;
}

// ISR: Cache selama 60 detik
export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  const content = article.content as unknown as ArticleContent[];
  const description = content
    .filter((c) => c.type === "paragraph")
    .slice(0, 2)
    .map((c) => c.text)
    .join(" ");

  return {
    title: `${article.title} | INSAN KAMIL`,
    description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!article) {
    notFound();
  }

  const content = article.content as unknown as ArticleContent[];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button - Always go to homepage */}
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-10 group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Beranda
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(article.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {article.authorName}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          {content.map((item, index) => {
            if (item.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-foreground mt-12 mb-6 font-serif"
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "verse") {
              return (
                <div
                  key={index}
                  className="my-8 p-6 bg-primary/5 rounded-xl border-r-4 border-primary"
                >
                  {/* Arabic Text */}
                  <p
                    className="text-2xl md:text-3xl text-primary leading-loose mb-4 text-right font-arabic"
                    dir="rtl"
                  >
                    {item.arabic}
                  </p>

                  {/* Translation */}
                  <p className="text-muted italic mb-3 leading-relaxed">
                    &quot;{item.translation}&quot;
                  </p>

                  {/* Reference */}
                  <p className="text-sm text-primary font-medium">
                    — {item.reference}
                  </p>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="text-foreground leading-relaxed mb-6 text-lg"
              >
                {item.text}
              </p>
            );
          })}
        </div>

        {/* Navigation to other articles */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Kembali ke Beranda
            </Link>
            <Link
              href="/artikel"
              className="inline-flex items-center text-muted hover:text-primary transition-colors"
            >
              Lihat Semua Artikel
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
