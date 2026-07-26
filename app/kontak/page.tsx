"use client";

import Link from "next/link";
import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    situs: "",
    komentar: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ nama: "", email: "", situs: "", komentar: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-serif">Kontak</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2 font-serif">
              Terima kasih atas tanggapan Anda. ✨
            </h2>
            <p className="text-muted mb-6">
              Pesan Anda telah berhasil dikirim.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
            >
              Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
              Kirim Pesan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-foreground mb-2">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="situs" className="block text-sm font-medium text-foreground mb-2">
                  Situs Web
                </label>
                <input
                  type="url"
                  id="situs"
                  value={formData.situs}
                  onChange={(e) => setFormData({ ...formData, situs: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="https://"
                />
              </div>

              <div>
                <label htmlFor="komentar" className="block text-sm font-medium text-foreground mb-2">
                  Komentar <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="komentar"
                  value={formData.komentar}
                  onChange={(e) => setFormData({ ...formData, komentar: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Kirim
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
