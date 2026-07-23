import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

// ISR: Cache selama 5 menit (lebih lama untuk performa)
export const revalidate = 300;

// Jumlah artikel per halaman
const POSTS_PER_PAGE = 9;

export const metadata = {
  title: "Semua Artikel | INSAN KAMIL",
  description: "Kumpulan artikel Islami tentang tafsir Al-Qur'an, dakwah, dan ukhuwah.",
};

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentPage = parseInt(resolvedParams.page || "1", 10);
  const skip = (currentPage - 1) * POSTS_PER_PAGE;

  // Fetch articles with pagination
  const [articles, totalCount] = await Promise.all([
    prisma.article.findMany({
      orderBy: { date: "desc" },
      take: POSTS_PER_PAGE,
      skip,
    }),
    prisma.article.count(),
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
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
            Kembali ke Beranda
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Semua <span className="text-secondary">Artikel</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Kumpulan artikel Islami tentang tafsir Al-Qur&apos;an, dakwah tauhid,
            dan ukhuwah Islamiyah.
          </p>
          <p className="text-white/50 mt-2 text-sm">
            Total {totalCount} artikel
          </p>
        </div>
      </div>

      {/* Articles List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-20 h-20 text-muted/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-muted text-lg">Belum ada artikel</p>
            <Link
              href="/"
              className="inline-flex items-center mt-4 text-primary hover:text-primary-light transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/artikel/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
                >
                  {/* Image - hanya lazy load untuk artikel di bawah fold */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3} // Hanya 3 artikel pertama yang eager load
                        quality={65} // Kurangi kualitas untuk thumbnail
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-primary/30"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted mb-3">
                      <svg
                        className="w-4 h-4"
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
                      <span>
                        {new Date(article.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-serif line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {(article.content as any[])
                        .filter((c: any) => c.type === "paragraph")
                        .slice(0, 1)
                        .map((c: any) => c.text)
                        .join(" ")}
                    </p>

                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-light transition-colors">
                      Baca Selengkapnya
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                {/* Previous Button */}
                {currentPage > 1 ? (
                  <Link
                    href={`/artikel?page=${currentPage - 1}`}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-foreground hover:bg-gray-50 transition-colors"
                  >
                    ← Sebelumnya
                  </Link>
                ) : (
                  <span className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed">
                    ← Sebelumnya
                  </span>
                )}

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={`/artikel?page=${page}`}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                        page === currentPage
                          ? "bg-primary text-white"
                          : "border border-gray-300 text-foreground hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </Link>
                  ))}
                </div>

                {/* Next Button */}
                {currentPage < totalPages ? (
                  <Link
                    href={`/artikel?page=${currentPage + 1}`}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-foreground hover:bg-gray-50 transition-colors"
                  >
                    Selanjutnya →
                  </Link>
                ) : (
                  <span className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed">
                    Selanjutnya →
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
