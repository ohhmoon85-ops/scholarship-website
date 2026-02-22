import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

/**
 * Pretendard Variable — 본문 기본 폰트
 * 한국어에 최적화된 산세리프. 가독성과 신뢰감을 동시에 제공합니다.
 */
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
  preload: true,
});

/**
 * Noto Serif KR — 제목(heading) 전용 폰트
 * 격식 있는 세리프체로 장학재단의 권위와 신뢰감을 표현합니다.
 */
const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "장학재단",
    template: "%s | 장학재단",
  },
  description:
    "미래의 인재를 키우는 장학재단입니다. 꿈을 향한 여러분의 도전을 응원합니다.",
  keywords: ["장학재단", "장학금", "장학생 모집", "교육 지원"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "장학재단",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${notoSerifKR.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
