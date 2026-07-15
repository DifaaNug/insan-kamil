import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const imageMap: Record<string, string> = {
  "mensyukuri-nikmat-islam": "https://insankamilbabel.wordpress.com/wp-content/uploads/2024/12/462621479_516747494455861_996110055708457861_n-2.jpg?w=720",
  "nikmat-yang-sesungguhnya": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/04/dscf1568.jpg?w=1024",
  "adakah-musholla-di-rumah-kita": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_4372.jpg?w=1024",
  "pohon-kehidupan-kita": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/02/100_3004.jpg?w=1024",
  "al-ukhuwah-al-islamiyah": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/34984843_2189448661066094_2471734484639154176_n.jpg?w=960",
  "emang-penting-islam-punya-pemimpin": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/pemimpin.jpg?w=750",
  "umat-teladan-yang-tidak-meneladani": "https://insankamilbabel.wordpress.com/wp-content/uploads/2023/01/teladan.jpg?w=492",
};

async function main() {
  console.log("🖼️ Updating article images...");

  for (const [slug, image] of Object.entries(imageMap)) {
    const result = await prisma.article.updateMany({
      where: { slug },
      data: { image },
    });
    console.log(`✅ ${slug}: ${result.count} updated`);
  }

  console.log("🖼️ Done!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
