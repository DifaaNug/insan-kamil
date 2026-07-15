import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const imageMap: Record<string, string> = {
  // 2024
  "mensyukuri-nikmat-islam": "https://insankamilbabel.wordpress.com/wp-content/uploads/2024/12/462621479_516747494455861_996110055708457861_n-2.jpg?w=720",
  // 2023
  "nikmat-yang-sesungguhnya": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/04/dscf1568.jpg?w=1024",
  "adakah-musholla-di-rumah-kita": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_4372.jpg?w=1024",
  "pohon-kehidupan-kita": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_3004.jpg?w=1024",
  "al-ukhuwah-al-islamiyah": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/34984843_2189448661066094_2471734484639154176_n.jpg?w=960",
  "emang-penting-islam-punya-pemimpin": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/pemimpin.jpg?w=750",
  "umat-teladan-yang-tidak-meneladani": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/teladan.jpg?w=492",
  "3-nilai-hamba-allah-di-balik-musibah": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/1027_121704_edbd_inilah.com_.jpg?w=612",
  "mustadafiin-fil-ardh": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/wahyu.jpg?w=640",
  "liqaa-rabbahu": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/sdfsgfsd.jpg?w=630",
  "kebaikan-dan-keburukan": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/307150971_8315141545163411_7774434314541632063_n.jpg?w=945",
  "antara-kufur-dan-iman": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/316424083_8657437567600472_1753682895156738591_n.jpg?w=720",
  "antara-keberkahan-dan-kebinasaan": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/06/gunung-bromo1.jpg?w=600",
  "kaum-iblis-musuh-yang-nyata": "https://insankamilbabel.wordpress.com/wp-content/uploads/2019/02/sedekah-ilmu.jpg?w=600",
  "manusia-terbaik": "https://insankamilbabel.wordpress.com/wp-content/uploads/2019/02/20180525_064615.jpg?w=600",
  // 2019
  "hati-yang-memberontak": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/12/ALLAH-islam-25006535-1600-1200.jpg?w=600",
  "prioritas-ilmu-atas-amal": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/01/foto-kakab-doa-ketika-melihat-kakbah.jpg?w=600",
  "nimat-iman-hijrah-jihad": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/03/masyarakat-islam-di-kiruna-sweden-berpuasa-selama-24-jam.jpg?w=600",
  "bertaawuzd-dari-keraguan": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/06/depresyon-ve-ruh-hali.jpg?w=400",
  // 2018
  "memburu-janji-allah": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/www-dialogilmu-com-taufiq-hidayah-inayah.jpg?w=600",
  "jangan-khawatirkan-islam": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/yabi.jpg?w=600",
  "kecerdasan-iman": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/images-21.jpg?w=436",
  "hidup-dan-menerangi": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/1472897_691649024179406_1319078038_n.jpg?w=381",
  "kita-semicolon-berbuat-kesalahan": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/01/images.jpg?w=225",
  "syarat-syarat-hidayah-bag2": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/08/dsc_04991.jpg?w=600",
  "seru-sebar-shadaqah": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/yabi.jpg?w=600",
  "syarat-syarat-hidayah-bag1": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/08/dsc_04991.jpg?w=600",
  "menatap-rezeki-ilahi": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/01/images.jpg?w=225",
  "kader-pemenang-tahun-baru-1440": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/11/yabi.jpg?w=600",
  "karakteristik-manhaj-rasulullah-makkah-bag2": "https://insankamilbabel.wordpress.com/wp-content/uploads/2018/08/cropped-islam-3584.jpg?w=366",
};

async function main() {
  console.log("🖼️ Updating article images...");

  let updated = 0;
  for (const [slug, image] of Object.entries(imageMap)) {
    const result = await prisma.article.updateMany({
      where: { slug },
      data: { image },
    });
    if (result.count > 0) updated++;
    console.log(`✅ ${slug}: ${result.count} updated`);
  }

  console.log(`\n🖼️ Done! Updated ${updated} articles`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
