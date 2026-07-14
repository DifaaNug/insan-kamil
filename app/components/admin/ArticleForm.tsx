"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ArticleContent {
  type: "paragraph" | "verse" | "heading";
  arabic?: string;
  translation?: string;
  reference?: string;
  text?: string;
}

interface ArticleFormProps {
  initialData?: {
    id: string;
    title: string;
    slug: string;
    category: string;
    authorName: string;
    content: ArticleContent[];
  };
  onSubmit: (data: {
    title: string;
    slug: string;
    category: string;
    authorName: string;
    content: ArticleContent[];
  }) => Promise<{ success: boolean; error?: string }>;
}

export default function ArticleForm({ initialData, onSubmit }: ArticleFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [category, setCategory] = useState(initialData?.category || "Tafsir");
  const [authorName, setAuthorName] = useState(initialData?.authorName || "");
  const [content, setContent] = useState<ArticleContent[]>(
    initialData?.content || [{ type: "paragraph", text: "" }]
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!initialData) {
      setSlug(generateSlug(value));
    }
  };

  const addContent = (type: ArticleContent["type"]) => {
    const newContent: ArticleContent = { type };
    if (type === "verse") {
      newContent.arabic = "";
      newContent.translation = "";
      newContent.reference = "";
    } else {
      newContent.text = "";
    }
    setContent([...content, newContent]);
  };

  const updateContent = (index: number, field: keyof ArticleContent, value: string) => {
    const newContent = [...content];
    newContent[index] = { ...newContent[index], [field]: value };
    setContent(newContent);
  };

  const removeContent = (index: number) => {
    setContent(content.filter((_, i) => i !== index));
  };

  const moveContent = (index: number, direction: "up" | "down") => {
    const newContent = [...content];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newContent.length) return;
    [newContent[index], newContent[newIndex]] = [newContent[newIndex], newContent[index]];
    setContent(newContent);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await onSubmit({
      title,
      slug,
      category,
      authorName,
      content,
    });

    if (result.success) {
      router.push("/admin/artikel");
      router.refresh();
    } else {
      setError(result.error || "Gagal menyimpan artikel");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground mb-4 font-serif">Informasi Dasar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">
              Judul Artikel *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Masukkan judul artikel"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Slug *
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="judul-artikel"
              required
            />
            <p className="text-xs text-muted mt-1">
              URL: /artikel/{slug || "judul-artikel"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Kategori *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              required
            >
              <option value="Tafsir">Tafsir</option>
              <option value="Dakwah">Dakwah</option>
              <option value="Ukhuwah">Ukhuwah</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Penulis *
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Nama penulis"
              required
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground font-serif">Konten Artikel</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => addContent("paragraph")}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              + Paragraf
            </button>
            <button
              type="button"
              onClick={() => addContent("verse")}
              className="px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              + Ayat
            </button>
            <button
              type="button"
              onClick={() => addContent("heading")}
              className="px-3 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors"
            >
              + Judul
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {content.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                item.type === "verse"
                  ? "border-primary/30 bg-primary/5"
                  : item.type === "heading"
                  ? "border-blue-300 bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted capitalize">
                  {item.type === "verse" ? "Ayat" : item.type === "heading" ? "Judul" : "Paragraf"}
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => moveContent(index, "up")}
                    disabled={index === 0}
                    className="p-1 text-muted hover:text-foreground disabled:opacity-30"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => moveContent(index, "down")}
                    disabled={index === content.length - 1}
                    className="p-1 text-muted hover:text-foreground disabled:opacity-30"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeContent(index)}
                    className="p-1 text-red-500 hover:text-red-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {item.type === "verse" ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-muted mb-1">Teks Arab</label>
                    <textarea
                      value={item.arabic || ""}
                      onChange={(e) => updateContent(index, "arabic", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-right font-arabic"
                      dir="rtl"
                      rows={2}
                      placeholder="اَلْبَسْمَة"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1">Terjemahan</label>
                    <textarea
                      value={item.translation || ""}
                      onChange={(e) => updateContent(index, "translation", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none italic"
                      rows={2}
                      placeholder="Terjemahan ayat"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1">Referensi</label>
                    <input
                      type="text"
                      value={item.reference || ""}
                      onChange={(e) => updateContent(index, "reference", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="QS. Al-Baqarah: 255"
                    />
                  </div>
                </div>
              ) : item.type === "heading" ? (
                <input
                  type="text"
                  value={item.text || ""}
                  onChange={(e) => updateContent(index, "text", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold"
                  placeholder="Judul section"
                />
              ) : (
                <textarea
                  value={item.text || ""}
                  onChange={(e) => updateContent(index, "text", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  rows={4}
                  placeholder="Tulis konten artikel di sini..."
                />
              )}
            </div>
          ))}
        </div>

        {content.length === 0 && (
          <div className="text-center py-8 text-muted">
            <p>Belum ada konten. Klik tombol di atas untuk menambahkan.</p>
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : initialData ? "Update Artikel" : "Simpan Artikel"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-gray-300 text-foreground font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
