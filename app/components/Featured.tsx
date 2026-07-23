import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Featured() {
  const featuredPosts = await prisma.article.findMany({
    take: 3,
    orderBy: { date: "desc" },
  });

  return (
    <section id="artikel" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pilihan Terbaik
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Artikel{" "}
            <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Kumpulan artikel pilihan yang membahas berbagai topik penting dalam
            Islam untuk memperdalam pemahaman kita tentang Al-Qur&apos;an dan Sunnah.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => {
            const content = post.content as any[];
            const firstParagraph = content
              .filter((c: any) => c.type === "paragraph")
              .slice(0, 1)
              .map((c: any) => c.text)
              .join(" ");

            const firstVerse = content.find((c: any) => c.type === "verse");

            return (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  {(post as any).image ? (
                    <Image
                      src={(post as any).image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={70}
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
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                      {post.category}
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
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    {firstVerse && (
                      <>
                        <span className="text-primary/60">•</span>
                        <span className="text-primary text-xs font-medium">
                          {firstVerse.reference}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-serif">
                    {post.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {firstParagraph || "Artikel ini membahas tentang Islam."}
                  </p>

                  <Link
                    href={`/artikel/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-light transition-colors"
                  >
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
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/artikel"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Lihat Semua Artikel
            <svg
              className="w-4 h-4 ml-2"
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
    </section>
  );
}
