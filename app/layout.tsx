import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Naskh_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INSAN KAMIL | Menuntut Ilmu, Mengamalkan Dakwah",
  description:
    "Blog Islami tentang tafsir Al-Qur'an, dakwah tauhid, dan ukhuwah Islamiyah. Menuntut ilmu, mengamalkan dakwah, membina ukhuwah.",
  keywords: [
    "islam",
    "tafsir",
    "dakwah",
    "ukhuwah",
    "al-quran",
    "insan kamil",
    "bangka belitung",
  ],
  authors: [{ name: "INSAN KAMIL" }],
  openGraph: {
    title: "INSAN KAMIL | Menuntut Ilmu, Mengamalkan Dakwah",
    description:
      "Blog Islami tentang tafsir Al-Qur'an, dakwah tauhid, dan ukhuwah Islamiyah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
