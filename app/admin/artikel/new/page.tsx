import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { createArticle, type ArticleContent } from "@/app/actions/articles";
import ArticleForm from "@/app/components/admin/ArticleForm";

export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  const userId = session.user.id!;

  const handleSubmit = async (data: {
    title: string;
    slug: string;
    category: string;
    authorName: string;
    content: ArticleContent[];
  }) => {
    "use server";
    const result = await createArticle(data, userId);
    return result || { success: true };
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground font-serif">
          Artikel Baru
        </h1>
        <p className="text-muted mt-2">Buat artikel baru untuk website</p>
      </div>

      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
}
