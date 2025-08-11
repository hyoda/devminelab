import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { OrganizationStructuredData, PersonStructuredData, WebSiteStructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "서로학교 | 6년간 브레인스토밍 활동과 지역혁신 모델 분석",
  description: "서로학교의 6년간 브레인스토밍 및 난상토론 활동과 남해 워케이션 실험 사례를 통한 지역 혁신 모델. 제3자 관점에서 살펴본 협력적 학습 공동체의 연구 결과를 제시합니다.",
  keywords: ["서로학교", "브레인스토밍", "난상토론", "스위칭 허브", "남해 워케이션", "지역혁신", "협력적 학습", "공동체 교육"],
  authors: [{ name: "서로학교", url: "https://seoro.school" }],
  creator: "서로학교",
  publisher: "서로학교",
  openGraph: {
    title: "서로학교 | 스위칭 허브와 지역혁신",
    description: "서로학교의 6년간 스위칭 허브 활동과 남해 워케이션 실험 사례. 협력적 학습을 통한 지역 혁신의 새로운 가능성을 살펴봅니다.",
    url: "https://seoro.school",
    siteName: "서로학교",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "서로학교 - 브레인스토밍과 지역혁신",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서로학교 | 스위칭 허브와 지역혁신",
    description: "서로학교의 6년간 브레인스토밍 활동과 남해 지역 혁신 모델 연구",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${notoSansKR.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Structured Data for SEO */}
          <OrganizationStructuredData />
          <PersonStructuredData />
          <WebSiteStructuredData />
          
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
