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

  // Create sample articles
  const articles = [
    {
      slug: "mensyukuri-nikmat-islam",
      title: "Mensyukuri Nikmat Islam Yang Allah Subhanahu Wa Ta'ala Karuniakan Kepada Kita",
      category: "Tafsir",
      authorName: "De' FAD-LILLAH",
      content: [
        {
          type: "paragraph",
          text: "Yaa Ikhawanii rahimakumullah — Allah Azza wa Jalla berfirman:",
        },
        {
          type: "verse",
          arabic: "فَمَن يُرِدِ اللَّهُ أَن يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ",
          translation: "Barangsiapa dikehendaki Allah akan mendapat hidayah, Dia akan membukakan dadanya untuk Islam.",
          reference: "QS. Al-An'am: 125",
        },
      ],
    },
    {
      slug: "nikmat-yang-sesungguhnya",
      title: "Nikmat Yang Sesungguhnya,!",
      category: "Dakwah",
      authorName: "musyafir da'wah",
      content: [
        {
          type: "paragraph",
          text: "Sayyidina Ali bin Abi Thalib berkata: Dari sekian banyak nikmat dunia, cukuplah Islam sebagai nikmat bagimu.",
        },
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
