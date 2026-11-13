import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="max-w-7xl w-full h-28.25 mx-auto px-5 md:px-8 flex flex-row justify-between items-center border-t border-[#E2E2DA] bg-[#FAF9F6] ">
          <div>
            <p className="flex flex-row text-3xl font-bold ">
              the daily <span className="pl-2 text-red-500">▧</span>
            </p>
            <p className="text-[#65675F] text-xs  ">A fresh perspective. Every day.</p>
          </div>
          <Link href="#main" className="text-xs text-[#22241F] ">
            Back to top ↑
          </Link>
        </footer>
      </body>
    </html>
  );
}
