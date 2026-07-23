import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function LatestPosts() {
  const latestPosts = await prisma.article.findMany({
    take: 5,
    orderBy: { date: "desc" },
  });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Terbaru
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-serif">
              Artikel{" "}
              <span className="gradient-text">Terbaru</span>
            </h2>
          </div>
          <Link
            href="/artikel"
            className="inline-flex items-center mt-4 md:mt-0 text-primary font-medium hover:text-primary-light transition-colors"
          >
            Lihat Semua
            <svg
              className="w-4 h-4 ml-1"
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

        {/* Posts List */}
        <div className="space-y-6">
          {latestPosts.length === 0 ? (
            <div className="text-center py-16 bg-background rounded-xl">
              <svg className="w-20 h-20 text-muted/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-muted">Belum ada artikel</p>
            </div>
          ) : (
            latestPosts.map((post) => {
              const content = post.content as any[];
              const firstVerse = content.find((c: any) => c.type === "verse");
              const firstParagraph = content
                .filter((c: any) => c.type === "paragraph")
                .slice(0, 1)
                .map((c: any) => c.text)
                .join(" ");

              return (
                <article
                  key={post.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-background rounded-xl hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-full md:w-48 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden relative">
                    {(post as any).image ? (
                      <Image
                        src={(post as any).image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="192px"
                        quality={65}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-primary/30"
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
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-secondary/20 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted flex items-center gap-1">
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
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {firstVerse && (
                        <>
                          <span className="text-primary/60 text-sm">•</span>
                          <span className="text-primary text-xs font-medium">
                            {firstVerse.reference}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-serif">
                      {post.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {firstParagraph || "Artikel ini membahas tentang Islam."}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center">
                    <Link
                      href={`/artikel/${post.slug}`}
                      className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
