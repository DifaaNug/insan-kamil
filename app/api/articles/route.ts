import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/articles - Ambil semua artikel
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category") || "";
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    // Build filter
    const where: Record<string, unknown> = {};

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { authorName: { contains: search, mode: "insensitive" } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where,
        orderBy: { date: "desc" },
        take: limit,
        skip,
        include: {
          author: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
      prisma.article.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil artikel" },
      { status: 500 }
    );
  }
}

// POST /api/articles - Buat artikel baru
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, category, authorName, content, image, authorId } = body;

    // Validasi
    if (!title || !slug || !category || !authorName || !content || !authorId) {
      return NextResponse.json(
        { success: false, error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // Cek slug unik
    const existing = await prisma.article.findUnique({
      where: { slug },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: "Slug sudah digunakan" },
        { status: 400 }
      );
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        category,
        authorName,
        content,
        image: image || null,
        authorId,
      },
    });

    return NextResponse.json(
      { success: true, data: article },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { success: false, error: "Gagal membuat artikel" },
      { status: 500 }
    );
  }
}
