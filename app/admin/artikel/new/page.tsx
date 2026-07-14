import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { createArticle } from "@/app/actions/articles";
import ArticleForm from "@/app/components/admin/ArticleForm";

export default async function NewArticlePage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const handleSubmit = async (data: {
    title: string;
    slug: string;
    category: string;
    authorName: string;
    content: any[];
  }) => {
    "use server";
    const result = await createArticle(data, session.user.id);
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
