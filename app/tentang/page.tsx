import Link from "next/link";

export const metadata = {
  title: "Tentang | INSAN KAMIL",
  description: "Tentang blog INSAN KAMIL - Sampaikanlah Walau Hanya Satu Ayat",
};

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-serif">Tentang Kami</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-6 bg-primary/5 rounded-2xl border-r-4 border-primary">
            <p className="text-2xl md:text-3xl font-bold text-primary font-serif mb-4">
              &ldquo;Sampaikanlah Walau Hanya Satu Ayat&rdquo;
            </p>
            <p className="text-muted text-sm">— Hadits Nabi Muhammad ﷺ</p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed text-lg mb-6">
            INSAN KAMIL adalah blog Islami yang didedikasikan untuk menyampaikan
            pesan-pesan kebaikan dari Al-Qur&apos;an dan Sunnah. Sesuai dengan
            hadits Nabi Muhammad ﷺ, kami berusaha menyampaikan ilmu agama meskipun
            hanya satu ayat.
          </p>

          <p className="text-foreground leading-relaxed text-lg mb-6">
            Blog ini membahas berbagai topik penting dalam Islam, mulai dari tafsir
            Al-Qur&apos;an, dakwah tauhid, ukhuwah Islamiyah, hingga permasalahan
            umat muslim di seluruh dunia.
          </p>

          <p className="text-foreground leading-relaxed text-lg mb-6">
            Kami mengutip para ulama dan sumber-sumber yang terpercaya untuk
            menyajikan pemahaman Islam yang benar sesuai Al-Qur&apos;an dan Sunnah
            Rasulullah ﷺ.
          </p>

          {/* Arabic Text */}
          <div className="my-12 p-8 bg-primary/5 rounded-xl text-center">
            <p className="text-3xl md:text-4xl text-primary font-arabic mb-4" dir="rtl">
              بَلِّغُوا عَنِّي وَلَوْ آيَةً
            </p>
            <p className="text-muted italic">
              &ldquo;Sampaikanlah dariku (Muhammad) meskipun hanya satu ayat.&rdquo;
            </p>
            <p className="text-sm text-primary mt-2">— HR. Bukhari</p>
          </div>

          <p className="text-foreground leading-relaxed text-lg">
            Semoga blog ini dapat menjadi manfaat bagi kaum muslimin dan menjadi
            wasilah untuk menyebarkan kebaikan. Jazakumullah khairan.
          </p>
        </div>

        {/* WAHYU Allah */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-2 font-serif">
            WAHYU Allah Panduan Perjuangan
          </h3>
          <p className="text-muted text-sm">
            Blog ini merupakan bagian dari dakwah Islam untuk menyebarkan ajaran
            Allah SWT dan menegakkan syariat Islam di muka bumi.
          </p>
        </div>
      </div>
    </main>
  );
}
