// src/app/page.tsx
import { getRelevantRecommendations } from "@/lib/network-catalog";
import { NetworkCard } from "@/components/shared/NetworkCard";

export default function Home() {
  // Menggunakan 'website' sebagai konteks sampel untuk demonstrasi starterkit
  const recommendations = getRelevantRecommendations("website");

  return (
    <main className="min-h-screen bg-white">

      {/* 1. Minimal Placeholder Content (Bukti bahwa area konten berfungsi) */}
      <section className="py-24 md:py-32 text-center">
        <div className="mx-auto max-w-content px-6">
          <h1 className="text-4xl font-bold tracking-tight text-bumiversa-900 mb-4">
            JALA NODE
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ini adalah placeholder minimal untuk membuktikan bahwa fondasi starterkit telah terpasang dengan benar. Narasi, section, dan konten spesifik akan dikonfigurasi saat node ini dikembangkan.
          </p>
        </div>
      </section>

      {/* 2. Network Section Demonstration (Bukti bahwa Network Foundation berfungsi) */}
      {recommendations.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-100 py-20 md:py-24">
          <div className="mx-auto max-w-content px-6">
            <div className="mb-10 max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Jaringan BUMIVERSA
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-bumiversa-900 md:text-3xl">
                Jelajahi Node Lainnya
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {recommendations.map((node, index) => (
                <NetworkCard
                  key={node.id}
                  node={node}
                  currentContext="website"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
