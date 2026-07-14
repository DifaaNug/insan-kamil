import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { getArticleById, updateArticle } from "@/app/actions/articles";
import ArticleForm from "@/app/components/admin/ArticleForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: PageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  const handleSubmit = async (data: {
    title: string;
    slug: string;
    category: string;
    authorName: string;
    content: any[];
  }) => {
    "use server";
    const result = await updateArticle(id, data);
    return result || { success: true };
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground font-serif">
          Edit Artikel
        </h1>
        <p className="text-muted mt-2">Edit artikel: {article.title}</p>
      </div>

      <ArticleForm
        initialData={{
          id: article.id,
          title: article.title,
          slug: article.slug,
          category: article.category,
          authorName: article.authorName,
          content: article.content as any[],
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
