// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-bumiversa-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-850 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Mungkin halaman yang Anda cari sedang dalam pengembangan, atau tautan yang Anda klik sudah tidak aktif.
          Kembali ke beranda untuk menjelajahi layanan kami.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-bumiversa-900 hover:bg-bumiversa-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
