import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

// 1. Fail-fast validation
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
if (!whatsappNumber) {
  throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is required in environment variables");
}

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "BUMIVERSA Node", template: "%s | BUMIVERSA" },
  description: "Sebuah node dalam ekosistem digital BUMIVERSA.",
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000'}`),
  alternates: { canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000'}` },
  openGraph: {
    title: "BUMIVERSA Node",
    description: "Sebuah node dalam ekosistem digital BUMIVERSA.",
    type: "website",
    locale: "id_ID",
    siteName: "BUMIVERSA",
  },
  icons: { icon: '/bumiversa_favicon.png', apple: '/bumiversa_favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-850 flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
