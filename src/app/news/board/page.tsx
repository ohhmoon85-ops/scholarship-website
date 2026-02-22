import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "이사회 결과 | 한영자 희망 장학재단",
};

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Board Results</p>
            <h1 className="text-3xl font-bold text-white font-heading">이사회 결과</h1>
            <p className="mt-2 text-sm text-white/50">이사회 개최 결과 및 의결 사항을 공개합니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-100 mb-6">
            <Construction className="h-9 w-9 text-navy-400" />
          </div>
          <h2 className="text-xl font-bold text-navy-900 font-heading mb-3">페이지 준비 중</h2>
          <p className="text-[15px] text-navy-500 leading-relaxed max-w-sm">
            이사회 결과 공개 페이지를 준비하고 있습니다.<br />
            재단 법인 설립 및 첫 이사회 개최 후 게시될 예정입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/news/notice"
              className="rounded-full bg-navy-900 text-white text-[14px] font-semibold px-6 py-3 hover:bg-navy-800 transition-colors"
            >
              공지사항 보기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
