export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  content: ArticleContent[];
}

export interface ArticleContent {
  type: "paragraph" | "verse" | "heading";
  arabic?: string;
  translation?: string;
  reference?: string;
  text?: string;
}

export const articles: Article[] = [
  {
    slug: "mensyukuri-nikmat-islam",
    title: "Mensyukuri Nikmat Islam Yang Allah Subhanahu Wa Ta'ala Karuniakan Kepada Kita",
    date: "30 Desember 2024",
    category: "Tafsir",
    author: "De' FAD-LILLAH",
    content: [
      {
        type: "paragraph",
        text: "Yaa Ikhawanii rahimakumullah — Allah Azza wa Jalla berfirman:",
      },
      {
        type: "verse",
        arabic: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ",
        translation: "Barangsiapa dikehendaki Allah akan mendapat hidayah (petunjuk), Dia akan membukakan dadanya untuk (menerima) Islam. Dan barangsiapa dikehendaki-Nya menjadi sesat, Dia jadikan dadanya sempit dan sesak, seakan-akan dia (sedang) mendaki ke langit. Demikianlah Allah menimpakan siksa kepada orang-orang yang tidak beriman.",
        reference: "QS. Al-An'aam/6: 125",
      },
      {
        type: "verse",
        arabic: "مَن شَرَحَ اللَّهُ صَدْرَهُ لِلْإِسْلَامِ فَهُوَ عَلَىٰ نُورٍ مِّن رَّبِّهِ ۚ فَوَيْلٌ لِّلْقَاسِيَةِ قُلُوبُهُم مِّن ذِكْرِ اللَّهِ ۚ أُولَٰئِكَ فِي ضَلَالٍ مُّبِينٍ",
        translation: "Maka apakah orang-orang yang dibukakan hatinya oleh Allah untuk (menerima) agama Islam lalu dia mendapat cahaya dari Rabb-nya (sama dengan orang yang hatinya membatu)? Maka celakalah mereka yang hatinya telah membatu untuk mengingat Allah. Mereka itu dalam kesesatan yang nyata.",
        reference: "QS. Az-Zumar/39: 22",
      },
      {
        type: "paragraph",
        text: "Orang yang tidak mendapat hidayah akan senantiasa berada dalam kegelapan dan kerugian. Bagaimana jika seandainya seseorang tidak diberi hidayah oleh Allah Azza wa Jalla? Maka pasti ia menderita dalam kekafirannya, hidupnya sengsara dan tidak tenteram, serta di akhirat akan disiksa dengan siksaan yang abadi.",
      },
      {
        type: "paragraph",
        text: "Allah Azza wa Jalla menunjuki hamba-Nya dari kegelapan menuju cahaya yang terang benderang melalui Rasul-Nya Shallallahu 'alaihi wa sallam. Untuk itu, kewajiban kita adalah mengikuti, meneladani dan mentaati Rasulullah Shallallahu 'alaihi wa sallam dalam segala perilaku kehidupan kita.",
      },
      {
        type: "verse",
        arabic: "لَقَدْ مَنَّ اللَّهُ عَلَى الْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولًا مِّنْ أَنفُسِهِمْ يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَإِن كَانُوا مِن قَبْلُ لَفِي ضَلَالٍ مُّبِينٍ",
        translation: "Sungguh, Allah telah memberi karunia kepada orang-orang yang beriman ketika (Allah) mengutus seorang Rasul (Muhammad) di tengah-tengah mereka dari kalangan mereka sendiri, yang membacakan kepada mereka ayat-ayat-Nya, mensucikan (jiwa) mereka, dan mengajarkan kepada mereka Kitab (Al-Qur'an) dan Hikmah (As-Sunnah), meskipun sebelumnya, mereka benar-benar dalam kesesatan yang nyata.",
        reference: "QS. Ali 'Imran/3: 164",
      },
      {
        type: "paragraph",
        text: "Setiap muslim niscaya meyakini bahwasanya karunia Allah Azza wa Jalla yang terbesar di dunia ini adalah agama Islam. Seorang muslim akan senantiasa bersyukur kepada Allah Subhanahu wa Ta'ala yang telah memberinya petunjuk ke dalam Islam dan mengikuti ajaran Nabi Muhammad Shallallahu 'alaihi wa sallam.",
      },
      {
        type: "verse",
        arabic: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا",
        translation: "Pada hari ini telah Aku sempurnakan agamamu untukmu, dan telah Aku cukupkan nikmat-Ku bagimu, dan telah Aku ridhai Islam sebagai agamamu.",
        reference: "QS. Al-Maa'idah/5: 3",
      },
      {
        type: "heading",
        text: "Kewajiban Kita Atas Karunia yang Kita Terima",
      },
      {
        type: "paragraph",
        text: "Bukti rasa syukur yang paling sebenar-benarnya adalah dengan beribadah kepada Allah Azza wa Jalla semata dengan ikhlas, menegakkan tauhid, menjauhi segala bentuk syirk, mengikuti Nabi Muhammad Shallallahu 'alaihi wa sallam, serta taat kepada Allah dan Rasul-Nya.",
      },
      {
        type: "verse",
        arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        translation: "Maka ingatlah kepada-Ku, Aku pun akan ingat kepadamu. Bersyukurlah kepada-Ku, dan janganlah kamu ingkar kepada-Ku.",
        reference: "QS. Al-Baqarah/2: 152",
      },
      {
        type: "paragraph",
        text: "Untuk menjadi muslim sejati, kita harus menuntut ilmu yang bermanfaat (ilmu syar'i). Ilmu adalah jalan untuk membedakan antara yang haq dan yang bathil, antara petunjuk dan kesesatan.",
      },
      {
        type: "verse",
        arabic: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُونَ",
        translation: "Dia-lah yang telah mengutus Rasul-Nya dengan petunjuk (Al-Qur'an) dan agama yang benar untuk diunggulkan atas segala agama, walaupun orang-orang musyrik tidak menyukai.",
        reference: "QS. At-Taubah/9: 33",
      },
      {
        type: "verse",
        arabic: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ ۚ وَكَفَىٰ بِاللَّهِ شَهِيدًا",
        translation: "Dia-lah yang mengutus Rasul-Nya dengan membawa petunjuk dan agama yang benar, agar dimenangkan-Nya terhadap semua agama. Dan cukuplah Allah sebagai saksi.",
        reference: "QS. Al-Fath/48: 28",
      },
      {
        type: "paragraph",
        text: "Yang dimaksud dengan al-huda (petunjuk) adalah ilmu yang bermanfaat, dan din al-haq (agama yang benar) adalah amal shalih. Nabi kita Muhammad Shallallahu 'alaihi wa sallam diutus untuk menjelaskan yang haq dari yang bathil, menjelaskan nama-nama Allah dan sifat-sifat-Nya, perbuatan-Nya, syariat dan wahyu-Nya. Beliau memerintahkan keikhlasan dalam beribadah, mencintai Allah, akhlak yang mulia, dan amal shalih. Beliau melarang syirk dan perbuatan buruk.",
      },
      {
        type: "paragraph",
        text: "Menuntut ilmu syar'i adalah jalan lurus (ash-Shirathal Mustaqim) untuk membedakan antara yang haq dan yang bathil. Hanya dengan ilmu kita akan mengetahui jalan yang benar dan jalan yang sesat.",
      },
      {
        type: "paragraph",
        text: "Fadzkurullah.. ainamaa kunta.. insha ALLAH.. De' FAD-LILLAH",
      },
    ],
  },
  {
    slug: "nikmat-yang-sesungguhnya",
    title: "Nikmat Yang Sesungguhnya,!",
    date: "6 April 2023",
    category: "Dakwah",
    author: "musyafir da'wah",
    content: [
      {
        type: "paragraph",
        text: "Bismillahirrahmanirrahim — Semoga bermanfaat. Amiin.",
      },
      {
        type: "paragraph",
        text: "Sayyidina Ali bin Abi Thalib Radhiyallahu 'anhu berkata:",
      },
      {
        type: "paragraph",
        text: "Dari sekian banyak nikmat dunia, cukuplah Islam sebagai nikmat bagimu. Dari sekian banyak kesibukan, cukuplah ketaatan sebagai kesibukan bagimu. Dan dari sekian banyak pelajaran, cukuplah kematian sebagai pelajaran bagimu.",
      },
      {
        type: "paragraph",
        text: "Sahabat, betapa ada dua nikmat terbesar yang seringkali kita terlupa — pertama, nikmat diwujudkannya kita oleh Allah Azza wa Jalla di dunia, dari tidak ada menjadi ada. Kemudian nikmat dikehendaki-Nya kita keluar dari gelapnya kekafiran, menuju cahaya Islam.",
      },
      {
        type: "paragraph",
        text: "Syaikh Nawawi Al-Bantani dalam kitab Nashaihul 'Ibad menjelaskan perkataan Sayyidina Ali: Ketaatan adalah kesibukan terbesar. Ketika kita menyadari betapa beruntungnya kita mendapatkan nikmat hidup dan Islam, maka tidak ada kebanggaan yang lebih besar selain taat kepada-Nya di mana pun dan kapan pun kita berada.",
      },
      {
        type: "paragraph",
        text: "Ketaatan kepada Allah adalah tugas terbesar bagi hamba-Nya, menggeser kejaran hawa nafsu dan maksiat. godaan dalam kehidupan tidak bisa dihindari, sehingga diperlukan pengendalian diri dalam setiap kondisi.",
      },
      {
        type: "paragraph",
        text: "Pelajaran terbesar bagi manusia adalah kematian — mengingatkannya akan membuat amal shalih dan ketaatan menjadi lebih mudah dilakukan.",
      },
      {
        type: "paragraph",
        text: "musyafir da'wah ✒️",
      },
    ],
  },
  {
    slug: "adakah-musholla-di-rumah-kita",
    title: "Adakah Musholla di Rumah Kita?..",
    date: "7 Februari 2023",
    category: "Tafsir",
    author: "De' FAD-LILLAH",
    content: [
      {
        type: "paragraph",
        text: "Sahabat Se-Iman Rahimakumullah — Kata MUSHOLLA secara bahasa dimaknai sebagai tempat sholat. Meskipun hal ini benar secara literal, namun ketika dikaitkan dengan Al-Qur'an, maka kata ini berkaitan dengan sejarah perjuangan Nabi Ibrahim Alaihissalam.",
      },
      {
        type: "verse",
        arabic: "وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى",
        translation: "(ingatlah), ketika Kami menjadikan rumah itu (Baitullah) tempat berkumpul bagi manusia dan tempat yang aman. Dan jadikanlah sebahagian maqam Ibrahim tempat shalat.",
        reference: "QS. Al-Baqarah: 125",
      },
      {
        type: "verse",
        arabic: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا",
        translation: "Sesungguhnya rumah yang awal mula dibangun untuk (tempat beribadat) manusia, ialah Baitullah yang di Bakkah (Mekah) yang diberkahi dan menjadi petunjuk bagi semua manusia. Padanya terdapat tanda-tanda yang nyata, (di antaranya) maqam Ibrahim; barangsiapa memasukinya (Baitullah itu) maka dia aman.",
        reference: "QS. Ali Imran: 96-97",
      },
      {
        type: "paragraph",
        text: "Sahabat, setiap rumah muslim seharusnya menjadi MUSHOLLA — tempat sujud yang menyambungkan jiwa kepada Allah. Tidak hanya terbatas pada ruangan khusus ibadah, melainkan seluruh kediaman menjadi medium ibadah untuk menegakan kekuasaan Allah dengan syariat-Nya.",
      },
      {
        type: "heading",
        text: "Penjelasan Para Ulama tentang Maqam Ibrahim",
      },
      {
        type: "paragraph",
        text: "[1] Al-Hafidz Ibnu Katsir (al-Bidayah wa an-Nihayah): Batu tempat Ibrahim berdiri untuk mengangkat struktur Ka'bah. Anaknya meletakkan batu ini untuknya. Jejak kaki Ibrahim tetap ada di atasnya hingga awal Islam.",
      },
      {
        type: "paragraph",
        text: "[2] Al-Hafidz Ibnu Hajar: Maqam Ibrahim merujuk pada batu yang menmpak jejak kedua kaki Ibrahim.",
      },
      {
        type: "paragraph",
        text: "[3] Ibnu Katsir juga meriwayatkan dari Anas bin Malik yang melihat jejak jari dan tapak kaki Ibrahim di atas batu, namun jejak-jejak tersebut perlahan hilang karena sentuhan orang-orang. Qatadah membenarkan bahwa orang-orang menyaksikan jejak kaki tersebut hingga hilang melalui generasi-generasi.",
      },
      {
        type: "paragraph",
        text: "Marilah kita memperbaiki pemahaman tentang Mushalla sebagai tempat menegakan syariat Islam di mana pun kita berada sebagai hamba Allah.",
      },
    ],
  },
  {
    slug: "pohon-kehidupan-kita",
    title: "Seperti Apakah Pohon Kehidupan Kita?..",
    date: "6 Februari 2023",
    category: "Dakwah",
    author: "Jabal fath, De' FAD-LILLAH",
    content: [
      {
        type: "verse",
        arabic: "أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ ۚ تُؤْتِي أُكُلَهَا كُلَّ حِينٍ بِإِذْنِ رَبِّهَا ۗ وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُونَ",
        translation: "Tidakkah kamu memperhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya kuat dan cabangnya (menjulang) ke langit, (pohon) itu menghasilkan buahnya pada setiap waktu dengan seizin Tuhannya. Dan Allah membuat perumpamaan itu untuk manusia agar mereka selalu ingat.",
        reference: "QS. Ibrahim: 24-25",
      },
      {
        type: "paragraph",
        text: "Sahabat, setelah merenungi — meskipun bertahun-tahun mengucapkan dua kalimat syahadat, melaksanakan ibadah, menduduki jabatan, dan menampilkan kecerdasan di media dakwah — ternyata yang tumbuh hanyalah fatamorgana dan keinginan semu dari pohon kehidupan Islam kita.",
      },
      {
        type: "paragraph",
        text: "Astaghfirullah lanaa — pengakuan bahwa kita belum layak menjadi model sejarah yang baik bagi pertumbuhan baru, karena:",
      },
      {
        type: "paragraph",
        text: "• Parasit kemunafikan (nifak) dan kedurhakaan (fasik) di dahan-dahan pemikiran",
      },
      {
        type: "paragraph",
        text: "• Ulat-ulat kerakusan dengan bebas memakan daun-daun keikhlasan dalam dakwah",
      },
      {
        type: "paragraph",
        text: "• Yang paling parah — akar-akar aqidah telah bergeser menjadi wadah bercampur syirk, disiram dengan pupuk kesombongan diri",
      },
      {
        type: "paragraph",
        text: "Istagfirlanaa.. Yaa rabbi.. Semoga menjadi nadzirah (pengingat) di bulan Rajab ini.",
      },
      {
        type: "paragraph",
        text: "Jabal fath, De' FAD-LILLAH",
      },
    ],
  },
  {
    slug: "al-ukhuwah-al-islamiyah",
    title: "Al Ukhuwah – Al Islamiyah – Al Jamaah",
    date: "30 Januari 2023",
    category: "Ukhuwah",
    author: "D. Syarif Zahda Ayman",
    content: [
      {
        type: "paragraph",
        text: "Sahabat — Jika setiap umat Islam hanya memikirkan nasib masing-masing — Palestina, negeri ini, bangsa Moro — di manakah ukhuwah Islamiyah? Di manakah universalitas Islam? Di manakah Rabithah Alam Islami?",
      },
      {
        type: "paragraph",
        text: "Jika demikian kenyataannya, maka semangat nasionalisme telah merasuk lebih dalam daripada semangat Islam. Ketika musuh menyerang tanah air suatu bangsa, seluruh warganya bersatu. Namun ketika musuh menyerang umat Islam dari madzhab yang berbeda, mereka tetap diam.",
      },
      {
        type: "paragraph",
        text: "Universalitas Islam dan ukhuwah Islamiyah menjadi taruhannya. Fanatisme nasionalisme melampaui fanatisme Islam.",
      },
      {
        type: "paragraph",
        text: "Artikel ini menyerukan untuk bergabung dalam barisan jama'ah yang dipimpin oleh orang-orang yang berjuang untuk meninggikan kalimat Laa Ilaaha Illallah. Jiwa manusia membutuhkan jihad seperti tubuh membutuhkan makanan dan minuman — jiwa tidak dapat disucikan kecuali di bawah kelebatan pedang dakwahnya.",
      },
      {
        type: "verse",
        arabic: "وَمَا جَعَلَ اللَّهُ لِقَوْمٍ فِي أَنفُسِهِمْ مِّنْ حَاجَةٍ",
        translation: "Dan Allah tidak menjadikan suatu kekurangan bagi suatu kaum dalam diri mereka sendiri.",
        reference: "QS. Al-An'am: 112",
      },
      {
        type: "paragraph",
        text: "Islam adalah agama yang praktis, realistis, dan serius (dien amali, waqi'i, jaad) — bukan agama slogan kosong, kemewahan, gedung, mobil, dan pesta.",
      },
      {
        type: "paragraph",
        text: "Hadits (HR. Muslim): Hidup manusia yang paling baik adalah yang memegang tali kekuda di jalan Allah, senantiasa waspada, mengejar bahaya setelah mendengarnya, mencari kematian di tempat yang paling mungkin.",
      },
      {
        type: "paragraph",
        text: "Ayok tetapkan POSISI HIDUP ini / LURUSKAN NIAT BERISLAM KAAFah",
      },
    ],
  },
  {
    slug: "emang-penting-islam-punya-pemimpin",
    title: "Emang Penting Islam Punya Pemimpin,.?",
    date: "19 Januari 2023",
    category: "Dakwah",
    author: "De' FAD-LILLAH",
    content: [
      {
        type: "paragraph",
        text: "Sahabat — Apakah penting Islam memiliki pemimpin? Bukankah ibadah bisa berjalan lancar tanpa harus ada imam?",
      },
      {
        type: "paragraph",
        text: "Kita harus memahami bahwa amal perbuatan kita akan disaksikan oleh Imam yang memimpin kehidupan Islam kita. Ini adalah syarat sahnya keislaman kita di dunia hingga di akhirat.",
      },
      {
        type: "verse",
        arabic: "يَوْمَ نَدْعُو كُلَّ أُنَاسٍ بِإِمَامِهِمْ ۖ فَمَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَأُولَٰئِكَ يَقْرَءُونَ كِتَابَهُمْ وَلَا يُظْلَمُونَ فَتِيلًا ﴿٧١﴾ وَمَنْ كَانَ فِي هَٰذِهِ أَعْمَىٰ فَهُوَ فِي الْآخِرَةِ أَعْمَىٰ وَأَضَلُّ سَبِيلًا",
        translation: "(Ingatlah) suatu hari (yang pada hari itu) Kami panggil tiap umat dengan pemimpinnya; dan barang siapa yang diberikan kitab amalannya di tangan kanannya, maka mereka ini akan membaca kitabnya itu dan mereka tidak dianiaya sedikit pun. Dan barang siapa yang buta (hatinya) di dunia ini, niscaya di akhirat (nanti) ia akan lebih buta (pula) dan lebih tersesat dari jalan (yang benar).",
        reference: "QS. Al-Isra'/17: 71-72",
      },
      {
        type: "heading",
        text: "Tafsir Para Ulama",
      },
      {
        type: "paragraph",
        text: "Syaikh 'Abdur-Rahman as-Sa'di menjelaskan bahwa setiap umah akan dipanggil bersama imam dan penuntun mereka — para nabi dan pewaris-pewaris mereka.",
      },
      {
        type: "paragraph",
        text: "Imam ath-Thabari, melalui Mujahid, meriwayatkan bahwa 'imam' berarti nabi mereka. Qatadah juga menafsirkan demikian — bahwa umat-umat akan berdiri di hadapan Allah disertai para nabi mereka.",
      },
      {
        type: "verse",
        arabic: "فَكَيْفَ إِذَا جِئْنَا مِن كُلِّ أُمَّةٍ بِشَاهِدٍ وَجِئْنَا بِكَ عَلَىٰ هَٰؤُلَاءِ شَاهِدًا",
        translation: "Maka bagaimanakah (halnya orang-orang kafir nanti), apabila kami mendatangkan seseorang saksi (rasul) dari tiap-tiap umat dan Kami mendatangkan kamu (Muhammad) sebagai saksi atas mereka itu (sebagai umatmu).",
        reference: "QS. An-Nisa'/4: 41",
      },
      {
        type: "paragraph",
        text: "Interpretasi lain dari Mujahid: 'imam' berarti 'kitab mereka' (kitab catatan amal). 'Abdur-Razzâq dari al-Hasan mengatakan bahwa 'imam' berarti kitab yang mencatat perbuatan mereka.",
      },
      {
        type: "verse",
        arabic: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ",
        translation: "Dan segala sesuatu Kami kumpulkan dalam Kitab Induk yang nyata (Lauh Mahfuzh).",
        reference: "QS. Yasin/36: 12",
      },
      {
        type: "verse",
        arabic: "وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَا وَيْلَتَنَا مَا لِهَٰذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا ۚ وَوَجَدُوا مَا عَمِلُوا حَاضِرًا ۗ وَلَا يَظْلِمُ رَبُّكَ أَحَدًا",
        translation: "Dan diletakkanlah kitab, lalu kamu akan melihat orang-orang yang bersalah ketakutan terhadap apa yang (tertulis) di dalamnya, dan mereka berkata: 'Aduhai celaka kami, kitab apakah ini yang tidak meninggalkan yang kecil dan tidak (pula) yang besar, melainkan ia mencatat semuanya'; dan mereka dapati apa yang telah mereka kerjakan ada (tertulis). Dan Rabbmu tidak menganiaya seorang jua pun.",
        reference: "QS. Al-Kahfi/18: 49",
      },
      {
        type: "verse",
        arabic: "وَتَرَى كُلَّ أُمَّةٍ جَاثِيَةً ۚ كُلُّ أُمَّةٍ تُدْعَىٰ إِلَىٰ كِتَابِهَا ۚ الْيَوْمَ تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ ﴿٢٨﴾ هَٰذَا كِتَابُنَا يَنطِقُ عَلَيْكُم بِالْحَقِّ ۚ إِنَّا كُنَّا نَسْتَنسِخُ مَا كُنتُمْ تَعْمَلُونَ",
        translation: "Dan (pada hari itu) kamu lihat tiap-tiap umat berlutut. Tiap-tiap umat dipanggil untuk (melihat) buku catatan amalnya. Pada hari itu kamu diberi balasan terhadap apa yang telah kamu kerjakan. (Allah berfirman): 'Inilah kitab (catatan) Kami yang menuturkan terhadapmu dengan benar. Sesungguhnya Kami telah menyuruh mencatat apa yang telah kamu kerjakan'.",
        reference: "QS. Al-Jatsiyah/45: 28-29",
      },
      {
        type: "paragraph",
        text: "Tidak ada yang bisa membantah kewajiban untuk menyaksikan keislaman kita oleh seorang Imam/Muslim yang programnya melanjutkan misi para rasul (42:13). Kita harus menyaksikan dua kalimat syahadat di hadapan hamba-hamba yang beriman.",
      },
      {
        type: "paragraph",
        text: "De' FAD-LILLAH, Shafar 1444 H",
      },
    ],
  },
  {
    slug: "umat-teladan-yang-tidak-meneladani",
    title: "Umat Teladan .. Yang Tidak Meneladani ..",
    date: "18 Januari 2023",
    category: "Dakwah",
    author: "De' FAD-LILLAH",
    content: [
      {
        type: "paragraph",
        text: "Sahabat — Saya membuka Al-Qur'an surat Ali Imran ayat 110, di mana Allah berfirman tentang umat Muslim sebagai umat terbaik yang dilahirkan untuk umat manusia. Kemudian Al-Ahzab 21, di mana Allah menyatakan Nabi Muhammad ﷺ sebagai uswah (teladan) bagi umatnya.",
      },
      {
        type: "paragraph",
        text: "Lalu saya bertanya-tanya: mengapa umat ini — yang dibentuk sebagai Khair Ummat dan diberikan nabi terbaik sebagai teladan — belum menjadi teladan di muka bumi?",
      },
      {
        type: "verse",
        arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
        translation: "Dan tiadalah Kami mengutus kamu, melainkan untuk (menjadi) rahmat bagi semesta alam.",
        reference: "QS. Al-Anbiya'/21: 107",
      },
      {
        type: "paragraph",
        text: "Apakah dunia telah merasakan rahmat Allah melalui pekerjaan orang-orang Muslim hari ini? Apakah dunia telah merasakan rahmat Allah melalui teladan akhlak kaum muslimin?",
      },
      {
        type: "paragraph",
        text: "Saya teringat kualitas-kualitas Nabi: berbicara dengan lembut dan menyejukkan, menyebarkan cinta tanpa menyimpan dendam, mempersaudarakan Muhajirin dan Anshar, membangun masjid dan mengisinya dengan ibadah, menaklukkan musuh melalui kedamaian dan keadilan, menjadikan Islam mudah dan menyenangkan, serta mengamalkan seluruh Al-Qur'an dalam perkataan, penglihatan, dan perbuatan.",
      },
      {
        type: "paragraph",
        text: "Namun umat ini masih belum menjadi teladan atau meneladani. Kita hanya bisa bertanya kepada diri sendiri.",
      },
      {
        type: "paragraph",
        text: "TAFDAQUR bulan Shafar — berusaha meneladani uswah Nabi.",
      },
      {
        type: "paragraph",
        text: "De' FAD-LILLAH",
      },
    ],
  },
  {
    slug: "3-nilai-hamba-allah-di-balik-musibah",
    title: "3 Nilai Hamba Allah di Balik Musibah",
    date: "17 Januari 2023",
    category: "Tafsir",
    author: "ACEH (Dinas Syari'at Islam Pidie)",
    content: [
      {
        type: "paragraph",
        text: "Bismillahirrahmanirrahim — Musibah dalam kehidupan adalah bagian dari taqdir Allah. Tidak ada yang dapat menghalangi kehendak Allah. Tidak ada bencana yang terjadi kecuali dengan izin Allah — barangsiapa yang beriman kepada hal ini, maka Allah akan menambah petunjuk dan menenangkan hatinya.",
      },
      {
        type: "verse",
        arabic: "مَن يُطِعِ اللَّهَ فَقَدْ هَدَىٰ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        translation: "Barangsiapa yang mentaati Allah, maka sesungguhnya dia telah diberi jalan yang lurus.",
        reference: "QS. At-Taghabun: 11",
      },
      {
        type: "heading",
        text: "Tiga Alasan Mengapa Kita Tidak Boleh Mengeluh",
      },
      {
        type: "paragraph",
        text: "Pertama: Allah telah mengenakan pakaian-pakaian keberadaan pada manusia yang menjadi indikator kekuasaan-Nya dalam menciptakan. Dia menciptakan manusia dengan 'model-model' pakaian eksistensi yang diubah, dimodifikasi untuk memanifestasikan keberagaman Asmaul Husna. Nama-Nya 'Asy-Syafi' (Yang Maha Penyembuh) membutuhkan penyakit; 'Ar-Razzaq' (Yang Maha Pemberi Rezeki) membutuhkan kelaparan. Allah melakukan apa yang Dia kehendaki dalam kerajaan-Nya.",
      },
      {
        type: "paragraph",
        text: "Kedua: Kehidupan menjadi jelas melalui musibah dan cobaan, menjadi suci melalui penyakit dan bencana. Semua ini memungkinkan kehidupan mencapai kesempurnaan, kekuatan, produktivitas, dan tujuannya. Kehidupan monoton yang selalu senang lebih dekat kepada 'ketiadaan' — kejahatan mutlak — daripada kepada 'keberadaan' — kebaikan mutlak.",
      },
      {
        type: "paragraph",
        text: "Ketiga: Dunia adalah ladang ujian dan cobaan — tempat untuk beramal dan beribadah, bukan tempat rekreasi atau pahala. Selama dunia adalah untuk ibadah, maka penyakit dan cobaan (selain yang berkaitan dengan agama, dan ketika diterima dengan sabar) selaras dengan ibadah. Mereka menguatkan amalan dan mengintensifkan ibadah.",
      },
      {
        type: "paragraph",
        text: "Oleh karena itu, mengeluh dilarang; kita seharusnya bersyukur, karena penyakit dan musibah mengubah setiap jam kehidupan orang yang tertimpa menjadi penuh ibadah selama sehari penuh.",
      },
      {
        type: "paragraph",
        text: "Berdasarkan pemikiran Said Nursi dari karya Al-Lama'at. Reposted from Dinas Syari'at Islam Pidie, Aceh.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
