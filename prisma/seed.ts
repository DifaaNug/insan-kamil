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

  const articles = [
    // === 2024 ===
    {
      slug: "mensyukuri-nikmat-islam",
      title: "Mensyukuri Nikmat Islam Yang Allah Subhanahu Wa Ta'ala Karuniakan Kepada Kita",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2024/12/462621479_516747494455861_996110055708457861_n-2.jpg?w=720",
      date: new Date("2024-12-30"),
      content: [
        { type: "paragraph", text: "Yaa Ikhawanii rahimakumullah — Allah Azza wa Jalla berfirman:" },
        { type: "verse", arabic: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ", translation: "Barangsiapa dikehendaki Allah akan mendapat hidayah, Dia akan membukakan dadanya untuk Islam. Dan barangsiapa dikehendaki-Nya menjadi sesat, Dia jadikan dadanya sempit dan sesak, seakan-akan dia mendaki ke langit. Demikianlah Allah menimpakan siksa kepada orang-orang yang tidak beriman.", reference: "QS. Al-An'am: 125" },
        { type: "verse", arabic: "مَن شَرَحَ اللَّهُ صَدْرَهُ لِلْإِسْلَامِ فَهُوَ عَلَىٰ نُورٍ مِّن رَّبِّهِ ۚ فَوَيْلٌ لِّلْقَاسِيَةِ قُلُوبُهُم مِّن ذِكْرِ اللَّهِ ۚ أُولَٰئِكَ فِي ضَلَالٍ مُّبِينٍ", translation: "Maka apakah orang-orang yang dibukakan hatinya oleh Allah untuk agama Islam lalu dia mendapat cahaya dari Rabb-nya (sama dengan orang yang hatinya membatu)? Maka celakalah mereka yang hatinya telah membatu untuk mengingat Allah.", reference: "QS. Az-Zumar: 22" },
        { type: "paragraph", text: "Orang yang tidak mendapat hidayah akan senantiasa berada dalam kegelapan dan kerugian. Allah Azza wa Jalla menunjuki hamba-Nya dari kegelapan menuju cahaya yang terang benderang melalui Rasul-Nya Shallallahu 'alaihi wa sallam." },
        { type: "verse", arabic: "لَقَدْ مَنَّ اللَّهُ عَلَى الْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولًا مِّنْ أَنفُسِهِمْ يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَإِن كَانُوا مِن قَبْلُ لَفِي ضَلَالٍ مُّبِينٍ", translation: "Sungguh, Allah telah memberi karunia kepada orang-orang yang beriman ketika mengutus seorang Rasul di tengah-tengah mereka dari kalangan mereka sendiri.", reference: "QS. Ali 'Imran: 164" },
        { type: "verse", arabic: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا", translation: "Pada hari ini telah Aku sempurnakan agamamu untukmu, dan telah Aku cukupkan nikmat-Ku bagimu, dan telah Aku ridhai Islam sebagai agamamu.", reference: "QS. Al-Maa'idah: 3" },
        { type: "verse", arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", translation: "Maka ingatlah kepada-Ku, Aku pun akan ingat kepadamu. Bersyukurlah kepada-Ku, dan janganlah kamu ingkar kepada-Ku.", reference: "QS. Al-Baqarah: 152" },
        { type: "verse", arabic: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُونَ", translation: "Dia-lah yang telah mengutus Rasul-Nya dengan petunjuk dan agama yang benar untuk diunggulkan atas segala agama, walaupun orang-orang musyrik tidak menyukai.", reference: "QS. At-Taubah: 33" },
        { type: "paragraph", text: "Menuntut ilmu yang bermanfaat (ilmu syar'i) adalah jalan untuk membedakan antara yang haq dan yang bathil. Fadzkurullah.. ainamaa kunta.. insha ALLAH.. De' FAD-LILLAH" },
      ],
    },
    // === 2023 ===
    {
      slug: "nikmat-yang-sesungguhnya",
      title: "Nikmat Yang Sesungguhnya,!",
      category: "Dakwah",
      authorName: "musyafir da'wah",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/04/dscf1568.jpg?w=1024",
      date: new Date("2023-04-06"),
      content: [
        { type: "paragraph", text: "Bismillahirrahmanirrahim — Semoga bermanfaat. Amiin." },
        { type: "paragraph", text: "Sayyidina Ali bin Abi Thalib Radhiyallahu 'anhu berkata: Dari sekian banyak nikmat dunia, cukuplah Islam sebagai nikmat bagimu. Dari sekian banyak kesibukan, cukuplah ketaatan sebagai kesibukan bagimu. Dan dari sekian banyak pelajaran, cukuplah kematian sebagai pelajaran bagimu." },
        { type: "paragraph", text: "Sahabat, betapa ada dua nikmat terbesar yang seringkali kita terlupa — pertama, nikmat diwujudkannya kita oleh Allah Azza wa Jalla di dunia, dari tidak ada menjadi ada. Kemudian nikmat dikehendaki-Nya kita keluar dari gelapnya kekafiran, menuju cahaya Islam." },
        { type: "paragraph", text: "Syaikh Nawawi Al-Bantani dalam kitab Nashaihul 'Ibad menjelaskan: Ketaatan adalah kesibukan terbesar. Ketika kita menyadari betapa beruntungnya kita mendapatkan nikmat hidup dan Islam, maka tidak ada kebanggaan yang lebih besar selain taat kepada-Nya." },
        { type: "paragraph", text: "Pelajaran terbesar bagi manusia adalah kematian — mengingatkannya akan membuat amal shalih dan ketaatan menjadi lebih mudah dilakukan. musyafir da'wah ✒️" },
      ],
    },
    {
      slug: "adakah-musholla-di-rumah-kita",
      title: "Adakah Musholla di Rumah Kita?..",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_4372.jpg?w=1024",
      date: new Date("2023-02-07"),
      content: [
        { type: "paragraph", text: "Sahabat Se-Iman Rahimakumullah — Kata MUSHOLLA secara bahasa dimaknai sebagai tempat sholat. Namun dalam Al-Qur'an, musholla berkaitan dengan sejarah perjuangan Nabi Ibrahim AS." },
        { type: "verse", arabic: "وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى", translation: "Ingatlah, ketika Kami menjadikan rumah itu tempat berkumpul bagi manusia dan tempat yang aman. Dan jadikanlah sebagian maqam Ibrahim tempat shalat.", reference: "QS. Al-Baqarah: 125" },
        { type: "verse", arabic: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا", translation: "Sesungguhnya rumah yang awal mula dibangun untuk manusia, ialah Baitullah yang di Bakkah yang diberkahi dan menjadi petunjuk bagi semua manusia.", reference: "QS. Ali Imran: 96-97" },
        { type: "paragraph", text: "Setiap rumah muslim seharusnya menjadi MUSHOLLA — tempat sujud yang menyambungkan jiwa kepada Allah. Marilah kita memperbaiki pemahaman tentang Mushalla sebagai tempat menegakan syariat Islam di mana pun kita berada." },
      ],
    },
    {
      slug: "pohon-kehidupan-kita",
      title: "Seperti Apakah Pohon Kehidupan Kita?..",
      category: "Dakwah",
      authorName: "Jabal fath, De' FAD-LILLAH",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_3004.jpg?w=1024",
      date: new Date("2023-02-06"),
      content: [
        { type: "verse", arabic: "أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ ۚ تُؤْتِي أُكُلَهَا كُلَّ حِينٍ بِإِذْنِ رَبِّهَا", translation: "Tidakkah kamu memperhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya kuat dan cabangnya menjulang ke langit.", reference: "QS. Ibrahim: 24-25" },
        { type: "paragraph", text: "Sahabat, setelah merenungi — meskipun bertahun-tahun mengucapkan dua kalimat syahadat, ternyata yang tumbuh hanyalah fatamorgana dari pohon kehidupan Islam kita." },
        { type: "paragraph", text: "Astaghfirullah lanaa — parasit kemunafikan di dahan-dahan pemikiran, ulat kerakusan memakan daun keikhlasan, dan akar aqidah yang bergeser menjadi wadah syirk. Istagfirlanaa.. Yaa rabbi.. Jabal fath, De' FAD-LILLAH" },
      ],
    },
    {
      slug: "al-ukhuwah-al-islamiyah",
      title: "Al Ukhuwah – Al Islamiyah – Al Jamaah",
      category: "Ukhuwah",
      authorName: "D. Syarif Zahda Ayman",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/34984843_2189448661066094_2471734484639154176_n.jpg?w=960",
      date: new Date("2023-01-30"),
      content: [
        { type: "paragraph", text: "Jika setiap umat Islam hanya memikirkan nasib masing-masing — Palestina, negeri ini, bangsa Moro — di manakah ukhuwah Islamiyah? Di manakah universalitas Islam?" },
        { type: "paragraph", text: "Semangat nasionalisme telah merasuk lebih dalam daripada semangat Islam. Ketika musuh menyerang tanah air, seluruh warganya bersatu. Namun ketika musuh menyerang umat Islam dari madzhab yang berbeda, mereka tetap diam." },
        { type: "paragraph", text: "Artikel ini menyerukan untuk bergabung dalam barisan jama'ah yang dipimpin oleh orang-orang yang berjuang untuk meninggikan kalimat Laa Ilaaha Illallah." },
        { type: "paragraph", text: "Islam adalah agama yang praktis, realistis, dan serius — bukan agama slogan kosong. Ayok tetapkan POSISI HIDUP ini / LURUSKAN NIAT BERISLAM KAAFah" },
      ],
    },
    {
      slug: "emang-penting-islam-punya-pemimpin",
      title: "Emang Penting Islam Punya Pemimpin,.?",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/pemimpin.jpg?w=750",
      date: new Date("2023-01-19"),
      content: [
        { type: "paragraph", text: "Apakah penting Islam memiliki pemimpin? Bukankah ibadah bisa berjalan lancar tanpa harus ada imam?" },
        { type: "verse", arabic: "يَوْمَ نَدْعُو كُلَّ أُنَاسٍ بِإِمَامِهِمْ ۖ فَمَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَأُولَٰئِكَ يَقْرَءُونَ كِتَابَهُمْ وَلَا يُظْلَمُونَ فَتِيلًا", translation: "Ingatlah suatu hari Kami panggil tiap umat dengan pemimpinnya; dan barang siapa yang diberikan kitab amalannya di tangan kanannya, maka mereka ini akan membaca kitabnya itu dan mereka tidak dianiaya sedikit pun.", reference: "QS. Al-Isra: 71" },
        { type: "paragraph", text: "Syaikh 'Abdur-Rahman as-Sa'di menjelaskan: setiap umat akan dipanggil bersama imam dan penuntun mereka — para nabi dan pewaris-pewaris mereka. Tidak ada yang bisa membantah kewajiban menyaksikan keislaman kita oleh seorang Imam/Muslim." },
      ],
    },
    {
      slug: "umat-teladan-yang-tidak-meneladani",
      title: "Umat Teladan .. Yang Tidak Meneladani ..",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      image: "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/teladan.jpg?w=492",
      date: new Date("2023-01-18"),
      content: [
        { type: "paragraph", text: "Saya membuka Al-Qur'an surat Ali Imran ayat 110, di mana Allah berfirman tentang umat Muslim sebagai umat terbaik yang dilahirkan untuk umat manusia." },
        { type: "verse", arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ", translation: "Dan tiadalah Kami mengutus kamu, melainkan untuk menjadi rahmat bagi semesta alam.", reference: "QS. Al-Anbiya': 107" },
        { type: "paragraph", text: "Apakah dunia telah merasakan rahmat Allah melalui pekerjaan orang-orang Muslim hari ini? Kita hanya bisa bertanya kepada diri sendiri. TAFDAQUR bulan Shafar — berusaha meneladani uswah Nabi. De' FAD-LILLAH" },
      ],
    },
    {
      slug: "3-nilai-hamba-allah-di-balik-musibah",
      title: "3 Nilai Hamba Allah di Balik Musibah",
      category: "Tafsir",
      authorName: "ACEH (Dinas Syari'at Islam Pidie)",
      date: new Date("2023-01-17"),
      content: [
        { type: "paragraph", text: "Musibah dalam kehidupan adalah bagian dari taqdir Allah. Tidak ada yang dapat menghalangi kehendak Allah. Barangsiapa yang beriman, maka Allah akan menambah petunjuk dan menenangkan hatinya." },
        { type: "paragraph", text: "Pertama: Allah telah mengenakan pakaian-pakaian keberadaan yang menjadi indikator kekuasaan-Nya. Nama-Nya Asy-Syafi membutuhkan penyakit; Ar-Razzaq membutuhkan kelaparan." },
        { type: "paragraph", text: "Kedua: Kehidupan menjadi jelas melalui musibah dan cobaan. Kehidupan monoton lebih dekat kepada ketiadaan daripada keberadaan." },
        { type: "paragraph", text: "Ketiga: Dunia adalah ladang ujian dan cobaan — tempat untuk beramal dan beribadah, bukan tempat rekreasi atau pahala. Berdasarkan pemikiran Said Nursi dari karya Al-Lama'at." },
      ],
    },
    {
      slug: "mustadafiin-fil-ardh",
      title: "Adakah Kita Bagian dari Kelompok Mustad'afin Fil Ard",
      category: "Dakwah",
      authorName: "Al Bantani, De' FAD-LILLAH",
      date: new Date("2023-01-16"),
      content: [
        { type: "paragraph", text: "Artikel ini membahas tentang Mustad'afin fil Ardh — orang-orang yang lemah dan tertindas di muka bumi." },
        { type: "verse", arabic: "وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ", translation: "Mengapa kamu tidak mau berperang di jalan Allah dan membela orang-orang yang lemah baik laki-laki, wanita-wanita maupun anak-anak?", reference: "QS. An-Nisa: 75" },
        { type: "paragraph", text: "Marilah kita memperkuat diri untuk berjuang dalam furqan wal hijrah, jihad wal jama'ah. Rabiul Awal 1444 H, De' FAD-LILLAH" },
      ],
    },
    {
      slug: "liqaa-rabbahu",
      title: "Sesiap Apa Kita Dipertemukan Allah (Liqa'a Rabbahu)?",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-14"),
      content: [
        { type: "paragraph", text: "Tadzkirah — kita sering menyia-nyiakan waktu untuk bertemu dengan Allah Azza Wajalla setiap hari. Banyak undangan untuk dikunjungi dan dijamu oleh Allah." },
        { type: "paragraph", text: "Kata kuncinya adalah Iman dan Amal Sholeh. Barangsiapa yang beriman siap bertemu Allah. Barangsiapa yang beramal saleh atas imannya — itulah saat pertemuan dengan Rabb-nya." },
        { type: "paragraph", text: "Sudah waktunya hijrah pertemuan, sudah waktunya hijrah amalan — teguhkan bahwa Allah selalu mengawasi di setiap kesempatan. De' FAD-LILLAH" },
      ],
    },
    {
      slug: "kebaikan-dan-keburukan",
      title: "Kebaikan Dan Keburukan!",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-13"),
      content: [
        { type: "paragraph", text: "Hadits ke-37 dari Arba'in An Nawawi — Allah mencatat kebaikan dan keburukan. Jika seseorang berniat baik tapi tidak melakukannya, itu dicatat sebagai satu kebaikan penuh." },
        { type: "paragraph", text: "Jika berniat dan melakukannya, Allah mencatat sepuluh kebaikan hingga tujuh ratus kali lipat bahkan lebih. Jika berniat buruk tapi tidak melakukannya, itu dicatat satu kebaikan. Jika melakukannya, dicatat satu dosa." },
        { type: "paragraph", text: "Sumber: Shahih Bukhari no 6491 dan Shahih Muslim no 131. De' FAD-LILLAH" },
      ],
    },
    {
      slug: "antara-kufur-dan-iman",
      title: "Antara Kufur Dan Iman?",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-12"),
      content: [
        { type: "paragraph", text: "Refleksi tentang pilihan antara kufur (kekafiran) dan iman. Penulis mengajak pembaca untuk memeriksa apa, kepada siapa, dan bagaimana mereka mempraktikkan kufur dan iman." },
        { type: "paragraph", text: "Dalam Islam, dakwah kepada non-Muslim harus tanpa paksaan. Sementara Muslim yang telah menyatakan keislamanannya wajib mengikuti Syariat. Iman dan Islam yang sebenarnya dibuktikan dengan menolak semua dimensi sistem Syaitan (Thaghut)." },
        { type: "paragraph", text: "Tatar BANTEN, De' FAD-LILLAH" },
      ],
    },
    {
      slug: "antara-keberkahan-dan-kebinasaan",
      title: "Antara Keberkahan Yang Ditambahkan Dan Kebinasaaan Yang Dihancurkan?",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-11"),
      content: [
        { type: "paragraph", text: "Pengingat bahwa Allah meninggikan hamba-Nya setiap pagi dengan rezeki yang telah disiapkan, namun tiga pertanyaan akan ditanyakan tentang rezeki tersebut: bagaimana cara mendapatkannya, bagaimana cara menggunakannya, dan untuk tujuan apa." },
        { type: "paragraph", text: "Penulis mengajak pembaca untuk bersiap menjawab dan mulai bertindak setiap pagi dengan bersedekah, berinfaq, dan wakaf di jalan Allah." },
        { type: "paragraph", text: "PONPES QUR'AN YABIPA-JABAL FATH, De' FAD-LILLAH" },
      ],
    },
    {
      slug: "kaum-iblis-musuh-yang-nyata",
      title: "Kaum Iblis Musuh Yang Nyata",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-07"),
      content: [
        { type: "paragraph", text: "Seruan untuk istiqamah dalam Islam melalui ikatan komunal yang kuat (jama'ah). Penulis memperingatkan bahwa kesesatan kaum Iblis akan dikampanyekan agar menjadi satu misi bangsa yang disesatkan." },
        { type: "paragraph", text: "Satu-satunya solusi adalah menjadi orang-orang yang MUKHLISIIN LAHU DIIEN, mempertahankan istiqamah dan kekuatan jihad melalui jiwa dan harta melawan musuh-musuh Allah. De' FAD-LILLAH" },
      ],
    },
    {
      slug: "manusia-terbaik",
      title: "Agar Menjadi Manusia Terbaik",
      category: "Dakwah",
      authorName: "De' FAD-LILLAH",
      date: new Date("2023-01-06"),
      content: [
        { type: "paragraph", text: "Setiap jiwa ingin menjadi yang terbaik, tapi kuncinya adalah jenis 'terbaik' apa yang dipilih. Bersaing menjadi yang terbaik di antara umat yang baik (beriman) berarti mengukur perbuatan berdasarkan manfaatnya bagi diri, keluarga, masyarakat, dan bangsa." },
        { type: "paragraph", text: "Ulul Albab akan menjadikan tujuan hidup tentang menjadi bermanfaat melalui jiwa, raga, harta, keluarga, ilmu, dan segala yang telah Allah amanahkan, semata-mata untuk DZAHIRUL HAQ WA FATHUL ISLAM." },
        { type: "paragraph", text: "BATAVIA-2211-22, De' FAD-LILLAH" },
      ],
    },
    {
      slug: "hati-yang-memberontak",
      title: "Hati yang Memberontak",
      category: "Dakwah",
      authorName: "D. FAD-LILLAH",
      date: new Date("2019-02-23"),
      content: [
        { type: "paragraph", text: "Refleksi tentang waktu yang berlalu dan kedekatan dengan kematian, serta berapa banyak amal baik yang menyertai setiap hari." },
        { type: "paragraph", text: "Hati yang memberontak selalu berargumen atas kebenaran, keberatan dan keengganannya menerima kebenaran ditutupi dengan rangkaian alasan. Sejuta alasan buatan tidak akan membatalkan kebenaran atau memenuhi kewajiban." },
        { type: "paragraph", text: "Referensi QS Al-Baqarah:68 tentang Bani Israil yang mempersulit perintah Allah tentang sapi, paralel dengan sikap Yahudi yang terlalu banyak bertanya tentang perintah Allah sebagai bentuk penolakan. D.FAD-LILLAH, 2202-19" },
      ],
    },
    {
      slug: "prioritas-ilmu-atas-amal",
      title: "Prioritas Ilmu Atas Amal",
      category: "Tafsir",
      authorName: "D. FAD-LILLAH",
      date: new Date("2019-02-14"),
      content: [
        { type: "paragraph", text: "Ilmu harus mendahului amal karena ilmu memandu dan mengarahkan perbuatan. Hadits Mu'adz: 'ilmu, itu pemimpin, dan amal adalah pengikutnya.' Imam Bukhari menamai bab 'Ilmu itu Mendahului Perkataan dan Perbuatan.'" },
        { type: "paragraph", text: "Para ulama menjelaskan ilmu adalah prasyarat keabsahan perkataan dan perbuatan — tanpanya, keduanya tidak dianggap benar. Ayat Al-Qur'an menunjukkan Allah memerintahkan pengetahuan tentang tauhid sebelum meminta ampunan." },
        { type: "paragraph", text: "D.FAD-LILLAH, Batavia 13-02-19" },
      ],
    },
    {
      slug: "nimat-iman-hijrah-jihad",
      title: "Ni'mat Iman Tak Akan Terasa Tanpa Keterkaitan Sikap BerHijrah dan BerJihad",
      category: "Dakwah",
      authorName: "D. FAD-LILLAH",
      date: new Date("2019-02-11"),
      content: [
        { type: "paragraph", text: "Kesenangan iman tidak bisa dirasakan hanya melalui perkataan dan keyakinan hati — tetapi membutuhkan amal sholeh yang terbukti untuk menetapkan nilai tauhid hingga mencapai kemenangan dan keridhaan Allah." },
        { type: "paragraph", text: "Dua ayat Al-Qur'an (Al-Baqarah:218 dan At-Taubah:20) menyebutkan iman, hijrah, dan jihad secara berurutan sebagai hal yang tidak terpisahkan." },
        { type: "paragraph", text: "Hijrah setelah penaklukan Makkah bukan lagi geografis tapi spiritual: hijrah dalam aqidah, hijrah dalam ibadah, dan hijrah dalam akhlak. FAD-LILLAH, @Batavia 1102-19" },
      ],
    },
    {
      slug: "bertaawuzd-dari-keraguan",
      title: "Berta'awuzd Lah Dari Keragu-Raguan",
      category: "Dakwah",
      authorName: "D ABIWIEZNA Z.A",
      date: new Date("2019-01-26"),
      content: [
        { type: "paragraph", text: "Setiap manusia diberikan potensi hati (qalbu) untuk menempatkan keyakinan aqidah dengan komitmen total. Ukuran baik atau buruk dalam perbuatan seseorang adalah kualitas aqidah di hati." },
        { type: "paragraph", text: "Iblis, sebagai musuh Allah, Rasul-Nya, dan orang-orang beriman, terus-menerus menggoda melalui godaan, rayuan, perimbangan, pertentangan, persamaan dan yang paling halus adalah dengan 'Keraguan' tentang kebenaran Islam dan tauhid." },
        { type: "paragraph", text: "Referensi hadits dari Hasan bin Ali: 'Tinggalkanlah sesuatu yang meragukanmu kepada sesuatu yang tidak meragukanmu.' D ABIWIEZNA Z.A" },
      ],
    },
    {
      slug: "memburu-janji-allah",
      title: "Memburu Janji Allah",
      category: "Dakwah",
      authorName: "FAD-LILLAH",
      date: new Date("2018-12-18"),
      content: [
        { type: "paragraph", text: "Seruan motivasional untuk mengejar janji-janji Allah. Merujuk hadits tentang dua malaikat yang turun saat matahari terbit — satu berdoa agar Allah mengganti apa yang dibelanjakan di jalan-Nya, dan satu lagi berdoa atas kehancuran bagi yang menimbun harta." },
        { type: "paragraph", text: "Penulis bertanya apa yang lebih indah dan pasti dari janji Allah, dan memperingatkan agar tidak tertipu oleh dunia. Allah telah merahasiakan waktu pasti janji-Nya untuk memotivasi pengejarannya." },
        { type: "paragraph", text: "FAD-LILLAH, BORNEO 1812-18" },
      ],
    },
    {
      slug: "jangan-khawatirkan-islam",
      title: "Jangan Khawatirkan Islam!",
      category: "Dakwah",
      authorName: "FAD-LILLAH",
      date: new Date("2018-12-13"),
      content: [
        { type: "paragraph", text: " Artikel ini mendesak muslim untuk tidak khawatir tentang masa depan Islam, meyakinkan bahwa Allah menjamin pelestariannya. Merujuk QS. Al-Hijr:9 tentang Allah menjaga Al-Qur'an." },
        { type: "paragraph", text: "Penulis menegaskan: 'Islam tidak akan rugi tanpa kita, namun kita akan rugi total tanpa Islam.' Kesimpulannya menjelaskan bahwa tidak khawatir tentang Islam bukan berarti meninggalkan pembelaannya." },
        { type: "paragraph", text: "Baith Arqam el Aqsha, FAD-LILLAH" },
      ],
    },
    {
      slug: "kecerdasan-iman",
      title: "Kecerdasan Iman",
      category: "Tafsir",
      authorName: "FAD-LILLAH",
      date: new Date("2018-12-11"),
      content: [
        { type: "paragraph", text: "Refleksi tentang konsep 'kecerdasan iman'. Penulis mencatat bahwa konsep Riba, hukum waris, dan Qishas mungkin tampak tidak adil atau keras bagi sebagian orang, tapi tidak bagi yang memiliki kecerdasan iman (ulil Albaab)." },
        { type: "paragraph", text: "Merujuk QS. Al-Baqarah:179 tentang dalam Qishas ada kehidupan bagi orang yang berakal. Penulis memanggil pembaca untuk mencari petunjuk secara eksklusif dari Al-Qur'an dan Hadits shahih." },
        { type: "paragraph", text: "BATAVIA 512 – 18, FAD-LILLAH" },
      ],
    },
    {
      slug: "hidup-dan-menerangi",
      title: "Hidup dan Menerangi",
      category: "Tafsir",
      authorName: "FAD-LILLAH",
      date: new Date("2018-11-28"),
      content: [
        { type: "paragraph", text: "Refleksi tentang Al-Qur'an sebagai sumber cahaya spiritual dan vitalitas. Merujuk QS. Ash-Shuraa:52, penulis mendeskripsikan Al-Qur'an sebagai cahaya yang memberi petunjuk bagi yang dikehendaki Allah." },
        { type: "paragraph", text: "Merujuk tafsir Imam At-Thabari, Ruh (Al-Qur'an) adalah rahmat yang membuat segalanya hidup dan menerangi semua hal. Doa penutup memohon Allah memberi kemampuan membaca Al-Qur'an pagi dan petang." },
        { type: "paragraph", text: "@FAD-LILLAH" },
      ],
    },
    {
      slug: "kita-semicolon-berbuat-kesalahan",
      title: "Kita Semua Berbuat Kesalahan",
      category: "Dakwah",
      authorName: "Redaksi",
      date: new Date("2018-11-24"),
      content: [
        { type: "paragraph", text: "Artikel yang diterjemahkan/diadaptasi tentang pertaubatan dan ketidaksempurnaan manusia. Mengakui bahwa semua manusia berdosa dan membuat kesalahan — kadang mendekat ke Allah, kadang menyimpang." },
        { type: "paragraph", text: "Merujuk hadits dari Tirmidhi tentang semua anak Adam berdosa, dan bahwa lupa adalah bagian dari sifat manusia dan Allah dengan penuh kasih membuka pintu taubat." },
        { type: "paragraph", text: "Jawabannya hanya satu — jalan taubat. QS. Thaaha:82 tentang Allah menjanjikan ampunan bagi yang bertaubat, beriman, beramal saleh, dan tetap di jalan yang benar." },
      ],
    },
    {
      slug: "syarat-syarat-hidayah-bag2",
      title: "Syarat-Syarat Hidayah Ilahi Hadir Dalam Hidup Ini (Bag 2)",
      category: "Dakwah",
      authorName: "D. FAD-LILLAH",
      date: new Date("2018-11-23"),
      content: [
        { type: "paragraph", text: "Bagian kedua dari seri tentang syarat-syarat menerima hidayah (petunjuk) Ilahi, mencakup poin 6-9:" },
        { type: "paragraph", text: "Poin 6: Mengikuti teladan orang-orang saleh terdahulu. QS. Al-An'aam:90." },
        { type: "paragraph", text: "Poin 7: Benar-benar beriman kepada qadar (ketentuan) Allah. QS. At-Taghaabun:11." },
        { type: "paragraph", text: "Poin 8: Terbuka terhadap keindahan Islam. QS. Al-An'aam:125." },
        { type: "paragraph", text: "Poin 9: Berjuang sungguh-sungguh di jalan Allah. QS. Al-Ankabuut:69. Aqsha Al Arqam, Rabiul Awal 1440 H" },
      ],
    },
    {
      slug: "seru-sebar-shadaqah",
      title: "Seru Sebar Shadaqah Syabilillah – Yabipa Jumat Berkah",
      category: "Ukhuwah",
      authorName: "Koord RASSYA, D.ABIWIEZNA Z.A",
      date: new Date("2018-11-23"),
      content: [
        { type: "paragraph", text: "Pengumuman program amal '4S-YB' (Seru Sebar Shadaqah Syabilillah – Yabipa Berkah) yang diselenggarakan oleh tim relawan RASSYA. Program ini membagikan sadaqah jariyah kepada penerima di Cibinong, Cirebon, Bojonegoro (Jawa Timur), dan sebuah direktorat BRI di Jakarta." },
        { type: "paragraph", text: "Penulis berharap Allah membalas dengan keberkahan hidup dunia dan Akhirat." },
      ],
    },
    {
      slug: "syarat-syarat-hidayah-bag1",
      title: "Syarat-Syarat Hidayah Ilahi Hadir Dalam Hidup Ini (Bag 1)",
      category: "Dakwah",
      authorName: "FAD-LILLAH",
      date: new Date("2018-11-21"),
      content: [
        { type: "paragraph", text: "Bagian pertama dari seri tentang syarat-syarat menerima hidayah Ilahi, mencakup poin 1-5:" },
        { type: "paragraph", text: "Poin 1: Tidak mengandalkan diri sendiri — selalu bergantung kepada Allah." },
        { type: "paragraph", text: "Poin 2: Mengikuti agama Allah sepenuhnya. QS. Thaaha:123 dan QS. Muhammad:17." },
        { type: "paragraph", text: "Poin 3: Membaca dan merenungkan Al-Qur'an. QS. Al-Israa':9." },
        { type: "paragraph", text: "Poin 4: Mengikuti Sunnah Nabi. QS. Al-Fath:28." },
        { type: "paragraph", text: "Poin 5: Mengikuti pemahaman dan praktik Sahabat. QS. Al-Baqarah:137." },
      ],
    },
    {
      slug: "menatap-rezeki-ilahi",
      title: "Menatap Rezeki Ilahi",
      category: "Tafsir",
      authorName: "Redaksi",
      date: new Date("2018-11-16"),
      content: [
        { type: "paragraph", text: "Artikel ini mendorong muslim untuk melihat rezeki melalui perspektif Allah daripada pandangan mereka sendiri. Merujuk QS. Hud:6 tentang Allah sebagai penyedia rezeki bagi semua makhluk." },
        { type: "paragraph", text: "Penulis mendesak pembaca untuk tidak khawatir tentang rezeki sekaligus tidak menjadi malas. Artikel memperingatkan terhadap tipu daya Iblis dan menekankan bahwa pahala Allah dengan akhirat melebihi keuntungan duniawi." },
        { type: "paragraph", text: "QS. Al-Jumu'ah:10 tentang bertebaran di bumi setelah sholat untuk mencari karunia Allah." },
      ],
    },
    {
      slug: "kader-pemenang-tahun-baru-1440",
      title: "Jadilah Kader Pemenang di Tahun Baru 1440 H ini",
      category: "Dakwah",
      authorName: "FAD-LILLAH",
      date: new Date("2018-09-11"),
      content: [
        { type: "paragraph", text: "Artikel ini mendorong muslim untuk menjadi kader pemenang di tahun Hijriah baru 1440. Penulis menekankan bahwa waktu terus bergerak dan masa depan adalah misteri, tapi persiapan bisa dimulai sekarang dengan mengumpulkan bekal untuk akhirat." },
        { type: "paragraph", text: "Merujuk QS. Al-'Ankabut:64 tentang kehidupan duniawi hanya hiburan, dan QS. Al-Hasyr:18 tentang evaluasi diri. Ibnu Kathir dikutip tentang pentingnya penilaian diri sebelum perbuatan ditimbang." },
        { type: "paragraph", text: "1 Muharam 1440 H, FAD-LILLAH" },
      ],
    },
    {
      slug: "karakteristik-manhaj-rasulullah-makkah-bag2",
      title: "Karakteristik MANHAJ RASULULLAH Perode Pertama 'Makkah' (Bag 2)",
      category: "Tafsir",
      authorName: "FAD-LILLAH",
      date: new Date("2018-08-10"),
      content: [
        { type: "paragraph", text: "Bagian kedua yang menganalisis karakteristik metodologi Nabi selama periode Makkah pertama (rahasia), mencakup karakteristik 6-10:" },
        { type: "paragraph", text: "Karakteristik 6 (Shalat): Jibril datang ke Nabi di gunung Makkah, mengajarkan wudhu dari mata air, dan memimpin shalat." },
        { type: "paragraph", text: "Karakteristik 7 (Kesadaran Quraysh): Quraysh awalnya tidak terlalu memperhatikan dakwah karena hanifiyyah sudah ada di antara mereka." },
        { type: "paragraph", text: "Karakteristik 8 (Koeksistensi): Selama periode rahasia, tidak ada konfrontasi karena pesannya bersifat privat dan selektif." },
        { type: "paragraph", text: "Karakteristik 9 (Membangun Aqidah): Fokusnya pada membangun fondasi keyakinan yang benar dengan tenang." },
        { type: "paragraph", text: "Karakteristik 10 (Dakwah terbuka): Setelah kader inti yang kuat terbentuk, konfrontasi terbuka dimulai. FAD-LILLAH" },
      ],
    },
  ];

  let created = 0;
  let skipped = 0;

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
      created++;
    } else {
      skipped++;
    }
  }

  console.log(`✅ Created: ${created} articles`);
  console.log(`⏭️ Skipped: ${skipped} articles (already exist)`);
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
