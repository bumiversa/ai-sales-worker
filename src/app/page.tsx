// src/app/page.tsx
import { pageContent, siteConfig } from "@/lib/content";
import { getRelevantRecommendations } from "@/lib/network-catalog";
import { NetworkCard } from "@/components/shared/NetworkCard";

export default function Home() {
  const whatsappMessage = `Halo ${siteConfig.name}, saya mengunjungi halaman AI Sales Worker. ${pageContent.finalCta.buttonText}`;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Menggunakan 'website' sebagai konteks sementara karena katalog starterkit belum memiliki key 'ai-sales'
  const recommendations = getRelevantRecommendations("website");

  return (
    <main className="min-h-screen bg-white">

      {/* 1. HERO SECTION: AI Sales Worker Product Visualization */}
      <section className="relative bg-navy-grid py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-content px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* KOLOM KIRI: Positioning & Narrative */}
            <div className="flex-1 text-center lg:text-left">
              <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.25em] text-accent md:text-xs">
                {pageContent.hero.eyebrow}
              </span>

              <h1 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
                AI Sales Worker untuk Percakapan yang Tidak Berhenti di Respons.
              </h1>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl mx-auto lg:mx-0">
                Menangani interaksi awal, menggali kebutuhan, memberikan respons berdasarkan konteks yang disiapkan, lalu melibatkan manusia ketika percakapan membutuhkan keputusan strategis.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-bumiversa-900 shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-yellow-500 hover:shadow-accent/40"
              >
                {pageContent.hero.ctaText}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            {/* KOLOM KANAN: Conceptual Product Visualization */}
            <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
              <div className="relative rounded-2xl border border-white/10 bg-bumiversa-900/80 backdrop-blur-sm p-6 shadow-2xl shadow-black/50">

                {/* 1. Conversation & Intelligence */}
                <div className="space-y-4 mb-6">
                  {/* User Bubble (FIXED LINT) */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-t-2xl rounded-bl-2xl rounded-br-sm bg-white/10 p-4 text-sm text-white/90">
                      &quot;Saya butuh pupuk organik untuk lahan sekitar 2 hektar. Bisa dikirim minggu depan?&quot;
                    </div>
                  </div>

                  {/* AI Bubble */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-t-2xl rounded-br-2xl rounded-bl-sm border border-accent/20 bg-accent/5 p-4 text-sm text-white/90 motion-safe:animate-pulse [animation-duration:4s]">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent/80">
                          AI Sales Worker
                        </span>
                      </div>
                      <p className="mb-2">Baik, saya catat kebutuhannya. Untuk memastikan rekomendasi yang tepat, boleh saya tahu:</p>
                      <ul className="list-disc list-inside space-y-1 text-white/70">
                        <li>Jenis tanaman apa yang sedang Anda kelola?</li>
                        <li>Apakah ada preferensi merek atau kandungan spesifik?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. Context Panel */}
                <div className="mb-6 rounded-lg border-t-2 border-accent bg-white/5 p-4">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Context Extracted (Qualify)
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div><span className="block text-white/40 mb-1">Kebutuhan</span><span className="font-medium text-white">Pupuk Organik</span></div>
                    <div><span className="block text-white/40 mb-1">Luas Lahan</span><span className="font-medium text-white">~2 Hektar</span></div>
                    <div><span className="block text-white/40 mb-1">Timeline</span><span className="font-medium text-white">Minggu Depan</span></div>
                    <div><span className="block text-white/40 mb-1">Status</span><span className="inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent">Qualifying</span></div>
                  </div>
                </div>

                {/* 3. Human Handoff */}
                <div className="flex items-center justify-center gap-3 rounded-lg border border-dashed border-white/20 bg-white/5 py-3 motion-safe:animate-pulse [animation-duration:5s]">
                  <div className="flex -space-x-2">
                    <div className="h-6 w-6 rounded-full border-2 border-bumiversa-900 bg-neutral-600" />
                    <div className="h-6 w-6 rounded-full border-2 border-bumiversa-900 bg-neutral-500" />
                  </div>
                  <div className="h-px w-8 bg-white/20" />
                  <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Human Handoff Initiated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-bumiversa-900 md:text-4xl">{pageContent.problem.title}</h2>
          <ul className="mx-auto max-w-3xl space-y-6">
            {pageContent.problem.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-neutral-600">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-16 text-center text-3xl font-bold text-bumiversa-900 md:text-4xl">{pageContent.process.title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pageContent.process.steps.map((step, i) => (
              <div key={i} className="relative rounded-lg border border-neutral-200 bg-neutral-50 p-8 transition-colors duration-300 hover:border-accent/30">
                <span className="absolute right-6 top-4 text-4xl font-bold text-accent/20">{step.number}</span>
                <h3 className="relative z-10 mb-3 text-xl font-semibold text-bumiversa-900">{step.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-neutral-600 md:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOUNDARY SECTION */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-bumiversa-900 md:text-4xl">{pageContent.boundary.title}</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-bumiversa-900"><span className="h-2 w-2 rounded-full bg-accent" />Yang Akan Anda Dapatkan:</h3>
              <ul className="space-y-4">
                {pageContent.boundary.willGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-500"><span className="h-2 w-2 rounded-full bg-neutral-300" />Yang Tidak Akan Kami Lakukan:</h3>
              <ul className="space-y-4">
                {pageContent.boundary.willNot.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-500">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="bg-navy-grid py-24 md:py-32 text-center">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{pageContent.finalCta.headline}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{pageContent.finalCta.subheadline}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-bumiversa-900 shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-yellow-500 hover:shadow-accent/40">
            {pageContent.finalCta.buttonText}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* 6. NETWORK SECTION (Digital Gotong Royong) */}
      {recommendations.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-100 py-20 md:py-24">
          <div className="mx-auto max-w-content px-6">
            <div className="mb-10 max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Jaringan BUMIVERSA</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-bumiversa-900 md:text-3xl">Satu pintu bisa membawa Anda ke pintu yang lain.</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">Jelajahi layanan lain dari ekosistem BUMIVERSA yang mungkin relevan dengan kebutuhan automasi dan pertumbuhan bisnis Anda.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {recommendations.map((node, index) => (
                <NetworkCard key={node.id} node={node} currentContext="website" index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
