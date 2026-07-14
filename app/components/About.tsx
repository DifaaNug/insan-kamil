export default function About() {
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Menuntut Ilmu Syar'i",
      description:
        "Mencari ilmu yang bermanfaat dari sumbernya untuk membedakan antara yang haq dan yang bathil. Ilmu syar'i adalah kunci untuk memahami agama dengan benar.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Mengamalkan Dakwah",
      description:
        "Menyebarkan ajaran Islam dengan hikmah dan kebaikan sesuai tuntunan Rasulullah ﷺ. Dakwah adalah kewajiban setiap muslim untuk mengajak kepada kebaikan.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Membina Ukhuwah",
      description:
        "Mempererat tali persaudaraan sesama muslim tanpa memandang perbedaan. Ukhuwah Islamiyah adalah pondasi kekuatan umat Islam di seluruh dunia.",
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
              Membentuk{" "}
              <span className="gradient-text">Insan Kamil</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              INSAN KAMIL adalah blog Islami yang didedikasikan untuk membantu
              umat Muslim memahami ajaran agama dengan lebih mendalam. Kami
              menyajikan artikel-artikel berkualitas tentang tafsir Al-Qur&apos;an,
              dakwah tauhid, dan ukhuwah Islamiyah berdasarkan Al-Qur&apos;an dan
              Sunnah Rasulullah ﷺ.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Dengan mengutip para ulama seperti As-Sa&apos;di, At-Thabari, Ibn
              Kathir, dan Said Nursi, kami berusaha menyajikan pemahaman Islam
              yang benar. Setiap artikel dirancang untuk menjadi pengingat dan
              pembelajaran bagi kaum muslimin.
            </p>
            <p className="text-muted leading-relaxed mb-4 font-arabic text-lg text-right" dir="rtl">
              فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ
            </p>
            <p className="text-muted leading-relaxed mb-8 text-sm italic">
              &quot;Barangsiapa dikehendaki Allah akan mendapat hidayah, Dia akan
              membukakan dadanya untuk (menerima) Islam.&quot; (QS. Al-An&apos;am: 125)
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary font-serif">
                  50+
                </div>
                <div className="text-sm text-muted">Artikel</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-serif">
                  7
                </div>
                <div className="text-sm text-muted">Tahun Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-serif">
                  3
                </div>
                <div className="text-sm text-muted">Kategori Utama</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
