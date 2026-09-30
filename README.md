# BUMIVERSA Node Starter Kit

Fondasi produksi terstandarisasi untuk membangun node baru dalam ekosistem digital BUMIVERSA.

Starterkit ini menyediakan **"tulang"** — framework, konfigurasi, visual DNA, global frame, dan kontrak jaringan — sehingga pengembangan node dapat langsung berfokus pada **"jiwa"**: narasi, konten, dan presentasi spesifik node tersebut.

## ✨ Foundation

- **Next.js 16+** dengan App Router, TypeScript, dan Tailwind CSS v4.
- **Production Build** menggunakan Webpack (`next build --webpack`) untuk deployment yang telah terbukti kompatibel dengan lingkungan produksi BUMIVERSA.
- **Fail-Fast Environment** untuk memastikan `NEXT_PUBLIC_WHATSAPP_NUMBER` tersedia sebelum build produksi.
- **BUMIVERSA Visual DNA** dengan Deep Navy, Gold Accent, neutral palette, subtle grid, dan layout token.
- **Global Frame** melalui komponen `Header` dan `Footer`.
- **Network Foundation** melalui `network-catalog.ts` dan primitive `NetworkCard`.
- **UTM Tracking** pada navigasi antar-node.

## 🚀 Memulai Node Baru

### 1. Gunakan Template

Di GitHub, gunakan **Use this template** untuk membuat repository node baru.

Setelah repository baru dibuat:

```bash
git clone <repository-node-baru>
cd <repository-node-baru>
````

### 2. Instalasi Dependensi

```bash
npm install
```

### 3. Konfigurasi Environment

Salin `.env.example` menjadi `.env.local`:

```bash
cp .env.example .env.local
```

Kemudian isi:

```env
NEXT_PUBLIC_DOMAIN="node-anda.bumiversa.dev"
NEXT_PUBLIC_WHATSAPP_NUMBER="628xxxxxxxxxx"
```

Jangan commit `.env.local`.

### 4. Jalankan Development

```bash
npm run dev
```

### 5. Verifikasi Production Build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Pastikan seluruh pemeriksaan berhasil sebelum deployment.

## 🏗️ Arsitektur

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── shared/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── NetworkCard.tsx
│
└── lib/
    └── network-catalog.ts
```

### `src/app/layout.tsx`

Menangani:

* metadata global
* environment validation
* Header
* Footer
* global document frame

### `src/lib/network-catalog.ts`

Menyediakan kontrak data jaringan:

* `networkNodes`
* `NetworkNodeId`
* `getRelevantRecommendations()`

File ini merupakan **snapshot kontrak jaringan** yang digunakan oleh starterkit.

Jika struktur kontrak jaringan berubah, node-node yang menggunakannya perlu diselaraskan secara eksplisit.

### `src/components/shared/`

Berisi primitive yang dapat digunakan lintas-node:

* `Header`
* `Footer`
* `NetworkCard`

Starterkit tidak menentukan bagaimana primitive tersebut harus disusun menjadi sebuah halaman.

### `src/app/page.tsx`

Titik awal untuk membangun:

* narasi
* section
* layout
* presentation
* pengalaman pengguna

yang spesifik terhadap node.

## 🧭 Prinsip Pengembangan

> **Starterkit membawa tulang. JALA membawa jiwa.**

Starterkit hanya membawa foundation yang sudah terbukti.

Jangan memasukkan:

* narasi bisnis spesifik
* section spesifik sebuah node
* layout khusus satu node
* asumsi produk tertentu
* fitur eksperimental

Jika sebuah pola presentasi terbukti berguna pada beberapa node, evaluasi terlebih dahulu apakah pola tersebut layak menjadi primitive atau opsi foundation.

## 🔐 Environment

Environment produksi wajib menyediakan:

```env
NEXT_PUBLIC_DOMAIN="..."
NEXT_PUBLIC_WHATSAPP_NUMBER="..."
```

Starterkit sengaja menggunakan **fail-fast validation**.

Tidak ada fallback nomor WhatsApp fiktif yang boleh diam-diam masuk ke production.

## 🌐 Network Principle

BUMIVERSA menggunakan prinsip:

> **Data layer sama. Presentation layer berbeda.**

Setiap node dapat menjadi pintu masuk ke node lain yang relevan.

Namun tidak semua node harus menjadi pusat jaringan.

Starterkit menyediakan kontrak dasar agar setiap node dapat berpartisipasi dalam jaringan tanpa memaksakan satu bentuk presentasi.

## 🧪 Definition of Done

Sebelum sebuah node dianggap siap untuk deployment:

```text
npm run lint       → PASS
npx tsc --noEmit  → PASS
npm run build      → PASS
git diff --check   → CLEAN
working tree       → CLEAN
```

Deployment dan konfigurasi domain dilakukan setelah foundation dan node-specific implementation tervalidasi.

## 📜 Architecture Principle

**Starterkit membawa tulang.
JALA membawa jiwa.**

Build Once. Configure per Organization.
