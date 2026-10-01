// src/lib/content.ts (Jala #04: AI Sales Worker)

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
if (!whatsappNumber) {
  throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is required in environment variables");
}

export const siteConfig = {
  name: "BUMIVERSA AI Sales",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "ai-sales.bumiversa.dev",
  whatsappNumber,
};

export const pageContent = {
  hero: {
    eyebrow: "AI SALES & AUTOMATION",
    headline: "Respon Cepat, Kualifikasi Terstruktur, Serahkan ke Manusia saat Tepat.",
    subheadline: "Sistem AI Sales Worker kami dirancang untuk menangani interaksi awal prospek Anda. Ia merespons, mengajukan pertanyaan terstruktur, dan meneruskan konteks percakapan ke tim Anda—sehingga Anda tidak kehilangan momentum.",
    ctaText: "Diskusikan Kebutuhan Automasi Anda",
  },
  problem: {
    title: "Di Mana Proses Penjualan Anda Sering Kehilangan Momentum?",
    points: [
      "Prospek menghubungi di luar jam kerja dan tidak mendapat respon hingga keesokan harinya.",
      "Tim sales menghabiskan waktu berharga hanya untuk menyaring pertanyaan dasar, bukan fokus pada closing.",
      "Informasi penting dari prospek sering terlewat atau tidak terdokumentasi dengan rapi sebelum diserahkan ke manusia.",
    ]
  },
  process: {
    title: "Mekanisme Kerja: Dari Interaksi Awal hingga Serah Terima.",
    steps: [
      {
        number: "01",
        title: "Tangkap (Capture)",
        desc: "Sistem merespons interaksi awal prospek secara instan, memastikan tidak ada pertanyaan yang menguap tanpa jawaban."
      },
      {
        number: "02",
        title: "Kualifikasi (Qualify)",
        desc: "AI mengajukan serangkaian pertanyaan terstruktur untuk memahami kebutuhan dasar dan memetakan tingkat urgensi prospek."
      },
      {
        number: "03",
        title: "Respon & Rekomendasi (Respond)",
        desc: "Memberikan informasi relevan berdasarkan basis pengetahuan yang telah kita siapkan, atau merekomendasikan langkah selanjutnya yang paling masuk akal."
      },
      {
        number: "04",
        title: "Serahkan ke Manusia (Handoff)",
        desc: "Ketika percakapan mencapai titik yang membutuhkan empati, negosiasi, atau keputusan strategis, sistem meneruskan seluruh riwayat konteks ke tim Anda."
      }
    ]
  },
  boundary: {
    title: "Batasan & Ekspektasi yang Jelas.",
    willGet: [
      "Respon awal yang cepat dan konsisten untuk setiap prospek yang masuk.",
      "Penyaringan dan dokumentasi alur percakapan yang terstruktur.",
      "Sistem yang bekerja dalam parameter dan basis pengetahuan yang telah kita tetapkan bersama."
    ],
    willNot: [
      "Menggantikan peran manusia dalam negosiasi kompleks atau pengambilan keputusan strategis.",
      "Beroperasi di luar batas pengetahuan atau skenario yang belum kita konfigurasi.",
      "Memberikan jaminan konversi angka tertentu, karena hasil akhir tetap bergantung pada kualitas produk dan layanan Anda."
    ]
  },
  finalCta: {
    headline: "Mari Petakan Apakah Automasi Ini Cocok untuk Alur Kerja Anda.",
    subheadline: "Tidak semua bisnis membutuhkan AI Sales Worker. Mari kita diskusikan alur penjualan Anda saat ini, dan kami akan berikan rekomendasi yang jujur: apakah Anda butuh ini, atau cukup dengan perbaikan proses yang lebih sederhana.",
    buttonText: "Mulai Sesi Discovery via WhatsApp",
  }
};
