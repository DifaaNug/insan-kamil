"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn, signOut, auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function login(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Email atau password salah" };
  }
}

export async function logout() {
  await signOut({ redirect: false });
  revalidatePath("/");
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user || null;
}

export async function register(email: string, password: string, name: string) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "Email sudah terdaftar" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "ADMIN",
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Gagal membuat akun" };
  }
}
