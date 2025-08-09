import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "데브마인랩 - AI 기반 비즈니스 자동화 솔루션",
  description: "AI 기술을 활용한 실전 비즈니스 자동화 솔루션을 제공하는 데브마인랩입니다. 업무 자동화, AI 컨설팅, 디지털 전환 서비스를 통해 비즈니스 혁신을 지원합니다.",
  keywords: "AI, 업무자동화, 비즈니스솔루션, 디지털전환, 데브마인랩",
  openGraph: {
    title: "데브마인랩 - AI 기반 비즈니스 자동화 솔루션",
    description: "AI 기술을 활용한 실전 비즈니스 자동화 솔루션을 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
