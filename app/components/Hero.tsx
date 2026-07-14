import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Arabic Calligraphy Decoration */}
      <div className="absolute top-32 right-10 md:right-20 text-white/5 font-arabic text-8xl md:text-[12rem] select-none pointer-events-none">
        ﷽
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Bismillah */}
        <p className="text-white/70 text-lg md:text-xl mb-6 font-arabic animate-fade-in">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up font-serif">
          INSAN{" "}
          <span className="gradient-text">KAMIL</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in-up delay-100">
          Menuntut Ilmu, Mengamalkan Dakwah, Membina Ukhuwah
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Blog Islami yang membahas tafsir Al-Qur&apos;an, dakwah tauhid, dan
          ukhuwah Islamiyah. Menuntut ilmu yang bermanfaat, mengamalkan dakwah
          dengan hikmah, serta membina ukhuwah sesama muslim.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link
            href="#artikel"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25"
          >
            Mulai Membaca
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

          <Link
            href="#tentang"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#tentang"
          className="text-white/50 hover:text-white transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
