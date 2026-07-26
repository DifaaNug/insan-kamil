import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import BackToTop from "@/app/components/BackToTop";

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

// Hitung waktu baca (estimasi 200 kata per menit)
function calculateReadingTime(content: ArticleContent[]): number {
  const totalWords = content.reduce((acc, item) => {
    const text = item.text || item.translation || item.arabic || "";
    return acc + text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.ceil(totalWords / 200));
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
  const readingTime = calculateReadingTime(content);

  // Fetch related articles (same category, excluding current)
  const relatedArticles = await prisma.article.findMany({
    where: {
      category: article.category,
      slug: { not: slug },
    },
    take: 3,
    orderBy: { date: "desc" },
  });

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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readingTime} menit baca
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Share Buttons */}
        <div className="mb-8 pb-6 border-b border-border">
          <ShareButtons
            title={article.title}
            url={`https://insan-kamil-inky.vercel.app/artikel/${slug}`}
          />
        </div>

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

        {/* Share Buttons Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <ShareButtons
            title={article.title}
            url={`https://insan-kamil-inky.vercel.app/artikel/${slug}`}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 font-serif">
              Artikel Terkait
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/artikel/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 bg-gradient-to-br from-primary/10 to-primary/5">
                    {related.image ? (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={60}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-bold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors font-serif">
                      {related.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/artikel"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Lihat Semua Artikel
          </Link>
        </div>
      </article>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
