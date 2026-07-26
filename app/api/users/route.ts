import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/users - Ambil semua user (untuk ambil authorId)
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data user" },
      { status: 500 }
    );
  }
}
