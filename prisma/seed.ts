import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@insankamil.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log(`✅ Admin user created: ${admin.email}`);

  // Create articles
  const articles = [
    {
      slug: "mensyukuri-nikmat-islam",
      title: "Mensyukuri Nikmat Islam Yang Allah Subhanahu Wa Ta'ala Karuniakan Kepada Kita",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Yaa Ikhawanii rahimakumullah — Allah Azza wa Jalla berfirman:" },
        { type: "verse", arabic: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ", translation: "Barangsiapa dikehendaki Allah akan mendapat hidayah, Dia akan membukakan dadanya untuk Islam. Dan barangsiapa dikehendaki-Nya menjadi sesat, Dia jadikan dadanya sempit dan sesak, seakan-akan dia mendaki ke langit.", reference: "QS. Al-An'am: 125" },
        { type: "paragraph", text: "Setiap muslim niscaya meyakini bahwasanya karunia Allah Azza wa Jalla yang terbesar di dunia ini adalah agama Islam. Kewajiban kita adalah bersyukur dengan melaksanakan kewajiban kepada Allah." },
      ],
    },
    {
      slug: "nikmat-yang-sesungguhnya",
      title: "Nikmat Yang Sesungguhnya,!",
      category: "Dakwah",
      authorName: "musyafir da'wah",
      content: [
        { type: "paragraph", text: "Sayyidina Ali bin Abi Thalib berkata: Dari sekian banyak nikmat dunia, cukuplah Islam sebagai nikmat bagimu. Dari sekian banyak kesibukan, cukuplah ketaatan sebagai kesibukan bagimu. Dan dari sekian banyak pelajaran, cukuplah kematian sebagai pelajaran bagimu." },
        { type: "paragraph", text: "Sahabat, betapa ada dua nikmat terbesar yang seringkali kita terlupa — pertama, nikmat diwujudkannya kita oleh Allah di dunia, dari tidak ada menjadi ada. Kemudian nikmat dikehendaki-Nya kita keluar dari gelapnya kekafiran, menuju cahaya Islam." },
      ],
    },
    {
      slug: "adakah-musholla-di-rumah-kita",
      title: "Adakah Musholla di Rumah Kita?..",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Sahabat Se-Iman Rahimakumullah — Kata MUSHOLLA secara bahasa dimaknai sebagai tempat sholat. Namun dalam Al-Qur'an, musholla berkaitan dengan sejarah perjuangan Nabi Ibrahim AS." },
        { type: "verse", arabic: "وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى", translation: "Ingatlah, ketika Kami menjadikan rumah itu tempat berkumpul bagi manusia dan tempat yang aman. Dan jadikanlah sebagian maqam Ibrahim tempat shalat.", reference: "QS. Al-Baqarah: 125" },
        { type: "paragraph", text: "Setiap rumah muslim seharusnya menjadi MUSHOLLA — tempat sujud yang menyambungkan jiwa kepada Allah." },
      ],
    },
    {
      slug: "pohon-kehidupan-kita",
      title: "Seperti Apakah Pohon Kehidupan Kita?..",
      category: "Dakwah",
      authorName: "Jabal fath, De' FAD-LILLAH",
      content: [
        { type: "verse", arabic: "أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ", translation: "Tidakkah kamu memperhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya kuat dan cabangnya menjulang ke langit.", reference: "QS. Ibrahim: 24-25" },
        { type: "paragraph", text: "Sahabat, setelah merenungi — meskipun bertahun-tahun mengucapkan dua kalimat syahadat, ternyata yang tumbuh hanyalah fatamorgana dari pohon kehidupan Islam kita." },
      ],
    },
    {
      slug: "al-ukhuwah-al-islamiyah",
      title: "Al Ukhuwah – Al Islamiyah – Al Jamaah",
      category: "Ukhuwah",
      authorName: "D. Syarif Zahda Ayman",
      content: [
        { type: "paragraph", text: "Jika setiap umat Islam hanya memikirkan nasib masing-masing — Palestina, negeri ini, bangsa Moro — di manakah ukhuwah Islamiyah? Di manakah universalitas Islam?" },
        { type: "paragraph", text: "Semangat nasionalisme telah merasuk lebih dalam daripada semangat Islam. Ketika musuh menyerang tanah air, seluruh warganya bersatu. Namun ketika musuh menyerang umat Islam dari madzhab yang berbeda, mereka tetap diam." },
        { type: "paragraph", text: "Artikel ini menyerukan untuk bergabung dalam barisan jama'ah yang dipimpin oleh orang-orang yang berjuang untuk meninggikan kalimat Laa Ilaaha Illallah." },
      ],
    },
    {
      slug: "emang-penting-islam-punya-pemimpin",
      title: "Emang Penting Islam Punya Pemimpin,.?",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Apakah penting Islam memiliki pemimpin? Bukankah ibadah bisa berjalan lancar tanpa harus ada imam? Kita harus memahami bahwa amal perbuatan kita akan disaksikan oleh Imam." },
        { type: "verse", arabic: "يَوْمَ نَدْعُو كُلَّ أُنَاسٍ بِإِمَامِهِمْ ۖ فَمَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَأُولَٰئِكَ يَقْرَءُونَ كِتَابَهُمْ وَلَا يُظْلَمُونَ فَتِيلًا", translation: "Ingatlah suatu hari Kami panggil tiap umat dengan pemimpinnya; dan barang siapa yang diberikan kitab amalannya di tangan kanannya, maka mereka ini akan membaca kitabnya itu dan mereka tidak dianiaya sedikit pun.", reference: "QS. Al-Isra: 71" },
      ],
    },
    {
      slug: "umat-teladan-yang-tidak-meneladani",
      title: "Umat Teladan .. Yang Tidak Meneladani ..",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Saya membuka Al-Qur'an surat Ali Imran ayat 110, di mana Allah berfirman tentang umat Muslim sebagai umat terbaik yang dilahirkan untuk umat manusia." },
        { type: "verse", arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ", translation: "Dan tiadalah Kami mengutus kamu, melainkan untuk menjadi rahmat bagi semesta alam.", reference: "QS. Al-Anbiya': 107" },
        { type: "paragraph", text: "Apakah dunia telah merasakan rahmat Allah melalui pekerjaan orang-orang Muslim hari ini? Kita hanya bisa bertanya kepada diri sendiri." },
      ],
    },
    {
      slug: "3-nilai-hamba-allah-di-balik-musibah",
      title: "3 Nilai Hamba Allah di Balik Musibah",
      category: "Tafsir",
      authorName: "ACEH (Dinas Syari'at Islam Pidie)",
      content: [
        { type: "paragraph", text: "Musibah dalam kehidupan adalah bagian dari taqdir Allah. Tidak ada yang dapat menghalangi kehendak Allah. Barangsiapa yang beriman, maka Allah akan menambah petunjuk dan menenangkan hatinya." },
        { type: "paragraph", text: "Pertama: Allah telah mengenakan pakaian-pakaian keberadaan yang menjadi indikator kekuasaan-Nya. Nama-Nya Asy-Syafi membutuhkan penyakit; Ar-Razzaq membutuhkan kelaparan." },
        { type: "paragraph", text: "Kedua: Kehidupan menjadi jelas melalui musibah dan cobaan. Kehidupan monoton lebih dekat kepada ketiadaan daripada keberadaan." },
        { type: "paragraph", text: "Ketiga: Dunia adalah ladang ujian dan cobaan — tempat untuk beramal dan beribadah, bukan tempat rekreasi atau pahala." },
      ],
    },
    {
      slug: "mustadafiin-fil-ardh",
      title: "Adakah Kita Bagian dari Kelompok Mustad'afin Fil Ard",
      category: "Dakwah",
      authorName: "Al Bantani, De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Artikel ini membahas tentang Mustad'afin fil Ardh — orang-orang yang lemah dan tertindas di muka bumi." },
        { type: "verse", arabic: "وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ", translation: "Mengapa kamu tidak mau berperang di jalan Allah dan membela orang-orang yang lemah baik laki-laki, wanita-wanita maupun anak-anak?", reference: "QS. An-Nisa: 75" },
        { type: "paragraph", text: "Marilah kita memperkuat diri untuk berjuang dalam furqan wal hijrah, jihad wal jama'ah." },
      ],
    },
    {
      slug: "liqaa-rabbahu",
      title: "Sesiap Apa Kita Dipertemukan Allah (Liqa'a Rabbahu)?",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      content: [
        { type: "paragraph", text: "Tadzkirah — kita sering menyia-nyiakan waktu untuk bertemu dengan Allah Azza Wajalla setiap hari. Banyak undangan untuk dikunjungi dan dijamu oleh Allah." },
        { type: "paragraph", text: "Kata kuncinya adalah Iman dan Amal Sholeh. Barangsiapa yang beriman siap bertemu Allah. Barangsiapa yang beramal saleh atas imannya — itulah saat pertemuan dengan Rabb-nya." },
        { type: "paragraph", text: "Sudah waktunya hijrah pertemuan, sudah waktunya hijrah amalan — teguhkan bahwa Allah selalu mengawasi di setiap kesempatan." },
      ],
    },
  ];

  for (const article of articles) {
    const existing = await prisma.article.findUnique({
      where: { slug: article.slug },
    });

    if (!existing) {
      await prisma.article.create({
        data: {
          ...article,
          content: article.content as any,
          authorId: admin.id,
        },
      });
      console.log(`✅ Article created: ${article.title}`);
    } else {
      console.log(`⏭️ Article already exists: ${article.title}`);
    }
  }

  console.log("🌱 Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
