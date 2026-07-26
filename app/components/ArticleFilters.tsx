"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const categories = [
  { value: "", label: "Semua Kategori" },
  { value: "Tafsir", label: "Tafsir" },
  { value: "Dakwah", label: "Dakwah" },
  { value: "Ukhuwah", label: "Ukhuwah" },
];

function FiltersContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState(currentSearch);

  // Update URL when search changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      // Reset to page 1 when searching
      params.delete("page");

      router.push(`/artikel?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, router, searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    // Reset to page 1 when filtering
    params.delete("page");

    router.push(`/artikel?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="flex-1 relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Cari artikel..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleCategoryChange(cat.value)}
            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              currentCategory === cat.value
                ? "bg-primary text-white"
                : "bg-white text-foreground hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ArticleFilters() {
  return (
    <Suspense fallback={
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 h-12 bg-gray-100 rounded-xl animate-pulse" />
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-24 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    }>
      <FiltersContent />
    </Suspense>
  );
}
