import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Tafsir Al-Qur'an",
    description:
      "Pembahasan mendalam tentang makna dan tafsir ayat-ayat Al-Qur'an berdasarkan pendapat para ulama mufassirin seperti Ibn Kathir, At-Thabari, dan As-Sa'di.",
    icon: (
      <svg
        className="w-10 h-10"
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
    count: "20+ Artikel",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Dakwah & Tauhid",
    description:
      "Artikel-artikel tentang pentingnya dakwah, memurnikan tauhid dari segala bentuk syirk, dan mengamalkan ajaran Islam sesuai manhaj Nabi ﷺ.",
    icon: (
      <svg
        className="w-10 h-10"
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
    count: "15+ Artikel",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    title: "Ukhuwah Islamiyah",
    description:
      "Membahas tentang persaudaraan sesama muslim, pentingnya persatuan umat, dan kepedulian terhadap kaum muslimin di seluruh penjuru dunia.",
    icon: (
      <svg
        className="w-10 h-10"
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
    count: "15+ Artikel",
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-600",
  },
];

export default function Categories() {
  return (
    <section id="kategori" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Jelajahi Topik
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Kategori{" "}
            <span className="gradient-text">Artikel</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Temukan artikel berdasarkan topik yang diminati, mulai dari tafsir
            Al-Qur&apos;an hingga ukhuwah Islamiyah.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#"
              className="group p-8 bg-white rounded-2xl shadow-sm card-hover text-center"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4">
                {category.description}
              </p>

              {/* Count */}
              <span className="inline-block px-4 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
