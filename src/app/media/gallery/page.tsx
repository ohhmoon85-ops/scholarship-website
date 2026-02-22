import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "포토갤러리 | 한영자 희망 장학재단",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Photo Gallery</p>
            <h1 className="text-3xl font-bold text-white font-heading">포토갤러리</h1>
            <p className="mt-2 text-sm text-white/50">재단 행사 및 활동 사진을 공유합니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-100 mb-6">
            <Construction className="h-9 w-9 text-navy-400" />
          </div>
          <h2 className="text-xl font-bold text-navy-900 font-heading mb-3">페이지 준비 중</h2>
          <p className="text-[15px] text-navy-500 leading-relaxed max-w-sm">
            포토갤러리 페이지를 준비하고 있습니다.<br />
            2026년 재단 출범식 및 장학금 수여식 이후<br />
            사진 자료가 순차적으로 등록될 예정입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/media/youtube"
              className="rounded-full bg-navy-900 text-white text-[14px] font-semibold px-6 py-3 hover:bg-navy-800 transition-colors"
            >
              미디어 센터 보기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
