import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary islamic-pattern">
      <div className="text-center px-4">
        {/* Icon */}
        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V9a4 4 0 00-8 0v2m12 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2z"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-white mb-4 font-serif">403</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Akses Ditolak
        </h2>
        <p className="text-white/70 max-w-md mx-auto mb-8">
          Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.
          Silakan login dengan akun admin yang valid.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admin/login"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-300"
          >
            Login Admin
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
